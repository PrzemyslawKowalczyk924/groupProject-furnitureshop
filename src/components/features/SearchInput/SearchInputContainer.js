import { connect } from 'react-redux';
import SearchInput from './SearchInput';

import { getSearchString } from '../../../redux/searchStringRedux';

const mapStateToProps = state => ({
  research: getSearchString(state),
})
  

const mapDispatchToProps = dispatch => ({
  changeSearchString: newState => dispatch(changeSearchString(newState)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);