const main = require('./index');

describe('Logo Generator', () => {
  test('Generates a logo with the correct input', async () => {
    const input = {
      text: 'ABC',
      textColor: 'black',
      shape: 'circle',
      shapeColor: 'blue'
    };
    const expectedOutput = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="50" fill="blue" />
  <text x="150" y="144" text-anchor="middle" font-size="40" fill="black" font-family="Arial">ABC</text>
  </svg>`;

    const writeFileMock = jest.spyOn(fs, 'writeFile');
    await main(input);
    expect(writeFileMock).toHaveBeenCalled();
    const [[filename, content]] = writeFileMock.mock.calls;
    expect(filename).toBe('logo.svg');
    expect(content).toBe(expectedOutput);
  });
});
