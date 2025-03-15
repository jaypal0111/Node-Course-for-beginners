// npm install nodemailer

//https://myaccount.google.com/lesssecureapps?pli=1&rapt=AEjHL4PvngdZRAHe44h9f2F1UaPnN31zisCJtYc7ZaD6VjurqQAnBZF3fLZuET6l5EFX1IYUy5_OTnmS3inLjWl0lV63dr1Z8w
//https://stackoverflow.com/questions/72530276/nodemailergoogle-disabled-the-less-secure-app-option-on-google-accounts-i-woul
//https://myaccount.google.com/security


var nodemailer = require('nodemailer');


// sender login details
var sender = nodemailer.createTransport({

    service: 'gmail',
    auth:{

     user: 'ibjay47@gmail.com',
    // pass:'ib@123456'
    pass: 'hsccslcqtngczxle'//dneraopnefmuwajm

    }

});

//mail options 
var mailOptions = {
     
    from: 'ibjay47@gmail.com',
    to: 'shahurmi6@gmail.com',
    subject: 'Sending an email using Node.js | With Urmi',
    //text: 'Hi Urmi, Node js email is working!'
    html: '<h1> Hi Urmi </h1><p>It is html!</p>'

};

//send email method
sender.sendMail(mailOptions,function(error, info){

     if(error){

       console.log(error);

     } else {

       console.log('Email sent:' + info.response);
       console.debug(info);

     }

});


