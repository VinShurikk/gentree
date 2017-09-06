import service from './../services/PersonsService'
import { BaseController } from './BaseController'

class PersonController extends BaseController {
}

const controller = new PersonController(service)
export default controller;
