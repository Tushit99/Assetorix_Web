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

export const Emailhandle = (e) => {  
  const inputString = e;   
  console.log(inputString);   
  const result = inputString.replace(/[^a-zA-Z0-9. ]/g, "").replace(/ +/g, " ");   
  return result.trim();  
};

export const AlphabetString = (e) => {
  let val = e;
  let clear = val.replace(/[^a-zA-Z,\s]/g, "");
  return clear;
}; 

export const WordandNumber = (e) => {
  let inputValue = e;
  let cleanedValue = inputValue.replace(/[^a-zA-Z0-9,.\s]/g, ""); 
  cleanedValue = cleanedValue.replace(/\s+/g, " ");
  return cleanedValue;
};

export const IndianDateConverter = (inputElement) => {
  const options = {
    timeZone: "Asia/Kolkata",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // Create a Date object from the input value
  const inputDate = new Date(inputElement);

  // Check if the input date is valid
  if (!isNaN(inputDate.getTime())) {
    // Format the input date in Indian format
    const indianFormattedDate = inputDate.toLocaleDateString("en-IN", options);
    return indianFormattedDate;
  } else {
    return "Invalid date";
  }
};
