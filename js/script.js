

//Get elements & Variables Defined

//Name +Job Section
const first_text=document.getElementById("name");
const job_drop=document.getElementById("title");
const other_Text= document.getElementById("other-Title");


//T Shirt Drop
const design_drop= document.getElementById("design");
const color_drop= document.getElementById("color");
var color_theme=document.querySelector("#colors-js-puns label");


//Schdeuling Parts
const checkBoxes=document.querySelectorAll("input[type='checkbox']");
const jsf_class=document.querySelector("input[name='js-frameworks' ");
const jsl_class=document.querySelector("input[name='js-libs' ");
const exp_class=document.querySelector("input[name='express' ");
const node_class=document.querySelector("input[name='node' ");
const btool_class=document.querySelector("input[name='build-tools' ");
const npm_class=document.querySelector("input[name='npm'");

//Payments parts
const payment_drop= document.getElementById("payment");
const credit_div= document.getElementById("credit-card");
const paypal_div= document.getElementById("paypal");
const bitcoin_div= document.getElementById("bitcoin");

//validator
const name_detail= document.getElementById("name");
const email_detail= document.getElementById("mail");
const cc_detail= document.getElementById("cc-num");
const zip_detail= document.getElementById("zip");
const cvv_detail= document.getElementById("cvv");
const name_warning="Please enter your name";
const email_warning="Please enter a valid email";
const cc_warning="Please enter a valid Credit Card";
const zip_warning="Please enter a valid Zip";
const cvv_warning="Please enter a valid CVV";
const nameWarn = document.createElement("p");
const emailWarn = document.createElement("p");


const but_sub= document.querySelector("button");

//initiate hidden



//This works to get value of warnings unheeded


//Functions for when conditions are met

//function to display job text box
const checkJob=() =>{if (title.value=="other"){
  other_Text.style.display="block";
}
else {
  other_Text.style.display="none";
}}

//function to hide colors (In Progress)

function noTheme() {
      color_theme.innerHTML= 'Please select a T-shirt theme';
      color_drop.style.display="none";

};



const checkTheme=() =>{
  color_theme.innerHTML= 'Color:';
  color_drop.style.display="block";
  if (design.value=="js puns"){
        for (let i = 0; i < 3; i++) {
          color.options[i].style.display="block";
          }
          for (let i = 3; i < 6; i++) {
            color.options[i].style.display="none";
          }
        }

    else if(design.value=="heart js"){
        for (let i = 0; i < 3; i++) {
        color.options[i].style.display="none";
        }
        for (let i = 3; i < 6; i++) {
        color.options[i].style.display="block";
        }}
    };

// crossEvent Checker (In Progress)
    //Need to set things to aggreate(In Progress)
    //need to set things to disable(working)

var warnings=false;
var scheduling=false;
const schedule= ()=>{
var totalCost=0;
    for (i=0; i<checkBoxes.length;i++){


    //Agregate Works to create total

    if (checkBoxes[i].checked == true){

      let addCost =checkBoxes[i].dataset.cost;
      totalCost +=parseInt(addCost);



    }
//Create Total Cost Line
    const act_field=document.querySelector(".total-cost");
    if(totalCost>0) {
        act_field.innerHTML= "Total Cost: "+ " $ " +totalCost;
        act_field.style.display="block";
      } else {act_field.style.display="none"}


    //conflict tuesday 9-12
    if (jsf_class.checked == true){
      exp_class.disabled = true;
    }
    if (exp_class.checked == true){
      jsf_class.disabled = true;
    }
    if (jsf_class.checked == false){
      exp_class.disabled = false;
    }
    if (exp_class.checked == false){
      jsf_class.disabled = false;
    }




    //conflict tuesday 1-4
    if (jsl_class.checked == true){
      node_class.disabled = true;
    }
    if (node_class.checked == true){
      jsl_class.disabled = true;
    }
    if (jsl_class.checked == false){
      node_class.disabled = false;
    }
    if (jsl_class.checked == false){
      node_class.disabled = false;
    }}
    //Validator for Schedule
    act_warn=document.querySelector("#act_required");
    if (totalCost>0){
      scheduling=true;
      act_warn.style.display="none";
    } else {act_warn.style.display="block";
      scheduling=false;



}
}

// payment Type Checker


function payType() {
      paypal_div.style.display="none";
      bitcoin_div.style.display="none";
      if (payment_drop.value=="paypal"){
      paypal_div.style.display="block";
      bitcoin_div.style.display="none";
      credit_div.style.display="none";
      }
      if (payment_drop.value=="bitcoin"){
      paypal_div.style.display="none";
      bitcoin_div.style.display="block";
      credit_div.style.display="none";
      }
      if (payment_drop.value=="credit card"){
      paypal_div.style.display="none";
      bitcoin_div.style.display="none";
      credit_div.style.display="block";
      }
};

//set payment drop to credit card
function setCredit (){
  payment_drop.value="credit card";
}

var cvv_ok;
var cc_ok;
var cc_spec;
var name_ok;
var email_ok;
var zip_ok;


