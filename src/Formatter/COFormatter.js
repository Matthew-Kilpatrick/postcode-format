const departments = [
    '05', '08', '11', '13',
    '15', '17', '18', '19',
    '20', '23', '25', '27',
    '41', '44', '47', '50',
    '52', '54', '63', '66',
    '68', '70', '73', '76',
    '81', '85', '86', '88',
    '91', '94', '95', '97',
    '99'
];

/**
 * Validates and formats postcodes in Colombia.
 *
 * Postal codes in Colombia are 6 digit numeric.
 * The first 2 digits represent the department and can range from 00 to 32.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://es.wikipedia.org/wiki/Anexo:C%C3%B3digos_postales_de_Colombia
 */
export default function format(postcode) {
    let department;

    if (!/^\d{2}(?!0000)\d{4}$/.test(postcode)) {
        return null;
    }
    department = postcode.substring(0, 2);
    if (departments.indexOf(department) === -1) {
        return null;
    }
    return postcode;

}