var ref = firebase.database().ref().child("user");
var image,position,alert,Heatmap;
//var position = [intlat,  intlong];
function initialize() { 
    
    var on = true;
    var intervalSeconds = 0.5;
    image = new google.maps.MarkerImage(
    "car1.png",
    null, /* size is determined at runtime */
    null, /* origin is 0,0 */
    null, /* anchor is bottom center of the scaled image */
    new google.maps.Size(40, 42));  

    ref.on("child_added",snap =>
  {
    lat1 = snap.child("lat1").val();
    long1 = snap.child("long1").val();
    lat2 = snap.child("lat2").val();
    long2 = snap.child("long2").val();
    alert = snap.child("alert").val();
    intlat=parseFloat(lat1);
    intlong=parseFloat(long1);
    intlat1=parseFloat(lat2);
    intlong1=parseFloat(long2);


    var latlng = new google.maps.LatLng(intlat, intlong);
    position = [intlat,intlong];
    var position1 = [intlat1,intlong1];

    var myOptions = {
        zoom: 9,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
                    };
    map = new google.maps.Map(document.getElementById("mapCanvas"), myOptions);

     Heatmap = new google.maps.visualization.HeatmapLayer({
          data: getPoints(),
          map: map
        });

    marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title: "Latitude:"+position[0]+" | Longitude:"+position[1]
        //icon: image
    });
     marker.setIcon(image);



if(alert == "high")
{
  setInterval(function() {
   if(on) {
     marker.setMap(null);
   } else {
     marker.setMap(map);
   }
  on = !on;
}, intervalSeconds * 1000); }

  else
  {
    marker.setVisible(true);
  }

     //   transition(position1);

})


// initialize();

};
//Load google map
//google.maps.event.addDomListener(window, 'load', initialize);


var numDeltas = 100;
var delay = 150; //milliseconds
var i = 0;
var deltaLat;
var deltaLng;

function transition(result){
    i = 0;
    deltaLat = (result[0] - position[0])/numDeltas;
    deltaLng = (result[1] - position[1])/numDeltas;
    moveMarker();

}

function moveMarker(){
    position[0] += deltaLat;
    position[1] += deltaLng;
    var latlng = new google.maps.LatLng(position[0], position[1]);
    marker.setTitle("Latitude:"+position[0]+" | Longitude:"+position[1]);
    marker.setPosition(latlng);
    marker.setIcon(image);
    if(alert=="high")
    {
     var visibility = (marker.getVisible() == true) ? false : true;
     marker.setVisible(visibility); }
    if(i!=numDeltas){
        i++;
        setTimeout(moveMarker, delay)
    }
}

function getPoints() {

var parsed = JSON.parse(rawData);
var sample = [];

for(i=0;i<parsed.length;i++)
{
 // sample.push(parsed[i]);
  lat = parsed[i].lat;
  lng = parsed[i].lng;
  weight = parsed[i].weight;
  sample.push( {location: new google.maps.LatLng(lat, lng), weight: weight});

}

return sample;
}

  function toggleHeatmap() {
        Heatmap.setMap(Heatmap.getMap() ? null : map);
      }

      function changeGradient() {
        var gradient = [
          'rgba(0, 255, 255, 0)',
          'rgba(0, 255, 255, 1)',
          'rgba(0, 191, 255, 1)',
          'rgba(0, 127, 255, 1)',
          'rgba(0, 63, 255, 1)',
          'rgba(0, 0, 255, 1)',
          'rgba(0, 0, 223, 1)',
          'rgba(0, 0, 191, 1)',
          'rgba(0, 0, 159, 1)',
          'rgba(0, 0, 127, 1)',
          'rgba(63, 0, 91, 1)',
          'rgba(127, 0, 63, 1)',
          'rgba(191, 0, 31, 1)',
          'rgba(255, 0, 0, 1)'
        ]
        Heatmap.set('gradient', Heatmap.get('gradient') ? null : gradient);
      }

      function changeRadius() {
        Heatmap.set('radius', Heatmap.get('radius') ? null : 40);
      }

      function changeOpacity() {
        Heatmap.set('opacity', Heatmap.get('opacity') ? null : 0.2);
      }

        