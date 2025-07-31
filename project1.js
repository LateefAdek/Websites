/*function tempconv(){
    let celsiusvalue=document.getElementById("celsius_input").value;
    let fahrenheitvalue=document.getElementById("fahrenheit_input").value;
    if(celsiusvalue===""){
        document.getElementById("celsius_input").value=(fahrenheitvalue-32)*(5/9);
    }
    else if(fahrenheitvalue===""){
        document.getElementById("fahrenheit_input").value=(celsiusvalue*1.8)+32;
    }
    else{
        window.alert("Enter either Celsius or Fahrenheit value")
    }
};
function resetcelsius(){
    document.getElementById("celsius_input").value="";
    document.getElementById("fahrenheit_input").value="";
};
function resetfahrenheit(){
    document.getElementById("celsius_input").value="";
    document.getElementById("fahrenheit_input").value="";
}
*/
function options(item){
   let clickedOption1=item.textContent;
   document.getElementById("celsius_input").placeholder=clickedOption1;
   document.querySelector(".options1").style.display="none";
};
function options1(item){
   let clickedOption2=item.textContent;
   document.getElementById("fahrenheit_input").placeholder=clickedOption2;
   document.querySelector(".options2").style.display="none";
};
function tempconv(){
   let placeholderValue1=document.getElementById("celsius_input").placeholder;
   let placeholderValue2=document.getElementById("fahrenheit_input").placeholder;
   let value1=document.getElementById("celsius_input").value;
   let value2=document.getElementById("fahrenheit_input").value;
   if(placeholderValue1==="Celsius"&&placeholderValue2==="Celsius"&&value2===""){
    document.getElementById("fahrenheit_input").value=value1;
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Celsius"&&value1===""){
   document.getElementById("celsius_input").value =value2;
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Rankine"&&value2===""){
    document.getElementById("fahrenheit_input").value=(value1*(9/5))+491.67;
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Rankine" &&value1===""){
    document.getElementById("celsius_input").value=(value2-491.67)*(5/9);
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Kelvin"&&value2===""){
    document.getElementById("fahrenheit_input").value=value1+273;
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Kelvin"&&value1===""){
    document.getElementById("celsius_input").value=value2-273;
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Fahrenheit" && value2===""){
    document.getElementById("fahrenheit_input").value=(value1*1.8)+32;
   }
   else if(placeholderValue1==="Celsius"&&placeholderValue2==="Fahrenheit" && value1===""){
    document.getElementById("celsius_input").value=(value2-32)*(5/9);
   }
   //celsius as base
   //rankine as base
    else if(placeholderValue1==="Rankine"&&placeholderValue2==="Rankine"&&value2===""){
    document.getElementById("fahrenheit_input").value=value1;
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Rankine"&&value1===""){
   document.getElementById("celsius_input").value =value2;
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Celsius"&&value2===""){
    document.getElementById("fahrenheit_input").value=(value1-491.67)*(5/9);
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Celsius" &&value1===""){
    document.getElementById("celsius_input").value=(value2*1.8)+491.67;
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Kelvin"&&value2===""){
    document.getElementById("fahrenheit_input").value=value1*(5/9);
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Kelvin"&&value1===""){
    document.getElementById("celsius_input").value=value2*(9/5);
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Fahrenheit" && value2===""){
    document.getElementById("fahrenheit_input").value=value1-459.67;
   }
   else if(placeholderValue1==="Rankine"&&placeholderValue2==="Fahrenheit" && value1===""){
    document.getElementById("celsius_input").value=value2+459.67;
   }
   //kelvin as base
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Rankine"&&value2===""){
    document.getElementById("fahrenheit_input").value=value1*(9/5);
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Rankine"&&value1===""){
   document.getElementById("celsius_input").value =value2*(5/9);
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Celsius"&&value2===""){
    document.getElementById("fahrenheit_input").value=(value1-273);
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Celsius" &&value1===""){
    document.getElementById("celsius_input").value=(value2+273);
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Kelvin"&&value2===""){
    document.getElementById("fahrenheit_input").value=value1;
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Kelvin"&&value1===""){
    document.getElementById("celsius_input").value=value2;
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Fahrenheit" && value2===""){
    document.getElementById("fahrenheit_input").value=((value1-273)*1.8)+32;
   }
   else if(placeholderValue1==="Kelvin"&&placeholderValue2==="Fahrenheit" && value1===""){
    document.getElementById("celsius_input").value=((value2-32)*(5/9))+273;
   }
   //fahrenheit as base
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Rankine"&&value2===""){
    document.getElementById("fahrenheit_input").value=parseFloat(value1)+459.67;
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Rankine"&&value1===""){
   document.getElementById("celsius_input").value=parseFloat(value2)-459.67;
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Celsius"&&value2===""){
    document.getElementById("fahrenheit_input").value=(value1-32)*(5/9);
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Celsius" &&value1===""){
    document.getElementById("celsius_input").value=(value2*1.8)+32;
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Kelvin"&&value2===""){
    document.getElementById("fahrenheit_input").value=((value1-32)*(5/9))+273;
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Kelvin"&&value1===""){
    document.getElementById("celsius_input").value=((value2+273)*1.8)+32;
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Fahrenheit" && value2===""){
    document.getElementById("fahrenheit_input").value=value1;
   }
   else if(placeholderValue1==="Fahrenheit"&&placeholderValue2==="Fahrenheit" && value1===""){
    document.getElementById("celsius_input").value=value2;
   }
   else{
    window.prompt("Enter a value")
   }
   
};
function appear(){
   currentAppear= document.querySelector(".options1").style.display;
   if(currentAppear==="none"){
    document.querySelector(".options1").style.display="block";
    document.getElementById("celsius_input").value="";
   }
   else{
    currentAppear="none"
   }
};
function appear1(){
   currentAppear= document.querySelector(".options2").style.display;
   if(currentAppear==="none"){
    document.querySelector(".options2").style.display="block";
    document.getElementById("fahrenheit_input").value="";
   }
   else{
    currentAppear="none";
   }
};
//to remove entered  value
function resetinput1(){
    document.getElementById("celsius_input").value="";
}
function resetinput2(){
    document.getElementById("fahrenheit_input").value="";
}