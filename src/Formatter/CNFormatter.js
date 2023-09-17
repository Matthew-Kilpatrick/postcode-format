/**
 * Validates and formats postcodes in China.
 *
 * China Post uses a six-digit all-numerical system, without separator.
 * The range 000000–009999 is not in use.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes_in_China
 */
export default function format(postcode) {
    if (!/^[0-9]{6}$/.test(postcode)) {
        return null;
    }
    if (postcode[0] === '0' && postcode[1] === '0') {
        return null;
    }
    return postcode;

}