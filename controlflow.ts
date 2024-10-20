//if else
let taxrate: number;
let itemCost = 1000;

if (itemCost > 0 && itemCost <= 500) {
    taxrate = 5;  
} else if (itemCost > 500 && itemCost <= 750) {
    taxrate = 10; 
} else {
    taxrate = 15; 
}
console.log(`You got ${taxrate}% taxrate. `)

//switch case

let Status_Record: string = 'In Process';

switch (Status_Record) {
    case 'Submitted':
        console.log('Record Submitted');
        break;
    case 'In Process':
        console.log('Record is in Process');
        break;
    case 'Deleted':
        console.log('Record is Deleted');
        break;
}

//for

for (let i = 2; i < 20; i+=2) {
    console.log(i);
}

//while

let counter = 5;

while (counter < 30) {
    console.log(counter);
    counter+=5;
}

//do while
let i = 10;

do {
    console.log(i);
    i+=10
} while (i < 110);

