#!/usr/bin/env node

// src/cli/cli.ts
import { Command as Command3 } from "commander";

// src/generated/ast.ts
import * as langium from "langium";
var Arithmetics;
((Arithmetics2) => {
  Arithmetics2.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    NUMBER: /[0-9]+(\.[0-9]*)?/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(Arithmetics || (Arithmetics = {}));
var DomainModel;
((DomainModel2) => {
  DomainModel2.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(DomainModel || (DomainModel = {}));
var Requirements;
((Requirements3) => {
  Requirements3.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(Requirements || (Requirements = {}));
var StatemachineModel;
((StatemachineModel2) => {
  StatemachineModel2.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(StatemachineModel || (StatemachineModel = {}));
var Tests;
((Tests3) => {
  Tests3.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(Tests || (Tests = {}));
var DomainTerminals = {
  ...Arithmetics.Terminals,
  ...DomainModel.Terminals,
  ...Requirements.Terminals,
  ...StatemachineModel.Terminals,
  ...Tests.Terminals
};
var AbstractDefinition = {
  $type: "AbstractDefinition"
};
var AbstractElement = {
  $type: "AbstractElement"
};
var BinaryExpression = {
  $type: "BinaryExpression",
  left: "left",
  operator: "operator",
  right: "right"
};
function isBinaryExpression(item) {
  return reflection.isInstance(item, BinaryExpression.$type);
}
var Command = {
  $type: "Command",
  name: "name"
};
var Contact = {
  $type: "Contact",
  user_name: "user_name"
};
var DataType = {
  $type: "DataType",
  name: "name"
};
var DeclaredParameter = {
  $type: "DeclaredParameter",
  name: "name"
};
var Definition = {
  $type: "Definition",
  args: "args",
  expr: "expr",
  name: "name"
};
function isDefinition(item) {
  return reflection.isInstance(item, Definition.$type);
}
var Domainmodel = {
  $type: "Domainmodel",
  elements: "elements"
};
function isDomainmodel(item) {
  return reflection.isInstance(item, Domainmodel.$type);
}
var Entity = {
  $type: "Entity",
  features: "features",
  name: "name",
  superType: "superType"
};
function isEntity(item) {
  return reflection.isInstance(item, Entity.$type);
}
var Environment = {
  $type: "Environment",
  description: "description",
  name: "name"
};
var Evaluation = {
  $type: "Evaluation",
  expression: "expression"
};
function isEvaluation(item) {
  return reflection.isInstance(item, Evaluation.$type);
}
var Event = {
  $type: "Event",
  name: "name"
};
var Expression = {
  $type: "Expression"
};
var Feature = {
  $type: "Feature",
  many: "many",
  name: "name",
  type: "type"
};
var FunctionCall = {
  $type: "FunctionCall",
  args: "args",
  func: "func"
};
function isFunctionCall(item) {
  return reflection.isInstance(item, FunctionCall.$type);
}
var Module = {
  $type: "Module",
  name: "name",
  statements: "statements"
};
var NumberLiteral = {
  $type: "NumberLiteral",
  value: "value"
};
function isNumberLiteral(item) {
  return reflection.isInstance(item, NumberLiteral.$type);
}
var PackageDeclaration = {
  $type: "PackageDeclaration",
  elements: "elements",
  name: "name"
};
function isPackageDeclaration(item) {
  return reflection.isInstance(item, PackageDeclaration.$type);
}
var Requirement = {
  $type: "Requirement",
  environments: "environments",
  name: "name",
  text: "text"
};
var RequirementModel = {
  $type: "RequirementModel",
  contact: "contact",
  environments: "environments",
  requirements: "requirements"
};
var State = {
  $type: "State",
  actions: "actions",
  name: "name",
  transitions: "transitions"
};
var Statemachine = {
  $type: "Statemachine",
  commands: "commands",
  events: "events",
  init: "init",
  name: "name",
  states: "states"
};
var Statement = {
  $type: "Statement"
};
var Test = {
  $type: "Test",
  environments: "environments",
  name: "name",
  requirements: "requirements",
  testFile: "testFile"
};
var TestModel = {
  $type: "TestModel",
  contact: "contact",
  tests: "tests"
};
var Transition = {
  $type: "Transition",
  event: "event",
  state: "state"
};
var Type = {
  $type: "Type"
};
function isType(item) {
  return reflection.isInstance(item, Type.$type);
}
var DomainAstReflection = class extends langium.AbstractAstReflection {
  constructor() {
    super(...arguments);
    this.types = {
      AbstractDefinition: {
        name: AbstractDefinition.$type,
        properties: {},
        superTypes: []
      },
      AbstractElement: {
        name: AbstractElement.$type,
        properties: {},
        superTypes: []
      },
      BinaryExpression: {
        name: BinaryExpression.$type,
        properties: {
          left: {
            name: BinaryExpression.left
          },
          operator: {
            name: BinaryExpression.operator
          },
          right: {
            name: BinaryExpression.right
          }
        },
        superTypes: [Expression.$type]
      },
      Command: {
        name: Command.$type,
        properties: {
          name: {
            name: Command.name
          }
        },
        superTypes: []
      },
      Contact: {
        name: Contact.$type,
        properties: {
          user_name: {
            name: Contact.user_name
          }
        },
        superTypes: []
      },
      DataType: {
        name: DataType.$type,
        properties: {
          name: {
            name: DataType.name
          }
        },
        superTypes: [Type.$type]
      },
      DeclaredParameter: {
        name: DeclaredParameter.$type,
        properties: {
          name: {
            name: DeclaredParameter.name
          }
        },
        superTypes: [AbstractDefinition.$type]
      },
      Definition: {
        name: Definition.$type,
        properties: {
          args: {
            name: Definition.args,
            defaultValue: []
          },
          expr: {
            name: Definition.expr
          },
          name: {
            name: Definition.name
          }
        },
        superTypes: [AbstractDefinition.$type, Statement.$type]
      },
      Domainmodel: {
        name: Domainmodel.$type,
        properties: {
          elements: {
            name: Domainmodel.elements,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Entity: {
        name: Entity.$type,
        properties: {
          features: {
            name: Entity.features,
            defaultValue: []
          },
          name: {
            name: Entity.name
          },
          superType: {
            name: Entity.superType,
            referenceType: Entity.$type
          }
        },
        superTypes: [Type.$type]
      },
      Environment: {
        name: Environment.$type,
        properties: {
          description: {
            name: Environment.description
          },
          name: {
            name: Environment.name
          }
        },
        superTypes: []
      },
      Evaluation: {
        name: Evaluation.$type,
        properties: {
          expression: {
            name: Evaluation.expression
          }
        },
        superTypes: [Statement.$type]
      },
      Event: {
        name: Event.$type,
        properties: {
          name: {
            name: Event.name
          }
        },
        superTypes: []
      },
      Expression: {
        name: Expression.$type,
        properties: {},
        superTypes: []
      },
      Feature: {
        name: Feature.$type,
        properties: {
          many: {
            name: Feature.many,
            defaultValue: false
          },
          name: {
            name: Feature.name
          },
          type: {
            name: Feature.type,
            referenceType: Type.$type
          }
        },
        superTypes: []
      },
      FunctionCall: {
        name: FunctionCall.$type,
        properties: {
          args: {
            name: FunctionCall.args,
            defaultValue: []
          },
          func: {
            name: FunctionCall.func,
            referenceType: AbstractDefinition.$type
          }
        },
        superTypes: [Expression.$type]
      },
      Module: {
        name: Module.$type,
        properties: {
          name: {
            name: Module.name
          },
          statements: {
            name: Module.statements,
            defaultValue: []
          }
        },
        superTypes: []
      },
      NumberLiteral: {
        name: NumberLiteral.$type,
        properties: {
          value: {
            name: NumberLiteral.value
          }
        },
        superTypes: [Expression.$type]
      },
      PackageDeclaration: {
        name: PackageDeclaration.$type,
        properties: {
          elements: {
            name: PackageDeclaration.elements,
            defaultValue: []
          },
          name: {
            name: PackageDeclaration.name
          }
        },
        superTypes: [AbstractElement.$type]
      },
      Requirement: {
        name: Requirement.$type,
        properties: {
          environments: {
            name: Requirement.environments,
            defaultValue: [],
            referenceType: Environment.$type
          },
          name: {
            name: Requirement.name
          },
          text: {
            name: Requirement.text
          }
        },
        superTypes: []
      },
      RequirementModel: {
        name: RequirementModel.$type,
        properties: {
          contact: {
            name: RequirementModel.contact
          },
          environments: {
            name: RequirementModel.environments,
            defaultValue: []
          },
          requirements: {
            name: RequirementModel.requirements,
            defaultValue: []
          }
        },
        superTypes: []
      },
      State: {
        name: State.$type,
        properties: {
          actions: {
            name: State.actions,
            defaultValue: [],
            referenceType: Command.$type
          },
          name: {
            name: State.name
          },
          transitions: {
            name: State.transitions,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Statemachine: {
        name: Statemachine.$type,
        properties: {
          commands: {
            name: Statemachine.commands,
            defaultValue: []
          },
          events: {
            name: Statemachine.events,
            defaultValue: []
          },
          init: {
            name: Statemachine.init,
            referenceType: State.$type
          },
          name: {
            name: Statemachine.name
          },
          states: {
            name: Statemachine.states,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Statement: {
        name: Statement.$type,
        properties: {},
        superTypes: []
      },
      Test: {
        name: Test.$type,
        properties: {
          environments: {
            name: Test.environments,
            defaultValue: [],
            referenceType: Environment.$type
          },
          name: {
            name: Test.name
          },
          requirements: {
            name: Test.requirements,
            defaultValue: [],
            referenceType: Requirement.$type
          },
          testFile: {
            name: Test.testFile
          }
        },
        superTypes: []
      },
      TestModel: {
        name: TestModel.$type,
        properties: {
          contact: {
            name: TestModel.contact
          },
          tests: {
            name: TestModel.tests,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Transition: {
        name: Transition.$type,
        properties: {
          event: {
            name: Transition.event,
            referenceType: Event.$type
          },
          state: {
            name: Transition.state,
            referenceType: State.$type
          }
        },
        superTypes: []
      },
      Type: {
        name: Type.$type,
        properties: {},
        superTypes: [AbstractElement.$type]
      }
    };
  }
};
var reflection = new DomainAstReflection();

// src/generated/grammar.ts
import { loadGrammarFromJson } from "langium";
var loadedArithmeticsGrammar;
var ArithmeticsGrammar = () => loadedArithmeticsGrammar ?? (loadedArithmeticsGrammar = loadGrammarFromJson(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Arithmetics",
  "rules": [
    {
      "$type": "ParserRule",
      "entry": true,
      "name": "Module",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "module"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "statements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Statement",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@2"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Definition",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "def"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "Assignment",
                "feature": "args",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@3"
                  },
                  "arguments": []
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "args",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@3"
                      },
                      "arguments": []
                    }
                  }
                ],
                "cardinality": "*"
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "expr",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "DeclaredParameter",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@9"
          },
          "arguments": []
        }
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Evaluation",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "expression",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ";"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Expression",
      "definition": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@6"
        },
        "arguments": []
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "InfixRule",
      "name": "BinaryExpression",
      "call": {
        "$type": "RuleCall",
        "rule": {
          "$ref": "#/rules@7"
        },
        "arguments": []
      },
      "operators": {
        "$type": "InfixRuleOperators",
        "precedences": [
          {
            "$type": "InfixRuleOperatorList",
            "operators": [
              {
                "$type": "Keyword",
                "value": "%"
              }
            ]
          },
          {
            "$type": "InfixRuleOperatorList",
            "operators": [
              {
                "$type": "Keyword",
                "value": "^"
              }
            ]
          },
          {
            "$type": "InfixRuleOperatorList",
            "operators": [
              {
                "$type": "Keyword",
                "value": "*"
              },
              {
                "$type": "Keyword",
                "value": "/"
              }
            ]
          },
          {
            "$type": "InfixRuleOperatorList",
            "operators": [
              {
                "$type": "Keyword",
                "value": "+"
              },
              {
                "$type": "Keyword",
                "value": "-"
              }
            ]
          }
        ]
      },
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "PrimaryExpression",
      "inferredType": {
        "$type": "InferredType",
        "name": "Expression"
      },
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "("
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@5"
                },
                "arguments": []
              },
              {
                "$type": "Keyword",
                "value": ")"
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "NumberLiteral"
                }
              },
              {
                "$type": "Assignment",
                "feature": "value",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@10"
                  },
                  "arguments": []
                }
              }
            ]
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Action",
                "inferredType": {
                  "$type": "InferredType",
                  "name": "FunctionCall"
                }
              },
              {
                "$type": "Assignment",
                "feature": "func",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/types@0"
                  },
                  "deprecatedSyntax": false,
                  "isMulti": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": "("
                  },
                  {
                    "$type": "Assignment",
                    "feature": "args",
                    "operator": "+=",
                    "terminal": {
                      "$type": "RuleCall",
                      "rule": {
                        "$ref": "#/rules@5"
                      },
                      "arguments": []
                    }
                  },
                  {
                    "$type": "Group",
                    "elements": [
                      {
                        "$type": "Keyword",
                        "value": ","
                      },
                      {
                        "$type": "Assignment",
                        "feature": "args",
                        "operator": "+=",
                        "terminal": {
                          "$type": "RuleCall",
                          "rule": {
                            "$ref": "#/rules@5"
                          },
                          "arguments": []
                        }
                      }
                    ],
                    "cardinality": "*"
                  },
                  {
                    "$type": "Keyword",
                    "value": ")"
                  }
                ],
                "cardinality": "?"
              }
            ]
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "NUMBER",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+(\\\\.[0-9]*)?/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/",
        "parenthesized": false
      },
      "fragment": false
    }
  ],
  "types": [
    {
      "$type": "Type",
      "name": "AbstractDefinition",
      "type": {
        "$type": "UnionType",
        "types": [
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/rules@2"
            }
          },
          {
            "$type": "SimpleType",
            "typeRef": {
              "$ref": "#/rules@3"
            }
          }
        ]
      }
    }
  ],
  "imports": [],
  "interfaces": []
}`));
var loadedDomainModelGrammar;
var DomainModelGrammar = () => loadedDomainModelGrammar ?? (loadedDomainModelGrammar = loadGrammarFromJson(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "DomainModel",
  "rules": [
    {
      "$type": "ParserRule",
      "entry": true,
      "name": "Domainmodel",
      "definition": {
        "$type": "Assignment",
        "feature": "elements",
        "operator": "+=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@1"
          },
          "arguments": []
        },
        "cardinality": "*"
      },
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "AbstractElement",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@2"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@3"
            },
            "arguments": []
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "PackageDeclaration",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "package"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "elements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Type",
      "definition": {
        "$type": "Alternatives",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@4"
            },
            "arguments": []
          },
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@5"
            },
            "arguments": []
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "DataType",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "datatype"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Entity",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "entity"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "extends"
              },
              {
                "$type": "Assignment",
                "feature": "superType",
                "operator": "=",
                "terminal": {
                  "$type": "CrossReference",
                  "isMulti": true,
                  "type": {
                    "$ref": "#/rules@5"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@7"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "{"
          },
          {
            "$type": "Assignment",
            "feature": "features",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Keyword",
            "value": "}"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Feature",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "many",
            "operator": "?=",
            "terminal": {
              "$type": "Keyword",
              "value": "many"
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "type",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@3"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@7"
                },
                "arguments": []
              },
              "deprecatedSyntax": false,
              "isMulti": false
            }
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "QualifiedName",
      "dataType": "string",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "RuleCall",
            "rule": {
              "$ref": "#/rules@9"
            },
            "arguments": []
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "."
              },
              {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@9"
                },
                "arguments": []
              }
            ],
            "cardinality": "*"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/",
        "parenthesized": false
      },
      "fragment": false
    }
  ],
  "imports": [],
  "interfaces": [],
  "types": []
}`));
var loadedRequirementsGrammar;
var RequirementsGrammar = () => loadedRequirementsGrammar ?? (loadedRequirementsGrammar = loadGrammarFromJson(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Requirements",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "entry": true,
      "name": "RequirementModel",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "contact",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "environments",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Assignment",
            "feature": "requirements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@2"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Environment",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "environment"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "description",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Requirement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "req"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "applicable"
              },
              {
                "$type": "Keyword",
                "value": "for"
              },
              {
                "$type": "Assignment",
                "feature": "environments",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@1"
                  },
                  "deprecatedSyntax": false,
                  "isMulti": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "environments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@1"
                      },
                      "deprecatedSyntax": false,
                      "isMulti": false
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Contact",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "contact"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "user_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/",
        "parenthesized": false
      },
      "fragment": false
    }
  ],
  "interfaces": [],
  "types": []
}`));
var loadedStatemachineModelGrammar;
var StatemachineModelGrammar = () => loadedStatemachineModelGrammar ?? (loadedStatemachineModelGrammar = loadGrammarFromJson(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "StatemachineModel",
  "rules": [
    {
      "$type": "ParserRule",
      "entry": true,
      "name": "Statemachine",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "statemachine"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            },
            "$comment": "/** The name of the machine */"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "events"
              },
              {
                "$type": "Assignment",
                "feature": "events",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@1"
                  },
                  "arguments": []
                },
                "cardinality": "+",
                "$comment": "/** The list of recognized event names */"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "commands"
              },
              {
                "$type": "Assignment",
                "feature": "commands",
                "operator": "+=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@2"
                  },
                  "arguments": []
                },
                "cardinality": "+"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "initialState"
          },
          {
            "$type": "Assignment",
            "feature": "init",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@3"
              },
              "deprecatedSyntax": false,
              "isMulti": false
            },
            "$comment": "/** The starting state for the machine */"
          },
          {
            "$type": "Assignment",
            "feature": "states",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "*",
            "$comment": "/** Definitions of available states */"
          }
        ]
      },
      "fragment": false,
      "parameters": [],
      "$comment": "/** A textual representation of a state machine */"
    },
    {
      "$type": "ParserRule",
      "name": "Event",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@6"
          },
          "arguments": []
        }
      },
      "entry": false,
      "fragment": false,
      "parameters": [],
      "$comment": "/** An event is the trigger for a transition */"
    },
    {
      "$type": "ParserRule",
      "name": "Command",
      "definition": {
        "$type": "Assignment",
        "feature": "name",
        "operator": "=",
        "terminal": {
          "$type": "RuleCall",
          "rule": {
            "$ref": "#/rules@6"
          },
          "arguments": []
        }
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "State",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "state"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@6"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "actions"
              },
              {
                "$type": "Keyword",
                "value": "{"
              },
              {
                "$type": "Assignment",
                "feature": "actions",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@2"
                  },
                  "deprecatedSyntax": false,
                  "isMulti": false
                },
                "cardinality": "+"
              },
              {
                "$type": "Keyword",
                "value": "}"
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "transitions",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            },
            "cardinality": "*",
            "$comment": "/** The transitions to other states that can take place from the current one */"
          },
          {
            "$type": "Keyword",
            "value": "end"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": [],
      "$comment": "/** A description of the status of a system */"
    },
    {
      "$type": "ParserRule",
      "name": "Transition",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "event",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@1"
              },
              "deprecatedSyntax": false,
              "isMulti": false
            },
            "$comment": "/** The event triggering the transition */"
          },
          {
            "$type": "Keyword",
            "value": "=>"
          },
          {
            "$type": "Assignment",
            "feature": "state",
            "operator": "=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@3"
              },
              "deprecatedSyntax": false,
              "isMulti": false
            },
            "$comment": "/** The target state */"
          }
        ],
        "$comment": "/** The event triggering the transition */"
      },
      "entry": false,
      "fragment": false,
      "parameters": [],
      "$comment": "/** A change from one state to another */"
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/",
        "parenthesized": false
      },
      "fragment": false
    }
  ],
  "imports": [],
  "interfaces": [],
  "types": []
}`));
var loadedTestsGrammar;
var TestsGrammar = () => loadedTestsGrammar ?? (loadedTestsGrammar = loadGrammarFromJson(`{
  "$type": "Grammar",
  "isDeclared": true,
  "name": "Tests",
  "imports": [],
  "rules": [
    {
      "$type": "ParserRule",
      "entry": true,
      "name": "TestModel",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "contact",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "tests",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@1"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Test",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "tst"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "testFile"
              },
              {
                "$type": "Keyword",
                "value": "="
              },
              {
                "$type": "Assignment",
                "feature": "testFile",
                "operator": "=",
                "terminal": {
                  "$type": "RuleCall",
                  "rule": {
                    "$ref": "#/rules@9"
                  },
                  "arguments": []
                }
              }
            ],
            "cardinality": "?"
          },
          {
            "$type": "Keyword",
            "value": "tests"
          },
          {
            "$type": "Assignment",
            "feature": "requirements",
            "operator": "+=",
            "terminal": {
              "$type": "CrossReference",
              "type": {
                "$ref": "#/rules@4"
              },
              "terminal": {
                "$type": "RuleCall",
                "rule": {
                  "$ref": "#/rules@7"
                },
                "arguments": []
              },
              "deprecatedSyntax": false,
              "isMulti": false
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": ","
              },
              {
                "$type": "Assignment",
                "feature": "requirements",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@4"
                  },
                  "terminal": {
                    "$type": "RuleCall",
                    "rule": {
                      "$ref": "#/rules@7"
                    },
                    "arguments": []
                  },
                  "deprecatedSyntax": false,
                  "isMulti": false
                }
              }
            ],
            "cardinality": "*"
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "applicable"
              },
              {
                "$type": "Keyword",
                "value": "for"
              },
              {
                "$type": "Assignment",
                "feature": "environments",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@3"
                  },
                  "deprecatedSyntax": false,
                  "isMulti": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "environments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@3"
                      },
                      "deprecatedSyntax": false,
                      "isMulti": false
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "entry": false,
      "name": "RequirementModel",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Assignment",
            "feature": "contact",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@5"
              },
              "arguments": []
            },
            "cardinality": "?"
          },
          {
            "$type": "Assignment",
            "feature": "environments",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@3"
              },
              "arguments": []
            },
            "cardinality": "*"
          },
          {
            "$type": "Assignment",
            "feature": "requirements",
            "operator": "+=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@4"
              },
              "arguments": []
            },
            "cardinality": "*"
          }
        ]
      },
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Environment",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "environment"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "description",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Requirement",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "req"
          },
          {
            "$type": "Assignment",
            "feature": "name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@7"
              },
              "arguments": []
            }
          },
          {
            "$type": "Assignment",
            "feature": "text",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          },
          {
            "$type": "Group",
            "elements": [
              {
                "$type": "Keyword",
                "value": "applicable"
              },
              {
                "$type": "Keyword",
                "value": "for"
              },
              {
                "$type": "Assignment",
                "feature": "environments",
                "operator": "+=",
                "terminal": {
                  "$type": "CrossReference",
                  "type": {
                    "$ref": "#/rules@3"
                  },
                  "deprecatedSyntax": false,
                  "isMulti": false
                }
              },
              {
                "$type": "Group",
                "elements": [
                  {
                    "$type": "Keyword",
                    "value": ","
                  },
                  {
                    "$type": "Assignment",
                    "feature": "environments",
                    "operator": "+=",
                    "terminal": {
                      "$type": "CrossReference",
                      "type": {
                        "$ref": "#/rules@3"
                      },
                      "deprecatedSyntax": false,
                      "isMulti": false
                    }
                  }
                ],
                "cardinality": "*"
              }
            ],
            "cardinality": "?"
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "ParserRule",
      "name": "Contact",
      "definition": {
        "$type": "Group",
        "elements": [
          {
            "$type": "Keyword",
            "value": "contact"
          },
          {
            "$type": "Keyword",
            "value": ":"
          },
          {
            "$type": "Assignment",
            "feature": "user_name",
            "operator": "=",
            "terminal": {
              "$type": "RuleCall",
              "rule": {
                "$ref": "#/rules@9"
              },
              "arguments": []
            }
          }
        ]
      },
      "entry": false,
      "fragment": false,
      "parameters": []
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "WS",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\s+/",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "name": "ID",
      "definition": {
        "$type": "RegexToken",
        "regex": "/[_a-zA-Z][\\\\w_]*/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "INT",
      "type": {
        "$type": "ReturnType",
        "name": "number"
      },
      "definition": {
        "$type": "RegexToken",
        "regex": "/[0-9]+/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "name": "STRING",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\"(\\\\\\\\.|[^\\"\\\\\\\\])*\\"|'(\\\\\\\\.|[^'\\\\\\\\])*'/",
        "parenthesized": false
      },
      "fragment": false,
      "hidden": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "ML_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\*[\\\\s\\\\S]*?\\\\*\\\\//",
        "parenthesized": false
      },
      "fragment": false
    },
    {
      "$type": "TerminalRule",
      "hidden": true,
      "name": "SL_COMMENT",
      "definition": {
        "$type": "RegexToken",
        "regex": "/\\\\/\\\\/[^\\\\n\\\\r]*/",
        "parenthesized": false
      },
      "fragment": false
    }
  ],
  "interfaces": [],
  "types": []
}`));

