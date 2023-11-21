var score = 0;


function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "pontuação : " + score;

}


function saveScore()
{
    localStorage.setItem("score", score);
}

function nextPage()
{ 
    function nextPage(){
        window.location = "activity_2.html";
    }
}    

