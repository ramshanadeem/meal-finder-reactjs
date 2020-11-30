import React from 'react'
import Header from './Header';
import AddToDo from './AddToDo';
import OnOff from './OnOff';
import PlusMinus from './PlusMinus';
import Toggle1 from './Toggle1';
import Functional from './Functional'
import FuntionalProps from './FunctionalProps'
import MediaCard from './MediaCard';
import Gate from './Gate';
import '../App.css'

import Apis from './Apis';
import Post from './Post'




class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            todos:
                [{ title: 'Breakfast', id: 1 },
                { title: 'prepare for class', id: 2 },
                { title: 'take a ride', id: 3 }]
        }
    }
    addtodo = (newtodo) => {
        console.log('add new todo ')
        console.log(newtodo)
        let newTodos = [...this.state.todos]
        newTodos.push(newtodo)
        this.setState({
            todos: newTodos

        })

    }
    deletetodo = (id) => {
        console.log(id)
        let newobj = [...this.state.todos]
        let newTodos = newobj.filter(item => item.id != id)
        this.setState({
            todos: newTodos

        })

    }

    render() {
        return (
            <div>
                {/* <Header />
                <AddToDo addtodo={this.addtodo} /> 

                <ul> {this.state.todos.map(
                    item => (
                        <li key={item.id}> {item.title}
                            <button key={item.id} onClick={() => this.deletetodo(item.id)}>X</button>
                        </li>
                    )
                )}</ul> */}
                {/* <OnOff />
                <PlusMinus />
                <Toggle1 />
                <Functional name1="zain" /><br />
                <FuntionalProps name="ramsha" msg="bye" />
                <MediaCard title='TITLE' body='RAMSHA' image='https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612' />
                  <Gate isOpen={false} /> 
                <Gate /> */}
                <Apis />
                <Post />

            </div >
        )
    }
}
export default ToDoList;
