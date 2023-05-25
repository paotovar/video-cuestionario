export function formatSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const paddedSeconds = String(seconds % 60).padStart(2, '0');
  return `${minutes}:${paddedSeconds}`;
}

