/**
 * Validates and formats postcodes in San Marino.
 *
 * The postcode format is 4789N, where N stands for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode.substring(0, 4) !== '4789') {
        return null;
    }
    return postcode;

}