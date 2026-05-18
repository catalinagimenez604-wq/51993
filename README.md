# Analizador Sintáctico — Lenguaje `según/hacer/finsegún`

**Materia:** Sintaxis y Semántica de Lenguajes de Programación  
**UTN FRM — Ingeniería en Sistemas de Información**  
**Tema asignado:** 39568_5

---

## Descripción

Este proyecto implementa un **analizador léxico, sintáctico, semántico e intérprete** para un lenguaje de selección múltiple basado en las palabras clave `según`, `hacer` y `finsegún`, utilizando **ANTLR4** con **JavaScript (Node.js)**.

El analizador realiza las siguientes tareas:
1. **Análisis léxico y sintáctico** — verifica si la entrada es válida e informa errores con número de línea.
2. **Tabla de lexemas/tokens** — muestra cada lexema reconocido y su tipo de token.
3. **Árbol de análisis sintáctico** — construye y muestra el árbol concreto en formato texto.
4. **Interpretación** — ejecuta el código fuente como un intérprete básico.
5. **Traducción a JavaScript** — genera el código JavaScript equivalente (`switch/case`).

---

## Gramática

```
<programa>      ::= { <instrucción> }+
<instrucción>   ::= <seleccion>
<seleccion>     ::= 'según' <expresión> 'hacer' '{' { <caso> } [ <caso_defecto> ] '}' 'finsegún'
<caso>          ::= 'caso' <constante> ':' '{' { <sentencia> } '}'
<caso_defecto>  ::= 'defecto' ':' '{' { <sentencia> } '}'
<sentencia>     ::= { <salida> }+ | <terminar>
<salida>        ::= 'imprimir' '(' <cadena> ')' ';'
<terminar>      ::= 'salir' ';'
<expresión>     ::= <constante>
<constante>     ::= <cadena> | <número>
<cadena>        ::= '"' { <carácter> } '"'
<número>        ::= { <dígito> }+
```

---

## Requisitos previos

| Herramienta | Versión mínima | Verificación |
|---|---|---|
| Java (JRE) | 1.8 | `java -version` |
| Node.js | 16 | `node -v` |
| npm | — | `npm -v` |

---

## Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/<tu-usuario>/<tu-legajo>.git
cd <tu-legajo>

# 2. Instalar dependencias del proyecto Node
cd antlr-calculator-project
npm install
```

> Las fuentes generadas por ANTLR ya están incluidas en la carpeta `generated/`.  
> Si necesitás regenerarlas:
> ```bash
> npm run antlr4
> ```
> O manualmente:
> ```bash
> java -jar antlr/antlr-4.13.2-complete.jar -Dlanguage=JavaScript -listener -visitor -o ./generated Segun.g4
> ```

---

## Extensión VS Code recomendada

Para resaltado de sintaxis y depuración visual de la gramática `.g4`, instalá la extensión:

**ANTLR4 grammar syntax support** — `mike-lischke.vscode-antlr4`

Al abrir el proyecto en VS Code, se te sugerirá instalarla automáticamente (ver `.vscode/extensions.json`).

La configuración de generación ya está en `.vscode/settings.json` y el debug en `.vscode/launch.json`.

---

## Ejecución

Desde la carpeta `antlr-calculator-project/`:

```bash
# Con el archivo de entrada por defecto (input.txt)
npm start

# Con un archivo específico
node index.js ../input_correcto_1.txt
node index.js ../input_correcto_2.txt
node index.js ../input_incorrecto_1.txt
node index.js ../input_incorrecto_2.txt
```

---

## Ejemplos de entrada y salida

### ✅ Entrada correcta 1 — `input_correcto_1.txt`

**Código fuente:**
```
según 1 hacer {
    caso 1: {
        imprimir("Elegiste la opción uno");
        salir;
    }
    caso 2: {
        imprimir("Elegiste la opción dos");
        salir;
    }
    defecto: {
        imprimir("Opción no reconocida");
        salir;
    }
} finsegún
```

**Salida del analizador:**
```
── Tabla de Lexemas / Tokens ───────────────────────────────
N°   Lexema              Token                    Línea
────────────────────────────────────────────────────────────
1    según               SEGUN                    1
2    1                   NUMERO                   1
3    hacer               HACER                    1
...

── Análisis Léxico y Sintáctico ────────────────────────────
✓ Entrada válida. No se encontraron errores.

── Árbol de Análisis Sintáctico ────────────────────────────
(programa (instruccion (seleccion según (expresion ...) hacer { ... } finsegún)) <EOF>)

── Interpretación / Ejecución ──────────────────────────────
  >> Elegiste la opción uno

── Código JavaScript generado ──────────────────────────────
switch (1) {
  case 1:
    console.log("Elegiste la opción uno");
    break;
  ...
}
```

### ✅ Entrada correcta 2 — `input_correcto_2.txt`

Selección por cadena (`"rojo"`, `"verde"`, `"azul"`). El intérprete ejecuta el caso correspondiente.

### ❌ Entrada incorrecta 1 — `input_incorrecto_1.txt`

Falta la palabra clave `finsegún` al final.

**Error reportado:**
```
✗ Se encontraron errores sintácticos:
  Línea 7:0 → missing 'finsegún' at '<EOF>'
```

### ❌ Entrada incorrecta 2 — `input_incorrecto_2.txt`

Falta el punto y coma `;` después de `imprimir(...)`.

**Error reportado:**
```
✗ Se encontraron errores sintácticos:
  Línea 4:8 → extraneous input 'salir' expecting ';'
```

---

## Estructura del proyecto

```
51993/
├── README.md
├── input_correcto_1.txt
├── input_correcto_2.txt
├── input_incorrecto_1.txt
├── input_incorrecto_2.txt
└── antlr-calculator-project/
    ├── .gitignore
    ├── .vscode/
    │   ├── extensions.json         ← Recomienda la extensión ANTLR4
    │   ├── launch.json             ← Configuración de debug para VS Code
    │   └── settings.json           ← Generación automática con la extensión
    ├── antlr/
    │   └── antlr-4.13.2-complete.jar  ← Herramienta ANTLR4
    ├── generated/
    │   ├── Segun.interp
    │   ├── Segun.tokens
    │   ├── SegunLexer.interp
    │   ├── SegunLexer.js           ← Generado por ANTLR
    │   ├── SegunLexer.tokens
    │   ├── SegunListener.js        ← Generado por ANTLR
    │   ├── SegunParser.js          ← Generado por ANTLR
    │   └── SegunVisitor.js         ← Generado por ANTLR
    ├── node_modules/               ← Generado por npm install (no se sube)
    ├── Segun.g4                    ← Gramática ANTLR4
    ├── index.js                    ← Programa principal
    ├── CustomSegunVisitor.js       ← Visitor: semántica, ejecución y traducción
    └── package.json
```
