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





// Employee Salary Increase


let employee = {
    name: "Aman",
    salary: 50000
};


employee.salary = employee.salary + (employee.salary*10)/100

console.log(employee); // {name: 'Aman', salary: 55000}





// Nested Object Access


let user = {
    name: "Ritik",
    address: {
        city: "Bhopal",
        state: "MP"
    }
};


console.log(user.address.city); // Bhopal





// Object Destructuring


let student = {
    name: "Priya",
    age: 20,
    course: "BCA"
};



let {name, age} = student

console.log(name); // Priya
console.log(age); // 20



// Rename During Destructuring

let student = {
    name: "Priya",
    age: 20
};


let {name: studentName, age: studentAge } = student


console.log(studentName);
console.log(studentAge);




// Merge User and Address

let user = {
    name: "Ritik",
    age: 21
};
let address = {
    city: "Bhopal",
    state: "MP"
};


let userInfo = {...user, ...address}

console.log(userInfo); // {name: 'Ritik', age: 21, city: 'Bhopal', state: 'MP'}





// Count Object Properties


let user = {
    name: "Ritik",
    age: 21,
    city: "Bhopal",
    country: "India"
};

let userProp = Object.keys(user)


console.log(userProp.length); // 4





//  Highest Paid Employee

let employees = {
    aman: 25000,
    ritik: 50000,
    priya: 45000
};

let payble = Object.entries(employees)


let highestPaid = "";
let highestSalary = 0;

for (let [name, salary] of payble) {
    if (salary > highestSalary) {
        highestSalary = salary;
        highestPaid = name;
    }
}


console.log("Highest Paid Employee:", highestPaid); // Highest Paid Employee: ritik






// Most Used Programming Languag


let votes = {
    JavaScript: 25,
    Python: 30,
    Java: 15,
    Cpp: 10
};


let mostChoosen = Object.entries(votes);


let highestVotes = 0;
let mostVotedLanguage = "";

for(let [name, votes] of mostChoosen) {
    if(votes > highestVotes) {
        highestVotes = votes;
        mostVotedLanguage = name;
    }
}

console.log(`Most Voted Language is: ${mostVotedLanguage} which have ${highestVotes} votes.`); // Most Voted Language is: Python which have 30 votes.






// Reverse Key Value


let countries = {
    India: "Delhi",
    Japan: "Tokyo",
    France: "Paris"
};


let reverseObj = {}

let reversedArr = Object.entries(countries)


function reversedObj(key, value) {
    reverseObj[value] = key
}

for (let val of reversedArr) {
    reversedObj(val[0], val[1])
}

console.log(reverseObj); // {Delhi: 'India', Tokyo: 'Japan', Paris: 'France'}




// Student Marks Summary 


let marks = {
    math: 90,
    science: 80,
    english: 85
};


let totalMarks = Object.values(marks).reduce((n, i) => {
    return n + i
}, 0)


console.log(totalMarks); // 255






// Find Missing Property


let user = {
    name: "Ritik",
    age: 21
};



if (Object.hasOwn(user, "email")) {
    console.log("Email Exist!");
} else {
    user.email = "Not Provided"
}

console.log(user); // {name: 'Ritik', age: 21, email: 'Not Provided'}






//  Product Inventory Analyzer


let inventory = {
    mouse: 25,
    keyboard: 10,
    monitor: 5,
    laptop: 2
};


// Total items in stock.

let totalItems = Object.values(inventory).reduce((n, i) => {
    return n + i;
}, 0)


console.log(totalItems); // 42

// Total items in stock.

// ----------------------------------------------------------

// Product with highest and Lowest stock.

let items = Object.entries(inventory);

let maxStock = 0;
let maxStockItem = ""
let minStockItem = ""

for(let [name, stock] of items) {
    if(stock > maxStock) {
        maxStock = stock;
        maxStockItem = name;
    }
    if (stock < maxStock) {
        maxStock = stock;
        minStockItem = name;
    }
}


console.log(maxStockItem); // mouse
console.log(minStockItem);


// Product with highest and Lowest stock.





// Greeting Function


