import React, {useState, useEffect} from 'react'
import axios from "../../services";
const AlbumDetails =({id})=> {
    const [fullAlbum, setFullAlbum]=useState();
    useEffect(() => {
        if(id){
        axios.get("https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/" + id)
        .then((response)=>console.log(response))}
    return (
        <div>
            <p>l</p>
        </div>
    )
})
}

export default AlbumDetails;