// src/generated/module.ts
var ArithmeticsLanguageMetaData = {
  languageId: "arithmetics",
  fileExtensions: [".calc"],
  caseInsensitive: true,
  mode: "development"
};
var DomainModelLanguageMetaData = {
  languageId: "domain-model",
  fileExtensions: [".dmodel"],
  caseInsensitive: false,
  mode: "development"
};
var RequirementsLanguageMetaData = {
  languageId: "requirements-lang",
  fileExtensions: [".req"],
  caseInsensitive: false,
  mode: "development"
};
var StatemachineModelLanguageMetaData = {
  languageId: "statemachine",
  fileExtensions: [".statemachine"],
  caseInsensitive: false,
  mode: "development"
};
var TestsLanguageMetaData = {
  languageId: "tests-lang",
  fileExtensions: [".tst"],
  caseInsensitive: false,
  mode: "development"
};
var DomainGeneratedSharedModule = {
  AstReflection: () => new DomainAstReflection()
};
var ArithmeticsGeneratedModule = {
  Grammar: () => ArithmeticsGrammar(),
  LanguageMetaData: () => ArithmeticsLanguageMetaData,
  parser: {}
};
var DomainModelGeneratedModule = {
  Grammar: () => DomainModelGrammar(),
  LanguageMetaData: () => DomainModelLanguageMetaData,
  parser: {}
};
var RequirementsGeneratedModule = {
  Grammar: () => RequirementsGrammar(),
  LanguageMetaData: () => RequirementsLanguageMetaData,
  parser: {}
};
var StatemachineModelGeneratedModule = {
  Grammar: () => StatemachineModelGrammar(),
  LanguageMetaData: () => StatemachineModelLanguageMetaData,
  parser: {}
};
var TestsGeneratedModule = {
  Grammar: () => TestsGrammar(),
  LanguageMetaData: () => TestsLanguageMetaData,
  parser: {}
};

