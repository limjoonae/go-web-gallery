"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var COLORS = [
    { 'name': 'Blue 10', 'hex': '#C0E6FF' },
    { 'name': 'Blue 20', 'hex': '#7CC7FF' },
    { 'name': 'Blue 30', 'hex': '#5AAAFA' },
    { 'name': 'Blue 40', 'hex': '#5596E6' },
    { 'name': 'Blue 50', 'hex': '#4178BE' },
    { 'name': 'Blue 60', 'hex': '#325C80' },
    { 'name': 'Blue 70', 'hex': '#264A60' },
    { 'name': 'Blue 80', 'hex': '#1D3649' },
    { 'name': 'Blue 90', 'hex': '#152935' },
    { 'name': 'Blue 100', 'hex': '#010205' },
    { 'name': 'Green 10', 'hex': '#C8F08F' },
    { 'name': 'Green 20', 'hex': '#B4E051' },
    { 'name': 'Green 30', 'hex': '#8CD211' },
    { 'name': 'Green 40', 'hex': '#5AA700' },
    { 'name': 'Green 50', 'hex': '#4B8400' },
    { 'name': 'Green 60', 'hex': '#2D660A' },
    { 'name': 'Green 70', 'hex': '#144D14' },
    { 'name': 'Green 80', 'hex': '#0A3C02' },
    { 'name': 'Green 90', 'hex': '#0C2808' },
    { 'name': 'Green 100', 'hex': '#010200' },
    { 'name': 'Red 10', 'hex': '#FFD2DD' },
    { 'name': 'Red 20', 'hex': '#FFA5B4' },
    { 'name': 'Red 30', 'hex': '#FF7D87' },
    { 'name': 'Red 40', 'hex': '#FF5050' },
    { 'name': 'Red 50', 'hex': '#E71D32' },
    { 'name': 'Red 60', 'hex': '#AD1625' },
    { 'name': 'Red 70', 'hex': '#8C101C' },
    { 'name': 'Red 80', 'hex': '#6E0A1E' },
    { 'name': 'Red 90', 'hex': '#4C0A17' },
    { 'name': 'Red 100', 'hex': '#040001' },
    { 'name': 'Yellow 10', 'hex': '#FDE876' },
    { 'name': 'Yellow 20', 'hex': '#FDD600' },
    { 'name': 'Yellow 30', 'hex': '#EFC100' },
    { 'name': 'Yellow 40', 'hex': '#BE9B00' },
    { 'name': 'Yellow 50', 'hex': '#8C7300' },
    { 'name': 'Yellow 60', 'hex': '#735F00' },
    { 'name': 'Yellow 70', 'hex': '#574A00' },
    { 'name': 'Yellow 80', 'hex': '#3C3200' },
    { 'name': 'Yellow 90', 'hex': '#281E00' },
    { 'name': 'Yellow 100', 'hex': '#020100' }
];
var ATTRIBUTELIST = [
    { require: '*', name: 'items', type: 'Array<any>', description: "arrays \u0E02\u0E2D\u0E07\u0E44\u0E2D\u0E40\u0E17\u0E21\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 array \u0E02\u0E2D\u0E07\u0E2D\u0E47\u0E2D\u0E1A\u0E40\u0E08\u0E47\u0E04 \u0E17\u0E35\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34(property)\u0E02\u0E2D\u0E07 id \u0E41\u0E25\u0E30 text  \n                                                                  \u0E0B\u0E36\u0E48\u0E07\u0E43\u0E19\u0E01\u0E32\u0E23\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E19\u0E31\u0E49\u0E19\u0E44\u0E21\u0E48\u0E0B\u0E31\u0E1A\u0E0B\u0E49\u0E2D\u0E19 \u0E40\u0E0A\u0E48\u0E19 \u0E40\u0E23\u0E32\u0E2D\u0E32\u0E08\u0E2A\u0E48\u0E07\u0E04\u0E48\u0E32 string array \u0E40\u0E02\u0E49\u0E32\u0E44\u0E1B \u0E42\u0E14\u0E22\u0E17\u0E35\u0E48 string \u0E40\u0E14\u0E35\u0E22\u0E27\u0E01\u0E31\u0E19\u0E43\u0E0A\u0E49\u0E40\u0E1B\u0E47\u0E19\u0E17\u0E31\u0E49\u0E07\u0E15\u0E31\u0E27 text \u0E41\u0E25\u0E30 id \n                                                                  \u0E19\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E19\u0E35\u0E49\u0E40\u0E23\u0E32\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16 nest \u0E44\u0E2D\u0E40\u0E17\u0E21\u0E42\u0E14\u0E22\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34 children \u0E44\u0E1B\u0E22\u0E31\u0E07\u0E44\u0E2D\u0E40\u0E17\u0E21\u0E19\u0E31\u0E49\u0E19\u0E46\u0E44\u0E14\u0E49\u0E14\u0E49\u0E27\u0E22 \u0E0B\u0E36\u0E48\u0E07\u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E40\u0E23\u0E32\u0E43\u0E2A\u0E48\u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19 array \u0E02\u0E2D\u0E07\u0E44\u0E2D\u0E40\u0E17\u0E21\u0E2D\u0E35\u0E01\u0E2D\u0E31\u0E19\u0E19\u0E36\u0E07\n                                                                  \u0E44\u0E2D\u0E40\u0E17\u0E21\u0E17\u0E35\u0E48\u0E21\u0E35 children \u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E17\u0E35\u0E48\u0E08\u0E30\u0E25\u0E30\u0E40\u0E27\u0E49\u0E19\u0E01\u0E32\u0E23\u0E43\u0E2A\u0E48 id \u0E44\u0E14\u0E49 \u0E16\u0E49\u0E32\u0E44\u0E2D\u0E40\u0E17\u0E21\u0E21\u0E35\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38 id \u0E17\u0E38\u0E01\u0E44\u0E2D\u0E40\u0E17\u0E21\u0E08\u0E30\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A local \u0E41\u0E25\u0E30 selection operation \u0E08\u0E30\u0E43\u0E0A\u0E49\u0E1A\u0E19 local \u0E2D\u0E32\u0E40\u0E23\u0E22\u0E4C\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19\n                                                                  \u0E16\u0E49\u0E32\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E23\u0E30\u0E1A\u0E38 id \u0E44\u0E2D\u0E40\u0E17\u0E21\u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E23\u0E35\u0E22\u0E01\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E43\u0E19\u0E23\u0E30\u0E14\u0E31\u0E1A local \u0E08\u0E30\u0E15\u0E49\u0E2D\u0E07\u0E43\u0E0A\u0E49\u0E2D\u0E2D\u0E1B\u0E0A\u0E31\u0E48\u0E19 query \u0E43\u0E19\u0E01\u0E32\u0E23\u0E14\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2D\u0E2D\u0E01\u0E21\u0E32" },
    { require: '', name: 'active', type: 'Array<any>', description: "initial selection data \u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E40\u0E0B\u0E15\u0E04\u0E27\u0E23\u0E40\u0E1B\u0E47\u0E19\u0E2D\u0E47\u0E2D\u0E1A\u0E40\u0E08\u0E04\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07 id \u0E41\u0E25\u0E30 text" },
    { require: '', name: 'allowClear', type: 'boolean', description: "\u0E16\u0E49\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E47\u0E19 true \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E04\u0E25\u0E35\u0E22\u0E23\u0E4C\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E27\u0E49\u0E17\u0E34\u0E49\u0E07\u0E44\u0E14\u0E49 (\u0E43\u0E0A\u0E49\u0E44\u0E14\u0E49\u0E40\u0E09\u0E1E\u0E32\u0E30\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E1A\u0E1A 1 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01)" },
    { require: '', name: 'placeholder', type: 'text', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E15\u0E31\u0E27\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E43\u0E19 select \u0E08\u0E30\u0E1B\u0E23\u0E32\u0E01\u0E0E\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E32\u0E23\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E14\u0E46" },
    { require: '', name: 'disabled', type: 'boolean', description: "\u0E43\u0E0A\u0E49\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E34\u0E14\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19 select \u0E42\u0E14\u0E22 \u0E2B\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E48\u0E32 disabled=\"true\" \u0E08\u0E30\u0E44\u0E21\u0E48\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E01\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49" },
    { require: '', name: 'multiple', type: 'boolean', description: "\u0E16\u0E49\u0E32\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E40\u0E1B\u0E47\u0E19 true \u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01" }
];
var EVENTLIST = [
    { require: '*', name: 'data', type: 'function($event)', description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E40\u0E2B\u0E15\u0E38\u0E01\u0E32\u0E23\u0E13\u0E4C\u0E43\u0E14\u0E46\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19 \u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23 return Array<any> \u0E02\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E35\u0E48\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E19\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19" },
    { require: '', name: 'selected', type: 'function($event)', description: "\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E2B\u0E21\u0E48\u0E16\u0E39\u0E01\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23 return \u0E2D\u0E47\u0E2D\u0E1A\u0E40\u0E08\u0E04\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07 id \u0E41\u0E25\u0E30 text \u0E17\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E19\u0E31\u0E49\u0E19" },
    { require: '', name: 'removed', type: 'function($event)', description: "\u0E2B\u0E25\u0E31\u0E07\u0E08\u0E32\u0E01\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E16\u0E39\u0E01\u0E25\u0E1A \u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23 return \u0E2D\u0E47\u0E2D\u0E1A\u0E40\u0E08\u0E04\u0E17\u0E35\u0E48\u0E23\u0E30\u0E1A\u0E38\u0E04\u0E38\u0E13\u0E2A\u0E21\u0E1A\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07 id \u0E41\u0E25\u0E30 text \u0E17\u0E35\u0E40\u0E1B\u0E47\u0E19\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E2D\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E19\u0E31\u0E49\u0E19" },
    { require: '', name: 'typed', type: 'function($event)', description: "\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E25\u0E07\u0E43\u0E19\u0E01\u0E25\u0E48\u0E2D\u0E07\u0E02\u0E49\u0E2D\u0E04\u0E27\u0E32\u0E21\u0E08\u0E30\u0E17\u0E33\u0E01\u0E32\u0E23 return \u0E04\u0E48\u0E32\u0E17\u0E35\u0E48\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E1E\u0E34\u0E21\u0E1E\u0E4C\u0E43\u0E19\u0E23\u0E39\u0E1B\u0E02\u0E2D\u0E07 string" }
];
var _EXAMPLE1 = [
    "app.component.html",
    "",
    "<ng-select [allowClear]=\"true\" ",
    "         placeholder=\"please select city\"",
    "         [items]=\"items\"",
    "         [disabled]=\"disabledSingle\" ",
    "         (data)=\"refreshSingleValue($event)\"",
    "         id='search_single'",
    "></ng-select>",
    "<p><strong> Select: </strong> {{ singleValue.text }} </p>",
    "",
    "app.component.ts",
    "",
    "private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',",
    "         'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',",
    "         'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',",
    "         'D\u00FCsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',",
    "         'Hamburg', 'Hannover', 'Helsinki', 'Krak\u00F3w', 'Leeds', 'Leipzig', 'Lisbon',",
    "         'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'M\u00E1laga',",
    "         'Naples', 'Palermo', 'Paris', 'Pozna\u0144', 'Prague', 'Riga', 'Rome',",
    "         'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',",
    "         'Zagreb', 'Zaragoza', '\u0141\u00F3d\u017A'];",
    "",
    "private disabledSingle: boolean = false;",
    "private singleValue: any = {};",
    "",
    "public refreshSingleValue(value: any): void {",
    " this.singleValue = value;",
    "}"
];
var _EXAMPLE2 = [
    "app.component.html",
    "",
    "<ng-select [multiple]=\"true\" ",
    "          [items]=\"items\"",
    "          (data)=\"refreshMultiValue($event)\"",
    "          (selected)=\"selected($event)\"",
    "          (removed)=\"removed($event)\"",
    "          placeholder=\"please select city\"",
    "          [active]=\"initial\"",
    "          id='selectbox_multiple'",
    "></ng-select>",
    "<p><strong> Output value: </strong> {{ itemsToString(multiValue)}} </p>",
    "<p><strong> Select value: </strong> {{ selectValue.text }} </p>",
    "<p><strong> Remove value: </strong> {{ removeValue.text }} </p>",
    "",
    "app.component.ts",
    "",
    "private items: Array<string> = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',",
    "         'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',",
    "         'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',",
    "         'D\u00FCsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',",
    "         'Hamburg', 'Hannover', 'Helsinki', 'Krak\u00F3w', 'Leeds', 'Leipzig', 'Lisbon',",
    "         'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'M\u00E1laga',",
    "         'Naples', 'Palermo', 'Paris', 'Pozna\u0144', 'Prague', 'Riga', 'Rome',",
    "         'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',",
    "         'Zagreb', 'Zaragoza', '\u0141\u00F3d\u017A'];",
    "",
    "private initial:Array<string> = ['Munich'];",
    "",
    "private selectValue: any = [];",
    "private removeValue: any = [];",
    "private multiValue: any = [];",
    "",
    "public refreshMultiValue(value: any): void {",
    "  this.multiValue = value;",
    "}",
    "",
    "public selected(value: any): void {",
    "  this.selectValue = value;",
    "}",
    "",
    "public removed(value: any): void {",
    "  this.removeValue = value;",
    "}",
    "",
    "public itemsToString(value: Array<any>): string {",
    "  return value",
    "      .map((item: any) => {",
    "          return item.text;",
    "      }).join(',');",
    "}",
    "",
];
var _EXAMPLE3 = [
    "app.component.html",
    "",
    "<ng-select\n        [items]=\"colorItems\"\n        (data)=\"refreshColorValue($event)\"\n        placeholder=\"Please select color\"\n        id='selectbox_searchColor'>",
    "</ng-select>",
    "<p><strong> Output value: </strong> {{colorValue.id}} </p>",
    "",
    "app.component.ts",
    "",
    "import { OnInit, ViewEncapsulation } from '@angular/core';",
    "@Component({\n        .......................\n        styles: ['colorbox,.colorbox { display:inline-block; height:14px; width:14px;margin-right:4px; border:1px solid #000;}'],\n        encapsulation: ViewEncapsulation.None\n    })",
    "",
    "const COLORS = [\n            { 'name': 'Blue 10', 'hex': '#C0E6FF' },\n            { 'name': 'Blue 20', 'hex': '#7CC7FF' },\n            { 'name': 'Blue 30', 'hex': '#5AAAFA' },\n            { 'name': 'Blue 40', 'hex': '#5596E6' },\n            { 'name': 'Blue 50', 'hex': '#4178BE' },\n            { 'name': 'Blue 60', 'hex': '#325C80' },\n            { 'name': 'Blue 70', 'hex': '#264A60' },\n            { 'name': 'Blue 80', 'hex': '#1D3649' },\n            { 'name': 'Blue 90', 'hex': '#152935' },\n            { 'name': 'Blue 100', 'hex': '#010205' },\n            { 'name': 'Green 10', 'hex': '#C8F08F' },\n            { 'name': 'Green 20', 'hex': '#B4E051' },\n            { 'name': 'Green 30', 'hex': '#8CD211' },\n            { 'name': 'Green 40', 'hex': '#5AA700' },\n            { 'name': 'Green 50', 'hex': '#4B8400' },\n            { 'name': 'Green 60', 'hex': '#2D660A' },\n            { 'name': 'Green 70', 'hex': '#144D14' },\n            { 'name': 'Green 80', 'hex': '#0A3C02' },\n            { 'name': 'Green 90', 'hex': '#0C2808' },\n            { 'name': 'Green 100', 'hex': '#010200' },\n            { 'name': 'Red 10', 'hex': '#FFD2DD' },\n            { 'name': 'Red 20', 'hex': '#FFA5B4' },\n            { 'name': 'Red 30', 'hex': '#FF7D87' },\n            { 'name': 'Red 40', 'hex': '#FF5050' },\n            { 'name': 'Red 50', 'hex': '#E71D32' },\n            { 'name': 'Red 60', 'hex': '#AD1625' },\n            { 'name': 'Red 70', 'hex': '#8C101C' },\n            { 'name': 'Red 80', 'hex': '#6E0A1E' },\n            { 'name': 'Red 90', 'hex': '#4C0A17' },\n            { 'name': 'Red 100', 'hex': '#040001' },\n            { 'name': 'Yellow 10', 'hex': '#FDE876' },\n            { 'name': 'Yellow 20', 'hex': '#FDD600' },\n            { 'name': 'Yellow 30', 'hex': '#EFC100' },\n            { 'name': 'Yellow 40', 'hex': '#BE9B00' },\n            { 'name': 'Yellow 50', 'hex': '#8C7300' },\n            { 'name': 'Yellow 60', 'hex': '#735F00' },\n            { 'name': 'Yellow 70', 'hex': '#574A00' },\n            { 'name': 'Yellow 80', 'hex': '#3C3200' },\n            { 'name': 'Yellow 90', 'hex': '#281E00' },\n            { 'name': 'Yellow 100', 'hex': '#020100' }\n        ];",
    "",
    "private colorValue: any = {};",
    "private colorItems: Array<any> = [];",
    "",
    "public ngOnInit(): any {\n    COLORS.forEach((color: { name: string, hex: string }) => {\n        this.colorItems.push({\n            id: color.hex,\n            text: '<colorbox style=\"background-color:$ {color.hex};\"></colorbox>$ {color.name} ($ {color.hex})'\n        });\n    });\n}",
    "",
    "public refreshColorValue(value: any): void {",
    "  this.colorValue = value;",
    "}",
];
var SelectboxDocument = (function () {
    function SelectboxDocument() {
        this.componentTag = 'ng-select';
        this.componentDescription = "Select \u0E40\u0E1B\u0E47\u0E19\u0E01\u0E32\u0E23\u0E41\u0E2A\u0E14\u0E07\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E43\u0E2B\u0E49\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E40\u0E25\u0E37\u0E2D\u0E01 \u0E42\u0E14\u0E22\u0E2A\u0E32\u0E21\u0E32\u0E23\u0E16\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E44\u0E14\u0E49 2 \u0E41\u0E1A\u0E1A \u0E04\u0E37\u0E2D \u0E41\u0E1A\u0E1A 1 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E41\u0E25\u0E30\u0E21\u0E32\u0E01\u0E01\u0E27\u0E48\u0E32 1 \u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01";
        this.version = '1.0';
        this.releaseDate = '7/12/2016';
        this.credit = 'ng2-select (v.1.2.0)';
        this.creditURL = 'https://valor-software.com/ng2-select/';
        this.prefixSyntax = "<ng-select ";
        this.attrSyntax = "[items]=\"array_of_data\" [[active]=\"array_of_items\"] [[allowClear]=\"true_or_false\"]\n                                    [[placeholder]=\"text\"] [[disabled]=\"true_or_false\"] [[multiple]=\"true_or_false\"]\n                                    [(data)=\"function($event)\"] [(selected)=\"function($event)\"] [(removed)=\"function($event)\"]\n                                    [(typed)=\"function($event)\"]";
        this.suffixSyntax = "><ng-select>";
        this.attributeList = ATTRIBUTELIST;
        this.eventList = EVENTLIST;
        this.exampleOf1 = _EXAMPLE1;
        this.exampleOf2 = _EXAMPLE2;
        this.exampleOf3 = _EXAMPLE3;
        // private appModuleDetail: string = `app.module.ts - ทำการ import พร้อมทั้งกำหนดค่าเพิ่มเติมใน imports`;
        this.systemjs = [
            { data: "map: {" },
            { data: "     'ng2-select': 'npm:ng2-select/bundles/ng2-select.umd.js'," },
            { data: "  }" },
            { data: "}" }
        ];
        this.items = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
            'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
            'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
            'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
            'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon', 'Liverpool',
            'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
            'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
            'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
            'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
            'Zagreb', 'Zaragoza', 'Łódź'];
        this.initial = ['Munich'];
        this.removeValue = [];
        this.selectValue = [];
        this.singleValue = {};
        this.multiValue = [];
        this.childValue = {};
        this.colorValue = {};
        // private _disabledV:string = '0';
        this.disabledSingle = false;
        this.disabledMulti = false;
        this.disabledChild = false;
        this.disabledColor = false;
        this.colorItems = [];
    }
    SelectboxDocument.prototype.ngOnInit = function () {
        var _this = this;
        COLORS.forEach(function (color) {
            _this.colorItems.push({
                id: color.hex,
                text: "<colorbox style='background-color:" + color.hex + ";'></colorbox>" + color.name + " (" + color.hex + ")"
            });
        });
    };
    SelectboxDocument.prototype.disableSingle = function () {
        this.disabledSingle = !this.disabledSingle;
    };
    SelectboxDocument.prototype.disableMulti = function () {
        this.disabledMulti = !this.disabledMulti;
    };
    SelectboxDocument.prototype.disableChild = function () {
        this.disabledChild = !this.disabledChild;
    };
    SelectboxDocument.prototype.disableColor = function () {
        this.disabledColor = !this.disabledColor;
    };
    SelectboxDocument.prototype.itemsToString = function (value) {
        return value
            .map(function (item) {
            return item.text;
        }).join(',');
    };
    SelectboxDocument.prototype.selected = function (value) {
        this.selectValue = value;
    };
    SelectboxDocument.prototype.removed = function (value) {
        this.removeValue = value;
    };
    SelectboxDocument.prototype.refreshSingleValue = function (value) {
        this.singleValue = value;
    };
    SelectboxDocument.prototype.refreshMultiValue = function (value) {
        this.multiValue = value;
    };
    SelectboxDocument.prototype.refreshChildValue = function (value) {
        this.childValue = value;
    };
    SelectboxDocument.prototype.refreshColorValue = function (value) {
        this.colorValue = value;
    };
    return SelectboxDocument;
}());
SelectboxDocument = __decorate([
    core_1.Component({
        selector: 'doc-selectbox',
        templateUrl: './selectbox.document.html',
        styles: ["colorbox,.colorbox { display:inline-block; height:14px; width:14px;margin-right:4px; border:1px solid #000;}"],
        encapsulation: core_1.ViewEncapsulation.None
    })
], SelectboxDocument);
exports.SelectboxDocument = SelectboxDocument;
//# sourceMappingURL=selectbox.document.js.map