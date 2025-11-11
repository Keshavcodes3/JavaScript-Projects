let btn=document.querySelector("#btn");
let FileInp=document.querySelector("#File")

btn.addEventListener('click',function(){
     FileInp.click();
})

FileInp.addEventListener('chamnge',function(dets){
    btn.textContent=dets.target.files[0].name;
    
})