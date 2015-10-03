var loadGraph = require('./lib/loadGraph.js');
var graph = loadGraph();

console.log('Loaded graph with ' + graph.getLinksCount() + ' edges; ' + graph.getNodesCount() + ' nodes');

var layout = require('ngraph.offline.layout')(graph);

console.log('Starting layout');
layout.run();

var save = require('ngraph.tobinary');
save(graph, {
  outDir: './data'
});

console.log('Done.');
console.log('Copy `links.bin`, `labels.bin` and positions.bin into vis folder');
