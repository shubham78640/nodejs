// const swaggerJsdoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
// const express = require("express");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const User = require("./models/Users");

// dotenv.config();
// const app = express();
// app.use(express.json());


// const swaggerOptions = {
//     definition: {
//       openapi: "3.0.0",
//       info: {
//         title: "My API with MongoDB",
//         version: "1.0.0",
//         description: "API for managing users with MongoDB and Express",
//       },
//       servers: [
//         {
//           url: "http://localhost:" + process.env.PORT,
//         },
//       ],
//     },
//     apis: ["./server.js"], // You can also include other files like models or routes
//   };
  
//   const swaggerSpec = swaggerJsdoc(swaggerOptions);
//   app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// // Connect MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("✅ MongoDB Connected");
// }).catch(err => {
//     console.error("❌ MongoDB connection error:", err);
// });

// // Sample API to test DB
// app.get("/api/users", async (req, res) => {
//     try {
//         // const ProductModel = mongoose.model('users',userSchema);
//         // let data = new ProductModel({name:"shubham",email:"shubham@gmail.com"});
//        const users = await User.find();
//        res.json(users);
//     //    let result = await data.save();
//     //    console.Console.log("result",result);
//     } catch (err) {
//         res.status(500).json({ error: "Server Error" });
//     }
// });

// app.post("/api/users", async (req, res) => {
//     try {
//         // const ProductModel = mongoose.model('users',userSchema);
//         let data = new User(req.body);
//     //    const users = await User.find();
//     //    res.json(users);
//      let result = await data.save();
//       Console.log("result + result", result);
//     //   res.send("1st APi is crrated")
//     } catch (err) {
//         res.status(500).json({ error: "Server Error" });
//     }
// });

// // Start server
// app.listen(process.env.PORT, () => {
//     console.log(`🚀 Server running on port ${process.env.PORT}`);
// });
