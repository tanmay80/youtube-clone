import Image from "next/image";
import { VideoGrid } from "./components/VideoGrid";
import { AppBar } from "./components/AppBar/AppBar";
import { SideBar } from "./components/SideBar/SideBar";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-1">
          <AppBar></AppBar>
      </div>

      <div className="flex flex-1"> 
        <div className=" "> 
            <SideBar></SideBar>
        </div>

        <div className=" flex-1"> 
            <VideoGrid></VideoGrid>
        </div>
      </div>
      
    </div>
  );
}
