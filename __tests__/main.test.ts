import { score } from '../src/main';

describe('bowling', () => {
  test('a gutter game should score 0', () => {
    expect(score([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])).toBe(0);
  });
});
