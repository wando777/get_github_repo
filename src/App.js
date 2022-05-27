import React from 'react';
import Routes from './routes';
import './style.css';

function App() {
  return (
    <Routes />
  );
}


// function App(props) {
//   const [ usuario, setUsuario] = useState('');

//   function handleSearch(){
//     axios.get(`https://api.github.com/users/${usuario}/repos`).then(res => console.log(res.data));
//   }

//   return (
//     <>
//       <input name="user" id="user" className="userInput" placeholder="User" value={usuario} onChange={e => setUsuario(e.target.value)}/>
//       <button type="button" onClick={handleSearch}>Search</button>
//     </>
//   );
// }

export default App;