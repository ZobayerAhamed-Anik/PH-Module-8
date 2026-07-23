let price = 500;
// let isLeader = false;
let isLeader = true;

if(isLeader){
    price = 0;
    console.log('Welcome, Boss.')
}
else{
    price += 100;
}

console.log('For members, Price is ' + price + ' taka');

// Using ternary if-else operator....
price = isLeader ? 0 : price + 100;
console.log('For commoners, Price is ' + price + ' taka');