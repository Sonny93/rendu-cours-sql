export default {
  path: __dirname + '../',
  title: 'Rendu Projet SQL',
  version: '1.0.0',
  tagIndex: 2,
  ignore: ['/swagger', '/docs', '/', '/uploads/*'],
  common: {
    parameters: {}, // OpenAPI conform parameters that are commonly used
    headers: {}, // OpenAPI confomr headers that are commonly used
  },
  snakeCase: false,
};