// src/cli/actions.ts
import chalk2 from "chalk";

// src/cli/cli-util.ts
import { URI } from "langium";
import * as fs2 from "node:fs";
import * as path2 from "node:path";
import chalk from "chalk";

// src/requirements/generated/ast.ts
import * as langium2 from "langium";
var Requirements2;
((Requirements3) => {
  Requirements3.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(Requirements2 || (Requirements2 = {}));
var Tests2;
((Tests3) => {
  Tests3.Terminals = {
    WS: /\s+/,
    ID: /[_a-zA-Z][\w_]*/,
    STRING: /"(\\.|[^"\\])*"|'(\\.|[^'\\])*'/,
    ML_COMMENT: /\/\*[\s\S]*?\*\//,
    SL_COMMENT: /\/\/[^\n\r]*/
  };
})(Tests2 || (Tests2 = {}));
var RequirementsAndTestsTerminals = {
  ...Requirements2.Terminals,
  ...Tests2.Terminals
};
var Contact2 = {
  $type: "Contact",
  user_name: "user_name"
};
var Environment2 = {
  $type: "Environment",
  description: "description",
  name: "name"
};
var Requirement2 = {
  $type: "Requirement",
  environments: "environments",
  name: "name",
  text: "text"
};
var RequirementModel2 = {
  $type: "RequirementModel",
  contact: "contact",
  environments: "environments",
  requirements: "requirements"
};
var Test2 = {
  $type: "Test",
  environments: "environments",
  name: "name",
  requirements: "requirements",
  testFile: "testFile"
};
var TestModel2 = {
  $type: "TestModel",
  contact: "contact",
  tests: "tests"
};
function isTestModel(item) {
  return reflection2.isInstance(item, TestModel2.$type);
}
var RequirementsAndTestsAstReflection = class extends langium2.AbstractAstReflection {
  constructor() {
    super(...arguments);
    this.types = {
      Contact: {
        name: Contact2.$type,
        properties: {
          user_name: {
            name: Contact2.user_name
          }
        },
        superTypes: []
      },
      Environment: {
        name: Environment2.$type,
        properties: {
          description: {
            name: Environment2.description
          },
          name: {
            name: Environment2.name
          }
        },
        superTypes: []
      },
      Requirement: {
        name: Requirement2.$type,
        properties: {
          environments: {
            name: Requirement2.environments,
            defaultValue: [],
            referenceType: Environment2.$type
          },
          name: {
            name: Requirement2.name
          },
          text: {
            name: Requirement2.text
          }
        },
        superTypes: []
      },
      RequirementModel: {
        name: RequirementModel2.$type,
        properties: {
          contact: {
            name: RequirementModel2.contact
          },
          environments: {
            name: RequirementModel2.environments,
            defaultValue: []
          },
          requirements: {
            name: RequirementModel2.requirements,
            defaultValue: []
          }
        },
        superTypes: []
      },
      Test: {
        name: Test2.$type,
        properties: {
          environments: {
            name: Test2.environments,
            defaultValue: [],
            referenceType: Environment2.$type
          },
          name: {
            name: Test2.name
          },
          requirements: {
            name: Test2.requirements,
            defaultValue: [],
            referenceType: Requirement2.$type
          },
          testFile: {
            name: Test2.testFile
          }
        },
        superTypes: []
      },
      TestModel: {
        name: TestModel2.$type,
        properties: {
          contact: {
            name: TestModel2.contact
          },
          tests: {
            name: TestModel2.tests,
            defaultValue: []
          }
        },
        superTypes: []
      }
    };
  }
};
var reflection2 = new RequirementsAndTestsAstReflection();

// src/cli/cli-util.ts
async function extractDocument(fileName, extensions, services) {
  if (!extensions.includes(path2.extname(fileName))) {
    console.error(chalk.yellow(`Please, choose a file with one of these extensions: ${extensions}.`));
    process.exit(1);
  }
  if (!fs2.existsSync(fileName)) {
    console.error(chalk.red(`File ${fileName} doesn't exist.`));
    process.exit(1);
  }
  const document = await services.shared.workspace.LangiumDocuments.getOrCreateDocument(URI.file(path2.resolve(fileName)));
  await services.shared.workspace.DocumentBuilder.build([document], { validation: true });
  const validationErrors = (document.diagnostics ?? []).filter((e) => e.severity === 1);
  if (validationErrors.length > 0) {
    console.error(chalk.red("There are validation errors:"));
    for (const validationError of validationErrors) {
      console.error(chalk.red(
        `line ${validationError.range.start.line}: ${validationError.message} [${document.textDocument.getText(validationError.range)}]`
      ));
    }
    process.exit(1);
  }
  return document;
}
function extractDestinationAndName(filePath, destination) {
  filePath = path2.basename(filePath, path2.extname(filePath)).replace(/[.-]/g, "");
  return {
    destination: destination ?? path2.join(path2.dirname(filePath), "generated"),
    name: path2.basename(filePath)
  };
}

// src/domain-dsl-module.ts
import { createDefaultModule as createDefaultModule4, createDefaultSharedModule as createDefaultSharedModule4, inject as inject4 } from "langium";

// src/axioms/arithmetics-module.ts
import { inject, createDefaultModule, createDefaultSharedModule } from "langium";

// src/axioms/arithmetics-scope-provider.ts
import { MapScope } from "langium";
import { DefaultScopeProvider, stream, StreamScope } from "langium";
var ArithmeticsScopeProvider = class extends DefaultScopeProvider {
  createScope(elements, outerScope, options) {
    return new StreamScope(stream(elements), outerScope, { ...options, caseInsensitive: true });
  }
  getGlobalScope(referenceType) {
    return this.globalScopeCache.get(referenceType, () => new MapScope(this.indexManager.allElements(referenceType), void 0, { caseInsensitive: true }));
  }
};

// src/axioms/arithmetics-validator.ts
import { MultiMap, stream as stream2 } from "langium";

// src/axioms/arithmetics-util.ts
function applyOp(op) {
  switch (op) {
    case "+":
      return (x, y) => x + y;
    case "-":
      return (x, y) => x - y;
    case "*":
      return (x, y) => x * y;
    case "^":
      return (x, y) => Math.pow(x, y);
    case "%":
      return (x, y) => x % y;
    case "/":
      return (x, y) => {
        if (y === 0) {
          throw new Error("Division by zero");
        }
        return x / y;
      };
    default:
      throw new Error("Unknown operator: " + op);
  }
}
function isResolvedFunctionCall(functionCall) {
  return isDefinition(functionCall.func.ref);
}

// src/axioms/arithmetics-evaluator.ts
function evalExpression(expr, ctx) {
  if (ctx === void 0) {
    ctx = {
      module: expr.$document?.parseResult.value,
      context: /* @__PURE__ */ new Map(),
      result: /* @__PURE__ */ new Map()
    };
  }
  if (isBinaryExpression(expr)) {
    const left = evalExpression(expr.left, ctx);
    const right = evalExpression(expr.right, ctx);
    if (right === void 0) return left;
    return applyOp(expr.operator)(left, right);
  }
  if (isNumberLiteral(expr)) {
    return +expr.value;
  }
  if (isFunctionCall(expr)) {
    const valueOrDef = ctx.context.get(expr.func.ref.name);
    if (!isDefinition(valueOrDef)) {
      return valueOrDef;
    }
    if (valueOrDef.args.length !== expr.args.length) {
      throw new Error("Function definition and its call have different number of arguments: " + valueOrDef.name);
    }
    const localContext = new Map(ctx.context);
    for (let i = 0; i < valueOrDef.args.length; i += 1) {
      localContext.set(valueOrDef.args[i].name, evalExpression(expr.args[i], ctx));
    }
    return evalExpression(valueOrDef.expr, { module: ctx.module, context: localContext, result: ctx.result });
  }
  throw new Error("Impossible type of Expression.");
}

// src/axioms/arithmetics-validator.ts
var IssueCodes;
((IssueCodes2) => {
  IssueCodes2.ExpressionNormalizable = "expression-normalizable";
})(IssueCodes || (IssueCodes = {}));
var ArithmeticsValidator = class {
  checkDivByZero(binExpr, accept) {
    if ((binExpr.operator === "/" || binExpr.operator === "%") && evalExpression(binExpr.right) === 0) {
      accept("error", "Division by zero is detected.", { node: binExpr, property: "right" });
    }
  }
  checkNormalizable(def, accept) {
    const context = /* @__PURE__ */ new Map();
    const makeOp = (expr, op) => {
      const subExprs = [expr.left, expr.right];
      subExprs.forEach((e) => evalExpr(e));
      const [left, right] = subExprs.map((e) => isNumberLiteral(e) ? e.value : context.get(e));
      if (left !== void 0 && right !== void 0 && op(left, right).toString().length <= 8) {
        context.set(expr, op(left, right));
        subExprs.forEach((e) => context.delete(e));
      }
    };
    const evalExpr = (expr) => {
      if (isBinaryExpression(expr)) {
        makeOp(expr, applyOp(expr.operator));
      }
    };
    evalExpr(def.expr);
    for (const [expr, result] of context) {
      if (result) {
        accept("info", "Expression could be normalized to constant " + result, {
          node: expr,
          data: {
            code: IssueCodes.ExpressionNormalizable,
            constant: result
          }
        });
      }
    }
  }
  checkUniqueDefinitions(module, accept) {
    const names = new MultiMap();
    for (const def of module.statements) {
      if (isDefinition(def) && def.name) {
        names.add(def.name, def);
      }
    }
    for (const [name, symbols] of names.entriesGroupedByKey()) {
      if (symbols.length > 1) {
        for (const symbol of symbols) {
          accept("error", `Duplicate definition name: ${name}`, { node: symbol, property: "name" });
        }
      }
    }
  }
  checkFunctionRecursion(module, accept) {
    const traversedFunctions = /* @__PURE__ */ new Set();
    function* getNotTraversedNestedCalls(func) {
      if (!traversedFunctions.has(func)) {
        traversedFunctions.add(func);
        yield* NestedFunctionCall.selectCalls(func);
      }
    }
    const callsTree = /* @__PURE__ */ new Map();
    const callCycles = [];
    const bfsStep = (parent) => {
      const referencedFunc = parent.call.func.ref;
      const uncycledChildren = [];
      if (parent.host === referencedFunc) {
        callCycles.push([parent]);
      }
      for (const child of getNotTraversedNestedCalls(referencedFunc)) {
        callsTree.set(child.call, parent);
        const callCycle = FunctionCallCycle.select(child, callsTree);
        if (callCycle) {
          callCycles.push(callCycle);
        } else {
          uncycledChildren.push(child);
        }
      }
      return uncycledChildren;
    };
    stream2(module.statements).filter(isDefinition).flatMap(getNotTraversedNestedCalls).forEach((call) => {
      let remainingCalls = Array.of(call);
      while (remainingCalls.length !== 0) {
        remainingCalls = remainingCalls.flatMap(bfsStep);
      }
    });
    for (const cycle of callCycles) {
      const cycleMessage = FunctionCallCycle.print(cycle, callsTree);
      for (const { call } of FunctionCallCycle.iterateBack(cycle, callsTree)) {
        accept("error", `Recursion is not allowed [${cycleMessage}]`, { node: call, property: "func" });
      }
    }
  }
  checkUniqueParameters(definition, accept) {
    const names = new MultiMap();
    for (const def of definition.args) {
      if (def.name) {
        names.add(def.name, def);
      }
    }
    for (const [name, symbols] of names.entriesGroupedByKey()) {
      if (symbols.length > 1) {
        for (const symbol of symbols) {
          accept("error", `Duplicate definition name: ${name}`, { node: symbol, property: "name" });
        }
      }
    }
  }
  checkMatchingParameters(functionCall, accept) {
    if (!isResolvedFunctionCall(functionCall) || !functionCall.func.ref.args) {
      return;
    }
    if (functionCall.args.length !== functionCall.func.ref.args.length) {
      accept("error", `Function ${functionCall.func.ref.name} expects ${functionCall.func.ref.args.length} parameters, but ${functionCall.args.length} were given.`, { node: functionCall, property: "args" });
    }
  }
};
var FunctionCallCycle;
((FunctionCallCycle2) => {
  function select(to, tree) {
    const referencedFunc = to.call.func.ref;
    let parent = tree.get(to.call);
    while (parent) {
      if (parent.host === referencedFunc) {
        return [parent, to];
      }
      parent = tree.get(parent.call);
    }
    return void 0;
  }
  FunctionCallCycle2.select = select;
  function print(cycle, tree) {
    return stream2(iterateBack(cycle, tree)).map(NestedFunctionCall.toString).reduce((child, parent) => parent + "->" + child) ?? "";
  }
  FunctionCallCycle2.print = print;
  function* iterateBack(cycle, tree) {
    const start = cycle[0];
    const end = cycle[cycle.length - 1];
    yield end;
    if (start === end) {
      return;
    }
    let parent = tree.get(end.call);
    while (parent) {
      yield parent;
      if (parent.call === start.call) {
        break;
      }
      parent = tree.get(parent.call);
    }
  }
  FunctionCallCycle2.iterateBack = iterateBack;
})(FunctionCallCycle || (FunctionCallCycle = {}));
var NestedFunctionCall;
((NestedFunctionCall2) => {
  function* selectCalls(host, expression = host.expr) {
    if (isFunctionCall(expression)) {
      if (isResolvedFunctionCall(expression)) {
        yield { call: expression, host };
      }
    } else if (isBinaryExpression(expression)) {
      for (const expr of [expression.left, expression.right]) {
        if (expr) {
          yield* selectCalls(host, expr);
        }
      }
    }
  }
  NestedFunctionCall2.selectCalls = selectCalls;
  function toString2({ call }) {
    return `${call.func.ref.name}()`;
  }
  NestedFunctionCall2.toString = toString2;
})(NestedFunctionCall || (NestedFunctionCall = {}));

