import { Component } from '@angular/core';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';

@Component({
    selector: 'uxd-components-sorting',
    templateUrl: './sorting-ng1.component.html'
})
@DocumentationSectionComponent('ComponentsSortingNg1Component')
export class ComponentsSortingNg1Component extends BaseDocumentationSection {
    
    private sortingCode = this.snippets.compiled.layoutHtml;
    private htmlCode = this.snippets.compiled.sampleHtml;
    private jsCode = this.snippets.compiled.sampleJs;
    
    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }

}