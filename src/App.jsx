import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import ArticleDetails from './components/ArticleDetails';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'home', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'articledetails', element: <ArticleDetails /> },
    ],
  },
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={Routes}></RouterProvider>
    </div>
  )
}
