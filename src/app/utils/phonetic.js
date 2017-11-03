const random = (input) => {
  const chars = input.split('');
  return chars[Math.floor(Math.random() * chars.length)];
};

const phonetic = (length) => {
  let text = '';

  const start = Math.round(Math.random());

  for (let i = 0; i < length; i++) {
    text += (start === i % 2) ?
      random('aeiou') :
      random('bcdfghjklmnpqrstvwxyz');
  }

  return text;
};

export default phonetic;
