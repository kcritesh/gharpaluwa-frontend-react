import { connect } from "react-redux";
import {
  resetPasswordRequestStart,
  resetPasswordStart,
} from "../../../store/auth/auth.actions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  onResetPassReqStart: (email, cb) =>
    dispatch(resetPasswordRequestStart(email, cb)),
  onResetPassStart: (formData, cb) =>
    dispatch(resetPasswordStart(formData, cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
