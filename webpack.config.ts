import webpack from 'webpack';
import {buildWebpackConfig} from "./config/buildWebpackConfig";
import {BuildEnv, BuildMode, BuildPaths} from "./config/types/config";
import path from "path";

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, './build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }

    const mode: BuildMode = env.mode || 'development';
    const port = env.port || 3000;

    const isDev = mode === 'development';

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });
};