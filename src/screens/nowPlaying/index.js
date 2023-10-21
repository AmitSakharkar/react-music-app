import react, { useState } from "react";
import Buttons from "../../components/buttons";

const NowPlaying = () => {
    const [headerOptionButton, setHeaderOptionButton] = useState('list');
    const handleClick = (e) => {
        const {name} = e.target;
        let updatedName;
        if (name === 'list') {
            updatedName = 'close';
        } else if (name === 'close') {
            updatedName = 'list';
        } else {
            updatedName = 'list';
            console.log('name ===> ', name);
        }
        setHeaderOptionButton(updatedName);
    };
    const onTimeUpdate = () => {

    };
    return(
        <div className="now-playing-parent-div">
            <div className="list-control-container">
                <Buttons buttonFor={headerOptionButton} handleButtonClick={handleClick}/>
            </div>
            <div className="playing-song-container">
                <div className="song-art-display-container">
                    <audio id="myAudio" onTimeUpdate={onTimeUpdate} />
                    <img className="song-art-img" src="https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250" alt="song"/>            
                </div>
            </div>
            <div className="song-name-progress-container">
                <span className="song-name-label"></span>
                <span className="artist-name-label"></span>
            </div>
            <div className="controls-container">
                <Buttons buttonFor={'prev'} handleButtonClick={handleClick}/>
                <Buttons buttonFor={'play'} handleButtonClick={handleClick}/>
                <Buttons buttonFor={'next'} handleButtonClick={handleClick}/>
            </div>
        </div>
    );
}

export default NowPlaying;