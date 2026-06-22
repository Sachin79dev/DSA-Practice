
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

let sum = marks.reduce((n, i) => {
    return (n + i)
}, 0)

let avg = sum/marks.length


console.log(avg);



// Update User age


let user = {
    name: "Ritik",
    age: 20
};

user.name = "Sachin"


console.log(user.name); // Sachin 



// Print User Information


let user = {
    name: "Ritik",
    age: 20,
    city: "Bhopal"
}


console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(`City: ${user.city}`);



// Highest Paid Employee

let employees = {
    aman: 25000,
    ritik: 50000,
    priya: 45000
};

let highestEmployee = "";
let highestSalary = 0;

for (let employee in employees) {
    if (employees[employee] > highestSalary) {
        highestSalary = employees[employee];
        highestEmployee = employee;
    }
}

console.log(highestEmployee);




// Discount Calculator


function calculateDiscount(price) {
    let disCount = (price * 10)/100
    return price - disCount
}

console.log(calculateDiscount(400));





// Dynamic Sum Function


function sum(...numbers) {
    let summed = numbers.reduce((n, i) => {
        return n + i
    }, 0)

    console.log(summed);
}


sum(1, 2, 3, 4, 5, 6, 7) // 28




// Find Adult Users 


let users = [
    { name: "Ritik", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Priya", age: 25 }
];


function getAdults(users) {
    let user = users.filter((n) => {
        return n.age > 18
    })
    console.log(user);
}


getAdults(users)






// Shopping Cart Total

let cart= [
{ name:"Mouse", price:500, qty:2 },
{ name:"Keyboard", price:1000, qty:1 },
{ name:"Monitor", price:10000, qty:1 }
];


function getCartTotal(cart) {
    let bill = cart.reduce((n, i) => {
        let totalItemSum =  i.price * i.qty;
        return totalItemSum + n
        
    }, 0)


    console.log(bill);
    
}

getCartTotal(cart)



// Student Grade Report


let students = [
    {
        name: "Ritik",
        marks: [80, 90, 85]
    },
    {
        name: "Aman",
        marks: [50, 40, 60]
    }
];



function generateReport(students) {
    return students.map((n) => {
        let totalMarks = n.marks.reduce((acc, i) => {
            return (acc + i)
        }, 0);

        let avg = totalMarks / n.marks.length

        let grade;

        if (avg >= 80) {
            grade = 'A'
        } else if (avg >= 60) {
            grade = 'B'
        } else {
            grade = 'c'
        }


        return {
            name: n.name,
            average: avg,
            grade: grade
        }
    })

}


console.log(generateReport(students));





// Find Expensive Products


let prices= [100,250,500,150,700];


let expensive = prices.filter((n) => {
    return n > 300;
})


console.log(expensive); // (2) [500, 700]





// Find the last student in class


let students= ["Aman","Ritik","Priya","Rahul"];

let lastStd = students[students.length - 1];

console.log(lastStd); // Rahul





// Add new product 


let products= ["Laptop","Mouse","Keyboard"];

products.push("Monitor")


console.log(products); // (4) ['Laptop', 'Mouse', 'Keyboard', 'Monitor']








// Remove last Notification


let notifications = [
    "Order Placed",
    "Order Shipped",
    "Order Delivered"
];


notifications.pop()

console.log(notifications); // (2) ['Order Placed', 'Order Shipped']





// check user exist 

let users = ["Aman", "Ritik", "Priya"];


console.log(users.includes("Ritik")); // true






// convert marks to percantage 


let marks = [80, 90, 70];

let prct = marks.map((n) => {
    return `${n}%`
})

console.log(prct); // (3) ['80%', '90%', '70%']





// Count Products


let cart = [
    "Mouse",
    "Keyboard",
    "Monitor",
    "Laptop"
];


console.log(cart.length); // 4




// Student Average 



let marks = [80, 90, 70, 85, 95];


let total = marks.reduce((n, i, l, arr) => {
    return n + i
}, 0)

let avg = total / marks.length


console.log(avg); // 84





// Even Numbers Finder 


let numbers = [1, 2, 3, 4, 5, 6, 7, 8];


let even = numbers.filter((n) => {
    if (n % 2 === 0) {
        return n
    }
})


console.log(even); // (4) [2, 4, 6, 8]




// Product search


let products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];






