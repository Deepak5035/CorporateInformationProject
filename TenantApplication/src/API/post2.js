import React, { useState } from 'react';
import { postLandlord } from "../services/landlordService";

const LandlordForm = () => {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");


    const postLandlordDetails = async () => {
        await postLandlord(userId, title, body)
    }

    return (
        <div>
            <h4>userId: </h4>
            <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
            <h4>title </h4>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <h4>body </h4>
            <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
            <br></br>
            <button type="button" onClick={postLandlordDetails} >Submit</button>
        </div>
    )
}

export default LandlordForm;