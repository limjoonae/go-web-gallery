/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias

      //***tempolary path variable***
      'npm:': 'http://10.182.247.73/go-cdn-dev/node_modules/2.4.0/',
      'go:': 'http://10.182.247.73/go-cdn-dev/',
    },
    meta: {
       'tinymce': {
         format: 'global'
       },
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      global: './global.js',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'angular2-markdown':         	'npm:angular2-markdown',
      'marked': 'npm:marked/lib/marked.js',
      'prismjs': 'npm:prismjs',
      
      //***lib for go-component***
      'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.js',
      'numeral': 'npm:numeral/numeral.js',
      'go-badge': 'go:badge/1.0.0',
      'go-pulldown-menu': 'go:pulldown-menu/1.0.0',
      'go-service':  'go:service/1.0.0',
      'go-label':	'go:label/1.0.0',
      'go-directive': 'go:directive/1.0.0',

      'ng2-charts': 'npm:ng2-charts',
      'chart.js': 'npm:chart.js/dist/Chart.bundle.min.js',

      'primeng': 'npm:primeng',

      'go-chart': 'go:chart/1.0.0',
      'go-button': 'go:button/1.0.0',
      'go-textbox': 'go:textbox/1.0.0',
      'go-textarea': 'go:textarea/1.0.0',
      'go-checkbox': 'go:checkbox/1.0.0',

      'go-datetimepicker': 'go:datetimepicker/1.0.0',

      'go-upload': 'go:upload/1.0.0',

      'angular2-image-popup':'npm:angular2-image-popup/directives/angular2-image-popup/',
      'go-image-gallery': 'go:image-gallery/1.0.0',

      'angular2-modal':           'npm:angular2-modal/bundles/angular2-modal.umd.js',
      'angular2-modal-bootstrap': 'npm:angular2-modal/bundles/angular2-modal.bootstrap.umd.js',

      'go-progressbar': 'go:progressbar/1.0.0',

      'go-radiobutton': 'go:radiobutton/1.0.0',

      'ng-sidebar': 'npm:ng-sidebar',
      'go-sidebar': 'go:sidebar/1.0.0/',
      'moment': 'npm:moment',
      'ng2-bootstrap':'npm:ng2-bootstrap',
      'ng2-table': 'npm:ng2-table',
      'go-table': 'go:table/1.0.0/',

      'tinymce': 'npm:tinymce',
      'go-texteditor': 'go:texteditor/1.0.0/',

      'go-tree': 'go:tree/1.0.0',

      'ng2-auto-complete':'npm:ng2-auto-complete/dist/ng2-auto-complete.umd.js',

      //*** document ***/
      'doc-badge': 'go:badge/1.0.0/doc',
      'doc-pulldown-menu': 'go:pulldown-menu/1.0.0/doc',
      'doc-button': 'go:button/1.0.0/doc',
      'doc-font': 'go:fonts/1.0.0/doc',
      'doc-textbox': 'go:textbox/1.0.0/doc',
      'doc-textarea': 'go:textarea/1.0.0/doc',
      'doc-chart': 'go:chart/1.0.0/doc',
      'doc-checkbox': 'go:checkbox/1.0.0/doc',
      'doc-datetimepicker': 'go:datetimepicker/1.0.0/doc',
      'doc-image-gallery': 'go:image-gallery/1.0.0/doc',
      'doc-popup': 'go:popup/1.0.0/doc',
      'doc-progressbar': 'go:progressbar/1.0.0/doc',
      'doc-upload': 'go:upload/1.0.0/doc',
      'doc-radiobutton': 'go:radiobutton/1.0.0/doc',
      'doc-selectbox': 'go:selectbox/1.0.0/doc',
      'doc-sidebar': 'go:sidebar/1.0.0/doc',
      'doc-tab': 'go:tab/1.0.0/doc',
      'doc-table': 'go:table/1.0.0/doc',
      'doc-tooltip': 'go:tooltip/1.0.0/doc',
      'doc-texteditor': 'go:texteditor/1.0.0/doc',
      'doc-tree': 'go:tree/1.0.0/doc',
      'doc-auto-complete': 'go:auto-complete/1.0.0/doc',
      'doc-getting-start': 'go:getting-start/1.0.0/doc',

    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'moment': {
         main: './moment.js',
         defaultExtension: 'js'
      },
      'ng2-bootstrap': {
           main: './bundles/ng2-bootstrap.umd.js',
           defaultExtension: 'js'
       },

      //** dependency */
      'angular2-markdown': {
          main: './index.js',
          defaultExtension: 'js'
      },
      'prismjs': {
          defaultExtension: 'js'
      },

      //***go-component main file***
      'go-label': {
        main: './label.js',
        defaultExtension: 'js'
      },
      'go-directive': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'go-service': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'go-badge': {
        main: './badge.js',
        defaultExtension: 'js'
      },
      'go-pulldown-menu': {
        main: './pulldown-menu.js',
        defaultExtension: 'js'
      },
      'go-button': {
        main: './button.js',
        defaultExtension: 'js'
      },
      'go-textbox': {
        main: './textbox.js',
        defaultExtension: 'js'
      },
      'go-textarea': {
        main: './textarea.js',
        defaultExtension: 'js'
      },

      'ng2-charts': {
          main: './ng2-charts.js',
          defaultExtension: 'js',
       },
       'go-chart': {
          main: './chart.js',
          defaultExtension: 'js',
       },
       'go-checkbox': {
          main: './checkbox.js',
          defaultExtension: 'js',
       },
       'go-radiobutton': {
          main: './radiobutton.js',
          defaultExtension: 'js',
       },

      'primeng': {
        main: './primeng.js',
        defaultExtension: 'js'
      },
      'go-datetimepicker': {
        main: './datetimepicker.js',
        defaultExtension: 'js'
      },
      'angular2-image-popup': {
        main: './image-modal-popup.js',
        defaultExtension: 'js'
      },
     'go-image-gallery': {
        main: './image-gallery.module.js',
        defaultExtension: 'js'
      },
      'go-upload': {
          main: './upload.js',
          defaultExtension: 'js'
       },
       'ng-sidebar': {
          main: './lib/index.js',
          defaultExtension: 'js'
       },
       'go-sidebar': {
          main: './sidebar.js',
          defaultExtension: 'js'
       },
       'ng2-table': {
          main: './ng2-table.js',
          defaultExtension: 'js'
       },
       'go-table': {
          main: './table.js',
          defaultExtension: 'js'
       },
       'tinymce': {
          main: './tinymce.min.js',
          defaultExtension: 'js'
       },
       'go-texteditor': {
          main: './texteditor.js',
          defaultExtension: 'js'
       },
       'go-tree': {
          main: './tree.js',
          defaultExtension: 'js'
       },
       'go-progressbar': {
          main: './progressbar.js',
          defaultExtension: 'js'
       },
       
//** doc */
      'doc-badge': {
        main: './badge.document.js',
          defaultExtension: 'js'
      },
      'doc-button': {
        main: './button.document.js',
          defaultExtension: 'js'
      },
      'doc-font': {
        main: './font.document.js',
          defaultExtension: 'js'
      },
      'doc-pulldown-menu': {
        main: './pulldown-menu.document.js',
        defaultExtension: 'js'
      },
      'doc-chart': {
        main: './chart.document.js',
        defaultExtension: 'js'
      },
      'doc-checkbox': {
        main: './checkbox.document.js',
        defaultExtension: 'js'
      },
      'doc-datetimepicker': {
        main: './datetimepicker.document.js',
        defaultExtension: 'js'
      },
      'doc-image-gallery': {
        main: './image-gallery.document.js',
        defaultExtension: 'js'
      },
      'doc-popup': {
          main: './popup.document.js',
          defaultExtension: 'js'
       },
      'doc-progressbar': {
          main: './progressbar.document.js',
          defaultExtension: 'js'
       },
      'doc-upload': {
          main: './upload.document.js',
          defaultExtension: 'js'
       },
      'doc-radiobutton': {
        main: './radiobutton.document.js',
        defaultExtension: 'js'
      },
      'doc-selectbox': {
        main: './selectbox.document.js',
        defaultExtension: 'js'
      },
      'doc-sidebar': {
        main: './sidebar.document.js',
        defaultExtension: 'js'
      },
      'doc-tab': {
        main: './tab.document.js',
        defaultExtension: 'js'
      },
      'doc-table': {
        main: './table.document.js',
        defaultExtension: 'js'
      },
      'doc-tooltip': {
        main: './tooltip.document.js',
        defaultExtension: 'js'
      },
      'doc-texteditor': {
        main: './texteditor.document.js',
        defaultExtension: 'js'
      },
      'doc-tree': {
        main: './tree.document.js',
        defaultExtension: 'js'
      },
      'doc-textarea': {
        main: './textarea.document.js',
        defaultExtension: 'js'
      },
      'doc-textbox': {
        main: './textbox.document.js',
        defaultExtension: 'js'
      },
      'doc-auto-complete': {
        main: './auto-complete.document.js',
        defaultExtension: 'js'
      },
      'doc-getting-start': {
        main: './page-getting-start.component.js',
        defaultExtension: 'js'
      },
    }
  });
})(this);
