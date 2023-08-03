import { connect } from "react-redux";
import * as AuthActions from "src/store/auth/auth.actions";


const mapStateToProps = (state) => ({
    currentUser: state.auth.currentUser,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapDispatchToProps = (dispatch) => ({
    onLogout: (cb) => dispatch(AuthActions.signoutStart(cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
