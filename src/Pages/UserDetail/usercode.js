export const firstWord = (val) => {
  const lowercaseWord = val.toLowerCase();
  return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
};