// src/axioms/lsp/arithmetics-code-actions.ts
import { CodeActionKind } from "vscode-languageserver";
var ArithmeticsCodeActionProvider = class {
  getCodeActions(document, params) {
    const result = [];
    const acceptor = (ca) => ca && result.push(ca);
    for (const diagnostic of params.context.diagnostics) {
      this.createCodeActions(diagnostic, document, acceptor);
    }
    return result;
  }
  createCodeActions(diagnostic, document, accept) {
    switch (diagnostic.data?.code) {
      case IssueCodes.ExpressionNormalizable:
        accept(this.normalizeExpression(diagnostic, document));
        break;
    }
  }
  normalizeExpression(diagnostic, document) {
    const data = diagnostic.data;
    if (data && typeof data.constant === "number") {
      return {
        title: `Replace with constant ${data.constant}`,
        kind: CodeActionKind.QuickFix,
        diagnostics: [diagnostic],
        isPreferred: true,
        edit: {
          changes: {
            [document.textDocument.uri]: [{
              range: diagnostic.range,
              newText: data.constant.toString()
            }]
          }
        }
      };
    }
    return void 0;
  }
};

// src/axioms/arithmetics-module.ts
var ArithmeticsModule = {
  references: {
    ScopeProvider: (services) => new ArithmeticsScopeProvider(services)
  },
  validation: {
    ArithmeticsValidator: () => new ArithmeticsValidator()
  },
  lsp: {
    CodeActionProvider: () => new ArithmeticsCodeActionProvider()
  }
};

// src/model/domain-model-module.ts
import { inject as inject2, createDefaultModule as createDefaultModule2, createDefaultSharedModule as createDefaultSharedModule2 } from "langium";

// src/model/domain-model-formatter.ts
import { AbstractFormatter, Formatting } from "langium/lsp";
var DomainModelFormatter = class extends AbstractFormatter {
  format(node) {
    if (isPackageDeclaration(node)) {
      const formatter = this.getNodeFormatter(node);
      const bracesOpen = formatter.keyword("{");
      const bracesClose = formatter.keyword("}");
      formatter.interior(bracesOpen, bracesClose).prepend(Formatting.indent());
      bracesClose.prepend(Formatting.newLine());
    } else if (isEntity(node)) {
      const formatter = this.getNodeFormatter(node);
      const bracesOpen = formatter.keyword("{");
      const bracesClose = formatter.keyword("}");
      formatter.interior(bracesOpen, bracesClose).prepend(Formatting.indent());
      bracesClose.prepend(Formatting.newLine());
    } else if (isDomainmodel(node)) {
      const formatter = this.getNodeFormatter(node);
      const nodes = formatter.nodes(...node.elements);
      nodes.prepend(Formatting.noIndent());
    }
  }
};

// src/model/domain-model-naming.ts
var QualifiedNameProvider = class {
  /**
   * @param qualifier if the qualifier is a `string`, simple string concatenation is done: `qualifier.name`.
   *      if the qualifier is a `PackageDeclaration` fully qualified name is created: `package1.package2.name`.
   * @param name simple name
   * @returns qualified name separated by `.`
   */
  getQualifiedName(qualifier, name) {
    let prefix = qualifier;
    if (isPackageDeclaration(prefix)) {
      prefix = isPackageDeclaration(prefix.$container) ? this.getQualifiedName(prefix.$container, prefix.name) : prefix.name;
    }
    return prefix ? prefix + "." + name : name;
  }
};

// src/model/domain-model-rename-refactoring.ts
import { AstUtils, CstUtils, isNamed } from "langium";
import { DefaultRenameProvider } from "langium/lsp";

