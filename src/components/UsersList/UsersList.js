import React from 'react';
import useResources from '../UseResources'

const UsersList = () => {
  const users = useResources('users');
  console.log(users);

  return (
    <div>
    <div style={{ fontWeight : 700 }}>Users' Info</div>
      {users.map(user => {
        return (
          <div key={user.id}>
            <ul>{user.id} 
              <li>Name: {user.name}</li>
              <li>Company: {user.company.name}</li>
            </ul>
          </div>
        )
      })}
    </div>
  )
  
};

export default UsersList;