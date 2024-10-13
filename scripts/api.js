function getUserObject(formData) {
	const userObject = {};
	for (let key of formData.keys()) {
		userObject[key] = formData.get(key);
	}
	return userObject;
}

function getAllUsers() {
	return fetch('http://localhost:3000/api/v1/getusers');
}

function createUser(formData) {
	return fetch('http://localhost:3000/api/v1/createuser', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(getUserObject(formData)),
	});
}

function getUserByUserId(userId) {
	return fetch('http://localhost:3000/api/v1/getuser', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', user_id: userId },
	});
}

function updateUserByUserId(userId, formData) {
	return fetch('http://localhost:3000/api/v1/updateuser', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			user_id: userId,
		},
		body: JSON.stringify(getUserObject(formData)),
	});
}

function deleteUserByUserId(userId) {
	return fetch('http://localhost:3000/api/v1/deleteuser', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			user_id: userId,
		},
	});
}
