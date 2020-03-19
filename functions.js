const userId = document.getElementById('userId');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const btAdd = document.getElementById('btAdd');
const btUpDate = document.getElementById('btUpDate');
const btRemove = document.getElementById('btRemove');

const database = firebase.database();
const rootRef = database.ref('users');
btAdd.addEventListener('click',(e)=>{
	e.preventDefault();
	
	rootRef.child(userId.value).set({
		first_name:firstName.value,
		last_name:lastName.value
	});
	
	//tự tạo key 
	//const autoID = rootRef.push().key
	//rootRef.child(autoID).set({
	//	first_name:firstName.value,
	//	last_name:lastName.value
	//});
});
btUpDate.addEventListener('click',(e) =>{
		e.preventDefault();
		const newData = {
			first_name:firstName.value
		};
rootRef.child(userId.value).update(newData);
});