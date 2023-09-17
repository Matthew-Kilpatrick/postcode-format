/**
 * Validates and formats postcodes in Kazakhstan.
 *
 * Postal codes in Kazakhstan are 6 digit numeric.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{6}$/.test(postcode)) {
        return null;
    }
    return postcode;

}