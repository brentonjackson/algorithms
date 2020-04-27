'use strict';
/*
 * Complete the 'getEmailThreads' function below.
 *
 * The function is expected to return a 2D_INTEGER_ARRAY.
 * The function accepts STRING_ARRAY emails as parameter.
 */

function getEmailThreads(emails) {
    // Write your code here
    
    // array with email thread number/position
    let emailArr = [];
    // initialize thread number and position
    let threadNumber = 0;
    let threadPosition = 0;
    // holder array to check for new threads
    let loggedEmails = [];

    for (let i=0; i<emails.length; i++) {
        // break them up to get valuable info
        let emailData = organizeEmails(emails[i]);
        
        if (loggedEmails.includes(emailData.sender) && loggedEmails.includes(emailData.receiver)) {
            threadPosition++;
            console.log("thread pos: " + threadPosition);
        } else {
            loggedEmails.push(emailData.sender, emailData.receiver);
            threadNumber++;
            threadPosition = 1;
            console.log("thread num: " + threadNumber);
            console.log("thread pos: " + threadPosition);
        }
        console.log(loggedEmails);
        
        emailArr.push([threadNumber, threadPosition]);
        // console.log(emailArr);
    }
    
    return emailArr;
}

function organizeEmails(email) {
    //splits string to organize better, returns a String object
    let splitEmails = email.split(", ");
    // object to hold organized email
    let newEmail = new String;
    newEmail.sender = splitEmails[0];
    newEmail.receiver = splitEmails[1];
    newEmail.body = splitEmails[2];
    return newEmail;
}

console.log(getEmailThreads(['a@gmail.com, b@gmail.com, how are ya?', 'b@gmail.com, a@gmail.com, good.', 'c@gmail.com, b@gmail.com, how are ya?', 'a@gmail.com, b@gmail.com, good to hear' ]));
// console.log(getEmailThreads(['x@gmail.com, abc@gmail.com, i am great. how are you?---hello x, how are you?',
// 'abc@gmail.com, x@gmail.com, hello x, how are you?',
// 'c@gmail.com, abc@gmail.com, did you take a look at the event?', 'c@gmail.com, abc@gmail.com, did you take a look at the event?']));