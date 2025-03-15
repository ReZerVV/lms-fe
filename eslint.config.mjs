import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
import eslintPluginPrettier from "eslint-plugin-prettier";
import reactRefresh from "eslint-plugin-react-refresh";
import importPlugin from "eslint-plugin-import";

export default [
    {
        ignores: [
            "node_modules",
            ".next/",
            ".husky/",
            "coverage",
            "next-env.d.ts",
            "next.config.js",
            "jest.setup.js",
            "jest.config.js",
            "serviceWorker.ts",
            "react-app-env.d.ts",
            "scripts/",
            "build/",
            ".babelrc",
            "vite-env.d.ts",
            "vite.config.ts",
            ".eslintrc.cjs",
            "vite.config.ts",
            "eslint.config.js",
            "vite-env.d.ts",
            "dist/",
            "**/dev/*",
            "**/dist/*",
            "**/tests/*",
            "vite.config.ts",
            "tsconfig.json",
            "next.config.mjs"
        ]
    },
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                ...globals.es2021
            },
            parser: tsParser,
            parserOptions: {
                tsconfigRootDir: ".",
                project: ["tsconfig.json"]
            }
        },

        plugins: {
            js: pluginJs,
            "@typescript-eslint": tseslint,
            react: pluginReact,
            prettier: eslintPluginPrettier,
            "react-refresh": reactRefresh,
            import: importPlugin
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "@typescript-eslint/explicit-function-return-type": "off",
            "@typescript-eslint/no-confusing-void-expression": "off",
            "@typescript-eslint/no-explicit-any": "off",
            "@typescript-eslint/no-floating-promises": "off",
            "no-console": "warn",
            "no-unused-vars": "warn",
            "@typescript-eslint/no-unused-vars": "warn",
            "@typescript-eslint/consistent-type-imports": "off",
            "@typescript-eslint/strict-boolean-expressions": "off",
            "react/jsx-curly-brace-presence": [
                "error",
                { props: "never", children: "never" }
            ],
            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    selector: "variable",
                    format: [
                        "camelCase",
                        "PascalCase",
                        "snake_case",
                        "UPPER_CASE"
                    ]
                }
            ],
            "no-restricted-imports": [
                "error",
                {
                    patterns: [
                        {
                            group: ["modules/*/*"],
                            message:
                                "Please import only from the index file of the module."
                        }
                    ]
                }
            ],
            "react-refresh/only-export-components": [
                "warn",
                { allowConstantExport: true }
            ],
            "@tanstack/query/no-rest-destructuring": "off",
            "prettier/prettier": "warn",
            "no-undef": "error"
        }
    }
];
