import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WizardModule } from '../wizard/index';
import { MarqueeWizardComponent } from './marquee-wizard.component';
import { MarqueeWizardStepComponent } from './marquee-wizard-step.component';
import { TooltipModule } from '../tooltip/index';

@NgModule({
    imports: [
        CommonModule,
        WizardModule,
        TooltipModule
    ],
    exports: [
        MarqueeWizardComponent,
        MarqueeWizardStepComponent
    ],
    declarations: [
        MarqueeWizardComponent,
        MarqueeWizardStepComponent
    ]
})
export class MarqueeWizardModule { }
