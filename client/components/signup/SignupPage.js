import React from 'react';
import SignupForm from './SignupForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/SignupActions';

class SignupPage extends React.Component {
    render() {
        const { userSignupRequest } = this.props;
        console.log("SignupPage");
        return(
            <div className="ui centered grid">
                <div className="six wide tablet eight wide computer column">
                    <h3 className="">Join Our Community!</h3>
                    <SignupForm userSignupRequest={userSignupRequest}/>
                </div>
            </div>
        );
    }
}


SignupPage.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage);