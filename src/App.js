import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Question from './Question-answer/Question';
import Shop from './Shop/Shop';

function App() {
  return (
    <div className="">
      <h1 className='text-primary text-center'>Shop For Ramadan</h1>
      <Shop/>
      <Question/>
    </div>
  );
}

export default App;
