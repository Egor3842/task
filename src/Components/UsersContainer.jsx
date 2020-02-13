import React from 'react'
import {connect} from 'react-redux'
import {setUser,
        setUsersSmallThunkCreator,
        setUsersBigThunkCreator,
        isFull,
        isForm,
        AddDataInfo,
        TAKEDATAINFO,
        DataClicked,
        Sorted,
        FindText,
        FindUserInfo
        } from './../redux/UsersReducer'
import Preloader from '../Preloader';
import Table from './Users';

class UsersContainerAPI extends React.Component
{
  componentDidMount() {
    this.props.setUsersSmallThunkCreator();
    this.props.setUsersBigThunkCreator();
  }
  

    render () {
       return   <>
                    {this.props.isFetching ?
                    <Preloader/>
                    :
                    <Table
                    SmallUsers={this.props.SmallUsers}
                    BigUsers={this.props.BigUsers}
                    isBig={this.props.isBig}
                    isFull={this.props.isFull}
                    isFetching={this.props.isFetching}
                    isForm={this.props.isForm}
                    isClickedForm={this.props.isClickedForm}
                    AddDataInfo={this.props.AddDataInfo}
                    TAKEDATAINFO={this.props.TAKEDATAINFO}
                    TakeData={this.props.TakeData}
                    isDataClick={this.props.isDataClick}
                    DataClicked={this.props.DataClicked}
                    Sort={this.props.Sort}
                    Sorted={this.props.Sorted}
                    FindText={this.props.FindText}
                    FindUserInfo={this.props.FindUserInfo}
                    
                    />}
        </>
        }
    }
let  mapStateToProps=(state)=>{
    return{
        SmallUsers:state.UsersReducer.SmallUsers,
        BigUsers:state.UsersReducer.BigUsers,
        isFetching:state.UsersReducer.isFetching,
        isBig:state.UsersReducer.isBig,
        isClickedForm:state.UsersReducer.isClickedForm,
        TakeData:state.UsersReducer.TakeData,
        isDataClick:state.UsersReducer.isDataClick,
        Sort:state.UsersReducer.Sort,
       
    }
    
}


export default connect(mapStateToProps,
    {TAKEDATAINFO,setUser,AddDataInfo,FindText,FindUserInfo, Sorted,setUsersSmallThunkCreator,DataClicked,setUsersBigThunkCreator,isFull,isForm})(UsersContainerAPI)