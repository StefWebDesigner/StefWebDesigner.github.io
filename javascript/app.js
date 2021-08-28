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



//MY ATTEMPT TO HOOK THIS UP TO A PHP PROJECT

// var frmvalidator  = new Validator("contactform");
// frmvalidator.addValidation("name","req","Please provide your name");
// frmvalidator.addValidation("email","req","Please provide your email");
// frmvalidator.addValidation("email","email",
//   "Please enter a valid email address");













// // GLOBAL VARIABLES
// const alertBanner = document.querySelector("#alert");
// const traffic = document.querySelector('ul');
// const emailInput = document.querySelector('input[name=email-checkbox]');
// const profileInput = document.querySelector('#profile-checkbox');
// const timeSettings = document.querySelector('#timezone');
// // const optional_responses = document.querySelector('option#timezone_options');

// //==========================================================================


// //ALERT FUNCTIONALITY
// alertBanner.innerHTML = 
// `
// <div class="alert-banner">
// <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
// to complete</p>
// <p class="alert-banner-close">x</p>
// </div>
// `

// alertBanner.addEventListener('click', e => {
// 	//
// 	const element = e.target;
// 	if (element.classList.contains("alert-banner-close")) {
// 		alertBanner.style.display = "none"	
// 	}
// });

// // =====================================================

// //TRAFFIC NAVIGATION FUNCTIONALITY

// // Global traffic values *** this has a issue if included anywhere
// const traffic_nav_hourly = document.querySelector('#traffic-nav-hourly');
// const traffic_nav_daily = document.querySelector('#traffic-nav-daily');
// const traffic_nav_weekly = document.querySelector('#traffic-nav-weekly');
// const traffic_nav_monthly = document.querySelector('#traffic-nav-monthly');


// //CHART 1 (HOURLY) *** Keep one chart & swap out the data

// let chart1 = document.getElementById('chart1').getContext('2d');
// 			let trafficChart = new Chart(chart1, {
// 				type: 'line',  
// 				data: {
// 					labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
// 					datasets: [{
// 						label: "Traffic",
// 						type: "line",
// 						fillColor: "#826AEE",
// 						borderColor: "#8e5ea2",
// 						data: [550,1250,1000,2000, 1500, 1750, 1250, 1750, 2250, 1500, 2500],
// 						backgroundColor: "#826AEE",
// 					backgroundColorHover: "#3e95cd",
// 						fill: false,
// 							}]
// 						},
// 						options: {
// 							legend: { display: false },
// 							elements: {
//         						line: {
//             					tension: .45
// 							}
// 						},											
// 					}
// 			});


// 			const hourlyData = {
// 				labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
// 				datasets: [{
// 				  data: [550,1250,1000,2000, 550, 550, 1250, 550, 550, 1500, 2500],
// 				  fillColor: "#826AEE",
// 				  borderColor: "#8e5ea2",
// 				  backgroundColor: "#826AEE",
// 				  backgroundColorHover: "#3e95cd",
// 				  fill: false,
// 				}]
// 			  }
// 			  //TO HAVE IT AUTOMATICALLY SELECTED
// 			  trafficChart.data = hourlyData;
// 			  trafficChart.update();
// 			  traffic_nav_hourly.classList.add('active');
// 			console.log('Traffic nav: hourlyData active now'); 	 
// 			;

// //CHART 2(DAILY)


// const dailyData = {
// 		labels: ['S', 'M', 'sT', 'W', 'T', 'F', 'S'],
// 		datasets: [{
// 			label: "Traffic",
// 			type: "line",
// 			data: [75,125,175,125, 225, 200, 100],
// 			backgroundColor: "#765af2",
// 			backgroundColorHover: "#3e95cd",
// 			}]
// };

// //CHART 4(WEEKLY)

// const weeklyData = {
// 	labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
// 				datasets: [{
// 				  data: [550,1000,1000,2000, 1500, 1500, 1500, 1700, 2250, 1500, 2500],
// 				  fillColor: "#826AEE",
// 				  borderColor: "#8e5ea2",
// 				  backgroundColor: "#826AEE",
// 				  backgroundColorHover: "#3e95cd",
// 				  fill: false,
// 				}]
// 			  };

// //==========================================================================
// //CHART 5(MONTHLY)

