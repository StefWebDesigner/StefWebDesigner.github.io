// GLOBAL VARIABLES

const send = document.querySelector("#send");
const project = document.querySelector('.main--project-container');

//  ===========DROP DOWN MENU SECTIONS ==============

function myFunction() {
	[].slice.call(document.getElementsByClassName("dropdown-content")).map(function(el){
		if (this.event.target.nextElementSibling !== el)
			el.classList.remove("show");
	});

	this.event.target.nextElementSibling.classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		[].slice.call(document.getElementsByClassName("dropdown-content")).map(function(el){
				el.classList.remove("show");
		});
	}
}

//==================== MESSAGE CRITERIA FUNCTIONALITY ============

// // MESSAGING FUNCTIONALITY

const nameInput = document.querySelector('#nameInput');
const emailInput = document.querySelector('#emailInput');
const messageInput = document.querySelector('#messageInput');

send.addEventListener('click', () => {

//TEST  
console.log('SEND BUTTION IS LISTENING');


	// ensure user and message fields are filled out
	if (nameInput.value === "" && emailInput.value ==="" && messageInput.value === "") {
	alert("Please fill out the firstname, last name, email, and message field before sending");
    //TEST  
    console.log('TEST: CALCULATING CRITERIA');

  } else if (nameInput.value === "" ) {
	alert("Please fill out name field before sending");

const nameVar = nameInput.value;

  //TEST  
  console.log('TEST: NAME CRITERIA');

  } else if (emailInput.value === "" ) {
    alert("Please fill out email field before sending");

  const emailVar = emailInput.value;


    //TEST  
    console.log('TEST: EMAIL CRITERIA');

  } else if (messageInput.value === "" ) {
	alert("Please fill out message field before sending");

  const messageVar = messageInput.value;

  //TEST  
  console.log('TEST: MESSAGE CRITERIA');

	} else {
    alert("Message successful! I'll get in touch with you shortly")

    //TEST  
    console.log('TEST: MESSAGE SUCCESSFUL');

    console.log('`${send.value}`');

	// alert(`Message successfully sent to: ${user.value}`);
	}
});