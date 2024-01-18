import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Catalog } from '../pages/Catalog/Catalog';
import { Favorite } from '../pages/Favorite/Favorite';
import { Layout } from './Layout/Layout';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorite />} />
        </Route>
      </Routes>
      <GlobalStyle/>
      
    </>
  );
};