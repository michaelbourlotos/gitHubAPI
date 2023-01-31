import React from 'react';
import './App.css';
import axios from 'axios';


function App() {
  const [hyperion, setHyperion] = React.useState([]);
  const [ariel, setAriel] = React.useState([]);
  const [titan, setTitan] = React.useState([]);

  React.useEffect(() => {
    axios.get('/hyperion')
      .then(response => {
        const filteredIssues = response.data.map(issue => {
          return {
            title: issue.title,
            description: issue.body,
            link: issue.html_url
          }
        });
        setHyperion(filteredIssues);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    axios.get('/ariel')
      .then(response => {
        const filteredIssues = response.data.map(issue => {
          return {
            title: issue.title,
            description: issue.body,
            link: issue.html_url
          }
        });
        setAriel(filteredIssues);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  React.useEffect(() => {
    axios.get('/titan')
      .then(response => {
        const filteredIssues = response.data.map(issue => {
          return {
            title: issue.title,
            description: issue.body,
            link: issue.html_url
          }
        });
        setTitan(filteredIssues);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);



  return (
    <div className="App">
      <h2>Resolved Issues August 2022 Through January 2023</h2>
      <ol>
      <h3>Hyperion</h3>
      {hyperion.map(issue => (
        <li key={issue.title}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <a href={issue.link}>{issue.link}</a>
        </li>
      ))}
      <h3>Ariel</h3>
      {ariel.map(issue => (
        <li key={issue.title}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <a href={issue.link}>{issue.link}</a>
        </li>
      ))}
      <h3>Titan</h3>
      {titan.map(issue => (
        <li key={issue.title}>
          <h3>{issue.title}</h3>
          <p>{issue.description}</p>
          <a href={issue.link}>{issue.link}</a>
        </li>
      ))}
      </ol>
    </div>
  );
}

export default App;
