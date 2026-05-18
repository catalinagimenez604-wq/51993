// Generated from Segun.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import SegunListener from './SegunListener.js';
import SegunVisitor from './SegunVisitor.js';

const serializedATN = [4,1,16,93,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,4,0,26,8,
0,11,0,12,0,27,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,4,2,39,8,2,11,2,12,2,
40,1,2,3,2,44,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,4,3,54,8,3,11,3,12,3,55,
1,3,1,3,1,4,1,4,1,4,1,4,4,4,64,8,4,11,4,12,4,65,1,4,1,4,1,5,1,5,3,5,72,8,
5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,3,9,87,8,9,1,10,1,
10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,0,87,0,25,1,0,
0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,48,1,0,0,0,8,59,1,0,0,0,10,71,1,0,0,0,12,
73,1,0,0,0,14,79,1,0,0,0,16,82,1,0,0,0,18,86,1,0,0,0,20,88,1,0,0,0,22,90,
1,0,0,0,24,26,3,2,1,0,25,24,1,0,0,0,26,27,1,0,0,0,27,25,1,0,0,0,27,28,1,
0,0,0,28,29,1,0,0,0,29,30,5,0,0,1,30,1,1,0,0,0,31,32,3,4,2,0,32,3,1,0,0,
0,33,34,5,1,0,0,34,35,3,16,8,0,35,36,5,2,0,0,36,38,5,3,0,0,37,39,3,6,3,0,
38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,
44,3,8,4,0,43,42,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,0,45,46,5,4,0,0,46,47,
5,5,0,0,47,5,1,0,0,0,48,49,5,6,0,0,49,50,3,18,9,0,50,51,5,7,0,0,51,53,5,
3,0,0,52,54,3,10,5,0,53,52,1,0,0,0,54,55,1,0,0,0,55,53,1,0,0,0,55,56,1,0,
0,0,56,57,1,0,0,0,57,58,5,4,0,0,58,7,1,0,0,0,59,60,5,8,0,0,60,61,5,7,0,0,
61,63,5,3,0,0,62,64,3,10,5,0,63,62,1,0,0,0,64,65,1,0,0,0,65,63,1,0,0,0,65,
66,1,0,0,0,66,67,1,0,0,0,67,68,5,4,0,0,68,9,1,0,0,0,69,72,3,12,6,0,70,72,
3,14,7,0,71,69,1,0,0,0,71,70,1,0,0,0,72,11,1,0,0,0,73,74,5,9,0,0,74,75,5,
10,0,0,75,76,3,20,10,0,76,77,5,11,0,0,77,78,5,12,0,0,78,13,1,0,0,0,79,80,
5,13,0,0,80,81,5,12,0,0,81,15,1,0,0,0,82,83,3,18,9,0,83,17,1,0,0,0,84,87,
3,20,10,0,85,87,3,22,11,0,86,84,1,0,0,0,86,85,1,0,0,0,87,19,1,0,0,0,88,89,
5,14,0,0,89,21,1,0,0,0,90,91,5,15,0,0,91,23,1,0,0,0,7,27,40,43,55,65,71,
86];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class SegunParser extends antlr4.Parser {

    static grammarFileName = "Segun.g4";
    static literalNames = [ null, "'seg\\u00FAn'", "'hacer'", "'{'", "'}'", 
                            "'finseg\\u00FAn'", "'caso'", "':'", "'defecto'", 
                            "'imprimir'", "'('", "')'", "';'", "'salir'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "CADENA", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "seleccion", "caso", 
                         "caso_defecto", "sentencia", "salida", "terminar", 
                         "expresion", "constante", "cadena", "numero" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = SegunParser.ruleNames;
        this.literalNames = SegunParser.literalNames;
        this.symbolicNames = SegunParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, SegunParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 25; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 24;
	            this.instruccion();
	            this.state = 27; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 29;
	        this.match(SegunParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, SegunParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, SegunParser.RULE_seleccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(SegunParser.T__0);
	        this.state = 34;
	        this.expresion();
	        this.state = 35;
	        this.match(SegunParser.T__1);
	        this.state = 36;
	        this.match(SegunParser.T__2);
	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.caso();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===6);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===8) {
	            this.state = 42;
	            this.caso_defecto();
	        }

	        this.state = 45;
	        this.match(SegunParser.T__3);
	        this.state = 46;
	        this.match(SegunParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, SegunParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(SegunParser.T__5);
	        this.state = 49;
	        this.constante();
	        this.state = 50;
	        this.match(SegunParser.T__6);
	        this.state = 51;
	        this.match(SegunParser.T__2);
	        this.state = 53; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 52;
	            this.sentencia();
	            this.state = 55; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9 || _la===13);
	        this.state = 57;
	        this.match(SegunParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, SegunParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 59;
	        this.match(SegunParser.T__7);
	        this.state = 60;
	        this.match(SegunParser.T__6);
	        this.state = 61;
	        this.match(SegunParser.T__2);
	        this.state = 63; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 62;
	            this.sentencia();
	            this.state = 65; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===9 || _la===13);
	        this.state = 67;
	        this.match(SegunParser.T__3);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, SegunParser.RULE_sentencia);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.salida();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, SegunParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(SegunParser.T__8);
	        this.state = 74;
	        this.match(SegunParser.T__9);
	        this.state = 75;
	        this.cadena();
	        this.state = 76;
	        this.match(SegunParser.T__10);
	        this.state = 77;
	        this.match(SegunParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, SegunParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(SegunParser.T__12);
	        this.state = 80;
	        this.match(SegunParser.T__11);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, SegunParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, SegunParser.RULE_constante);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.cadena();
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, SegunParser.RULE_cadena);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(SegunParser.CADENA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, SegunParser.RULE_numero);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 90;
	        this.match(SegunParser.NUMERO);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

