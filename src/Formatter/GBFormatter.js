const areaCodes = [
    'AB', 'AL', 'B', 'BA', 'BB', 'BD', 'BH', 'BL', 'BN', 'BR', 'BS', 'BT', 'CA', 'CB', 'CF', 'CH', 'CM', 'CO', 'CR',
    'CT', 'CV', 'CW', 'DA', 'DD', 'DE', 'DG', 'DH', 'DL', 'DN', 'DT', 'DY', 'E', 'EC', 'EH', 'EN', 'EX', 'FK', 'FY',
    'G', 'GL', 'GU', 'HA', 'HD', 'HG', 'HP', 'HR', 'HS', 'HU', 'HX', 'IG', 'IP', 'IV', 'KA', 'KT', 'KW', 'KY', 'L',
    'LA', 'LD', 'LE', 'LL', 'LN', 'LS', 'LU', 'M', 'ME', 'MK', 'ML', 'N', 'NE', 'NG', 'NN', 'NP', 'NR', 'NW', 'OL',
    'OX', 'PA', 'PE', 'PH', 'PL', 'PO', 'PR', 'RG', 'RH', 'RM', 'S', 'SA', 'SE', 'SG', 'SK', 'SL', 'SM', 'SN', 'SO',
    'SP', 'SR', 'SS', 'ST', 'SW', 'SY', 'TA', 'TD', 'TF', 'TN', 'TQ', 'TR', 'TS', 'TW', 'UB', 'W', 'WA', 'WC', 'WD',
    'WF', 'WN', 'WR', 'WS', 'WV', 'YO', 'ZE',

    // non-geographic
    'BF', 'BX', 'XX'
];

let patterns;

/**
 * Validates and formats the postcodes in the United Kingdom of Great Britain and Northern Ireland.
 *
 * Postcodes can have six different formats:
 *
 * - A9 9AA
 * - A9A 9AA
 * - A99 9AA
 * - AA9 9AA
 * - AA9A 9AA
 * - AA99 9AA
 *
 * A stands for a capital letter, 9 stands for a digit.
 * Only certain letters are allowed for each position in the postcode.
 * Only certain area codes are permitted.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
 * @see https://en.wikipedia.org/wiki/List_of_postcode_areas_in_the_United_Kingdom
 */
export default function format(postcode) {
    // special case
    if (postcode === 'GIR0AA') {
        return 'GIR 0AA';
    }
    // regular patterns
    for (let pattern of getPatterns()) {
        let matches;
        if (matches = postcode.match(pattern)) {
            let [_, outwardCode, areaCode, inwardCode] = matches;
            if (areaCodes.indexOf(areaCode) === -1) {
                return null;
            }
            return outwardCode + ' ' + inwardCode;
        }
    }
    return null;
}

function getPatterns() {
    if (patterns) {
        return patterns;
    }

    const n = '[0-9]';

    // outward code alpha chars
    const alphaOut1 = '[ABCDEFGHIJKLMNOPRSTUWYZ]';
    const alphaOut2 = '[ABCDEFGHKLMNOPQRSTUVWXY]';
    const alphaOut3 = '[ABCDEFGHJKPSTUW]';
    const alphaOut4 = '[ABEHMNPRVWXY]';

    // inward code alpha chars
    const alphaIn = '[ABCDEFGHJLNPQRSTUWXYZ]';

    const outPatterns = [];

    // AN
    outPatterns.push('(' + alphaOut1 + ')' + n);

    // ANA
    outPatterns.push('(' + alphaOut1 + ')' + n + alphaOut3);

    // ANN
    outPatterns.push('(' + alphaOut1 + ')' + n + n);

    // AAN
    outPatterns.push('(' + alphaOut1 + alphaOut2 + ')' + n);

    // AANA
    outPatterns.push('(' + alphaOut1 + alphaOut2 + ')' + n + alphaOut4);

    // AANN
    outPatterns.push('(' + alphaOut1 + alphaOut2 + ')' + n + n);

    const inPattern = n + alphaIn + alphaIn;

    patterns = [];
    for (let outPattern of outPatterns) {
        patterns.push(new RegExp('^(' + outPattern + ')(' + inPattern + ')$'));
    }

    return patterns;
}