import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Main from './components/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/count/Counter';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<Main/>}/>
      <Route path='counter' element={<Counter/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
