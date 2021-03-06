import * as actionCreators from '@/store/actionCreators';
import { connect } from 'react-redux';
import StoreTodoList from '@/components/store-list/index';


const defaultList = [{
  id: '4',
  text: 'morning',
}, {
  id: '5',
  text: 'noon',
}, {
  id: '6',
  text: 'evening',
}];

const mapStateToProps = (state: any) => {
  console.log('state', state.todoList);
  return {
    todoList: state.todoList || defaultList,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onAddTodo: (text: string) => {
      dispatch(actionCreators.addTodo(text));
    },
    onDeleteTodo: (id: string) => {
      dispatch(actionCreators.deleteTodo(id));
    },
    onEditTodo: (id: string, text: string) => {
      dispatch(actionCreators.editTodo(id, text));
    },
  };
};

const StoreList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(StoreTodoList);

export default StoreList;