import type webpack from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const formatterLoader = {
    enforce: "pre",
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "eslint-loader",
        options: {
          formatter: require("eslint/lib/cli-engine/formatters/stylish"),
        },
      },
    ],
  };

  const cssLoader = buildCssLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
