import React from 'react';
import styled from 'styled-components';
import Task from './task.jsx'

import { Droppable } from 'react-beautiful-dnd'

const Container = styled.div`
    margin:8px;
    border:1px solid lightgrey;
    border-radius:2px;
    flex:0 0 30%;

    display:flex;
    flex-direction:column;

    `;
const Title = styled.h3`
    padding:8px;
    `;

const TaskList = styled.div`
    padding:8px;
    transition:background-color 0.2s ease;
    background-color:${props => props.isDraggingOver ? "skyblue" : "white"}
    flex-grow:1;
    min-height:100px
    `;

export default class Column extends React.Component {

    render() {
        return (
            <Container>
                <Title>{this.props.column.title}</Title>
                <Droppable
                    droppableId={this.props.column.id}
                    // type={this.props.column.id === "column3" ? "done" : "active"}
                    //column can not be drop
                    isDropDisabled={this.props.isDropDisabled}
                >
                    {(provided, snapshot) => (
                        <TaskList
                            isDraggingOver={snapshot.isDraggingOver}
                            ref={provided.innerRef}
                            // innerRef is for HTML DOM to get this 
                            {...provided.droppableProps}
                        >{this.props.tasks.map((task, i) =>
                            <Task key={task.id} task={task} index={i} />)}
                            {provided.placeholder}
                            {/* placeholder is for increase the space for drop component */}
                        </TaskList>)}
                </Droppable>
            </Container>
        )
    }
}