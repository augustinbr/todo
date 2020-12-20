import '../assets/stylesheets/App.css';
import '../assets/stylesheets/application.scss';

import ToDoList from '../containers/ToDoList'
import ReactDOM from 'react-dom'


function App() {
  return (
    <div className="App">
          <ToDoList />
    </div>
  );
}

export default App;