import React from 'react'
import './deleteuser.css'
import { deleteUsers } from '../../store/slices/UserSlice'
import { useDispatch } from 'react-redux'

function DeleteUser() {

  const dispatch = useDispatch();
  
  const DeleteUsers = () => {
     dispatch(deleteUsers())
  }

  return (
    <div>
      <button className=' btn clear-btn' onClick={DeleteUsers}>
        Clear users</button>
    </div>
  )
}

export default DeleteUser