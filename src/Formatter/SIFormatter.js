/**
 * Validates and formats postcodes in Slovenia.
 *
 * The codes consist of four digits written without separator characters.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Slovenia
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return postcode;

}