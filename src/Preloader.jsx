import React from 'react'
import reloader from './img/3.gif'
import s from './App.module.scss'

const Preloader = () => {
    return (
        <div className={s.MainPre}>
            <img alt={''}src={reloader} className={s.preloader}/>
            <div>Подождите...</div>
        </div>
    )
}
export default Preloader