import Share from "../Share/Share";
import "./Feed.css";
import Post from "../Post/Post";
import {Posts} from "../../dummyData";

export default function Feed(){
    return(
        <div className="feed">
           <div className="feedWrapper">
              <Share/>
              {Posts.map(p=>(

                <Post Key={p.id} post={p}/>
              ))}
            
              
           </div>
        </div>
    )
}