window.addEventListener("load", function() {
	let form = document.querySelector("form");

	form.addEventListener("submit", function(event) {
		let boxOne = document.getElementById("boxOne").value;
		let boxTwo = document.getElementById("boxTwo").value;
		let boxThree = document.getElementById("boxThree").value;
		let boxFour = document.getElementById("boxFour").value;
		let boxFive = document.getElementById("boxFive").value;
		let answers = [boxOne, boxTwo, boxThree, boxFour, boxFive];
		let newAnswersArray = [];
		newAnswersArray.push(answers[1]);
		newAnswersArray.push(answers[0]);
		newAnswersArray.push(answers[2]);
		newAnswersArray.push(answers[3]);
		newAnswersArray.push(answers[4]);

		//come back and refactor later//
		const li1 = document.createElement("li");
		const li2 = document.createElement("li");
		const li3 = document.createElement("li");
		const li4 = document.createElement("li");
		const li5 = document.createElement("li");
		li1.append(newAnswersArray[0]);
		li2.append(newAnswersArray[1]);
		li3.append(newAnswersArray[2]);
		li4.append(newAnswersArray[3]);
		li5.append(newAnswersArray[4]);
		const firstUl = document.querySelector("ul");
		firstUl.append(li1);
		firstUl.append(li2);
		firstUl.append(li3);
		firstUl.append(li4);
		firstUl.append(li5);


		console.log("answers: ", answers);
		console.log("newAnswersArray: ", newAnswersArray);
		console.table(newAnswersArray);


		event.preventDefault();
	});
});