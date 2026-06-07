
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
