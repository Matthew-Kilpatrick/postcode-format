/**
 * Validates and formats postcodes in Vietnam.
 *
 * Postal codes are 6 digit numeric.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Vietnam
 */
export default function format(postcode) {
    if (!/^[0-9]{6}$/.test(postcode)) {
        return null;
    }
    return postcode;

}