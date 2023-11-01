export function cleanUpParams(params = {}, excludeEmptyValue = true) {
  const result = {};

  Object.entries(params).forEach((param) => {
    if (excludeEmptyValue) {
      if (param[1]) result[param[0]] = param[1];
    } else {
      result[param[0]] = param[1];
    }
  });

  return result;
}

export function paramsToString(
  params = {},
  excludeEmptyValue = true,
  sort = true
) {
  const cleanParams = cleanUpParams(params, excludeEmptyValue);
  const paramsArray = [];

  Object.entries(cleanParams).forEach((param) => {
    paramsArray.push(`${param[0]}=${param[1]}`);
  });

  if (sort) paramsArray.sort();

  return paramsArray.length ? `?${paramsArray.join("&")}` : "";
}

export function capitalizeFirstLetter(inputString) {
  // Check if the input is a valid string
  if (typeof inputString !== "string" || inputString.length === 0) {
    return inputString; // Return the input as is if it's not a valid string
  }

  // Capitalize the first letter and concatenate it with the rest of the string
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}
