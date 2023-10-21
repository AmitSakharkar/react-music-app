import react from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import '../styles/buttonStyles.css';

const Buttons = (props) => {
    let ButtonOption;
    let Styles;
    switch(props.buttonFor){
        case 'list':
            ButtonOption = <MoreHorizIcon />;
            Styles = 'songs-list-button';
            break;
        case 'close':
            ButtonOption = <HighlightOffIcon />;
            Styles = 'songs-list-button';
            break;
        case 'prev':
            ButtonOption = <SkipPreviousIcon />;
            Styles = 'songs-list-button';
            break;
        case 'play':
            ButtonOption = <PlayArrowIcon />;
            Styles = 'songs-list-button';
            break;
        case 'next':
            ButtonOption = <SkipNextIcon />;
            Styles = 'songs-list-button' ;
            break;   
        default:        
            ButtonOption = null;
            Styles = '';
            break;
    }
    return (
        <>
            {ButtonOption ?
                <IconButton onClick={props.handleButtonClick} className={Styles+' button-highlight'} name={props.buttonFor}>
                    {ButtonOption}
                </IconButton>
            :''}
        </>
    );
};

export default Buttons;