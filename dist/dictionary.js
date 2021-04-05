"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalDictionary = exports.tokenDictionary = void 0;
exports.tokenDictionary = {
    storage: ['storage.type'],
    vars: ['variable', 'variable.other.readwrite.alias'],
    string: 'string',
    funcs: 'entity.name.function',
    params: 'variable.parameter',
    interface: ['entity.name.type.interface'],
    type: 'entity.name.type',
    keywords: 'keywords',
    operators: 'keyword.operator',
    ternary: 'keyword.operator.ternary',
    tags: 'entity.name.tag',
    tagAttr: 'entity.other.attribute-name',
    importExport: [
        'keyword.control.export',
        'keyword.control.default',
        'keyword.control.import',
        'keyword.control.from',
    ],
    return: 'keyword.control.flow',
    primitive: 'support.type.primitive',
    object: 'variable.other.object',
    property: 'variable.other.property',
};
exports.generalDictionary = {
    bg: 'editor.background',
};
//# sourceMappingURL=dictionary.js.map