import twoRandomNumbers from './twoRandomNumbers';

it('Testing function twoRandomNumbers', () => {
    const min = 10;
    const max = 100;
    const randomNumbers = twoRandomNumbers(min, max);
    expect(randomNumbers).toHaveLength(2);
    expect(randomNumbers[0]).toBeGreaterThanOrEqual(min);
    expect(randomNumbers[1]).toBeLessThanOrEqual(max);
    expect(randomNumbers[0]).not.toEqual(randomNumbers[1]);
});
