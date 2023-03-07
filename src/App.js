import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// import BasicExample from './Register/ReactBootstrap';
import ReactBootstrap from './Register/ReactBootstrap';
import { getAuth } from 'firebase/auth';


function App() {

  const auth = getAuth(App)


  return (
    <div className='w-50 mx-auto'>

          
       <ReactBootstrap></ReactBootstrap>
    </div>
  );
}

export default App;
