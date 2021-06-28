

const quadrupleOperation = (function(){
    const sum = (a,b)=>{

        return a+b;
    };
    const extraction = (a,b)=>{

        return a-b;
    }
    const multiplication = (a,b)=>{

        return a*b;
    }

    const division = (a,b)=>{

        return a/b;
    }


    return {
        sum,
        extraction,
        multiplication,
        division
    }
})();

//Kontroller

const control = (function(proc){

    const esit = document.querySelector("#esittir");
    const text = document.querySelector("#result");

    const duzgunSonuc = (value)=>{
/*        var value = "Hello";
        console.log(value.charAt(value.length-1));*/

    }

    const islemNe = (value)=>{
        for(var i =0;i<value.length;i++){
            if(value[i]=="*"){
                return 1;
            }
            else if(value[i]=="/"){
                return 2;
            }
            else if(value[i]=="+"){
                return 3;
            }
            else if(value[i]=="-"){
                return 4;
            }

        }
        return 0;
    }
    const islemeGoreDeger = (value)=>{
        var islem = islemNe(value);
        var a;
        var b;
        var sonuc;
        text.value="";
        if(islem==1){
            value = value.split("*");
            a = Number.parseInt(value[0]);
            b = Number.parseInt(value[1]);
            sonuc = proc.multiplication(a,b);
            text.value=sonuc;
            duzgunSonuc(text.value);
        }
        else if(islem==2){
            value = value.split("/");
            a = Number.parseInt(value[0]);
            b = Number.parseInt(value[1]);
            sonuc = proc.division(a,b);
            text.value=sonuc;

        }
        else if(islem==3){
            value = value.split("+");
            a = Number.parseInt(value[0]);
            b = Number.parseInt(value[1]);
            sonuc = proc.sum(a,b);
            text.value=sonuc;

        }
        else if(islem==4){
            value = value.split("-");
            a = Number.parseInt(value[0]);
            b = Number.parseInt(value[1]);
            sonuc = proc.extraction(a,b);
            text.value=sonuc;
        }
        else{
            return 0;
        }
    }
    const control = (value)=>{
        esit.addEventListener('click',()=>{
            islemeGoreDeger(value);    
                
        });

    }


    return {
        control
    }

})(quadrupleOperation);

//TIKLAMA İŞLEMİ BURDA YAPILACAK
const clickEvent = (function(control){

    const text = document.querySelector("#result");
    const selectedButton = (target)=>{
        if(target.classList == "btn-num" || target.classList == "btn"){

            text.value +=target.textContent; 
            control.control(text.value);
            
        }
    }

    return {
        selectedButton,
        text

    }

})(control);


const app = (function(event){

    const loadListener = ()=>{

        document.querySelector("#cal").addEventListener('click',(e)=>{
            event.selectedButton(e.target);
            var str = e.target.getAttribute("id");
            if(str=="clear"){
                event.text.value="";
                
            }


        });
    }

    return {
        init:function(){
            loadListener();
        }

    }


})(clickEvent);

app.init();
