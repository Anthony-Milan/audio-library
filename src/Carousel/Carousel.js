import Card from '../Card/Card';
import {Slide} from 'pure-react-carousel';
const Carousel = () => {
    const albumArray = [
        {id:'01', band:"Scorpions", name:'Crazy World', release:'1990', tracks:'11',
        pictureSrc:'https://upload.wikimedia.org/wikipedia/en/f/f0/ScorpionsCrazyWorld.jpg'},
        {id:'02', band:"Pink Floyd", name:'Wish you were here', release:'1975', tracks:'5',
        pictureSrc:'https://cdn.europosters.eu/image/750/posters/pink-floyd-wish-you-were-here-i10124.jpg'},
        {id:'03', band:"Deep Purple", name:'Machine Head', release:'1972', tracks:'7',
        pictureSrc:'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Machine_Head_album_cover.jpg/220px-Machine_Head_album_cover.jpg'},
        {id:'04', band:"Black Sabbath", name:'Paranoid', release:'1970', tracks:'8',
        pictureSrc:'https://i0.wp.com/tuonelamagazine.com/wp-content/uploads/2020/08/9a4d3d7f6a8292ef7c313ab00e8262e5.jpg?fit=620%2C620&ssl=1'},
        {id:'05', band:"AC/DC", name:'Highway to Hell', release:'1979', tracks:'10',
        pictureSrc:'https://cdn.europosters.eu/image/750/posters/ac-dc-highway-to-hell-i3509.jpg'},
        {id:'06', band:"Guns N' roses", name:'Use Your Illusion II', release:'1991', tracks:'14',
        pictureSrc:'https://images-na.ssl-images-amazon.com/images/I/61UDzOLD6KL._SY355_.jpg'},
        {id:'07', band:"Lynyrd Skynyrd", name:"(Pronounced 'Lĕh-'nérd 'Skin-'nérd)", release:'1973', tracks:'8',
        pictureSrc:'https://images-na.ssl-images-amazon.com/images/I/813cxqBHguL._SX522_.jpg'},
        {id:'08', band:"Led Zeppelin", name:"Led Zeppelin IV", release:'1971', tracks:'8',
        pictureSrc:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Led_Zeppelin_-_Led_Zeppelin_IV.jpg/220px-Led_Zeppelin_-_Led_Zeppelin_IV.jpg'},
    ]
    return albumArray.map((album)=>{
        return(
        <Slide>
        <Card
        source={album.pictureSrc}
        band={album.band}
        name ={album.name}
        release={album.release}/>
        </Slide>
        );
            
    })
    
}
export default Carousel;