// src/node_modules/vscode-languageserver-types/lib/esm/main.js
var DocumentUri;
(function(DocumentUri2) {
  function is(value) {
    return typeof value === "string";
  }
  DocumentUri2.is = is;
})(DocumentUri || (DocumentUri = {}));
var URI2;
(function(URI3) {
  function is(value) {
    return typeof value === "string";
  }
  URI3.is = is;
})(URI2 || (URI2 = {}));
var integer;
(function(integer2) {
  integer2.MIN_VALUE = -2147483648;
  integer2.MAX_VALUE = 2147483647;
  function is(value) {
    return typeof value === "number" && integer2.MIN_VALUE <= value && value <= integer2.MAX_VALUE;
  }
  integer2.is = is;
})(integer || (integer = {}));
var uinteger;
(function(uinteger2) {
  uinteger2.MIN_VALUE = 0;
  uinteger2.MAX_VALUE = 2147483647;
  function is(value) {
    return typeof value === "number" && uinteger2.MIN_VALUE <= value && value <= uinteger2.MAX_VALUE;
  }
  uinteger2.is = is;
})(uinteger || (uinteger = {}));
var Position;
(function(Position2) {
  function create(line, character) {
    if (line === Number.MAX_VALUE) {
      line = uinteger.MAX_VALUE;
    }
    if (character === Number.MAX_VALUE) {
      character = uinteger.MAX_VALUE;
    }
    return { line, character };
  }
  Position2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Is.uinteger(candidate.line) && Is.uinteger(candidate.character);
  }
  Position2.is = is;
})(Position || (Position = {}));
var Range;
(function(Range2) {
  function create(one, two, three, four) {
    if (Is.uinteger(one) && Is.uinteger(two) && Is.uinteger(three) && Is.uinteger(four)) {
      return { start: Position.create(one, two), end: Position.create(three, four) };
    } else if (Position.is(one) && Position.is(two)) {
      return { start: one, end: two };
    } else {
      throw new Error(`Range#create called with invalid arguments[${one}, ${two}, ${three}, ${four}]`);
    }
  }
  Range2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Position.is(candidate.start) && Position.is(candidate.end);
  }
  Range2.is = is;
})(Range || (Range = {}));
var Location;
(function(Location2) {
  function create(uri, range) {
    return { uri, range };
  }
  Location2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.range) && (Is.string(candidate.uri) || Is.undefined(candidate.uri));
  }
  Location2.is = is;
})(Location || (Location = {}));
var LocationLink;
(function(LocationLink2) {
  function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
    return { targetUri, targetRange, targetSelectionRange, originSelectionRange };
  }
  LocationLink2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.targetRange) && Is.string(candidate.targetUri) && Range.is(candidate.targetSelectionRange) && (Range.is(candidate.originSelectionRange) || Is.undefined(candidate.originSelectionRange));
  }
  LocationLink2.is = is;
})(LocationLink || (LocationLink = {}));
var Color;
(function(Color2) {
  function create(red, green, blue, alpha) {
    return {
      red,
      green,
      blue,
      alpha
    };
  }
  Color2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.numberRange(candidate.red, 0, 1) && Is.numberRange(candidate.green, 0, 1) && Is.numberRange(candidate.blue, 0, 1) && Is.numberRange(candidate.alpha, 0, 1);
  }
  Color2.is = is;
})(Color || (Color = {}));
var ColorInformation;
(function(ColorInformation2) {
  function create(range, color) {
    return {
      range,
      color
    };
  }
  ColorInformation2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.range) && Color.is(candidate.color);
  }
  ColorInformation2.is = is;
})(ColorInformation || (ColorInformation = {}));
var ColorPresentation;
(function(ColorPresentation2) {
  function create(label, textEdit, additionalTextEdits) {
    return {
      label,
      textEdit,
      additionalTextEdits
    };
  }
  ColorPresentation2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.undefined(candidate.textEdit) || TextEdit.is(candidate)) && (Is.undefined(candidate.additionalTextEdits) || Is.typedArray(candidate.additionalTextEdits, TextEdit.is));
  }
  ColorPresentation2.is = is;
})(ColorPresentation || (ColorPresentation = {}));
var FoldingRangeKind;
(function(FoldingRangeKind2) {
  FoldingRangeKind2.Comment = "comment";
  FoldingRangeKind2.Imports = "imports";
  FoldingRangeKind2.Region = "region";
})(FoldingRangeKind || (FoldingRangeKind = {}));
var FoldingRange;
(function(FoldingRange2) {
  function create(startLine, endLine, startCharacter, endCharacter, kind, collapsedText) {
    const result = {
      startLine,
      endLine
    };
    if (Is.defined(startCharacter)) {
      result.startCharacter = startCharacter;
    }
    if (Is.defined(endCharacter)) {
      result.endCharacter = endCharacter;
    }
    if (Is.defined(kind)) {
      result.kind = kind;
    }
    if (Is.defined(collapsedText)) {
      result.collapsedText = collapsedText;
    }
    return result;
  }
  FoldingRange2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.uinteger(candidate.startLine) && Is.uinteger(candidate.startLine) && (Is.undefined(candidate.startCharacter) || Is.uinteger(candidate.startCharacter)) && (Is.undefined(candidate.endCharacter) || Is.uinteger(candidate.endCharacter)) && (Is.undefined(candidate.kind) || Is.string(candidate.kind));
  }
  FoldingRange2.is = is;
})(FoldingRange || (FoldingRange = {}));
var DiagnosticRelatedInformation;
(function(DiagnosticRelatedInformation2) {
  function create(location, message) {
    return {
      location,
      message
    };
  }
  DiagnosticRelatedInformation2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Location.is(candidate.location) && Is.string(candidate.message);
  }
  DiagnosticRelatedInformation2.is = is;
})(DiagnosticRelatedInformation || (DiagnosticRelatedInformation = {}));
var DiagnosticSeverity;
(function(DiagnosticSeverity2) {
  DiagnosticSeverity2.Error = 1;
  DiagnosticSeverity2.Warning = 2;
  DiagnosticSeverity2.Information = 3;
  DiagnosticSeverity2.Hint = 4;
})(DiagnosticSeverity || (DiagnosticSeverity = {}));
var DiagnosticTag;
(function(DiagnosticTag2) {
  DiagnosticTag2.Unnecessary = 1;
  DiagnosticTag2.Deprecated = 2;
})(DiagnosticTag || (DiagnosticTag = {}));
var CodeDescription;
(function(CodeDescription2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.href);
  }
  CodeDescription2.is = is;
})(CodeDescription || (CodeDescription = {}));
var Diagnostic;
(function(Diagnostic2) {
  function create(range, message, severity, code, source, relatedInformation) {
    let result = { range, message };
    if (Is.defined(severity)) {
      result.severity = severity;
    }
    if (Is.defined(code)) {
      result.code = code;
    }
    if (Is.defined(source)) {
      result.source = source;
    }
    if (Is.defined(relatedInformation)) {
      result.relatedInformation = relatedInformation;
    }
    return result;
  }
  Diagnostic2.create = create;
  function is(value) {
    var _a;
    let candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && Is.string(candidate.message) && (Is.number(candidate.severity) || Is.undefined(candidate.severity)) && (Is.integer(candidate.code) || Is.string(candidate.code) || Is.undefined(candidate.code)) && (Is.undefined(candidate.codeDescription) || Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && (Is.string(candidate.source) || Is.undefined(candidate.source)) && (Is.undefined(candidate.relatedInformation) || Is.typedArray(candidate.relatedInformation, DiagnosticRelatedInformation.is));
  }
  Diagnostic2.is = is;
})(Diagnostic || (Diagnostic = {}));
var Command2;
(function(Command4) {
  function create(title, command, ...args) {
    let result = { title, command };
    if (Is.defined(args) && args.length > 0) {
      result.arguments = args;
    }
    return result;
  }
  Command4.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.title) && Is.string(candidate.command);
  }
  Command4.is = is;
})(Command2 || (Command2 = {}));
var TextEdit;
(function(TextEdit2) {
  function replace(range, newText) {
    return { range, newText };
  }
  TextEdit2.replace = replace;
  function insert(position, newText) {
    return { range: { start: position, end: position }, newText };
  }
  TextEdit2.insert = insert;
  function del(range) {
    return { range, newText: "" };
  }
  TextEdit2.del = del;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.newText) && Range.is(candidate.range);
  }
  TextEdit2.is = is;
})(TextEdit || (TextEdit = {}));
var ChangeAnnotation;
(function(ChangeAnnotation2) {
  function create(label, needsConfirmation, description) {
    const result = { label };
    if (needsConfirmation !== void 0) {
      result.needsConfirmation = needsConfirmation;
    }
    if (description !== void 0) {
      result.description = description;
    }
    return result;
  }
  ChangeAnnotation2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Is.string(candidate.label) && (Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
  }
  ChangeAnnotation2.is = is;
})(ChangeAnnotation || (ChangeAnnotation = {}));
var ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
  function is(value) {
    const candidate = value;
    return Is.string(candidate);
  }
  ChangeAnnotationIdentifier2.is = is;
})(ChangeAnnotationIdentifier || (ChangeAnnotationIdentifier = {}));
var AnnotatedTextEdit;
(function(AnnotatedTextEdit2) {
  function replace(range, newText, annotation) {
    return { range, newText, annotationId: annotation };
  }
  AnnotatedTextEdit2.replace = replace;
  function insert(position, newText, annotation) {
    return { range: { start: position, end: position }, newText, annotationId: annotation };
  }
  AnnotatedTextEdit2.insert = insert;
  function del(range, annotation) {
    return { range, newText: "", annotationId: annotation };
  }
  AnnotatedTextEdit2.del = del;
  function is(value) {
    const candidate = value;
    return TextEdit.is(candidate) && (ChangeAnnotation.is(candidate.annotationId) || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  AnnotatedTextEdit2.is = is;
})(AnnotatedTextEdit || (AnnotatedTextEdit = {}));
var TextDocumentEdit;
(function(TextDocumentEdit2) {
  function create(textDocument, edits) {
    return { textDocument, edits };
  }
  TextDocumentEdit2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
  }
  TextDocumentEdit2.is = is;
})(TextDocumentEdit || (TextDocumentEdit = {}));
var CreateFile;
(function(CreateFile2) {
  function create(uri, options, annotation) {
    let result = {
      kind: "create",
      uri
    };
    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  CreateFile2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && candidate.kind === "create" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  CreateFile2.is = is;
})(CreateFile || (CreateFile = {}));
var RenameFile;
(function(RenameFile2) {
  function create(oldUri, newUri, options, annotation) {
    let result = {
      kind: "rename",
      oldUri,
      newUri
    };
    if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  RenameFile2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && candidate.kind === "rename" && Is.string(candidate.oldUri) && Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  RenameFile2.is = is;
})(RenameFile || (RenameFile = {}));
var DeleteFile;
(function(DeleteFile2) {
  function create(uri, options, annotation) {
    let result = {
      kind: "delete",
      uri
    };
    if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) {
      result.options = options;
    }
    if (annotation !== void 0) {
      result.annotationId = annotation;
    }
    return result;
  }
  DeleteFile2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && candidate.kind === "delete" && Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || ChangeAnnotationIdentifier.is(candidate.annotationId));
  }
  DeleteFile2.is = is;
})(DeleteFile || (DeleteFile = {}));
var WorkspaceEdit;
(function(WorkspaceEdit2) {
  function is(value) {
    let candidate = value;
    return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every((change) => {
      if (Is.string(change.kind)) {
        return CreateFile.is(change) || RenameFile.is(change) || DeleteFile.is(change);
      } else {
        return TextDocumentEdit.is(change);
      }
    }));
  }
  WorkspaceEdit2.is = is;
})(WorkspaceEdit || (WorkspaceEdit = {}));
var TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
  function create(uri) {
    return { uri };
  }
  TextDocumentIdentifier2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri);
  }
  TextDocumentIdentifier2.is = is;
})(TextDocumentIdentifier || (TextDocumentIdentifier = {}));
var VersionedTextDocumentIdentifier;
(function(VersionedTextDocumentIdentifier2) {
  function create(uri, version) {
    return { uri, version };
  }
  VersionedTextDocumentIdentifier2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && Is.integer(candidate.version);
  }
  VersionedTextDocumentIdentifier2.is = is;
})(VersionedTextDocumentIdentifier || (VersionedTextDocumentIdentifier = {}));
var OptionalVersionedTextDocumentIdentifier;
(function(OptionalVersionedTextDocumentIdentifier2) {
  function create(uri, version) {
    return { uri, version };
  }
  OptionalVersionedTextDocumentIdentifier2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && (candidate.version === null || Is.integer(candidate.version));
  }
  OptionalVersionedTextDocumentIdentifier2.is = is;
})(OptionalVersionedTextDocumentIdentifier || (OptionalVersionedTextDocumentIdentifier = {}));
var TextDocumentItem;
(function(TextDocumentItem2) {
  function create(uri, languageId, version, text) {
    return { uri, languageId, version, text };
  }
  TextDocumentItem2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && Is.string(candidate.languageId) && Is.integer(candidate.version) && Is.string(candidate.text);
  }
  TextDocumentItem2.is = is;
})(TextDocumentItem || (TextDocumentItem = {}));
var MarkupKind;
(function(MarkupKind2) {
  MarkupKind2.PlainText = "plaintext";
  MarkupKind2.Markdown = "markdown";
  function is(value) {
    const candidate = value;
    return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
  }
  MarkupKind2.is = is;
})(MarkupKind || (MarkupKind = {}));
var MarkupContent;
(function(MarkupContent2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(value) && MarkupKind.is(candidate.kind) && Is.string(candidate.value);
  }
  MarkupContent2.is = is;
})(MarkupContent || (MarkupContent = {}));
var CompletionItemKind;
(function(CompletionItemKind2) {
  CompletionItemKind2.Text = 1;
  CompletionItemKind2.Method = 2;
  CompletionItemKind2.Function = 3;
  CompletionItemKind2.Constructor = 4;
  CompletionItemKind2.Field = 5;
  CompletionItemKind2.Variable = 6;
  CompletionItemKind2.Class = 7;
  CompletionItemKind2.Interface = 8;
  CompletionItemKind2.Module = 9;
  CompletionItemKind2.Property = 10;
  CompletionItemKind2.Unit = 11;
  CompletionItemKind2.Value = 12;
  CompletionItemKind2.Enum = 13;
  CompletionItemKind2.Keyword = 14;
  CompletionItemKind2.Snippet = 15;
  CompletionItemKind2.Color = 16;
  CompletionItemKind2.File = 17;
  CompletionItemKind2.Reference = 18;
  CompletionItemKind2.Folder = 19;
  CompletionItemKind2.EnumMember = 20;
  CompletionItemKind2.Constant = 21;
  CompletionItemKind2.Struct = 22;
  CompletionItemKind2.Event = 23;
  CompletionItemKind2.Operator = 24;
  CompletionItemKind2.TypeParameter = 25;
})(CompletionItemKind || (CompletionItemKind = {}));
var InsertTextFormat;
(function(InsertTextFormat2) {
  InsertTextFormat2.PlainText = 1;
  InsertTextFormat2.Snippet = 2;
})(InsertTextFormat || (InsertTextFormat = {}));
var CompletionItemTag;
(function(CompletionItemTag2) {
  CompletionItemTag2.Deprecated = 1;
})(CompletionItemTag || (CompletionItemTag = {}));
var InsertReplaceEdit;
(function(InsertReplaceEdit2) {
  function create(newText, insert, replace) {
    return { newText, insert, replace };
  }
  InsertReplaceEdit2.create = create;
  function is(value) {
    const candidate = value;
    return candidate && Is.string(candidate.newText) && Range.is(candidate.insert) && Range.is(candidate.replace);
  }
  InsertReplaceEdit2.is = is;
})(InsertReplaceEdit || (InsertReplaceEdit = {}));
var InsertTextMode;
(function(InsertTextMode2) {
  InsertTextMode2.asIs = 1;
  InsertTextMode2.adjustIndentation = 2;
})(InsertTextMode || (InsertTextMode = {}));
var CompletionItemLabelDetails;
(function(CompletionItemLabelDetails2) {
  function is(value) {
    const candidate = value;
    return candidate && (Is.string(candidate.detail) || candidate.detail === void 0) && (Is.string(candidate.description) || candidate.description === void 0);
  }
  CompletionItemLabelDetails2.is = is;
})(CompletionItemLabelDetails || (CompletionItemLabelDetails = {}));
var CompletionItem;
(function(CompletionItem2) {
  function create(label) {
    return { label };
  }
  CompletionItem2.create = create;
})(CompletionItem || (CompletionItem = {}));
var CompletionList;
(function(CompletionList2) {
  function create(items, isIncomplete) {
    return { items: items ? items : [], isIncomplete: !!isIncomplete };
  }
  CompletionList2.create = create;
})(CompletionList || (CompletionList = {}));
var MarkedString;
(function(MarkedString2) {
  function fromPlainText(plainText) {
    return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
  }
  MarkedString2.fromPlainText = fromPlainText;
  function is(value) {
    const candidate = value;
    return Is.string(candidate) || Is.objectLiteral(candidate) && Is.string(candidate.language) && Is.string(candidate.value);
  }
  MarkedString2.is = is;
})(MarkedString || (MarkedString = {}));
var Hover;
(function(Hover2) {
  function is(value) {
    let candidate = value;
    return !!candidate && Is.objectLiteral(candidate) && (MarkupContent.is(candidate.contents) || MarkedString.is(candidate.contents) || Is.typedArray(candidate.contents, MarkedString.is)) && (value.range === void 0 || Range.is(value.range));
  }
  Hover2.is = is;
})(Hover || (Hover = {}));
var ParameterInformation;
(function(ParameterInformation2) {
  function create(label, documentation) {
    return documentation ? { label, documentation } : { label };
  }
  ParameterInformation2.create = create;
})(ParameterInformation || (ParameterInformation = {}));
var SignatureInformation;
(function(SignatureInformation2) {
  function create(label, documentation, ...parameters) {
    let result = { label };
    if (Is.defined(documentation)) {
      result.documentation = documentation;
    }
    if (Is.defined(parameters)) {
      result.parameters = parameters;
    } else {
      result.parameters = [];
    }
    return result;
  }
  SignatureInformation2.create = create;
})(SignatureInformation || (SignatureInformation = {}));
var DocumentHighlightKind;
(function(DocumentHighlightKind2) {
  DocumentHighlightKind2.Text = 1;
  DocumentHighlightKind2.Read = 2;
  DocumentHighlightKind2.Write = 3;
})(DocumentHighlightKind || (DocumentHighlightKind = {}));
var DocumentHighlight;
(function(DocumentHighlight2) {
  function create(range, kind) {
    let result = { range };
    if (Is.number(kind)) {
      result.kind = kind;
    }
    return result;
  }
  DocumentHighlight2.create = create;
})(DocumentHighlight || (DocumentHighlight = {}));
var SymbolKind;
(function(SymbolKind2) {
  SymbolKind2.File = 1;
  SymbolKind2.Module = 2;
  SymbolKind2.Namespace = 3;
  SymbolKind2.Package = 4;
  SymbolKind2.Class = 5;
  SymbolKind2.Method = 6;
  SymbolKind2.Property = 7;
  SymbolKind2.Field = 8;
  SymbolKind2.Constructor = 9;
  SymbolKind2.Enum = 10;
  SymbolKind2.Interface = 11;
  SymbolKind2.Function = 12;
  SymbolKind2.Variable = 13;
  SymbolKind2.Constant = 14;
  SymbolKind2.String = 15;
  SymbolKind2.Number = 16;
  SymbolKind2.Boolean = 17;
  SymbolKind2.Array = 18;
  SymbolKind2.Object = 19;
  SymbolKind2.Key = 20;
  SymbolKind2.Null = 21;
  SymbolKind2.EnumMember = 22;
  SymbolKind2.Struct = 23;
  SymbolKind2.Event = 24;
  SymbolKind2.Operator = 25;
  SymbolKind2.TypeParameter = 26;
})(SymbolKind || (SymbolKind = {}));
var SymbolTag;
(function(SymbolTag2) {
  SymbolTag2.Deprecated = 1;
})(SymbolTag || (SymbolTag = {}));
var SymbolInformation;
(function(SymbolInformation2) {
  function create(name, kind, range, uri, containerName) {
    let result = {
      name,
      kind,
      location: { uri, range }
    };
    if (containerName) {
      result.containerName = containerName;
    }
    return result;
  }
  SymbolInformation2.create = create;
})(SymbolInformation || (SymbolInformation = {}));
var WorkspaceSymbol;
(function(WorkspaceSymbol2) {
  function create(name, kind, uri, range) {
    return range !== void 0 ? { name, kind, location: { uri, range } } : { name, kind, location: { uri } };
  }
  WorkspaceSymbol2.create = create;
})(WorkspaceSymbol || (WorkspaceSymbol = {}));
var DocumentSymbol;
(function(DocumentSymbol2) {
  function create(name, detail, kind, range, selectionRange, children) {
    let result = {
      name,
      detail,
      kind,
      range,
      selectionRange
    };
    if (children !== void 0) {
      result.children = children;
    }
    return result;
  }
  DocumentSymbol2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && Is.string(candidate.name) && Is.number(candidate.kind) && Range.is(candidate.range) && Range.is(candidate.selectionRange) && (candidate.detail === void 0 || Is.string(candidate.detail)) && (candidate.deprecated === void 0 || Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
  }
  DocumentSymbol2.is = is;
})(DocumentSymbol || (DocumentSymbol = {}));
var CodeActionKind2;
(function(CodeActionKind3) {
  CodeActionKind3.Empty = "";
  CodeActionKind3.QuickFix = "quickfix";
  CodeActionKind3.Refactor = "refactor";
  CodeActionKind3.RefactorExtract = "refactor.extract";
  CodeActionKind3.RefactorInline = "refactor.inline";
  CodeActionKind3.RefactorRewrite = "refactor.rewrite";
  CodeActionKind3.Source = "source";
  CodeActionKind3.SourceOrganizeImports = "source.organizeImports";
  CodeActionKind3.SourceFixAll = "source.fixAll";
})(CodeActionKind2 || (CodeActionKind2 = {}));
var CodeActionTriggerKind;
(function(CodeActionTriggerKind2) {
  CodeActionTriggerKind2.Invoked = 1;
  CodeActionTriggerKind2.Automatic = 2;
})(CodeActionTriggerKind || (CodeActionTriggerKind = {}));
var CodeActionContext;
(function(CodeActionContext2) {
  function create(diagnostics, only, triggerKind) {
    let result = { diagnostics };
    if (only !== void 0 && only !== null) {
      result.only = only;
    }
    if (triggerKind !== void 0 && triggerKind !== null) {
      result.triggerKind = triggerKind;
    }
    return result;
  }
  CodeActionContext2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.typedArray(candidate.diagnostics, Diagnostic.is) && (candidate.only === void 0 || Is.typedArray(candidate.only, Is.string)) && (candidate.triggerKind === void 0 || candidate.triggerKind === CodeActionTriggerKind.Invoked || candidate.triggerKind === CodeActionTriggerKind.Automatic);
  }
  CodeActionContext2.is = is;
})(CodeActionContext || (CodeActionContext = {}));
var CodeAction;
(function(CodeAction2) {
  function create(title, kindOrCommandOrEdit, kind) {
    let result = { title };
    let checkKind = true;
    if (typeof kindOrCommandOrEdit === "string") {
      checkKind = false;
      result.kind = kindOrCommandOrEdit;
    } else if (Command2.is(kindOrCommandOrEdit)) {
      result.command = kindOrCommandOrEdit;
    } else {
      result.edit = kindOrCommandOrEdit;
    }
    if (checkKind && kind !== void 0) {
      result.kind = kind;
    }
    return result;
  }
  CodeAction2.create = create;
  function is(value) {
    let candidate = value;
    return candidate && Is.string(candidate.title) && (candidate.diagnostics === void 0 || Is.typedArray(candidate.diagnostics, Diagnostic.is)) && (candidate.kind === void 0 || Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || Command2.is(candidate.command)) && (candidate.isPreferred === void 0 || Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || WorkspaceEdit.is(candidate.edit));
  }
  CodeAction2.is = is;
})(CodeAction || (CodeAction = {}));
var CodeLens;
(function(CodeLens2) {
  function create(range, data) {
    let result = { range };
    if (Is.defined(data)) {
      result.data = data;
    }
    return result;
  }
  CodeLens2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.command) || Command2.is(candidate.command));
  }
  CodeLens2.is = is;
})(CodeLens || (CodeLens = {}));
var FormattingOptions;
(function(FormattingOptions2) {
  function create(tabSize, insertSpaces) {
    return { tabSize, insertSpaces };
  }
  FormattingOptions2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.uinteger(candidate.tabSize) && Is.boolean(candidate.insertSpaces);
  }
  FormattingOptions2.is = is;
})(FormattingOptions || (FormattingOptions = {}));
var DocumentLink;
(function(DocumentLink2) {
  function create(range, target, data) {
    return { range, target, data };
  }
  DocumentLink2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Range.is(candidate.range) && (Is.undefined(candidate.target) || Is.string(candidate.target));
  }
  DocumentLink2.is = is;
})(DocumentLink || (DocumentLink = {}));
var SelectionRange;
(function(SelectionRange2) {
  function create(range, parent) {
    return { range, parent };
  }
  SelectionRange2.create = create;
  function is(value) {
    let candidate = value;
    return Is.objectLiteral(candidate) && Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
  }
  SelectionRange2.is = is;
})(SelectionRange || (SelectionRange = {}));
var SemanticTokenTypes;
(function(SemanticTokenTypes2) {
  SemanticTokenTypes2["namespace"] = "namespace";
  SemanticTokenTypes2["type"] = "type";
  SemanticTokenTypes2["class"] = "class";
  SemanticTokenTypes2["enum"] = "enum";
  SemanticTokenTypes2["interface"] = "interface";
  SemanticTokenTypes2["struct"] = "struct";
  SemanticTokenTypes2["typeParameter"] = "typeParameter";
  SemanticTokenTypes2["parameter"] = "parameter";
  SemanticTokenTypes2["variable"] = "variable";
  SemanticTokenTypes2["property"] = "property";
  SemanticTokenTypes2["enumMember"] = "enumMember";
  SemanticTokenTypes2["event"] = "event";
  SemanticTokenTypes2["function"] = "function";
  SemanticTokenTypes2["method"] = "method";
  SemanticTokenTypes2["macro"] = "macro";
  SemanticTokenTypes2["keyword"] = "keyword";
  SemanticTokenTypes2["modifier"] = "modifier";
  SemanticTokenTypes2["comment"] = "comment";
  SemanticTokenTypes2["string"] = "string";
  SemanticTokenTypes2["number"] = "number";
  SemanticTokenTypes2["regexp"] = "regexp";
  SemanticTokenTypes2["operator"] = "operator";
  SemanticTokenTypes2["decorator"] = "decorator";
})(SemanticTokenTypes || (SemanticTokenTypes = {}));
var SemanticTokenModifiers;
(function(SemanticTokenModifiers2) {
  SemanticTokenModifiers2["declaration"] = "declaration";
  SemanticTokenModifiers2["definition"] = "definition";
  SemanticTokenModifiers2["readonly"] = "readonly";
  SemanticTokenModifiers2["static"] = "static";
  SemanticTokenModifiers2["deprecated"] = "deprecated";
  SemanticTokenModifiers2["abstract"] = "abstract";
  SemanticTokenModifiers2["async"] = "async";
  SemanticTokenModifiers2["modification"] = "modification";
  SemanticTokenModifiers2["documentation"] = "documentation";
  SemanticTokenModifiers2["defaultLibrary"] = "defaultLibrary";
})(SemanticTokenModifiers || (SemanticTokenModifiers = {}));
var SemanticTokens;
(function(SemanticTokens2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && (candidate.resultId === void 0 || typeof candidate.resultId === "string") && Array.isArray(candidate.data) && (candidate.data.length === 0 || typeof candidate.data[0] === "number");
  }
  SemanticTokens2.is = is;
})(SemanticTokens || (SemanticTokens = {}));
var InlineValueText;
(function(InlineValueText2) {
  function create(range, text) {
    return { range, text };
  }
  InlineValueText2.create = create;
  function is(value) {
    const candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.string(candidate.text);
  }
  InlineValueText2.is = is;
})(InlineValueText || (InlineValueText = {}));
var InlineValueVariableLookup;
(function(InlineValueVariableLookup2) {
  function create(range, variableName, caseSensitiveLookup) {
    return { range, variableName, caseSensitiveLookup };
  }
  InlineValueVariableLookup2.create = create;
  function is(value) {
    const candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && Is.boolean(candidate.caseSensitiveLookup) && (Is.string(candidate.variableName) || candidate.variableName === void 0);
  }
  InlineValueVariableLookup2.is = is;
})(InlineValueVariableLookup || (InlineValueVariableLookup = {}));
var InlineValueEvaluatableExpression;
(function(InlineValueEvaluatableExpression2) {
  function create(range, expression) {
    return { range, expression };
  }
  InlineValueEvaluatableExpression2.create = create;
  function is(value) {
    const candidate = value;
    return candidate !== void 0 && candidate !== null && Range.is(candidate.range) && (Is.string(candidate.expression) || candidate.expression === void 0);
  }
  InlineValueEvaluatableExpression2.is = is;
})(InlineValueEvaluatableExpression || (InlineValueEvaluatableExpression = {}));
var InlineValueContext;
(function(InlineValueContext2) {
  function create(frameId, stoppedLocation) {
    return { frameId, stoppedLocation };
  }
  InlineValueContext2.create = create;
  function is(value) {
    const candidate = value;
    return Is.defined(candidate) && Range.is(value.stoppedLocation);
  }
  InlineValueContext2.is = is;
})(InlineValueContext || (InlineValueContext = {}));
var InlayHintKind;
(function(InlayHintKind2) {
  InlayHintKind2.Type = 1;
  InlayHintKind2.Parameter = 2;
  function is(value) {
    return value === 1 || value === 2;
  }
  InlayHintKind2.is = is;
})(InlayHintKind || (InlayHintKind = {}));
var InlayHintLabelPart;
(function(InlayHintLabelPart2) {
  function create(value) {
    return { value };
  }
  InlayHintLabelPart2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.location === void 0 || Location.is(candidate.location)) && (candidate.command === void 0 || Command2.is(candidate.command));
  }
  InlayHintLabelPart2.is = is;
})(InlayHintLabelPart || (InlayHintLabelPart = {}));
var InlayHint;
(function(InlayHint2) {
  function create(position, label, kind) {
    const result = { position, label };
    if (kind !== void 0) {
      result.kind = kind;
    }
    return result;
  }
  InlayHint2.create = create;
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && Position.is(candidate.position) && (Is.string(candidate.label) || Is.typedArray(candidate.label, InlayHintLabelPart.is)) && (candidate.kind === void 0 || InlayHintKind.is(candidate.kind)) && candidate.textEdits === void 0 || Is.typedArray(candidate.textEdits, TextEdit.is) && (candidate.tooltip === void 0 || Is.string(candidate.tooltip) || MarkupContent.is(candidate.tooltip)) && (candidate.paddingLeft === void 0 || Is.boolean(candidate.paddingLeft)) && (candidate.paddingRight === void 0 || Is.boolean(candidate.paddingRight));
  }
  InlayHint2.is = is;
})(InlayHint || (InlayHint = {}));
var StringValue;
(function(StringValue2) {
  function createSnippet(value) {
    return { kind: "snippet", value };
  }
  StringValue2.createSnippet = createSnippet;
})(StringValue || (StringValue = {}));
var InlineCompletionItem;
(function(InlineCompletionItem2) {
  function create(insertText, filterText, range, command) {
    return { insertText, filterText, range, command };
  }
  InlineCompletionItem2.create = create;
})(InlineCompletionItem || (InlineCompletionItem = {}));
var InlineCompletionList;
(function(InlineCompletionList2) {
  function create(items) {
    return { items };
  }
  InlineCompletionList2.create = create;
})(InlineCompletionList || (InlineCompletionList = {}));
var InlineCompletionTriggerKind;
(function(InlineCompletionTriggerKind2) {
  InlineCompletionTriggerKind2.Invoked = 0;
  InlineCompletionTriggerKind2.Automatic = 1;
})(InlineCompletionTriggerKind || (InlineCompletionTriggerKind = {}));
var SelectedCompletionInfo;
(function(SelectedCompletionInfo2) {
  function create(range, text) {
    return { range, text };
  }
  SelectedCompletionInfo2.create = create;
})(SelectedCompletionInfo || (SelectedCompletionInfo = {}));
var InlineCompletionContext;
(function(InlineCompletionContext2) {
  function create(triggerKind, selectedCompletionInfo) {
    return { triggerKind, selectedCompletionInfo };
  }
  InlineCompletionContext2.create = create;
})(InlineCompletionContext || (InlineCompletionContext = {}));
var WorkspaceFolder;
(function(WorkspaceFolder2) {
  function is(value) {
    const candidate = value;
    return Is.objectLiteral(candidate) && URI2.is(candidate.uri) && Is.string(candidate.name);
  }
  WorkspaceFolder2.is = is;
})(WorkspaceFolder || (WorkspaceFolder = {}));
var TextDocument;
(function(TextDocument2) {
  function create(uri, languageId, version, content) {
    return new FullTextDocument(uri, languageId, version, content);
  }
  TextDocument2.create = create;
  function is(value) {
    let candidate = value;
    return Is.defined(candidate) && Is.string(candidate.uri) && (Is.undefined(candidate.languageId) || Is.string(candidate.languageId)) && Is.uinteger(candidate.lineCount) && Is.func(candidate.getText) && Is.func(candidate.positionAt) && Is.func(candidate.offsetAt) ? true : false;
  }
  TextDocument2.is = is;
  function applyEdits(document, edits) {
    let text = document.getText();
    let sortedEdits = mergeSort(edits, (a, b) => {
      let diff = a.range.start.line - b.range.start.line;
      if (diff === 0) {
        return a.range.start.character - b.range.start.character;
      }
      return diff;
    });
    let lastModifiedOffset = text.length;
    for (let i = sortedEdits.length - 1; i >= 0; i--) {
      let e = sortedEdits[i];
      let startOffset = document.offsetAt(e.range.start);
      let endOffset = document.offsetAt(e.range.end);
      if (endOffset <= lastModifiedOffset) {
        text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
      } else {
        throw new Error("Overlapping edit");
      }
      lastModifiedOffset = startOffset;
    }
    return text;
  }
  TextDocument2.applyEdits = applyEdits;
  function mergeSort(data, compare) {
    if (data.length <= 1) {
      return data;
    }
    const p = data.length / 2 | 0;
    const left = data.slice(0, p);
    const right = data.slice(p);
    mergeSort(left, compare);
    mergeSort(right, compare);
    let leftIdx = 0;
    let rightIdx = 0;
    let i = 0;
    while (leftIdx < left.length && rightIdx < right.length) {
      let ret = compare(left[leftIdx], right[rightIdx]);
      if (ret <= 0) {
        data[i++] = left[leftIdx++];
      } else {
        data[i++] = right[rightIdx++];
      }
    }
    while (leftIdx < left.length) {
      data[i++] = left[leftIdx++];
    }
    while (rightIdx < right.length) {
      data[i++] = right[rightIdx++];
    }
    return data;
  }
})(TextDocument || (TextDocument = {}));
var FullTextDocument = class {
  constructor(uri, languageId, version, content) {
    this._uri = uri;
    this._languageId = languageId;
    this._version = version;
    this._content = content;
    this._lineOffsets = void 0;
  }
  get uri() {
    return this._uri;
  }
  get languageId() {
    return this._languageId;
  }
  get version() {
    return this._version;
  }
  getText(range) {
    if (range) {
      let start = this.offsetAt(range.start);
      let end = this.offsetAt(range.end);
      return this._content.substring(start, end);
    }
    return this._content;
  }
  update(event, version) {
    this._content = event.text;
    this._version = version;
    this._lineOffsets = void 0;
  }
  getLineOffsets() {
    if (this._lineOffsets === void 0) {
      let lineOffsets = [];
      let text = this._content;
      let isLineStart = true;
      for (let i = 0; i < text.length; i++) {
        if (isLineStart) {
          lineOffsets.push(i);
          isLineStart = false;
        }
        let ch = text.charAt(i);
        isLineStart = ch === "\r" || ch === "\n";
        if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") {
          i++;
        }
      }
      if (isLineStart && text.length > 0) {
        lineOffsets.push(text.length);
      }
      this._lineOffsets = lineOffsets;
    }
    return this._lineOffsets;
  }
  positionAt(offset) {
    offset = Math.max(Math.min(offset, this._content.length), 0);
    let lineOffsets = this.getLineOffsets();
    let low = 0, high = lineOffsets.length;
    if (high === 0) {
      return Position.create(0, offset);
    }
    while (low < high) {
      let mid = Math.floor((low + high) / 2);
      if (lineOffsets[mid] > offset) {
        high = mid;
      } else {
        low = mid + 1;
      }
    }
    let line = low - 1;
    return Position.create(line, offset - lineOffsets[line]);
  }
  offsetAt(position) {
    let lineOffsets = this.getLineOffsets();
    if (position.line >= lineOffsets.length) {
      return this._content.length;
    } else if (position.line < 0) {
      return 0;
    }
    let lineOffset = lineOffsets[position.line];
    let nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
    return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
  }
  get lineCount() {
    return this.getLineOffsets().length;
  }
};
var Is;
(function(Is2) {
  const toString2 = Object.prototype.toString;
  function defined(value) {
    return typeof value !== "undefined";
  }
  Is2.defined = defined;
  function undefined2(value) {
    return typeof value === "undefined";
  }
  Is2.undefined = undefined2;
  function boolean(value) {
    return value === true || value === false;
  }
  Is2.boolean = boolean;
  function string(value) {
    return toString2.call(value) === "[object String]";
  }
  Is2.string = string;
  function number(value) {
    return toString2.call(value) === "[object Number]";
  }
  Is2.number = number;
  function numberRange(value, min, max) {
    return toString2.call(value) === "[object Number]" && min <= value && value <= max;
  }
  Is2.numberRange = numberRange;
  function integer2(value) {
    return toString2.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
  }
  Is2.integer = integer2;
  function uinteger2(value) {
    return toString2.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
  }
  Is2.uinteger = uinteger2;
  function func(value) {
    return toString2.call(value) === "[object Function]";
  }
  Is2.func = func;
  function objectLiteral(value) {
    return value !== null && typeof value === "object";
  }
  Is2.objectLiteral = objectLiteral;
  function typedArray(value, check) {
    return Array.isArray(value) && value.every(check);
  }
  Is2.typedArray = typedArray;
})(Is || (Is = {}));

