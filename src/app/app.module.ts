import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './header/header.component';
import { ContentComponent }  from './content/content.component';

import { SidebarChild }  from './sidebar-child/sidebar-child';

import { GoModule }  from 'go-module';
import { LibModule }  from 'lib-module';

import { AccordionDocument } from './doc/accordion.document';
import { AutoCompleteDocument } from './doc/auto-complete.document';
import { BadgeDocument } from './doc/badge.document';
import { ButtonDocument } from './doc/button.document';
import { ChartDocument } from './doc/chart.document';
import { CheckboxDocument } from './doc/checkbox.document';
import { DataGridDocument } from './doc/datagrid.document';
import { DataTableDocument } from './doc/datatable.document';
import { DateTimePickerDocument } from './doc/datetimepicker.document';
import { DialogDocument } from './doc/dialog.document';
import { GalleriaDocument } from './doc/galleria.document';
import { FontDocument } from './doc/font.document';
import { ImageGalleryDocument } from './doc/image-gallery.document';
import { PanelDocument } from './doc/panel.document';
import { ProgressbarDocument } from './doc/progressbar.document';
import { PulldownMenuDocument } from './doc/pulldown-menu.document';
import { RadioButtonDocument } from './doc/radiobutton.document';
import { SelectboxDocument } from './doc/selectbox.document';
import { SidebarDocument } from './doc/sidebar.document';
import { StepDocument } from './doc/step.document';
import { TabDocument } from './doc/tab.document';
import { TableDocument } from './doc/table.document';
import { TooltipDocument } from './doc/tooltip.document';
import { TextEditorDocument } from './doc/texteditor.document';
import { TextareaDocument } from './doc/textarea.document';
import { TextboxDocument } from './doc/textbox.document';
import { TreeDocument } from './doc/tree.document';
import { UploadDocument } from './doc/upload.document';
import { GettingStartComponent } from './doc/page-getting-start.component';

const appRoutes: Routes = [
  { path: '', component: ContentComponent},
  { path: 'font', component: FontDocument},
  { path: 'gettingstart', component: GettingStartComponent},
  { path: 'accordion', component: AccordionDocument },
  { path: 'autocomplete', component: AutoCompleteDocument},
  { path: 'badge', component: BadgeDocument},
  { path: 'button', component: ButtonDocument},
  { path: 'chart', component: ChartDocument},
  { path: 'checkbox', component: CheckboxDocument},
  { path: 'datagrid', component: DataGridDocument },
  { path: 'datatable', component: DataTableDocument },
  { path: 'datetimepicker', component: DateTimePickerDocument},
  { path: 'dialog', component: DialogDocument },
  { path: 'galleria', component: GalleriaDocument },
  { path: 'imagegallery', component: ImageGalleryDocument},
  { path: 'panel', component: PanelDocument },
  { path: 'progressbar', component: ProgressbarDocument},
  { path: 'pulldownmenu', component: PulldownMenuDocument},
  { path: 'radiobutton', component: RadioButtonDocument},
  { path: 'selectbox', component: SelectboxDocument},
  { path: 'sidebar', component: SidebarDocument},
  { path: 'steps', component: StepDocument },
  { path: 'tabview', component: TabDocument},
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
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    BrowserAnimationsModule,
    GoModule.forRoot(),
    LibModule.forRoot(),
  ],
  declarations: [ 
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarChild,

    AccordionDocument,
    AutoCompleteDocument,
    BadgeDocument,
    ButtonDocument,
    ChartDocument,
    CheckboxDocument,
    DataGridDocument,
    DataTableDocument,
    DateTimePickerDocument,
    DialogDocument,
    GalleriaDocument,
    FontDocument,
    ImageGalleryDocument,
    PanelDocument,
    ProgressbarDocument,
    PulldownMenuDocument,
    UploadDocument,
    RadioButtonDocument,
    SelectboxDocument,
    SidebarDocument,
    StepDocument,
    TabDocument,
    TableDocument,
    TooltipDocument,
    TextEditorDocument,
    TreeDocument,
    TextareaDocument,
    TextboxDocument,
    GettingStartComponent,
  ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
