import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Loader from "./shared/components/Loader/Loader";
import NotFound from "./shared/components/PageNotFound/NotFound";
import Layout from "./pages/Layout/Layout";
import AuthPage from "./pages/AuthPage/AuthPage";

import { currentUser } from "./redux/auth/operations";
import { selectIsRefreshing, selectToken } from "./redux/auth/authSelectors";

import { PublicRoute } from "./PublicRoute";

import { ScreenPage } from "./pages/ScreenPage/ScreenPage";
import { PrivateRoute } from "./PrivateRoute";
import TrainingPage from "./pages/TrainingPage/TrainingPage";

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthenticated = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                path="/:id"
                element={
                  <PublicRoute restricted>
                    <AuthPage />
                  </PublicRoute>
                }
              />
              <Route
                path="/home/:id"
                element={<PrivateRoute>{<ScreenPage />}</PrivateRoute>}
              />
              <Route
                path="/training"
                element={<PrivateRoute>{<TrainingPage />}</PrivateRoute>}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default App;
