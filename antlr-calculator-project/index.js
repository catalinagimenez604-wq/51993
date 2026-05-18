import SegunLexer from "./generated/SegunLexer.js";
import SegunParser from "./generated/SegunParser.js";
import { CustomSegunVisitor } from "./CustomSegunVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

// ── Listener de errores personalizado ────────────────────────────────────────
class ErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errores = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errores.push(`  Línea ${line}:${column} → ${msg}`);
    }
}

async function main() {
    let input;
    let nombreArchivo = 'input.txt';

    // Chequear si se pasó un archivo por argumento (ej: node index.js input_correcto_1.txt)
    if (process.argv[2]) {
        nombreArchivo = process.argv[2];
    }

    try {
        input = fs.readFileSync(nombreArchivo, 'utf8');
        console.log(`\nArchivo de entrada: ${nombreArchivo}`);
    } catch (err) {
        input = await leerCadena();
    }

    console.log("─".repeat(60));
    console.log("Contenido de entrada:");
    console.log(input);
    console.log("─".repeat(60));

    // ── Análisis léxico ───────────────────────────────────────────────────────
    const inputStream = CharStreams.fromString(input);
    const lexer = new SegunLexer(inputStream);

    const lexerErrorListener = new ErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    const tokenStream = new CommonTokenStream(lexer);
    tokenStream.fill();

    // ── Tabla de lexemas/tokens ───────────────────────────────────────────────
    console.log("\n── Tabla de Lexemas / Tokens ───────────────────────────────");
    console.log(String("N°").padEnd(5) + String("Lexema").padEnd(20) + String("Token").padEnd(25) + "Línea");
    console.log("─".repeat(60));

    const tokenNames = {
        1: 'SEGUN', 2: 'HACER', 3: 'LLAVE_ABR', 4: 'LLAVE_CIE',
        5: 'FINSEGUN', 6: 'CASO', 7: 'DOS_PUNTOS', 8: 'DEFECTO',
        9: 'IMPRIMIR', 10: 'PAR_ABR', 11: 'PAR_CIE',
        12: 'PUNTO_COMA', 13: 'SALIR', 14: 'CADENA', 15: 'NUMERO'
    };
    const tokens = tokenStream.tokens;
    let contador = 1;
    for (const tok of tokens) {
        if (tok.type === -1) continue; // EOF
        const lexema = tok.text;
        const tokenNombre = tokenNames[tok.type] || `TOKEN_${tok.type}`;
        console.log(
            String(contador).padEnd(5) +
            String(lexema).padEnd(20) +
            String(tokenNombre).padEnd(25) +
            tok.line
        );
        contador++;
    }

    if (lexerErrorListener.errores.length > 0) {
        console.log("\n✗ Errores léxicos encontrados:");
        lexerErrorListener.errores.forEach(e => console.log(e));
        return;
    }

    // ── Análisis sintáctico ───────────────────────────────────────────────────
    const inputStream2 = CharStreams.fromString(input);
    const lexer2 = new SegunLexer(inputStream2);
    lexer2.removeErrorListeners();
    const tokenStream2 = new CommonTokenStream(lexer2);

    const parser = new SegunParser(tokenStream2);
    const parserErrorListener = new ErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrorListener);

    const tree = parser.programa();

    console.log("\n── Análisis Léxico y Sintáctico ────────────────────────────");
    if (parserErrorListener.errores.length > 0) {
        console.log("✗ Se encontraron errores sintácticos:");
        parserErrorListener.errores.forEach(e => console.log(e));
        return;
    }

    console.log("✓ Entrada válida. No se encontraron errores.");

    // ── Árbol de análisis sintáctico ──────────────────────────────────────────
    console.log("\n── Árbol de Análisis Sintáctico ────────────────────────────");
    const cadenaTree = tree.toStringTree(parser.ruleNames);
    console.log(cadenaTree);

    // ── Interpretación y traducción ───────────────────────────────────────────
    const visitor = new CustomSegunVisitor();
    visitor.visit(tree);
}

function leerCadena() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise(resolve => {
        rl.question("Ingrese el código fuente: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

main();
