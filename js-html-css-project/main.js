let paragraph = document.querySelector(".display");
		let numArr = [];
		let oper = '';

		function handleMath(arr1, arr2, oper) {
			let ans = 0;
			if (oper === "➕") {
				ans = parseInt(arr2.join('')) + parseInt(arr1.join(''));
				paragraph.innerHTML = parseInt(ans);
			} else if (oper === "➖") {
				ans = parseInt(arr2.join('')) - parseInt(arr1.join(''));
				paragraph.innerHTML = parseInt(ans);
			} else if (oper === "✖️") {
				ans = parseInt(arr2.join('')) * parseInt(arr1.join(''));
				paragraph.innerHTML = parseInt(ans);
			} else {
				ans = parseInt(arr2.join('')) / parseInt(arr1.join(''));
				paragraph.innerHTML = parseInt(ans);
			}
		}

		function handleClick(e) {
			if (e.target.classList.contains('num')) {
				paragraph.innerHTML += e.target.innerHTML;
				numArr.push(e.target.innerHTML);
			} else if (e.target.innerHTML === "⬅") {
				numArr.pop();
				paragraph.innerHTML = numArr.join('');
			} else if (e.target.innerHTML === "C") {
				numArr = [];
				paragraph.innerHTML = numArr.join('');
			} else if (e.target.innerHTML === "➕") {
				numArr2 = numArr.slice();
				oper = e.target.innerHTML;
				numArr = [];
				paragraph.innerHTML = numArr.join('');
			} else if (e.target.innerHTML === "➖") {
				numArr2 = numArr.slice();
				oper = e.target.innerHTML;
				numArr = [];
				paragraph.innerHTML = numArr.join('');
			} else if (e.target.innerHTML === "✖️") {
				numArr2 = numArr.slice();
				oper = e.target.innerHTML;
				numArr = [];
				paragraph.innerHTML = numArr.join('');
			} else if (e.target.innerHTML === "➗") {
				numArr2 = numArr.slice();
				oper = e.target.innerHTML;
				numArr = [];
				paragraph.innerHTML = numArr.join('');
			} else {
				return handleMath(numArr, numArr2, oper);
			}
		}

		const buttons = document.querySelectorAll('button');
		buttons.forEach(button => button.addEventListener('click', handleClick));