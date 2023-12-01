import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>HOME</div>} />
        <Route path="constructor" element={<div>CONSTRUCTOR</div>} />
        <Route path="about" element={<div>ABOUT</div>} />
        <Route path="delivery" element={<div>DELIVERY</div>} />
        <Route path="cooperation" element={<div>COOPERATION</div>} />
        <Route path="questions" element={<div>QUESTIONS</div>} />
        <Route path="contacts" element={<div>CONTACTS</div>} />
      </Route>
    </Routes>
  );
}

export default App;
