

describe('Bubble Sort', function(){
    var array
    beforeAll(function (){
        spyOn('swapElement').and.callThrough()
    })
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it("handles one element", function(){
        expect( bubbleSort([1]) ).toEqual([1])
    })
    it('handles multiple elements', function (){
        expect ( bubbleSort([5,3]) ).toEqual([3,5])
    })
    it('calls the Sort function', function(){
        expect(swapElement.calls.count()).toEqual(5)
    })
  });

