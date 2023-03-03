let request = require('request');

let apiKey = 'ee57d1e57f96a6d0ae092dc3e75540e6';
let location = 'Melbourne, AU';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`

request(url, function (err, response, body) {
if(err){
    console.log('error:', error);
} else {
    console.log('body:', body);
}
});