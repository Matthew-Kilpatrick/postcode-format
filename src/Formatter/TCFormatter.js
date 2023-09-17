/**
 * Validates and formats postcodes in Turks and Caicos Islands.
 *
 * This country uses a single postcode for all addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === 'TKCA1ZZ') {
        return 'TKCA 1ZZ';
    }
    return null;

}