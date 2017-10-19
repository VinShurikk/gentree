import FieldModel from './FieldModel';
import FieldType from './FieldType';

export function add(model) {
  for (let key in model) {
    console.log(key + '=>' + model[key]);
  }
  console.log("PersonController add person:"+model);
};

const PersonModel = {
  firstname: new FieldModel("firstname", "First Name", FieldType.TEXT),
  middlename: new FieldModel("middlename", "Middle Name(s)", FieldType.TEXT),
  lastname: new FieldModel("lastname", "Last Name", FieldType.TEXT),
  birthdate: new FieldModel("birthdate", "Bith Date", FieldType.DATE, null, '19/10/2017'),
  deathdate: new FieldModel("deathdate", "Death Date", FieldType.DATE),
  description: new FieldModel("description", "Description", FieldType.TEXTAREA)
}

export default PersonModel;