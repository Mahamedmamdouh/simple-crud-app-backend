const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute =require('./routes/product.route.js') 
const app = express();

app.use(express.json())


app.use('/api/products',productRoute)



app.get("/", (req, res) => {
    res.send('hello');
});

mongoose.connect('mongodb+srv://Marx:ftVyqKxQcNChqdeE@backenddb.hnw9w.mongodb.net/Node_API?retryWrites=true&w=majority&appName=Backenddb')
    .then(() => {
        console.log("✅ Connected to database");
        app.listen(3000, () => {
          console.log("✅ Server is running on port 3000");
      });
    })
    .catch((err) => {
        console.error("❌ Connection failed:", err);
    });

