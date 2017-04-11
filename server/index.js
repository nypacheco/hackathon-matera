import express from 'express';
import path from 'path';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev.js';
import bodyParser from 'body-parser';
import auth from './routes/auth';
import users from './routes/users';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
}));

app.use(webpackHotMiddleware(compiler));

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3000, () => console.log("Running on port 3000"));
