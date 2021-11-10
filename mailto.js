document.write('<div class="fields"><div class="field name"><input type="text" placeholder="Name" name="name_of_the_sender" id="name_of_the_sender" required></div><div class="field email"><input type="email" placeholder="Email" name="email_of_the_sender" id="email_of_the_sender" required></div></div>');
document.write('<div class="field"><input type="text" placeholder="Subject" id="subject_of_the_sender" name="subject_of_the_sender" required>');
document.write('</div><div class="field textarea"><textarea cols="30" rows="10" id="content_of_the_sender" name="content_of_the_sender" placeholder="Message..." required></textarea></div>');
var nameofsender = document.getElementById("name_of_the_sender").value;  
var emailofsender = document.getElementById("email_of_the_sender").value;
var subjectofmail = document.getElementById("subject_of_the_sender").value;
var bodyofmail = document.getElementById("content_of_the_sender").value;
console.log(nameofsender);
console.log(emailofsender);

alert("is this undefined" +emailofsender);
console.log(subjectofmail);
console.log(bodyofmail);
var loc = "mailto:jayneversettle@gmail.com?subject=" + subjectofmail + "&body=Hello Jay, I am " + nameofsender + ", email:" + emailofsender + ". " + bodyofmail;
document.write('<div class="button-area"> <button type="submit"><a style="color: inherit;" target="_blank" href="' + loc + '">Send message</a></button></div>');