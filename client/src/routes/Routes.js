import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Warning } from '../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';


import {
  ContactInfo,
  FollowersPage,
  FollowingsPage,
  PasswordChange,
  UserSharedLayout
} from '../pages/UserDashboard'

import {
  HomePage,
  EventsPage,
  SingleEventPage,
  UserPage,
  ErrorPage,
  LoginPage,
  VerifyUser,
  ProtectedRoute
} from '../pages';

const AppRoutes = () => {
  const { user, } = useSelector((store) => store.user);
  const userVerified = user?.status === 'Active'

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/events/:id' element={<SingleEventPage />} />
        <Route path='/users/verify/:verificationCode' element={<VerifyUser />} />

        <Route
          path='/me'
          element={
            <ProtectedRoute>
              <UserSharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<ContactInfo />} />
          <Route path='password' element={<PasswordChange />} />
          <Route path='followers' element={<FollowersPage />} />
          <Route path='followings' element={<FollowingsPage />} />
        </Route>

        <Route path='*' element={<  HomePage />} />
      </Routes>
      {
        user && !userVerified && <Warning text={"You should activete your account in order to use app unlimited!"} />
      }
      <ToastContainer autoClose={3000} position='top-left' theme="colored" pauseOnFocusLoss={false} closeOnClick pauseOnHover={false} />
    </Router>
  )
}

export default AppRoutes