// src/model/domain-model-rename-refactoring.ts
var DomainModelRenameProvider = class extends DefaultRenameProvider {
  constructor(services) {
    super(services);
    this.langiumDocuments = services.shared.workspace.LangiumDocuments;
    this.qualifiedNameProvider = services.references.QualifiedNameProvider;
  }
  async rename(document, params) {
    const changes = {};
    const rootNode = document.parseResult.value.$cstNode;
    if (!rootNode) return void 0;
    const offset = document.textDocument.offsetAt(params.position);
    const leafNode = CstUtils.findDeclarationNodeAtOffset(rootNode, offset, this.grammarConfig.nameRegexp);
    if (!leafNode) return void 0;
    const targetNodes = this.references.findDeclarations(leafNode);
    if (!targetNodes.length) return void 0;
    for (const node of targetNodes) {
      if (isNamed(node)) node.name = params.newName;
      const location = this.getNodeLocation(node);
      if (location) {
        const change = TextEdit.replace(location.range, params.newName);
        const uri = location.uri;
        if (uri) {
          if (changes[uri]) {
            changes[uri].push(change);
          } else {
            changes[uri] = [change];
          }
        }
      }
    }
    const targetNode = targetNodes[0];
    for (const node of AstUtils.streamAst(targetNode)) {
      const qn = this.buildQualifiedName(node);
      if (qn) {
        const options = { onlyLocal: false, includeDeclaration: false };
        this.references.findReferences(node, options).forEach((reference) => {
          const nodeLocation = this.getRefLocation(reference);
          const isQn = this.hasQualifiedNameText(reference.sourceUri, reference.segment.range);
          let newName = qn;
          if (!isQn) newName = params.newName;
          const nodeChange = TextEdit.replace(nodeLocation.range, newName);
          if (changes[nodeLocation.uri]) {
            changes[nodeLocation.uri].push(nodeChange);
          } else {
            changes[nodeLocation.uri] = [nodeChange];
          }
        });
      }
    }
    return { changes };
  }
  hasQualifiedNameText(uri, range) {
    const langiumDoc = this.langiumDocuments.getDocument(uri);
    if (!langiumDoc) {
      return false;
    }
    const rangeText = langiumDoc.textDocument.getText(range);
    return rangeText.includes(".", 0);
  }
  getRefLocation(ref) {
    return Location.create(
      ref.sourceUri.toString(),
      ref.segment.range
    );
  }
  getNodeLocation(targetNode) {
    const nameNode = this.nameProvider.getNameNode(targetNode);
    if (nameNode) {
      const doc = AstUtils.getDocument(targetNode);
      return Location.create(
        doc.uri.toString(),
        CstUtils.toDocumentSegment(nameNode).range
      );
    }
    return void 0;
  }
  buildQualifiedName(node) {
    if (node.$type === "Feature") return void 0;
    let name = this.nameProvider.getName(node);
    if (name) {
      if (isPackageDeclaration(node.$container)) {
        name = this.qualifiedNameProvider.getQualifiedName(node.$container, name);
      }
    }
    return name;
  }
};

