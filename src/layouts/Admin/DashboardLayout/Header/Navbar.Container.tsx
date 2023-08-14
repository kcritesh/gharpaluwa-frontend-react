import { connect } from "react-redux";
import * as AuthActions from "src/store/auth/auth.actions";

interface Props {
  auth: any;
  currentUser: any;
}

const mapStateToProps = (state: Props) => ({
  currentUser: state.auth.currentUser,
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mapDispatchToProps = (
  dispatch: (arg0: { type: string; payload: { cb: any } }) => any
) => ({
  onLogout: (cb: any) => dispatch(AuthActions.signoutStart(cb)),
});

const container = connect(mapStateToProps, mapDispatchToProps);

export default container;
