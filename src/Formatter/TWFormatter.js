/**
 * Validates and formats postcodes in Taiwan.
 *
 * Acceptable formats are NNN and NNN-NN, N standing for a digit.
 *
 * The first three digits of the postal code are required; the last two digits are optional.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes_in_Taiwan
 */
export default function format(postcode) {
    let length;

    if (!/^[0-9]+$/.test(postcode)) {
        return null;
    }
    length = postcode.length;
    if (length === 3) {
        return postcode;
    }
    if (length === 5) {
        return postcode.substring(0, 3) + '-' + postcode.substring(postcode, postcode.length - 2);
    }
    return null;

}