const baseURL = 'http://localhost:3000/api/v1/';

function getUserObject(formData) {
	const userObject = {};
	for (let key of formData.keys()) {
		userObject[key] = formData.get(key);
	}
	return userObject;
}

function getAllUsers() {
	return fetch(baseURL + 'getusers');
}

function createUser(formData) {
	return fetch(baseURL + 'createuser', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(getUserObject(formData)),
	});
}

function getUserByUserId(userId) {
	return fetch(baseURL + 'getuser', {
		method: 'GET',
		headers: { 'Content-Type': 'application/json', user_id: userId },
	});
}

function updateUserByUserId(userId, formData) {
	return fetch(baseURL + 'updateuser', {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			user_id: userId,
		},
		body: JSON.stringify(getUserObject(formData)),
	});
}

function deleteUserByUserId(userId) {
	return fetch(baseURL + 'deleteuser', {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
			user_id: userId,
		},
	});
}
