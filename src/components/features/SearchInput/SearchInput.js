import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchInput.module.scss';

const SearchInput = () => (
  <div className={styles.searchField}>
    <input placeholder='Search products...' type='text' />
    <a href='/search'>
      <FontAwesomeIcon /* className={styles.icon} */ icon={faSearch} />
    </a>
  </div>
);

SearchInput.propTypes = {
  children: PropTypes.node,
};

export default SearchInput;
