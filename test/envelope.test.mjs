import test from 'node:test';
import assert from 'node:assert/strict';
import { validateEnvelope } from '../src/envelope.mjs';
test('synthetic envelope accepts only defined integer counts', () => {
  for (const count of [0, 1, 2]) {
    assert.equal(validateEnvelope({ kind: 'synthetic-note', count }), true);
  }
  for (const count of [-1, 3, 0.5, 1.5, '1', NaN, Infinity]) {
    assert.equal(validateEnvelope({ kind: 'synthetic-note', count }), false);
  }
  assert.equal(validateEnvelope({ kind: 'other', count: 1 }), false);
  assert.equal(validateEnvelope(null), false);
});
