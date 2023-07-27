import { connect } from "react-redux";
import { signinStart } from "../../../store/auth/auth.actions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  onSigninStart: (formData, cb) => dispatch(signinStart(formData, cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
