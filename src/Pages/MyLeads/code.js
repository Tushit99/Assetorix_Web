export const handldatetransform = (val) => {
  let day = val.split(" ")[1];
  let month = val.split(" ")[2].slice(0, 3);
  let year = val.split(" ")[3];
  let time = val.split(" ")[5].slice(0, 5);
  let dur = val.split(" ")[6].toUpperCase(); 

  let newval = day + "/" + month + "/" + year + " (" + time + " " + dur + ")";
  return newval;
};
