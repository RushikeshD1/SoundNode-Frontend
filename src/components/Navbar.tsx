import { useNavigate } from "react-router-dom";
import { useUserData } from "../context/userContext";

const Navbar = () => {
  const navigate = useNavigate();
  const {isAuth, logoutUser, user} = useUserData();

  const logoutUserHandler = () => {
    logoutUser();
  }

  return (
    <>
    <div className="w-full flex justify-between items-center font-semibold">
      <div className="flex items-center gap-2">
        <img
          src="/sou.png"
          className="w-25 rounded-2xl cursor-pointer"
          onClick={() => navigate("/")}
          alt="logo"
        />
        {/* <img
          src="/right_arrow.png"
          className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
          onClick={() => navigate(-1)}
          alt="right arrow image"
        /> */}
      </div>
      <div className="flex items-center gap-4">
        {/* <p className="px-4 py-1 bg-white text-black text-[15px] rounded-full md:block hidden cursor-pointer">
          Explore Premium
        </p>
        <p className="px-4 py-1 bg-white text-black text-[15px] rounded-full md:block hidden cursor-pointer">
          Install App
        </p> */}
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer md:block hidden">
        All
      </p>
      <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
        Music
      </p>
      <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hidden md:block">
        Podcast
      </p>
      <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer md:hidden" onClick={() => navigate("/playlist")}>
        Playlist
      </p>
        {isAuth ?<p onClick={logoutUserHandler} className="px-4 py-1 bg-green-600 text-white text-[15px] rounded-full cursor-pointer hover:bg-green-500">
          Logout
        </p> : <p onClick={() => navigate("/login")} className="px-4 py-1 bg-green-600 hover:bg-green-500 text-white text-[15px] rounded-full cursor-pointer">
          Login
        </p>}
      </div>
    </div>
    <div className="flex md:hidden ">
      {user && user.role === "admin" && <button onClick={() => navigate("/admin/dashboard")} className="ml-4 px-4 py-1.5 bg-white text-black text-[15px] rounded-full mt-4 cursor-pointer">
            Admin DashBoard
      </button>}
    </div>
  </>
  )
};

export default Navbar;