function greet(name) {
    console.log(`Hello ${name}`);
}


greet("Ritik"); // Hello Ritik





// Add Two Numbers


function add(a, b) {
    return a + b;
}


console.log(add(10, 20)); // 30





// Find Square


function square(num) {
    return num*num
}

console.log(square(5)); // 25





// Check Even Number


function isEven(num) {
    if(num%2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false





// Default Username


function greet(name="Guest") {
    return `Hello ${name}`
}

console.log(greet()); // Hello Guest
console.log(greet("Sachin")); // Hello Sachin





// Celsius to Fahrenheit


function convertTemp(celsius) {
    return (celsius*9/5)+32
}

console.log(convertTemp(50)); // 122





// Arrow Function Practice


let multiply = (a, b) => {
    return a * b;
}


console.log(multiply(2, 3)); // 6






// Discount Calculator


function calculateDiscount(price) {
    return price = price - ((price*10)/100)
}


console.log(calculateDiscount(500)); // 450






// Largest of Three Numbers



function findLargest(a, b, c) {
    if (a > b && a > c) {
        return a
    } else if (b > a && b > c) {
        return b
    } else if (c > b && c > a) {
        return c
    }
}

let largest = findLargest(10, 20, 15)


console.log(`Largest Number is: ${largest}`); // Largest Number is: 20






//  Reverse String

function reverseString(str) {
    let result = []
    for (let i = 0; i < str.length; i++) {
        result.unshift(str[i])
    }

    return result.join("")
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("world")); // dlrow






// Count Vowels


function countVowels(str) {
    let count = 0;


    for (let i = 0; i < str.length; i++) {
        if("a" == str[i] || "e" == str[i] || "i" == str[i] || "o" == str[i] || "u" == str[i]) {
            count++;
        }
    }

    return count;
}


console.log(countVowels("javascript")); // 3
console.log(countVowels("python")); // 1





// Generate Username

function generateUsername(name) {
    let username = name.split(" ")

    let result = username.join("_")

    return result.toLowerCase()

}


console.log(generateUsername("Sachin Singh")); // sachin_singh
console.log(generateUsername("Ritik Kumar")); // ritik_kumar






// Dynamic Sum Function

function sum(...numbers) {
    let num = numbers.reduce((n, i) => {
        return n + i
    }, 0)


    return num
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45






//  Login Validation 


function login(username, password) {
    if (username === "admin" && password === "1234") {
        return "Login Successful";
    } else {
        return "Invalid Credentials"
    }
}


console.log(login("admin", "1234")); // Login Successful
console.log(login("Sachin", "1234")); // Invalid Credentials






//  Factorial Function 


function factorial(n) {
    let fact = 1;
    for(let i = 1; i <= n; i++) {
        fact *= i; 
    }

    return fact
    
}


console.log(factorial(5)); // 120 







// Palindrome Checker

function isPalindrome(str) {
    let pali = str.split("").reverse()

    let reverse = pali.join("")
    
    if(str == reverse) {
        return true
    } else {
        return false
    }
}


console.log(isPalindrome("sachin")); // false
console.log(isPalindrome("madam")); // true





//  Password Strength Checker


function checkPassword(password) {
    // Check length
    if (password.length < 8) {
        return "Weak";
    }

    // Check for at least one number
    let hasNumber = false;


    for (let char of password) {
        if (char >= '0' && char <= '9') {
            hasNumber = true;
            break;
        } 
    }
    
    return hasNumber? "Strong" : "Weak"

}


console.log(checkPassword("sachin")); // Weak 
console.log(checkPassword("sachin123")); // Strong






// Function Returning Function


function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier
    }
}

let double = makeMultiplier(2);

console.log(double(10)); // 20


double = makeMultiplier(3);

console.log(double(10)); // 30




// Callback Function 

function welcomeUser(name) {
    return `Welcome ${name}`
}


function processUser(name, callback) {
    console.log("Processing User...");
    return callback(name)
}



console.log(processUser("Sachin", welcomeUser)); 

// Processing User... 
// Welcome Sachin




// Shopping Bill Generator


// Input : 
// [
//     { name: "Mouse", price: 500 },
//     { name: "Keyboard", price: 1000 },
//     { name: "Monitor", price: 10000 }
// ]


// Output : 

// Total:11500


let itemsObj = [
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1000 },
    { name: "Monitor", price: 10000 }
]



