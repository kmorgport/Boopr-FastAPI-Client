import React from 'react';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';


const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Container maxWdith="lg">
        <Routes>
          <Route path="/dogs" element={
            <Home/>
          }/>
          <Route path="*" element={<Navigate replace to="/dogs"/>}/>
        </Routes>
      </Container>
    </BrowserRouter>
  )
}