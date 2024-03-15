import { Route, Routes } from "react-router-dom";
import Login from "../modules/login/Login";
import Profile from "../modules/profile/profile/Profile";
import CreateProfile from "../modules/profile/create-profile/CreateProfile";
import { EditProfile } from "../modules/profile/edit-profile/EditProfile";
import { DeleteProfile } from "../modules/profile/delete-profile/DeleteProfile";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Backstage } from "../modules/backstage";
import { Home } from "../modules/home";
import { Series } from "../modules/series/Series";
import { Movies } from "../modules/movies/Movies";
import { KidsFamily } from "../modules/kids&Family/KidsFamily";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute role="user">
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/series"
        element={
          <ProtectedRoute role="user">
            <Series />
          </ProtectedRoute>
        }
      />
      <Route
        path="/movies"
        element={
          <ProtectedRoute role="user">
            <Movies />
          </ProtectedRoute>
        }
      />
      <Route
        path="/kids&family"
        element={
          <ProtectedRoute role="user">
            <KidsFamily />
          </ProtectedRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute role="user">
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-profile"
        element={
          <ProtectedRoute role="user">
            <CreateProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/edit-profile/:id"
        element={
          <ProtectedRoute role="user">
            <EditProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/delete-profile/:id"
        element={
          <ProtectedRoute role="user">
            <DeleteProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/backstage"
        element={
          <ProtectedRoute role="admin">
            <Backstage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
