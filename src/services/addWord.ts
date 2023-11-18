const prependPublic = (line: string): string => {
  return `public ${line}`;
};

const prependPrivate = (line: string): string => {
  return `private ${line}`;
};

export default {
  prependPublic,
  prependPrivate,
};
