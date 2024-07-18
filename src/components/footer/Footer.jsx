export const Footer = () => {
    return (
        <footer className="flex justify-center items-center mt-4 ">
            <div className="flex justify-center items-center w-[570px] h-20 bg-white rounded-xl text-center">
                <a href="/conditions-services" className="text-sm text-[#5F5F5F]">
                    Condiciones de servicio
                </a>
                <a href="/policies-services" className="text-sm text-[#5F5F5F]">Politicas de servicio</a>
                <p className="text-sm text-[#5F5F5F]">© 2024 <span className="text-[#B25CD6] font-semibold">Z</span> Corp.</p>
                <a href="/policies-cookies" className="text-sm text-[#5F5F5F]">Politicas de cookies</a>
                <a href="/policies-privated" className="text-sm text-[#5F5F5F]">Politicas de privacidad</a>
            </div>
        </footer>
    )
}

