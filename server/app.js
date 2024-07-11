const express = require("express")
const collection = require("./mongo.js")
const user = require("./userModel.js")
const change = require("./userModel2.js")
const collection2 = require("./mongo2.js");
const morgan = require('morgan')

const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(morgan('dev'))


app.get("/",cors(),(req,res)=>{
    
})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.post("/signup",async(req,res)=>{
    const{name,email,password,regNo}=req.body

    const data={
        name:name,
        email:email,
        password:password,
        regNo:regNo

    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.post("/sendData", async (req, res) => {
    try {
        const allData = await collection2.find({});
        res.json(allData);
    } catch (error) {
        res.json("fail");
        console.log(error);
    }
});

app.post("/fetchRelatedData", async (req, res) => {
    try {
      const selectedName = req.body.selectedName;
      const cgpa = req.body.cgpa; 
      const relatedData = await collection2.find({ 
        name: selectedName,
        min_cgpa: { $lte: cgpa } 
      });
      res.json(relatedData);
    } catch (error) {
      res.json("fail");
      console.log(error);
    }
});

app.post("/first",async(req,res)=>{
    const{name,regno,selectedField,selectedName}=req.body

    const data2={
        name:name,
        regno:regno,
        selectedField:selectedField,
        selectedName:selectedName
    }
    try{
            await user.insertMany([data2]);
            alert("Done");
    }
    catch(e){
        res.json("fail")
    }

})

app.post("/sendData2", async (req, res) => {
    try {
        const allData = await user.find({});
        res.json(allData);
    } catch (error) {
        res.json("fail");
        console.log(error);
    }
});
app.post("/sendData3", async (req, res) => {
    try {
        const allData = await change.find({});
        res.json(allData);
    } catch (error) {
        res.json("fail");
        console.log(error);
    }
});
app.post("/sendData4", async (req, res) => {
    try {
        const allData = await collection2.find({});
        res.json(allData);
    } catch (error) {
        res.json("fail");
        console.log(error);
    }
});
app.post("/second",async(req,res)=>{
    const{name,regno,selectedField,newselectedField}=req.body

    const data3={
        name:name,
        regno:regno,
        selectedField:selectedField,
        newselectedField:newselectedField,
    }
    try{
            await change.insertMany([data3]);
            alert("Done");
    }
    catch(e){
        res.json("fail")
    }

})




app.listen(8000,()=>{
    console.log("port connected");
})