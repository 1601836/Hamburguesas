const botones = document.querySelectorAll(".btn");
botones.forEach((boton)=>{
    boton.addEventListener("change",()=>{
        const Dely = document.querySelector(".Dely");
        const Pedi = document.querySelector(".Pedi");

        Dely.style.background = "silver";
        Dely.style.color = "black";
        Pedi.style.background = "silver";
        Pedi.style.color = "black";

        if(boton.value==="Delyberi"){
            Dely.style.background = "black";
            Dely.style.color = "yellow";
        }else if(boton.value==="Pedido"){
            Pedi.style.background = "black";
            Pedi.style.color = "yellow";
        }

    });
});