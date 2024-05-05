
export function VideoCard(props:any){
    return <div className="p-2 cursor-pointer">
        <img src={props.image} className="rounded-xl" alt="" />
        <div className="grid grid-cols-12 pt-4">
            <div className="col-span-1">
                <img className="rounded-full w-12 h-12" src={props.image} alt="" />
            </div>
            
            <div className="col-span-11 px-4">
                <div className="col-span-11">
                    {props.title}
                </div>

                <div className="col-span-11 text-gray-400">
                    {props.channelName}
                </div>

                <div className="col-span-11 text-gray-400">
                    {props.views} | {props.uploadTime}
                </div>
            </div>
            
            
        </div>
    </div>
}