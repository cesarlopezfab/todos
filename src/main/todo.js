export default class Todo {
  constructor(description) {
    this.description = description;
    this.checked = false;
  }
  toggle() {
    this.checked = ! this.checked;
  }
}