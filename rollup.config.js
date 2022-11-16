import babel from "@rollup/plugin-babel";
// import buble from "@rollup/plugin-buble";
import common from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import cssnano from "cssnano";
import { resolve as pathResolve } from "path";
import postCSSModules from "postcss-modules";
import analyze from "rollup-plugin-analyzer";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import PeerDepsExternalPlugin from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json" assert { type: "json" };

const banner = `/*
 * ${pkg.name}
 * ${pkg.description}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

export default {
  input: "src/react-images.ts",
  output: [
    {
      banner,
      exports: "named",
      file: pkg.main,
      format: "cjs",
      strict: true,
    },
    {
      banner,
      exports: "named",
      file: pkg.module,
      format: "es",
      strict: true,
    },
    {
      banner,
      exports: "named",
      file: pkg.umd,
      format: "umd",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
      name: "ReactImages",
      strict: true,
    },
  ],
  plugins: [
    PeerDepsExternalPlugin(),
    del({ targets: "dist/*" }),
    typescript(),
    babel({
      babelHelpers: "runtime",
      extensions: ["tsx", "ts"],
      plugins: [
        "@babel/plugin-transform-runtime",
        "@babel/plugin-proposal-optional-chaining",
      ],
    }),
    postcss({
      extract: pathResolve("dist/react-images.css"),
      modules: true,
      syntax: "postcss-scss",
      plugins: [
        cssnano({
          preset: "default",
        }),
        postCSSModules({
          scopeBehaviour: "local",
        }),
      ],
    }),
    common(),
    resolve(),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    }),
    analyze({
      summaryOnly: true,
    }),
    copy({
      targets: [{ dest: "dist", src: "README.md" }],
    }),
  ],
};
