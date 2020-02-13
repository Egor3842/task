import React from 'react'
import s from './FullUserInfo.module.scss'

const FulluserInfo = (props) => {

    let counter = 0;
for (let key in props.TakeData) {
  counter++;
}

    const info = props.TakeData;
    return(
        <div>
            {props.isDataClick === true 
            ?
             counter>5?
            <div>
            <div>Выбан пользователь <b>{info.firstName}   {info.lastName}</b></div>
            <div>Описание:</div>
            <div><textarea className={s.textarea} value = {info.description}></textarea></div>
            <div>Адрес проживания:  <b>{info.address.streetAddress}</b></div>
            <div>Город:  <b>{info.address.city}</b></div>
            <div>Провинция/штат:  <b>{info.address.state}</b></div>
            <div>Индекс:  <b>{info.address.zip}</b></div>
            
            </div>
            :<div>
            <div>Выбан пользователь <b>{info.firstName}   {info.lastName}</b></div>
            <div>Описание: <b>не указано</b></div>
            <div>Адрес проживания:  <b>не указано</b></div>
            <div>Город:  <b>не указано</b></div>
            <div>Провинция/штат:  <b>не указано</b></div>
            <div>Индекс:  <b>не указано</b></div>
           </div>
            :'' 
        }
        </div>
    )
}

export default FulluserInfo