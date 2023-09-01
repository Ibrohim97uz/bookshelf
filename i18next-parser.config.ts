const config = {
  locales: ["uz", "ru", "en"],
  namespaceSeparator: false,
  keySeparator: false,
  useKeysAsDefaultValue: true,
  output: "src/locales/$LOCALE/$NAMESPACE.json",
  createOldCatalogs: false,
  sort: true,
  lexers: {
    js: ["JavascriptLexer"],
  },
};

export default config;
