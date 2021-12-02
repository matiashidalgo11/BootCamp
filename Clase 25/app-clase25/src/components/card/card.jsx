import React from "react";

export default function Card (props){

    let profile = props.data;

    return(
        
        <div>
            <img src= {profile.avatar_url} alt="" />
           <ul>
                <li> <b>ID:</b> {profile.id}</li>
                <li> <b>Username:</b> {profile.login}</li>
                <li> <b>Followers:</b> {profile.followers}</li>
                <li> <b>Following:</b> {profile.following}</li>
                <li> <b>Created:</b> {profile.created_at}</li>
                <li> <b>Update:</b> {profile.updated_at}</li>
            </ul> 
        </div>
        
    );
};