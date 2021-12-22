import { map } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as actions from '../../actions';
import DashboardItem from './dashboardItem';

class Dashboard extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getDashboard())
    ]).then(async () => {
      if (this.props.errorFetchingDashboard) {
        toast("There has been an error")
      }
    })
  }

  render() {
    const { dashboard } = this.props;
    console.log(dashboard)
    return (
      <div>
        <h3>This is the current dashboard personalization setup</h3>
        {map(dashboard, (item, index) =>
          <DashboardItem
            components={item.components}
            style={item.style}
            key={index}
          />
        )}
        <Link
          to='/dashboard/edit'
        >
          <span> Edit </span>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorFetchingDashboard: state.dashboard.errorFetchingDashboard,
    dashboard: state.dashboard.dashboard,
  }
}

export default connect(mapStateToProps)(Dashboard);