// const monthlyData = {
// 		labels: ['S', 'M', 'sT', 'W', 'T', 'F', 'S'],
// 		datasets: [{
// 			label: "Traffic",
// 			type: "line",
// 			data: [75,125,125,125, 75, 75, 75],
// 			backgroundColor: "#765af2",
// 			backgroundColorHover: "#3e95cd",
// 			}]
// };



// traffic.addEventListener('click', (e) => {
// 	console.log('traffic listening');
// 	// const allTrafficNavOpt = [traffic_nav_hourly, traffic_nav_daily, traffic_nav_weekly, traffic_nav_monthly];
// 	// 	let minusActiveOption = [];

// 	//----------------- find out how to break the add event------------

// 	if (e.target.classList.contains('hourly')) {
// 			console.log('if condition working?');
// 			trafficChart.data = hourlyData;
// 			trafficChart.update();
// 		  e.target.classList.add('active');
// 		  //ATTEMPTING TO REMOVE ACTIVE CLASS
// 		//   if (e.target.classList.add('active')) {
// 			// console.log('Traffic nav: REMOVING/ADDING ACTIVE CLASSS');
// 			// allTrafficNavOpt.forEach(allTrafficNavOpt_var => {
// 			// 	if (e.target.classList.add('active')) { 
// 			// 		minusActiveOption.push(allTrafficNavOpt_var);
				

// 			// });



// 			// minusActiveOption.push(e.target);
// 			// allTrafficNavOpt.filter(e.target).classList.remove('active');
// 		//   }

// 		  console.log('Traffic nav: hourlyData active now');
// 		}

// 		if (e.target.classList.contains('daily')) {
// 		  e.target.classList.add('active');
// 		  trafficChart.data = dailyData;
// 			trafficChart.update();
// 		  console.log('Traffic nav: dailyData active now');
// 		}
// 		if (e.target.classList.contains('weekly')) {
// 		   e.target.classList.add('active');
// 		   trafficChart.data = weeklyData;
// 			trafficChart.update();
// 		   console.log('Traffic nav: weeklyData active now');
// 		}
// 		if  (e.target.classList.contains('monthly')) {
// 		   e.target.classList.add('active');
// 		   trafficChart.data = monthlyData;
// 			trafficChart.update();
// 		   console.log('Traffic nav: monthlyData active now');
// 		} //else (e.target != e.target.classList.add('active') {


// 		// }
// 		// 	//ad the the non targeting code and have it remove the status
// 		//is their code to not target an an target

			
// 	});

// //==========================================================================
// //************************HOLD OFF ON THIS**********************************

// //MESSAGING FUNCTIONALITY
// const user = document.getElementById("userField");
// const message = document.getElementById("messageField");
// const send = document.getElementById("send");

// send.addEventListener('click', () => {
// 	// ensure user and message fields are filled out
// 	if (user.value === "" && message.value === "") {
// 	alert("Please fill out user and message fields before sending");
// 	} else if (user.value === "" ) {
// 	alert("Please fill out user field before sending");
// 	} else if (message.value === "" ) {
// 	alert("Please fill out message field before sending");
// 	} else {
// 	alert(`Message successfully sent to: ${user.value}`);
// 	}
// });


// //==========================================================================
// //************************WORK IN PROGRESS *********************************
// //************************EXPERIMENTAL**************************************

// // EMAIL/PROFILE NOTIFICATION FUNCTION

// //EXAMPLE
// // var checkbox = document.querySelector("input[name=checkbox]");

// // checkbox.addEventListener('change', function() {
// //   if (this.checked) {
// //     console.log("Checkbox is checked..");
// //   } else {
// //     console.log("Checkbox is not checked..");
// //   }
// // });
// // <input type="checkbox" name="checkbox" />

// emailInput.addEventListener('change', (e) => {
// 	//ENTER FUNCTION TEST
// 	console.log('Are you working email preferences????');

// 			if (emailInput.checked === true) {
// 			//ENTER FUNCTION TEST
// 			console.log('Entered the Email Function');
// 			emailInput.checked === false;
// 		    console.log("Email Notifications On");
// 			alert("Email Notifications On");
// 			} else if (emailInput.checked === false) {
// 				emailInput.checked === true;
// 				console.log("Email Notifications Off");
// 				alert("Email Notifications Off");
// 			}	else {
// 			  console.log('Email Notification Unsuccessful')
// 		  }
		
// });

// profileInput.addEventListener('change', (e) => {