function generateBill(items) {
    let total = 0;

    for (let val of items) {
        total = total + val.price
    }

    console.log(`Total: ${total}`); // Total: 11500

}

generateBill(itemsObj)





// Find Adult Users


let users = [
    { name: "Ritik", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Priya", age: 25 }
];



function adult(age) {
    for(let val of age) {
        if(val.age >= 18) {
            return `${val.name} is Adult`
        } else {
            return `${val.name} is not Adult`
        }
    }
}


console.log(adult(users)); // Ritik is Adult







// Product Names Extractor

let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 }
];


function getProductNames(names) {
    let productNames = []
    for(let val of names) {
        productNames.push(val.name)
    }

    return productNames
}



console.log(getProductNames(products)); // (2) ['Laptop', 'Mouse']







//  Find User By Name using Callback


let users = [
    { name: "Ritik" },
    { name: "Aman" },
    { name: "Priya" }
];



function findUser(users, username) {
    return users.find(user => user.name === username)
}


console.log(findUser(users, "Aman")); // {name: 'Aman'}
console.log(findUser(users, "Ritik")); // {name: 'Ritik'}






// Total Marks

let students = [
    { name: "Ritik", marks: 80 },
    { name: "Aman", marks: 90 },
    { name: "Priya", marks: 70 }
];

function getTotalMarks(students) {
    let totalMarks = 0;

    for (let std of students) {
        totalMarks += std.marks
    }

    return totalMarks
}

console.log(getTotalMarks(students)); // 240







// Available Products


let products = [
    { name: "Mouse", stock: 10 },
    { name: "Keyboard", stock: 0 },
    { name: "Monitor", stock: 5 }
];


function avlProducts(products) {
    return products.filter(n => n.stock > 0)
}


console.log(avlProducts(products));

// Output
// [
//     { name: "Mouse", stock: 10 },
//     { name: "Monitor", stock: 5 }
// ];







//  Add New Student

function addStudent(students, student) {
    return students.push({ student })
}

let students = []

addStudent(students, { name: "Sachin", marks: 90 });
addStudent(students, { name: "Priyanka", marks: 80 });
addStudent(students, { name: "Deep", marks: 70 });

console.log(students);


// Output 

// [
//     { name: "Sachin", marks: 90 },
//     { name: "Priyanka", marks: 80 },
//     { name: "Deep", marks: 70 }
// ]






// Count Premium Products


products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Mouse", price: 500 }
];

function premiumProducts(products) {
    let count = 0
    let premProducts =  products.filter((n) => n.price > 10000)

    return count = premProducts.length
}

console.log(premiumProducts(products)); // 2







// Shopping Cart Total 


let cart = [
    { name: "Mouse", price: 500, qty: 2 },
    { name: "Keyboard", price: 1000, qty: 1 },
    { name: "Monitor", price: 10000, qty: 1 }
];



function getCartTotal(cart) {
    return cart.reduce((n, i) => {
        return n + (i.price * i.qty);
    }, 0)
}

console.log(getCartTotal(cart)); // 12000






// Inventory Search

let inventory = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" },
    { id: 3, name: "Monitor" }
];



function findProductById(userId) {
    return inventory.find((n) => n.id === userId)
}


console.log(findProductById(1)); // {id: 1, name: 'Laptop'}
console.log(findProductById(2)); // {id: 2, name: 'Mouse'}







// Usernames Generator

let users = [
    { name: "Ritik Rajput" },
    { name: "Aman Gupta" }
];


function userName(users) {
    let username = users.map((n, i) => {
        return n.name.split(" ").join("_").toLowerCase()
    })

    return username
}


console.log(userName(users)); // (2) ['ritik_rajput', 'aman_gupta']






// Highest Scoring Student



