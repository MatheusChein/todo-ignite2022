import { Trash } from 'phosphor-react';
import { Container } from './styles';

interface TodoProps {
  label: string;
  isDone: boolean;
  onRemoveTodo: (label: string) => void;
  onMarkTodoAsDone: (label: string) => void;
}

export function TodoComponent({
  label,
  isDone,
  onRemoveTodo,
  onMarkTodoAsDone,
}: TodoProps) {
  function handleChange() {
    if (isDone) return;

    onMarkTodoAsDone(label);
  }

  return (
    <Container isDone={isDone}>
      <input
        type="checkbox"
        id="todoCheck"
        onChange={handleChange}
        checked={isDone}
      />
      <label htmlFor="todoCheck">{label}</label>
      <button onClick={() => onRemoveTodo(label)}>
        <Trash size={20} />
      </button>
    </Container>
  );
}
