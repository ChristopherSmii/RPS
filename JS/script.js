let pScore=0;
let aiScore=0;
function cal(playerChoice){
    let choice=Math.floor(Math.random()*3);
    $("h3")[0].innerHTML=playerChoice;
    if(playerChoice=="Rock"){
        document.querySelectorAll("h3")[0].classList.remove("greenn");
        document.querySelectorAll("h3")[0].classList.add("redd");
        document.querySelectorAll("h3")[0].classList.remove("bluee");        
    }
    else if(playerChoice=="Paper"){
        document.querySelectorAll("h3")[0].classList.remove("greenn");
        document.querySelectorAll("h3")[0].classList.remove("redd");
        document.querySelectorAll("h3")[0].classList.add("bluee");  
    }
    else{
        document.querySelectorAll("h3")[0].classList.add("greenn");
        document.querySelectorAll("h3")[0].classList.remove("redd");
        document.querySelectorAll("h3")[0].classList.remove("bluee");  
    }
    switch (choice) {
        case 0:
            //rock
            document.querySelectorAll("h3")[1].classList.remove("greenn");
            document.querySelectorAll("h3")[1].classList.add("redd");
            document.querySelectorAll("h3")[1].classList.remove("bluee");
            $("h3")[1].innerHTML="Rock";
            if(playerChoice=="Rock"){
                
            }
            else if(playerChoice=="Paper"){
                pScore++;
                $("h1")[0].innerHTML=pScore;
            }
            else{
                aiScore++;
                $("h1")[1].innerHTML=aiScore;
            }
            break;
        case 1:
            //paper
            $("h3")[1].innerHTML="Paper";
            document.querySelectorAll("h3")[1].classList.remove("greenn");
            document.querySelectorAll("h3")[1].classList.remove("redd");
            document.querySelectorAll("h3")[1].classList.add("bluee");
            if(playerChoice=="Rock"){
                aiScore++;
                $("h1")[1].innerHTML=aiScore;
            }
            else if(playerChoice=="Paper"){
                
            }
            else{
                pScore++;
                $("h1")[0].innerHTML=pScore;
            }
            break;
        case 2:
            //scissors
            document.querySelectorAll("h3")[1].classList.add("greenn");
            document.querySelectorAll("h3")[1].classList.remove("redd");
            document.querySelectorAll("h3")[1].classList.remove("bluee");
            $("h3")[1].innerHTML="Scissors";
            if(playerChoice=="Rock"){
                pScore++;
                $("h1")[0].innerHTML=pScore;
            }
            else if(playerChoice=="Paper"){
                aiScore++;
                $("h1")[1].innerHTML=aiScore;
            }
            else{

            }
            break;
    }
}
$(".option").on("click",function(){
    
cal(this.innerHTML);
});
document.querySelectorAll(".option")[1].classList.add("bluee");
document.querySelectorAll(".option")[0].classList.add("redd");
document.querySelectorAll(".option")[2].classList.add("greenn");