window.onerror = function (error, source, lineno, colno, error_object) {

   const parent = document.getElementById("result");

   const master = document.createElement("div");

   const text = document.createElement("p");

   //executes the function responsable for redirecting the user to a new tab based on the error they clicked on.

   master.className = "errorMaster";

   const script = document.createElement("script");

    // Print the error message
    //let output = document.getElementById("result");
   let output = text;

   output.innerHTML += `
   Message : ${error} <br>

   url ${source} <br>

   Line Number : ${lineno} <br>

   Column number : ${colno} <br>

   Error Object : ${error_object} <br>
   `;

   console.log(error);

   master.addEventListener('click', function(){
     window.open('http://google.com/search?q='+error);
   });
   master.appendChild(text);
   parent.appendChild(master);

   }