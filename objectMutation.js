const o = {
    a : 'a',
    b : 'b',

}
const o2 = o

o.a = 'new value'
o2.b  ='some new value for b'

// console.log(o2.a)
// console.log(o.b)
const o4  = Object.assign({}, {firstName:'Mike', lastName:'onyoo'}, )
// console.log(o4.firstName)

function deepCopy(obj){
    // Check if the values are objects
    // id so, copy that object (deep copy)
    // else just return that value
    const keys = Object.keys(obj)
    for(let i=0; i< keys.length; i++){
        if(typeof obj[keys[i]] === 'object'){
            deepCopy(obj[keys[i]])
        }
        else{
            return keys[i]
        }
    }
    return Object.assign({}, obj)
}
const arr = ['value2', 'valu3', 'valu4']
arr.push('value1')
console.log(arr)
console.log(arr.__proto__)