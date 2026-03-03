let inp = document.querySelector("#inp");
let btn = document.querySelector("#Button");
let Msgbox =document.querySelector(".box");
let user = document.querySelector(".btn");
let Usr = document.querySelector("#Buttn");
let form = document.querySelector("form");
let Crntusr = document.querySelector("#alert")

form.addEventListener("submit", (e)=>{
  e.preventDefault();
});




function Msg (color,clas){
    this.color = color;
    this.class = clas;
    
    this.write = function(text,cls){
   
        let User = sessionStorage.getItem("Value");
      let p = document.createElement("p");
       Msgbox.appendChild(p);
       if(User === "Harshad"){
        p.classList.add("haa");
       }
       else{
        p.classList.add("h2");
       };
       p.textContent = `${User}:`+" "+text;
     
       };
};


user.addEventListener("click", (e)=>{

  const value = e.target.value;
  Crntusr.textContent = `${value} Selected`
  sessionStorage.setItem("Value", value);
 
});


btn.addEventListener("click", ()=>{
  let fnc = new Msg;
   fnc.write(`${inp.value}`,"haa");
   inp.value = "";   
});



