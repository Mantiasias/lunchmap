import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  homePageActions: PropTypes.object
};

class AddRecallForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='col-sm-12 col-md-12 col-lg-3 col-xs-12 formContainer c-add-form'>
        <div className='block full'>
          <div className='block-title'>
            <h2>Add your recall</h2>
            <div className='block-options pull-right' id='close-button'>
              <a href='' className='btn btn-alt btn-sm btn-default'><i className='fa fa-times'/></a>
            </div>
          </div>
          <form id='form-validation' action='page_forms_validation.php' method='post'
                className='form-horizontal form-bordered recallform block-content'>
            <fieldset className='recallform__fieldset'>
              <input type='hidden' value='props id' name='userId'/>
              <div className='form-group'>
                <label className='col-md-3 col-sm-3 col-xs-3 control-label' htmlFor='example-chosen'>Maybe new
                  place</label>
                <div id='shebang-select-container' className='col-md-7 col-sm-7 col-xs-7'/>
                <div className='col-md-2 col-sm-2 col-xs-2 pull-right'>
                  <a className='btn btn-primary' id='add-shebang-button'><i className='fa fa-plus-circle'/></a>
                </div>
              </div>
              <div className='form-group'>
                <label className='col-md-3 control-label' htmlFor='example-textarea-input'>Recall</label>
                <div className='col-md-9'>
              <textarea id='example-textarea-input' name='recall' rows='4' className='form-control required'
                        placeholder='Place recall here..'/>
                </div>
              </div>
              <div className='form-group recall-sign-block'>
                <label className='col-md-3 control-label'
                       htmlFor='recall-sign'>Sign:</label>
                <div className='col-md-5 comment-sign-buttons'>
                  <i className='fa fa-thumbs-down fa-2x required btn btn-danger'>
                    <input type='radio'
                           name='recall-sign'
                           value='-1'
                           className='recall-sign-radio'
                           required/></i>
                  <i className='fa fa-thumbs-up fa-2x required btn btn-success'>
                    <input type='radio' name='recall-sign'
                           value='1'
                           className='recall-sign-radio'/></i>
                </div>
              </div>
              <div className='form-group choose-date'>
                <label className='col-md-3 control-label'>Visit Date</label>
                <div className='col-md-9'>
                  <input type='text' id='example-datepicker-inline' name='example-datepicker'
                         className='form-control input-datepicker-close required' data-date-format='dd/mm/yyyy'
                         placeholder='dd/mm/yyyy'/>
                </div>
              </div>
            </fieldset>
            <div className='form-group' id='submit-block'>
              <div className='block-options pull-right' id='submit-button'/>
            </div>

          </form>
        </div>
      </div>
    );
  }
}

AddRecallForm.propTypes = propTypes;

export default AddRecallForm;