// src/model/domain-model-scope.ts
import { AstUtils as AstUtils2, Cancellation, DefaultScopeComputation, interruptAndCheck, MultiMap as MultiMap2 } from "langium";
var DomainModelScopeComputation = class extends DefaultScopeComputation {
  constructor(services) {
    super(services);
    this.qualifiedNameProvider = services.references.QualifiedNameProvider;
  }
  /**
   * Exports only types (`DataType or `Entity`) with their qualified names.
   */
  async collectExportedSymbols(document, cancelToken = Cancellation.CancellationToken.None) {
    const descr = [];
    for (const modelNode of AstUtils2.streamAllContents(document.parseResult.value)) {
      await interruptAndCheck(cancelToken);
      if (isType(modelNode)) {
        let name = this.nameProvider.getName(modelNode);
        if (name) {
          if (isPackageDeclaration(modelNode.$container)) {
            name = this.qualifiedNameProvider.getQualifiedName(modelNode.$container, name);
          }
          descr.push(this.descriptions.createDescription(modelNode, name, document));
        }
      }
    }
    return descr;
  }
  async collectLocalSymbols(document, cancelToken = Cancellation.CancellationToken.None) {
    const model = document.parseResult.value;
    const symbols = new MultiMap2();
    await this.processContainer(model, symbols, document, cancelToken);
    return symbols;
  }
  async processContainer(container, symbols, document, cancelToken) {
    const localDescriptions = [];
    for (const element of container.elements) {
      await interruptAndCheck(cancelToken);
      if (isType(element) && element.name) {
        const description = this.descriptions.createDescription(element, element.name, document);
        localDescriptions.push(description);
      } else if (isPackageDeclaration(element)) {
        const nestedDescriptions = await this.processContainer(element, symbols, document, cancelToken);
        for (const description of nestedDescriptions) {
          const qualified = this.createQualifiedDescription(element, description, document);
          localDescriptions.push(qualified);
        }
      }
    }
    symbols.addAll(container, localDescriptions);
    return localDescriptions;
  }
  createQualifiedDescription(pack, description, document) {
    const name = this.qualifiedNameProvider.getQualifiedName(pack.name, description.name);
    return this.descriptions.createDescription(description.node, name, document);
  }
};