//Validation Code
function validator(){



//name field validaton
    name_label=document.querySelector("label[for='name']");
    name_label.innerHTML="Name:";
    var name_val = /[A-z]{3}/;
    var name_input=document.getElementById('name').value;
    name_label=document.querySelector("label[for='name']");
    var name_ok=name_val.test(name_input);
    if (name_ok==false){
            nameWarn.innerHTML="<span class='warning'>"+name_warning+"</span>";
            name_label.appendChild(nameWarn);

    }else {nameWarn.remove();
  }
//email field validation
    email_label=document.querySelector("label[for='mail']");
    email_label.innerHTML="Email:";
    var email_val = /^[^@]+@[^@.]+\.[a-z]+$/i;
    var email_input=document.getElementById('mail').value;
    var email_ok=email_val.test(email_input);


      var emailWarn = document.createElement("p");
      var email_ok=email_val.test(email_input);
      if (email_ok==false){
            emailWarn.innerHTML="<p class='warning'>"+email_warning+"</p>";
            email_label.appendChild(emailWarn);

      }else {emailWarn.remove();
          }



  //credit card valication
  if (payment_drop.value=="credit card")  {
    //Num
    var cc_input=document.getElementById("cc-num").value;
    cc_label=document.querySelector("label[for='cc-num']");
    cc_label.innerHTML="Card Number:";
    var cc_special = /[\D]/;

    var cc_val = /^[0-9]{13,16}$/;
    var cc_ok=cc_val.test(cc_input);
    var cc_spec=cc_special.test(cc_input);
          var ccWarn = document.createElement("span");
          var cc_ok=cc_val.test(cc_input);
          var cc_spec=cc_special.test(cc_input)
          if (cc_spec==true){
            ccWarn.innerHTML="<span class='warn-cc'>"+"Only Digits Allowed"+"</span>";
            cc_label.appendChild(ccWarn);

          }
          else if (cc_ok==false){
            ccWarn.innerHTML="<span class='warn-cc'>"+cc_warning+"</span>";
            cc_label.appendChild(ccWarn);

        }else {ccWarn.remove();
  }

    //Zip
    var zip_input=document.getElementById("zip").value;
    zip_label=document.querySelector("label[for='zip']");
    zip_label.innerHTML="Zip:";
    var zip_val = /^[0-9]{5}$/;
    var zip_ok=zip_val.test(zip_input);

          var zipWarn = document.createElement("span");
          var zip_ok=zip_val.test(zip_input);
          if (zip_ok==false){
            zipWarn.innerHTML="<span class='warn-cc'>"+zip_warning+"</span>";
            zip_label.appendChild(zipWarn);

        }else {zipWarn.remove()
        }


    //CVV

      var cvv_input=document.getElementById("cvv").value;
      cvv_label=document.querySelector("label[for='cvv']");
      cvv_label.innerHTML="CVV:";
      var cvv_val = /^[0-9]{3}$/;
      var cvv_input=document.getElementById('cvv').value;
      var cvv_ok=cvv_val.test(cvv_input);

            var cvvWarn = document.createElement("span");
            var cvv_ok=cvv_val.test(cvv_input);
            if (cvv_ok==false){
              cvvWarn.innerHTML="<span class='warn-cc'>"+cvv_warning+"</span>";
              cvv_label.appendChild(cvvWarn);

          }else {cvvWarn.remove()
          }}





//final verificaiton
if (payment_drop.value=="credit card"){
  console.log(payment_drop.value);
  if(cc_ok && zip_ok && cvv_ok && email_ok && name_ok && (cc_spec==false)){
  warnings=true;}
  else {warnings=false;}}
else {
  console.log(payment_drop.value);
  if(email_ok && name_ok){warnings=true;}
  else {warnings=false;}}


console.log(cc_ok,zip_ok,cvv_ok, email_ok,name_ok, cc_spec, warnings, scheduling);

}




//Add event listeners

//job listeners
job_drop.addEventListener("change", function (){
  checkJob();
});

//theme listerners
design_drop.addEventListener("change", function (){
  checkTheme();
});

//checkbox listeners
for (i=0;i<checkBoxes.length;i++){
checkBoxes[i].addEventListener("change", function (){
  schedule();
});
}

//payment listeners
payment_drop.addEventListener("change", function (){
  payType();
});

//validator listeners
name_detail.addEventListener("keyup", function (){
  validator();
});

email_detail.addEventListener("keyup", function (){
  validator();
});

cvv_detail.addEventListener("focusout", function (){
  validator();
});

cc_detail.addEventListener("keyup", function (){
  validator();
});

zip_detail.addEventListener("focusout", function (){
  validator();
});



//form submission validation
document.getElementById("check_submit").addEventListener("click", function(event){

    event.preventDefault()
      console.log(payment_drop.value);
      validator();
      console.log(warnings,scheduling)

    if (warnings && scheduling){
      document.querySelector("form").submit()}
    else {

    }
    }


    );






//Set up page correctly on load
payType();
noTheme();
checkJob();
setCredit();
for (let i = 0; i < 6; i++) {color.options[i].style.display="none";};


//Set First text to Auto Focus
