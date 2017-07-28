# Mocha 
    as a test runner

# Chai 
    assertion library
    http://chaijs.com/api/bdd/

    const expect = require('chai').expect;
   
    expect(4 + 5).to.be.equal(9);
    expect(4 + 5).to.be.not.equal(10);
    expect(foo).to.be.deep.equal({ bar: 'baz' });

    // true
    expect('everthing').to.be.ok;
    expect(false).to.not.be.ok;

    // typeof
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(foo).to.be.an.instanceof(Foo);

    // include
    expect([1,2,3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

    // empty
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;

    // match
    expect('foobar').to.match(/^foo/);

    const should = require('chai').should();

# Sinon 
    Mock or stub object 
    var callback = sinon.spy(); // create function Stub

# sinon-mongoose
    mocking MongoDB model defined using Mongoose. 
    
    $ npm install mocha chai sinon sinon-mongoose --save-dev

# istanbul
    Coverage
