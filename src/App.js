import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchAllMovies } from "./Redux/actions/movieActions";
import FilmLog from "./pages/FilmLog";
import Review from "./pages/Review";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  max-width: 900px;
  box-sizing: border-box;
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    margin-top: 0;
  }
`;

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllMovies());
  }, [dispatch]);


  return (
    <>
      <NavBar />
      <AppContainer>
        <Routes>
          <Route exact path="/" element={<FilmLog />} />
          <Route exact path="/review" element={<Review />} />
        </Routes>
      </AppContainer>
    </>
  );
}

export default App;
