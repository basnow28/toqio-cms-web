import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { toast } from "react-toastify";

import * as actions from '../../actions';
import { map } from "lodash";
import { reorder } from "../../utils/utils";


class EditSideMenu extends React.Component {
  state = {
    sideMenuOptions: [],
    sideMenu: [],
  }

  onDragEnd = (result) => {
    this.setState({ sideMenu: reorder(this.state.sideMenu, result.source.index, result.destination.index) });
  }

  renderSideMenu = () => {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        You can drag and drop the elements of the list
        <Droppable droppableId="sideMenuList">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
            >
              {map(this.state.sideMenu, (item, index) =>
                <Draggable
                  draggableId={item.id}
                  key={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div>
                        {item.text}
                      </div>
                    </div>
                  )}
                </Draggable>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext >
    )
  }

  onSave = () => {
    Promise.all([
      this.props.dispatch(actions.saveSideMenu(this.state.sideMenu))
    ]).then(() => {
      if (!this.props.errorPostingSideMenu) {
        toast("Changes saved successfully")
      } else {
        toast("There has been an error")
      }
    })
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getSideMenu()),
      this.props.dispatch(actions.getSideMenuOptions())
    ]).then(() => {
      if (!this.props.errorFetchingSideMenu) {
        //this.setState({ sideMenuOptions: this.props.sideMenuOptions }),
        this.setState({ sideMenu: this.props.sideMenu })
      }
    }
    )
  }

  render() {
    const { sideMenu, sideMenuOptions } = this.props;
    return (
      <div>
        {this.renderSideMenu()}
        <button onClick={this.onSave}>
          Save changes
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sideMenuOptions: state.sideMenu.sideMenuOptions,
    sideMenu: state.sideMenu.sideMenu,
    errorPostingSideMenu: state.sideMenu.errorPostingSideMenu,
  }
}


export default connect(mapStateToProps)(EditSideMenu)