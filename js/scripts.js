window.addEventListener("load", function() {
	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {
		const boxOne = document.getElementById("boxOne").value;
		const boxTwo = document.getElementById("boxTwo").value;
		const boxThree = document.getElementById("boxThree").value;
		const boxFour = document.getElementById("boxFour").value;
		const boxFive = document.getElementById("boxFive").value;
		const answers = [boxOne, boxTwo, boxThree, boxFour, boxFive];
		console.log(answers);

		let moreAnswers =

		event.preventDefault();
	});
});