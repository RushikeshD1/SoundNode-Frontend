import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
// import Player from "./Player"

interface LayoutProps{
    children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className="h-[calc(100vh-80px)] flex flex-col">
        <div className="h-[90%] flex flex-1 overflow-hidden">
            <Sidebar />
            <div className="w-full m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w[75%] lg:ml-0">
                <Navbar />
                {children}
            </div>
        </div>
        
    </div>
  )
}

export default Layout