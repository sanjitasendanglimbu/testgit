import express from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/message", (req, res) => {
    res.json({message:"hello from server"});
});

const PORT = 4000
app.listen(PORT, () => console.log(`serve is running`))
