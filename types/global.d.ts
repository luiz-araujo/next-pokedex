/**
 * TypeScript will give an error that it doesn't find the module of the
 * imported fonts. To fix it, we have to add a declaration in the .d.ts
 * file of our project with the extension of the font files.
 */
declare module '*.woff';
declare module '*.woff2';
