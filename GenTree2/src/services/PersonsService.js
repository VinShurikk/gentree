import { DataService } from './DataService'

class PersonsService extends DataService {
  constructor() {
    super("persons")
  }
}
const service = new PersonsService();
export default service;
