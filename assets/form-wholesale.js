 
 document.addEventListener("DOMContentLoaded", function() {
 
 console.log("ready0s")
 if(document.getElementById('form-data-wholesale')){

    console.log("ready")

    let currStep;
    document.querySelectorAll(".frm--btn.next-form").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault()
        currStep = e.target.dataset.current

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;    
        let success = false

        /* VAR MODULE 1 */
        let nameMod1 = document.getElementById("name-mod-1")
        let lastNameMod1 = document.getElementById("last-name-mod-1")
        let addressMod1 = document.getElementById("address-mod-1")
        let cityMod1 = document.getElementById("city-mod-1")
        let stateMod1 = document.getElementById("state-mod-1")        
        let zipCodeMod1 = document.getElementById("zip-mode-1")
        let phoneMod1 = document.getElementById("phone-mod-1")
        let emailMod1 = document.getElementById("email-mod-1")

        /* VAR MODULE 2 */
        let accountingNameMod2 = document.getElementById("accounting-name-mod-2")
        let accountingPhoneMod2 = document.getElementById("accounting-phone-mod-2")
        let salesNameMod2 = document.getElementById("sales-name-mod-2")
        let salesPhoneMod2 = document.getElementById("sales-phone-mod-2")
        
        /* VAR MODULE 3 */    
        let companyMod3 = document.getElementById("company-mod-3")
        let websiteMod3 = document.getElementById("website-mod-3")
        let addressMod3 = document.getElementById("address-mod-3")
        let cityMod3 = document.getElementById("city-mod-3")
        let stateMod3 = document.getElementById("state-mod-3")
        let zipCodeMod3 = document.getElementById("zip-mode-3")
        let phoneMod3 = document.getElementById("phone-mod-3")
        let emailMod3 = document.getElementById("email-mod-3")
        let feinMod3 = document.getElementById("federal-employer-mod-3")
        let resellerNumberMod3 = document.getElementById("reseller-number-mod-3")

        let aboutCompanyMod3 = document.getElementById("about-company-mod-3")
        let companySalesMod3 = document.getElementById("company-sales-mod-3")
        let numberEmployeesMod3 = document.getElementById("employees-mod-3")
        let aboutColorfastMod3 = document.getElementById("about-color-fast-mod-3")
        let companyGoalsMod3 = document.getElementById("company-goals-mod-3")   
        let companyPhoneMod3 = document.getElementById("company-phone-mod-2")   
        
        let emailIsEmpty = document.getElementById("sales-email-mod-2")   

        let termsAcept = document.getElementById("accept-mod-3")
        let termsAceptColor = document.getElementById("accept-color-mod-3")
        let main_sales_contact_email = document.getElementById("main_sales_contact_email")
        let accounting_contact_name = document.getElementById("accounting_contact_name")
       

        /* VALID MODULE 3 */
        if(currStep == "3"){
          
          if(nameMod1.value == ""){        
            msg(nameMod1)
          }else if(lastNameMod1.value == ""){
            msg(lastNameMod1)
          }else if(addressMod1.value == ""){
            msg(addressMod1)
          }else if(cityMod1.value == ""  ){
            msg(cityMod1)
          }else if(stateMod1.value == ""){
            msg(stateMod1)
          }else if(zipCodeMod1.value == ""){     
            msg(zipCodeMod1)
          }else if(phoneMod1.value == ""){
            msg(phoneMod1)
          }else if(emailMod1.value == ""  || !emailMod1.value.match(validRegex)){
            msg(emailMod1)
          }/*else if(accountingNameMod2.value == ""){
            msg(accountingNameMod2)
          }else if(accountingPhoneMod2.value == ""){
            msg(accountingPhoneMod2)
          }else if(salesNameMod2.value == ""){
            msg(salesNameMod2)
          }else if(salesPhoneMod2.value == ""){
            msg(salesPhoneMod2)          
          }else if(companyMod3.value == ""){
             msg(companyMod3)
          }else if(websiteMod3.value == ""){
            msg(websiteMod3)
          }else if(addressMod3.value == ""){
            msg(addressMod3)
          }else if(cityMod3.value == ""){
            msg(cityMod3)
          }else if(stateMod3.value == ""){
            msg(stateMod3)
          }else if(zipCodeMod3.value == ""){          
            msg(zipCodeMod3)
          }else if(phoneMod3.value == ""){
            msg(phoneMod3)
          }else if(emailMod3.value == "" || !emailMod3.value.match(validRegex)){
            msg(emailMod3)            
          }*/else if(feinMod3.value == ""){
            msg(feinMod3)
          }else if(resellerNumberMod3.value == ""){
            msg(resellerNumberMod3)   
          }else if(aboutCompanyMod3.value == ""){
             msg(aboutCompanyMod3) 
          }else if(numberEmployeesMod3.value == ""){
             msg(numberEmployeesMod3) 
          }else if(aboutColorfastMod3.value == ""){
             msg(aboutColorfastMod3) 
          }else if(companyGoalsMod3.value == ""){
             msg(companyGoalsMod3) 
          }else if(!termsAcept.checked){               
            msg(termsAcept)
          }else if(!termsAceptColor.checked){        
            msg(termsAceptColor)        
          }else{  

           if(companyMod3.value == ""){
              companyMod3.value = nameMod1.value
            }

            if(salesNameMod2.value == ""){
              salesNameMod2.value = nameMod1.value
            }

            if(companyPhoneMod3.value == ""){
              companyPhoneMod3.value =  phoneMod1.value
            }

            if(companyPhoneMod3.value == ""){
              companyPhoneMod3.value =  phoneMod1.value
            }

            if(emailIsEmpty.value == ""){
              emailIsEmpty.value = emailMod1.value
            }
           
            if(accountingPhoneMod2.value == ""){
              accountingPhoneMod2.value = phoneMod1.value
            }

            if(salesPhoneMod2.value == ""){
              salesPhoneMod2.value = phoneMod1.value
            }

            if(main_sales_contact_email.value == ""){
               main_sales_contact_email.value = emailMod1.value
            }
            if (accounting_contact_name.value != "") {
              accounting_contact_name.value = nameMod1.value
            }

            document.querySelector("#send-frm-progress span").innerText = "Sending ...";
            let formData = new FormData();

            document.querySelectorAll("#form-data-wholesale input, #form-data-wholesale textarea, #form-data-wholesale select").forEach(function(el, index) {                      
              if(el.name != "copy" & el.name != "acept_terms_and_conditions" & el.name != "i_consent_to_colorfast_contacting" & el.name != "your_reseller"){          
                  formData.append(el.name, el.value);              
              }
              if(el.name == "acept_terms_and_conditions" || el.name == "i_consent_to_colorfast_contacting"){
                if(el.checked){
                  formData.append(el.name, 1); 
                }else{
                  formData.append(el.name, 0); 
                }              
              }          
            });

          // Use fetch API to send the data
            fetch("https://colorfast.portaldev.xyz/api/v1/saveform", {
                method: 'POST',
                body: formData,
                //body: serializedData, // FormData will be sent as multipart/form-data
                redirect: "follow"
            })
            .then(response => {
                if(response.ok) {
                    return response.json(); // or response.text() if the server returns plain text
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                success = true
                //console.log('File and text uploaded successfully:', data);            
                document.querySelector("#send-frm-progress span").innerText = "Submit"
                document.querySelector("body").classList.add("kill-overflow")
                document.querySelector("#request-send").classList.add("open")
              //console.log(23)
                msg("", success)       
            })
            .catch(error => {
                console.error('Error during upload:', error);
            });
            
          }       
        }
      }); /* END CLICK SUBMIT */
    });

    /* CLOSE POPUP SUCCESS REQUEST */
    document.querySelectorAll(".close--popup-success").forEach((item) => {
      item.addEventListener("click", (e) => {
        document.querySelector("body").classList.remove("kill-overflow")
        document.querySelector("#request-send").classList.remove("open")  
        document.getElementById("form-data-wholesale").reset()  
        location.reload();    
      });
    })

    // if(btnPrev){
    //     btnPrev.addEventListener("click", () => {
    //     lessStep()
    //     });      
    // }

    document.querySelector("#copy-fields_1").addEventListener("click", (e) => {

      console.log("click")

      let mainName = document.getElementById("name-mod-1").value
      
      let accountingNameMod2 = document.getElementById("phone-mod-1").value
      let emailMod1 = document.getElementById("email-mod-1").value
      
      document.getElementById("accounting-phone-mod-2").value = accountingNameMod2
      document.getElementById("sales-phone-mod-2").value = accountingNameMod2

      document.getElementById("accounting-name-mod-2").value = emailMod1
      document.getElementById("main_sales_contact_email").value = emailMod1

      document.getElementById("accounting_contact_name").value = mainName
      document.getElementById("sales-name-mod-2").value = mainName


      

    });

    document.querySelector("#copy-fields").addEventListener("click", (e) => {
      
      let accountingAddress = document.getElementById("address-mod-1").value
      let accountingCity = document.getElementById("city-mod-1").value
      let accountingState = document.getElementById("state-mod-1").value

      let accountingZipcode = document.getElementById("zip-mode-1").value
      let accountingPhone = document.getElementById("phone-mod-1").value
      let accountingEmail = document.getElementById("email-mod-1").value

      document.getElementById("address-mod-3").value = accountingAddress
      document.getElementById("city-mod-3").value = accountingCity
      document.getElementById("state-mod-3").value = accountingState

      document.getElementById("zip-mode-3").value = accountingZipcode
      document.getElementById("company-phone-mod-2").value = accountingPhone
      document.getElementById("sales-email-mod-2").value = accountingEmail


    });

    /* OPEN POPUP TERMS */
    document.getElementById("terms-popup").addEventListener("click", (e) => {
      e.preventDefault()
      document.querySelector("body").classList.add("kill-overflow")
      document.querySelector("#terms-wholesale").classList.add("open")
    });


    document.querySelectorAll(".close--popup-terms").forEach((item) => {
      item.addEventListener("click", (e) => {
        console.log("click colse")
        document.querySelector("body").classList.remove("kill-overflow")
        document.querySelector("#terms-wholesale").classList.remove("open")      
      });
    });
}


 }); /* END ONLOAD */





 const msg = (el, success) => {
  let anchor = document.getElementById("view-msg")
  if(success){
    anchor.style.color = "#008060"
    anchor.innerHTML = `Sent successfully`
    setTimeout(() => {
      anchor.innerHTML = ``
     
    }, 3500);

  }else{
    el.focus()
    anchor.style.color = "red"
    anchor.innerHTML = `${el.dataset.name} field is empty`
    setTimeout(() => {
      anchor.innerHTML = ``
    }, 3000);
  }
}