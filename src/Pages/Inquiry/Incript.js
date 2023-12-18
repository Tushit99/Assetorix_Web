export const NumericString = (e) => {
    let val = e;
    let clear = val.replace(/[^0-9]/g, "");
    return clear.slice(0, 10); // Limiting the length to 10 characters
  };