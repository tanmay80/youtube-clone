import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"Lightning Macquine", 
    image:"image.jpg",
    channelName:"Good Videos",
    views:"113M",
    uploadTime:"13 days ago"
},{
    title:"Lightning Macquine", 
    image:"image.jpg",
    channelName:"Good Videos",
    views:"113M",
    uploadTime:"13 days ago"
},{
    title:"Lightning Macquine", 
    image:"image.jpg",
    channelName:"Good Videos",
    views:"113M",
    uploadTime:"13 days ago"
},{
    title:"Lightning Macquine", 
    image:"image.jpg",
    channelName:"Good Videos",
    views:"113M",
    uploadTime:"13 days ago"
},]

export function VideoGrid(){
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=> <div>
            <VideoCard  title={video.title} 
                  image={video.image}
                  channelName={video.channelName}
                  views={video.views}
                  uploadTime={video.uploadTime}
            ></VideoCard>
        </div>)}
    </div>
}