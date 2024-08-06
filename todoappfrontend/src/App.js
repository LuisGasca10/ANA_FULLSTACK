import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Typography } from '@mui/material';
import './App.css';
import TodoList from './components/todoList';
import TodoItem from './components/todoItem';

function App() {
  const [list, setList] = useState([]);


  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/tareas/');
        console.log('Tareas:', response.data);
      } catch (error) {
        console.error('Error fetching the tareas:', error);
      }
    };

    fetchTareas();
  }, []);



  const handleAddItem = addItem => {
    setList([...list, addItem]);
  };
  return (
    <div className="App">
      <Container
        sx={{
          bgcolor: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '100%F'
        }}  >
        <Typography variant='h4'>TODO List</Typography>
        <TodoList handleAddItem={handleAddItem}></TodoList>
        <TodoItem list={list} setList={setList}></TodoItem>
      </Container>
    </div>
  );
}

export default App;
