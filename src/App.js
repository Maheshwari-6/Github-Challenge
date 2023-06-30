import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
   const [userinfo, setUserinfo] = useState({});
   const [repoinfo, setRepoinfo] = useState([]);
   const clientId = '6ad959f05f1e0805263c';
   const clientSecret = '067ea852dcae0780a459d6533a018143c8b95983'
  
  useEffect(() => {
    axios.get(`https://api.github.com/users/maheshwari-6?client_id=${clientId}&client_secret=${clientSecret}&sort=created`)
    .then(result => {
      setUserinfo(result.data)
    })
    .catch(err => {
      console.log(err);
    })

    axios.get(`https://api.github.com/users/maheshwari-6/repos?client_id=${clientId}&client_secret=${clientSecret}&sort=created&sort=created`)
    .then(result => {
      setRepoinfo(result.data)
    })
    .catch(err => {
      console.log(err);
    })
  }, [])
  
  return (
    <div className="App">
      <h3>User Details : </h3>
      <div>
      <img src= {userinfo.avatar_url} alt={userinfo.login} />
      </div>
      <div>Name : {userinfo.name}</div>
      <div>Id : {userinfo.id}</div>
      <div>Email : {userinfo.email}</div>
      <div>Location : {userinfo.location}</div>
      <div>{repoinfo.name}</div>
      <div>


      <h3>User repositories : </h3>
        <ol>
          {
            repoinfo && repoinfo.map(repo => {
              return(
                <li key={repo.id} >
                  {repo.name}
                </li>
              )
            })
          }
        </ol>
      </div>
    </div>
  );
}

export default App;