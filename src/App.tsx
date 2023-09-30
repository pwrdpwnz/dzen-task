import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss'
import Header from "./components/Header.tsx";
import LeftAside from "./components/LeftAside.tsx";

const App:React.FC = () => {


  return (
    <>
        <Header />
        <LeftAside />
    </>
  )
}

export default App
