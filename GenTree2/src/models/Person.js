import FieldModel from './FieldModel';
import FieldType from './FieldType';

const PersonModel = {
  firstName: new FieldModel("firstname", "First Name", FieldType.TEXT),
  lastName: new FieldModel("lasname", "Last Name", FieldType.TEXT)
}

export default PersonModel;