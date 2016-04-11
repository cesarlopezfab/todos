var chai = require('chai');

function Todo() {
  return {
    checked: false,
    toggle: function() {
      this.checked = !this.checked;
    }
  };
}

function Todos() {
  var todos = [];
  return {
    add: function (todo) {
      todos.push(todo);
    },
    get: function (index) {
      return todos[index];
    }
  };
}

describe('Todos', function () {

  it('adds one todo to todos', function () {
    var todos = new Todos();
    var todo = {
      description: 'My first todo'
    };
    todos.add(todo);
    chai.expect(todos.get(0)).to.deep.equal(todo);
  });

  it('adds two todos to todos', function () {
    var todos = new Todos();
    var todo1 = {
      description: 'My first todo'
    };
    var todo2 = {
      description: 'My second todo'
    };
    todos.add(todo1);
    todos.add(todo2);
    chai.expect(todos.get(0)).to.deep.equal(todo1);
    chai.expect(todos.get(1)).to.deep.equal(todo2);
  });

});

describe('Todo', function() {
  it('toggles', function () {
    var todo = new Todo();
    chai.expect(todo.checked).to.be.false;
    todo.toggle();
    chai.expect(todo.checked).to.be.true;
    todo.toggle();
    chai.expect(todo.checked).to.be.false;
  });

});

