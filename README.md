#EBNF Diagram

node-ebnf-diagram uses js taken from Mark Portier's [EBNFDiagram jQuery plugin](https://github.com/marc-portier/ebnfdiagram)

This is hooked up to [node-canvas](https://github.com/LearnBoost/node-canvas) to draw EBNF diagrams in node without needing the DOM.

##Installation

    $ npm install ebnf-diagram

If not previously installed, you will want to install the [cairo graphics library](http://cairographics.org/download/) version _>= 1.8.6_ first using the package manager available to you, or [building from source](https://github.com/LearnBoost/node-canvas/wiki/_pages).

##Usage

	ebnfDiagram = require 'ebnf-diagram'

If your ebnf is in a file:

	ebnfDiagram.fromFile('./gherkin.ebnf', './gherkin.png',2000,6000)

If you already have the text:

	ebnfDiagram.fromText('''"EBNF defined in itself" {

		syntax     = [ title ] "{" { production } "}" [ comment ].
		production = identifier "=" expression ( "." | ";" ) .
		expression = term { "|" term } .
		term       = factor { factor } .
		factor     = identifier
		| literal
		| "[" expression "]"
		| "(" expression ")"
		| "{" expression "}" .
		identifier = character { character } .
		title      = literal .
		comment    = literal .
		literal    = "'" character { character } "'"
		| '"' character { character } '"' .


	} "EBNF is a cool syntax for describing syntaxes."
	''', './ebnf.png',1000,1000)

### Generates:
  
  ![EBNF in EBNF](https://github.com/featurist/node-ebnf-diagram/raw/master/test/ebnf.png)

