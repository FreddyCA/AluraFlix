import GlobalStyle from "./style/reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import AddVideo from "./pages/AddVideo";
import NewCat from "./pages/NewCat";
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer";
import dataFull from "./data"
import { useState } from "react";

function App() {
  const dataFront = {
    12345: {
      id: "12345",
      titulo: "Como utilizar el Display block, inline, inline-block",
      linkImagen:
        "https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ",
      linkVideo: "https://www.youtube.com/watch?v=AG2QssLpQzI",
      descripcion:
        "En este video nuestra instructora Jeanmarie Quijada te explica que es la propiedad Display en CSS y algunos de sus valores, te mostrara en código el comportamiento del elemento DIV al utilizar algunos de los valores de la propiedad display como: block, inline y inline block.",
    },
    1247: {
      id: "1247",
      titulo: "Git y GitHub para Principiantes",
      linkImagen:
        "https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQmBBcCuR-s5yhB3HswZaBg0yCGQ",
      linkVideo: "https://www.youtube.com/watch?v=-LmFK6skG7s",
      descripcion:
        "Ve cómo funciona esta famosa herramienta de colaboración muy utilizada en el universo de la tecnología y tiene el control de las diferentes versiones de tus proyectos.",
    },
    98415: {
      id: "98415",
      titulo: "Equipo Front End",
      linkImagen:
        "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoKpoRlVQCz_RrJKrwuA9onAd7Rw",
      linkVideo: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      descripcion:
        "En este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.",
    },
    85412: {
      id: "85412",
      titulo: "¿Qué es JavaScript?",
      linkImagen:
        "https://i.ytimg.com/vi/GJfOSoaXk4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfCWN4npfWUBdrGczCKogB-Qvi1g",
      linkVideo: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      descripcion:
        "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.",
    },
    "12345c": {
      id: "12345c",
      titulo: "Como utilizar el Display block, inline, inline-block",
      linkImagen:
        "https://i.ytimg.com/vi/AG2QssLpQzI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAbUU2Mf8CAJ3sB0P3Lf5XVkbyYMQ",
      linkVideo: "https://www.youtube.com/watch?v=AG2QssLpQzI",
      descripcion:
        "En este video nuestra instructora Jeanmarie Quijada te explica que es la propiedad Display en CSS y algunos de sus valores, te mostrara en código el comportamiento del elemento DIV al utilizar algunos de los valores de la propiedad display como: block, inline y inline block.",
    },
    "1247c": {
      id: "1247c",
      titulo: "Git y GitHub para Principiantes",
      linkImagen:
        "https://i.ytimg.com/vi/-LmFK6skG7s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBQmBBcCuR-s5yhB3HswZaBg0yCGQ",
      linkVideo: "https://www.youtube.com/watch?v=-LmFK6skG7s",
      descripcion:
        "Ve cómo funciona esta famosa herramienta de colaboración muy utilizada en el universo de la tecnología y tiene el control de las diferentes versiones de tus proyectos.",
    },
    "98415c": {
      id: "98415c",
      titulo: "Equipo Front End",
      linkImagen:
        "https://i.ytimg.com/vi/rpvrLaBQwgg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDoKpoRlVQCz_RrJKrwuA9onAd7Rw",
      linkVideo: "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      descripcion:
        "En este video, Jeanmarie Quijada, instructora Front End en Alura Latam te explica qué hace el equipo de Front End.",
    },
    "85412c": {
      id: "85412c",
      titulo: "¿Qué es JavaScript?",
      linkImagen:
        "https://i.ytimg.com/vi/GJfOSoaXk4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAfCWN4npfWUBdrGczCKogB-Qvi1g",
      linkVideo: "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      descripcion:
        "JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.",
    },
  };

  const [data, setData] = useState(dataFull)


  const categorias = Object.keys(dataFull).reduce((categoria, key) => {
   categoria[key] = {
    value: dataFull[key].value,
    label: dataFull[key].label
   }
   return categoria
  }, {});
  console.log(categorias)

  return (
    <BrowserRouter>
    
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" 
        element={<Home dataFront={dataFront} data={data} />} />
        <Route
          path="/addvideo"
          element={<AddVideo categorias={categorias}/>}
        />
        <Route
          path="/newcat"
          element={<NewCat />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
