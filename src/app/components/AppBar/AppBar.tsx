import { SearchBar } from "./SerchBar"

export const AppBar =()=>{
    return <div className="grid grid-cols-3 pt-1">
        <div className="text-md inline-flex items-center pl-6">
            Youtube
        </div>

        <div className="p-2 justify-between">
            <SearchBar></SearchBar>
        </div>
        
        <div className="text-md inline-flex items-center justify-end pr-6">
            SignIn
        </div>
    </div>
}