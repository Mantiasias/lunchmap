import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Control, Form} from 'react-redux-form';

const propTypes = {
  homePageActions: PropTypes.object,
  dispatch: PropTypes.func
};

class ShebangAddForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(shebang) {
    this.props.homePageActions.appActionsCreateShebang(shebang);
  }

  render() {
    return (
      <div className='col-sm-12 col-md-12 col-lg-3 col-xs-12 formContainer c-add-form'>
        <div className='block full'>
          <div className='block-title'>
            <h2>Add shebang</h2>
          </div>
          <Form model='forms.shebangAddForm'
                onSubmit={(shebangAddFormData) => this.handleSubmit(shebangAddFormData)}
                className='form-horizontal form-bordered'>
            <div className='form-group'>
              <label className='col-md-3 control-label'>Add shebang form</label>
              <div className='col-md-9'>
                <Control.textarea rows='3'
                                  model='.text'
                                  className='form-control required'
                                  placeholder='KFC...'/>
              </div>
              <label className='col-md-3 control-label'>Address</label>
              <div className='col-md-9'>
                <Control.text
                  model='.address'
                  placeholder='Санкт Петербург...'/>
              </div>
            </div>
            <button className='form-group' type='submit'>
              Submit Shebang
            </button>
          </Form>
        </div>
      </div>
    );
  }
}

ShebangAddForm.propTypes = propTypes;

export default ShebangAddForm;
