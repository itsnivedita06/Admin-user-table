import React from 'react'
import './userdetails.css'
import DeleteUser from '../delete/DeleteUser'
import { fakeUserData } from '../../api/api';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slices/UserSlice';
import DisplayUsers from '../displayusers/DisplayUsers';



function UserDetails() {

  const dispatch = useDispatch();

  const addNewUser = (payload) => {
    //console.log(payload)
    dispatch(addUser(payload));
  };
  return (
    <div>
        <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" 
            onClick={() => addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
           {/* <li>Hi</li>
          <li>Hii</li> */}
          <DisplayUsers />
        </ul>
        <hr />
        <DeleteUser />
      </div>
    </div>
  )
}

export default UserDetails