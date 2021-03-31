require("./db/connection");
const express = require("express")

const port = process.env.PORT || 5000;

const app = express ();    

app.get("/user", async (req, res) => {
    /* res.send({message: "API is working correctly"}) */

    try {
        const allUsers = await User.find({});
        res.send(allUsers);
    } catch (error) {
        res.send(error)
    }
})

app.post("/user", async (req, res) => {
    try {
        const user = new User(req.body);
        const returnedValue = await user.save();
        res.send(`Successfully added ${returnedValue.name}`);
    } catch (error) {
        res.send(error);
    }
})

app.post("/user", (req, res) => {
    res.send({message: "Added user successfully"})
})

app.listen(5000, () => {
    console.log(`Listening on port ${port}`)
}); 