console.log(greet("Maloi"))


describe('Test my greet function' , function(){
    it("it should return 'Hello, Maloi' when called with 'Maloi' " , function(){
        assert.equal("Hello, Maloi", greet("Maloi"), "this should be true"); 
    });
    it("it should return 'Hello, Tot' when called with 'Tot' " , function(){
        assert.equal("Hello, Tot", greet("Tot"), "this should be true"); 
    });

});
