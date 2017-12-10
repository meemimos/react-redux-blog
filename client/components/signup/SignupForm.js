import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.setState({ errors: {}, isLoading: true });
        this.props.userSignupRequest(this.state).then(
            () => {},
            ({ data }) => this.setState({ errors: data, isLoading: false })
        );
    }

    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) => 
            <option key={val.value} value={val.value}>{val.text}</option>
        );

        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <div className={classnames("field", { 'error': errors.username })}>
                    <label>Username</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.username}
                        type="text" 
                        name="username" 
                        placeholder="First Name" 
                    />
                    {errors.username && <p style={{color: "#9f3a38", fontSize: "12px"}}>{errors.username}</p>}
                </div>
                <div className={classnames("field", { 'error': errors.email })}>                
                    <label>Email</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.email}
                        type="text"
                        name="email" 
                        placeholder="Email" 
                    />
                    {errors.email && <p style={{color: "#9f3a38", fontSize: "12px"}}>{errors.email}</p>}                    
                </div>
                <div className={classnames("field", { 'error': errors.password })}>                
                    <label>Password</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.password}
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                    />
                    {errors.password && <p style={{color: "#9f3a38", fontSize: "12px"}}>{errors.password}</p>}                    
                </div>
                <div className={classnames("field", { 'error': errors.passwordConfirmation })}>                
                    <label>Password Confirmation</label>
                    <input
                        onChange={this.onChange} 
                        value={this.state.passwordConfirmation}
                        type="password" 
                        name="passwordConfirmation" 
                        placeholder="Password Confirmation" 
                    />
                    {errors.passwordConfirmation && <p style={{color: "#9f3a38", fontSize: "12px"}}>{errors.passwordConfirmation}</p>}
                </div>
                <div className={classnames("field", { 'error': errors.timezone })}>                
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
                    {errors.timezone && <p style={{color: "#9f3a38", fontSize: "12px"}}>{errors.timezone}</p>}                    
                </div>
                <div>
                    <button disabled={this.state.isLoading} className="fluid ui primary button">
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