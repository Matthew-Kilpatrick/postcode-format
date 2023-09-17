/**
 * Validates and formats postcodes in Peru.
 *
 * Postcodes consist of 5 digits, without separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes_in_Peru
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    return postcode;

}