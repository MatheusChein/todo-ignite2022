import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Container } from './styles';

interface FormProps {
  onCreateNewTodo: (newTodo: string) => void;
}

export function Form({ onCreateNewTodo }: FormProps) {
  const [newTodo, setNewTodo] = useState('');

  function handleChangeNewTodo(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!newTodo) return;

    onCreateNewTodo(newTodo);
    setNewTodo('');
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={handleChangeNewTodo}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </Container>
  );
}
