import React, {Component} from 'react';
import { v1 as uuidv1 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


class App extends Component {
  state = {
    items: [{id: 1, title:'wake up'},{id: 2, title:'make breakfast'}],
    id: uuidv1(),
    item: '',
    editItem: false
  };
  handleChange = (e) => {console.log('Handle Change')};
  handleSubmit = (e) => {console.log('Handle Submit')};
  clearList = () => {console.log('Clear List')};
  handleDelete = (id) => {console.log(`Handle Delete ${id}`)};
  handleEdit = (id) => {console.log(`Handle Edit ${id}`)};

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    )
  }
}


export default App;
