import { connect } from "react-redux";
import { registerStart } from "../../../store/auth/auth.actions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  onRegisterStart: (formData, cb) => dispatch(registerStart(formData, cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
