
// counting the vowels inside given string using switch/case condtions


let str = prompt("Enter a String")
let consonent = 0;
let vowels = 0;

for(let i = 0; i<str.length; i++) {
    ch = str.charAt(i)

    switch(ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u': {
            vowels++
            break
        }

        default : {
            consonent++ 
        }
    }
}

console.log(`Consonent are ${vowels}`);
console.log(`Vowels are ${vowels}`);



// counting the vowels inside given string using if/else conditions


let str = prompt("Enter a String")
let cons = 0;
let vowels = 0;

for(let i = 0; i<str.length; i++) {
    ch = str.charAt(i).toLowerCase()

    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u' ) {
        vowels++
    } else {
        cons++
    }
}
console.log(`Vowels are ${vowels}`);
console.log(`Consonant are ${cons}`);





// calcultaing the area of circle, rectangle and triangle using switch case constioning 

// circle -- (A=πr2) // radius of circle = r.
// rectangle -- (A=lw) // length = l, width = w.
// triangle -- (A=1/2​bh) // base = b, height = h.


let whichArea = Number(prompt())


switch(whichArea) {
    case 1 : {
        const pi = 3.14;
        let radius = Number(prompt("Enter radius of circle"));
        console.log("Area of Circle =", pi*(radius*radius));
        break;
    }

    case 2 : {
        let length = Number(prompt("Enter length of rectangle"));
        let width = Number(prompt("Enter width of rectangle"));
        console.log("Area of Rectangle =", length*width);
        break;
    }

    case 3 : {
        
        let base = Number(prompt("Enter base of triangle"));
        let height = Number(prompt("Enter height of triangle"));
        console.log("Area of Triangle =", 0.5*(base*height));
        break;
    }

    default: console.log("Invalid Number");  
}





// find the greatest number among three numbers

function findGreatest(a, b, c) {
    // Write your logic here
    if(a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

findGreatest(3, 4, 5)



// Print Day name from Day number 


function printDayName(day) {
    //write your code here
    switch (day) {
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
        case 7:
            return 'Sunday';

        default:
            return 'Invalid day number'
    }
}

console.log(printDayName(3)); // Wednesday



// Check if a character is a Vowel or Consonant 



function checkChar(ch) {
    //write your code here
    ch = ch.toLowerCase();

    switch (ch) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return 'Vowel';
        default:
            return 'Consonant';
    }
}


console.log(checkChar('A'));





// Print natural numbers from N to 1

function printNumbers(n) {
   //Write your code here
   let result = [];
   for(let i = n; i >= 1; i--) {
      result.push(i);
   }
   console.log(result.join(' '));
}


printNumbers(5)




// Print natural numbers from N to 1

function printNumbers(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        result.push(i);
    }

    return result;
}


let ans = printNumbers(5);
console.log(ans.join(' '));





// Sum upto n term 


function sumUpToN(n) {
    let sum = 0;
    
    for(i = 1; i <= n; i++){
        sum += i
    }

    return sum
}

let sumed = sumUpToN(5)

console.log(sumed);



// factorial of a number 

function factorial(n) {
    let fact = 1;

    for(i = 1; i <= n; i++) {
        fact = fact *= i;
    }
    
    return fact
}

let facts = factorial(4)

console.log(facts);



// factorial of a number that does not have remainder and print in string 

function factorial(n) {
    let result = [];

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            result.push(i);
        }
    }

    console.log(result.join(' '));

}


factorial(6)





// sum of even and odd numbers in a range and swaping them 

function sumEvenOddInRange(start, end) {
    if (start > end) {
        [start, end] = [end, start];
    }

    let evenSum = 0;
    let oddSum = 0;

    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenSum += i;
        } else {
            oddSum += i;
        }
    }

    return [evenSum, oddSum];

    let ans = sumEvenOddInRange(start, end);

    for (let x of ans) {
        console.log(x);
    }
}





// find expensive products 


let prices= [100,250,500,150,700];

let exp = prices.filter((n) => {
    return n > 300
})

console.log(exp);




// Student average 

let marks= [80,90,70,85,95]; 

let avg = marks.reduce((n, i) => {
    return (n + i)
}, 0)


console.log(avg/marks.length);
