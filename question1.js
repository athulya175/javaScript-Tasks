<<<<<<< HEAD

function arrayDoubled(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
       result.push(arr[i]*2)
    }
    return result
}


function myMap(arr,callback){
    console.log("Array doubled")
   console.log( callback(arr))
}

myMap([1,2,3,4],arrayDoubled)

//Filter
function evenNumbers(arr){
    let result=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            result.push(arr[i])
        }
    }
    return result
}
function myFilter(arr,callback){
    console.log("Even numbers")
    console.log(callback(arr))
}
myFilter([1,2,3,4,5,6,7,8,10],evenNumbers)

// Reduce
function sumFind(arr,initialvalue){
    let sum=0
    let startindex=arr.indexOf(initialvalue)
    for(let i=startindex;i<arr.length;i++){
        sum=sum+arr[i]
    }
    return sum
}
function myReduce(arr,callback,initialvalue){
    console.log(`Sum of the array(starts from ${initialvalue})`)
    console.log(callback(arr,initialvalue))
}

myReduce([1,2,3,4,5,6,7],sumFind,3)
=======
function isPrime(num) {
  let result;
  if(num==0||num==1){
    result="Enter a valid number(0 and 1 are not valid)"
  }
  for (let i = 2; i <= num - 1; i++) {
    if (num % i == 0) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
}
console.log(isPrime(29));
>>>>>>> cfc3c5c (day-1)
