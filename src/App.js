import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home';
import Navigation from './routes/navigation/navigation';
import Authentication from './routes/authentication/authentication';

const Shop = () => {
  return (
    <Fragment>
      <h1>I am Shop Component</h1>
    </Fragment>
  );
}

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
