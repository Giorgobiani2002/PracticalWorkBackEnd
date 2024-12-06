import fs from "fs/promises";
import fetch from "node-fetch";





                     // HOMEWORK 1







                     
// async function fetchData() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");

//     if (!response.ok) {
//       throw new Error("network error");
//     }

//     const datas = await response.json();

//     console.log(datas);

//     await fs.writeFile("post.json", JSON.stringify(datas));

//     const Posts = await fs.readFile("post.json", "utf-8");
//     const prs = JSON.parse(Posts);
//     const PostsLessThan30 = prs.filter((post) => post.title.length < 30);
//     await fs.writeFile("post.json", JSON.stringify(PostsLessThan30));
//   } catch (error) {
//     console.error("err", error);
//   }
// }

// fetchData();








                 // HOMEWORK 2 






// const [, , , email, username, age] = process.argv;

// async function users() {
//   const userss = await fs.readFile("users.json", "utf-8");
//   const ParseUsers = JSON.parse(userss);

//   const user = {
//     Email: email,
//     Username: username,
//     Age: age,
//   };

//   if (process.argv[2] === "CREATE") {
//     const userIndexx = ParseUsers.findIndex((user) => user.Email === email);
//     if (userIndexx === -1) {
//       ParseUsers.push(user);
//       await fs.writeFile("users.json", JSON.stringify(ParseUsers));
//       console.log("User added");
//     } else {
//       console.log("Email exist");
//     }
//   } else if (process.argv[2] === "DELETE") {
//     const userIndex = ParseUsers.findIndex((user) => user.Email === email);
//     if (userIndex !== -1) {
//       ParseUsers.splice(userIndex);
//       await fs.writeFile("users.json", JSON.stringify(ParseUsers));
//     } else {
//       console.log("User not foundd");
//     }
//   } else {
//     console.log("type  CREATE or DELETE");
//   }
// }

// users();







                    // homework 3








// const [, , , name, description, price, color] = process.argv;

// async function product() {
//   const productss = await fs.readFile("product.json", "utf-8");
//   const parseProduct = JSON.parse(productss);
//   const product = {
//     Name: name,
//     Description: description,
//     Price: parseFloat(price),
//     Color: color,
//   };
//   if (process.argv[2] === "ADD") {
//     parseProduct.push(product);
//     await fs.writeFile("product.json", JSON.stringify(parseProduct));
//   } else {
//     console.log("please type ADD to ADD user");
//   }

//   if (process.argv[2] === "ASC") {
//     const sortedProductAsc = parseProduct.sort((a, b) => a.Price - b.Price);
//     await fs.writeFile("product.json", JSON.stringify(sortedProductAsc));
//     console.log("product sorted ASCENDING");
//   }
//   if (process.argv[2] === "DESC") {
//     const sortedProductDesc = parseProduct.sort((a, b) => b.Price - a.Price);
//     await fs.writeFile("product.json", JSON.stringify(sortedProductDesc));
//     console.log("product sorted DeScending");
//   }
// }
// product();
