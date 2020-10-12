import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './dashboardHeader.module.scss';

const dashboardHeader = (props) => {
  return (
    <div>
      <div className={cx(styles.dashboardHeader)}>
        <h4 className={cx(styles['header-text'])}>{props.title}</h4>
        <div className={cx(styles.dashboardButtonContainer)}>
          {props.export ? (
            <button type="submit" className={cx(styles['export-button'])}>
              {props.export}
            </button>
          ) : null}
          {props.newMonitor ? (
            <button type="submit" className={cx(styles['new-button'])}>
              {props.newMonitor}
            </button>
          ) : null}
        </div>
      </div>
      <div className={cx(styles['dashboard-flex-box'])}>
        {props.monitors.text && props.monitors.value ? (
          <div className={cx(styles['dashboard-item-outer'])}>
            <div className={cx(styles['dashboard-item-inner'])}>
              <span className={cx(styles['heading-gray'])}>
                {props.monitors.value}
              </span>
              <span>{props.monitors.text}</span>
            </div>
          </div>
        ) : null}
        {props.newMatches.text &&
        props.newMatches.value &&
        props.watchlistAdditions.text &&
        props.watchlistAdditions.value ? (
          <div className={cx(styles['dashboard-item-outer'])}>
            <div className={cx(styles['dashboard-item-inner'])}>
              <span className={cx(styles['heading-blue'])}>
                {props.newMatches.value}
              </span>
              <span>{props.newMatches.text}</span>
            </div>
            <div className={cx(styles['dashboard-item-inner'])}>
              <span className={cx(styles['heading-blue'])}>
                {props.watchlistAdditions.value}
              </span>
              <span>{props.watchlistAdditions.text}</span>
            </div>
          </div>
        ) : null}
        {props.transfers.text && props.transfers.value ? (
          <div className={cx(styles['dashboard-item-outer'])}>
            <div className={cx(styles['dashboard-item-inner'])}>
              <span className={cx(styles['heading-blue'])}>
                {props.transfers.value}
              </span>
              <span>{props.transfers.text}</span>
            </div>
          </div>
        ) : null}
        {props.newAssignments.text && props.newAssignments.value ? (
          <div className={cx(styles['dashboard-item-outer'])}>
            <div className={cx(styles['dashboard-item-inner'])}>
              <span className={cx(styles['heading-blue'])}>
                {props.newAssignments.value}
              </span>
              <span>{props.newAssignments.text}</span>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { ...state.dashboardHeader };
};
export default connect(mapStateToProps)(dashboardHeader);
