import FormType from './FieldType'

export default class FieldModel {

  constructor(fieldName, displayName, type, choise) {
    this.fieldName = fieldName || "";
    this.displayName = displayName || "";
    this.type = type || FormType.TEXT;
    this.choise = choise || {};
  }

}
