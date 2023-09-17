/**
 * Validates and formats postcodes in Norfolk Island.
 *
 * Postcodes consist of 4 digits, without separator.
 * Part of the Australian postal code system.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return postcode;

}