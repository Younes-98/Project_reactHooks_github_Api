import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import Acteurs from "./pages/Acteurs";
import BreakProvider from './contexte/BreakContexte';
import ActeursDetail from './pages/ActeursDetail';
import NotFound from './pages/NotFound';


function App() {
  return (
    <BreakProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/acteurs' element={<Acteurs />}/>
          <Route path='/acteurs/:login' element={<ActeursDetail />}/>
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </BreakProvider>
    
  );
}

export default App;
