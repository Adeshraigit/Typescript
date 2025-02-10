//Implementing an interface 

// interface Address {
//     city: string;
//         country: string;
//         pincode: number;    
// }

// interface User {
//     name: string;       
//     age: number;
//     address: Address    
// }

// interface Office {
//     address: Address    
// }

// let user: User = {
//     name: "Adesh",  
//     age: 17,
//     address: {
//         city: "Noida",
//         country: "India",
//         pincode: 201301    
//     }
// }

// function isLegal(user: User): boolean {
//     if (user.age >= 18) return true;    
//     return false;   
// }

// console.log(isLegal(user)); 

// interface People {
//     name: string;
//     age: number;    
//     greet: () => void,
// }

// class Person implements People {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;        
//         this.age = age; 
//     }

//     greet(): void {         
//         console.log("Hello " + this.name);        
//     }
// }

// let adesh = new Person("Adesh", 18);
// // adesh.greet();

// class Manager implements People {
//     name: string;   
//     age: number;
//     constructor(name: string, age: number) {
//              this.name = name;
//              this.age = age;     
//     }
//     greet(): void {
//         console.log("Hello " + this.name);        
//     }
// }

// let user1 = new Manager("Adesh", 18);
// user1.greet();   

// class Shape {
//     area() {
//         console.log("Area");
//     }
// }

// class Rectangle extends Shape {
//     width: number;
//     height: number;        
//     constructor() {
//         super();            
//         this.width = 1;
//         this.height = 2;        
//     }       
// }

// let rectangle = new Rectangle();
// rectangle.area();

// Abstract Vs Interface
// abstract class User {
//     name: string;   
//     constructor(name: string) {
//         this.name = name;
//     }
//     abstract greet(): string; 
// }

// class Employee extends User {
//     name: string;       
//     constructor(name: string) {
//         super(name);
//         this.name = name;           
//     }
//     greet(): string {
//         return "Hello " + this.name;        
//     }
// }

// Type vs Interface
// type User = {
//     name: string;
//     age: number;    
// }

//union and intersections
// type Employee = {
//     name: string;
//     startDate: string;
// };

// type Manager = {
//     name: string;
//     department: string;
// };

// type TeamLead = Employee & Manager;

// let e: Employee = {
//     name: "Adesh",  
//     startDate: "01-02-2022" 
// }

// let m: Manager = {
//     name: "Adesh",      
//     department: "IT"
// }

// let t: TeamLead = {
//     name: "Adesh",      
//     department: "IT",
//     startDate: "01-02-2022" 
// }   

// type GoodUser = {
//     name: string;
//     gift: string;
// }

// type BadUser = {
//     name: string;
//     ip: number;
// }

// type User = GoodUser | BadUser; 

// const user: User = {
//     name: "Adesh",
//     gift: "Keyboard",    
//     ip: 1
// }

// interface Admin {
//     name: string;
//     permissions: string;            
// }

// interface User {
//     name: string;
//     age: number;            
// }

// type UserOrAdmin = Admin | User;

// function greet(user: UserOrAdmin) {
//     console.log(user.name); 
// }

// Arrays in TS 
// function getMax(nums: number[]): number {
//     let max = nums[0];  

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > max){
//             max = nums[i];
//         }   
//     }
//     return max;
// }

// console.log(getMax([1, 2, 3, 44, 5, 6, 7, 8, 9, 10]));

interface User {
    name: string;
    age: number;
}

function isLegal(user: User[]): User[] {
    let legalUsers: User[] = user.filter((user) => user.age >= 18);
    for(let i = 0; i < legalUsers.length; i++){
        console.log(legalUsers[i].name);    
    }    
    return legalUsers;
}

console.log(isLegal([        
    {name: "Adesh", age: 18},
    {name: "Aman", age: 17},
    {name: "Ayush", age: 16},
]));    