import { Component } from '@angular/core';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';

@Component({
    selector: 'uxd-components-list-hover-actions',
    templateUrl: './list-hover-actions-ng1.component.html'
})
@DocumentationSectionComponent('ComponentsListHoverActionsNg1Component')
export class ComponentsListHoverActionsNg1Component extends BaseDocumentationSection {
    
    private htmlCode = this.snippets.compiled.sampleHtml;
    
    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }
}