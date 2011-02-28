redis = require("redis");
client = app.client = redis.createClient();

questions = app.questions = [];

client.get("questions", function(err, reply){
  if(reply){
    questions = reply 
  }
});


// Dummy Data
/*
var time = new Date();
questions.push({title:"What is the meaning of life?", time: time.getTime(), vote: 1});
questions.push({title:"What room is your computer in?", time: time.getTime(), votree: 1});
*/
