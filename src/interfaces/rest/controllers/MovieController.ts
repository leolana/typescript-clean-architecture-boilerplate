import * as express from 'express';
import { controller, httpGet, httpPost, requestBody, response } from 'inversify-express-utils';
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status';

import { Movie } from '../../../domain/entities/movie';

@controller('/api/v1/movies')
export class MovieController {
  @httpGet('/')
  public async get(@response() res: express.Response) {
    try {
      return [
        { id: 1, title: 'Filme 1' },
        { id: 2, title: 'Filme 2' },
      ];
    } catch (e) {
      res.status(INTERNAL_SERVER_ERROR);
      res.send(e.message);
    }
  }

  @httpPost('/')
  public async post(@response() res: express.Response, @requestBody() newMovie: Movie) {
    if (!(typeof newMovie.title === 'string') || isNaN(newMovie.year)) {
      res.status(BAD_REQUEST);
      res.send('Invalid Movie!');
    }
    try {
      return { id: 2, title: 'Filme 2' };
    } catch (e) {
      res.status(INTERNAL_SERVER_ERROR);
      res.send(e.message);
    }
  }
}
