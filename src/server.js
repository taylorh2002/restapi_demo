require("./db/connection");
const express = require("express")
const { User } = require("../models/User")

const port = process.env.PORT || 5000;

const app = express ();   

// Middleware
app.use(express.json());

app.get("/user", async (req, res) => {

    try {
        const allUsers = await User.find({});
        res.status(200).send(allUsers);
    } catch (error) {
        res.status(500).send(error)
    }
})

app.post("/user", async (req, res) => {

    try {
        console.log(req.body)
        const user = new User(req.body);
        const returnedValue = await user.save();
        res.status(201).send(`Successfully added ${returnedValue.name}`);
    } catch (error) {
        res.status(400).send(error);
    }

})

/* app.post("/user", (req, res) => {
    res.send({message: "Added user successfully"})
}) */

app.patch("/user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        console.log(user)
        res.status(200).send(user);
    } catch (error) {
        res.status(404).send({ message: "user not found" });
    }
});

app.delete("user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send({ message: "user not found" })
    }
})


app.listen(5000, () => {
    console.log(`Listening on port ${port}`)
}); 