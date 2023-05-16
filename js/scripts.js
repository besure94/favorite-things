window.addEventListener("load", function() {
	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {
		const boxOne = document.getElementById("boxOne").value;
		const boxTwo = document.getElementById("boxTwo").value;
		const boxThree = document.getElementById("boxThree").value;
		const answers = [boxOne, boxTwo, boxThree];
		console.log(answers);

		event.preventDefault();
	});
});