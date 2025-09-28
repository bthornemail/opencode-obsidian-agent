import type { ValidationChecks } from 'langium';
import type { AxiomLambdaSyntaxTreeAstType } from './generated/ast.js';
import type { AxiomLambdaSyntaxTreeServices } from './axiom-lambda-syntax-tree-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: AxiomLambdaSyntaxTreeServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.AxiomLambdaSyntaxTreeValidator;
    const checks: ValidationChecks<AxiomLambdaSyntaxTreeAstType> = {
        // TODO: Declare validators for your properties
        // See doc : https://langium.org/docs/learn/workflow/create_validations/
        /*
        Element: validator.checkElement
        */
    };
    registry.register(checks, validator);
}

/**
 * Implementation of custom validations.
 */
export class AxiomLambdaSyntaxTreeValidator {

    // TODO: Add logic here for validation checks of properties
    // See doc : https://langium.org/docs/learn/workflow/create_validations/
    /*
    checkElement(element: Element, accept: ValidationAcceptor): void {
        // Always accepts
    }
    */
}
