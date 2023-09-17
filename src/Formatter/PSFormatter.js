/**
 * Validates and formats postcodes in Palestine.
 *
 * Postcodes consist of 3 digits, without separator.
 * Not yet implemented in practice.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{3}$/.test(postcode)) {
        return null;
    }
    return postcode;

}