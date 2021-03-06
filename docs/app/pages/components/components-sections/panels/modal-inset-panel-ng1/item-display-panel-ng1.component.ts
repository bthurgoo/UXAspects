import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';
import { ICodePenProvider } from '../../../../../interfaces/ICodePenProvider';
import { ICodePen } from '../../../../../interfaces/ICodePen';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';

@Component({
    selector: 'uxd-modal-inset-panel-ng1',
    templateUrl: './modal-inset-panel-ng1.component.html',
    styleUrls: ['./modal-inset-panel-ng1.component.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
@DocumentationSectionComponent('ComponentsModalInsetPanelNg1Component')
export class ComponentsModalInsetPanelNg1Component extends BaseDocumentationSection implements ICodePenProvider {
    codepen: ICodePen = {
        html: this.snippets.raw.layoutHtml,
        htmlAttributes: {
            'ng-controller': 'ModalInsetPanelDemoCtrl as vm'
        },
        htmlTemplates: [{
            id: 'modalLayout.html',
            content: this.snippets.raw.modalLayoutHtml
        }],
        css: [this.snippets.raw.stylesCss],
        js: [this.snippets.raw.controllerJs, this.snippets.raw.modalControllerJs]
    };

    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }
}
