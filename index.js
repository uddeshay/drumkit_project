function clickme(event){

    // alert("clicked" + event.target.innerHTML)
    if(event.target.innerHTML==="w"){
        let audio=new Audio("sounds/crash.mp3");
       audio.play();

    }
    else if (event.target.innerHTML==="a"){
        let audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
 

    }
    else if (event.target.innerHTML==="s"){
        let audio=new Audio("sounds/snare.mp3");
        audio.play();
 

    }
    else if (event.target.innerHTML==="d"){
        let audio=new Audio("sounds/tom-1.mp3");
        audio.play();
 

    }
    else if (event.target.innerHTML==="j"){
        let audio=new Audio("sounds/tom-2.mp3");
        audio.play();
 

    }
    else if (event.target.innerHTML==="k"){
        let audio=new Audio("sounds/tom-3.mp3");
        audio.play();
 

    }

    else{
        let audio=new Audio("sounds/tom-4.mp3");
        audio.play();

    }



    
    applyAnimation(event.target);
}

function applyAnimation(button) {
    
    button.classList.add("pressed");

    
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 300); 
}

    



   

let value=document.querySelectorAll(".drum");






value.forEach((val)=>{
    val.addEventListener("click",clickme)


    




});
