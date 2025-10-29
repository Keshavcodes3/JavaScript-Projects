let fixedTime=25*60;
let isRunning=false
let IntervalId;
const start=document.querySelector("#start")
const stop=document.querySelector("#stop")
const reset=document.querySelector("#reset")



function formatTime(sec){
     const m=Math.floor(sec/60);
     const s=sec%60
     const mm=String(m).padStart(2,'0');
     const ss=String(s).padStart(2,'0');
     return `${mm}:${ss}`
}

function updateDisplay(){
     const timerDisplay=document.querySelector("#timerDisplay")
     timerDisplay.textContent=formatTime(fixedTime);
}



//?Function to Start

function startTimer(){
     if(isRunning) return
     isRunning=true
     updateDisplay()
     IntervalId=setInterval(()=>{
          fixedTime--;
          if(fixedTime<=0){
               clearInterval(IntervalId);
               isRunning=false;
          }
          updateDisplay()
     },1000)
}


start.addEventListener('click',function(){
     startTimer()
})

//?Function for Reset

reset.addEventListener('click',()=>{
     clearInterval(IntervalId)
     isRunning=false
     fixedTime=25*60
     updateDisplay()
})




//?Function to stop

stop.addEventListener('click',function(){
     clearInterval(IntervalId)
     isRunning=false
})