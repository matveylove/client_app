import Container from "@mui/material/Container";

import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import { Header } from "./components";

import { PATHS } from "./paths";
import { useEffect } from "react";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/auth";

function App() {
  const dispath = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  // useEffect(() => {
  //   dispath(fetchAuthMe())
  // }, [])

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path={PATHS.home.path} element={PATHS.home.element} />
          <Route path={PATHS.register.path} element={PATHS.register.element} />
          <Route path={PATHS.login.path} element={PATHS.login.element} />
          <Route path={PATHS.fullPost.path} element={PATHS.fullPost.element} />
          <Route path={PATHS.addPost.path} element={PATHS.addPost.element} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
