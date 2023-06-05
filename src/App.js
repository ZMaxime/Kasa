import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './page/Main/Main';
import Error from './page/Error/Error';
import About from './page/About/About';
import Presentation from './page/Presentation/Presentation';

// Création des différentes routes pour le site

function App() {
	return (
	  <BrowserRouter>
		<Routes>
		  <Route path="/" element={<Navigate to="/Kasa" />} />			
		  <Route path="/Kasa" element={<Main />} />
		  <Route path="/Presentation/:id" element={<Presentation />} />
		  <Route path="/About" element={<About />} />
		  <Route path="*" element={<Error />} />
		</Routes>
	  </BrowserRouter>
	);
  }
  
  export default App;

