import Portada from "../../assets/img/portada.svg"
import { Navbar2 } from "../../components/navbar2/Navbar2"
import { GridProfile } from "../../components/grids/GridProfile"
import { FeedProfile } from "../../components/feeds/FeedProfile"
import { GridUsers } from "../../components/grids/GridUsers"
import { GridTendencies } from "../../components/grids/GridTendencies"

export const Profile = () => {
    return (
        <main className="flex flex-col justify-center items-center">
            <img src={Portada} alt="" className="w-full" />
            <Navbar2 />
            <div className="flex gap-4">
                <div className="flex gap-4">
                    <GridProfile />
                    <FeedProfile />
                </div>
                <div className="flex flex-col gap-4">
                    <GridUsers />
                    <GridTendencies />
                </div>
            </div>
        </main>
    )
}

