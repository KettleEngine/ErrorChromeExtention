window.onerror = function (error, source, lineno, colno, error) {
         
         // Print the error message
         let output = document.getElementById("result");
         output.innerHTML += "Message : " + error + "<br>";
         
         // Print the url of the file that contains the error
         output.innerHTML += "Url : " + source + "<br>";
         
         // Print the line number from which the error generated
         output.innerHTML += "Line number : " + lineno + "<br>";
         
         // Print the column number of the error line
         output.innerHTML += "Column number : " + colno + "<br>";
         
         // Print he error object
         output.innerHTML += "Error Object : " + error;
      }