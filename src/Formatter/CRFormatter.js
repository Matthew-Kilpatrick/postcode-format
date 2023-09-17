/**
 * Validates and formats postcodes in Costa Rica.
 *
 * Postal codes in Costa Rica are 5 digit numeric.
 * According to Wikipedia, street level format is 5 digits, dash, 4 digits.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/List_of_districts_of_Costa_Rica
 */
export default function format(postcode) {
    let length;

    if (!/^[0-9]+$/.test(postcode)) {
        return null;
    }
    length = postcode.length;
    if (length === 5) {
        return postcode;
    }
    if (length !== 9) {
        return null;
    }
    return postcode.substring(0, 5) + '-' + postcode.substring(5);

}