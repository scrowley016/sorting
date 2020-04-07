function bubbleSort(array){
    let sortArr= []
    for(i=0;i< array.length;i++){
        let ele1=array[i]
        let ele2=array[i+1]
        if (i === array.length-1){
            sortArr.unshift(ele1)
            let newArray = array.slice(-1)
            bubbleSort(newArray)
        }else{
            if(ele1<ele2){
                continue
            }
            else if(ele1>ele2){
                swapElement(array,i,i+1)
            }
        }
    }
    return sortArr
}

function swapElement(array,index1,index2){
    var memo = array[index1]
    array[index1]= array[index2]
    array[index2]= memo
    return array
}