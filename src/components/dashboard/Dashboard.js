/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { connect } from 'react-redux';
import cx from 'classnames';
import styles from './dashboard.module.scss';
import DashboardHeader from './DashboardHeader';
import RenderRow from './RenderRow';
import Filter from './filter/Filter';
import cogImage from '../../icons/cog.png';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      monitors: props.monitors,
      showHeaderIcon: false,
      visibleheader: [],
      visibleSortHeader: [],
      filterList: [],
      filterLength: 4,
    };
    this.state.visibleheader = this.getVisibleHeaders();
    this.state.visibleSortHeader = this.getVisibleSortHeaders();
    this.state.filterList = this.getFilters();
  }

  // componentDidMount() {
  //   this.getFilters();
  // }

  getKeys = () => {
    const { monitors } = this.state;
    const { 0: firstMonitor } = monitors;
    return Object.keys(firstMonitor);
  };

  getSortContent = (key) => {
    const uniqueHeaderValues = this.getUniqueValuesInHeaders();
    const uniqueItems = uniqueHeaderValues[key].map((item) => {
      return (
        <div
          key={item}
          onClick={() => {
            this.sortMonitors(key, item);
          }}
          className={cx(styles['sort-item'])}
        >
          {item}
        </div>
      );
    });
    return <div className={cx(styles['sort-container'])}>{uniqueItems}</div>;
  };

  sortMonitors = (key, item) => {
    const sortedMonitors = this.state.monitors;
    sortedMonitors.sort((first, second) => {
      if (!Array.isArray(first[key])) {
        if (first[key].includes(item) && !second[key].includes(item)) {
          return -1;
        }
        if (!first[key].includes(item) && second[key].includes(item)) {
          return 1;
        }
      } else if (
        first[key].join(',') === item &&
        !(second[key].join(',') === item)
      ) {
        return -1;
      } else if (
        !(first[key].join(',') === item) &&
        second[key].join(',') === item
      ) {
        return 1;
      }
      return 0;
    });
  };

  getHeaders = () => {
    const keys = this.getKeys();
    return keys.map((key) => {
      if (this.state.visibleheader[key].isVisible) {
        return (
          key !== 'isHidden' && (
            <th
              key={key}
              onClick={() => {
                this.toggleSortOptions(key);
              }}
              className={cx(styles['table-head-row'])}
            >
              {key}
              {this.state.visibleSortHeader[key].isVisible &&
                this.getSortContent(key)}
            </th>
          )
        );
      }
      return null;
    });
  };

  setFilter = (type, value, e) => {
    if (type && value && e) {
      const { filterList } = this.state;
      if (e.target.checked) {
        if (value !== 'all') {
          const index = filterList[type].activeFilters.indexOf('all');
          if (index > -1) {
            filterList[type].activeFilters.splice(index, 1);
          }
        } else {
          filterList[type].activeFilters = [];
        }
        filterList[type].activeFilters.push(value);
      } else {
        const index = filterList[type].activeFilters.indexOf(value);
        if (index > -1) {
          filterList[type].activeFilters.splice(index, 1);
        }
      }
      this.setState({
        filterList,
      });
      this.filterMonitors();
    }
  };

  isNoFilterAdded = () => {
    let hasFilter = false;
    const { filterList } = this.state;
    const keys = this.getKeys();
    keys.map((key) => {
      filterList[key].filterLength = this.state.filterLength;
      if (filterList[key].activeFilters.length !== 0) {
        hasFilter = true;
      }
      return key;
    });
    return !hasFilter;
  };

  filterMonitors = () => {
    const { monitors } = this.state;
    const { filterList } = this.state;
    const tempMonitorArray = [];
    const keys = this.getKeys();
    if (monitors && filterList && keys) {
      monitors.map((monitor) => {
        const tempMonitor = { ...monitor };
        tempMonitor.isHidden = !this.isNoFilterAdded();
        keys.map((key) => {
          if (filterList[key].activeFilters.includes('all')) {
            tempMonitor.isHidden = false;
          }
          if (
            tempMonitor.isHidden &&
            filterList[key].activeFilters.includes(monitor[key])
          ) {
            tempMonitor.isHidden = false;
          }
          return key;
        });
        tempMonitorArray.push(tempMonitor);
        return tempMonitor;
      });
      this.setState(() => {
        return { monitors: tempMonitorArray };
      });
    }
  };

  getToggleheaders = () => {
    const keys = this.getKeys();
    return keys.map((key) => {
      return (
        <div key={key} className={cx(styles['toggle-item'])}>
          <label htmlFor={key}>
            {key}
            <input
              id={key}
              type="checkbox"
              checked={this.state.visibleheader[key].isVisible}
              onChange={() => {
                this.specificToggleHeader(key);
              }}
            />
            <span className={cx(styles.checkmark)} />
          </label>
        </div>
      );
    });
  };

  toggleSortOptions = (key) => {
    const newVisibleSortHeader = this.state.visibleSortHeader;
    newVisibleSortHeader[key].isVisible = !newVisibleSortHeader[key].isVisible;
    this.setState(() => {
      return { visibleSortheader: newVisibleSortHeader };
    });
  };

  getUniqueValuesInHeaders = () => {
    const uniqueHeaderValues = {};
    const keys = this.getKeys();
    const { monitors } = this.state;
    for (let i = 0; i < keys.length; i += 1) {
      uniqueHeaderValues[keys[i]] = [];
    }
    monitors.map((monitor) => {
      Object.keys(monitor).forEach((data) => {
        if (Array.isArray(monitor[data])) {
          if (!uniqueHeaderValues[data].includes(monitor[data].join(','))) {
            uniqueHeaderValues[data].push(monitor[data].join(','));
          }
        } else if (!uniqueHeaderValues[data].includes(monitor[data])) {
          uniqueHeaderValues[data].push(monitor[data]);
        }
      });
      return monitor;
    });
    return uniqueHeaderValues;
  };

  getVisibleHeaders = () => {
    const visibleheader = [];
    const keys = this.getKeys();
    keys.map((key) => {
      visibleheader[key] = { isVisible: true };
      return key;
    });
    return visibleheader;
  };

  getVisibleSortHeaders = () => {
    const visibleSortHeader = [];
    const keys = this.getKeys();
    keys.map((key) => {
      visibleSortHeader[key] = { isVisible: false };
      return key;
    });
    return visibleSortHeader;
  };

  getFilters = () => {
    const filters = this.getUniqueValuesInHeaders();
    const keys = this.getKeys();
    keys.map((key) => {
      filters[key].splice(0, 0, 'all');
      filters[key].activeFilters = [];
      filters[key].filterLength = this.state.filterLength;
      return key;
    });
    return filters;
  };

  getRowData = () => {
    const { monitors } = this.state;
    const keys = this.getKeys();
    return monitors.map((row, index) => {
      return (
        !row.isHidden && (
          <tr key={index} className={cx(styles['table-row'])}>
            <RenderRow
              key={index}
              data={row}
              headerVisible={this.state.visibleheader}
              keys={keys}
            />
          </tr>
        )
      );
    });
  };

  toggleShowHeader = () => {
    this.setState((prevState) => {
      return { showHeaderIcon: !prevState.showHeaderIcon };
    });
  };

  specificToggleHeader(key) {
    const newVisibleHeader = this.state.visibleheader;
    newVisibleHeader[key].isVisible = !newVisibleHeader[key].isVisible;
    this.setState(() => {
      return { visibleheader: newVisibleHeader };
    });
  }

  render() {
    return (
      <div className={cx(styles.dashboardContainer)}>
        <Filter
          filters={this.state.filterList}
          setFilter={this.setFilter}
          monitorKeys={this.getKeys()}
        />
        <div className={cx(styles['dashboard-table-container'])}>
          <DashboardHeader />
          <div className={cx(styles['icon-container'])}>
            <img
              onClick={this.toggleShowHeader}
              src={cogImage}
              alt="cog"
              className={cx(styles['cog-icon'])}
            />
            {this.state.showHeaderIcon ? (
              <div className={cx(styles['toggle-header-content'])}>
                <h3 className={cx(styles['toggle-header-heading'])}>
                  {this.props.toggleHeader}
                </h3>
                {this.getToggleheaders()}
              </div>
            ) : null}
          </div>
          <table>
            <thead className={cx(styles['table-head'])}>
              <tr>{this.getHeaders()}</tr>
            </thead>
            <tbody>{this.getRowData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { ...state };
};
export default connect(mapStateToProps)(Dashboard);
