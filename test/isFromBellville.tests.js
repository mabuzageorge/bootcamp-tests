console.log(isFromBellville("CY 243"))

describe('Test my isFromBellville function' , function(){
    it("it should return 'True' when called with 'CY 123' " , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("it should return 'False' when called with 'CJ 123' " , function(){
        assert.equal(isFromBellville('CJ 123'), false);    });

        

});