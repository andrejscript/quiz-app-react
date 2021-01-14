import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import is from 'is_js';

export default class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      eamil: {
        value: '',
        placeholderDefault: 'example@mail.com',
        type: 'email',
        label: 'Email',
        errorMessage: 'Enter correct mail',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        placeholderDefault: '******',
        type: 'password',
        label: 'Password',
        errorMessage: 'Enter correct password',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = () => {};

  registerHandler = () => {};

  submitHandler = (e) => {
    e.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength;
    }

    return isValid;
  }

  onChangeHandler = (e, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = e.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach(name => {
      isFormValid = formControls[name].valid && isFormValid
    })

    this.setState({
      formControls,
      isFormValid
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          placeholder={control.placeholderDefault}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(e) => this.onChangeHandler(e, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Log in</h1>

          <form onSubmit={this.submitHandler} className={classes.AuthForm}>
            {this.renderInputs()}

            <Button 
              type='success' 
              onClick={this.logOnHandler}
              disabled={!this.state.isFormValid}
              >
              Log on
            </Button>
            <Button 
              type='primary' 
              onClick={this.logInHandler}
              disabled={!this.state.isFormValid}
              >
              Log in
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
