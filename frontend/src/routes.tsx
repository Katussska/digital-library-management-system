import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Register from './components/auth/Register';
import ProfileContainer from './components/profile/ProfileContainer';
import SearchedBooks from './components/main/SearchedBooks';
import BookDetail from './components/main/BookDetail';
import Login from './components/auth/Login.tsx';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<ProfileContainer />} />
      <Route path="/search" element={<SearchedBooks />} />
      <Route path="/book" element={<BookDetail />} />
    </Routes>
  </Router>
);

export default AppRoutes;