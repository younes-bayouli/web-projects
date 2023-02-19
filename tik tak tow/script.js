let buttons=Array.from(document.getElementsByClassName("button"))
let activplayer="O"
let b1 = document.getElementById('h1')
let b2 = document.getElementById('h2')
let b3 = document.getElementById('h3')
let b4 = document.getElementById('h4')
let b5 = document.getElementById('h5')
let b6 = document.getElementById('h6')
let b7 = document.getElementById('h7')
let b8 = document.getElementById('h8')
let b9 = document.getElementById('h9')
let r=document.querySelector(".result")
let result= document.querySelector(".result h1")
let score1=document.querySelector("table td:nth-child(1)")
let score2=document.querySelector("table td:nth-child(2)")
buttons.map(button =>{
    button.addEventListener("click", (e)=>{
        if (true){
            if (activplayer=="O"){
                button.innerHTML="O"
                check()
                activplayer="X"
            }else{
                button.innerHTML="X"
                check()
                activplayer="O"
            }
            button.classList.toggle("disabled")
        }
    })
})
function check(){
    if (b1.innerText!="" && b2.innerText!="" && b3.innerText!="" 
        && b4.innerText!="" && b5.innerText!="" && b6.innerText!="" 
        && b7.innerText!="" && b8.innerText!="" && b9.innerText!=""){
        console.log("jhgkjhgkjh")
        result.innerHTML="Draw!"
        r.style.display="flex"
    }else if(activplayer=="O"){
        if ((b1.innerText==b2.innerText && b2.innerText==b3.innerText) && b1.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=(parseInt(score1.innerHTML))+1
        }else if ((b4.innerText==b5.innerText && b5.innerText==b6.innerText) && b4.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }else if ((b7.innerText==b8.innerText && b8.innerText==b9.innerText) && b7.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }else if ((b1.innerText==b4.innerText && b4.innerText==b7.innerText) && b1.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }else if ((b2.innerText==b5.innerText && b5.innerText==b8.innerText) && b2.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }else if ((b3.innerText==b6.innerText && b6.innerText==b9.innerText) && b3.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }else if ((b1.innerText==b5.innerText && b5.innerText==b9.innerText) && b1.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }else if ((b3.innerText==b5.innerText && b5.innerText==b7.innerText) && b3.innerText != ""){
            result.innerHTML="player 1 is the winner!"
            r.style.display="flex"
            score1.innerHTML=parseInt(score1.innerHTML)+1
        }
    }else if(activplayer=="X"){
        if ((b1.innerText==b2.innerText && b2.innerText==b3.innerText) && b1.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b4.innerText==b5.innerText && b5.innerText==b6.innerText) && b4.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b7.innerText==b8.innerText && b8.innerText==b9.innerText) && b7.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b1.innerText==b4.innerText && b4.innerText==b7.innerText) && b1.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b2.innerText==b5.innerText && b5.innerText==b8.innerText) && b2.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b3.innerText==b6.innerText && b6.innerText==b9.innerText) && b3.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b1.innerText==b5.innerText && b5.innerText==b9.innerText) && b1.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }else if ((b3.innerText==b5.innerText && b5.innerText==b7.innerText) && b3.innerText != ""){
            result.innerHTML="player 2 is the winner!"
            r.style.display="flex"
            score2.innerHTML=parseInt(score2.innerHTML)+1
        }
    }
}
function mi(){
    r.style.display="none"
    buttons.map(button => {
        button.innerHTML=""
        button.style.cursor="pointer"
    })
}