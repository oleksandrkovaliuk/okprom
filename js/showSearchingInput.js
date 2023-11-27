const searchBtn = document.querySelector('.search');
const seacrhingInput = document.querySelector('.input-for-seacrh');
const searchingLabel = document.querySelector('.label-for-search'); 

function showingSearchingInput(){
    if(seacrhingInput.style.width === "0px" || seacrhingInput.style.width === ""){
        seacrhingInput.style.width = "175px";
        seacrhingInput.style.pointerEvents = "unset";
    }else{
        seacrhingInput.style.width = "0px";
        seacrhingInput.style.pointerEvents = "none";
    }
}
searchBtn.addEventListener('click' , showingSearchingInput);