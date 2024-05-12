

import { useState } from "react"; 
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import ReactPlayer from "react-player";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song1 from '../../src/song/song1.mp3';
import song2 from '../../src/song/song2.mp3';
import song3 from '../../src/song/song3.mp3';
import song4 from '../../src/song/song4.mp3';
import song5 from '../../src/song/song5.mp3';
import song6 from '../../src/song/song6.mp3';
import song7 from '../../src/song/song7.mp3';


const Player = () => {
  const [songIndex, setSongIndex] = useState(0);

  let song8 = "https://www.youtube.com/watch?v=IHe7vGJHr9s";
  let song9 = "https://www.youtube.com/watch?v=Xrgk023l4lI&pp=ygUdZGV2b3BzIHR1dG9yaWFsIGZvciBiZWdpbm5lcnM%3D";
  let song10 = "https://www.youtube.com/watch?v=Me3ea4nUt0U&pp=ygUdZGV2b3BzIHR1dG9yaWFsIGZvciBiZWdpbm5lcnM%3D";
  // List of songs
  const songs = [
    song1, song2, song3,song4, song5, song6, song7, song8, song9, song10
  ];

  

  const isAudio = songs[songIndex].endsWith('.mp3') || songs[songIndex].endsWith('.ogg');
    
  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      {isAudio ?
        <div className="m-10">
          <AudioPlayer
            className="m-12"
            autoPlay
            showSkipControls={true}
            src={songs[songIndex]}
            onClickNext={() => setSongIndex((prevIndex) => (prevIndex + 1) % songs.length)}
            onClickPrevious={() => setSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1))}
          />
        </div>
        :
        <div className="bg-black">
          <ReactPlayer url={songs[songIndex]}/>
          <div style={{display:'flex', flexDirection:'row', columnGap:'25px', justifyContent:'center'}}>
            <GrChapterPrevious onClick={() => setSongIndex((prevIndex) => (prevIndex === 0 ? songs.length - 1 : prevIndex - 1))} size={25} color="white"/>
            <GrChapterNext onClick={() => setSongIndex((prevIndex) => (prevIndex + 1) % songs.length)} size={25} color="white"/>
          </div>
        </div>
      }
    </div>
  );
}

export default Player;
