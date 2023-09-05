import { Route, Routes as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Protected } from "./components";
import { Login, NotFound, Users } from "./pages";
import { Profile } from "./layouts";
export const App = () => {
  const token = localStorage.getItem("token") ? true : false;

  return (
    <div className="App">
      <Router>
        <Route
          exact
          path="/profile"
          element={
            <Protected isLoggedIn={token}>
              <Profile />
            </Protected>
          }
        />

        <Route
          exact
          path="/users"
          element={
            <Protected isLoggedIn={token}>
              <Users />
            </Protected>
          }
        />

        <Route
          path="*"
          element={
            <Protected isLoggedIn={token}>
              <NotFound />
            </Protected>
          }
        />

        <Route path="/login" element={<Login />} />
      </Router>

      {/* TOASTIFY */}

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
