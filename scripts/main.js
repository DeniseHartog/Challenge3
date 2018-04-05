
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


function initMap() {//MARKER PLUS DISLAY

var locations = [
          ['Tollenslaan 109', 52.055879, 4.653288, 4],
          ['Albert Heijn', 52.04953466110135, 4.652066230773926, 5],
          ['Station', 52.055314,  4.648204, 3],
          ['Winkelcentrum', 52.04103560405538, 4.651551246643066, 2],
          ['Grasveld', 52.04381026993171, 4.640420473981294, 1]
      ];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(52.04953466110135, 4.652066230773926),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ],
  });


    var count=0;

  	for (count = 0; count < locations.length; count++) {  

      var image = 'regenboog2.png'

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[count][1], locations[count][2]),
        map: map,
        icon: image
   	    });

    marker.info = new google.maps.InfoWindow({
        content: locations [count][0]
        });

    google.maps.event.addListener(marker, 'click', function() {  
        // this = marker
        var marker_map = this.getMap();
        this.info.open(marker_map, this);
        // Note: If you call open() without passing a marker, the InfoWindow will use the position specified upon construction through the InfoWindowOptions object literal.
        });
      }
    }


          