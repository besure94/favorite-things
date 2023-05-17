window.addEventListener("load", function() {
	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {
		let boxOne = document.getElementById("boxOne").value;
		let boxTwo = document.getElementById("boxTwo").value;
		let boxThree = document.getElementById("boxThree").value;
		let boxFour = document.getElementById("boxFour").value;
		let boxFive = document.getElementById("boxFive").value;
		let answers = [boxOne, boxTwo, boxThree, boxFour, boxFive];
		console.log(answers);



		event.preventDefault();
	});
});