
var x;
var playerImage=document.querySelector('.playerImage');
var computerImage=document.querySelector('.computerImage');
var winner= document.querySelector('.winner');

function shake(x){
    document.querySelectorAll('.img-fluid')[0].classList.add('img');
    document.querySelectorAll('.img-fluid')[1].classList.add('img');
    setTimeout(function(){
        shakeRemove();
        action(x);
    },1000);
    
}

function shakeRemove(){
    document.querySelectorAll('.img-fluid')[0].classList.remove('img');
    document.querySelectorAll('.img-fluid')[1].classList.remove('img');
}


function action(x)
{
    switch(x)
    {
    case 1:
        playerImage.src="rock.png";
        break;

        case 2:
        playerImage.src="paper.png";
        break;

        case 3:
        playerImage.src="scissors.png";
        break;
    }

    computerAction(x);
}

var num;
function computerAction(x)
{
    num=Math.floor(Math.random()*3)+1;
 

    switch(num)
    {
    case 1:
        computerImage.src="revrock.png";
        break;

        case 2:
        computerImage.src="revpaper.png";
        break;

        case 3:
        computerImage.src="revscissors.png";
        break;
    }    

    showWinner(x,num);

}

var playerScore=0;
var computerScore=0;
var compScore=document.querySelector('.computerScore');
var plrScore=document.querySelector('.playerScore');

function showWinner(x,num){

    if(x==num)
    {
        winner.innerHTML="It's a Draw!";
    }
    else if((x==1 && num==2)||(x==2 && num==3)||(x==3 && num==1))
    {
        winner.innerHTML="Computer Wins!";
        computerScore++;
        compScore.innerHTML=computerScore;
    }
    else{
        winner.innerHTML="Player Wins!";
        playerScore++;
        plrScore.innerHTML=playerScore;
    }

    if(playerScore==10)
    {
        document.querySelector('#ultima').innerHTML="CONGRATULATIONS!<br/>You are the Champion!!<br/>Reload to Play Again";
    }

    if(computerScore==10)
    {
        document.querySelector('#ultima').innerHTML="HAHA Nigga!<br/>You lose!!<br/>Reload to Play Again";
    }

    console.log(x);
    console.log(num);

}

