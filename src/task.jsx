import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border:1px solid lightgrey;
    border-radius:2px;
    padding:8px;
    margin-bottom:8px;
    background-color:${props =>
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? 'lightgreen'
                : 'white'};
`;
// const Handle = styled.div`
//     width:20px;
//     height:20px;
//     background-color:orange;
//     border-radius:4px
// `
export default class Task extends React.Component {
    state = {}
    render() {
        const isDragDisabled = this.props.task.id === "task2"
        return (
            <Draggable
                isDragDisabled={isDragDisabled}
                //isDragDisabled boolean cant be drag
                draggableId={this.props.task.id}
                index={this.props.index}>
                {(provided, snapshot) =>
                    <Container
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        // this is for it to be draggable
                        ref={provided.innerRef}
                        isDragDisabled={isDragDisabled}
                        isDragging={snapshot.isDragging}
                        onDoubleClick={() => console.log('I am clicked ' + this.props.task.id)}
                    >
                        {/* <Handle 
                        {...provided.dragHandleProps}
                        /> */}
                        {this.props.task.content}</Container>
                }
            </Draggable>);
    }
}
