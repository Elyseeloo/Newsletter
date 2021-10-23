//jshint esversion: 8


const mailchimp = require("@mailchimp/mailchimp_marketing");


const express = require("express");
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static("public"));

app.listen(process.env.PORT||3000,function () {
 console.log("Server is running at port 3000");
});

app.get("/", function (req, res) {
 res.sendFile(__dirname + "/signup.html");
});

mailchimp.setConfig({

 apiKey: *************************,


 server: "us5"
});

app.post("/", function (req,res) {


const firstName = req.body.fName;
const secondName = req.body.lName;
const email = req.body.email;

const audienceId = "dfae1d610c";

const subscribingUser = {
 firstName: firstName,
 lastName: secondName,
 email: email
};

async function run() {
const response = await mailchimp.lists.addListMember(audienceId, {
 email_address: subscribingUser.email,
 status: "subscribed",
 merge_fields: {
 FNAME: subscribingUser.firstName,
 LNAME: subscribingUser.lastName
}
});

 res.sendFile(__dirname + "/success.html");
 console.log("Successfully added contact as an audience member.");
}


run().catch(e => res.sendFile(__dirname + "/failure.html"));
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});
