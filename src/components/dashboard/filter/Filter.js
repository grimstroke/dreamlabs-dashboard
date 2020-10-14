/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './Filter.module.scss';

class Filter extends React.Component {
  getFilterRows = () => {
    return this.props.monitorKeys.map((key, keyIndex) => {
      return (
        keyIndex <= 4 &&
        typeof this.props.filters[key][1] !== 'boolean' &&
        key !== 'match' && (
          <div key={key} className={cx(styles['filter-items-container'])}>
            <h3>{key}</h3>
            {this.props.filters[key].map((filter, index) => {
              return (
                index <= this.props.filters[key].filterLength && (
                  <div
                    key={filter}
                    className={cx(styles['filter-item-container'])}
                  >
                    <input
                      type="checkbox"
                      className={cx(styles['filter-checkbox'])}
                      onChange={(e) => {
                        this.props.setFilter(key, filter, e);
                      }}
                      checked={this.props.filters[key].activeFilters.includes(
                        filter,
                      )}
                      id={key + filter}
                    />
                    <span className={cx(styles.checkmark)} />
                    <label htmlFor={key + filter}> {filter} </label>
                  </div>
                )
              );
            })}
          </div>
        )
      );
    });
  };

  render() {
    return (
      <div className={cx(styles['filter-container'])}>
        <h3>{this.props.filterTitle}</h3>
        {this.getFilterRows()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Filter);
