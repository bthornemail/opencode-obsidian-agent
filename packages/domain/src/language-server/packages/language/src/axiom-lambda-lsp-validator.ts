import type { ValidationChecks } from 'langium';
import type { AxiomLambdaLspAstType } from './generated/ast.js';
import type { AxiomLambdaLspServices } from './axiom-lambda-lsp-module.js';

/**
 * Register custom validation checks.
 */
export function registerValidationChecks(services: AxiomLambdaLspServices) {
    const registry = services.validation.ValidationRegistry;
    const validator = services.validation.AxiomLambdaLspValidator;
    const checks: ValidationChecks<AxiomLambdaLspAstType> = {
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
export class AxiomLambdaLspValidator {

    // TODO: Add logic here for validation checks of properties
    // See doc : https://langium.org/docs/learn/workflow/create_validations/
    /*
    checkElement(element: Element, accept: ValidationAcceptor): void {
        // Always accepts
    }
    */
}
