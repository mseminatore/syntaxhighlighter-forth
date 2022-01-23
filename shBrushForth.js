;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
	
		var datatypes =	' ';

		var keywords =	'ABS AGAIN ALLOT AND BEGIN BEL BL CELLS CONST CONSTANT CR DO DROP DUP ELSE EMIT EXIT FUNC I INCLUDE IF ' +
						'LF LOOP +LOOP LSHIFT MAX MIN MOD NEGATE NIP NOT OR OVER POW REPEAT ROT RSHIFT SWAP THEN TUCK UNTIL VAR ' +
						'VARIABLE WHILE WORDS XOR 2DUP ?DUP /MOD .S';
					
		var functions =	'FALSE TRUE MAX-INT MIN-INT PI TAB ';

		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },			// one line comments
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,		css: 'comments' },			// multiline comments
		    { regex: /(R|L|U|u|u8)?"([^\\"\n]|\\.)*"/g,                 css: 'string' },			// special character
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,		css: 'string' },			// strings
			{ regex: new RegExp(this.getKeywords(datatypes), 'gm'),		css: 'color1 bold' },
			{ regex: new RegExp(this.getKeywords(functions), 'gm'),		css: 'functions bold' },
			{ regex: new RegExp(this.getKeywords(keywords), 'gm'),		css: 'keyword bold' }
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['f', 'forth'];

	SyntaxHighlighter.brushes.Forth = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
