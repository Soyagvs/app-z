import { GoogleLogin } from "@react-oauth/google"

export const Login = () => {
    return (
        <main className="flex flex-row justify-center items-center bg-white">
            <section className="w-[663px]">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h2 className="text-6xl font-semibold w-[700px] text-center">
                        Inicia sesion en Z
                    </h2>
                    <p>Ingrese a su cuenta y comparte junto a la comunidad !</p>
                    <form
                        action=""
                        className="flex flex-col justify-center items-center border-t-white border w-[533px] h-[563px] gap-6 rounded-lg shadow-lg"
                    >

                        <input
                            type="text"
                            placeholder="Email"
                            className="border w-[472px] rounded-lg h-16 pl-5"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Ingrese su contraseña"
                            className="border w-[472px] rounded-lg h-16 pl-5"
                            required
                        />
                        <div className="flex justify-center items-center gap-3">
                            <input type="checkbox" name="" id="" required />
                            <p>Recordar sesion.</p>
                        </div>
                        <button
                            className="-mb-4 bg-[#6C3483] border w-[193px] rounded-md h-11 text-white font-bold flex justify-center items-center"
                        >Iniciar sesion</button>
                        <GoogleLogin />
                        <p>
                            Aun no tienes cuenta?
                            <span className="text-[#B25CD6]">
                                <a href="/registred">Crea una</a>
                            </span>
                        </p>
                    </form>
                </div>
            </section>
            <section className="bg-[#6C3483] w-full">
                <div
                    className="flex flex-col justify-center items-center min-h-screen gap-5"
                >
                    <svg
                        width="321"
                        height="343"
                        viewBox="0 0 321 343"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M293.025 341.009C128.67 341.009 33.8945 341.448 8.69922 342.327C7.82031 341.595 6.86816 340.35 5.84277 338.592C4.81738 336.834 3.86523 334.93 2.98633 332.879C2.10742 330.828 1.375 328.851 0.789062 326.946C0.349609 324.896 0.129883 323.284 0.129883 322.112C34.1143 274.065 67.8057 226.019 101.204 177.972C134.603 129.778 167.635 81.5117 200.301 33.1719C186.971 33.9043 174.886 35.0029 164.046 36.4678C153.206 37.9326 143.099 39.9834 133.724 42.6201C124.349 45.2568 115.413 48.5527 106.917 52.5078C98.5674 56.3164 90.0713 60.9307 81.4287 66.3506C72.7861 71.624 63.8506 77.7764 54.6221 84.8076C45.3936 91.8389 35.2861 99.8223 24.2998 108.758C13.8994 106.268 6.86816 101.067 3.20605 93.1572C29.1338 65.9111 47.4443 34.8564 58.1377 -0.00683594C77.0342 0.725586 95.9307 1.23828 114.827 1.53125C133.724 1.67773 152.767 1.75098 171.956 1.75098C191.146 1.75098 210.335 1.67773 229.524 1.53125C248.714 1.23828 268.123 0.725586 287.752 -0.00683594C297.566 3.21582 302.474 10.3936 302.474 21.5264C264.974 74.5537 229.524 125.091 196.126 173.138C162.728 221.038 131.453 266.521 102.303 309.588H164.705C182.869 309.588 199.129 306.878 213.484 301.458C227.84 295.892 240.364 288.348 251.058 278.826C261.751 269.305 270.687 258.099 277.864 245.208C285.188 232.317 290.975 218.475 295.223 203.68C306.941 206.17 315.364 210.711 320.491 217.303C319.905 219.5 319.026 222.649 317.854 226.751C316.829 230.853 315.584 235.467 314.119 240.594C312.801 245.721 311.336 251.214 309.725 257.073C308.113 262.786 306.575 268.426 305.11 273.992C303.646 279.412 302.327 284.612 301.155 289.593C299.983 294.573 298.592 301.019 296.98 308.929C295.369 316.692 294.051 327.386 293.025 341.009ZM189.974 332C223.958 332 249.739 323.064 267.317 305.193C285.042 287.322 298.885 258.318 308.846 218.182C306.355 216.131 303.499 214.886 300.276 214.446C296.321 228.655 291.121 241.546 284.676 253.118C278.23 264.544 269.734 275.384 259.188 285.638C248.787 295.892 235.53 303.948 219.417 309.808C203.45 315.667 185.359 318.597 165.145 318.597H60.7744C129.476 217.083 198.836 117.181 268.855 18.8896C268.855 14.0557 266.438 10.7598 261.604 9.00195C205.794 10.4668 140.242 10.4668 64.9492 9.00195C54.4023 41.9609 37.5566 70.5986 14.4121 94.915C16.3164 98.1377 19.3193 99.749 23.4209 99.749C48.9092 76.0186 68.4648 53.3867 82.0879 31.8535C86.1895 31.5605 104.28 30.1689 136.36 27.6787C168.587 25.042 195.76 23.5771 217.879 23.2842C150.643 123.187 81.0625 223.675 9.13867 324.749C9.13867 328.411 10.1641 331.268 12.2148 333.318C28.1816 332.439 87.4346 332 189.974 332Z"
                            fill="white"></path>
                    </svg>
                    <p className="text-3xl text-white w-auto">
                        Expresate libremente y comparte opiniones junto a la
                        comunidad de Z .
                    </p>
                </div>
            </section>
        </main>
    )
}


