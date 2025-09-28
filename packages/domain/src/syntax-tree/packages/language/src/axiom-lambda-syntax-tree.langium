grammar AxiomLambdaSyntaxTree

entry Model:
    expressions+=Expression;

Expression:
    Variable | Abstraction | Application;

Variable:
    name=ID;

Abstraction:
    '\\' name=ID '.' body=Expression;

Application:
    '(' left=Expression right=Expression ')';

hidden terminal WS: /\s+/;
terminal ID: /[_a-zA-Z][\w_]*/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;