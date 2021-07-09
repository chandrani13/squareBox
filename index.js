var data = [{display: 1, color: '#6F98A8'},
			{display: 2, color: '#2B8EAD'},
			{display: 3, color: '#2F454E'},
			{display: 4, color: '#2B8EAD'},
			{display: 5, color: '#2F454E'},
			{display: 6, color: '#BFBFBF'},
			{display: 7, color: '#BFBFBF'},
			{display: 8, color: '#6F98A8'},
			{display: 9, color: '#2F454E'}
           ];

function shuffle(array) {
    let arr = array.sort(() => Math.random() - 0.5);
    for(let i = 0; i < array.length; i++) {
        document.getElementById("box-" + i).innerText = data[arr[i] - 1].display;
		if (screen.width > 375) {
			document.getElementById("box-" + i).style.background = data[arr[i] - 1].color;
		}
		else {
			document.getElementById("box-" + i).style.borderLeft = "8px solid " + data[arr[i] - 1].color;
		}
    }
}

function sort() {
	for(let i = 0; i < data.length; i++) {
		document.getElementById("box-" + i).innerText = data[i].display;
		if (screen.width > 375) {
			document.getElementById("box-" + i).style.background = data[i].color;
		}
		else {
			document.getElementById("box-" + i).style.borderLeft = "8px solid " + data[i].color;
		}
	}
}