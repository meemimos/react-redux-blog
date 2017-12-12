import React from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

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

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You signed up successfully, welcome!'
                    })
                    this.context.router.push('/');
                },
                ({ data }) => this.setState({ errors: data, isLoading: false })
            );
        }
    }

    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) => 
            <option key={val.value} value={val.value}>{val.text}</option>
        );

        return(
            <form className="ui form" onSubmit={this.onSubmit}>
                <TextFieldGroup 
                    error={errors.username}
                    label={"Username"}
                    onChange={this.onChange}
                    value={this.state.username}
                    field="username"
                />
                <TextFieldGroup 
                    error={errors.email}
                    label={"Email"}
                    onChange={this.onChange}
                    value={this.state.email}
                    field="email"
                />
                <TextFieldGroup 
                    error={errors.password}
                    label={"Password"}
                    type="password"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                />
                <TextFieldGroup 
                    error={errors.passwordConfirmation}
                    label={"Password Confirmation"}
                    type="password"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                />
                
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
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default SignupForm;