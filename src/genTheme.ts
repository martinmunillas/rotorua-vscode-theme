import { writeFileSync } from 'fs';
import { join } from 'path';
import { generalDictionary, tokenDictionary } from './dictionary';

const vars = {
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

interface GenThemeOptions {
  name: string;
  type: 'dark' | 'light';
  syntax: Record<keyof typeof tokenDictionary, string>;
  general: Record<keyof typeof generalDictionary, string>;
}

const genTheme = (config: GenThemeOptions) => {
  const final = {
    name: config.name,
    type: config.type,
    $schema: 'vscode://schemas/color-theme',

    colors: {
      ...Object.entries(config.general)
        .map(([key, value]) => [
          generalDictionary[key as keyof typeof generalDictionary],
          value,
        ])
        .reduce((prev, curr) => ({ ...prev, [curr[0]]: curr[1] }), {}),
    },
    tokenColors: [
      ...Object.entries(config.syntax).map(([key, value]) => ({
        scope:
          typeof tokenDictionary[key as keyof typeof tokenDictionary] ===
          'string'
            ? [tokenDictionary[key as keyof typeof tokenDictionary]]
            : tokenDictionary[key as keyof typeof tokenDictionary],
        settings: {
          foreground: value,
        },
      })),
    ],
  };
  writeFileSync(
    join(__dirname, '../themes/Rotorua-color-theme.json'),
    JSON.stringify(final, null, 2)
  );
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
