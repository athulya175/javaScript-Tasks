<<<<<<< HEAD
let unorder=document.getElementById("unorder")
fetch('https://randomuser.me/api/?results=5')
.then(response=>response.json())
.then(data=>{
    console.log(data.results)
    data.results.forEach(element => {
        let list=document.createElement('li')
        list.innerHTML=`
        <img src=${element.picture.medium}></img>
        <p> Name: ${element.name.title} ${element.name.first} ${element.name.last}</p>
        <span>email: ${element.email}</span>`
        unorder.appendChild(list)
    });
    
})
=======
function sumOfDivisible(arr){
    let sum=0
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]%3==0){
            sum=sum+arr[i]
        }
    }
    return sum
}
console.log(sumOfDivisible([15, 25, 35, 45,55]))
>>>>>>> cfc3c5c (day-1)
