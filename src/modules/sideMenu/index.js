import { map } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import * as actions from '../../actions';
import { SideMenuComponent } from '../../components/sideMenuComponent/sideMenuComponent';


class SideMenu extends React.Component {
  state = {
    sideMenuOptions: []
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getSideMenuOptions()),
      this.props.dispatch(actions.getSideMenu())
    ]).then(async () => {
      if (this.props.errorFetchingSideMenuOptions) {
        toast("There has been an error")
      } else {
        this.setState({ sideMenuOptions: this.props.sideMenuOptions })
      }
    })
  }

  render() {
    const { sideMenu } = this.props;
    console.log(actions)
    console.log(this.props.sideMenu)
    return (
      <div>
        <h3>This is the current side menu personalization setup</h3>
        {map(sideMenu, (item, index) =>
          <SideMenuComponent
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
    errorFetchingSideMenuOptions: state.sideMenu.errorFetchingSideMenuOptions,
    sideMenuOptions: state.sideMenu.sideMenuOptions,
    sideMenu: state.sideMenu.sideMenu,
  }
}

export default connect(mapStateToProps)(SideMenu);