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

export const WordandNumber = (e) => {
  let inputValue = e;
  let cleanedValue = inputValue.replace(/[^a-zA-Z0-9,.\s]/g, ""); 
  cleanedValue = cleanedValue.replace(/\s+/g, " ");
  return cleanedValue;
};

export const NumberOnly = (e) => {  
  const cleanedValue = e.replace(/[^0-9.]/g, "");
  return cleanedValue;
};

export const AlphabetString = (e) => {
  let val = e;
  let clear = val.replace(/[^a-zA-Z, ]/g, "").replace(/ +/g, ' ');
  return clear;
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

export const convertToIndianNumberFormat = (input) => {
  // Remove commas from the input and check if it's a valid number
  const numberString = input.replace(/,/g, "");
  if (isNaN(numberString)) {
    return "Invalid Input";
  }

  // Convert the string back to a number
  const number = parseFloat(numberString);

  // Convert the number to the Indian numbering system format
  const groups = [];
  const numberParts = number.toFixed(2).toString().split(".");
  const integerPart = numberParts[0];
  const decimalPart = numberParts[1] || "00";

  for (let i = integerPart.length; i > 0; i -= 2) {
    groups.unshift(integerPart.slice(Math.max(0, i - 2), i));
  }

  const formattedNumber = groups.join(",") + "." + decimalPart;

  return formattedNumber;
};
