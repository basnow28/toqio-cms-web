import { map } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { ListComponent } from '../../components/listComponent/listComponent';


class SideMenu extends React.Component {
  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getSideMenu())
    ]).then(async () => {
      if (this.props.errorFetchingSideMenu) {
        toast("There has been an error")
      }
    })
  }

  render() {
    const { sideMenu } = this.props;
    return (
      <div>
        <h3>This is the current side menu personalization setup</h3>
        {map(sideMenu, (item, index) =>
          <ListComponent
            text={item.text}
          />
        )}
        <Link
          to='/sideMenu/edit'
        >
          <span> Edit </span>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorFetchingSideMenuOptions: state.sideMenu.errorFetchingSideMenu,
    sideMenu: state.sideMenu.sideMenu,
  }
}

export default connect(mapStateToProps)(SideMenu);