// src/model/domain-model-validator.ts
var DomainModelValidator = class {
  checkTypeStartsWithCapital(type, accept) {
    if (type.name) {
      const firstChar = type.name.substring(0, 1);
      if (firstChar.toUpperCase() !== firstChar) {
        accept("warning", "Type name should start with a capital.", { node: type, property: "name" });
      }
    }
  }
};

// src/model/domain-model-module.ts
var DomainModelModule = {
  references: {
    ScopeComputation: (services) => new DomainModelScopeComputation(services),
    QualifiedNameProvider: () => new QualifiedNameProvider()
  },
  validation: {
    DomainModelValidator: () => new DomainModelValidator()
  },
  lsp: {
    Formatter: () => new DomainModelFormatter(),
    RenameProvider: (services) => new DomainModelRenameProvider(services)
  }
};

// src/requirements/requirements-lang-validator.ts
function registerRequirementsValidationChecks(services) {
  const registry = services.validation.ValidationRegistry;
  const validator = services.validation.RequirementsLangValidator;
  const checks = {
    Requirement: [
      validator.checkRequirementNameContainsANumber,
      validator.checkRequirementIsCoveredByATest
    ]
  };
  registry.register(checks, validator);
}
var RequirementsLangValidator = class {
  constructor(services) {
    this.services = services;
  }
  checkRequirementNameContainsANumber(requirement, accept) {
    if (requirement.name) {
      if (!/.*\d.*/.test(requirement.name)) {
        accept("warning", `Requirement name ${requirement.name} should container a number.`, { node: requirement, property: "name" });
      }
    }
  }
  checkRequirementIsCoveredByATest(requirement, accept) {
    let ok = false;
    this.services.shared.workspace.LangiumDocuments.all.map((doc) => doc.parseResult?.value).filter(isTestModel).forEach((testModel) => {
      testModel.tests.forEach((test) => {
        if (test.requirements.map((r) => r.ref).includes(requirement)) {
          ok = true;
        }
      });
    });
    if (!ok) {
      accept("warning", `Requirement ${requirement.name} not covered by a test.`, { node: requirement });
    }
  }
};

// src/requirements/requirements-lang-module.ts
var RequirementsLangModule = {
  validation: {
    RequirementsLangValidator: (services) => new RequirementsLangValidator(services)
  }
};

// src/requirements/tests-lang-validator.ts
function registerTestsValidationChecks(services) {
  const registry = services.validation.ValidationRegistry;
  const validator = services.validation.TestsLangValidator;
  const checks = {
    Test: [
      validator.checkTestNameContainsANumber,
      validator.checkTestReferencesOnlyEnvironmentsAlsoReferencedInSomeRequirement
    ]
  };
  registry.register(checks, validator);
}
var TestsLangValidator = class {
  checkTestNameContainsANumber(test, accept) {
    if (test.name) {
      if (!/.*\d.*/.test(test.name)) {
        accept("warning", `Test name ${test.name} should container a number.`, { node: test, property: "name" });
      }
    }
  }
  checkTestReferencesOnlyEnvironmentsAlsoReferencedInSomeRequirement(test, accept) {
    test.environments.forEach((environmentReference, index) => {
      if (environmentReference.ref) {
        if (!test.requirements.some((requirementReference) => {
          return requirementReference.ref && requirementReference.ref.environments.map((v) => v.ref).includes(environmentReference.ref);
        })) {
          accept("warning", `Test ${test.name} references environment ${environmentReference.ref.name} which is used in any referenced requirement.`, { node: test, property: "environments", index });
        }
      }
    });
  }
};

// src/requirements/tests-lang-module.ts
var TestsLangModule = {
  validation: {
    TestsLangValidator: () => new TestsLangValidator()
  }
};

// src/server/statemachine-module.ts
import { inject as inject3, createDefaultModule as createDefaultModule3, createDefaultSharedModule as createDefaultSharedModule3 } from "langium";

// src/server/statemachine-validator.ts
import { MultiMap as MultiMap3 } from "langium";
var StatemachineValidator = class {
  /**
   * Checks if the state name starts with a capital letter.
   * @param state the state to check
   * @param accept the acceptor to report errors
   */
  checkStateNameStartsWithCapital(state, accept) {
    if (state.name) {
      const firstChar = state.name.substring(0, 1);
      if (firstChar.toUpperCase() !== firstChar) {
        accept("warning", "State name should start with a capital letter.", { node: state, property: "name" });
      }
    }
  }
  /**
   * Checks if there are duplicate state and event names.
   * @param statemachine the statemachine to check
   * @param accept the acceptor to report errors
   */
  checkUniqueStatesAndEvents(statemachine, accept) {
    const names = new MultiMap3();
    const allSymbols = [...statemachine.states, ...statemachine.events];
    for (const symbol of allSymbols) {
      names.add(symbol.name, symbol);
    }
    for (const [name, symbols] of names.entriesGroupedByKey()) {
      if (symbols.length > 1) {
        for (const symbol of symbols) {
          accept("error", `Duplicate identifier name: ${name}`, { node: symbol, property: "name" });
        }
      }
    }
  }
};

// src/server/statemachine-module.ts
var StatemachineModule = {
  validation: {
    StatemachineValidator: () => new StatemachineValidator()
  }
};

// src/domain-dsl-module.ts
function createDomainDslServices(context) {
  const shared = inject4(
    createDefaultSharedModule4(context),
    DomainGeneratedSharedModule
  );
  const arithmetics = inject4(
    createDefaultModule4({ shared }),
    ArithmeticsGeneratedModule,
    ArithmeticsModule
  );
  const domainModel = inject4(
    createDefaultModule4({ shared }),
    DomainModelGeneratedModule,
    DomainModelModule
  );
  const requirements = inject4(
    createDefaultModule4({ shared }),
    RequirementsGeneratedModule,
    RequirementsLangModule
  );
  const tests = inject4(
    createDefaultModule4({ shared }),
    TestsGeneratedModule,
    TestsLangModule
  );
  const statemachine = inject4(
    createDefaultModule4({ shared }),
    StatemachineModelGeneratedModule,
    StatemachineModule
  );
  shared.ServiceRegistry.register(arithmetics);
  shared.ServiceRegistry.register(domainModel);
  shared.ServiceRegistry.register(requirements);
  shared.ServiceRegistry.register(tests);
  shared.ServiceRegistry.register(statemachine);
  registerRequirementsValidationChecks(requirements);
  registerTestsValidationChecks(tests);
  return {
    shared,
    arithmetics,
    domainModel,
    requirements,
    tests,
    statemachine
  };
}

// src/cli/actions.ts
import { NodeFileSystem } from "langium/node";

// src/cli/generator.ts
import { expandToNode, joinToNode, toString } from "langium/generate";
import * as fs3 from "node:fs";
import * as path3 from "node:path";
function generateSummaryFileHTMLContent(model, testModels) {
  return toString(
    expandToNode`
            <html>
            <body>
            <h1>Requirement coverage (demo generator)</h1>
            <div>Source: ${model.$document?.uri.fsPath}</div>
            <table border="1">
            <TR><TH>Requirement ID</TH><TH>Testcase ID</TH></TR>
            ${joinToNode(
      model.requirements,
      (requirement) => expandToNode`
                    <TR><TD>${requirement.name}</TD><TD>
                    ${joinToNode(
        testModels.flatMap((testModel) => testModel.tests.map((test) => ({ testModel, test }))).filter(({ test }) => test.requirements.map((r) => r.ref).includes(requirement)),
        ({ testModel, test }) => `<div>${test.name} (from ${testModel.$document?.uri?.fsPath})<div>`,
        { appendNewLineIfNotEmpty: true }
      )}
                    </TD></TR>
                `,
      { appendNewLineIfNotEmpty: true }
    )}
            </table>
            </body>
            </html>
        `.appendNewLine()
  );
}
function generateSummary(model, testModels, filePath, destination) {
  const data = extractDestinationAndName(filePath, destination);
  const generatedFilePath = `${path3.join(data.destination, data.name)}.html`;
  if (!fs3.existsSync(data.destination)) {
    fs3.mkdirSync(data.destination, { recursive: true });
  }
  fs3.writeFileSync(generatedFilePath, generateSummaryFileHTMLContent(model, testModels));
  return generatedFilePath;
}

// src/cli/interpreter.ts
function interpretEvaluations(module) {
  const ctx = {
    module,
    context: /* @__PURE__ */ new Map(),
    result: /* @__PURE__ */ new Map()
  };
  return evaluate(ctx);
}
function evaluate(ctx) {
  ctx.module.statements.forEach((stmt) => evalStatement(ctx, stmt));
  return ctx.result;
}
function evalStatement(ctx, stmt) {
  if (isDefinition(stmt)) {
    evalDefinition(ctx, stmt);
  } else if (isEvaluation(stmt)) {
    evalEvaluation(ctx, stmt);
  } else {
    console.error("Impossible type of Statement.");
  }
}
function evalDefinition(ctx, def) {
  ctx.context.set(def.name, def.args.length > 0 ? def : evalExpression2(def.expr, ctx));
}
function evalEvaluation(ctx, evaluation) {
  ctx.result.set(evaluation, evalExpression2(evaluation.expression, ctx));
}
function evalExpression2(expr, ctx) {
  if (ctx === void 0) {
    ctx = {
      module: expr.$document?.parseResult.value,
      context: /* @__PURE__ */ new Map(),
      result: /* @__PURE__ */ new Map()
    };
  }
  if (isBinaryExpression(expr)) {
    const left = evalExpression2(expr.left, ctx);
    const right = evalExpression2(expr.right, ctx);
    if (right === void 0) return left;
    return applyOp(expr.operator)(left, right);
  }
  if (isNumberLiteral(expr)) {
    return +expr.value;
  }
  if (isFunctionCall(expr)) {
    const valueOrDef = ctx.context.get(expr.func.ref.name);
    if (!isDefinition(valueOrDef)) {
      return valueOrDef;
    }
    if (valueOrDef.args.length !== expr.args.length) {
      throw new Error("Function definition and its call have different number of arguments: " + valueOrDef.name);
    }
    const localContext = new Map(ctx.context);
    for (let i = 0; i < valueOrDef.args.length; i += 1) {
      localContext.set(valueOrDef.args[i].name, evalExpression2(expr.args[i], ctx));
    }
    return evalExpression2(valueOrDef.expr, { module: ctx.module, context: localContext, result: ctx.result });
  }
  throw new Error("Impossible type of Expression.");
}

// src/cli/actions.ts
async function evalAction(fileName) {
  const services = createDomainDslServices(NodeFileSystem).arithmetics;
  const model = await extractDocument(fileName, services);
  const evaluations = interpretEvaluations(model);
  for (const [value, astNode] of evaluations) {
    const cstNode = astNode.$cstNode;
    if (cstNode) {
      const line = cstNode.range.start.line + 1;
      const column = cstNode.range.start.character + 1;
      console.log(`${fileName}:${line}:${column} - ${chalk2.green(cstNode.text)} -> ${chalk2.yellow(value)}`);
    }
  }
}
async function generateAction(fileName, opts) {
  const services = createDomainDslServices(NodeFileSystem);
  if (fileName.endsWith(".req")) {
    const model = await extractDocument(fileName, services.requirements);
    const testModels = await Promise.all(
      services.shared.workspace.TextDocuments.all.filter((doc) => doc.uri.fsPath.endsWith(".tst")).map((doc) => extractDocument(doc.uri.fsPath, services.tests))
    );
    const generatedFilePath = generateSummary(model, testModels, fileName, opts.destination);
    console.log(chalk2.green(`HTML summary generated successfully: ${generatedFilePath}`));
  } else {
    console.log(chalk2.red(`Cannot generate code for ${fileName}: unknown file extension.`));
  }
}

// src/cli/cli.ts
var __dirname = url.fileURLToPath(new URL(".", import.meta.url));
var program = new Command3();
(async () => {
  const packagePath = path.resolve(__dirname, "..", "..", "package.json");
  const packageContent = await fs.readFile(packagePath, "utf-8");
  program.version(JSON.parse(packageContent).version);
})();
program.command("eval").argument("<file>", `possible file extensions: ${ArithmeticsLanguageMetaData.fileExtensions.join(", ")}`).description("calculates Evaluations in the source file").action(evalAction);
program.command("generate").argument("<file>", "source file").option("-d, --destination <dir>", "destination directory of generating").description("generates code from the source file").action(generateAction);
program.parse(process.argv);
//# sourceMappingURL=cli.js.map
