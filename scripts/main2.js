fetch('http://api.openweathermap.org/data/2.5/weather?q=Waddinxveen&APPID=5cf8719ac570a877c75d8f0ad69a8582&units=metric')
  
  // parse to JSON format
  .then(function(response) {
    return response.json();
  })
  
  // render weather per day
  .then(function(response) {
    //console.log(response);
    document.getElementById('weer').innerHTML = 'De temperatuur is momenteel'+ ' ' + response.main.temp + ' ' + 'graden celcius';   
  })
  
  // catch error
  .catch(function (error) {
    //console.error('Request failed', error);
  });
