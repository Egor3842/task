export const TestPhone=(value)=>{
if ( /^\(\d{3}\)\d{3}-\d{4}$/.test(value)===false){
    return ('Не корректно введенный номер')
};
}

export const TestId=(value)=>{
    if (value%1!==0){
        return('Не корректно введенный id')
    }
}
export const TestEmail=(value)=>{
    if ( /^([a-zA-z_-]+\.)*[a-zA-Z_-]+@[a-zA-Z_-]+(\.[a-zA-Z_-]+)*\.[a-z]{2,6}$/.test(value)===false){
        return ('Не корректно введенный email')
    }
}
export const TestName=(value)=>{
    if ( /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/.test(value)===false){
        return ('Не корректно введенное имя')
    }
}

export const TestLastName=(value)=>{
    if ( /^[a-zA-Z'][a-zA-Z-' ]+[a-zA-Z']?$/.test(value)===false){
        return ('Не корректно введенная фамилия')
    }
}