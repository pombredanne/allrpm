var fs = require('fs');
var path = require('path');
var dot = require('ngraph.fromdot');

module.exports = loadGraph;

function loadGraph(doneCallback, fileName) {
  fileName = fileName || process.argv[2] || path.join('data', 'packages');
  if (!fs.existsSync(fileName)) {
    throw new Error('Make sure to download packages first with `download.sh`')
  }

  graphStr = fs.readFileSync(fileName, 'utf-8');

  console.log("Parsing with dot ...");

  doneCallback(dot(graphStr));
  return;
}
