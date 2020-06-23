// apiサーバーのプロセス実行に使用するファイル
// 本番環境のプロセスを半永久的にデーモン化するforeverとかと組み合わせて使用

import { resolve } from 'path';
import historyApiFallback from 'connect-history-api-fallback';
import express from 'express';
import configureAPI from './config';
const app: express.Express = express();

const { PORT = 3000 } = process.env;

// API
configureAPI(app);

// UI
const publicPath = resolve(__dirname, '../client/dist');
const staticConf = { maxAge: '1y', etag: false };

app.use(express.static(publicPath, staticConf));
app.use('/', historyApiFallback());

app.get(/.*/, (req: express.Request, res: express.Response) => {
  res.sendFile(resolve('dist/index.html'))
})

// Go
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));