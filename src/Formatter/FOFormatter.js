/**
 * Validates and formats postcodes in Faroe Islands.
 *
 * Postcodes consist of 3 digits, without separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{3}$/.test(postcode)) {
        return null;
    }
    return postcode;

}