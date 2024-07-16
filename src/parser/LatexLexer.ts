// Generated from LatexLexer.g4 by ANTLR 4.12.0
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class LatexLexer extends Lexer {
	public static readonly L_BRACKET = 1;
	public static readonly ALT_L_BRACKET = 2;
	public static readonly SEMICOLON = 3;
	public static readonly L_BRACE = 4;
	public static readonly R_BRACE = 5;
	public static readonly L_PAREN = 6;
	public static readonly R_PAREN = 7;
	public static readonly VBAR = 8;
	public static readonly DOUBLE_VBAR = 9;
	public static readonly UNDERSCORE = 10;
	public static readonly PI = 11;
	public static readonly CMD_INT = 12;
	public static readonly CMD_INT_UNDERSCORE = 13;
	public static readonly CMD_INT_UNDERSCORE_SINGLE_CHAR_NUMBER = 14;
	public static readonly CMD_INT_UNDERSCORE_SINGLE_CHAR_ID = 15;
	public static readonly CMD_MATHRM = 16;
	public static readonly CMD_FRAC = 17;
	public static readonly CMD_FRAC_INTS = 18;
	public static readonly CMD_CDOT = 19;
	public static readonly CMD_TIMES = 20;
	public static readonly CMD_SQRT = 21;
	public static readonly CMD_SQRT_INT = 22;
	public static readonly CMD_SIM = 23;
	public static readonly CMD_APPROX = 24;
	public static readonly CMD_PLACEHOLDER = 25;
	public static readonly TRANSPOSE = 26;
	public static readonly BACKSLASH = 27;
	public static readonly AS_LINES = 28;
	public static readonly CMD_SIN = 29;
	public static readonly CMD_COS = 30;
	public static readonly CMD_TAN = 31;
	public static readonly CMD_COT = 32;
	public static readonly CMD_SEC = 33;
	public static readonly CMD_CSC = 34;
	public static readonly CMD_ARCSIN = 35;
	public static readonly CMD_ARCCOS = 36;
	public static readonly CMD_ARCTAN = 37;
	public static readonly CMD_SINH = 38;
	public static readonly CMD_COSH = 39;
	public static readonly CMD_TANH = 40;
	public static readonly CMD_COTH = 41;
	public static readonly CMD_LN = 42;
	public static readonly CMD_LOG = 43;
	public static readonly CMD_SLASH_LOG_UNDERSCORE = 44;
	public static readonly CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_NUMBER = 45;
	public static readonly CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_ID = 46;
	public static readonly COMMENT = 47;
	public static readonly CMD_LEFT = 48;
	public static readonly CMD_RIGHT = 49;
	public static readonly DOUBLE_DOLLAR_SIGN = 50;
	public static readonly ADD = 51;
	public static readonly SUB = 52;
	public static readonly CARET = 53;
	public static readonly EQ = 54;
	public static readonly LT = 55;
	public static readonly GT = 56;
	public static readonly LTE = 57;
	public static readonly GTE = 58;
	public static readonly COMMA = 59;
	public static readonly CARET_SINGLE_CHAR_NUMBER = 60;
	public static readonly CARET_SINGLE_CHAR_ID = 61;
	public static readonly NUMBER = 62;
	public static readonly BEGIN_MATRIX = 63;
	public static readonly END_MATRIX = 64;
	public static readonly AMPERSAND = 65;
	public static readonly DOUBLE_BACKSLASH = 66;
	public static readonly UNDERSCORE_SUBSCRIPT = 67;
	public static readonly CARET_SINGLE_CHAR_ID_UNDERSCORE_SUBSCRIPT = 68;
	public static readonly ID = 69;
	public static readonly WS = 70;
	public static readonly SLASH_SPACE = 71;
	public static readonly SLASH_COLON = 72;
	public static readonly NBSP = 73;
	public static readonly ERROR_CHAR = 74;
	public static readonly R_BRACKET = 75;
	public static readonly ALT_R_BRACKET = 76;
	public static readonly U_CMD_FRAC = 77;
	public static readonly U_CMD_FRAC_INTS = 78;
	public static readonly U_CMD_CDOT = 79;
	public static readonly U_CMD_TIMES = 80;
	public static readonly U_CMD_SQRT = 81;
	public static readonly U_COMMA = 82;
	public static readonly U_CARET = 83;
	public static readonly U_NAME = 84;
	public static readonly U_L_PAREN = 85;
	public static readonly U_R_PAREN = 86;
	public static readonly U_L_BRACE = 87;
	public static readonly U_R_BRACE = 88;
	public static readonly U_ONE = 89;
	public static readonly U_NUMBER = 90;
	public static readonly U_CMD_LEFT = 91;
	public static readonly U_CMD_RIGHT = 92;
	public static readonly U_WS = 93;
	public static readonly U_SLASH_SPACE = 94;
	public static readonly U_SLASH_COLON = 95;
	public static readonly U_NBSP = 96;
	public static readonly U_ERROR_CHAR = 97;
	public static readonly EOF = Token.EOF;
	public static readonly UNITS = 1;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: string[] = [ null, "'['", "'\\lbrack'", 
                                                   "';'", null, null, null, 
                                                   null, "'|'", null, "'_'", 
                                                   "'\\pi'", "'\\int'", 
                                                   null, null, null, "'\\mathrm'", 
                                                   null, null, null, null, 
                                                   null, null, "'\\sim'", 
                                                   "'\\approx'", "'\\placeholder'", 
                                                   "'^{\\mathrm{T}}'", "'\\'", 
                                                   null, "'sin'", "'cos'", 
                                                   "'tan'", "'cot'", "'sec'", 
                                                   "'csc'", "'arcsin'", 
                                                   "'arccos'", "'arctan'", 
                                                   "'sinh'", "'cosh'", "'tanh'", 
                                                   "'coth'", "'ln'", "'log'", 
                                                   null, null, null, null, 
                                                   null, null, "'$$'", "'+'", 
                                                   "'-'", null, "'='", "'<'", 
                                                   "'>'", "'\\le'", "'\\ge'", 
                                                   null, null, null, null, 
                                                   "'\\begin{bmatrix}'", 
                                                   "'\\end{bmatrix}'", "'&'", 
                                                   "'\\\\'", null, null, 
                                                   null, null, null, null, 
                                                   null, null, "']'", "'\\rbrack'", 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   null, null, null, null, 
                                                   "'1'", null, "'\\left'", 
                                                   "'\\right'" ];
	public static readonly symbolicNames: string[] = [ null, "L_BRACKET", "ALT_L_BRACKET", 
                                                    "SEMICOLON", "L_BRACE", 
                                                    "R_BRACE", "L_PAREN", 
                                                    "R_PAREN", "VBAR", "DOUBLE_VBAR", 
                                                    "UNDERSCORE", "PI", 
                                                    "CMD_INT", "CMD_INT_UNDERSCORE", 
                                                    "CMD_INT_UNDERSCORE_SINGLE_CHAR_NUMBER", 
                                                    "CMD_INT_UNDERSCORE_SINGLE_CHAR_ID", 
                                                    "CMD_MATHRM", "CMD_FRAC", 
                                                    "CMD_FRAC_INTS", "CMD_CDOT", 
                                                    "CMD_TIMES", "CMD_SQRT", 
                                                    "CMD_SQRT_INT", "CMD_SIM", 
                                                    "CMD_APPROX", "CMD_PLACEHOLDER", 
                                                    "TRANSPOSE", "BACKSLASH", 
                                                    "AS_LINES", "CMD_SIN", 
                                                    "CMD_COS", "CMD_TAN", 
                                                    "CMD_COT", "CMD_SEC", 
                                                    "CMD_CSC", "CMD_ARCSIN", 
                                                    "CMD_ARCCOS", "CMD_ARCTAN", 
                                                    "CMD_SINH", "CMD_COSH", 
                                                    "CMD_TANH", "CMD_COTH", 
                                                    "CMD_LN", "CMD_LOG", 
                                                    "CMD_SLASH_LOG_UNDERSCORE", 
                                                    "CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_NUMBER", 
                                                    "CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_ID", 
                                                    "COMMENT", "CMD_LEFT", 
                                                    "CMD_RIGHT", "DOUBLE_DOLLAR_SIGN", 
                                                    "ADD", "SUB", "CARET", 
                                                    "EQ", "LT", "GT", "LTE", 
                                                    "GTE", "COMMA", "CARET_SINGLE_CHAR_NUMBER", 
                                                    "CARET_SINGLE_CHAR_ID", 
                                                    "NUMBER", "BEGIN_MATRIX", 
                                                    "END_MATRIX", "AMPERSAND", 
                                                    "DOUBLE_BACKSLASH", 
                                                    "UNDERSCORE_SUBSCRIPT", 
                                                    "CARET_SINGLE_CHAR_ID_UNDERSCORE_SUBSCRIPT", 
                                                    "ID", "WS", "SLASH_SPACE", 
                                                    "SLASH_COLON", "NBSP", 
                                                    "ERROR_CHAR", "R_BRACKET", 
                                                    "ALT_R_BRACKET", "U_CMD_FRAC", 
                                                    "U_CMD_FRAC_INTS", "U_CMD_CDOT", 
                                                    "U_CMD_TIMES", "U_CMD_SQRT", 
                                                    "U_COMMA", "U_CARET", 
                                                    "U_NAME", "U_L_PAREN", 
                                                    "U_R_PAREN", "U_L_BRACE", 
                                                    "U_R_BRACE", "U_ONE", 
                                                    "U_NUMBER", "U_CMD_LEFT", 
                                                    "U_CMD_RIGHT", "U_WS", 
                                                    "U_SLASH_SPACE", "U_SLASH_COLON", 
                                                    "U_NBSP", "U_ERROR_CHAR" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", "UNITS", ];

	public static readonly ruleNames: string[] = [
		"L_BRACKET", "ALT_L_BRACKET", "SEMICOLON", "L_BRACE", "R_BRACE", "L_PAREN", 
		"R_PAREN", "VBAR", "DOUBLE_VBAR", "UNDERSCORE", "PI", "CMD_INT", "CMD_INT_UNDERSCORE", 
		"CMD_INT_UNDERSCORE_SINGLE_CHAR_NUMBER", "CMD_INT_UNDERSCORE_SINGLE_CHAR_ID", 
		"CMD_MATHRM", "CMD_FRAC", "CMD_FRAC_INTS", "CMD_CDOT", "CMD_TIMES", "CMD_SQRT", 
		"CMD_SQRT_INT", "CMD_SIM", "CMD_APPROX", "CMD_PLACEHOLDER", "TRANSPOSE", 
		"BACKSLASH", "AS_LINES", "CMD_SIN", "CMD_COS", "CMD_TAN", "CMD_COT", "CMD_SEC", 
		"CMD_CSC", "CMD_ARCSIN", "CMD_ARCCOS", "CMD_ARCTAN", "CMD_SINH", "CMD_COSH", 
		"CMD_TANH", "CMD_COTH", "CMD_LN", "CMD_LOG", "CMD_SLASH_LOG_UNDERSCORE", 
		"CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_NUMBER", "CMD_SLASH_LOG_UNDERSCORE_SINGLE_CHAR_ID", 
		"COMMENT", "CMD_LEFT", "CMD_RIGHT", "DOUBLE_DOLLAR_SIGN", "ADD", "SUB", 
		"CARET", "EQ", "LT", "GT", "LTE", "GTE", "COMMA", "CARET_SINGLE_CHAR_NUMBER", 
		"CARET_SINGLE_CHAR_ID", "NUMBER", "DIGIT", "IDENTIFIER", "EXP", "GREEK_CHAR", 
		"BEGIN_MATRIX", "END_MATRIX", "AMPERSAND", "DOUBLE_BACKSLASH", "UNDERSCORE_SUBSCRIPT", 
		"CARET_SINGLE_CHAR_ID_UNDERSCORE_SUBSCRIPT", "ID", "WS", "SLASH_SPACE", 
		"SLASH_COLON", "NBSP", "ERROR_CHAR", "R_BRACKET", "ALT_R_BRACKET", "U_CMD_FRAC", 
		"U_CMD_FRAC_INTS", "U_CMD_CDOT", "U_CMD_TIMES", "U_CMD_SQRT", "U_COMMA", 
		"U_CARET", "U_NAME", "U_L_PAREN", "U_R_PAREN", "U_L_BRACE", "U_R_BRACE", 
		"U_ONE", "U_NUMBER", "U_DIGIT", "U_CMD_LEFT", "U_CMD_RIGHT", "U_WS", "U_SLASH_SPACE", 
		"U_SLASH_COLON", "U_NBSP", "U_ERROR_CHAR",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, LatexLexer._ATN, LatexLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "LatexLexer.g4"; }

	public get literalNames(): (string | null)[] { return LatexLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return LatexLexer.symbolicNames; }
	public get ruleNames(): string[] { return LatexLexer.ruleNames; }

	public get serializedATN(): number[] { return LatexLexer._serializedATN; }

	public get channelNames(): string[] { return LatexLexer.channelNames; }

	public get modeNames(): string[] { return LatexLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,97,1040,6,-1,6,-1,
	2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,
	2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,
	7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,
	23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,
	2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,
	38,7,38,2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,
	7,45,2,46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,
	52,2,53,7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,
	2,60,7,60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,
	67,7,67,2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,
	7,74,2,75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,
	81,2,82,7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,2,88,7,88,
	2,89,7,89,2,90,7,90,2,91,7,91,2,92,7,92,2,93,7,93,2,94,7,94,2,95,7,95,2,
	96,7,96,2,97,7,97,2,98,7,98,2,99,7,99,2,100,7,100,2,101,7,101,1,0,1,0,1,
	0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,
	5,1,5,1,6,1,6,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,240,8,8,1,9,1,9,1,
	10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,
	5,12,259,8,12,10,12,12,12,262,9,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,
	13,5,13,272,8,13,10,13,12,13,275,9,13,1,13,1,13,1,13,1,14,1,14,1,14,1,14,
	1,14,1,14,5,14,286,8,14,10,14,12,14,289,9,14,1,14,1,14,1,14,1,15,1,15,1,
	15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,17,
	1,17,1,17,1,17,1,17,5,17,315,8,17,10,17,12,17,318,9,17,1,17,1,17,1,17,1,
	18,1,18,1,18,1,18,1,18,1,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,20,1,20,
	1,20,1,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,349,8,21,10,
	21,12,21,352,9,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,23,1,23,1,23,1,23,
	1,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,
	24,1,24,1,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
	1,25,1,25,1,26,1,26,1,27,1,27,1,27,1,27,1,27,1,27,4,27,404,8,27,11,27,12,
	27,405,1,27,1,27,1,27,1,27,1,27,1,27,3,27,414,8,27,1,28,1,28,1,28,1,28,
	1,29,1,29,1,29,1,29,1,30,1,30,1,30,1,30,1,31,1,31,1,31,1,31,1,32,1,32,1,
	32,1,32,1,33,1,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,37,1,37,1,
	37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,39,1,40,1,40,
	1,40,1,40,1,40,1,41,1,41,1,41,1,42,1,42,1,42,1,42,1,43,1,43,1,43,1,43,1,
	43,1,43,5,43,494,8,43,10,43,12,43,497,9,43,1,43,1,43,1,44,1,44,1,44,1,44,
	1,44,1,44,5,44,507,8,44,10,44,12,44,510,9,44,1,44,1,44,1,44,1,45,1,45,1,
	45,1,45,1,45,1,45,5,45,521,8,45,10,45,12,45,524,9,45,1,45,1,45,1,45,1,46,
	1,46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,537,8,46,10,46,12,46,540,9,46,1,
	46,1,46,1,46,1,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,553,8,47,1,47,
	1,47,1,48,1,48,1,48,1,48,1,48,1,48,1,48,1,48,3,48,565,8,48,1,48,1,48,1,
	49,1,49,1,49,1,49,1,49,1,50,1,50,1,51,1,51,1,52,1,52,1,53,1,53,1,54,1,54,
	1,55,1,55,1,56,1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,58,1,58,1,59,1,59,1,
	59,1,60,1,60,1,60,1,61,4,61,603,8,61,11,61,12,61,604,1,61,1,61,5,61,609,
	8,61,10,61,12,61,612,9,61,1,61,3,61,615,8,61,1,61,1,61,4,61,619,8,61,11,
	61,12,61,620,1,61,3,61,624,8,61,1,61,4,61,627,8,61,11,61,12,61,628,1,61,
	3,61,632,8,61,3,61,634,8,61,1,62,1,62,1,63,1,63,5,63,640,8,63,10,63,12,
	63,643,9,63,1,64,1,64,3,64,647,8,64,1,64,4,64,650,8,64,11,64,12,64,651,
	1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
	1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
	1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
	1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,
	1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,1,65,3,65,794,8,65,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,
	67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,68,
	1,68,1,69,1,69,1,69,1,70,5,70,832,8,70,10,70,12,70,835,9,70,1,70,1,70,1,
	70,1,70,4,70,841,8,70,11,70,12,70,842,1,70,1,70,5,70,847,8,70,10,70,12,
	70,850,9,70,1,70,1,70,3,70,854,8,70,1,71,1,71,1,71,1,71,1,72,1,72,3,72,
	862,8,72,1,72,3,72,865,8,72,1,73,4,73,868,8,73,11,73,12,73,869,1,73,1,73,
	1,74,1,74,1,74,1,74,1,74,1,75,1,75,1,75,1,75,1,75,1,76,1,76,1,76,1,76,1,
	77,1,77,1,78,1,78,1,78,1,78,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,1,79,
	1,79,1,80,1,80,1,80,1,80,1,80,1,80,1,81,1,81,1,81,1,81,1,81,1,81,1,81,5,
	81,917,8,81,10,81,12,81,920,9,81,1,81,1,81,1,81,1,82,1,82,1,82,1,82,1,82,
	1,82,1,83,1,83,1,83,1,83,1,83,1,83,1,83,1,84,1,84,1,84,1,84,1,84,1,84,1,
	85,1,85,1,86,1,86,1,87,1,87,5,87,950,8,87,10,87,12,87,953,9,87,1,88,1,88,
	1,89,1,89,1,90,1,90,1,91,1,91,1,92,1,92,1,93,3,93,966,8,93,1,93,4,93,969,
	8,93,11,93,12,93,970,1,93,1,93,5,93,975,8,93,10,93,12,93,978,9,93,1,93,
	3,93,981,8,93,1,93,1,93,4,93,985,8,93,11,93,12,93,986,1,93,3,93,990,8,93,
	1,93,4,93,993,8,93,11,93,12,93,994,3,93,997,8,93,1,94,1,94,1,95,1,95,1,
	95,1,95,1,95,1,95,1,95,1,95,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,1,96,
	1,97,4,97,1019,8,97,11,97,12,97,1020,1,97,1,97,1,98,1,98,1,98,1,98,1,98,
	1,99,1,99,1,99,1,99,1,99,1,100,1,100,1,100,1,100,1,101,1,101,1,538,0,102,
	2,1,4,2,6,3,8,4,10,5,12,6,14,7,16,8,18,9,20,10,22,11,24,12,26,13,28,14,
	30,15,32,16,34,17,36,18,38,19,40,20,42,21,44,22,46,23,48,24,50,25,52,26,
	54,27,56,28,58,29,60,30,62,31,64,32,66,33,68,34,70,35,72,36,74,37,76,38,
	78,39,80,40,82,41,84,42,86,43,88,44,90,45,92,46,94,47,96,48,98,49,100,50,
	102,51,104,52,106,53,108,54,110,55,112,56,114,57,116,58,118,59,120,60,122,
	61,124,62,126,0,128,0,130,0,132,0,134,63,136,64,138,65,140,66,142,67,144,
	68,146,69,148,70,150,71,152,72,154,73,156,74,158,75,160,76,162,77,164,78,
	166,79,168,80,170,81,172,82,174,83,176,84,178,85,180,86,182,87,184,88,186,
	89,188,90,190,0,192,91,194,92,196,93,198,94,200,95,202,96,204,97,2,0,1,
	8,1,0,32,32,1,0,48,57,2,0,65,90,97,122,1,0,115,115,3,0,48,57,65,90,97,122,
	2,0,69,69,101,101,2,0,43,43,45,45,3,0,9,10,13,13,32,32,1111,0,2,1,0,0,0,
	0,4,1,0,0,0,0,6,1,0,0,0,0,8,1,0,0,0,0,10,1,0,0,0,0,12,1,0,0,0,0,14,1,0,
	0,0,0,16,1,0,0,0,0,18,1,0,0,0,0,20,1,0,0,0,0,22,1,0,0,0,0,24,1,0,0,0,0,
	26,1,0,0,0,0,28,1,0,0,0,0,30,1,0,0,0,0,32,1,0,0,0,0,34,1,0,0,0,0,36,1,0,
	0,0,0,38,1,0,0,0,0,40,1,0,0,0,0,42,1,0,0,0,0,44,1,0,0,0,0,46,1,0,0,0,0,
	48,1,0,0,0,0,50,1,0,0,0,0,52,1,0,0,0,0,54,1,0,0,0,0,56,1,0,0,0,0,58,1,0,
	0,0,0,60,1,0,0,0,0,62,1,0,0,0,0,64,1,0,0,0,0,66,1,0,0,0,0,68,1,0,0,0,0,
	70,1,0,0,0,0,72,1,0,0,0,0,74,1,0,0,0,0,76,1,0,0,0,0,78,1,0,0,0,0,80,1,0,
	0,0,0,82,1,0,0,0,0,84,1,0,0,0,0,86,1,0,0,0,0,88,1,0,0,0,0,90,1,0,0,0,0,
	92,1,0,0,0,0,94,1,0,0,0,0,96,1,0,0,0,0,98,1,0,0,0,0,100,1,0,0,0,0,102,1,
	0,0,0,0,104,1,0,0,0,0,106,1,0,0,0,0,108,1,0,0,0,0,110,1,0,0,0,0,112,1,0,
	0,0,0,114,1,0,0,0,0,116,1,0,0,0,0,118,1,0,0,0,0,120,1,0,0,0,0,122,1,0,0,
	0,0,124,1,0,0,0,0,134,1,0,0,0,0,136,1,0,0,0,0,138,1,0,0,0,0,140,1,0,0,0,
	0,142,1,0,0,0,0,144,1,0,0,0,0,146,1,0,0,0,0,148,1,0,0,0,0,150,1,0,0,0,0,
	152,1,0,0,0,0,154,1,0,0,0,0,156,1,0,0,0,1,158,1,0,0,0,1,160,1,0,0,0,1,162,
	1,0,0,0,1,164,1,0,0,0,1,166,1,0,0,0,1,168,1,0,0,0,1,170,1,0,0,0,1,172,1,
	0,0,0,1,174,1,0,0,0,1,176,1,0,0,0,1,178,1,0,0,0,1,180,1,0,0,0,1,182,1,0,
	0,0,1,184,1,0,0,0,1,186,1,0,0,0,1,188,1,0,0,0,1,192,1,0,0,0,1,194,1,0,0,
	0,1,196,1,0,0,0,1,198,1,0,0,0,1,200,1,0,0,0,1,202,1,0,0,0,1,204,1,0,0,0,
	2,206,1,0,0,0,4,210,1,0,0,0,6,220,1,0,0,0,8,222,1,0,0,0,10,224,1,0,0,0,
	12,226,1,0,0,0,14,228,1,0,0,0,16,230,1,0,0,0,18,239,1,0,0,0,20,241,1,0,
	0,0,22,243,1,0,0,0,24,247,1,0,0,0,26,252,1,0,0,0,28,265,1,0,0,0,30,279,
	1,0,0,0,32,293,1,0,0,0,34,301,1,0,0,0,36,307,1,0,0,0,38,322,1,0,0,0,40,
	328,1,0,0,0,42,335,1,0,0,0,44,341,1,0,0,0,46,355,1,0,0,0,48,360,1,0,0,0,
	50,368,1,0,0,0,52,381,1,0,0,0,54,395,1,0,0,0,56,397,1,0,0,0,58,415,1,0,
	0,0,60,419,1,0,0,0,62,423,1,0,0,0,64,427,1,0,0,0,66,431,1,0,0,0,68,435,
	1,0,0,0,70,439,1,0,0,0,72,446,1,0,0,0,74,453,1,0,0,0,76,460,1,0,0,0,78,
	465,1,0,0,0,80,470,1,0,0,0,82,475,1,0,0,0,84,480,1,0,0,0,86,483,1,0,0,0,
	88,487,1,0,0,0,90,500,1,0,0,0,92,514,1,0,0,0,94,528,1,0,0,0,96,545,1,0,
	0,0,98,556,1,0,0,0,100,568,1,0,0,0,102,573,1,0,0,0,104,575,1,0,0,0,106,
	577,1,0,0,0,108,579,1,0,0,0,110,581,1,0,0,0,112,583,1,0,0,0,114,585,1,0,
	0,0,116,589,1,0,0,0,118,593,1,0,0,0,120,595,1,0,0,0,122,598,1,0,0,0,124,
	633,1,0,0,0,126,635,1,0,0,0,128,637,1,0,0,0,130,644,1,0,0,0,132,653,1,0,
	0,0,134,795,1,0,0,0,136,811,1,0,0,0,138,825,1,0,0,0,140,827,1,0,0,0,142,
	853,1,0,0,0,144,855,1,0,0,0,146,861,1,0,0,0,148,867,1,0,0,0,150,873,1,0,
	0,0,152,878,1,0,0,0,154,883,1,0,0,0,156,887,1,0,0,0,158,889,1,0,0,0,160,
	893,1,0,0,0,162,903,1,0,0,0,164,909,1,0,0,0,166,924,1,0,0,0,168,930,1,0,
	0,0,170,937,1,0,0,0,172,943,1,0,0,0,174,945,1,0,0,0,176,947,1,0,0,0,178,
	954,1,0,0,0,180,956,1,0,0,0,182,958,1,0,0,0,184,960,1,0,0,0,186,962,1,0,
	0,0,188,996,1,0,0,0,190,998,1,0,0,0,192,1000,1,0,0,0,194,1008,1,0,0,0,196,
	1018,1,0,0,0,198,1024,1,0,0,0,200,1029,1,0,0,0,202,1034,1,0,0,0,204,1038,
	1,0,0,0,206,207,5,91,0,0,207,208,1,0,0,0,208,209,6,0,0,0,209,3,1,0,0,0,
	210,211,5,92,0,0,211,212,5,108,0,0,212,213,5,98,0,0,213,214,5,114,0,0,214,
	215,5,97,0,0,215,216,5,99,0,0,216,217,5,107,0,0,217,218,1,0,0,0,218,219,
	6,1,0,0,219,5,1,0,0,0,220,221,5,59,0,0,221,7,1,0,0,0,222,223,5,123,0,0,
	223,9,1,0,0,0,224,225,5,125,0,0,225,11,1,0,0,0,226,227,5,40,0,0,227,13,
	1,0,0,0,228,229,5,41,0,0,229,15,1,0,0,0,230,231,5,124,0,0,231,17,1,0,0,
	0,232,233,5,124,0,0,233,240,5,124,0,0,234,235,5,92,0,0,235,236,5,86,0,0,
	236,237,5,101,0,0,237,238,5,114,0,0,238,240,5,116,0,0,239,232,1,0,0,0,239,
	234,1,0,0,0,240,19,1,0,0,0,241,242,5,95,0,0,242,21,1,0,0,0,243,244,5,92,
	0,0,244,245,5,112,0,0,245,246,5,105,0,0,246,23,1,0,0,0,247,248,5,92,0,0,
	248,249,5,105,0,0,249,250,5,110,0,0,250,251,5,116,0,0,251,25,1,0,0,0,252,
	253,5,92,0,0,253,254,5,105,0,0,254,255,5,110,0,0,255,256,5,116,0,0,256,
	260,1,0,0,0,257,259,7,0,0,0,258,257,1,0,0,0,259,262,1,0,0,0,260,258,1,0,
	0,0,260,261,1,0,0,0,261,263,1,0,0,0,262,260,1,0,0,0,263,264,5,95,0,0,264,
	27,1,0,0,0,265,266,5,92,0,0,266,267,5,105,0,0,267,268,5,110,0,0,268,269,
	5,116,0,0,269,273,1,0,0,0,270,272,7,0,0,0,271,270,1,0,0,0,272,275,1,0,0,
	0,273,271,1,0,0,0,273,274,1,0,0,0,274,276,1,0,0,0,275,273,1,0,0,0,276,277,
	5,95,0,0,277,278,7,1,0,0,278,29,1,0,0,0,279,280,5,92,0,0,280,281,5,105,
	0,0,281,282,5,110,0,0,282,283,5,116,0,0,283,287,1,0,0,0,284,286,7,0,0,0,
	285,284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,288,290,
	1,0,0,0,289,287,1,0,0,0,290,291,5,95,0,0,291,292,7,2,0,0,292,31,1,0,0,0,
	293,294,5,92,0,0,294,295,5,109,0,0,295,296,5,97,0,0,296,297,5,116,0,0,297,
	298,5,104,0,0,298,299,5,114,0,0,299,300,5,109,0,0,300,33,1,0,0,0,301,302,
	5,92,0,0,302,303,5,102,0,0,303,304,5,114,0,0,304,305,5,97,0,0,305,306,5,
	99,0,0,306,35,1,0,0,0,307,308,5,92,0,0,308,309,5,102,0,0,309,310,5,114,
	0,0,310,311,5,97,0,0,311,312,5,99,0,0,312,316,1,0,0,0,313,315,7,0,0,0,314,
	313,1,0,0,0,315,318,1,0,0,0,316,314,1,0,0,0,316,317,1,0,0,0,317,319,1,0,
	0,0,318,316,1,0,0,0,319,320,7,1,0,0,320,321,7,1,0,0,321,37,1,0,0,0,322,
	323,5,92,0,0,323,324,5,99,0,0,324,325,5,100,0,0,325,326,5,111,0,0,326,327,
	5,116,0,0,327,39,1,0,0,0,328,329,5,92,0,0,329,330,5,116,0,0,330,331,5,105,
	0,0,331,332,5,109,0,0,332,333,5,101,0,0,333,334,5,115,0,0,334,41,1,0,0,
	0,335,336,5,92,0,0,336,337,5,115,0,0,337,338,5,113,0,0,338,339,5,114,0,
	0,339,340,5,116,0,0,340,43,1,0,0,0,341,342,5,92,0,0,342,343,5,115,0,0,343,
	344,5,113,0,0,344,345,5,114,0,0,345,346,5,116,0,0,346,350,1,0,0,0,347,349,
	7,0,0,0,348,347,1,0,0,0,349,352,1,0,0,0,350,348,1,0,0,0,350,351,1,0,0,0,
	351,353,1,0,0,0,352,350,1,0,0,0,353,354,7,1,0,0,354,45,1,0,0,0,355,356,
	5,92,0,0,356,357,5,115,0,0,357,358,5,105,0,0,358,359,5,109,0,0,359,47,1,
	0,0,0,360,361,5,92,0,0,361,362,5,97,0,0,362,363,5,112,0,0,363,364,5,112,
	0,0,364,365,5,114,0,0,365,366,5,111,0,0,366,367,5,120,0,0,367,49,1,0,0,
	0,368,369,5,92,0,0,369,370,5,112,0,0,370,371,5,108,0,0,371,372,5,97,0,0,
	372,373,5,99,0,0,373,374,5,101,0,0,374,375,5,104,0,0,375,376,5,111,0,0,
	376,377,5,108,0,0,377,378,5,100,0,0,378,379,5,101,0,0,379,380,5,114,0,0,
	380,51,1,0,0,0,381,382,5,94,0,0,382,383,5,123,0,0,383,384,5,92,0,0,384,
	385,5,109,0,0,385,386,5,97,0,0,386,387,5,116,0,0,387,388,5,104,0,0,388,
	389,5,114,0,0,389,390,5,109,0,0,390,391,5,123,0,0,391,392,5,84,0,0,392,
	393,5,125,0,0,393,394,5,125,0,0,394,53,1,0,0,0,395,396,5,92,0,0,396,55,
	1,0,0,0,397,398,5,97,0,0,398,399,5,115,0,0,399,403,1,0,0,0,400,404,5,32,
	0,0,401,402,5,92,0,0,402,404,5,58,0,0,403,400,1,0,0,0,403,401,1,0,0,0,404,
	405,1,0,0,0,405,403,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,408,5,108,
	0,0,408,409,5,105,0,0,409,410,5,110,0,0,410,411,5,101,0,0,411,413,1,0,0,
	0,412,414,7,3,0,0,413,412,1,0,0,0,413,414,1,0,0,0,414,57,1,0,0,0,415,416,
	5,115,0,0,416,417,5,105,0,0,417,418,5,110,0,0,418,59,1,0,0,0,419,420,5,
	99,0,0,420,421,5,111,0,0,421,422,5,115,0,0,422,61,1,0,0,0,423,424,5,116,
	0,0,424,425,5,97,0,0,425,426,5,110,0,0,426,63,1,0,0,0,427,428,5,99,0,0,
	428,429,5,111,0,0,429,430,5,116,0,0,430,65,1,0,0,0,431,432,5,115,0,0,432,
	433,5,101,0,0,433,434,5,99,0,0,434,67,1,0,0,0,435,436,5,99,0,0,436,437,
	5,115,0,0,437,438,5,99,0,0,438,69,1,0,0,0,439,440,5,97,0,0,440,441,5,114,
	0,0,441,442,5,99,0,0,442,443,5,115,0,0,443,444,5,105,0,0,444,445,5,110,
	0,0,445,71,1,0,0,0,446,447,5,97,0,0,447,448,5,114,0,0,448,449,5,99,0,0,
	449,450,5,99,0,0,450,451,5,111,0,0,451,452,5,115,0,0,452,73,1,0,0,0,453,
	454,5,97,0,0,454,455,5,114,0,0,455,456,5,99,0,0,456,457,5,116,0,0,457,458,
	5,97,0,0,458,459,5,110,0,0,459,75,1,0,0,0,460,461,5,115,0,0,461,462,5,105,
	0,0,462,463,5,110,0,0,463,464,5,104,0,0,464,77,1,0,0,0,465,466,5,99,0,0,
	466,467,5,111,0,0,467,468,5,115,0,0,468,469,5,104,0,0,469,79,1,0,0,0,470,
	471,5,116,0,0,471,472,5,97,0,0,472,473,5,110,0,0,473,474,5,104,0,0,474,
	81,1,0,0,0,475,476,5,99,0,0,476,477,5,111,0,0,477,478,5,116,0,0,478,479,
	5,104,0,0,479,83,1,0,0,0,480,481,5,108,0,0,481,482,5,110,0,0,482,85,1,0,
	0,0,483,484,5,108,0,0,484,485,5,111,0,0,485,486,5,103,0,0,486,87,1,0,0,
	0,487,488,5,92,0,0,488,489,5,108,0,0,489,490,5,111,0,0,490,491,5,103,0,
	0,491,495,1,0,0,0,492,494,7,0,0,0,493,492,1,0,0,0,494,497,1,0,0,0,495,493,
	1,0,0,0,495,496,1,0,0,0,496,498,1,0,0,0,497,495,1,0,0,0,498,499,5,95,0,
	0,499,89,1,0,0,0,500,501,5,92,0,0,501,502,5,108,0,0,502,503,5,111,0,0,503,
	504,5,103,0,0,504,508,1,0,0,0,505,507,7,0,0,0,506,505,1,0,0,0,507,510,1,
	0,0,0,508,506,1,0,0,0,508,509,1,0,0,0,509,511,1,0,0,0,510,508,1,0,0,0,511,
	512,5,95,0,0,512,513,7,1,0,0,513,91,1,0,0,0,514,515,5,92,0,0,515,516,5,
	108,0,0,516,517,5,111,0,0,517,518,5,103,0,0,518,522,1,0,0,0,519,521,7,0,
	0,0,520,519,1,0,0,0,521,524,1,0,0,0,522,520,1,0,0,0,522,523,1,0,0,0,523,
	525,1,0,0,0,524,522,1,0,0,0,525,526,5,95,0,0,526,527,7,2,0,0,527,93,1,0,
	0,0,528,529,5,92,0,0,529,530,5,116,0,0,530,531,5,101,0,0,531,532,5,120,
	0,0,532,533,5,116,0,0,533,534,5,123,0,0,534,538,1,0,0,0,535,537,9,0,0,0,
	536,535,1,0,0,0,537,540,1,0,0,0,538,539,1,0,0,0,538,536,1,0,0,0,539,541,
	1,0,0,0,540,538,1,0,0,0,541,542,5,125,0,0,542,543,1,0,0,0,543,544,6,46,
	1,0,544,95,1,0,0,0,545,546,5,92,0,0,546,547,5,108,0,0,547,548,5,101,0,0,
	548,549,5,102,0,0,549,550,5,116,0,0,550,552,1,0,0,0,551,553,5,46,0,0,552,
	551,1,0,0,0,552,553,1,0,0,0,553,554,1,0,0,0,554,555,6,47,1,0,555,97,1,0,
	0,0,556,557,5,92,0,0,557,558,5,114,0,0,558,559,5,105,0,0,559,560,5,103,
	0,0,560,561,5,104,0,0,561,562,5,116,0,0,562,564,1,0,0,0,563,565,5,46,0,
	0,564,563,1,0,0,0,564,565,1,0,0,0,565,566,1,0,0,0,566,567,6,48,1,0,567,
	99,1,0,0,0,568,569,5,36,0,0,569,570,5,36,0,0,570,571,1,0,0,0,571,572,6,
	49,1,0,572,101,1,0,0,0,573,574,5,43,0,0,574,103,1,0,0,0,575,576,5,45,0,
	0,576,105,1,0,0,0,577,578,5,94,0,0,578,107,1,0,0,0,579,580,5,61,0,0,580,
	109,1,0,0,0,581,582,5,60,0,0,582,111,1,0,0,0,583,584,5,62,0,0,584,113,1,
	0,0,0,585,586,5,92,0,0,586,587,5,108,0,0,587,588,5,101,0,0,588,115,1,0,
	0,0,589,590,5,92,0,0,590,591,5,103,0,0,591,592,5,101,0,0,592,117,1,0,0,
	0,593,594,5,44,0,0,594,119,1,0,0,0,595,596,5,94,0,0,596,597,7,1,0,0,597,
	121,1,0,0,0,598,599,5,94,0,0,599,600,7,2,0,0,600,123,1,0,0,0,601,603,3,
	126,62,0,602,601,1,0,0,0,603,604,1,0,0,0,604,602,1,0,0,0,604,605,1,0,0,
	0,605,606,1,0,0,0,606,610,5,46,0,0,607,609,3,126,62,0,608,607,1,0,0,0,609,
	612,1,0,0,0,610,608,1,0,0,0,610,611,1,0,0,0,611,614,1,0,0,0,612,610,1,0,
	0,0,613,615,3,130,64,0,614,613,1,0,0,0,614,615,1,0,0,0,615,634,1,0,0,0,
	616,618,5,46,0,0,617,619,3,126,62,0,618,617,1,0,0,0,619,620,1,0,0,0,620,
	618,1,0,0,0,620,621,1,0,0,0,621,623,1,0,0,0,622,624,3,130,64,0,623,622,
	1,0,0,0,623,624,1,0,0,0,624,634,1,0,0,0,625,627,3,126,62,0,626,625,1,0,
	0,0,627,628,1,0,0,0,628,626,1,0,0,0,628,629,1,0,0,0,629,631,1,0,0,0,630,
	632,3,130,64,0,631,630,1,0,0,0,631,632,1,0,0,0,632,634,1,0,0,0,633,602,
	1,0,0,0,633,616,1,0,0,0,633,626,1,0,0,0,634,125,1,0,0,0,635,636,7,1,0,0,
	636,127,1,0,0,0,637,641,7,2,0,0,638,640,7,4,0,0,639,638,1,0,0,0,640,643,
	1,0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,129,1,0,0,0,643,641,1,0,0,0,
	644,646,7,5,0,0,645,647,7,6,0,0,646,645,1,0,0,0,646,647,1,0,0,0,647,649,
	1,0,0,0,648,650,3,126,62,0,649,648,1,0,0,0,650,651,1,0,0,0,651,649,1,0,
	0,0,651,652,1,0,0,0,652,131,1,0,0,0,653,793,5,92,0,0,654,655,5,97,0,0,655,
	656,5,108,0,0,656,657,5,112,0,0,657,658,5,104,0,0,658,794,5,97,0,0,659,
	660,5,98,0,0,660,661,5,101,0,0,661,662,5,116,0,0,662,794,5,97,0,0,663,664,
	5,103,0,0,664,665,5,97,0,0,665,666,5,109,0,0,666,667,5,109,0,0,667,794,
	5,97,0,0,668,669,5,100,0,0,669,670,5,101,0,0,670,671,5,108,0,0,671,672,
	5,116,0,0,672,794,5,97,0,0,673,674,5,101,0,0,674,675,5,112,0,0,675,676,
	5,115,0,0,676,677,5,105,0,0,677,678,5,108,0,0,678,679,5,111,0,0,679,794,
	5,110,0,0,680,681,5,122,0,0,681,682,5,101,0,0,682,683,5,116,0,0,683,794,
	5,97,0,0,684,685,5,101,0,0,685,686,5,116,0,0,686,794,5,97,0,0,687,688,5,
	116,0,0,688,689,5,104,0,0,689,690,5,101,0,0,690,691,5,116,0,0,691,794,5,
	97,0,0,692,693,5,105,0,0,693,694,5,111,0,0,694,695,5,116,0,0,695,794,5,
	97,0,0,696,697,5,107,0,0,697,698,5,97,0,0,698,699,5,112,0,0,699,700,5,112,
	0,0,700,794,5,97,0,0,701,702,5,108,0,0,702,703,5,97,0,0,703,704,5,109,0,
	0,704,705,5,98,0,0,705,706,5,100,0,0,706,794,5,97,0,0,707,708,5,109,0,0,
	708,794,5,117,0,0,709,710,5,110,0,0,710,794,5,117,0,0,711,712,5,120,0,0,
	712,794,5,105,0,0,713,714,5,114,0,0,714,715,5,104,0,0,715,794,5,111,0,0,
	716,717,5,115,0,0,717,718,5,105,0,0,718,719,5,103,0,0,719,720,5,109,0,0,
	720,794,5,97,0,0,721,722,5,116,0,0,722,723,5,97,0,0,723,794,5,117,0,0,724,
	725,5,117,0,0,725,726,5,112,0,0,726,727,5,115,0,0,727,728,5,105,0,0,728,
	729,5,108,0,0,729,730,5,111,0,0,730,794,5,110,0,0,731,732,5,112,0,0,732,
	733,5,104,0,0,733,794,5,105,0,0,734,735,5,99,0,0,735,736,5,104,0,0,736,
	794,5,105,0,0,737,738,5,112,0,0,738,739,5,115,0,0,739,794,5,105,0,0,740,
	741,5,111,0,0,741,742,5,109,0,0,742,743,5,101,0,0,743,744,5,103,0,0,744,
	794,5,97,0,0,745,746,5,71,0,0,746,747,5,97,0,0,747,748,5,109,0,0,748,749,
	5,109,0,0,749,794,5,97,0,0,750,751,5,68,0,0,751,752,5,101,0,0,752,753,5,
	108,0,0,753,754,5,116,0,0,754,794,5,97,0,0,755,756,5,84,0,0,756,757,5,104,
	0,0,757,758,5,101,0,0,758,759,5,116,0,0,759,794,5,97,0,0,760,761,5,76,0,
	0,761,762,5,97,0,0,762,763,5,109,0,0,763,764,5,98,0,0,764,765,5,100,0,0,
	765,794,5,97,0,0,766,767,5,88,0,0,767,794,5,105,0,0,768,769,5,80,0,0,769,
	794,5,105,0,0,770,771,5,83,0,0,771,772,5,105,0,0,772,773,5,103,0,0,773,
	774,5,109,0,0,774,794,5,97,0,0,775,776,5,85,0,0,776,777,5,112,0,0,777,778,
	5,115,0,0,778,779,5,105,0,0,779,780,5,108,0,0,780,781,5,111,0,0,781,794,
	5,110,0,0,782,783,5,80,0,0,783,784,5,104,0,0,784,794,5,105,0,0,785,786,
	5,80,0,0,786,787,5,115,0,0,787,794,5,105,0,0,788,789,5,79,0,0,789,790,5,
	109,0,0,790,791,5,101,0,0,791,792,5,103,0,0,792,794,5,97,0,0,793,654,1,
	0,0,0,793,659,1,0,0,0,793,663,1,0,0,0,793,668,1,0,0,0,793,673,1,0,0,0,793,
	680,1,0,0,0,793,684,1,0,0,0,793,687,1,0,0,0,793,692,1,0,0,0,793,696,1,0,
	0,0,793,701,1,0,0,0,793,707,1,0,0,0,793,709,1,0,0,0,793,711,1,0,0,0,793,
	713,1,0,0,0,793,716,1,0,0,0,793,721,1,0,0,0,793,724,1,0,0,0,793,731,1,0,
	0,0,793,734,1,0,0,0,793,737,1,0,0,0,793,740,1,0,0,0,793,745,1,0,0,0,793,
	750,1,0,0,0,793,755,1,0,0,0,793,760,1,0,0,0,793,766,1,0,0,0,793,768,1,0,
	0,0,793,770,1,0,0,0,793,775,1,0,0,0,793,782,1,0,0,0,793,785,1,0,0,0,793,
	788,1,0,0,0,794,133,1,0,0,0,795,796,5,92,0,0,796,797,5,98,0,0,797,798,5,
	101,0,0,798,799,5,103,0,0,799,800,5,105,0,0,800,801,5,110,0,0,801,802,5,
	123,0,0,802,803,5,98,0,0,803,804,5,109,0,0,804,805,5,97,0,0,805,806,5,116,
	0,0,806,807,5,114,0,0,807,808,5,105,0,0,808,809,5,120,0,0,809,810,5,125,
	0,0,810,135,1,0,0,0,811,812,5,92,0,0,812,813,5,101,0,0,813,814,5,110,0,
	0,814,815,5,100,0,0,815,816,5,123,0,0,816,817,5,98,0,0,817,818,5,109,0,
	0,818,819,5,97,0,0,819,820,5,116,0,0,820,821,5,114,0,0,821,822,5,105,0,
	0,822,823,5,120,0,0,823,824,5,125,0,0,824,137,1,0,0,0,825,826,5,38,0,0,
	826,139,1,0,0,0,827,828,5,92,0,0,828,829,5,92,0,0,829,141,1,0,0,0,830,832,
	7,0,0,0,831,830,1,0,0,0,832,835,1,0,0,0,833,831,1,0,0,0,833,834,1,0,0,0,
	834,836,1,0,0,0,835,833,1,0,0,0,836,837,5,95,0,0,837,838,5,123,0,0,838,
	840,1,0,0,0,839,841,7,4,0,0,840,839,1,0,0,0,841,842,1,0,0,0,842,840,1,0,
	0,0,842,843,1,0,0,0,843,844,1,0,0,0,844,854,5,125,0,0,845,847,7,0,0,0,846,
	845,1,0,0,0,847,850,1,0,0,0,848,846,1,0,0,0,848,849,1,0,0,0,849,851,1,0,
	0,0,850,848,1,0,0,0,851,852,5,95,0,0,852,854,7,4,0,0,853,833,1,0,0,0,853,
	848,1,0,0,0,854,143,1,0,0,0,855,856,5,94,0,0,856,857,7,2,0,0,857,858,3,
	142,70,0,858,145,1,0,0,0,859,862,3,128,63,0,860,862,3,132,65,0,861,859,
	1,0,0,0,861,860,1,0,0,0,862,864,1,0,0,0,863,865,3,142,70,0,864,863,1,0,
	0,0,864,865,1,0,0,0,865,147,1,0,0,0,866,868,7,7,0,0,867,866,1,0,0,0,868,
	869,1,0,0,0,869,867,1,0,0,0,869,870,1,0,0,0,870,871,1,0,0,0,871,872,6,73,
	1,0,872,149,1,0,0,0,873,874,5,92,0,0,874,875,5,32,0,0,875,876,1,0,0,0,876,
	877,6,74,1,0,877,151,1,0,0,0,878,879,5,92,0,0,879,880,5,58,0,0,880,881,
	1,0,0,0,881,882,6,75,1,0,882,153,1,0,0,0,883,884,5,160,0,0,884,885,1,0,
	0,0,885,886,6,76,1,0,886,155,1,0,0,0,887,888,9,0,0,0,888,157,1,0,0,0,889,
	890,5,93,0,0,890,891,1,0,0,0,891,892,6,78,2,0,892,159,1,0,0,0,893,894,5,
	92,0,0,894,895,5,114,0,0,895,896,5,98,0,0,896,897,5,114,0,0,897,898,5,97,
	0,0,898,899,5,99,0,0,899,900,5,107,0,0,900,901,1,0,0,0,901,902,6,79,2,0,
	902,161,1,0,0,0,903,904,5,92,0,0,904,905,5,102,0,0,905,906,5,114,0,0,906,
	907,5,97,0,0,907,908,5,99,0,0,908,163,1,0,0,0,909,910,5,92,0,0,910,911,
	5,102,0,0,911,912,5,114,0,0,912,913,5,97,0,0,913,914,5,99,0,0,914,918,1,
	0,0,0,915,917,7,0,0,0,916,915,1,0,0,0,917,920,1,0,0,0,918,916,1,0,0,0,918,
	919,1,0,0,0,919,921,1,0,0,0,920,918,1,0,0,0,921,922,7,1,0,0,922,923,7,1,
	0,0,923,165,1,0,0,0,924,925,5,92,0,0,925,926,5,99,0,0,926,927,5,100,0,0,
	927,928,5,111,0,0,928,929,5,116,0,0,929,167,1,0,0,0,930,931,5,92,0,0,931,
	932,5,116,0,0,932,933,5,105,0,0,933,934,5,109,0,0,934,935,5,101,0,0,935,
	936,5,115,0,0,936,169,1,0,0,0,937,938,5,92,0,0,938,939,5,115,0,0,939,940,
	5,113,0,0,940,941,5,114,0,0,941,942,5,116,0,0,942,171,1,0,0,0,943,944,5,
	44,0,0,944,173,1,0,0,0,945,946,5,94,0,0,946,175,1,0,0,0,947,951,7,2,0,0,
	948,950,7,4,0,0,949,948,1,0,0,0,950,953,1,0,0,0,951,949,1,0,0,0,951,952,
	1,0,0,0,952,177,1,0,0,0,953,951,1,0,0,0,954,955,5,40,0,0,955,179,1,0,0,
	0,956,957,5,41,0,0,957,181,1,0,0,0,958,959,5,123,0,0,959,183,1,0,0,0,960,
	961,5,125,0,0,961,185,1,0,0,0,962,963,5,49,0,0,963,187,1,0,0,0,964,966,
	5,45,0,0,965,964,1,0,0,0,965,966,1,0,0,0,966,968,1,0,0,0,967,969,3,190,
	94,0,968,967,1,0,0,0,969,970,1,0,0,0,970,968,1,0,0,0,970,971,1,0,0,0,971,
	972,1,0,0,0,972,976,5,46,0,0,973,975,3,190,94,0,974,973,1,0,0,0,975,978,
	1,0,0,0,976,974,1,0,0,0,976,977,1,0,0,0,977,997,1,0,0,0,978,976,1,0,0,0,
	979,981,5,45,0,0,980,979,1,0,0,0,980,981,1,0,0,0,981,982,1,0,0,0,982,984,
	5,46,0,0,983,985,3,190,94,0,984,983,1,0,0,0,985,986,1,0,0,0,986,984,1,0,
	0,0,986,987,1,0,0,0,987,997,1,0,0,0,988,990,5,45,0,0,989,988,1,0,0,0,989,
	990,1,0,0,0,990,992,1,0,0,0,991,993,3,190,94,0,992,991,1,0,0,0,993,994,
	1,0,0,0,994,992,1,0,0,0,994,995,1,0,0,0,995,997,1,0,0,0,996,965,1,0,0,0,
	996,980,1,0,0,0,996,989,1,0,0,0,997,189,1,0,0,0,998,999,7,1,0,0,999,191,
	1,0,0,0,1000,1001,5,92,0,0,1001,1002,5,108,0,0,1002,1003,5,101,0,0,1003,
	1004,5,102,0,0,1004,1005,5,116,0,0,1005,1006,1,0,0,0,1006,1007,6,95,1,0,
	1007,193,1,0,0,0,1008,1009,5,92,0,0,1009,1010,5,114,0,0,1010,1011,5,105,
	0,0,1011,1012,5,103,0,0,1012,1013,5,104,0,0,1013,1014,5,116,0,0,1014,1015,
	1,0,0,0,1015,1016,6,96,1,0,1016,195,1,0,0,0,1017,1019,7,7,0,0,1018,1017,
	1,0,0,0,1019,1020,1,0,0,0,1020,1018,1,0,0,0,1020,1021,1,0,0,0,1021,1022,
	1,0,0,0,1022,1023,6,97,1,0,1023,197,1,0,0,0,1024,1025,5,92,0,0,1025,1026,
	5,32,0,0,1026,1027,1,0,0,0,1027,1028,6,98,1,0,1028,199,1,0,0,0,1029,1030,
	5,92,0,0,1030,1031,5,58,0,0,1031,1032,1,0,0,0,1032,1033,6,99,1,0,1033,201,
	1,0,0,0,1034,1035,5,160,0,0,1035,1036,1,0,0,0,1036,1037,6,100,1,0,1037,
	203,1,0,0,0,1038,1039,9,0,0,0,1039,205,1,0,0,0,47,0,1,239,260,273,287,316,
	350,403,405,413,495,508,522,538,552,564,604,610,614,620,623,628,631,633,
	641,646,651,793,833,842,848,853,861,864,869,918,951,965,970,976,980,986,
	989,994,996,1020,3,2,1,0,6,0,0,2,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!LatexLexer.__ATN) {
			LatexLexer.__ATN = new ATNDeserializer().deserialize(LatexLexer._serializedATN);
		}

		return LatexLexer.__ATN;
	}


	static DecisionsToDFA = LatexLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}