// 	if (profileInput.checked === true) {
// 			//ENTER FUNCTION TEST
// 			console.log('Entered the Profile Function');
// 			profileInput.checked === false;
// 			console.log("Profile Notifications On");
// 			alert("Profile Notifications On");
// 	} else if (profileInput.checked === false) {
// 			profileInput.checked === true;
// 			console.log("Profile Notifications Off");
// 			alert("Profile Notifications Off");
// 	}	else {
// 			console.log('Profile Notification Unsuccessful')
// 	  }

// });

// //==========================================================================

// //************************HOLD OFF ON THIS**********************************
// //LOCAL STORAGE FUNCTIONALITY >> start of with the email/profile

// // AN EXAMPLE OF HOW TO PULL OF THIS STUFF >> NEED THE BUTTON WORKING FIRST THOUGH
// //GO TO APPLICATIONS AND STORAGE TO SEE WHAT IS STORED!!!

// // const storageInput = document.querySelector('.storage');
// // const storage_button = document.querySelector('#save');
// // // const storedInput = localStorage.getItem('to the button or something >>> work on this');

// // if(storageInput) {
// // 	text.textContent = storedInput;
// // }

// // storageInput.addEventListener('input', letter => {
// // 	text.textContent = letter.target.value;
// // });

// // const savetoLocalStorage = () => {
// // 	localStorage.setItem('textinput', text, text.textContent);

// // }

// // button.addEventListener('click', savetoLocalStorage);

// //==========================================================================


// //************************HOLD OFF ON THIS**********************************
// // TIME BANNER NOTIFICATION FUNCTION

// const timeMenu = document.querySelector('option#timezone_options');

// timeSettings.addEventListener('click', (event) => {
// 		console.log('ENTERED THE SELECT TIME LISTENER');

// 	const estZone = document.querySelector('option.est-zone');
// 	const pacZone = document.querySelector('option.pac-zone');



// if (event.target === timeMenu) {
// 	//ENTER FUNCTION TEST
// 	console.log("ENTERED THE SELECT TIME FUNCTION IF STATEMENT");

// 		if (event.target === estZone) {
// 			console.log('SELECTED EST ZONE');
// 			alert('Time zone has been updated to Eastern zone');
// 		// } else if (event.target === pacZone) {
// 		} else if (event.target.classList.contains('pac-zone')) {
// 			console.log('SELECTED EST ZONE PAC ZONE');
// 				alert('Time zone has been updated to Pacific zone');
// 			// } else if (optional_responses.value = "gm-zone") {
// 			// 	console.log('green light on GM');
// 			// 	alert('Time zone has been updated to GM Central zone');
// 			// } else if (optional_responses.value = "java-zone") {
// 			// 	console.log('green light on java');
// 			// 	alert('Time zone has been updated to Javascript Time zone zone');
// 			// } else if (optional_responses.value = "code-zone") {
// 			// 	console.log('green light on code');
// 			// 	alert('Time zone has been updated to Coding Time zone zone');
// 			// } else if (optional_responses.value = "jedi-zone") {
// 			// 	console.log('green light on Jedi');
// 			// 	alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
// 			} else {
// 				alert('Unable the update time zone');
// 			}
// 		}

		


// 		// let input_sSelected_input_time);
// 		// if (inputTime === optional_responses) {
// 		// 	console.log("I'm in the timezone if statement");
// 		// 	 if (optional_responses.value = "est-zone") {
// 		// 		console.log('green light on Eastern');
// 		// 		alert('Time zone has been updated to Eastern zone');
// 		// 	} else if (optional_responses.value = "pac-zone") {
// 		// 		console.log('green light on Pacific');
// 		// 		alert('Time zone has been updated to Pacific zone');
// 		// 	} else if (optional_responses.value = "gm-zone") {
// 		// 		console.log('green light on GM');
// 		// 		alert('Time zone has been updated to GM Central zone');
// 		// 	} else if (optional_responses.value = "java-zone") {
// 		// 		console.log('green light on java');
// 		// 		alert('Time zone has been updated to Javascript Time zone zone');
// 		// 	} else if (optional_responses.value = "code-zone") {
// 		// 		console.log('green light on code');
// 		// 		alert('Time zone has been updated to Coding Time zone zone');
// 		// 	} else if (optional_responses.value = "jedi-zone") {
// 		// 		console.log('green light on Jedi');
// 		// 		alert('Young padawan, time is only the force within you - Jedi Force Time zone zone');
// 		// 	} else {
// 		// 		alert('Unable the update time zone');
// 		// 	}

// 		// }

// });

// 	// SAVE SETTINGS FUNCTIONALITY
