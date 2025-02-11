// Basic
// interface User {
//     name: string;
//     age: number;  
// }

// function sumOfAges(user1: User, user2: User): number {
//     return user1.age + user2.age;   
// }

// const age = sumOfAges({name: "Adesh", age: 18}, {name: "Aman", age: 17});

// console.log(age);       

// interface User {
//     name: string;
//     age: number;
//     email: string;
//     password: string;   
// };

// // Pick
// type UdateProps = Pick<User, "name" |  "age" |   "email">;

// // Partial
// type UdatePropsOptional = Partial<UdateProps>;

// function udateUser(updatedProps: UdatePropsOptional) {  
//     //hit the database  to update the user
// }

// readonly
// type user = {   
//     readonly name: string;   
//     readonly age: number;
// }
// OR
// type user = {   
//     name: string;   
//     age: number;
// }

// const user: Readonly<user> = {
//     name: "Adesh",
//     age: 18    
// }

// user.name = "Aman";

// Reacord and Map

//Record
// type user = Record<string, {name: string, age: number}>

// const users: user = {
//     "Adesh": {name: "Adesh", age: 18},
//     "Aman": {name: "Aman", age: 17},
// }

// type user = {
//     name: string;
//     age: number;
//     email: string;
// };  

// Map
// const users = new Map<string, user>();
// users.set("Adesh", {name: "Adesh", age: 18, email: "a@a.com"});
// users.set("Aman", {name: "Aman", age: 17, email: "a@a.com"});   

// const user1 = users.get("Adesh");

// console.log(user1);

// Exclude
// type EventType = "click" | "scroll" | "mousemove";
// type ExcludeEvent = Exclude<EventType, "click">;    

// const handleEvent = (event: ExcludeEvent) => {
//     console.log("Handling event",event); 
// }

// handleEvent("scroll");      
// handleEvent("mousemove");   
// handleEvent("click");

// Type inference in zod
// Importing necessary libraries
// import { z } from 'zod';  // Zod for schema validation
// import express from "express";  // Express for the web server

// // Initializing the Express app
// const app = express();

// // Define the schema for profile update using Zod
// const userProfileSchema = z.object({
//   name: z.string().min(1),  // Name must be a non-empty string
//   email: z.string().email(),  // Email must be a valid email address
//   age: z.number().min(18).optional(),  // Age is optional but must be 18 or older if provided
// });

// // Type inference for the FinalUserSchema from the userProfileSchema
// export type FinalUserSchema = z.infer<typeof userProfileSchema>;

// // Define the PUT endpoint for updating user data
// app.put("/user", (req, res) => {
//   // Safe parsing of the request body according to the defined schema
//   const { success } = userProfileSchema.safeParse(req.body);
//   const updateBody: FinalUserSchema = req.body;

//   // If the validation fails, return a 411 status code (Length Required)
//   if (!success) {
//     res.status(411).json({});  // Send empty response in case of validation failure
//     return;
//   }

//   // Placeholder for updating the database with the validated data
//   // Update the user in the database here using updateBody data

//   // Respond with a success message after updating the user
//   res.json({
//     message: "User updated"  // Send success message
//   });
// });

// // Start the Express app on port 3000
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');  // Log when the server is ready
// });