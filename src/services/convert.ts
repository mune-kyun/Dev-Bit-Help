const camelToKebab = (line: string): string => {
  return line.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
};

const kebabToCamel = (line: string): string => {
  return line
    .split("-")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

export default { camelToKebab, kebabToCamel };
