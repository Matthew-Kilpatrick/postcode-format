/**
 * Validates and formats postcodes in the United States of America.
 *
 * Postcodes in the USA are called ZIP codes.
 *
 * ZIP codes consist of 5 digits without separator.
 * ZIP+4 codes consist of 5 digits, followed by a dash, followed by 4 digits.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
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
    if (length === 9) {
        return postcode.substring(0, 5) + '-' + postcode.substring(postcode.length - 4);
    }
    return null;

}