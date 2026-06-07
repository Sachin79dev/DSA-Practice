
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
