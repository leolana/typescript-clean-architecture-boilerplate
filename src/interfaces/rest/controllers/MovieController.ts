import * as express from 'express';
import { controller, httpGet, httpPost, response } from 'inversify-express-utils';

@controller('/api/v1/movies')
export class MovieController {
  @httpGet('/')
  public async get(@response() res: express.Response) {
    return [
      { id: 1, title: 'Filme 1' },
      { id: 2, title: 'Filme 2' },
    ];
  }

  @httpPost('/')
  public async post(@response() res: express.Response) {
    return [
      { id: 1, title: 'Filme 1' },
      { id: 2, title: 'Filme 2' },
    ];
  }
}
