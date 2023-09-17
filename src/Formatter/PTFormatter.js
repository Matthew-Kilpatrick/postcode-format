/**
 * Validates and formats postcodes in Portugal.
 *
 * Postcode format is NNNN-NNN, N standing for a digit.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Portugal
 */
export default function format(postcode) {
    if (!/^[0-9]{7}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 4) + '-' + postcode.substring(4);

}