import { useState } from "react";
import '../../Styles/User/profile.css';

const Profile = () => {
    const [userdata] = useState(() => {
        const savedData = localStorage.getItem('userData');
        return savedData ? JSON.parse(savedData) : { name: '', email: '', mobileNumber: '' };
    });

    return (
        <div className="profile">
            <div className="profile-container">
                <h2>User Profile</h2>
                <div className="profile-card">
                    <div className="profile-picture">
                        <img src="https://via.placeholder.com/150" alt="User" />
                    </div>
                    <div className="profile-details">
                        <p><strong>Name:</strong> {userdata.name}</p>
                        <p><strong>Email:</strong> {userdata.email}</p>
                        <p><strong>Mobile Number:</strong> {userdata.mobileNumber}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;

