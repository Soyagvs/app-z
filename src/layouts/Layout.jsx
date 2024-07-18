import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/Navbar'; // Asegúrate de que la ruta sea correcta
import { Footer } from '../components/footer/Footer';

export const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

