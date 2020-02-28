function makeHelloFunction(){
    const message = 'hello'
    function sayHello(){
        console.log(message)
    }
    return sayHello
}
const sayHello = makeHelloFunction()
console.log(message)
sayHello()