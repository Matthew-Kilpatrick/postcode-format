/**
 * Validates and formats postcodes in South Georgia and the South Sandwich Islands.
 *
 * This country uses a single postcode for all addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === 'SIQQ1ZZ') {
        return 'SIQQ 1ZZ';
    }
    return null;

}