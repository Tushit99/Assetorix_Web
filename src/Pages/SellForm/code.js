export const CleanInputText = (e) => {
  let inputValue = e;
  let cleanedValue = inputValue.replace(/\s+/g, " ");
  return cleanedValue;
};

export const NumericString = (e) => {
  let val = e;
  let clear = val.replace(/[^0-9]/g, "");
  return clear;
};

export const AlphabetString = (e) => {
  let val = e;
  let clear = val.replace(/[^a-zA-Z,\s]/g, "");
  return clear;
};
