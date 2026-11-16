// Генерация CSS-переменных из W3C-токенов: светлая тема в :root, темная в [data-theme="dark"]
import StyleDictionary from 'style-dictionary';

const header = (note) => () => ['Сгенерировано Style Dictionary из tokens/*.json, не редактировать вручную' + note];

const light = new StyleDictionary({
  source: ['tokens/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens.css',
        format: 'css/variables',
        options: { outputReferences: true, fileHeader: header('') },
      }],
    },
  },
});

// Темная тема: те же токены плюс переопределения из themes/dark.json, в файл попадают только они
const dark = new StyleDictionary({
  source: ['tokens/*.json', 'tokens/themes/dark.json'],
  log: { warnings: 'disabled' },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      files: [{
        destination: 'tokens-dark.css',
        format: 'css/variables',
        filter: (token) => token.filePath.includes('themes/dark.json'),
        options: { selector: ':root[data-theme="dark"]', outputReferences: true, fileHeader: header('; темная тема') },
      }],
    },
  },
});

await light.buildAllPlatforms();
await dark.buildAllPlatforms();
