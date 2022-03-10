var click = document.getElementsByClassName("change");
var lan = document.getElementById("language");

function Change(){
    if (lan.innerHTML === 'EN'){
        lan.innerHTML = 'MK';
    }
    else if (lan.innerHTML === 'MK'){
        lan.innerHTML = 'EN';
    }
    
}
