import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './header.module.scss';
import {
  toggleProfileContent,
  updateHeaderTab,
} from '../../redux/actions/actions';

const Header = (header) => {
  function toggleProfile() {
    header.toggleProfileContent();
  }
  function changeHeaderTab(id) {
    header.updateHeaderTab(id);
  }
  return (
    <div>
      <nav className={cx(styles.nav)}>
        <ul>
          {header.titles && header.titles.length
            ? header.titles.map((title) => {
                return (
                  <li
                    className={cx({
                      [styles.active]: title.isSelected,
                    })}
                    key={title.id}
                    role="presentation"
                    onClick={() => changeHeaderTab(title.id)}
                  >
                    {' '}
                    {title.message}{' '}
                  </li>
                );
              })
            : null}
        </ul>
        <div
          role="presentation"
          onClick={toggleProfile}
          className={cx(styles['login-container'])}
        >
          {header.name ? header.name : null}
          <span className={cx(styles['login-pic'])} />
          <em
            className={cx(
              { [styles['down-arrow']]: !header.showProfile },
              { [styles['top-arrow']]: header.showProfile },
            )}
          />
          {header.showProfile ? (
            <div className={cx(styles['profile-content'])}>
              <h3 className={cx(styles['profile-content-heading'])}>
                {header.loginPopupText ? header.loginPopupText : ''}
              </h3>
              <hr />
              <p className={cx(styles['profile-content-text'])}>
                {header.name ? header.name : ''}
              </p>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    titles: state.header.titles,
    name: state.header.name,
    showProfile: state.header.showProfile,
    loginPopupText: state.header.loginPopupText,
  };
};
export default connect(mapStateToProps, {
  toggleProfileContent,
  updateHeaderTab,
})(Header);
