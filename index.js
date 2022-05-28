const diceDiv = document.querySelector('.dice-div');
const advice = document.querySelector('main p');
const adviceId = document.querySelector('.id');

function generateAdvice() {
	fetch('https://api.adviceslip.com/advice')
		.then((response) => response.json())
		.then((data) => {
			adviceId.textContent = data.slip.id;
			advice.textContent = `" ${data.slip.advice} "`;
		})
		.catch((err) => console.log(err));
}
generateAdvice();
diceDiv.addEventListener('click', function () {
	generateAdvice();
});
