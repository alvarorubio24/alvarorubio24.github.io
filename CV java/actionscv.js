// Experience
function moveimage(){ 
    if (offset>=200){
        clearInterval(imagemove);
        offset = 200;
        document.getElementById("mainexperience").style.left = "200px";
    }
    offset += 10;
    document.getElementById("mainexperience").style.position = "relative";
    document.getElementById("mainexperience").style.left = "-"+ (offset)+ "px";
    console.log(offset);
    
}

function moveimageback(){
    
    if (offset<=0){
        clearInterval(imagemoveback);
        offset = 0;
        document.getElementById("mainexperience").style.left = "0px";
    }

    offset -= 10;
    document.getElementById("mainexperience").style.position = "relative";
    document.getElementById("mainexperience").style.left = "-"+ (offset)+ "px";
    console.log(offset);
    
}


function showcontent(idimage) {

    if (document.getElementById(idimage).style.display == "block"){
        imagemoveback = setInterval(moveimageback, 10);
        document.getElementById(idimage).style.display = "none";

    } else {        
        imagemove = setInterval(moveimage, 10);
        const idimagelist =[]
        for (let i = 1; i < 20; i++) {
            idimagelist.push("imageCV"+i);
        }
        console.log(idimagelist);
        

        for (let i = 0; i < idimagelist.length; i++) {
            if (String(idimagelist[i]) != String(idimage)){
                try {
                    document.getElementById(String(idimagelist[i])).style.display = "none";
                }
                catch(err) {
                    MessageChannel.innerHTML = "Error: " + err
                }
                
            }
        }

        // document.getElementById(idimagelist[i]).style.display = "none";
        document.getElementById(idimage).style.display = "block";
    }
    return;
}

// skills


function moveimageskills(){ 
    if (offset>=400){
        clearInterval(imagemoveskills);
        offset = 400;
        document.getElementById("mainskills").style.top = "200px";
    }
    offset += 10;
    document.getElementById("mainskills").style.position = "relative";
    document.getElementById("mainskills").style.top = "+"+ (offset)+ "px";
    console.log(offset);
    
}

function moveimagebackskills(){
    
    if (offset<=0){
        clearInterval(imagemovebackskills);
        offset = 0;
        document.getElementById("mainskills").style.top = "0px";
    }

    offset -= 10;
    document.getElementById("mainskills").style.position = "relative";
    document.getElementById("mainskills").style.top = "+"+ (offset)+ "px";
    console.log(offset);
    
}





function showcontentskills(idimage) {

    if (document.getElementById(idimage).style.display == "block"){
        imagemovebackskills = setInterval(moveimagebackskills, 10);
        document.getElementById(idimage).style.display = "none";

    } else {        
        imagemoveskills = setInterval(moveimageskills, 10);
        const idimagelist =[]
        for (let i = 1; i < 20; i++) {
            idimagelist.push("imageskills"+i);
        }
        console.log(idimagelist);
        

        for (let i = 0; i < idimagelist.length; i++) {
            if (String(idimagelist[i]) != String(idimage)){
                try {
                    document.getElementById(String(idimagelist[i])).style.display = "none";
                }
                catch(err) {
                    MessageChannel.innerHTML = "Error: " + err
                }
                
            }
        }

        // document.getElementById(idimagelist[i]).style.display = "none";
        setTimeout(function() {
            document.getElementById(idimage).style.display = "block";
          }, 200);
        window.scrollTo(0,0);
    }
    return;
}




function makebold(id){
    document.getElementById(id).style.fontWeight = "900";
    document.getElementById(id).style.color = "darkblue";
    document.getElementById(id).style.transform = "scale(1.05)";
}
function notmakebold(id){
    document.getElementById(id).style.fontWeight = "100";
    document.getElementById(id).style.color = "black";
    document.getElementById(id).style.transform = "scale(1)";
}


// for aboutme
function showtext(id){
    document.getElementById(id).style.display = "block";
}
function removetext(id){
    document.getElementById(id).style.display = "none";
}




// for contact
function emailsent() {
    var nameuser = document.getElementById("username").innerText();
    window.alert("Thank you for your interest, I will reach you out soon "+nameuser);
    document.getElementById("username").innerHTML = "";
    document.getElementById("usersurname").innerHTML = "";
    document.getElementById("useremail").innerHTML = "";
    document.getElementById("description").innerHTML = "";
}

var offset = 0;


