var chai = require('chai');

describe('Add todos', function () {
  function Todos() {
    var todo;
    return {
      add: function (theTodo) {
        todo = theTodo;
      },
      get: function () {
        return todo;
      }
    };
  }

  it('adds a todo', function () {
    var todos = new Todos();
    var todo = {
      description: 'My first todo'
    };
    todos.add(todo);
    chai.expect(todos.get(0)).to.deep.equal(todo);
  });
});
