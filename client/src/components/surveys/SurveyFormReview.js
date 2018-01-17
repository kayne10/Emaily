import React from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions';

//it is possible to loop through fields and values when importing formFields from './formFields'
const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <div>
        <div>
          <label>Survey Title</label>
          <div>{formValues.title}</div>
        </div>
        <div>
          <label>Survey Subject</label>
          <div>{formValues.subject}</div>
        </div>
        <div>
          <label>Email Body</label>
          <div>{formValues.body}</div>
        </div>
        <div>
          <label>Recipients</label>
          <div>{formValues.recipients}</div>
        </div>
      </div>
      <button className="yellow darken-3 white-text btn-flat" onClick={onCancel}>Back</button>
      <button className="green btn-flat white-text right" onClick={() => submitSurvey(formValues, history)}>Send Survey<i className="material-icons right">email</i></button>
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state);
  return {
    formValues: state.form.surveyForm.values
  };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
