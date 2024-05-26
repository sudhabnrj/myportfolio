import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Error from './components/Error';
import Work from './components/Work';
import Projects from './components/Projects';
import { ThemeProvider } from './utils/ThemeContext';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Footer from './components/Footer';


const App = () =>{

    return(
        <ThemeProvider>
            <Header />
            <Outlet/>
            <Footer/>
        </ThemeProvider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/work',
                element: <Work/>
            },
            {
                path: '/project',
                element: <Projects/>
            }
        ],
        errorElement: <Error/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);