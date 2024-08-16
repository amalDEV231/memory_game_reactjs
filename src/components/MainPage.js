import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function MainPage({ setNumCards }) {
  const [noCards, setNum] = useState(20);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('asdf'); 
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setNumCards(noCards);
  }, [noCards, setNumCards]);

  const handleNumCardsChange = (e) => {
    setNum(parseInt(e.target.value));
  };

  const handleStartGame = () => {
    navigate('/game');
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Memory Game</h1>
        <div style={styles.selectorContainer}>
          <label style={styles.label}>
            Number of Cards: 
            <select value={noCards} onChange={handleNumCardsChange} style={styles.select}>
              <option value={20}>20</option>
              <option value={36}>36</option>
              <option value={50}>50</option>
            </select>
          </label>
        </div>
        <button onClick={handleStartGame} style={styles.button}>Start Game</button>
        <div style={styles.scoresContainer}>
          <h2 style={styles.subtitle}>Scores List</h2>
          <ul style={styles.list}>
            {data.map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: '20px',
    backgroundImage:'url("/images/background.jpg")'
  },
  content: {
    textAlign: 'center',
    backgroundColor: '#f4deb9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    maxWidth: '500px',
    width: '100%',
  },
  title: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  selectorContainer: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    color: '#555',
  },
  select: {
    marginLeft: '10px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ddd',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#917457',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  scoresContainer: {
    marginTop: '20px',
  },
  subtitle: {
    fontSize: '1.5rem',
    color: '#333',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
    margin: '0',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
  scoresContainer: {
    marginTop: '20px',
    maxHeight: '200px', // Set a maximum height for the scrollable area
    overflowY: 'auto', // Enable vertical scrolling
   // border: '1px solid #ddd', // Optional: add a border for better visibility
    padding: '10px', // Optional: add padding inside the scrollable area
    borderRadius: '4px', // Optional: add border radius
  },
};

export default MainPage;
