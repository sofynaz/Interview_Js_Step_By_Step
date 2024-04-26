let obj=
{
    name:"naz",
    10:'this is a number of ten',
    true:'this is a boolean num'
}

let dataMap = new Map([
    ['Peter','Khushi'],
    [10,'this is number of ten'],
    [true,'this is a boolean']
])


 dataMap.set({},'I am added an object')
 dataMap.set(()=>{},'I am adding an funtion')
// console.log(obj);
// console.log(obj.10);  this is an error
// console.log(dataMap.get(10));

// console.log(obj.true);
// console.log(dataMap.get(true));

// i want acces with key value pair
// console.log(obj.key);
// console.log(dataMap.keys());

// to add value in object
// obj.city='Noida'
// dataMap.set('city','Noida')
// console.log(obj);
// console.log(dataMap);
// console.log(dataMap.values());
// console.log(dataMap.size);
// console.log(dataMap.delete(true));
// has property

// console.log(dataMap.has(true));

// forEach methods
// dataMap.forEach((v,k)=>{
//     console.log(`this is a value ${v} and this is a key ${k}`);
// })

// for of loop
for(let [k,v] of dataMap){
    // console.log(x[0]);
console.log(k);
console.log(v);
}