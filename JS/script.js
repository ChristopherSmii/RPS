let pScore=0;
let aiScore=0;
function cal(playerChoice){
    let choice=Math.floor(Math.random()*3);
    $("h3")[0].innerHTML=playerChoice;
    switch (choice) {
        case 0:
            //rock
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
