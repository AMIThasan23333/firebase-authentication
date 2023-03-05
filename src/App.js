import logo from './logo.svg';
import './App.css';
import { getAuth } from 'firebase/auth';
import Apps from './Firebase/firebase.init';



function App() {

  const auth = getAuth(Apps)

  const handleRegister = (event) => {

    event.preventDefault()

    const email = event.target.email.value;

    const password = event.target.password.value;

    console.log(email, password);




  }

  return (
    <div className="App">

      <form  onSubmit={handleRegister}>

        <input type="email" name="email" id=""   placeholder='email'/>
        <br/>
        <input type="password" name="password" id="" placeholder='password' />

        <br/>

        <button type='submit'>Register</button>
      
      </form>
       
    </div>
  );
}

export default App;
