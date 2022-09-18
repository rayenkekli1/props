import profileData from "../Data";
import Profile from "./profile";
import './../App.css';
import HandleName from "./handleName";

function ProfileListing(){
    return(
        <div className="box1">
            
            {
                profileData.map((eachone) =>  <Profile image={'https://cdn.discordapp.com/attachments/949794011936350288/1016011636689092729/IMG_20220901_142217.jpg'} data = {eachone}/>)
                
            }
            

        </div>
    );
}
export default ProfileListing
