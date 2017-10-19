import PersonController from './controllers/PersonController'

export default function addApiRoutes(app) {
  app.get('/persons/all', PersonController.getAll.bind(PersonController));
  app.get('/persons', PersonController.getPage.bind(PersonController));
  app.get('/person/:id', PersonController.getById.bind(PersonController));
  app.post('/person', PersonController.insert.bind(PersonController));
  app.put('/person', PersonController.update.bind(PersonController));
  app.delete('/person/:id', PersonController.delete.bind(PersonController));
}