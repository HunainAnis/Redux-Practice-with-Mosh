import {  pipe } from 'lodash/fp'

let input = '   JavaScript   ';
let output = '<div>' + input.trim() + '<div>';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

let result = toLowerCase(wrapInDiv(trim(input)));

// const transform = compose(toLowerCase, wrapInDiv, trim);
// const transform = pipe(trim, wrapInDiv, toLowerCase);
const transform = pipe(trim, wrap('span'), toLowerCase);

result = transform(input);

console.log(result)