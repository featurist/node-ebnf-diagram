#EBNF Diagram



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

