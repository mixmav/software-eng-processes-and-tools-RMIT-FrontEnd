import React from 'react';
import './AdminProfile.scss';

function AdminProfile(){
	return(
		<div className="admin-profile-container">
			<h1>Admin Profile</h1>
			<img src={'https://avatars.dicebear.com/api/identicon/' + (Math.random() + 1).toString(36).substring(7) + '.svg'} alt="" />

		</div>
	);
}

export default AdminProfile;