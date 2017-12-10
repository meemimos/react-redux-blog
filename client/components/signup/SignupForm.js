import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

    render() {

        const options = map(timezones, (val, key) => 
            <option key={val.value} value={val.value}>{val.text}</option>
        );

        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className="field">
                    <label>Username</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.username}
                        type="text" 
                        name="username" 
                        placeholder="First Name" 
                    />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.email}
                        type="text"
                        name="email" 
                        placeholder="Email" 
                    />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.password}
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                    />
                </div>
                <div className="field">
                    <label>Password Confirmation</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.passwordConfirmation}
                        type="password" 
                        name="passwordConfirmation" 
                        placeholder="Password Confirmation" 
                    />
                </div>
                <div className="field">
                    <label>Timezone</label>
                    <select 
                        className="ui dropdown"
                        name= "timezone"
                        onChange= {this.onChange}
                        value= {this.state.timezone}
                    >
                        <option value="" disabled>Choose Your Timezone</option>
                        {options}
                    </select>
                </div>
                <div>
                    <button className="fluid ui blue button">
                        Sign up
                    </button>    
                </div>
            </form>
        );
    }
}

SignupForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default SignupForm;