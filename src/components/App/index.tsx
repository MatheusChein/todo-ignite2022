import { ThemeProvider } from 'styled-components';
import { Header } from '../Header';
import { Form } from '../Form';
import { TodoComponent } from '../Todo';

import { theme } from '../../styles/theme';
import GlobalStyle from '../../styles/global';
import { Container, ListHeader } from './styles';
import { useState } from 'react';
import { fakeTodos } from '../../utils/fakeTodos';

interface Todo {
  label: string;
  isDone: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>(fakeTodos);

  const totalDoneTodos = todos.reduce((acc, current) => {
    if (current.isDone) {
      acc++;
    }

    return acc;
  }, 0);

  function handleCreateNewTodo(todo: string) {
    setTodos([
      {
        label: todo,
        isDone: false,
      },
      ...todos,
    ]);
  }

  function handleRemoveTodo(label: string) {
    setTodos((prevState) => prevState.filter((todo) => todo.label !== label));
  }

  function handleMarkTodoAsDone(label: string) {
    console.log(label);

    const filteredTodos = todos.filter((todo) => todo.label !== label);

    filteredTodos.push({
      label,
      isDone: true,
    });

    setTodos(filteredTodos);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Container>
        <Form onCreateNewTodo={handleCreateNewTodo} />

        <div>
          <ListHeader>
            <strong className="createdTodos">
              Tarefas criadas <span>{todos.length}</span>
            </strong>
            <strong className="doneTodos">
              Concluídas{' '}
              <span>
                {totalDoneTodos} de {todos.length}
              </span>
            </strong>
          </ListHeader>

          {todos.map((todo) => (
            <TodoComponent
              key={todo.label}
              label={todo.label}
              isDone={todo.isDone}
              onRemoveTodo={handleRemoveTodo}
              onMarkTodoAsDone={handleMarkTodoAsDone}
            />
          ))}
        </div>
      </Container>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