SegunParser.EOF = antlr4.Token.EOF;
SegunParser.T__0 = 1;
SegunParser.T__1 = 2;
SegunParser.T__2 = 3;
SegunParser.T__3 = 4;
SegunParser.T__4 = 5;
SegunParser.T__5 = 6;
SegunParser.T__6 = 7;
SegunParser.T__7 = 8;
SegunParser.T__8 = 9;
SegunParser.T__9 = 10;
SegunParser.T__10 = 11;
SegunParser.T__11 = 12;
SegunParser.T__12 = 13;
SegunParser.CADENA = 14;
SegunParser.NUMERO = 15;
SegunParser.WS = 16;

SegunParser.RULE_programa = 0;
SegunParser.RULE_instruccion = 1;
SegunParser.RULE_seleccion = 2;
SegunParser.RULE_caso = 3;
SegunParser.RULE_caso_defecto = 4;
SegunParser.RULE_sentencia = 5;
SegunParser.RULE_salida = 6;
SegunParser.RULE_terminar = 7;
SegunParser.RULE_expresion = 8;
SegunParser.RULE_constante = 9;
SegunParser.RULE_cadena = 10;
SegunParser.RULE_numero = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(SegunParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_seleccion;
    }

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	caso_defecto() {
	    return this.getTypedRuleContext(Caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitSeleccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitSeleccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_caso;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitCaso(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitCaso(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_caso_defecto;
    }

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterCaso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitCaso_defecto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitCaso_defecto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_sentencia;
    }

	salida() {
	    return this.getTypedRuleContext(SalidaContext,0);
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_salida;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_terminar;
    }


	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_expresion;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitExpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitExpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_constante;
    }

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitConstante(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitConstante(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_cadena;
    }

	CADENA() {
	    return this.getToken(SegunParser.CADENA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = SegunParser.RULE_numero;
    }

	NUMERO() {
	    return this.getToken(SegunParser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof SegunListener ) {
	        listener.exitNumero(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof SegunVisitor ) {
	        return visitor.visitNumero(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




SegunParser.ProgramaContext = ProgramaContext; 
SegunParser.InstruccionContext = InstruccionContext; 
SegunParser.SeleccionContext = SeleccionContext; 
SegunParser.CasoContext = CasoContext; 
SegunParser.Caso_defectoContext = Caso_defectoContext; 
SegunParser.SentenciaContext = SentenciaContext; 
SegunParser.SalidaContext = SalidaContext; 
SegunParser.TerminarContext = TerminarContext; 
SegunParser.ExpresionContext = ExpresionContext; 
SegunParser.ConstanteContext = ConstanteContext; 
SegunParser.CadenaContext = CadenaContext; 
SegunParser.NumeroContext = NumeroContext; 
