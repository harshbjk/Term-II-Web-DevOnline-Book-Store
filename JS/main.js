$(document).ready(function() {
    console.log('Page is ready with JQuery1');
    $("#RegisterationForm").validate({
        rules:{
            fname:{
                required: true
            },
            phone:{
                required:true,
                minlength:3
            }
        }
    });
});
let saveFile = () => {
    	
    // Get the data from each element on the form. Duplicate for the rest
    const name = document.getElementById('Name');
    const zip = document.getElementById('Zip');
    const email = document.getElementById('Email');
    const country = document.getElementById('selCountry');
    const msg = document.getElementById('msg');
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'zip: ' +zip.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Country: ' + country.value + ' \r\n ' + 
        'Message: ' + msg.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}