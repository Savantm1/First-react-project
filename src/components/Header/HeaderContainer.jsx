import Header from './Header'
import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {

 componentDidMount() {
  Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(Response => {
   if (Response.data.resultCode === 0) {
    let {id, email, login } = Response.data.data;
    this.props.setAuthUserData(id, email, login);
   }
  })
 }

 render() {
  return (
   
   <Header {...this.props} />
  )
 }
}

const mapStateToProps = (state) => ({
 isAuth: state.auth.isAuth,
 login: state.auth.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);