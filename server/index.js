const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

// Middleware
app.use(cors());
app.use(express.json()); // gives access to req.body

// Routes

//create todo
app.post('/routeTodo', async(req,res) => {
    try {
        const { name, grade, length } = req.body;
        const newRoute = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [name]
        );

        res.json(newRoute.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});


//get all climbing routes for one area

app.get("/climbingroutes", async (req,res) => {
    try {
        const allRoutes = await pool.query(
            "SELECT name FROM climbing_routes WHERE climbing_area = $1 LIMIT 20", 
            ['Wadi Shellal']
        );

        res.json(allRoutes.rows);
    } catch (error) {
        console.error(error.message);
    }

});

//get one climbing route

app.get("/climbingroutes/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const route = await pool.query(
            "SELECT name, number_in_topo, grade_best_guess FROM climbing_routes WHERE name = $1",
            [id]
        );

        res.json(route.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//update a todo

app.put("/climbingroutes/:id", async (req, res) => {
    const { description } = req.body;

});

//delete a todo



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
