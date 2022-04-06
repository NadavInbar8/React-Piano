import { useEffect, useState } from 'react';
import Key from './Key';
import { NOTES, VALID_KEYS, NOTE_TO_KEY, KEY_TO_NOTE } from './consts.js';
import a from '../assets/notes/A.mp3';
import af from '../assets/notes/Af.mp3';
import b from '../assets/notes/B.mp3';
import bf from '../assets/notes/Bf.mp3';
import c from '../assets/notes/C.mp3';
import d from '../assets/notes/D.mp3';
import df from '../assets/notes/Df.mp3';
import e from '../assets/notes/E.mp3';
import ef from '../assets/notes/Ef.mp3';
import f from '../assets/notes/F.mp3';
import g from '../assets/notes/G.mp3';
import gf from '../assets/notes/Gf.mp3';

const sounds = {
  a: a,
  af: af,
  b: b,
  bf: bf,
  c: c,
  d: d,
  df: df,
  e: e,
  ef: ef,
  f: f,
  g: g,
  gf: gf,
};

const Piano = () => {
  const [pressedKeys, setPressedKeys] = useState([]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
  });

  const playNote = (note) => {
    if (note) {
      // const noteU = note.toUpperCase();
      const noteAudio = new Audio(sounds[note]);
      noteAudio.play();
    }
  };

  const handleKeyUp = (event) => {
    const key = event.key;
    setPressedKeys((prevState) => {
      return prevState.filter((note) => note !== key);
    });
  };

  const handleKeyDown = (event) => {
    if (event.repeat) {
      return;
    }
    const key = event.key;
    const updatedPressedKeys = [...pressedKeys];
    if (!pressedKeys.includes(key) && VALID_KEYS.includes(key)) {
      updatedPressedKeys.push(key);
    }
    setPressedKeys((prevState) => [...prevState, ...updatedPressedKeys]);
    playNote(KEY_TO_NOTE[key]);
  };

  return (
    <div className='piano flex'>
      {NOTES.map((note, idx) => {
        if (note.length > 1) {
          return (
            <Key
              key={idx}
              note={note}
              flat={true}
              pressedKey={pressedKeys.includes(NOTE_TO_KEY[note])}
            />
          );
        } else
          return (
            <Key
              key={idx}
              note={note}
              flat={false}
              pressedKey={pressedKeys.includes(NOTE_TO_KEY[note])}
            />
          );
      })}
      <div>
        {NOTES.map((note, idx) => {
          return (
            <audio
              id={note}
              key={idx}
              src={`../assets/notes/${note.toUpperCase()}.mp3`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Piano;
