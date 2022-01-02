import { isEmpty, map, remove } from 'lodash';
import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Dropdown from 'react-dropdown';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';

import * as actions from '../../actions';
import { reorder, revisedRandId } from '../../utils/utils';
import DashboardItem from './dashboardItem';
import 'react-dropdown/style.css';
import './editDashboard.css';

class EditDashboard extends React.Component {
  state = {
    dashboard: [],
    dashboardOptions: [],
    newSection: {
      addStyle: false,
      components: [],
      style: undefined,
    },
    isItemRemoveable: false,
  }

  onDragEnd = (result) => {
    this.setState({ dashboard: reorder(this.state.dashboard, result.source.index, result.destination.index) });
  }

  removeItemFromDashboard = (item) => {
    const { dashboard } = this.state;
    let newDashboard = [];
    newDashboard = remove(dashboard, d => d.id !== item.id);
    this.setState({ dashboard: newDashboard });
  }

  renderDashboard = () => {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="dashboardList">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
            >
              {map(this.state.dashboard, (item, index) =>
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
                      <div className="dashboard-item">
                        <DashboardItem
                          style={item.style}
                          components={item.components}
                        />
                        <button onClick={() => this.removeItemFromDashboard(item)}>
                          Remove Item
                        </button>
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

  removeComponentFromState = (component) => {
    const { components } = this.state.newSection;
    let newComponents = [];
    newComponents = remove(components, c => c.component !== component.component);
    this.setState({ newSection: { ...this.state.newSection, components: newComponents } })
  }

  addNewSection = () => {
    const { dashboard, newSection } = this.state;
    let dashboardCopy = dashboard;
    dashboardCopy.push({
      style: newSection.style?.value,
      components: newSection.components,
      id: revisedRandId(),
    })
    console.log(dashboardCopy)
    this.setState({ dashboard: dashboardCopy });
    this.setState({
      newSection: {
        addStyle: false,
        components: [],
        style: undefined,
      }
    })
  }

  renderNewComponentsItemForm = () => {
    const { addStyle, style, components } = this.state.newSection;
    return (
      <div>
        <input
          type="checkbox"
          value={addStyle}
          onClick={() => this.setState({ newSection: { ...this.state.newSection, addStyle: !addStyle } })}
          name="addStyle"
        />
        <label for="addStyle">Add style (used if there is more than one components)</label>
        {addStyle &&
          <Dropdown
            options={[
              {
                value: 'display-flex column',
                label: 'column',
              },
              {
                value: 'display-flex row',
                label: 'row',
              },
            ]}
            placeholder="Select style"
            value={style}
            onChange={(e) => {
              this.setState({ newSection: { ...this.state.newSection, style: e } })
            }}
          />
        }
        <div>
          <Dropdown
            options={this.state.dashboardOptions}
            placeholder="Select a component"
            onChange={(e) => {
              this.setState({
                newSection: {
                  ...this.state.newSection,
                  components: !isEmpty(components) ? [...components, { component: e.value }] : [{ component: e.value }]
                }
              })
            }}
          />
          {map(components, component =>
            <div>
              <span>{component.component}</span>
              <button onClick={() => this.removeComponentFromState(component)}>
                remove
              </button>
            </div>
          )}
          <button onClick={() => this.addNewSection()}>
            Add
          </button>
        </div>
      </div>
    )
  }


  onSave = () => {
    Promise.all([
      this.props.dispatch(actions.saveDashboard(this.state.dashboard))
    ]).then(() => {
      if (!this.props.errorPostingDashboard) {
        toast("Changes saved successfully")
      } else {
        toast("There has been an error")
      }
    })
  }

  refactorDashboardData = () => {
    const { dashboardOptions } = this.props;
    let dashboardData = [];
    map(dashboardOptions, item => {
      let newItem = {
        value: item.component,
        label: item.component,
        key: item.id,
      };
      dashboardData.push(newItem);
    })
    return dashboardData;
  }

  componentDidMount() {
    Promise.all([
      this.props.dispatch(actions.getDashboard()),
      this.props.dispatch(actions.getDashboardOptions())
    ]).then(() => {
      if (this.props.errorFetchingDashboard || this.props.errorFetchingDashboardOptions) {
        toast("There has been an error")
      }
      if (!this.props.errorFetchingDashboard) {
        this.setState({ dashboard: this.props.dashboard })
      }
      if (!this.props.errorFetchingDashboardOptions) {
        console.log('hello')
        this.setState({ dashboardOptions: this.refactorDashboardData() })
      }
    })
  }

  render() {
    return (
      <div>
        <div className="edit-dashboard-wrapper" >
          {this.renderNewComponentsItemForm()}
          {this.renderDashboard()}
        </div>
        <button onClick={this.onSave}>
          Save changes
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard.dashboard,
    errorFetchingDashboard: state.dashboard.errorFetchingDashboard,
    dashboardOptions: state.dashboard.dashboardOptions,
    errorFetchingDashboardOptions: state.dashboard.errorFetchingDashboardOptions,
    errorPostingDashboard: state.dashboard.errorPostingDashboard,
  }
}

export default connect(mapStateToProps)(EditDashboard);