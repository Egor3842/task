import React, { useState, useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import s from '../Forms/Forms.module.scss';
import { TestPhone, TestId,TestEmail,TestName,TestLastName } from '../Helper/Helper';
import { TextArea } from '../Forms/Forms';

const AddUser = (props) => {
    const onSubmit = (formData) => {
        props.AddDataInfo(formData, props.isBig)
        props.isForm(false)
    }

    return <div >
        <AddReduxForm onSubmit={onSubmit} />
    </div>
}


const AddForm = (props) => {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [disabled, setDisabled] = useState(false);

    useEffect(() => {
        const enabled = id.length && firstName.length && lastname.length && email.length && phone.length
        setDisabled(!enabled);
    }, [id, firstName, lastname, email, phone]);

    return <form onSubmit={props.handleSubmit}>
        id <br />
        <Field name='id' placeholder={'id'} component={TextArea} value={id} onChange={e => setId(e.target.value)} validate={TestId} /><br />
        firstName
        <Field name='firstname' placeholder={'firstName'} component={TextArea} value={firstName} onChange={e => setFirstName(e.target.value)} validate={TestName} /><br />
        secondName
        <Field name='lastname' placeholder={'lastName'} component={TextArea} value={lastname} onChange={e => setLastname(e.target.value)} validate={TestLastName} /><br />
        email
        <Field name='email' placeholder={'email'} component={TextArea} value={email} onChange={e => setEmail(e.target.value)} validate={TestEmail} /><br />
        phone
        <Field name='phone' placeholder={'phone'} component={TextArea} value={phone} onChange={e => setPhone(e.target.value)} validate={TestPhone} /><br />
        {props.error && <div className={s.formsummaryerror}>{props.error} </div>}
        <button disabled={disabled} >Отправить</button>
    </form>
}

const AddReduxForm = reduxForm(
    {
        form:
            'add'
    })(AddForm)


export default AddUser;
