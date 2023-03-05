import logo from './logo.svg';
import './App.css';
import { getAuth } from 'firebase/auth';
import Apps from './Firebase/firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicExample from './Register/ReactBootstrap';


function App() {

  const auth = getAuth(Apps)

  const handleRegister = (event) => {

    event.preventDefault()

    const email = event.target.email.value;

    const password = event.target.password.value;

    console.log(email, password);




  }

  return (
    <div className='w-50 mx-auto'>

          
       <BasicExample></BasicExample>
    </div>
  );
}

export default App;
