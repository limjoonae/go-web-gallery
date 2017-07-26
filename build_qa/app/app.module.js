"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var header_component_1 = require("./header/header.component");
var content_component_1 = require("./content/content.component");
var sidebar_child_1 = require("./sidebar-child/sidebar-child");
var go_module_1 = require("go-module");
var lib_module_1 = require("lib-module");
var accordion_document_1 = require("./doc/accordion.document");
var auto_complete_document_1 = require("./doc/auto-complete.document");
var badge_document_1 = require("./doc/badge.document");
var button_document_1 = require("./doc/button.document");
var chart_document_1 = require("./doc/chart.document");
var checkbox_document_1 = require("./doc/checkbox.document");
var datagrid_document_1 = require("./doc/datagrid.document");
var datatable_document_1 = require("./doc/datatable.document");
var datetimepicker_document_1 = require("./doc/datetimepicker.document");
var dialog_document_1 = require("./doc/dialog.document");
var galleria_document_1 = require("./doc/galleria.document");
var font_document_1 = require("./doc/font.document");
var image_gallery_document_1 = require("./doc/image-gallery.document");
var panel_document_1 = require("./doc/panel.document");
var progressbar_document_1 = require("./doc/progressbar.document");
var pulldown_menu_document_1 = require("./doc/pulldown-menu.document");
var radiobutton_document_1 = require("./doc/radiobutton.document");
var selectbox_document_1 = require("./doc/selectbox.document");
var sidebar_document_1 = require("./doc/sidebar.document");
var step_document_1 = require("./doc/step.document");
var tab_document_1 = require("./doc/tab.document");
var table_document_1 = require("./doc/table.document");
var tooltip_document_1 = require("./doc/tooltip.document");
var texteditor_document_1 = require("./doc/texteditor.document");
var textarea_document_1 = require("./doc/textarea.document");
var textbox_document_1 = require("./doc/textbox.document");
var tree_document_1 = require("./doc/tree.document");
var upload_document_1 = require("./doc/upload.document");
var getting_start_component_1 = require("./getting-start/getting-start.component");
var appRoutes = [
    { path: '', component: content_component_1.ContentComponent },
    { path: 'font', component: font_document_1.FontDocument },
    { path: 'gettingstart', component: getting_start_component_1.GettingStartComponent },
    { path: 'accordion', component: accordion_document_1.AccordionDocument },
    { path: 'autocomplete', component: auto_complete_document_1.AutoCompleteDocument },
    { path: 'badge', component: badge_document_1.BadgeDocument },
    { path: 'button', component: button_document_1.ButtonDocument },
    { path: 'chart', component: chart_document_1.ChartDocument },
    { path: 'checkbox', component: checkbox_document_1.CheckboxDocument },
    { path: 'datagrid', component: datagrid_document_1.DataGridDocument },
    { path: 'datatable', component: datatable_document_1.DataTableDocument },
    { path: 'datetimepicker', component: datetimepicker_document_1.DateTimePickerDocument },
    { path: 'dialog', component: dialog_document_1.DialogDocument },
    { path: 'galleria', component: galleria_document_1.GalleriaDocument },
    { path: 'imagegallery', component: image_gallery_document_1.ImageGalleryDocument },
    { path: 'panel', component: panel_document_1.PanelDocument },
    { path: 'progressbar', component: progressbar_document_1.ProgressbarDocument },
    { path: 'pulldownmenu', component: pulldown_menu_document_1.PulldownMenuDocument },
    { path: 'radiobutton', component: radiobutton_document_1.RadioButtonDocument },
    { path: 'selectbox', component: selectbox_document_1.SelectboxDocument },
    { path: 'sidebar', component: sidebar_document_1.SidebarDocument },
    { path: 'steps', component: step_document_1.StepDocument },
    { path: 'tabview', component: tab_document_1.TabDocument },
    { path: 'table', component: table_document_1.TableDocument },
    { path: 'textarea', component: textarea_document_1.TextareaDocument },
    { path: 'textbox', component: textbox_document_1.TextboxDocument },
    { path: 'texteditor', component: texteditor_document_1.TextEditorDocument },
    { path: 'tooltip', component: tooltip_document_1.TooltipDocument },
    { path: 'tree', component: tree_document_1.TreeDocument },
    { path: 'upload', component: upload_document_1.UploadDocument },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(appRoutes, { useHash: true }),
            animations_1.BrowserAnimationsModule,
            go_module_1.GoModule.forRoot(),
            lib_module_1.LibModule.forRoot(),
        ],
        declarations: [
            app_component_1.AppComponent,
            header_component_1.HeaderComponent,
            content_component_1.ContentComponent,
            sidebar_child_1.SidebarChild,
            accordion_document_1.AccordionDocument,
            auto_complete_document_1.AutoCompleteDocument,
            badge_document_1.BadgeDocument,
            button_document_1.ButtonDocument,
            chart_document_1.ChartDocument,
            checkbox_document_1.CheckboxDocument,
            datagrid_document_1.DataGridDocument,
            datatable_document_1.DataTableDocument,
            datetimepicker_document_1.DateTimePickerDocument,
            dialog_document_1.DialogDocument,
            galleria_document_1.GalleriaDocument,
            font_document_1.FontDocument,
            image_gallery_document_1.ImageGalleryDocument,
            panel_document_1.PanelDocument,
            progressbar_document_1.ProgressbarDocument,
            pulldown_menu_document_1.PulldownMenuDocument,
            upload_document_1.UploadDocument,
            radiobutton_document_1.RadioButtonDocument,
            selectbox_document_1.SelectboxDocument,
            sidebar_document_1.SidebarDocument,
            step_document_1.StepDocument,
            tab_document_1.TabDocument,
            table_document_1.TableDocument,
            tooltip_document_1.TooltipDocument,
            texteditor_document_1.TextEditorDocument,
            tree_document_1.TreeDocument,
            textarea_document_1.TextareaDocument,
            textbox_document_1.TextboxDocument,
            getting_start_component_1.GettingStartComponent,
        ],
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map