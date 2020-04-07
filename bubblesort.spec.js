describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it("handles one element", function(){
        expect( bubbleSort([1]) ).toEqual([1])
    })
    it('handles multiple elements', function (){
        expect ( bubbleSort([5,3]) ).toEqual([3,5])
    })
  });

