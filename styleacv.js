

function simpleline() {
    document.write("What have you done!");
}

function alertbutton() {
    window.alert("ALERT: What have you done!");
    console.log("Alert Button was pressed")
}

function getinfo() {
    var myElement = document.getElementById("firstheading").innerText;
    window.alert(myElement);

}



function mymaths (a,b) {
    return a*b;
}

var x = mymaths(4,3);

document.getElementById("maths").innerHTML = x ;

const car = {type:"Fiat", model:"500", color:"white",fulldetails: function() {
    return this.type + " " + this.model +" " + this.color;
}};

car.type = "Seat" ;
document.getElementById("testjava").innerHTML = car.type + " " + car["color"] + " " + car.fulldetails();

function backtotext() {
    document.getElementById("testjava").innerHTML = "Refresh the page now"
}





// This is a comment