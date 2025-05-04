
import "./Rightbar.css";
import { Users } from "../../dummyData";
import Online from "../Online/Online"; 


export default function Rightebar({profile}){

    const HomeRightbar = () => {
        return(
            <>
            <div className="birthdayCountainer">
                    <img className="birthdayImg" src="/assets/giftt.png" alt="" />
                    <span className="birthdayText">
                        <strong >Pola Foster</strong> and <b>7 other friends</b> have a birthday today.

                    </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Oneline Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=> (
                        <Online key={u.id} user={u} />

                    ))}
                </ul>
            </>
        );
    };
    const ProfileRightbar =()=>{ 
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue"> Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/personne/3.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">John Carter</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/12.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Kristan Thomas</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/PP3.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Charlotte Abigai</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp2.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Janell Durden</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp7.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Travis Bennet</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp8.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Gary Duty</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp10.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Liam Benjamin</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp5.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Thomas Holden</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp4.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Dora Hawks</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/personne/pp1.jpg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Alexandra Shrum</span>
                </div>
                
            </div>
            </>
        )
     }
    return(
        <div className="rightbar">
            <div className="rightbarWrapper">
              {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}