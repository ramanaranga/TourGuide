function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phno: document.getElementById("phno").value,
      last: document.getElementById("last").value,
      Address: document.getElementById("Address").value,
      experience: document.getElementById("experience").value,
     
    };
  
    const serviceID = "service_lvw6u8h";
    const templateID = "template_tg45ddl";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("phno").value = "";
          document.getElementById("last").value = "";
          document.getElementById("Address").value = "";
          document.getElementById("experience").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  