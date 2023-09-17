/**
 * Validates and formats postcodes in Saint Pierre and Miquelon.
 *
 * This country uses a single postcode, 97500.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === '97500') {
        return postcode;
    }
    return null;

}