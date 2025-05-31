let boxes = document.querySelectorAll(".boxes")
let showresult = document.querySelector(".showresult")
let reset = document.querySelector(".restart")
let winsound = document.getElementById("winSound")
let movesound = document.getElementById("moveSound")
let currentPlayer = "❌"
let game = ["", "", "" , "" , "", "" , "" , "" , "" ]
let gameOn = true;


let winnermatrix = [
    [0,1,2] , [3,4,5] , [6,7,8] ,[0,3,6] , [1,4,7] ,[2,5,8] , [0,4,8], [2,4,6]
]


let handleclick = (e) =>
    {
       let index = e.target.dataset.index;
       console.log(e.target)
       console.log(index)

       if(game[index]!=="" || !gameOn ){
        return
       }
       
       game[index] =currentPlayer;
       console.log(" e",e.target)
       e.target.textContent = currentPlayer;
       movesound.play();
        currentPlayer=currentPlayer=="❌"?"⭕":"❌"
       seewhoisthewinner();
       
    }

    let seewhoisthewinner= ()=>{
        for (const element of winnermatrix) {
           let [a,b,c]= element
           if(game[a]&&game[a]==game[b]&&game[b]==game[c] ) {

            showresult.textContent= `🎉 🌟congratulation ${currentPlayer} is winner `

            showresult.style.backgroundColor ="green"
            gameOn=false;
            winsound.play()
            boxes.forEach(box=>box.classList.add("disabled"))
            return
           }
        }

        if(!game.includes(""))
        {
            gameOn= false;
            showresult.textContent=`it's a draw `
            boxes.forEach(box=>box.classList.add("disabled"))
            return;
        }
    }
let handlereset =()=>
{
     game.fill("");
     gameOn = true;
     currentPlayer="❌"
     showresult.textContent= "This will show result"
     showresult.style.backgroundColor="rgb(239, 219, 177)";
     boxes.forEach( box=> {
        box.textContent=""
     
     }
    )
    boxes.forEach(box => box.classList.remove("disabled"));

}




boxes.forEach(boxes => {
    boxes.addEventListener("click",handleclick)
    
});

reset.addEventListener("click" , handlereset)
// Destructuring is a feature in JavaScript that allows you to unpack values from arrays or objects into separate variables in a clean and readable way
