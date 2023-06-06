import { Route, Routes } from 'react-router-dom';
import Books from './routes/Books';
import Categories from './routes/Categories';
import NotMatch from './routes/NotMatch';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Books />} />
        <Route path="categories" element={<Categories />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
