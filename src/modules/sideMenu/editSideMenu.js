import React from "react";
import { connect } from "react-redux";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import * as actions from '../../actions';

class EditSideMenu extends React.Component {
  state = {
    sideMenuOptions: [],
    sideMenu: [],
  }

  renderSideMenu = () => {
    return (
      <DragDropContext>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {provided.placeholder}
              <Draggable>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    hello
                  </div>
                )}
              </Draggable>
              <Draggable>
                {provided => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    hi
                  </div>
                )}
              </Draggable>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    )
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getSideMenu()),
      this.props.dispatch(actions.getSideMenuOptions())
    ]).then(async () =>
      this.setState({ sideMenuOptions: this.props.sideMenuOptions }),
      this.setState({ sideMenu: this.props.sideMenu })
    )
  }

  render() {
    const { sideMenu, sideMenuOptions } = this.props;
    console.log(sideMenu, sideMenuOptions)
    return (
      <div>
        {this.renderSideMenu()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    sideMenuOptions: state.sideMenu.sideMenuOptions,
    sideMenu: state.sideMenu.sideMenu,
  }
}


export default connect(mapStateToProps)(EditSideMenu)