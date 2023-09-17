/**
 * Validates and formats postcodes in the Philippines.
 *
 * Postcodes consist of 4 digits, without separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/List_of_ZIP_codes_in_the_Philippines
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return postcode;

}