import React from 'react'
import './displayusers.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeUser } from '../../store/slices/UserSlice'

function DisplayUsers() {

    const dispatch = useDispatch();
    const data = useSelector((state) => {
    return state.users;
  })

  //console.log(data)

  const DeleteUser = (id) => {
    dispatch(removeUser(id))
  }

  return (
    <div>
        {
        data.map((user, id) => {
            return <li className="list" key={id}>
                {user}
                <button className='btn-delete' onClick={()=> DeleteUser(id)}>
                <i className="fa-solid fa-trash-can"></i>
                </button>
            </li>
        })
        
    }
    </div>
    
  )
}

export default DisplayUsers