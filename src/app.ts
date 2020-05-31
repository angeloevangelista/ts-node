import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import 'dotenv/config';

import routes from './routes';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  private database() {
    mongoose.connect(process.env.MONGOOSE_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  private routes() {
    this.server.use(routes);
  }
}

export default new App().server;
