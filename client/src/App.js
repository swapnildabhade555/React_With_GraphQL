import './App.css';
import { gql, useQuery } from '@apollo/client';

const GET_TODOS_WITH_USER = gql`
  query getTodosWithUser {
    getTodos {
      id
      title
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(GET_TODOS_WITH_USER);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Completed</th>
            <th>User ID</th>
            <th>User Name</th>
          </tr>
        </thead>
        <tbody>
          {data.getTodos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.completed ? 'Yes' : 'No'}</td>
              <td>{todo.user.id}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
