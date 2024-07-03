let nextBtn=document.getElementById("next-btn");
let backBtn=document.getElementById("back-btn");
let submitBtn=document.getElementById("submit-btn")

let slider=document.getElementById("slider")

let goal=document.getElementById("goal");
let gainLabel=document.getElementById("gain-label")
let lossLabel=document.getElementById("loss-label");
let gain=document.querySelectorAll('.select.bulk');
let loss = document.querySelectorAll('.select.cut');
let idloss=document.getElementById('loss')
let style = document.createElement('style');
let bulkCut = document.getElementById('bulk-cut')
let para = document.getElementById('required');



let tx=0;
let totalCards=12;
let eachCard=(100/totalCards).toFixed(2)
console.log(eachCard)
slider.style.width=`${totalCards*100}%`;


nextBtn.addEventListener("click", ()=>{
    if(tx>-((totalCards-1)*eachCard)){
        tx=tx-eachCard;
        let decimaltx = tx.toFixed(2);
        console.log(decimaltx)
        console.log(tx);
        slider.style.transform = `translateX(${tx}%)`;
        if(decimaltx==-(eachCard*7) || decimaltx==-(eachCard*9)){
            slider.style.overflowY="scroll";
        } if(decimaltx!=-(eachCard*7) && decimaltx!=-(eachCard*9)){
            slider.style.overflowY="hidden"
        }
        
    }
    let decimaltx = tx.toFixed(2);
    if(decimaltx==-(eachCard*(totalCards-1))){
        submitBtn.style.display='block';
        nextBtn.style.display='none';
    }
    
});

function back(){
    if(tx<0 || tx==-91.63){
        tx+=8.33;
        console.log(tx)
        // let decimaltx=tx.toFixed(2);
        // console.log(`${decimaltx} - back`)
        slider.style.transform = `translateX(${tx}%)`;
        submitBtn.style.display='none';
        nextBtn.style.display='block';
        if(tx==-(eachCard*7) || tx==-(eachCard*9)){
            slider.style.overflowY="scroll";
        } if(tx!=-(eachCard*7) && tx!=-(eachCard*9)){
            slider.style.overflowY="hidden"
        }
    }
}

nextBtn.addEventListener("click", ()=>{
    if(goal.value=="gain"){
        style.innerHTML = `
            .cut {
                display:none;
            }
            .bulk {
                display:block;
            }
            `;
        document.head.appendChild(style);
        lossLabel.style.display="none";
        gainLabel.style.display='block';
    } 
})
nextBtn.addEventListener("click", ()=>{
    if(goal.value=="loss"){
        style.innerHTML = `
            .bulk {
                display:none;
            }
            .cut{
                display:block;
            }
            `;
        document.head.appendChild(style);
        gainLabel.style.display="none";
        lossLabel.style.display='block';
    }
})

