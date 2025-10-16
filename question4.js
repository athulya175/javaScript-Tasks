<<<<<<< HEAD
let inputvalue=document.getElementById("inputvalue")
let btn=document.getElementById("btn")
let unorderd=document.getElementById("unorderd")

btn.addEventListener('click',()=>{
    if(inputvalue.value.trim()=="") return
    let list= document.createElement('li')
    list.className="lists"
    
    list.innerHTML=`
    <span>${inputvalue.value}</span>`
    list.addEventListener("click",()=>list.style.textDecoration="line-through")
    unorderd.appendChild(list)
    inputvalue.value="" 
})
=======
function toSort(str){
  return str.toUpperCase().replace(/\s/g, "").split("").sort()
}
function isAnagrams(str1,str2){
    let result
    let sort1=toSort(str1)
    let sort2=toSort(str2)
    if(sort1.join()===sort2.join()){
        result= true
    }
    else{
        result= false
    }
return result
}
console.log(isAnagrams("hello", "world"))
>>>>>>> cfc3c5c (day-1)
