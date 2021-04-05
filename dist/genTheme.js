"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
var dictionary_1 = require("./dictionary");
var vars = {
    yellow: {
        100: '#FCEB28',
        200: '#f0b600',
    },
    blue: {
        100: '#59A0DF',
        200: '#0074F6',
        300: '#2D59C6',
    },
    purple: {
        100: '#b56ff8',
    },
    orange: {
        100: '#D26A42',
        200: '#DD680B',
    },
    green: {
        100: '#ABFF4C',
        200: '#446F2D',
    },
    gray: {
        100: '#c8c8c8',
    },
    white: {
        100: '#ffffff',
    },
    red: {
        100: '#ff4545',
    },
};
var genTheme = function (config) {
    var final = {
        name: config.name,
        type: config.type,
        $schema: 'vscode://schemas/color-theme',
        colors: __assign({}, Object.entries(config.general)
            .map(function (_a) {
            var key = _a[0], value = _a[1];
            return [
                dictionary_1.generalDictionary[key],
                value,
            ];
        })
            .reduce(function (prev, curr) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[curr[0]] = curr[1], _a)));
        }, {})),
        tokenColors: __spreadArray([], Object.entries(config.syntax).map(function (_a) {
            var key = _a[0], value = _a[1];
            return ({
                scope: typeof dictionary_1.tokenDictionary[key] ===
                    'string'
                    ? [dictionary_1.tokenDictionary[key]]
                    : dictionary_1.tokenDictionary[key],
                settings: {
                    foreground: value,
                },
            });
        })),
    };
    fs_1.writeFileSync(path_1.join(__dirname, '../themes/Rotorua-color-theme.json'), JSON.stringify(final, null, 2));
};
genTheme({
    name: 'rotorua',
    type: 'dark',
    general: {
        bg: '#000000',
    },
    syntax: {
        funcs: vars.green[100],
        interface: vars.blue[100],
        keywords: vars.gray[100],
        params: vars.gray[100],
        storage: vars.blue[300],
        string: vars.yellow[200],
        type: vars.orange[200],
        vars: vars.white[100],
        operators: vars.gray[100],
        tags: vars.red[100],
        tagAttr: vars.purple[100],
        importExport: vars.red[100],
        return: vars.red[100],
        primitive: vars.red[100],
        ternary: vars.orange[200],
        object: vars.blue[200],
        property: vars.blue[100],
    },
});
//# sourceMappingURL=genTheme.js.map