let btn1=document.querySelector("#btn1");
let currmode="light";
// btn1.onclick =()=>{
//     alert("btn1 was clicked");
// }

// btn1.onmouseover =(d) =>{
//     console.log(d);
//     console.log("You are inside btn");
// }

// btn1.addEventListener("click",() =>{
// console.log("button 1 is clicked");
// });

btn1.addEventListener('click',()=>{
    if(currmode=="light"){
        currmode="dark"
        document.querySelector("body").style.backgroundColor="black";

    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="white";
    }
    console.log(currmode);
}
)


