const divideBy16WithRemainder = require('../../katas/rgbToHexConversion/divideBy16WithRemainder')
const hexFrom1To16 = require('../../katas/rgbToHexConversion/hexFrom1To16')
const rgbToHexConverter = require('../../katas/rgbToHexConversion');
const decimalToHex = require("../../katas/rgbToHexConversion/decimalToHex");

describe('RGB to Hex Converter Test Suite', () => {
  describe('#divideBy16WithRemainder', () => {
    test('it should accept a number as input', () => {
      divideBy16WithRemainder(32)
    })

    test('It should return 2 and remainder 0 when supplied 32', () => {
      const [quotient, remainder] = divideBy16WithRemainder(32);
      expect(quotient).toEqual(2);
      expect(remainder).toEqual(0)
    })

    test('It should return 2 and remainder 1 when supplied 33', () => {
      const [quotient, remainder] = divideBy16WithRemainder(33);
      expect(quotient).toEqual(2);
      expect(remainder).toEqual(1)
    })

    test('It should return when supplied 134', () => {
      const [quotient, remainder] = divideBy16WithRemainder(134);
      expect(quotient).toEqual(8);
      expect(remainder).toEqual(6)
    })
  })

  describe('#hexFrom1To16', () => {
    test('If supplied 0 should return 0 as a string', () => {
      expect(hexFrom1To16(0)).toEqual('0')
    })

    test('If supplied 1 should return 1 as a string', () => {
      expect(hexFrom1To16(1)).toEqual('1')
    })

    test('If supplied 2 should return 2 as a string', () => {
      expect(hexFrom1To16(2)).toEqual('2')
    })

    test('If supplied 3 should return 3 as a string', () => {
      expect(hexFrom1To16(3)).toEqual('3')
    })

    test('If supplied 4 should return 4 as a string', () => {
      expect(hexFrom1To16(4)).toEqual('4')
    })

    test('If supplied 5 should return 5 as a string', () => {
      expect(hexFrom1To16(5)).toEqual('5')
    })

    test('If supplied 6 should return 6 as a string', () => {
      expect(hexFrom1To16(6)).toEqual('6')
    })

    test('If supplied 7 should return 7 as a string', () => {
      expect(hexFrom1To16(7)).toEqual('7')
    })

    test('If supplied 8 should return 8 as a string', () => {
      expect(hexFrom1To16(8)).toEqual('8')
    })

    test('If supplied 9 should return 9 as a string', () => {
      expect(hexFrom1To16(9)).toEqual('9')
    })

    test('If supplied 10 should return A', () => {
      expect(hexFrom1To16(10)).toEqual('A')
    })

    test('If supplied 11 should return B', () => {
      expect(hexFrom1To16(11)).toEqual('B')
    })

    test('If supplied 12 should return C', () => {
      expect(hexFrom1To16(12)).toEqual('C')
    })

    test('If supplied 13 should return D', () => {
      expect(hexFrom1To16(13)).toEqual('D')
    })

    test('If supplied 14 should return E', () => {
      expect(hexFrom1To16(14)).toEqual('E')
    })

    test('If supplied 15 should return F', () => {
      expect(hexFrom1To16(15)).toEqual('F')
    })

    test('If supplied 16 should return 10 as a string', () => {
      expect(hexFrom1To16(16)).toEqual('10')
    })
  })

  describe('#decimalToHex', () => {
    test('should convert 255 to "FF"', () => {
      expect(decimalToHex(255)).toEqual('FF')
    })

    test('should convert 7562 to "1D8A"', () => {
      expect(decimalToHex(7562)).toEqual('1D8A')
    })
  })

  describe('#rgbToHexConversion', () => {
    test('It should accept 3 parameters as arguments', () => {
      rgbToHexConverter(1, 2, 3);
    })

    test('(255, 255, 255) should return "FFFFFF"', () => {
      expect(rgbToHexConverter(255, 255, 255)).toEqual('FFFFFF');
    })

    test('(0, 0, 0) should return "000000"', () => {
      expect(rgbToHexConverter(0, 0, 0)).toEqual('000000');
    })

    test('(124, 56, 201) should return "7C38C9"', () => {
      expect(rgbToHexConverter(124, 56, 201)).toEqual('7C38C9');
    })

    describe('values that fall outside of rgb range should be rounded to the nearest limit', () => {
      test('(256, 300, 400) should return "FFFFFF"', () => {
        expect(rgbToHexConverter(256, 300, 400)).toEqual('FFFFFF');
      })

      test('(-23, -342, -10) should return "000000"', () => {
        expect(rgbToHexConverter(-23, -342, -10)).toEqual('000000');
      })

      test('(-23, 323, 47) should return "00FF2F"', () => {
        expect(rgbToHexConverter(-23, 323, 47)).toEqual('00FF2F');
      })
    });
  })
})

