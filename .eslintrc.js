module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    // 追加ルールがあればここに記述
  }
}