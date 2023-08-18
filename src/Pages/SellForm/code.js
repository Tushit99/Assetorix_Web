export const CleanInputText = (e) => {
  let inputValue = e;
  let cleanedValue = inputValue.replace(/\s+/g, " ");
  return cleanedValue;
};
 

