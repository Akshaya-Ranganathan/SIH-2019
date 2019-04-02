var count = 0;

function readMessage()
{
  var userDataRef = firebase.database().ref().child("alerts");
$("#tb_body").append("<tr> <td>"+ "   "+ "Name" +"   "+ "</td> <td> "+ "Lat" +"    " +"</td> <td> "+ "Lng" + "   "+"</td>  <td> "+"alert"+"</td>  </tr> <br>");


//userDataRef.child("name").set("name1");

userDataRef.on("child_added",snap => 
{
//alert(snap.val());
var nam = snap.child("name").val();
var phon = snap.child("contact").val();
var latitu = snap.child("lat").val();
var longitu = snap.child("lng").val();
var key = snap.child("read_flag").val();
var alert = snap.child("alert_level").val();
var c1= document.getElementById("c1")
var c2= document.getElementById("c2")
var sosm = snap.child("sos_req").val();

if(sosm)
{



if(key)
{
  var phon = snap.key;
  
$("#tb_body").append("<tr> <td>"+ "&nbsp&nbsp"+ nam +"&nbsp&nbsp"+ "</td> <td> "+ latitu +"&nbsp&nbsp" +"</td> <td> "+ longitu + "&nbsp&nbsp"+"</td>  <td> "+alert+"</td>  </tr> <br>");

//snap.child("key").set(0);
userDataRef.child(phon).set
({
  read_flag : 0,
  contact  : phon,
  lat : latitu,
  lng : longitu,
  name : nam,
  alert_level : alert,
  sos_req : 0

})

}
}






  //alert("hi");

});


}

$(document).ready(function(){




var c1= document.getElementById("c1")

var userDataRef = firebase.database().ref().child("alerts");
//userDataRef.child("name").set("name1");

userDataRef.on("child_added",snap => 
{
//alert(snap.val());
var nam = snap.child("name").val();
var phon = snap.child("contact").val();
var latitu = snap.child("lat").val();
var longitu = snap.child("lng").val();
var read_flag = snap.child("read_flag").val();
var sosm1 = snap.child("sos_req").val();



if(sosm1)
{

if(read_flag)
{
  count +=1;


//$("#tb_body").append("<tr><td>"+nam + "</td><td>" + phon + "</td><td>"+ latitu +"</td><td>"+ longitu +"</td></tr>");


}
c1.innerHTML=count;

}




}); 


});
