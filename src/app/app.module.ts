import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { ContentComponent }  from './content/content.component';
import { SidebarChild }  from './sidebar-child/sidebar-child';
import { MarkdownModule } from 'angular2-markdown';

import { SelectModule } from 'ng2-select';
import { TabsModule, PaginationModule, TooltipModule } from 'ng2-bootstrap';
import { BadgeComponent } from 'gos-badge';
import { LabelComponent } from 'gos-label';
import { PulldownMenuComponent } from 'gos-pulldown-menu';
import { CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective } from 'gos-directive';
import { RadioButtonComponent }  from 'gos-radiobutton';

import { ButtonComponent } from 'gos-button';
import { TextareaComponent } from 'gos-textarea';
import { TextboxComponent } from 'gos-textbox';

import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from 'gos-chart';
import { CheckboxComponent } from 'gos-checkbox';

import { CalendarModule } from 'primeng/primeng';
import { DateTimePickerComponent } from 'gos-datetimepicker';
import { ImageModal } from 'angular2-image-popup';
import { ImageGalleryComponent } from 'gos-image-gallery';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal-bootstrap';

import { UploadComponent } from 'gos-upload';

import { SidebarModule } from 'ng-sidebar';
import { SidebarComponent } from 'gos-sidebar';

import { Ng2TableModule } from 'ng2-table';
import { TableComponent } from 'gos-table';

import { TextEditorComponent } from 'gos-texteditor';
import { TreeView, TreeComponent } from 'gos-tree';

import { Ng2AutoCompleteModule } from 'ng2-auto-complete';
import { ProgressbarComponent } from 'gos-progressbar';

import { BadgeDocument } from 'doc-badge';
import { ButtonDocument } from 'doc-button';
import { ChartDocument } from 'doc-chart';
import { CheckboxDocument } from 'doc-checkbox';
import { DateTimePickerDocument } from 'doc-datetimepicker';
import { FontDocument } from 'doc-font';
import { PulldownMenuDocument } from 'doc-pulldown-menu';
import { ImageGalleryDocument } from 'doc-image-gallery';
import { PopupDocument } from 'doc-popup';
import { ProgressbarDocument } from 'doc-progressbar';
import { UploadDocument } from 'doc-upload';
import { RadioButtonDocument } from 'doc-radiobutton';
import { SelectboxDocument } from 'doc-selectbox';
import { SidebarDocument } from 'doc-sidebar';
import { TabDocument } from 'doc-tab';
import { TableDocument } from 'doc-table';
import { TooltipDocument } from 'doc-tooltip';
import { TextEditorDocument } from 'doc-texteditor';
import { TreeDocument } from 'doc-tree';
import { TextareaDocument } from 'doc-textarea';
import { TextboxDocument } from 'doc-textbox';
import { AutoCompleteDocument } from 'doc-auto-complete';
import { GettingStartComponent } from 'doc-getting-start';

const appRoutes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'font', component: FontDocument},
  { path: 'gettingstart', component: GettingStartComponent},
  { path: 'autocomplete', component: AutoCompleteDocument},
  { path: 'badge', component: BadgeDocument},
  { path: 'button', component: ButtonDocument},
  { path: 'chart', component: ChartDocument},
  { path: 'checkbox', component: CheckboxDocument},
  { path: 'radiobutton', component: RadioButtonDocument},
  { path: 'datetimepicker', component: DateTimePickerDocument},
  { path: 'popup', component: PopupDocument},
  { path: 'progressbar', component: ProgressbarDocument},
  { path: 'pulldown', component: PulldownMenuDocument},
  { path: 'imagegallery', component: ImageGalleryDocument},
  { path: 'selectbox', component: SelectboxDocument},
  { path: 'sidebar', component: SidebarDocument},
  { path: 'tab', component: TabDocument},
  { path: 'table', component: TableDocument},
  { path: 'textarea', component: TextareaDocument},
  { path: 'textbox', component: TextboxDocument},
  { path: 'texteditor', component: TextEditorDocument},
  { path: 'tooltip', component: TooltipDocument},
  { path: 'tree', component: TreeDocument},
  { path: 'upload', component: UploadDocument},
];

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    MarkdownModule, 
    ChartsModule,
    CalendarModule,
    ModalModule.forRoot(), 
    BootstrapModalModule,
    SelectModule,
    SidebarModule,
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    Ng2TableModule,
    TooltipModule.forRoot(),
    Ng2AutoCompleteModule,
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarChild,
    BadgeComponent,
    PulldownMenuComponent,

    CustomDisabledDirective, CustomReadonlyDirective, CustomMaxlengthDirective, CustomCheckDirective,
    LabelComponent,
    ButtonComponent, 
    TextareaComponent,
    TextboxComponent,
    RadioButtonComponent,

    ChartComponent,
    CheckboxComponent,
    DateTimePickerComponent,
    ImageModal,
    ImageGalleryComponent,
    UploadComponent,
    SidebarComponent,
    TableComponent,
    TextEditorComponent,

    TreeView,
    TreeComponent,
    ProgressbarComponent,

    BadgeDocument,
    ButtonDocument,
    ChartDocument,
    CheckboxDocument,
    DateTimePickerDocument,
    FontDocument,
    PopupDocument,
    ProgressbarDocument,
    PulldownMenuDocument,
    ImageGalleryDocument,
    UploadDocument,
    RadioButtonDocument,
    SelectboxDocument,
    SidebarDocument,
    TabDocument,
    TableDocument,
    TooltipDocument,
    TextEditorDocument,
    TreeDocument,
    TextareaDocument,
    TextboxDocument,
    AutoCompleteDocument,
    GettingStartComponent,
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
