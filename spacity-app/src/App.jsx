import { Route, Routes } from "react-router-dom"
import { Layout, LandingPage, Courses, Services, Blogs, AboutUs, ContactUs, SignUp, ForgotPassword, SingleCourse } from './components';

function App() {

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/courses/:id' element={<SingleCourse />} />
            <Route path='/services' element={<Services />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/about_us' element={<AboutUs />} />
            <Route path='/contact_us' element={<ContactUs />} />
            {/* other pages */}
            <Route path='/signup' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
