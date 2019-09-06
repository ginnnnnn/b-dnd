import React from 'react';
import './App.css';
import initailData from './initData';
import styled from 'styled-components';

import { DragDropContext } from 'react-beautiful-dnd';

import Column from './column';

const Container = styled.div`
  display:flex;
  justify-Content:center
`



class App extends React.Component {
  state = initailData

  onDragStart = (start) => {
    // document.body.style.color = "orange";
    // document.body.style.transition = "background-color 0.2s ease";
    const homeIndex = this.state.columnOrder.indexOf(start.source.droppableId);
    this.setState({
      homeIndex
    })
  }
  // onDragUpdate = (update) => {
  //   const { destination } = update;
  //   const opacity = destination
  //     ? destination.index / Object.keys(this.state.tasks).length : 0;
  //   document.body.style.backgroundColor = `rgba(153,141,217,${opacity})`
  // }

  onDragEnd = (result) => {
    this.setState({ homeIndex: null })
    // document.body.style.color = "inherit"

    //update state by result
    //draggableId which one we dragging,source where it from,destination where it land
    const { draggableId, source, destination } = result
    if (!destination) {
      //user drag it out of the box and land no where
      return;
    }
    if (destination.droppableId === source.droppableId && source.index === destination.index) {
      //user drag it back to the origin position
      return
    }
    const start = this.state.columns[source.droppableId]
    const finish = this.state.columns[destination.droppableId]

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds)//generate a new array
      newTaskIds.splice(source.index, 1);
      //delete the dragging one with the source index
      newTaskIds.splice(destination.index, 0, draggableId);
      //add a new one to the destination index and insert dragging id to it so it can
      //be re-render back into component
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      }
      this.setState(newState);
      return
    }
    const newTaskIds = Array.from(start.taskIds)//generate a new array
    newTaskIds.splice(source.index, 1);//splice return the one was cut
    const newStartColumn = {
      ...start, taskIds: newTaskIds
    }
    const newDestinationTaskIds = Array.from(finish.taskIds)
    newDestinationTaskIds.splice(destination.index, 0, draggableId)
    const newDestinationColumn = {
      ...finish, taskIds: newDestinationTaskIds
    }
    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStartColumn.id]: newStartColumn,
        [newDestinationColumn.id]: newDestinationColumn
      }
    }

    this.setState(newState)

  }


  render() {
    return (
      <DragDropContext
        onDragStart={this.onDragStart}
        // onDragUpdate={this.onDragUpdate}
        onDragEnd={this.onDragEnd}>
        <Container>

          {this.state.columnOrder.map((columnKey, index) => {
            const column = this.state.columns[columnKey];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
            const isDropDisabled = index < this.state.homeIndex
            return <Column
              isDropDisabled={isDropDisabled}
              key={column.id}
              column={column}
              tasks={tasks} />
          }
          )}
        </Container>
      </DragDropContext>
    )
  }
}

export default App;
