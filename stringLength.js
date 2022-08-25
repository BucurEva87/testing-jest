module.exports = (string) => {
  const len = string.length;

  if (len < 1 || len > 10) throw new Error("String's characters number over or under limit");

  return len;
};
