import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './app/tasksSlice';

function App() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Список задач</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
