import "./Profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";



export default function Profile({user}){
    return(
       <> 
        <Topbar/>
         <div className="profile">
           <Sidebar/>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/40.jpg" alt="" />
                        <img className="profileUserImg" src="assets/personne/1.jpg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Safak Kocaoglu</h4>
                            <span className="profileInfoDesc">Hello my friend</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar profile/>
                    </div>
                </div> 
         </div> 
       </>
    )
}