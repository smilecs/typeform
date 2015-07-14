var request = require('request');
var sum = 0;
var token = '';
request('http://aerial-valor-93012.appspot.com/challenge', function(error, response, body){
if(error){
    return console.log(error);
}
var value = JSON.parse(body);
console.log(value);
value.values.forEach(function(data){
sum += data; 
});
token = value.token;
request('http://aerial-valor-93012.appspot.com/challenge/'+token+'/'+sum, function(error, response, body){
if(error){
    return console.log(error);
}
var value = JSON.parse(body);
console.log(value.answer);
});
});