import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = state => ({
  username: state.user.username,
});

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
