const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const upload = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const review = fs.readFileSync(path.join(root, 'review.html'), 'utf8');

assert.match(upload, /id="issueDate"/);
assert.match(upload, /name="issueDate"/);
assert.match(upload, /h_issueDate/);
assert.match(upload, /請求書の発行日を入力してください/);
assert.match(review, /issue-date-row-/);
assert.match(review, /issueDate: issueDate/);
assert.match(review, /請求書の発行日を入力してください/);

const expectedUrls = [
  'AKfycbwQep9Mp-tI-EuTwpn1pe7aoRy9_LZD7LU1zlONLUay8hoyFz4ItwdrMcbV230ttval',
  'AKfycbxDhprWdltkn-6nQDHPW3S9YbYDg4NSlEFVndpTwYSQDUw-i86MKxGZcOEpoMHF2uUHzw'
];
expectedUrls.forEach((id) => {
  assert.ok(upload.includes(id));
  assert.ok(review.includes(id));
});

[upload, review].forEach((html) => {
  const scripts = Array.from(html.matchAll(/<script>([\s\S]*?)<\/script>/g));
  assert.ok(scripts.length > 0);
  scripts.forEach((match) => new vm.Script(match[1]));
});

console.log('form-contract tests passed');
