/**
 * Validates and formats postcodes in Vatican.
 *
 * Single code used for all addresses. Part of the Italian postal code system.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === '00120') {
        return postcode;
    }
    return null;

}