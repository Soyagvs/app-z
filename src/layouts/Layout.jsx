import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar'; // Asegúrate de que la ruta sea correcta

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};

