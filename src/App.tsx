import './App.css'
import { useState } from 'react';
import Navbar from './components/navbar';
import { Provider } from './components/ui/provider';
import FlexLayout from './components/flex-layout';
import GridLayout from './components/grid-layout';

function App() {
  const [page, setPage] = useState("grid");

  return (
    <Provider enableSystem={false} defaultTheme="light">
      <Navbar setPage={setPage} />
      {page === "grid" && <GridLayout />}
      {page === "flex" && <FlexLayout/>}
    </Provider>
  );
}

export default App