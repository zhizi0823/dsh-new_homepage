// Static audit for the Observatory client module: locale coverage, icon
// coverage, and CSS block balance. Run with `node test/audit.mjs`.
import fs from 'node:fs';

const source = fs.readFileSync(new URL('../client.js', import.meta.url), 'utf8');
const failures = [];

const block = (start, end) => {
  const from = source.indexOf(start);
  if (from < 0) throw new Error('cannot find ' + start);
  const to = source.indexOf(end, from + start.length);
  if (to < 0) throw new Error('cannot close ' + start);
  return source.slice(from, to);
};
const keysOf = (text) =>
  new Set([...text.matchAll(/^\s{6}([a-z_0-9]+):/gm)].map((match) => match[1]));

const zh = keysOf(block('const ZH = {', 'const EN = {'));
const en = keysOf(block('const EN = {', 'const EMPTY_SNAPSHOT'));

const used = new Set([...source.matchAll(/tr\('([a-z_0-9]+)'\)/g)].map((match) => match[1]));
// Composed at runtime from the theme preference.
for (const key of ['pref_system', 'pref_light', 'pref_dark']) used.add(key);

for (const key of used) {
  if (!zh.has(key)) failures.push('zh missing key: ' + key);
  if (!en.has(key)) failures.push('en missing key: ' + key);
}
for (const key of zh) {
  if (!used.has(key)) failures.push('zh unused key: ' + key);
  if (!en.has(key)) failures.push('en missing key: ' + key);
}
for (const key of en) if (!zh.has(key)) failures.push('zh missing key: ' + key);

const icons = new Set([...block('const ICONS = {', '};').matchAll(/^\s{6}([a-z]+):/gm)].map((m) => m[1]));
for (const match of source.matchAll(/icon: '([a-z]+)'/g)) {
  if (!icons.has(match[1])) failures.push('action uses unknown icon: ' + match[1]);
}
const usedIcons = new Set([...source.matchAll(/icon: '([a-z]+)'/g)].map((m) => m[1]));
for (const key of icons) if (!usedIcons.has(key)) failures.push('unused icon: ' + key);

const css = block('const CSS = `', '`;');
const open = (css.match(/\{/g) || []).length;
const close = (css.match(/\}/g) || []).length;
if (open !== close) failures.push('CSS braces unbalanced: ' + open + ' vs ' + close);
const glued = /\}[ \t]*\.[a-z][a-z0-9-]*[ \t]*\{/.exec(css);
if (glued) failures.push('CSS rule glued onto a previous line: ' + JSON.stringify(css.slice(glued.index - 40, glued.index + 60)));

const names = new Set([...source.matchAll(/className: '([^']+)'/g)].map((m) => m[1]));
for (const name of names) {
  if (!css.includes('.' + name.split(' ')[0])) failures.push('className without CSS rule: ' + name);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log('audit OK: ' + used.size + ' locale keys, ' + icons.size + ' icons, ' + open + ' css rules');
