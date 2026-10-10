export function validateEnvelope(value) {
  if (value === null || typeof value !== 'object') return false;
  return value.kind === 'synthetic-note'
    && Number.isInteger(value.count)
    && value.count >= 0
    && value.count <= 2;
}
