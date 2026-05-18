import SegunVisitor from "./generated/SegunVisitor.js";

export class CustomSegunVisitor extends SegunVisitor {

    constructor() {
        super();
        this.output = [];       // Salida de la ejecución
        this.jsCode = [];       // Código JavaScript generado (traducción)
    }

    // ── programa ──────────────────────────────────────────────────────────────
    visitPrograma(ctx) {
        console.log("\n── Interpretación / Ejecución ──────────────────────────────");
        this.jsCode.push("// Código JavaScript traducido");
        for (let i = 0; i < ctx.instruccion().length; i++) {
            this.visit(ctx.instruccion(i));
        }
        console.log("\n── Código JavaScript generado ──────────────────────────────");
        console.log(this.jsCode.join("\n"));
    }

    // ── instruccion ───────────────────────────────────────────────────────────
    visitInstruccion(ctx) {
        return this.visit(ctx.seleccion());
    }

    // ── seleccion (según ... hacer { casos } finsegún) ────────────────────────
    visitSeleccion(ctx) {
        // Obtener el valor de la expresión de control
        const valorControl = this.visit(ctx.expresion());

        // Generar código JS equivalente (switch)
        this.jsCode.push(`switch (${valorControl}) {`);

        let ejecutado = false;

        // Recorrer cada caso
        for (let i = 0; i < ctx.caso().length; i++) {
            const casoCtx = ctx.caso(i);
            const valorCaso = this.visit(casoCtx.constante());

            this.jsCode.push(`  case ${valorCaso}:`);

            // Agregar sentencias del caso al JS
            for (let j = 0; j < casoCtx.sentencia().length; j++) {
                const sent = casoCtx.sentencia(j);
                if (sent.salida()) {
                    const str = this.getCadenaTexto(sent.salida().cadena());
                    this.jsCode.push(`    console.log(${str});`);
                }
                if (sent.terminar()) {
                    this.jsCode.push(`    break;`);
                }
            }

            // Ejecutar si el valor coincide
            if (!ejecutado && String(valorCaso) === String(valorControl)) {
                ejecutado = true;
                this.ejecutarSentencias(casoCtx.sentencia());
            }
        }

        // Caso defecto
        if (ctx.caso_defecto()) {
            this.jsCode.push(`  default:`);
            const defCtx = ctx.caso_defecto();
            for (let j = 0; j < defCtx.sentencia().length; j++) {
                const sent = defCtx.sentencia(j);
                if (sent.salida()) {
                    const str = this.getCadenaTexto(sent.salida().cadena());
                    this.jsCode.push(`    console.log(${str});`);
                }
                if (sent.terminar()) {
                    this.jsCode.push(`    break;`);
                }
            }
            if (!ejecutado) {
                this.ejecutarSentencias(defCtx.sentencia());
            }
        }

        this.jsCode.push(`}`);
    }

    // ── Ejecutar sentencias en tiempo de interpretación ───────────────────────
    ejecutarSentencias(sentencias) {
        for (let i = 0; i < sentencias.length; i++) {
            const sent = sentencias[i];
            if (sent.salida()) {
                const texto = this.getCadenaTexto(sent.salida().cadena());
                // Quitar comillas para imprimir
                const limpio = texto.replace(/^"|"$/g, '');
                console.log(`  >> ${limpio}`);
            }
            if (sent.terminar()) {
                // 'salir' equivale a break, no hay nada más que hacer en interpretación
            }
        }
    }

    // ── expresion ─────────────────────────────────────────────────────────────
    visitExpresion(ctx) {
        return this.visit(ctx.constante());
    }

    // ── constante ─────────────────────────────────────────────────────────────
    visitConstante(ctx) {
        if (ctx.cadena()) return this.visit(ctx.cadena());
        if (ctx.numero()) return this.visit(ctx.numero());
    }

    // ── cadena ────────────────────────────────────────────────────────────────
    visitCadena(ctx) {
        return ctx.CADENA().getText();  // Incluye comillas: "texto"
    }

    // ── numero ────────────────────────────────────────────────────────────────
    visitNumero(ctx) {
        return ctx.NUMERO().getText();  // Texto del número
    }

    // ── Helpers ───────────────────────────────────────────────────────────────
    getCadenaTexto(cadenaCtx) {
        return cadenaCtx.CADENA().getText();  // Retorna "texto" con comillas
    }
}
