function handleSubmit(event) {
	event.preventDefault();
	const formData = new FormData(event.currentTarget);
	if (isEditMode) {
		const userId = parseInt(editingRow.querySelector('td').textContent);
		updateUserByUserId(userId, formData)
			.then(() => getUserByUserId(userId))
			.then(res => res.json())
			.then(res => updateRow(res[0], editingRow))
			.catch(err => console.log(err))
			.then(() => resetUserInterface());
		return;
	}
	createUser(formData)
		.then(res => res.json())
		.then(res => getUserByUserId(parseInt(res.user_id)))
		.then(res => res.json())
		.then(res => displayUser(res))
		.catch(err => console.log(err));
	resetUserInterface();
}

function handleUserAction(event) {
	isEditMode && resetUserInterface();
	const button = event.target.parentElement;
	if (
		button.classList.contains('delete-user') &&
		confirm('Are you sure you want to delete this user?')
	) {
		const targetRow = button.closest('tr');
		const userId = parseInt(targetRow.querySelector('td').textContent);
		deleteUserByUserId(userId)
			.then(() => {
				targetRow.remove();
				resetUserInterface();
			})
			.catch(err => console.log(err));
	}
	if (button.classList.contains('edit-user')) {
		editingRow = button.closest('tr');
		setEditMode();
	}
}

function fetchAndPopulateUserTable() {
	getAllUsers()
		.then(res => res.json())
		.then(res => displayUser(res))
		.catch(err => console.log(err));
}

function handleCancel(event) {
	event.preventDefault();
	resetUserInterface();
}

userForm.addEventListener('submit', handleSubmit);
userList.addEventListener('click', handleUserAction);
cancelButton.addEventListener('click', handleCancel);
document.addEventListener('DOMContentLoaded', fetchAndPopulateUserTable);
