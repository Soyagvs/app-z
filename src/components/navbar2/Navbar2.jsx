import UserProfile from "../../assets/img/user.png"
export const Navbar2 = () => {
  return (
      <header className="h-16 w-full bg-white flex justify-center items-center">
          <img src={UserProfile} alt="" className="w-52 h-52 rounded-full bg-white absolute lg:mr-[910px] mb-36" />
          <div className="flex justify-center items-center gap-10">
              <div>
                  <a href="">
                      Ztuits
                  </a>
                  <p className="text-3xl font-bold text-[#5F5F5F]">11</p>
              </div>
              <div>
                  <a href="">
                      Follows
                  </a>
                  <p className="text-3xl font-bold text-[#5F5F5F]">11</p>
              </div>
              <div>
                  <a href="">
                      Followers
                  </a>
                  <p className="text-3xl font-bold text-[#5F5F5F]">11</p>
              </div>
              <div>
                  <a href="">
                      Likes
                  </a>
                  <p className="text-3xl font-bold text-[#5F5F5F]">11</p>
              </div>
          </div>
      </header>
  )
}