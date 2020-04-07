function bubbleSort(array){
    for(let i=0;i< array.length;i++){
        for(let j=0;j<(array.length);j++){
              if(array[j]>array[j+1]){
                  swapElement(array,j,j+1)
              }
        }  
      }return array
  }
  
  function swapElement(array,index1,index2){
      var memo = array[index1]
      array[index1]= array[index2]
      array[index2]= memo
      return array
  }
  
  
  let arr = [3, 7, 19, 4, 2, 9,16,11]
  
  bubbleSort(arr)