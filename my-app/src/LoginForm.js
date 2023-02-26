// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function LoginForm() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [loggedIn, setLoggedIn] = useState(false);
//   const [error, setError] = useState('');

//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/api/login', {
//         username,
//         password,
//       }
//       );

//       console.log(response.data);

//       if (response.status === 200) {
//         setLoggedIn(true);
//         // console.log(loggedIn)
//         navigate('/offers'); // navigate to /offers on successful login
//       } else {
//         setError(response.data.message);
//       }
//     } catch (error) {
//       console.error(error);
//       setError('An error occurred while logging in.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Log in</button>
//       {error && <div>{error}</div>}
//     </form>
//   );
// }

// export default LoginForm;





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        username,
        password,
      });

      console.log(response.data);

      if (response.status === 200) {
        onLogin();
        navigate('/offers'); // navigate to /offers on successful login
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setError('An error occurred while logging in.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Log in</button>
      {error && <div className='err'>Please enter correct email and password</div>}
    </form>
  );
}

export default LoginForm;
