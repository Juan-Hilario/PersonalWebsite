            const copyBtn= document.querySelector("#emailButton");
            const alertBox= document.querySelector(".alert-box");
            
            function copyText(){
                navigator.clipboard.writeText("juanhilario5645@gmail.com");
            }
        
            copyBtn.addEventListener("click", function(){
                showAlertbox();
            })
        
            function showAlertbox(){
                alertBox.classList.remove("hidden");
                alertBox.classList.remove("hide");
                alertBox.classList.add("show");
                
                setTimeout(hideAlertbox,3000);
            }
            
            function hideAlertbox(){
                alertBox.classList.remove("show");
                alertBox.classList.remove("hidden");
                alertBox.classList.add("hide");
            }