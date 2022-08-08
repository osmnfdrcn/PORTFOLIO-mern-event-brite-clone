import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '../components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  ContactInfo,
  Followers,
  Followings,
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
          <Route path='followers' element={<Followers />} />
          <Route path='followings' element={<Followings />} />
        </Route>



        <Route path='*' element={<  HomePage />} />
      </Routes>
      <ToastContainer autoClose={3000} position='top-left' theme="colored" />
    </Router>
  )
}

export default AppRoutes