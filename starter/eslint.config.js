export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        window: "readonly",
        Math: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly"
      }
    },
    rules: {
      "no-var": "error",
      "no-unused-vars": "error",
      "semi": ["error", "always"],
      "eqeqeq": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }]
    }
  }
];
