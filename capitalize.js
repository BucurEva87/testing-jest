module.exports = (string) => {
  if (typeof string !== 'string') throw new Error('Provided argument must be of type string');

  return `${string[0].toUpperCase()}${string.substr(1)}`;
};