// Total Revenue 


let sales = [500, 700, 1000, 300];


let revenue = sales.reduce((n, i) => {  
    return n + i
}, 0)


console.log(revenue); // 2500

console.log(products.indexOf("Keyboard")); // 2





// Uppercase Usernames


let users= ["ritik","aman","priya"];


let upper = users.map((n) => {
    return n.toUpperCase()
})


console.log(upeer);




// Find First Adult 


let ages = [12, 15, 17, 19, 22]; 

let adult = ages.find(alt => alt > 18)


console.log(adult); // 19


// Positive Number Check


let nums = [5, 8, 10, 3];


let positive = nums.every((n) => {
    return n > 0
})


console.log(positive); // true




// Most Frequent Number


let numbers = [1, 2, 3, 2, 4, 2, 5, 1, 1, 1];


function mostFreq(numbers) {
    let frequency = {}

    for (let num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1; // setting every time num freq.. in onject 
    }

    // console.log(frequancy);

    let maxCount = 0;
    let mostFrequent;


    for (let num in frequency) {
        if (frequency[num] > maxCount) { // 4 > 0
            maxCount = frequency[num]; // 4
            mostFrequent = Number(num); // 1 // current num
        }
    }

    return mostFrequent
}


console.log(mostFreq(numbers)); // 1






// Second Largest Number 


let nums = [10, 50, 20, 80, 40];


nums.sort((a, b) => a - b)


let secondLargest = nums[nums.length - 2]


console.log(secondLargest);






// Remove Duplicates 

let ids = [1, 2, 2, 3, 4, 4, 5, 5];

let unique = []

for(let id of ids) {
    if(!unique.includes(id)) [
        unique.push(id)
    ]
}

console.log(unique); // (5) [1, 2, 3, 4, 5]







// Find Longest Word 


let words = [
    "JavaScript",
    "HTML",
    "CSS",
    "Programming"
];

let longestWord = "";


for (i = 0; i < words.length; i++) {
    if(words[i].length > longestWord.length) {
        longestWord = words[i]
    }
}

console.log(longestWord); // Programming 




// Rotate Array Right

let nums = [1, 2, 3, 4, 5];


let rotateValue = nums.pop();


nums.unshift(rotateValue);


console.log(nums); // (5) [5, 1, 2, 3, 4]





// best Selling Product 


let sales = [
    "Mouse",
    "Keyboard",
    "Mouse",
    "Laptop",
    "Mouse",
    "Keyboard"
];


let count = {}
let bestSelling = ""
let maxCount = 0;


for(let product of sales) {
    count[product] = (count[product] || 0) + 1;
    
    if(count[product] > maxCount) {
        maxCount = count[product]
        bestSelling = product
    }
}


console.log(bestSelling); // "Mouse"





// Access User Name 


let user = {
    name: "Ritik",
    age: 21,
    city: "Bhopal"
};


console.log(user.name); // Ritik





// Update User Age 

let user = {
    name: "Ritik",
    age: 21
};


user.age = 22


console.log(user.age); // 22





// Add Country 


let user = {
    name: "Ritik",
    city: "Bhopal"
};


user.country = "India"


console.log(user.country); // India





// Delete Property


let user = {
    name: "Ritik",
    age: 21,
    password: "12345"
};

delete user.password


console.log(user); // {name: 'Ritik', age: 21}




// Check Property Exists


let product = {
    name: "Laptop",
    price: 60000
};

let exist = Object.keys(product)

console.log(exist.includes("price")); // true





// Print All Keys 


let car = {
    brand: "BMW",
    model: "X5",
    year: 2025
};



console.log(Object.keys(car)); // (3) ['brand', 'model', 'year']





// Print All Values 

let car = {
    brand: "BMW",
    model: "X5",
    year: 2025
};


console.log(Object.values(car)); // (3) ['BMW', 'X5', 2025]




// Print User Information Dynamically

let user = {
    name: "Ritik",
    age: 21,
    city: "Bhopal"
};

let entry = Object.entries(user)

console.log(entry);


for(let val of entry) {
    console.log(`${val[0]}: ${val[1]}`);
}
