function formatDescription(text) {
  const trimmed = text.trim();
  if (!trimmed) return "";

  return trimmed.at(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

export default formatDescription;
