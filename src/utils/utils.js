export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
}

export const revisedRandId = () => {
  return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}