let students = [
    { name: "Ritik", marks: 85 },
    { name: "Aman", marks: 95 },
    { name: "Priya", marks: 75 }
];



function highestScorer(students) {
    let scorer = students[0]
    for(let std of students) {
        if(std.marks > scorer.marks) {
            scorer = std
        }
    }

    return scorer
}


console.log(highestScorer(students)); // {name: 'Aman', marks: 95}







// Student Average Generator


let students = [
    { name: "Ritik", marks: [80, 90, 85] },
    { name: "Aman", marks: [70, 75, 80] }
];



function getAverageMarks(students) {
    return students.map((std) => ({
        name: std.name,
        average: std.marks.reduce((acc, i) => acc + i, 0) / std.marks.length
    }))
}


console.log(getAverageMarks(students));


// Output 
// {name: 'Ritik', average: 85} 
// {name: 'Aman', average: 75}







// Update Product Stock


function updateStock(id, quantity) {
    let products = [
        { id: 1, stock: 10 },
        { id: 2, stock: 5 }
    ];
    let product = products.find((n) => n.id === id);
    product.stock = quantity;
    return products;
}


console.log(updateStock(1, 20));


// Output


// {id: 1, stock: 20}
// {id: 2, stock: 5}







// Sort Students by Marks 



let std = [
    { name: "A", marks: 70 },
    { name: "B", marks: 95 },
    { name: "C", marks: 80 }
]

function shortingStd() {
    return std.sort((a, b) => b.marks - a.marks)
}


console.log(shortingStd());

// Output

// [
//     { name: 'B', marks: 95 },
//     { name: 'C', marks: 80 },
//     { name: 'A', marks: 70 }
// ]






// Student Grade Report


// What is this question asking?
// For every student:
//  1. Calculate average.
//  2. Decide grade.
//  3. Create a new object.
//  4. Return a new array.




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
        let sum = n.marks.reduce((acc, i) => {
            return (acc + i)
        }, 0)

        let avg = sum / n.marks.length;

        let grad = "";

        if (avg > 75 && avg < 100) {
            grd = "A"
        } else if (avg > 55 && avg < 75) {
            grd = "B"
        } else if (avg > 33 && avg < 55) {
            grd = "C"
        } else {
            grd = "D"
        }

        return {
            name: n.name,
            average: avg,
            grade: grd
        }
    })
}


console.log(generateReport(students));


// Ouput 

// [
//     {
//         name: 'Ritik',
//         average: 85,
//         grade: 'A'
//     },

//     {
//         name: 'Aman',
//         average: 50,
//         grade: 'C'
//     }
// ]







// Product Revenue Analyzer



let products = [
    {
        name: "Mouse",
        price: 500,
        sold: 20
    },
    {
        name: "Keyboard",
        price: 1000,
        sold: 10
    }
];


function revenueSystem(products) {
    let perProductRev = products.map((n, i) => {
        return n.price * n.sold
    })

    let totalrev = perProductRev.reduce((a, i) => {
        return a + i
    }, 0)

    let bestSell = 0;

    for (let prod of products) {
        if (prod.sold > bestSell) {
            bestSell = prod.name
        }
    }

    return {
        perProductRev,
        totalrev,
        bestSell
    }
}

console.log(revenueSystem(products));


// Output

// {
//     bestSell: "Mouse",
//     perProductRev: (2) [10000, 10000],
//     totalrev: 20000
// }







// Attendance System


let students = [
    { name: "Ritik", present: true },
    { name: "Aman", present: false },
    { name: "Priya", present: true }
];


function countPresent(students) {
    let presents = students.filter((n) => {
        if (n.present == true) {
            return n
        }
    })

    return presents.length
}


function countAbsent(students) {
    let absent = students.filter((n) => {
        if (n.present == false) {
            return n
        }
    })

    return absent.length
}


function getPresentStudents() {
    let presentStd = students.filter((n) => {
        if (n.present == true) {
            return n.name
        }
    })

    return presentStd
}



console.log(countPresent(students));
console.log(countAbsent(students));
console.log(getPresentStudents(students));

// Output

// 2
// 1
// [
//     { name: "Ritik", present: true },
//     { name: "Priya", present: true }
// ];






