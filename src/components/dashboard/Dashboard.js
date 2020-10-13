/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './dashboard.module.scss';
import DashboardHeader from './DashboardHeader';
import RenderRow from './RenderRow';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { monitors: props.monitors };
  }

  componentDidMount() {
    this.getKeys();
  }

  getKeys = () => {
    const { monitors } = this.state;
    const { 0: firstMonitor } = monitors;
    return Object.keys(firstMonitor);
  };

  getHeaders = () => {
    const keys = this.getKeys();
    return keys.map((key) => {
      return (
        <th key={key} className={cx(styles['table-head-row'])}>
          {key}
        </th>
      );
    });
  };

  getRowData = () => {
    const { monitors } = this.state;
    const keys = this.getKeys();
    return monitors.map((row, index) => {
      return (
        <tr key={index} className={cx(styles['table-row'])}>
          <RenderRow key={index} data={row} keys={keys} />
        </tr>
      );
    });
  };

  render() {
    return (
      <div className={cx(styles.dashboardContainer)}>
        <DashboardHeader />
        <table>
          <thead className={cx(styles['table-head'])}>
            <tr>{this.getHeaders()}</tr>
          </thead>
          <tbody>{this.getRowData()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Dashboard);
