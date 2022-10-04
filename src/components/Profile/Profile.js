import React from 'react';
import './Profile.css';
const Profile = (props) => {
    console.log(props.userdata);
    const {name,email,phone,address,img,salary}=props.userdata
    return (
        <div className='profile'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p> Address:  {address} </p>
            <p> Email: {email} </p>
            <p> Contact: {phone} </p>
            <p>Salary: {salary}</p>
            <button onClick={()=>props.clickHandeler(props.userdata)}>Add User</button>
        </div>
    );
};

export default Profile;