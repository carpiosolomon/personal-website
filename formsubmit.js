// function sendMail(parameters){
//     var tempParams ={
//         form: document.getElementsByClassName("contactForm").value,
//     };

//     emailjs.send('service_ulobz6d','template_ytixvrs',tempParams)
//     .then(function(res){
//         console.log("success", res.status);
//     })
// } 

function sendMail(){
    var tempParams = {
        fname: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    emailjs.send('service_ulobz6d','template_ytixvrs',tempParams) //<-- Change the parameters
    .then(function(res){
        console.log("success", res.status);
    })
} 