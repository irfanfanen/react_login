import logo from './logo.svg';
import './App.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

function App() {
	const responseFacebook = (response) => {
		console.log(response.email);
	}
  const responseGoogle = (response) => {
    console.log(response.Ju.zv);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Login With FB and GG
        </p>
         <FacebookLogin
            appId={process.env.REACT_APP_FB}
            fields="name,email,picture"
            callback={responseFacebook}
            icon="fa-facebook"
          />
          <br />
          <GoogleLogin
            clientId={process.env.REACT_APP_GG}
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
      </header>
    </div>
  );
}

export default App;
