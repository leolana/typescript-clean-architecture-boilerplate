  // tslint:disable:no-require-imports

import { AsyncContainerModule } from 'inversify';

const bindings: AsyncContainerModule = new AsyncContainerModule(async (): Promise<any> => {
  await require('./interfaces/rest/controllers/MovieController');
});

export const inversifyConfig: any = {
  bindings,
};
