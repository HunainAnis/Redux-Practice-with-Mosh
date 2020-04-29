let input = '   JavaScript   ';
let output = '<div>' + input.trim() + '<div>';

const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

const result = toLowerCase(wrapInDiv(trim(input)));



console.log(result)