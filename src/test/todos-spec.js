describe('Add todos', function() {
    it('works', function() {
        var todos = new Todos();
        todos.add({
            description: 'My first todo'
        });
        require('chai').expect(todos.get(0)).to.equal({
            description: 'My first todo'
        });
    });
});
