hoisting()
shouldBeHoisted()


function hoisting(){
    console.log('Iam hoisted')
}

const shouldBeHoisted = function(){
    console.log('Should this be hoisted')
}