import * as express from "express";

const app = express();


app.get('/health', (req,res) => {
    res.json({
        msg: "Hello World"
    })
})


app.listen(4200, () => {
    console.log(`Listening to port ${4200}`)
})