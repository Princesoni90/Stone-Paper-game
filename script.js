let userscore=0;
let compscore=0;

let choice= document.querySelectorAll(".choice");
let msg=document.querySelector(".msg")
let msgbox=document.querySelector(".message")

let userpara=document.querySelector("#user-score");
let comppara=document.querySelector("#comp-score");

let gencompchoice=()=>{
    let option=["rock","paper","scissors"];
    let ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
};

let drowgame=()=>{
    console.log("Its a Draw")
    msg.innerText=`Game drow both choose same try again`
    msgbox.style.backgroundColor="blue"
};
let showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        console.log("You Win");
        msg.innerText=`You Win your ${userchoice} beats Computer ${compchoice}`;
        msgbox.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        console.log("You Losse");
        msg.innerText=`You Losse computer ${compchoice} beats your ${userchoice}`;
        msgbox.style.backgroundColor="red"; 
    }
};

let playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    let compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice===compchoice){
        drowgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin= compchoice==="paper"?false :true;
        }
        else if (userchoice==="paper"){
                userwin=compchoice==="scissors"?false :true;
        }
        else if (userchoice==="sissors"){
                userwin=compchoice==="rock"?false :true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choice.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        let userchoice= choice.getAttribute("id");
        playgame(userchoice);
    }); 
});
