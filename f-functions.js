const arr = [1,2,3,4]
let add = ()=>{
    let newArr = arr.map(function(num){
        return num+1
    })
    return newArr
}
console.log(add())
 add = (x, y)=>{
    return x + y
}
console.log(arr.reduce(add))