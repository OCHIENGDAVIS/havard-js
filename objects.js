const o = new Object()
o.firstName = 'davis'
o.lastName = "Ochieng"
o.isTeaching = true
o.greet = function (){console.log('Hi')}

const o2 = {}
o2.firstName = 'Brian'
o2['lastName'] = 'Ondigo'
const o3 = {
    1 : 'testing',
    firstName : 'James',
    lastName : 'Obuhuma',
    isTeaching : true,
    greet : function(){console.log('Hi')},
    address : {
        street : 'OuterRing',
        appartment : 'Royal Suites',
        floor : 4,
        door : 11

    }
}
console.log(o3.address.door)
console.log(o3['firstName'])
console.log(o3[1])