const { Configuration, OpenAIApi } =  require ("openai");

const express = require('express');
const Joi = require('joi');
const multer = require('multer');
const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
const mysql = require('mysql');
const bodyParser =  require('body-parser');
const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.json());


const fetch = import("node-fetch");

const configuration = new Configuration({
    organization: "org-zU0hhpIWZhem6uNpsh11cuOk",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai =new OpenAIApi(configuration);
// const response = await openai.listEngines();

// callApi()
async function callApi (message) {
    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens : 100,
        temperature: 0.7,
    });
    console.log(completion.data.choices);
    return completion;
}

app.get("/", async (req, res) => {
    const  completion = await callApi ("hello world");
    console.log(completion.data.choices[0].text);
    return res.json({
        data: completion.data
    })
})

app.post("/", async (req, res) => {
    const {message} = req.body;
    const  completion = await callApi (message);
    console.log(completion.data.choices[0].text);
    return res.json({
        message: completion.data.choices[0].text
    })
})

app.listen(4000,() =>{
    console.log('product server listening on port 4000')
});