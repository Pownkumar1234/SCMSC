import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'

const App = () => {
    return (
        <div className="bg-[url('/bakcground----.jpg')] bg-cover bg-center min-h-screen">
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </div>
    )
}

export default App
