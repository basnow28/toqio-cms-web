import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import * as actions from '../../actions';


class SideMenu extends React.Component {

  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getSideMenuOptions())
    ]).then(async () => {
      if (this.props.errorFetchingSideMenuOptions) {
        toast("There has been an error")
      }
    })
  }
  render() {
    const { sideMenuOptions } = this.props;
    console.log(actions)
    console.log(sideMenuOptions)
    return (
      <div>
        SideMenu
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorFetchingSideMenuOptions: state.sideMenu.errorFetchingSideMenuOptions,
    sideMenuOptions: state.sideMenu.sideMenuOptions,
  }
}

export default connect(mapStateToProps)(SideMenu);