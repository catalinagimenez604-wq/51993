// Generated from Segun.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link SegunParser}.
 */
public interface SegunListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link SegunParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(SegunParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(SegunParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void enterInstruccion(SegunParser.InstruccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#instruccion}.
	 * @param ctx the parse tree
	 */
	void exitInstruccion(SegunParser.InstruccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void enterSeleccion(SegunParser.SeleccionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#seleccion}.
	 * @param ctx the parse tree
	 */
	void exitSeleccion(SegunParser.SeleccionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#caso}.
	 * @param ctx the parse tree
	 */
	void enterCaso(SegunParser.CasoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#caso}.
	 * @param ctx the parse tree
	 */
	void exitCaso(SegunParser.CasoContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void enterCaso_defecto(SegunParser.Caso_defectoContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#caso_defecto}.
	 * @param ctx the parse tree
	 */
	void exitCaso_defecto(SegunParser.Caso_defectoContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void enterSentencia(SegunParser.SentenciaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#sentencia}.
	 * @param ctx the parse tree
	 */
	void exitSentencia(SegunParser.SentenciaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#salida}.
	 * @param ctx the parse tree
	 */
	void enterSalida(SegunParser.SalidaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#salida}.
	 * @param ctx the parse tree
	 */
	void exitSalida(SegunParser.SalidaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#terminar}.
	 * @param ctx the parse tree
	 */
	void enterTerminar(SegunParser.TerminarContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#terminar}.
	 * @param ctx the parse tree
	 */
	void exitTerminar(SegunParser.TerminarContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#expresion}.
	 * @param ctx the parse tree
	 */
	void enterExpresion(SegunParser.ExpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#expresion}.
	 * @param ctx the parse tree
	 */
	void exitExpresion(SegunParser.ExpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#constante}.
	 * @param ctx the parse tree
	 */
	void enterConstante(SegunParser.ConstanteContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#constante}.
	 * @param ctx the parse tree
	 */
	void exitConstante(SegunParser.ConstanteContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(SegunParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(SegunParser.CadenaContext ctx);
	/**
	 * Enter a parse tree produced by {@link SegunParser#numero}.
	 * @param ctx the parse tree
	 */
	void enterNumero(SegunParser.NumeroContext ctx);
	/**
	 * Exit a parse tree produced by {@link SegunParser#numero}.
	 * @param ctx the parse tree
	 */
	void exitNumero(SegunParser.NumeroContext ctx);
}