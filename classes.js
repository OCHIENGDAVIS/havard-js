class Set{
    constructor(arr){
        this.arr = arr
    }
    add(value){
        if(!this.has(value)){
            this.arr.push(value)
        }

    }
    delete(value){
        this.arr.filter(x => x!==value)
    }
    has(value){
        return this.arr.includes(value)
    }
    get sizs(){
        return this.arr.length
    }

}
const s = new Set([1,2,3,4,5])
class MySet extends Set{
    constructor(arr){
        super(arr)
        this.originalArray  = arr
    }
    add(val){
        super.add(val)
        console.log(`Added ${val} to the set`)
    }
    toArray(){
        return Array.from(this)
    }
    reset(){
        return new MySet(this.originalArray)
    }
}
