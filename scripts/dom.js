const userForm = document.getElementById('user-form');
const userTable = document.getElementById('user-table');
const userList = document.getElementById('user-list');
const submitButton = document.getElementById('submit-btn');
const cancelButton = document.querySelector('.cancel-btn');
let editingRow = null;
let isEditMode = false;

function resetUserInterface() {
	userForm.reset();
	userForm.querySelector('input').blur();
	userList.firstElementChild
		? userTable.classList.remove('hidden')
		: userTable.classList.add('hidden');
	if (isEditMode) {
		editingRow = null;
		isEditMode = false;
		submitButton.innerHTML = `<i class="fas fa-paper-plane"></i> SUBMIT`;
		submitButton.style.backgroundColor = '#1d72b8';
		cancelButton.classList.add('hidden');
	}
}

function setEditMode() {
	isEditMode = true;
	submitButton.innerHTML = ` <i class="fas fa-save"></i> Update`;
	submitButton.style.backgroundColor = '#28a745';
	cancelButton.classList.remove('hidden');
	editingRow.querySelectorAll('td').forEach((tableData, index) => {
		if (index > 0 && index < 6) {
			userForm.querySelector(`input:nth-child(${index})`).value =
				tableData.textContent;
		}
	});
	userForm.querySelector('input').focus();
}

function displayUser(userData) {
	userData.forEach(
		({ user_id, first_name, last_name, mobile_number, email, age }) => {
			const tableRow = document.createElement('tr');
			tableRow.innerHTML = `
				<td>${user_id}</td>
				<td>${first_name}</td>
				<td>${last_name}</td>
				<td>${mobile_number}</td>
				<td>${email}</td>
				<td>${age}</td>
				<td>
					<button class="btn edit-user">
						<i class="fas fa-edit"></i>
					</button>
					<button class="btn delete-user">
						<i class="fas fa-trash-alt"></i>
					</button>
				</td>
			`;
			userList.insertAdjacentElement('afterbegin', tableRow);
			resetUserInterface();
		}
	);
}

function updateRow(
	{ user_id, first_name, last_name, mobile_number, email, age },
	targetRow
) {
	targetRow.innerHTML = `
		<td>${user_id}</td>
		<td>${first_name}</td>
		<td>${last_name}</td>
		<td>${mobile_number}</td>
		<td>${email}</td>
		<td>${age}</td>
		<td>
			<button class="btn edit-user">
				<i class="fas fa-edit"></i>
			</button>
			<button class="btn delete-user">
				<i class="fas fa-trash-alt"></i>
			</button>
		</td>
	`;
}
