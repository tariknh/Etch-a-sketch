const container = document.getElementById("container");
const gridButton = document.getElementById("gridSelect");
const selectRainbow = document.getElementById("selectRainbow");
let div;
let div2;
function divCreate (i){
    div = document.createElement('div');
    //div.setAttribute("id",i);
    div.className = ("grid");
    container.appendChild(div);
};

function divCreateTwo (i){
    div2 = document.createElement('div');
    div2.setAttribute("id",i);
    div2.className = ("grid");
    container.appendChild(div2);
};

const allDivs = document.getElementsByClassName("grid");
console.log(allDivs);

/*for (i=0; i<16; i++){
    divCreate(i);
}*/
let multiA;
let row;
let square;
let checkVal = false;
let checkRainbow = false;
//clickRainbow = selectRainbow.addEventListener("click");
selectRainbow.addEventListener("click",()=>{
    checkRainbow = !checkRainbow;
})

gridButton.addEventListener("click",()=>{

    container.innerHTML = ("");

    const a = prompt("Choose a grid amount","");
    multiA = a*a;

    container.style.setProperty(
        "grid-template-columns",`repeat(${a}, 2fr)`
    );

    container.style.setProperty(
        "grid-template-rows",`repeat(${a}, 2fr)`
    );
    
    if(a >= 100){return alert("Too large number")};
    for (i=0; i<multiA; i++){
        divCreate(i);
    };
    
    //console.log(check);
    
    for (const theDiv of allDivs){
            theDiv.addEventListener("click",()=>checkVal = !checkVal);
            theDiv.addEventListener("mouseover",() => {
                if(checkVal){
                theDiv.setAttribute("style","background-color:black");
                    if(checkRainbow){theDiv.setAttribute("style","background-color:red");}
                }
                })
        /*theDiv.addEventListener("mouseout",()=>{
            theDiv.setAttribute("style","background-color:white");
        })*/
    }
    
})