// Library Management System


let library = [
    {
        id: 1,
        title: "Atomic Habits",
        borrowed: false
    }
]



function addBook(id, title) {
    library.push({
        id,
        title,
        borrowed: false
    })

    return library
}



function borrowBook(id) {
    let borrow = library.find((n) => n.id === id)

    if (borrow) {
        borrow.borrowed = true
    }


    return borrow

}



function returnBook(id) {
    let rtn = library.find((n) => n.id === id);

    if (rtn) {
        rtn.borrowed = false
    }

    return rtn
}





function showAvailableBooks(library) {
    let abl = library.filter((n) => n.borrowed === false);
    console.log(abl);
}




addBook(2, "Alchemist")
addBook(3, "Do Epic Shit")
borrowBook(2)
showAvailableBooks(library)
returnBook(2)


console.log(library);



// Output 

// [
//     { id: 1, title: 'Atomic Habits', borrowed: false },
//     { id: 3, title: 'Do Epic Shit', borrowed: false }
// ]


// [
//     { id: 1, title: 'Atomic Habits', borrowed: false },
//     { id: 2, title: 'Alchemist', borrowed: false },
//     { id: 3, title: 'Do Epic Shit', borrowed: false }
// ]







// Order Management System


let orders = []


function createOrder(id, customer, amount) {
    return orders.push({
        id,
        customer,
        amount,
        status: "Pending"
    })
} 




function updateStatus(id) {
    let udt = orders.find((n) => n.id === id)

    if(udt) {
        udt.status = "Completed"
    }
}


function getPendingOrders() {
    return orders.filter((n) => n.status === "Pending")
}



function getCompletedOrders() {
    return orders.filter((n) => n.status === "Completed")
}




createOrder(1, "Sachin", 3000)
createOrder(2, "Priyanka", 1500)
createOrder(3, "Deep", 1000)

console.log(orders);


updateStatus(2)


console.log(getPendingOrders());
console.log(getCompletedOrders());


// Output


// [
//     {id: 1, customer: 'Sachin', amount: 3000, status: 'Pending'},
//     {id: 2, customer: 'Priyanka', amount: 1500, status: 'Completed'},
//     {id: 3, customer: 'Deep', amount: 1000, status: 'Pending'}
// ]


// [
//     {id: 1, customer: 'Sachin', amount: 3000, status: 'Pending'},
//     {id: 3, customer: 'Deep', amount: 1000, status: 'Pending'}
// ]


// [
//     {id: 2, customer: 'Priyanka', amount: 1500, status: 'Completed'}
// ]






// Mini E-Commerce System


// {
// id:1,
// name:"Laptop",
// price:50000,
// stock:10
// }


let products = []



function addProduct(id, name, price, stock) {
    return products.push({
        id,
        name,
        price,
        stock
    })
}



addProduct(1, "Laptop", 50000, 10)
addProduct(2, "Mouse", 500, 20)
addProduct(3, "KeyBoard", 800, 15)
addProduct(4, "Monitor", 10000, 12)
addProduct(5, "Headphone", 2000, 10)


console.log(products);


function removeProduct(id) {
    let index = products.findIndex((n) => n.id === id)

    console.log(index);
    

    if (index !== -1) {
        return products.splice(index, 1);
    }
}

removeProduct(2)



function updateStock(id, stocks) {
    let update = products.find((n) => n.id === id)

    if (update) {
        update.stock = stocks
    }

    return update

}


updateStock(1, 20)

console.log(products);


function purchaseProduct(id, stocks) {
    let purchase = products.find((n) => n.id === id)

    if(purchase) {
        purchase.stock = (purchase.stock - stocks)
    }

    return purchase
}


purchaseProduct(3, 5)


console.log(products);


function getInventoryValue() {
    let total = products.map((n) => n.price * n.stock).reduce((n, i) => n + i, 0)

    return total
}


console.log(getInventoryValue()); // 1152000










let n = Number(prompt("Enter the Number"))


for (let i = n; i >= 1; i--) {
  console.log(i);
} 

