import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildMode, BuildPaths } from "./config/build/types/config";
import path from "path";

// eslint-disable-next-line import/no-anonymous-default-export
export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "./build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    locales: path.resolve(__dirname, "./public", "locales"),
    buildLocales: path.resolve(__dirname, "./build", "locales"),
  };

  const mode: BuildMode = env.mode || "development";
  const port = env.port || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
    apiUrl,
    project: "frontend",
  });
};
