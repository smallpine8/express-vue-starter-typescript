import bodyParser from 'body-parser';
import api from './api';

export default function(app: any) {
  app.use(bodyParser.json());
  app.use('/api', api);
}