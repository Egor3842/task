import React from 'react';

const User = (props) => {
   const onUserClick = (id) => {

      let TakeData = props.users.find((item) => item.id === id);
      props.TAKEDATAINFO(TakeData)
      props.DataClicked(true)
   }
   return (
      props.users.map((u, index) => <tr key={index} onClick={() => onUserClick(u.id)}>
         <td>{u.id}</td>
         <td>{u.firstName}</td>
         <td>{u.lastName}</td>
         <td>{u.email}</td>
         <td>{u.phone}</td>
      </tr>
      )
   )
}

export default User