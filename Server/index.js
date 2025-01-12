const express = require("express");
const app = express();

const cors = require("cors");
const dotenv = require("dotenv");

const database=require("./config/database");
const userRoutes=require("./routes/UserRoutes")

const clientUrl=process.env.CLIENT_URL;
app.use(cors({
    origin:clientUrl,
    methods:"GET,POST,PUT,DELETE",
    credentials:true
}));


dotenv.config();
const PORT = process.env.PORT || 4000;

//database connect
database.connect();

app.use(express.json());
app.use("/",userRoutes);


app.get("/abcd", (req, res) => {
	return res.json({
		success:true,
		message:'Your server is up and running....'
	});
});

app.listen(PORT, () => {
	console.log(`Server is running at ${PORT}`)
})