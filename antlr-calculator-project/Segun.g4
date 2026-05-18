grammar Segun;

// ── Reglas sintácticas ────────────────────────────────────────────────────────

programa
    : instruccion+ EOF
    ;

instruccion
    : seleccion
    ;

seleccion
    : 'según' expresion 'hacer' '{' caso+ caso_defecto? '}' 'finsegún'
    ;

caso
    : 'caso' constante ':' '{' sentencia+ '}'
    ;

caso_defecto
    : 'defecto' ':' '{' sentencia+ '}'
    ;

sentencia
    : salida
    | terminar
    ;

salida
    : 'imprimir' '(' cadena ')' ';'
    ;

terminar
    : 'salir' ';'
    ;

expresion
    : constante
    ;

constante
    : cadena
    | numero
    ;

cadena
    : CADENA
    ;

numero
    : NUMERO
    ;

// ── Reglas léxicas ────────────────────────────────────────────────────────────

CADENA  : '"' CARACTER* '"' ;
NUMERO  : DIGITO+ ;

fragment CARACTER : LETRA | DIGITO | SIMBOLO ;
fragment LETRA    : [a-zA-Z] ;
fragment DIGITO   : [0-9] ;
fragment SIMBOLO  : '.' | ',' | '!' | '?' | ':' | ';' | ' ' | '_' | '-' | '(' | ')' | '\''
                  | '\u00e0'..'\u00ff'   // vocales con tilde, ñ, ü y caracteres latinos extendidos
                  | '\u00c0'..'\u00d6'   // mayúsculas latinas con acento (À-Ö)
                  | '\u00d8'..'\u00de'   // mayúsculas latinas (Ø-Þ)
                  ;

WS      : [ \t\r\n]+ -> skip ;
