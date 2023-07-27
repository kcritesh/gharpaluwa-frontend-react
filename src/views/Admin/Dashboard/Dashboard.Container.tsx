import { connect } from "react-redux";
import { signoutStart } from "src/store/auth/auth.actions";

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => ({
  onSignOutStart: (cb) => dispatch(signoutStart(cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
