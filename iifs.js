const sayHello = (function(){
    var message = 'hello'
    function sayHello(){
        console.log(message)
    }
    return sayHello
})()
sayHello()
// console.log(sayHello.toString())

const counter = (function (){
    let count = 0
    return {
        inc : function(){return count +=1},
        get : function(){console.log(count)}
    }
})()

// console.log(counter.toString())
counter.get()
counter.inc()
counter.get()

const makeFuncionArr = function(){
    const arr = []
    for(let i=0; i<=5; i++){
        arr.push(function(){
            console.log(i)
        })
    }
    return arr
}
let funcArr = makeFuncionArr()
funcArr[3]()