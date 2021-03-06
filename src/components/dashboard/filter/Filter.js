/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './Filter.module.scss';

class Filter extends React.Component {
  componentDidMount() {
    this.setInputRange(50);
  }

  showOrExpand = (key) => {
    if (
      this.props.filters[key].length >
        this.props.filters[key].filterLength + 1 ||
      this.props.filters[key].filterLength !== this.props.defaultFilterLength
    ) {
      return this.props.filters[key].filterLength ===
        this.props.defaultFilterLength ? (
        <div
          onClick={() => {
            this.props.showAllFilter(key);
          }}
          className={cx(styles['filter-item-expand'])}
        >
          Expand All
        </div>
      ) : (
        <div
          onClick={() => {
            this.props.showDefaultFilter(key);
          }}
          className={cx(styles[('filter-item-expand', 'filter-less')])}
        >
          Show less
        </div>
      );
    }
    return null;
  };

  setInputRange = (value) => {
    const matchElement = document.getElementById('displayMatch');
    matchElement.innerHTML = `${value}%`;
    matchElement.style.left = `calc(${value}% `;
    this.props.setMatchFilter(value);
  };

  matchRangeChange = (e) => {
    if (e) {
      this.setInputRange(e.target.value);
    }
  };

  getMatchFilter = () => {
    if (this.props.monitorKeys.includes('match')) {
      return (
        <div className={cx(styles['slider-container'])}>
          <h3>MATCHING %</h3>
          <input
            type="range"
            max="100"
            onChange={this.matchRangeChange}
            className={cx(styles['slider-input'])}
          />
          <div id="displayMatch" className={cx(styles.displayMatch)} />
        </div>
      );
    }
    return null;
  };

  getFilterRows = () => {
    return this.props.monitorKeys.map((key, keyIndex) => {
      return (
        keyIndex <= this.props.filters[key].filterLength &&
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
                    <label htmlFor={key + filter}>
                      {' '}
                      {filter}
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
                    </label>
                    {filter !== 'all' && (
                      <span className={cx(styles['filter-value'])}>
                        ({this.props.getValueOccurrences(key, filter)})
                      </span>
                    )}
                  </div>
                )
              );
            })}
            {this.showOrExpand(key)}
          </div>
        )
      );
    });
  };

  render() {
    return (
      <div className={cx(styles['filter-container'])}>
        <h3>{this.props.filterTitle}</h3>
        {this.getMatchFilter()}
        {this.getFilterRows()}
        <button
          type="button"
          onClick={() => {
            this.props.clearFilters();
          }}
          className={`${styles['clear-filter']} `}
        >
          Clear Filters
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps)(Filter);
