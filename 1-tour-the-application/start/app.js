const form = document.getElementById('registrar');
const input = form.querySelector('input');
const ul = document.getElementById('invitedList');

function createLI(text) { 
	const li = document.createElement('li');
	const span = document.createElement('span');
	span.textContent = text;
	li.appendChild(span);
	const label = document.createElement('label');
	label.textContent = 'Confirmed';
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	label.appendChild(checkbox);
	li.appendChild(label);
	const editButton = document.createElement('button');
	editButton.textContent = "Edit";
	li.appendChild(editButton);

	const removeButton = document.createElement('button');
	removeButton.textContent = "Remove";
	li.appendChild(removeButton);
	return li;
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const text = input.value;
	input.value = '';
/* 	const li = document.createElement('li');
	li.textContent = text; 
*/
	const li = createLI(text);
	ul.appendChild(li);
});
 
ul.addEventListener('click', (e) => { 
	if (e.target.tagName === 'BUTTON') {
		const button = e.target;
		const li = button.parentNode;
		const ul = li.parentNode;
		if (e.target.textContent === 'Remove') {
			ul.removeChild(li);
		} else if (e.target.textContent === 'Edit') {
			console.log('here');
			const span = li.firstElementChild;
			const input = document.createElement('input');
			input.type = 'text';
			input.value = span.textContent;

			li.insertBefore(input, span);
			li.removeChild(span);
			button.textContent = 'Save';
		} else if (e.target.textContent === 'Save') {
			const span = document.createElement('span');
			const input = document.firstElementChild;
			span.textContent = input.value;
			li.appendChild(span);
		/* 	li.insertBefore(span, input);	 
			li.removeChild(input);*/
			button.textContent = 'Edit';
		}
	}	
})