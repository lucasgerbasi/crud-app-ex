import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import EditLivros from '../pages/EditLivros';
import AddLivros from '../pages/addLivros';
import Home from '../pages/home';

function App() {
 return (
 <Router>
 <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/add" element={<AddLivros />} />
 <Route path="/edit/:id" element={<EditLivros/>} />
 </Routes>
 </Router>
 );
}
export default App;