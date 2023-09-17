/**
 * Validates and formats postcodes in Saint Martin.
 *
 * This country uses a single postcode, 97150.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === '97150') {
        return postcode;
    }
    return null;

}