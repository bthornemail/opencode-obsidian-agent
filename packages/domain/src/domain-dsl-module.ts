/******************************************************************************
 * Copyright 2021 TypeFox GmbH
 * This program and the accompanying materials are made available under the
 * terms of the MIT License, which is available in the project root.
 ******************************************************************************/

import type { DefaultSharedModuleContext, LangiumSharedServices, LangiumServices, LanguageMetaData, Module } from 'langium';
import { createDefaultModule, createDefaultSharedModule, inject } from 'langium';
import { ArithmeticsGeneratedModule, DomainGeneratedSharedModule, DomainModelGeneratedModule, RequirementsGeneratedModule, TestsGeneratedModule, StatemachineModelGeneratedModule } from './generated/module.js';

import { ArithmeticsModule } from './axioms/arithmetics-module.js';
import { DomainModelModule } from './model/domain-model-module.js';
import { RequirementsLangModule } from './requirements/requirements-lang-module.js';
import { registerRequirementsValidationChecks } from './requirements/requirements-lang-validator.js';
import { TestsLangModule } from './requirements/tests-lang-module.js';
import { registerTestsValidationChecks } from './requirements/tests-lang-validator.js';
import { StatemachineModule } from './server/statemachine-module.js';

export type DomainDslServices = {
    shared: LangiumSharedServices;
    arithmetics: LangiumServices;
    domainModel: LangiumServices;
    requirements: LangiumServices;
    tests: LangiumServices;
    statemachine: LangiumServices;
};

export const DomainDslModule: Module<DomainDslServices, { shared: LangiumSharedServices }> = {
    arithmetics: ArithmeticsModule,
    domainModel: DomainModelModule,
    requirements: RequirementsLangModule,
    tests: TestsLangModule,
    statemachine: StatemachineModule,
};

export function createDomainDslServices(context: DefaultSharedModuleContext): DomainDslServices {
    const shared = inject(
        createDefaultSharedModule(context),
        DomainGeneratedSharedModule
    );
    const arithmetics = inject(
        createDefaultModule({ shared }),
        ArithmeticsGeneratedModule,
        ArithmeticsModule
    );
    const domainModel = inject(
        createDefaultModule({ shared }),
        DomainModelGeneratedModule,
        DomainModelModule
    );
    const requirements = inject(
        createDefaultModule({ shared }),
        RequirementsGeneratedModule,
        RequirementsLangModule
    );
    const tests = inject(
        createDefaultModule({ shared }),
        TestsGeneratedModule,
        TestsLangModule
    );
    const statemachine = inject(
        createDefaultModule({ shared }),
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
        statemachine,
    };
}
