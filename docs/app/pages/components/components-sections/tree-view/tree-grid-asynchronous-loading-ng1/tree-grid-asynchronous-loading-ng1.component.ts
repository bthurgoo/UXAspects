import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeGridColumn, TreeGridData, TreeGridOptions } from '../../../../../../../src';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { ICodePen } from '../../../../../interfaces/ICodePen';
import { ICodePenProvider } from '../../../../../interfaces/ICodePenProvider';

@Component({
    selector: 'uxd-components-tree-grid-asynchronous-loading',
    templateUrl: './tree-grid-asynchronous-loading-ng1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@DocumentationSectionComponent(
    'ComponentsTreeGridAsynchronousLoadingNg1Component'
)
export class ComponentsTreeGridAsynchronousLoadingNg1Component extends BaseDocumentationSection implements ICodePenProvider {

    codepen: ICodePen = {
        html: this.snippets.raw.sampleHtml,
        htmlAttributes: {
            'ng-controller': 'TreeGridAsyncDemoCtrl as vm'
        },
        htmlTemplates: [
            {
                id: 'template.html',
                content: this.snippets.raw.templateHtml
            }
        ],
        js: [this.snippets.raw.sampleJs]
    };

    loadDataCallback = this.loadData.bind(this);

    columns: TreeGridColumn[] = [
        {
            name: 'NAME',
            value: 'document',
            width: '40%'
        },
        {
            name: 'AUTHOR',
            value: 'name',
            width: '20%'
        },
        {
            name: 'DATE',
            value: 'dateString',
            width: '20%'
        },
        {
            name: 'PRIORITY',
            template: require('!file-loader?name=[path][name].[ext]!./snippets/template.html'),
            width: '20%',
            headerClass: 'text-center',
            cellClass: 'text-center'
        }
    ];

    topLevelFolder: DemoItem[] = [
        {
            type: 'folder',
            dataPage: 0,
            document: 'Folder 1',
            name: '',
            dateString: ''
        },
        {
            type: 'folder',
            dataPage: 1,
            document: 'Folder 2',
            name: '',
            dateString: ''
        },
        {
            type: 'folder',
            dataPage: 2,
            document: 'Folder 3',
            name: '',
            dateString: ''
        }
    ];

    sourceData: DemoItem[][] = [
        [
            {
                id: 0,
                name: 'Jayden Hampton',
                dateString: 'Today',
                document: 'Document 1.pdf'
            },
            {
                id: 2,
                name: 'Lura Bell',
                dateString: '20 Jan 2017',
                document: 'Document 3.doc'
            },
            {
                id: 3,
                name: 'Jackson Zimmerman',
                dateString: '17 Feb 2016',
                document: 'Document 4.pdf'
            },
            {
                id: 4,
                name: 'Brandon Kelley',
                dateString: '9 Feb 2017',
                document: 'Document 5.xls'
            },
            {
                id: 5,
                name: 'Jackson Zimmerman',
                dateString: 'Today',
                document: 'Document 6.doc'
            },
            {
                id: 6,
                name: 'Walter Cortez',
                dateString: 'Today',
                document: 'Document 7.html'
            },
            {
                id: 7,
                name: 'Herbert Padilla',
                dateString: '20 Jan 2017',
                document: 'Document 8.html'
            },
            {
                id: 8,
                name: 'Maud Grant',
                dateString: '17 Feb 2016',
                document: 'Document 9.ppt'
            },
            {
                id: 9,
                name: 'Emma Lynch',
                dateString: '9 Feb 2017',
                document: 'Document 10.pdf'
            }
        ],
        [
            {
                id: 10,
                name: 'Mike Marsh',
                dateString: 'Today',
                document: 'Document 11.pdf'
            },
            {
                id: 11,
                name: 'Herbert Padilla',
                dateString: '10 Feb 2017',
                document: 'Document 12.pdf'
            },
            {
                id: 12,
                name: 'Eunice Harvey',
                dateString: 'Today',
                document: 'Document 13.pdf'
            },
            {
                id: 13,
                name: 'Eunice Tyler',
                dateString: '17 Feb 2016',
                document: 'Document 14.doc'
            },
            {
                id: 14,
                name: 'Cordelia Moore',
                dateString: '9 Feb 2017',
                document: 'Document 15.pdf'
            },
            {
                id: 15,
                name: 'Jeanette Fowler',
                dateString: 'Today',
                document: 'Document 16.ppt'
            },
            {
                id: 16,
                name: 'Lura Bell',
                dateString: '10 Feb 2017',
                document: 'Document 17.xls'
            },
            {
                id: 17,
                name: 'Landon Green',
                dateString: '20 Jan 2017',
                document: 'Document 18.ppt'
            },
            {
                id: 18,
                name: 'Eunice Harvey',
                dateString: 'Today',
                document: 'Document 19.pdf'
            },
            {
                id: 19,
                name: 'Alex Martinez',
                dateString: '9 Feb 2017',
                document: 'Document 20.xls'
            }
        ],
        [
            {
                id: 20,
                name: 'Herbert Padilla',
                dateString: 'Today',
                document: 'Document 21.xls'
            },
            {
                id: 21,
                name: 'Alex Martinez',
                dateString: '10 Feb 2017',
                document: 'Document 22.xls'
            },
            {
                id: 22,
                name: 'Landon Green',
                dateString: '20 Jan 2017',
                document: 'Document 23.xls'
            },
            {
                id: 23,
                name: 'Landon Green',
                dateString: '17 Feb 2016',
                document: 'Document 24.doc'
            },
            {
                id: 24,
                name: 'Agnes Bates',
                dateString: 'Today',
                document: 'Document 25.pdf'
            },
            {
                id: 25,
                name: 'Herbert Padilla',
                dateString: 'Today',
                document: 'Document 26.pdf'
            },
            {
                id: 26,
                name: 'Jeanette Fowler',
                dateString: '10 Feb 2017',
                document: 'Document 27.xls'
            },
            {
                id: 27,
                name: 'Cordelia Moore',
                dateString: '20 Jan 2017',
                document: 'Document 28.xls'
            },
            {
                id: 28,
                name: 'Agnes Bates',
                dateString: '17 Feb 2016',
                document: 'Document 29.xls'
            },
            {
                id: 29,
                name: 'Maud Grant',
                dateString: '9 Feb 2017',
                document: 'Document 30.doc'
            }
        ]
    ];

    selected: DemoItem = null;

    options: TreeGridOptions = {
        hasChildren: function (dataItem: any) {
            return dataItem.type === 'folder';
        }
    };

    treeData: TreeGridData[];

    highPriorityItems: any[] = [];

    inProgress = false;

    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }

    loadData(parent: any): Promise<DemoItem[]> {
        const topLevelFolder = this.topLevelFolder;
        const sourceData = this.sourceData;
        const promise = new Promise<DemoItem[]>((resolve, reject) => {
            if (!parent) {
                // Load top level items
                setTimeout(() => {
                    resolve(topLevelFolder);
                }, 1000);
            } else {
                // Load children of parent
                setTimeout(() => {
                    const children = sourceData[parent.dataPage];
                    resolve(children);
                }, 2000);
            }
        });

        return promise;
    }

    expandAllFolders() {
        var folders = this.findRows(this.treeData, 'type', 'folder');
        var promises = [];
        this.inProgress = true;
        // Call expand on each folder
        for (var i = 0; i < folders.length; i += 1) {
            var promise = folders[i].api.expand();
            promises.push(promise);
        }
        // Unset inProgress when all promises are complete
        Promise.all(promises).then(function () {
            this.inProgress = false;
        });
    }

    contractAllFolders() {
        var folders = this.findRows(this.treeData, 'type', 'folder');
        // Call contract on each folder
        for (var i = 0; i < folders.length; i += 1) {
            folders[i].api.contract();
        }
    }

    reloadAllFolders() {
        var folders = this.findRows(this.treeData, 'type', 'folder');
        var promises = [];
        this.inProgress = true;
        // Call reload on each folder
        for (var i = 0; i < folders.length; i += 1) {
            var promise = folders[i].api.reload();
            promises.push(promise);
        }
        // Unset inProgress when all promises are complete
        Promise.all(promises).then(function () {
            this.inProgress = false;
        });
    }

    private findRows(treeData: any, property: any, value: any): any {
        var results = [];
        for (var i = 0; i < treeData.length; i += 1) {
            if (treeData[i].dataItem[property] === value) {
                results.push(treeData[i]);
            }
            if (treeData[i].children.length > 0) {
                results = results.concat(this.findRows(treeData[i].children, property, value));
            }
        }
        return results;
    }
}

class DemoItem {
    id?: number;
    type?: string;
    dataPage?: number;
    name: string;
    dateString: string;
    document: string;
}
