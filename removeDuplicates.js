//from Sorted Array

var removeDuplicates = function(nums) {
    let numArr = nums;
    let tmpNum = 0;
    let originNumLen = numArr.length;
    for(a of numArr){
        tmpNum = a;
        for(let i=numArr.indexOf(a)+1; i<numArr.length; i++){
            //console.log("目前元素: ",a,"指向元素: ",numArr[i],"要核定元素: ",tmpNum);
            if(numArr[i] == tmpNum){
                numArr.splice(i,1); 
            }
        }
    }
    numArr.sort();
    // for(let j=numArr.length; j < originNumLen; j++){
    //     numArr.push("_");
    // }
    console.log(numArr);
    return numArr;
};

removeDuplicates([1,1,3,2,2]);
