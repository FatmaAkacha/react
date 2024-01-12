import './App.css';
import Todo from './components/Todo';
import Form from './components/Form';
import FilterButton from './components/FilterButton';

function App(props) {
  const completedTasks = props.tasks.filter((task) => task.completed);
  const incompleteTasks = props.tasks.filter((task) => !task.completed);
  const totalTasks = props.tasks.length;

  const taskList = props.tasks.map((task) => (
    <Todo id={task.id} name={task.name} completed={task.completed} key={task.id} />
  ));

  const taskList2 = props.tasks2.map((task2) => (
    <FilterButton id={task2.id} name={task2.name} />
  ));

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>

      <Form />

      <div className="filters btn-group stack-exception">{taskList2}</div>

      <table>
        <thead>
          <tr>
            <th>Tâches terminées</th>
            <th>Tâches restantes</th>
            <th>Total de tâches</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{completedTasks.length}</td>
            <td>{incompleteTasks.length}</td>
            <td>{totalTasks}</td>
          </tr>
        </tbody>
      </table>

      <ul role="list" className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
