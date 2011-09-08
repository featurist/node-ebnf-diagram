var Canvas, EbnfDiagram, ebnf, fromFile, fromText, fs ,EbnfDiagramModule;
Canvas = require('canvas');
EbnfDiagram = require('./outerthought/ebnfdiagram.js');
ebnf = require('./outerthought/ebnf.js');
fs = require('fs');

fromText = function(input, outputFilename, width, height) {
  var canvas, diagram, logErr, out, setSyntax, stream;
  canvas = new Canvas(width, height);
  diagram = new EbnfDiagram(canvas.getContext('2d'), width, height);

  setSyntax = function(syn) {
    return diagram.setSyntax(syn);
  };
  logErr = function(err) {
    return console.log(err);
  };
  ebnf.parse(input, setSyntax, logErr);

  out = fs.createWriteStream(outputFilename);
  stream = canvas.createPNGStream();

  stream.on('data', function(chunk) {
    return out.write(chunk);
  });
  stream.on('end', function() {
    return console.log('saved png to ' + outputFilename);
  });
};

fromFile = function(inputFilename, outputFilename, width, height) {
  fs.readFile(inputFilename, 'utf8', function(err, ebnf) {
    fromText(ebnf, outputFilename, width, height);
  });
};
exports.fromText = fromText;
exports.fromFile = fromFile;
