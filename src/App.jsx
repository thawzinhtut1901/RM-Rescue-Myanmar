import React from 'react'
import { HomeRouter } from './routers'
import { Route, Routes, useRoutes } from 'react-router'

const App = () => {
  const HomeRouting = useRoutes(HomeRouter);
  return (
    <div>
      <Routes>
        <Route path='/*' element={HomeRouting}/>
      </Routes>
    </div>
  );
};

export default App;
