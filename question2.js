<<<<<<< HEAD

let word="CAT"
let result=[]
let resultSlice=[]
for(let i=0;i<word.length;i++){
    result =result+word[i]
    console.log(result)
    if(result.length==word.length){
        for(let i=1;i<word.length;i++){
            resultSlice=result.slice(i)
            console.log(resultSlice)
        }
    }
}
  


=======
function wordCount(word) {
  let splitedword = word.split(" ");
  let count = splitedword.length;
  for (i = 0; i <= splitedword.length - 1; i++) {
    if (splitedword[i] === "") {
      count = count - 1;
    }
  }
  return count;
}
console.log(wordCount("Programming is fun!"));
>>>>>>> cfc3c5c (day-1)
