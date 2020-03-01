import React from 'react'
import s from './Users.module.scss'
import User from './User';
import AddUser from './AddUser';
import FulluserInfo from './FullUserInfo';



const Table = (props) => {

  const Back=()=>{
    props.BackUsers(true)
  }
  const IsClickFind=()=>{
    props.FindUserInfo(true,false)
    props.FindText('')
  
  }
  const UserText=(e)=>{
    let text=e.target.value;
    props.FindText(text);
    
  }
  const onSortUser=(Sort)=>{
    Sort=Sort+1
    if (props.isBig===true){
      props.Sorted(Sort,props.SmallUsers)  }
      else {props.Sorted(Sort,props.BigUsers)}
  }
   return(
     <div>
         <button onClick = {()=>{props.isForm(true)}}>Добавить</button>
   {props.isClickedForm === true ?
   <AddUser AddDataInfo = {props.AddDataInfo}
   isBig = {props.isBig}
   isForm = {props.isForm}
   />:
   ''}
   
    
     <div className = {s.Main}>
     <FulluserInfo TakeData = {props.TakeData}
     isDataClick = {props.isDataClick} />
   <table className = {s.table}>
   <thead>
     <tr className = {s.table}>
       <th  onClick={()=>{onSortUser(props.Sort)}}>id<span className={props.Sort%2===0 ? s.sort : s.unsort}></span></th>
       <th onClick={()=>{onSortUser(props.Sort)}} >firstName</th>
       <th >lastName</th>
       <th>email</th>
       <th >phone</th>
    </tr>
  </thead>
  <tbody>
    {props.isBig === false ?
    <User users = {props.BigUsers}
    TAKEDATAINFO = {props.TAKEDATAINFO}
    DataClicked={props.DataClicked}
    Finduser={props.Finduser}
    isClickInfo={props.isClickInfo}
     />
  
      :
     <User users = {props.SmallUsers} 
     TAKEDATAINFO = {props.TAKEDATAINFO}
     DataClicked={props.DataClicked}
     Finduser={props.Finduser}
     isClickInfo={props.isClickInfo}
      />
      
  }                
  </tbody>
   </table>
   <span className = {s.button} >
     {props.isBig === false?
   <button onClick = {()=>{props.isFull(true)}}>Уменьшенная</button>:
   <button onClick = {()=>{props.isFull(false)}}>Увеличенная</button>
   }
    <span className={s.find}><input value={props.findUserText} onChange={UserText}></input>
         <button onClick={IsClickFind}>Найти</button></span><br/>
         <button onClick={Back}>Вернуть начальные данные</button>
   </span>
   
  
   </div>
   </div>
   
    )
}
export default Table
