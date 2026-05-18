// Generated from Segun.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class SegunLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, CADENA=14, NUMERO=15, WS=16;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
			"T__9", "T__10", "T__11", "T__12", "CADENA", "NUMERO", "CARACTER", "LETRA", 
			"DIGITO", "SIMBOLO", "WS"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'seg\\u00FAn'", "'hacer'", "'{'", "'}'", "'finseg\\u00FAn'", "'caso'", 
			"':'", "'defecto'", "'imprimir'", "'('", "')'", "';'", "'salir'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, "CADENA", "NUMERO", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public SegunLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "Segun.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\u0004\u0000\u0010\u0086\u0006\uffff\uffff\u0002\u0000\u0007\u0000\u0002"+
		"\u0001\u0007\u0001\u0002\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002"+
		"\u0004\u0007\u0004\u0002\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002"+
		"\u0007\u0007\u0007\u0002\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002"+
		"\u000b\u0007\u000b\u0002\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e"+
		"\u0002\u000f\u0007\u000f\u0002\u0010\u0007\u0010\u0002\u0011\u0007\u0011"+
		"\u0002\u0012\u0007\u0012\u0002\u0013\u0007\u0013\u0001\u0000\u0001\u0000"+
		"\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0005"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\b\u0001\b\u0001\t\u0001\t\u0001\n\u0001\n\u0001\u000b"+
		"\u0001\u000b\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\f\u0001\r\u0001"+
		"\r\u0005\ri\b\r\n\r\f\rl\t\r\u0001\r\u0001\r\u0001\u000e\u0004\u000eq"+
		"\b\u000e\u000b\u000e\f\u000er\u0001\u000f\u0001\u000f\u0001\u000f\u0003"+
		"\u000fx\b\u000f\u0001\u0010\u0001\u0010\u0001\u0011\u0001\u0011\u0001"+
		"\u0012\u0001\u0012\u0001\u0013\u0004\u0013\u0081\b\u0013\u000b\u0013\f"+
		"\u0013\u0082\u0001\u0013\u0001\u0013\u0000\u0000\u0014\u0001\u0001\u0003"+
		"\u0002\u0005\u0003\u0007\u0004\t\u0005\u000b\u0006\r\u0007\u000f\b\u0011"+
		"\t\u0013\n\u0015\u000b\u0017\f\u0019\r\u001b\u000e\u001d\u000f\u001f\u0000"+
		"!\u0000#\u0000%\u0000\'\u0010\u0001\u0000\u0004\u0002\u0000AZaz\u0001"+
		"\u000009\t\u0000 !\'),.:;??__\u00c0\u00d6\u00d8\u00de\u00e0\u00ff\u0003"+
		"\u0000\t\n\r\r  \u0086\u0000\u0001\u0001\u0000\u0000\u0000\u0000\u0003"+
		"\u0001\u0000\u0000\u0000\u0000\u0005\u0001\u0000\u0000\u0000\u0000\u0007"+
		"\u0001\u0000\u0000\u0000\u0000\t\u0001\u0000\u0000\u0000\u0000\u000b\u0001"+
		"\u0000\u0000\u0000\u0000\r\u0001\u0000\u0000\u0000\u0000\u000f\u0001\u0000"+
		"\u0000\u0000\u0000\u0011\u0001\u0000\u0000\u0000\u0000\u0013\u0001\u0000"+
		"\u0000\u0000\u0000\u0015\u0001\u0000\u0000\u0000\u0000\u0017\u0001\u0000"+
		"\u0000\u0000\u0000\u0019\u0001\u0000\u0000\u0000\u0000\u001b\u0001\u0000"+
		"\u0000\u0000\u0000\u001d\u0001\u0000\u0000\u0000\u0000\'\u0001\u0000\u0000"+
		"\u0000\u0001)\u0001\u0000\u0000\u0000\u0003/\u0001\u0000\u0000\u0000\u0005"+
		"5\u0001\u0000\u0000\u0000\u00077\u0001\u0000\u0000\u0000\t9\u0001\u0000"+
		"\u0000\u0000\u000bB\u0001\u0000\u0000\u0000\rG\u0001\u0000\u0000\u0000"+
		"\u000fI\u0001\u0000\u0000\u0000\u0011Q\u0001\u0000\u0000\u0000\u0013Z"+
		"\u0001\u0000\u0000\u0000\u0015\\\u0001\u0000\u0000\u0000\u0017^\u0001"+
		"\u0000\u0000\u0000\u0019`\u0001\u0000\u0000\u0000\u001bf\u0001\u0000\u0000"+
		"\u0000\u001dp\u0001\u0000\u0000\u0000\u001fw\u0001\u0000\u0000\u0000!"+
		"y\u0001\u0000\u0000\u0000#{\u0001\u0000\u0000\u0000%}\u0001\u0000\u0000"+
		"\u0000\'\u0080\u0001\u0000\u0000\u0000)*\u0005s\u0000\u0000*+\u0005e\u0000"+
		"\u0000+,\u0005g\u0000\u0000,-\u0005\u00fa\u0000\u0000-.\u0005n\u0000\u0000"+
		".\u0002\u0001\u0000\u0000\u0000/0\u0005h\u0000\u000001\u0005a\u0000\u0000"+
		"12\u0005c\u0000\u000023\u0005e\u0000\u000034\u0005r\u0000\u00004\u0004"+
		"\u0001\u0000\u0000\u000056\u0005{\u0000\u00006\u0006\u0001\u0000\u0000"+
		"\u000078\u0005}\u0000\u00008\b\u0001\u0000\u0000\u00009:\u0005f\u0000"+
		"\u0000:;\u0005i\u0000\u0000;<\u0005n\u0000\u0000<=\u0005s\u0000\u0000"+
		"=>\u0005e\u0000\u0000>?\u0005g\u0000\u0000?@\u0005\u00fa\u0000\u0000@"+
		"A\u0005n\u0000\u0000A\n\u0001\u0000\u0000\u0000BC\u0005c\u0000\u0000C"+
		"D\u0005a\u0000\u0000DE\u0005s\u0000\u0000EF\u0005o\u0000\u0000F\f\u0001"+
		"\u0000\u0000\u0000GH\u0005:\u0000\u0000H\u000e\u0001\u0000\u0000\u0000"+
		"IJ\u0005d\u0000\u0000JK\u0005e\u0000\u0000KL\u0005f\u0000\u0000LM\u0005"+
		"e\u0000\u0000MN\u0005c\u0000\u0000NO\u0005t\u0000\u0000OP\u0005o\u0000"+
		"\u0000P\u0010\u0001\u0000\u0000\u0000QR\u0005i\u0000\u0000RS\u0005m\u0000"+
		"\u0000ST\u0005p\u0000\u0000TU\u0005r\u0000\u0000UV\u0005i\u0000\u0000"+
		"VW\u0005m\u0000\u0000WX\u0005i\u0000\u0000XY\u0005r\u0000\u0000Y\u0012"+
		"\u0001\u0000\u0000\u0000Z[\u0005(\u0000\u0000[\u0014\u0001\u0000\u0000"+
		"\u0000\\]\u0005)\u0000\u0000]\u0016\u0001\u0000\u0000\u0000^_\u0005;\u0000"+
		"\u0000_\u0018\u0001\u0000\u0000\u0000`a\u0005s\u0000\u0000ab\u0005a\u0000"+
		"\u0000bc\u0005l\u0000\u0000cd\u0005i\u0000\u0000de\u0005r\u0000\u0000"+
		"e\u001a\u0001\u0000\u0000\u0000fj\u0005\"\u0000\u0000gi\u0003\u001f\u000f"+
		"\u0000hg\u0001\u0000\u0000\u0000il\u0001\u0000\u0000\u0000jh\u0001\u0000"+
		"\u0000\u0000jk\u0001\u0000\u0000\u0000km\u0001\u0000\u0000\u0000lj\u0001"+
		"\u0000\u0000\u0000mn\u0005\"\u0000\u0000n\u001c\u0001\u0000\u0000\u0000"+
		"oq\u0003#\u0011\u0000po\u0001\u0000\u0000\u0000qr\u0001\u0000\u0000\u0000"+
		"rp\u0001\u0000\u0000\u0000rs\u0001\u0000\u0000\u0000s\u001e\u0001\u0000"+
		"\u0000\u0000tx\u0003!\u0010\u0000ux\u0003#\u0011\u0000vx\u0003%\u0012"+
		"\u0000wt\u0001\u0000\u0000\u0000wu\u0001\u0000\u0000\u0000wv\u0001\u0000"+
		"\u0000\u0000x \u0001\u0000\u0000\u0000yz\u0007\u0000\u0000\u0000z\"\u0001"+
		"\u0000\u0000\u0000{|\u0007\u0001\u0000\u0000|$\u0001\u0000\u0000\u0000"+
		"}~\u0007\u0002\u0000\u0000~&\u0001\u0000\u0000\u0000\u007f\u0081\u0007"+
		"\u0003\u0000\u0000\u0080\u007f\u0001\u0000\u0000\u0000\u0081\u0082\u0001"+
		"\u0000\u0000\u0000\u0082\u0080\u0001\u0000\u0000\u0000\u0082\u0083\u0001"+
		"\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0085\u0006"+
		"\u0013\u0000\u0000\u0085(\u0001\u0000\u0000\u0000\u0005\u0000jrw\u0082"+
		"\u0001\u0006\u0000\u0000";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}