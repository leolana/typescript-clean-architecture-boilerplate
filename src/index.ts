// tslint:disable:no-console

import 'reflect-metadata';

import { Application } from 'express';
import { Container } from 'inversify';
import { InversifyExpressServer } from 'inversify-express-utils';
import { inversifyConfig } from './inversifyConfig';

(async (): Promise<any> => {
  const port: number = 3000;
  const container: Container = new Container();
  await container.loadAsync(inversifyConfig.bindings);
  const app: InversifyExpressServer = new InversifyExpressServer(container);
  const server: Application = app.build();

  server.listen(port, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
  });
})();
