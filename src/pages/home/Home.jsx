import { GridFeed } from "../../components/grids/GridFeed.jsx"
import { GridHome } from "../../components/grids/GridHome.jsx"
import { GridTendencies } from "../../components/grids/GridTendencies.jsx"
import { GridUsers } from "../../components/grids/GridUsers.jsx"

export const Home = () => {
    return (
        <main className="flex justify-center items-center">
            <div className="flex flex-row w-[1146px] justify-center gap-4">
                <GridHome />
                <GridFeed />
                <div className="flex flex-col gap-4">
                    <GridUsers />
                    <GridTendencies />
                </div>
            </div>
        </main>
    )
}

