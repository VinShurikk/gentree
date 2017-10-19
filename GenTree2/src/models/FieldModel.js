import FormType from './FieldType'

export default class FieldModel {

  constructor(fieldName, displayName, type, choise, value) {
    this.name = fieldName || "";
    this.displayName = displayName || "";
    this.type = type || FormType.TEXT;
    this.choise = choise || {};
    this.value = value;
  }

}
