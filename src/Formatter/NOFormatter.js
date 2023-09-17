/**
 * Validates and formats postcodes in Norway.
 *
 * Norwegian Postal Codes are 4-digit codes.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Norway
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return postcode;

}