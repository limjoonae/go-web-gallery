/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias

      //***tempolary path variable***
      // 'npm_local:': 'node_modules/',
      // 'gos:': 'http://10.182.247.173/gos-cdn-dev/',
      'npm:': 'http://10.182.247.173/gos-cdn/node_modules/2.4.0/',
      'gos:': 'http://10.182.247.173/gos-cdn/',
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
      
      //***lib for gos-component***
      'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.js',
      'numeral': 'npm:numeral/numeral.js',
      'gos-badge': 'gos:badge/1.0.0',
      'gos-pulldown-menu': 'gos:pulldown-menu/1.0.0',
      'gos-service':  'gos:service/1.0.0',
      'gos-label':	'gos:label/1.0.0',
      'gos-directive': 'gos:directive/1.0.0',

      'ng2-charts': 'npm:ng2-charts',
      'chart.js': 'npm:chart.js/dist/Chart.bundle.min.js',

      'primeng': 'npm:primeng',

      'gos-chart': 'gos:chart/1.0.0',
      'gos-button': 'gos:button/1.0.0',
      'gos-textbox': 'gos:textbox/1.0.0',
      'gos-textarea': 'gos:textarea/1.0.0',
      'gos-checkbox': 'gos:checkbox/1.0.0',

      'gos-datetimepicker': 'gos:datetimepicker/1.0.0',

      'gos-upload': 'gos:upload/1.0.0',

      'angular2-image-popup':'npm:angular2-image-popup/directives/angular2-image-popup/',
      'gos-image-gallery': 'gos:image-gallery/1.0.0',

      'angular2-modal':           'npm:angular2-modal/bundles/angular2-modal.umd.js',
      'angular2-modal-bootstrap': 'npm:angular2-modal/bundles/angular2-modal.bootstrap.umd.js',

      'gos-progressbar':	           'gos:progressbar/1.0.0',
      'gos-progressbar-lockservice':	'gos:progressbar/1.0.0',

      'gos-radiobutton': 'gos:radiobutton/1.0.0',

      'ng-sidebar': 'npm:ng-sidebar',
      'gos-sidebar': 'gos:sidebar/1.0.0/',
      'moment': 'npm:moment',
      'ng2-bootstrap':'npm:ng2-bootstrap',
      'ng2-table': 'npm:ng2-table',
      'gos-table': 'gos:table/1.0.0/',

      'tinymce': 'npm:tinymce',
      'gos-texteditor': 'gos:texteditor/1.0.0/',

      'gos-tree': 'gos:tree/1.0.0',

      'ng2-auto-complete':'npm:ng2-auto-complete/dist/ng2-auto-complete.umd.js',

      //*** document ***/
      'doc-badge': 'gos:badge/1.0.0/doc',
      'doc-pulldown-menu': 'gos:pulldown-menu/1.0.0/doc',
      'doc-button': 'gos:button/1.0.0/doc',
      'doc-font': 'gos:fonts/1.0.0/doc',
      'doc-textbox': 'gos:textbox/1.0.0/doc',
      'doc-textarea': 'gos:textarea/1.0.0/doc',
      'doc-chart': 'gos:chart/1.0.0/doc',
      'doc-checkbox': 'gos:checkbox/1.0.0/doc',
      'doc-datetimepicker': 'gos:datetimepicker/1.0.0/doc',
      'doc-image-gallery': 'gos:image-gallery/1.0.0/doc',
      'doc-popup': 'gos:popup/1.0.0/doc',
      'doc-upload': 'gos:upload/1.0.0/doc',
      'doc-radiobutton': 'gos:radiobutton/1.0.0/doc',
      'doc-selectbox': 'gos:selectbox/1.0.0/doc',
      'doc-sidebar': 'gos:sidebar/1.0.0/doc',
      'doc-tab': 'gos:tab/1.0.0/doc',
      'doc-table': 'gos:table/1.0.0/doc',
      'doc-tooltip': 'gos:tooltip/1.0.0/doc',
      'doc-texteditor': 'gos:texteditor/1.0.0/doc',
      'doc-tree': 'gos:tree/1.0.0/doc',
      'doc-auto-complete': 'gos:auto-complete/1.0.0/doc',
      'doc-getting-start': 'gos:getting-start/1.0.0/doc',

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

      //***gos-component main file***
      'gos-label': {
        main: './label.js',
        defaultExtension: 'js'
      },
      'gos-directive': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'gos-service': {
        main: './index.js',
        defaultExtension: 'js'
      },
      'gos-badge': {
        main: './badge.js',
        defaultExtension: 'js'
      },
      'gos-pulldown-menu': {
        main: './pulldown-menu.js',
        defaultExtension: 'js'
      },
      'gos-button': {
        main: './button.js',
        defaultExtension: 'js'
      },
      'gos-textbox': {
        main: './textbox.js',
        defaultExtension: 'js'
      },
      'gos-textarea': {
        main: './textarea.js',
        defaultExtension: 'js'
      },

      'ng2-charts': {
          main: './ng2-charts.js',
          defaultExtension: 'js',
       },
       'gos-chart': {
          main: './chart.js',
          defaultExtension: 'js',
       },
       'gos-checkbox': {
          main: './checkbox.js',
          defaultExtension: 'js',
       },
       'gos-radiobutton': {
          main: './radiobutton.js',
          defaultExtension: 'js',
       },

      'primeng': {
        main: './primeng.js',
        defaultExtension: 'js'
      },
      'gos-datetimepicker': {
        main: './datetimepicker.js',
        defaultExtension: 'js'
      },
      'angular2-image-popup': {
        main: './image-modal-popup.js',
        defaultExtension: 'js'
      },
     'gos-image-gallery': {
        main: './image-gallery.js',
        defaultExtension: 'js'
      },
      'gos-upload': {
          main: './upload.js',
          defaultExtension: 'js'
       },
      'gos-progressbar': {
         main: './slim-loading-bar.module.js',
         defaultExtension: 'js'
      },
      'gos-progressbar-lockservice': {
           main: './lock.service.js',
           defaultExtension: 'js'
       },
       'ng-sidebar': {
          main: './lib/index.js',
          defaultExtension: 'js'
       },
       'gos-sidebar': {
          main: './sidebar.js',
          defaultExtension: 'js'
       },
       'ng2-table': {
          main: './ng2-table.js',
          defaultExtension: 'js'
       },
       'gos-table': {
          main: './table.js',
          defaultExtension: 'js'
       },
       'tinymce': {
          main: './tinymce.min.js',
          defaultExtension: 'js'
       },
       'gos-texteditor': {
          main: './texteditor.js',
          defaultExtension: 'js'
       },
       'gos-tree': {
          main: './tree.js',
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
