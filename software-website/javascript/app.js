let startIndex=0;
let lastindex=startIndex+3;
const cards=document.querySelectorAll(".resource-card-1");
function show(){
 
    for(let i=0;i<cards.length;i++){
        if(i>=startIndex && i<=lastindex){
            cards[i].style.display='block';
        }
        else{
            cards[i].style.display='none';
        }
    }
}
function next(){
    if(lastindex<cards.length){
        startIndex=startIndex+1;
        lastindex=lastindex+1;
        show();
    }
}
function previous(){
    if(startIndex>0){
        startIndex=startIndex-1;
        lastindex=lastindex-1;
        show();
    }
}
show();