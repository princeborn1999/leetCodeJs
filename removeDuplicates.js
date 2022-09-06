
var removeDuplicates = function(nums) {
    let numArr = nums;
    let tmp = 0;
    for(a of numArr){
        tmp = a;
        for(let i=numArr.indexOf(a); i<numArr.length; i++){
            if(i === tmp){
                numArr.splice(i,1,"_");
                console.log(i,tmp);
                //用count寫好了
            }
        }
    }
    console.log(numArr);
};

removeDuplicates([1,1,2]);