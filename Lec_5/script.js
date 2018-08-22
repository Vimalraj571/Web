document.addEventListener('DOMContentLoaded',function () {
	document.querySelector('button').onclick = count
});

let counter = 0
function count() {
	counter++;
	document.querySelector('#count').innerHTML = counter;
	if (counter === 10) {
		alert(`Counter at ${counter}`)
	}
}