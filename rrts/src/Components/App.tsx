import React from 'react';
import { Todo, fetchTodos } from '../actions';
import { connect } from 'react-redux';
import { StoreState } from '../reducers';

interface AppProps {
  todos: Todo[];
  fetchTodos(): any;
}

export class App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return <div key={todo.id}>{todo.title}</div>;
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch posts</button>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return {
    todos,
  };
};

export const AppConnected = connect(mapStateToProps, { fetchTodos })(App);
