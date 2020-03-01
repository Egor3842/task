import { MainApi } from '../api'


const initialState = {
    SmallUsers: [],
    BigUsers: [],
    isClickedForm: false,
    isFetching: false,
    isBig: true,
    TakeData: '',
    isDataClick: false,
    Sort: 0,
    findUserText: '',
    isClickInfo: false,
    SmallCopy:[],
    BigCopy:[],
    isBacking:false,

}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIND_INFO_USER: {
            let Arr = []

            if (action.isClickInfo === true && state.isBig === false && state.findUserText.length !== 0) {

                state.BigCopy=state.BigUsers
                
                for (let key = 0; key < state.BigUsers.length; key++) {
                    if (state.BigUsers[key].id == (+state.findUserText) ||
                        state.BigUsers[key].firstName.indexOf(state.findUserText) !== -1 ||
                        state.BigUsers[key].lastName.indexOf(state.findUserText) !== -1 ||
                        state.BigUsers[key].email.indexOf(state.findUserText) !== -1 ||
                        state.BigUsers[key].phone.indexOf(state.findUserText) !== -1) { Arr.push(state.BigUsers[key]) }
                        
                }
               
                return { ...state, isClickInfo: action.isClickInfo, BigUsers: [...Arr],isBacking:action.isBacking }
            }

            if (action.isClickInfo === true && state.isBig === true && state.findUserText.length !== 0) {
                state.SmallCopy=state.SmallUsers
                for (let key = 0; key < state.SmallUsers.length; key++) {
                    if (state.SmallUsers[key].id == (+state.findUserText) ||
                        state.SmallUsers[key].firstName.indexOf(state.findUserText) !== -1 ||
                        state.SmallUsers[key].lastName.indexOf(state.findUserText) !== -1 ||
                        state.SmallUsers[key].email.indexOf(state.findUserText) !== -1 ||
                        state.SmallUsers[key].phone.indexOf(state.findUserText) !== -1) { Arr.push(state.SmallUsers[key]) }

                }
                
                return { ...state, isClickInfo: action.isClickInfo, SmallUsers: [...Arr] }
            }

        }
        case BACK_USERS_DATA:{
            if (action.isBacking=true && state.isBig===true)
            {state.SmallUsers=state.SmallCopy}
            if (action.isBacking=true && state.isBig===false)
            {state.BigUsers=state.BigCopy}
            return {...state,isBacking:action.isBacking}
        }
        case FIND_USER: {
            return { ...state, findUserText: action.findUserText }
        }
        case DATA_SORT: {
            let mass = []
            if (action.Sort % 2 === 0 && state.isBig === true) {
                mass = action.users.sort((prev, next) => prev.id - next.id);

                return { ...state, Sort: action.Sort, SmallUsers: mass }
            }
            if (action.Sort % 2 === 1 && state.isBig === true) {
                mass = action.users.sort((prev, next) => prev.id - next.id).reverse();
                return { ...state, Sort: action.Sort, SmallUsers: mass }
            }

            if (action.Sort % 2 === 0 && state.isBig === false) {
                mass = action.users.sort((prev, next) => prev.id - next.id);
                return { ...state, Sort: action.Sort, BigUsers: mass }
            }

            if (action.Sort % 2 === 1 && state.isBig === false) {
                mass = action.users.sort((prev, next) => prev.id - next.id).reverse();
                return { ...state, Sort: action.Sort, BigUsers: mass }
            }


        }
        case DATA_CLICK: {
            return { ...state, isDataClick: action.isDataClick }
        }
        case ADD_DATA: {
            let body = action.formData
            let big = action.isBig
            let mass = [];
            if (big === true) {
                mass = { ...state, SmallUsers: [{ id: body.id, firstName: body.firstname, lastName: body.lastname, email: body.email, phone: body.phone }, ...state.SmallUsers] }
            }
            else { mass = { ...state, BigUsers: [{ id: body.id, firstName: body.firstname, lastName: body.lastname, email: body.email, phone: body.phone }, ...state.BigUsers] } }
            return mass

        }
        case TakeDATA: {
            return { ...state, TakeData: action.TakeData, isDataClick: action.isDataClick }

        }
        case FORM_USER:
            return { ...state, isClickedForm: action.isClickedForm }
        case SET_USERS:
            return { ...state, SmallUsers: action.SmallUsers, SmallCopy:action.SmallUsers }

        case SET_USERS_BIG:
            return { ...state, BigUsers: action.BigUsers,BigCopy:action.BigUsers }

        case IS_BIG:
            return { ...state, isBig: action.isBig }
        case TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching }

        default:
            return state;
    }
}
export default UsersReducer

const BACK_USERS_DATA='BACK_USERS_DATA'
const FIND_INFO_USER = 'FIND_INFO_USER'
const FIND_USER = 'FIND_USER'
const DATA_SORT = 'DATA_SORT'
const DATA_CLICK = 'DATA_CLICK'
const TakeDATA = 'TakeDATA'
const ADD_DATA = 'ADD_DATA'
const FORM_USER = 'FORM_USER'
const SET_USERS = 'SET_USERS';
const SET_USERS_BIG = 'SET_USERS_BIG';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const IS_BIG = 'IS_BIG';

export const BackUsers=(isBacking)=>({type:BACK_USERS_DATA,isBacking})
export const FindUserInfo = (isClickInfo,isBacking) => ({ type: FIND_INFO_USER, isClickInfo,isBacking })
export const FindText = (findUserText) => ({ type: FIND_USER, findUserText })
export const Sorted = (Sort, users) => ({ type: DATA_SORT, Sort, users })
export const DataClicked = (isDataClick) => ({ type: DATA_CLICK, isDataClick })
export const TAKEDATAINFO = (TakeData) => ({ type: TakeDATA, TakeData })
export const AddDataInfo = (formData, isBig) => ({ type: ADD_DATA, formData, isBig });
export const isForm = (isClickedForm) => ({ type: FORM_USER, isClickedForm })
export const isFull = (isBig) => ({ type: IS_BIG, isBig })
export const setUser = (SmallUsers) => ({ type: SET_USERS, SmallUsers })
export const setUserBig = (BigUsers) => ({ type: SET_USERS_BIG, BigUsers })
export const setToggle = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })

export const setUsersSmallThunkCreator = () =>
    async (dispatch) => {
        let small = await MainApi.setUsersApiSmall();
        dispatch(setUser(small))
    }

export const setUsersBigThunkCreator = () =>
    async (dispatch) => {
        dispatch(setToggle(true))
        let big = await MainApi.setUsersApiBig();
        dispatch(setToggle(false))
        dispatch(setUserBig(big))

    }