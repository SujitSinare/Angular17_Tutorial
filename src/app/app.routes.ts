import { Routes } from '@angular/router';
import { TemplateFormValidationComponent } from './topics/template-form-validation/template-form-validation.component';
import { ReactiveFormValidationComponent } from './topics/reactive-form-validation/reactive-form-validation.component';
import { ControlFlowComponent } from './topics/control-flow/control-flow.component';
import { PipesComponent } from './topics/pipes/pipes.component';
import { SignalComponent } from './topics/signal/signal.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'templateFormValidation',
        pathMatch: 'full'
    },
    {
        path: 'templateFormValidation',
        component: TemplateFormValidationComponent
    },
    {
        path: 'reactiveFormValidation',
        component: ReactiveFormValidationComponent
    },
    {
        path: 'control-flow',
        component: ControlFlowComponent
    },
    {
        path: 'pipes',
        component: PipesComponent
    },
    {
        path: 'signal',
        component: SignalComponent
    }
];
