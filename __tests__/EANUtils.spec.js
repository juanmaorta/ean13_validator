import EANUtils from '../EANUtils';

describe('EANUtils test suite', () => {
    let validEAN = '8401234567895',
        nonValidEAN ='8401234567890';

    it('should return TRUE if EAN is valid', () => {

        expect(EANUtils.isValidEAN13(validEAN)).toBe(true);
    });

    it('should return FALSE if EAN is NON valid', () => {

        expect(EANUtils.isValidEAN13(nonValidEAN)).toBe(false);
    });
});