// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import OfferForm from './OfferForm';

// function App() {
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleLogin = () => {
//     setLoggedIn(true);
//     console.log("yes")
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
//         {loggedIn && <Route path="/offers" element={<OfferForm />} />}
//       </Routes>
//     </Router>
//   );
// }

// export default App;




















import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import OfferForm from './OfferForm';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
    console.log("yes")
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
        <Route path="/offers" element={loggedIn ? <OfferForm /> : <LoginForm onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
