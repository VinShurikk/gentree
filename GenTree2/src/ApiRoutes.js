import PersonController from './controllers/PersonController'

export default function addApiRoutes(app) {
  app.get('/persons/all', PersonController.getAll);
  app.get('/persons', PersonController.getPage);
  app.get('/person/:id', PersonController.getById);
  app.post('/person', PersonController.insert);
  app.put('/person', PersonController.update);
  app.delete('/person/:id', PersonController.delete);
}