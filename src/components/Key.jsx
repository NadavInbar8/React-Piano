const Key = ({ note, flat, pressedKey }) => {
  return (
    <div
      className={flat ? 'key flat flex-column' : 'key flex-column'}
      style={pressedKey ? { backgroundColor: '#00d8ff' } : {}}
    >
      <div className='key-note'>{note.toUpperCase()}</div>
    </div>
  );
};

export default Key;
