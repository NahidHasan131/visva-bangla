import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Blog from './pages/BlogPage'
import BlogDetail from './pages/BlogDetail'
import Audio from './pages/Audio'
import Video from './pages/Video'
import Contact from './pages/Contact'
import AppLayout from './appLayout/AppLayout'
import Trainer from './pages/Trainer'
import Media from './pages/Media'
import Gallery from './pages/Gallery'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Login from './pages/Login'
import AdminLayout from './components/admin/AdminLayout'
import ProtectedRoute from './components/auth/ProtectedRoute'
import Dashboard from './pages/admin/Dashboard'
import BlogManager from './pages/admin/BlogManager'
import VideoManager from './pages/admin/VideoManager'
import AudioManager from './pages/admin/AudioManager'
import GalleryManager from './pages/admin/GalleryManager'
import TrainerManager from './pages/admin/TrainerManager'
import EventManager from './pages/admin/EventManager'
import Profile from './pages/admin/Profile'
import Users from './pages/admin/Users'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        { path: '/', element: <Home /> },
        {
          path: '/about',
          children: [
            { path: '/about', element: <About /> },
            { path: '/about/trainer', element: <Trainer /> },
          ]
        },
        {
          path: '/media',
          children: [
            { path: '/media', element: <Media/> },
            { path: '/media/audio', element: <Audio /> },
            { path: '/media/video', element: <Video /> },
            { path: '/media/gallery', element: <Gallery /> },
          ]
        },
        { path: '/blog', element: <Blog /> },
        { path: '/blog/:id', element: <BlogDetail /> },
        { path: '/contact', element: <Contact /> },
      ]
    },
    {
      path: '/auth',
      children: [
        { path: '/auth/signin', element: <Login/> },
        { path: '/auth/signup', element: <Signup /> },
      ]
    },
    { path: '*', element: <NotFound /> },
    {
      path: '/admin',
      element: <ProtectedRoute />,
      children: [
        {
          element: <AdminLayout />,
          children: [
            { index: true,              element: <Dashboard /> },
            { path: 'blog',             element: <BlogManager /> },
            { path: 'videos',           element: <VideoManager /> },
            { path: 'audio',            element: <AudioManager /> },
            { path: 'gallery',          element: <GalleryManager /> },
            { path: 'trainers',         element: <TrainerManager /> },
            { path: 'events',           element: <EventManager /> },
            { path: 'profile',          element: <Profile /> },
            { path: 'users',            element: <Users /> },
          ]
        }
      ]
    },
  ])

  return (
    <>
      <Toaster position="top-right" richColors />
      <RouterProvider router={router}/>
    </>
  )
}

export default App
