import User from "../../assets/img/user.png"
export const GridHome = () => {
  return (
      <article
          className="w-[240px] h-[730px] bg-white flex flex-col justify-center items-center rounded-xl mt-4"
      >
          <div className="flex flex-col ">
              <img src={User} alt="Imagen de vista perfil" className="w-28 h-28 rounded-full bg-black mb-4"/>
              <h2 className="text-base font-semibold">Agustin Martinez</h2>
              <p className="text-sm">@soyagvs</p>
          </div>
          <div
              className="flex flex-col gap-5 text-2xl font-semibold pb-[300px] justify-center items-start pt-20"
          >
              <a href="/profile">Perfil</a>
              <a href="/configurations">Configuraciones</a>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
              <a href="/" className="text-[#B25CD6] text-1xl">Cerrar sesion</a>
              <div className="border border-black w-52"></div>
          </div>
      </article>

  )
}