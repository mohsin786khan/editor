import React, { useState } from 'react';
import { render } from 'react-dom';
import Picker, { SKIN_TONE_MEDIUM_DARK } from 'emoji-picker-react';

function Emoji() {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }

    return (
        <div>
         <h1 style={{textAlign: 'center'}}> emoji picker</h1>
        <div style={{textAlign: 'center',marginLeft:'810px'}}>
            <Picker  onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK}/>
            { chosenEmoji && <EmojiData chosenEmoji={chosenEmoji}/>}
        </div>             
        </div>
    )
}


const EmojiData = ({chosenEmoji}) => (
    <div style={{textAlign: 'center',marginRight: '810px'}}>
      {/* <br></br>
      <br></br> */}
      <hr></hr>
      <strong>Names:</strong> {chosenEmoji.names.join(', ')}<br/>
      <strong>Symbol:</strong> {chosenEmoji.emoji}<br/>
    </div>
  );

export default Emoji;