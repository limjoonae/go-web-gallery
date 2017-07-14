"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ATTRIBUTELIST = [
    { require: '*', name: 'name', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E0A\u0E37\u0E48\u0E2D\u0E02\u0E2D\u0E07 component" },
    { require: '*', name: 'url', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14 path \u0E17\u0E35\u0E48\u0E08\u0E30\u0E19\u0E33\u0E44\u0E1F\u0E25\u0E4C\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B" },
    { require: '', name: 'multiple', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E27\u0E48\u0E32\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49\u0E17\u0E35\u0E25\u0E30\u0E2B\u0E25\u0E32\u0E22\u0E44\u0E1F\u0E25\u0E4C\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19\u0E2B\u0E23\u0E37\u0E2D\u0E44\u0E21\u0E48 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'accept', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E2D\u0E19\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01 <strong><a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\" target=\"_blank\">\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E19\u0E35\u0E49</a></strong>" },
    { require: '', name: 'fileTypeAllow', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E14\u0E39\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01 <strong><a href=\"http://www.iana.org/assignments/media-types/media-types.xhtml\" target=\"_blank\">\u0E25\u0E34\u0E07\u0E04\u0E4C\u0E19\u0E35\u0E49</a></strong>" },
    { require: '', name: 'autoUpload', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E2D\u0E31\u0E15\u0E42\u0E19\u0E21\u0E31\u0E15\u0E34\u0E44\u0E14\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E17\u0E33\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 false" },
    { require: '', name: 'maxFileSize', type: 'number', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E19\u0E32\u0E14\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E41\u0E15\u0E48\u0E25\u0E30\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E14\u0E49 (\u0E21\u0E35\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E40\u0E1B\u0E47\u0E19 2 MB) \u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E04\u0E37\u0E2D 2 * 1024 * 1024 (\u0E44\u0E14\u0E49\u0E04\u0E48\u0E32\u0E40\u0E1B\u0E47\u0E19 bytes)" },
    { require: '', name: 'showImage', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E20\u0E32\u0E1E\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E1B\u0E47\u0E19\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E20\u0E32\u0E1E\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E27\u0E49 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'previewWidth', type: 'number', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E27\u0E32\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E20\u0E32\u0E1E\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07 \u0E0B\u0E36\u0E48\u0E07\u0E08\u0E30\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D showImage \u0E16\u0E39\u0E01\u0E40\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E39\u0E48(\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E48\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E44\u0E27\u0E49\u0E17\u0E35\u0E48 100)" },
    { require: '', name: 'speedCalculationTime', type: 'number', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E27\u0E25\u0E32\u0E02\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E04\u0E33\u0E19\u0E27\u0E13\u0E04\u0E27\u0E32\u0E21\u0E40\u0E23\u0E47\u0E27\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E43\u0E19\u0E41\u0E15\u0E48\u0E25\u0E30\u0E23\u0E2D\u0E1A \u0E2B\u0E19\u0E48\u0E27\u0E22\u0E40\u0E1B\u0E47\u0E19 millisecond(ms) \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 500" },
    { require: '', name: 'canAbort', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E14\u0E49 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'messageSettings', type: 'Object', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14 label \u0E02\u0E2D\u0E07\u0E1B\u0E38\u0E48\u0E21 \u0E41\u0E25\u0E30 message \u0E15\u0E48\u0E32\u0E07\u0E46\u0E02\u0E2D\u0E07 component \u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49\u0E14\u0E39\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D <strong>messageSettings Object</strong>" },
    { require: '', name: 'showOptions', type: 'Object', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E02\u0E2D\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E15\u0E48\u0E32\u0E07\u0E46\u0E1A\u0E19 component \u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E16\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E44\u0E14\u0E49\u0E14\u0E39\u0E44\u0E14\u0E49\u0E08\u0E32\u0E01\u0E2B\u0E31\u0E27\u0E02\u0E49\u0E2D <strong>showOptions Object</strong>" },
    { require: '', name: 'onSelect', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C" },
    { require: '', name: 'onDelete', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E32\u0E23\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E27\u0E49" },
    { require: '', name: 'onBeforeUpload', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E21\u0E35\u0E01\u0E33\u0E25\u0E31\u0E07\u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C" },
    { require: '', name: 'onUploading', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E02\u0E13\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C" },
    { require: '', name: 'onFinish', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E40\u0E2A\u0E23\u0E47\u0E08\u0E2A\u0E34\u0E49\u0E19" },
    { require: '', name: 'onError', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E1C\u0E34\u0E14\u0E1E\u0E25\u0E32\u0E14" },
    { require: '', name: 'onClear', type: 'function($event)', description: "\u0E1F\u0E31\u0E07\u0E01\u0E4C\u0E0A\u0E31\u0E48\u0E19\u0E19\u0E35\u0E49\u0E08\u0E30\u0E16\u0E39\u0E01\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E16\u0E39\u0E01\u0E25\u0E1A" }
];
var MSGATTRIBUTELIST = [
    { require: '', name: 'invalidFileSizeMsg', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E02\u0E19\u0E32\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07" },
    { require: '', name: 'chooseLabel', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C" },
    { require: '', name: 'uploadLabel', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01" },
    { require: '', name: 'deleteLabel', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01" },
    { require: '', name: 'clearLabel', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E27\u0E49" },
    { require: '', name: 'abortLabel', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E1B\u0E38\u0E48\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E22\u0E01\u0E40\u0E25\u0E34\u0E01\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14" },
    { require: '', name: 'draganddropBoxMessage', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E01\u0E25\u0E48\u0E2D\u0E07 drag and drop" },
    { require: '', name: 'latestFileChosenCaption', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E17\u0E35\u0E48\u0E08\u0E30\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E32\u0E07\u0E2B\u0E19\u0E49\u0E32'\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C'\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01" },
    { require: '', name: 'uploadingMessage', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E1A\u0E19\u0E41\u0E16\u0E1A\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14 \u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E2D\u0E22\u0E39\u0E48" },
    { require: '', name: 'uploadStatusComplete', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08" },
    { require: '', name: 'uploadStatusFailure', type: 'string', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E04\u0E33\u0E2D\u0E18\u0E34\u0E1A\u0E32\u0E22\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27" }
];
var SHOWATTRIBUTELIST = [
    { require: '', name: 'showAllFileChosen', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'showProgressBar', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E41\u0E16\u0E1A\u0E2A\u0E16\u0E32\u0E19\u0E30\u0E01\u0E32\u0E23\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'showLatestFileNameChosen', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'showBrowseButton', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E1B\u0E38\u0E48\u0E21\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'showInvalidFileSizeError', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E15\u0E37\u0E2D\u0E19\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E21\u0E35\u0E02\u0E19\u0E32\u0E14\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" },
    { require: '', name: 'showDragandDropBox', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E01\u0E25\u0E48\u0E2D\u0E07 Drag and Drop file \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 false" },
    { require: '', name: 'showUploadStatusDialog', type: 'boolean', description: "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E43\u0E2B\u0E49\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E33\u0E40\u0E23\u0E47\u0E08\u0E2B\u0E23\u0E37\u0E2D\u0E25\u0E49\u0E21\u0E40\u0E2B\u0E25\u0E27 \u0E21\u0E35\u0E04\u0E48\u0E32 default \u0E40\u0E1B\u0E47\u0E19 true" }
];
var _releaseUpdate_v_1_1 = [
    { head: "", data: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E1C\u0E25\u0E44\u0E1F\u0E25\u0E4C\u0E17\u0E35\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01" },
    { head: "", data: "\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E23\u0E39\u0E1B\u0E41\u0E1A\u0E1A\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E43\u0E19\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E41\u0E2A\u0E14\u0E07 error mesaage" },
];
var UploadDocument = (function () {
    function UploadDocument() {
        this.componentTag = '<go-upload>';
        this.componentDescription = "\u0E43\u0E0A\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E15\u0E48\u0E32\u0E07\u0E46\u0E02\u0E36\u0E49\u0E19\u0E44\u0E1B\u0E1A\u0E19 path \u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23";
        this.version = '1.1';
        this.releaseUpdate_v_1_1 = _releaseUpdate_v_1_1;
        this.releaseDate = '6 July 2017';
        this.attributeList = ATTRIBUTELIST;
        this.messageAttributeList = MSGATTRIBUTELIST;
        this.showAttributeList = SHOWATTRIBUTELIST;
        this.prefixSyntax = "<go-upload ";
        this.attrSyntax = "name=\"component_name\" url=\"upload_url_path\"\n     [[multiple]=\"is_multiple_upload\"] [accept=\"file_type_accepted\"] \n     [fileTypeAllow=\"file_type_allow\"] [[autoUpload]=\"is_upload_auto\"] \n     [[maxFileSize]=\"max_accepted_file_size\"] [[showImage]=\"show_upload_image\"] \n     [[previewWidth]=\"image_preview_width\"] \n     [[speedCalculationTime]=\"speed_calculation_time\"] \n     [[canAbort]=\"can_Abort_Upload\"] \n     [[messageSettings]=\"message_settings\"] [[showOptions]=\"show_options\"] \n     [(onSelect)=\"onSelect($event)\"] [(onDelete)=\"onDelete($event)\"] \n     [(onBeforeUpload)=\"onBeforeUpload($event)\"] \n     [(onUploading)=\"onUploading($event)\"] [(onFinish)=\"onFinish($event)\"] \n     [(onError)=\"onError($event)\"] [(onClear)=\"onClear($event)\"]";
        this.suffixSyntax = "></go-upload>";
        this.messageSettingsSyntax = "constDATA: messageSettings{} = \n    { invalidFileSizeMsg:'invalid_file_size_message', \n    chooseLabel:'choose_label', uploadLabel:'upload_label', \n    deleteLabel:'delete_label', clearLabel:'clear_label', \n    abortLabel:'abort_label', \n    draganddropBoxMessage:'drag_and_drop_box_message', \n    nonChosenMessage:'not_chosen_file_message', \n    latestFileChosenCaption:'file_caption', uploadingMessage:'uploading_message',\n    uploadStatusComplete:'upload_complete_message', uploadStatusFailure:'upload_failure_message' };\n    ";
        this.showOptionsSyntax = "constDATA: showOptions{} = \n    { showAllFileChosen:'show_chosen_file', showProgressBar:'show_progress_bar', \n    showLatestFileNameChosen:'show_latest_chosen_file_name', \n    showBrowseButton:'show_browse_button', \n    showInvalidFileSizeError:'show_invalid_file_size_error_warning', \n    showDragandDropBox:'show_drag_and_drop_box',\n    showUploadStatusDialog:'show_status_complete_or_failure' };\n    ";
        this.html_ex_default = "<strong>Basic Upload</strong> Status: {{status}}\n<go-upload name=\"upload_default\" \n\tid=\"upload_default\" url=\"http://localhost:10050/upload\" \n    accept=\"image/*,text/*\" fileTypeAllow=\"image/*,text/*\"\n    (onFinish)=\"onFinish($event)\" (onSelect)=\"onSelect($event)\" \n    (onDelete)=\"onDelete($event)\" (onClear)=\"onClear($event)\">\n</go-upload>\n<div class=\"row\" *ngIf=\"uploadedFiles.length > 0\" style=\"margin-top: 2rem;\">\n    <strong>{{uploadedFileMessage}}</strong> <button class=\"btn btn-danger btn-sm\" (click)=\"clearCompletedList()\">Clear</button>\n    <div class=\"row\" *ngFor=\"let file of uploadedFiles\">\n        <div class=\"col-md-12\">\n            <li>{{file.name}} - [{{file.size}} bytes]</li>\n        </div>\n    </div>\n</div>";
        this.ts_ex_default = "uploadedFiles: any[] = [];\n\nonFinish(event: any) {\n    for (let file of event.files) {\n        this.uploadedFiles.push(file);\n    }\n}\n\nonSelect(event: any) {\n    this.status = '\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C';\n}\n\nonDelete(event: any) {\n    this.status = '\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C';\n}\n\nonClear(event: any) {\n    this.status = '';\n}\n\nclearCompletedList() {\n    this.uploadedFiles = [];\n}";
        this.html_ex_upload_set = "<strong>Set Option Upload</strong> Status: {{statusSet}}\n<go-upload id=\"upload_set\" name=\"upload_set\" url=\"http://localhost:10050/upload\" [multiple]=\"false\" accept=\"image/*,application/*\" fileTypeAllow=\"image/*,application/*\"\n    [maxFileSize]=2.5*1024*1024 [showImage]=\"false\" [previewWidth]=\"100\" [speedCalculationTime]=1000\n    [messageSettings]=\"message_sets\" [showOptions]=\"show_opts\" (onFinish)=\"onFinishSet($event)\"\n    (onSelect)=\"onSelectSet($event)\" (onDelete)=\"onDeleteSet($event)\" (onClear)=\"onClearSet($event)\">\n</go-upload>\n<div class=\"row\" *ngIf=\"uploadedFilesSet.length > 0\">\n    <strong>{{uploadedFileMessage}}</strong> <button class=\"btn btn-danger btn-sm\" (click)=\"clearCompletedList()\">Clear</button>\n    <div class=\"row\" *ngFor=\"let file of uploadedFilesSet\">\n        <div class=\"col-md-12\">\n            <li>{{file.name}} - [{{file.size}} bytes]</li>\n        </div>\n    </div>\n</div>";
        this.ts_ex_upload_set = "uploadedFilesSet: any[] = [];\nmessage_sets = { chooseLabel: \"Choose file\", deleteLabel: \"Delete it\", invalidFileSizeMsg: \"\u0E02\u0E19\u0E32\u0E14\u0E44\u0E1F\u0E25\u0E4C\u0E44\u0E21\u0E48\u0E16\u0E39\u0E01\u0E15\u0E49\u0E2D\u0E07\" };\nshow_opts = { showDragandDropBox: true };\n\nonFinishSet(event: any) {\n    for (let file of event.files) {\n        this.uploadedFilesSet.push(file);\n    }\n}\n\nonSelectSet(event: any) {\n    this.status = '\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E1F\u0E25\u0E4C';\n}\n\nonDeleteSet(event: any) {\n    this.status = '\u0E25\u0E1A\u0E44\u0E1F\u0E25\u0E4C';\n}\n\nonClearSet(event: any) {\n    this.status = '';\n}\n\nclearCompletedListSet() {\n    this.uploadedFilesSet = [];\n}";
        this.status = '';
        this.statusSet = '';
        this.uploadedFileMessage = "รายชื่อไฟล์ที่อัพโหลดเสร็จสิ้น";
        this.uploadedFiles = [];
        this.uploadedFilesSet = [];
        this.message_sets = { chooseLabel: "Choose file", deleteLabel: "Delete it", invalidFileSizeMsg: "ขนาดไฟล์ไม่ถูกต้อง" };
        this.show_opts = { showDragandDropBox: true, showUploadStatusDialog: false };
        this.dowloadBackendpath = '';
    }
    UploadDocument.prototype.ngOnInit = function () {
        this.getDownloadedPath();
    };
    UploadDocument.prototype.getDownloadedPath = function () {
        var paths = module.id.split('/');
        for (var i = 0; i < paths.length - 1; i++) {
            this.dowloadBackendpath += paths[i] + '/';
        }
        this.dowloadBackendpath += 'backend.zip';
    };
    UploadDocument.prototype.onFinish = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
    };
    UploadDocument.prototype.onSelect = function (event) {
        this.status = 'เลือกไฟล์';
    };
    UploadDocument.prototype.onDelete = function (event) {
        this.status = 'ลบไฟล์';
    };
    UploadDocument.prototype.onClear = function (event) {
        this.status = '';
    };
    UploadDocument.prototype.clearCompletedList = function () {
        this.uploadedFiles = [];
    };
    UploadDocument.prototype.onFinishSet = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFilesSet.push(file);
        }
    };
    UploadDocument.prototype.onSelectSet = function (event) {
        this.statusSet = 'เลือกไฟล์';
    };
    UploadDocument.prototype.onDeleteSet = function (event) {
        this.statusSet = 'ลบไฟล์';
    };
    UploadDocument.prototype.onClearSet = function (event) {
        this.statusSet = '';
    };
    UploadDocument.prototype.clearCompletedListSet = function () {
        this.uploadedFilesSet = [];
    };
    return UploadDocument;
}());
UploadDocument = __decorate([
    core_1.Component({
        selector: 'upload-example',
        templateUrl: './upload.document.html'
    })
], UploadDocument);
exports.UploadDocument = UploadDocument;
//# sourceMappingURL=upload.document.js.map