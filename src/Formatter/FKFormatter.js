/**
 * Validates and formats postcodes in Falkland Islands.
 *
 * This country uses a single postcode for all addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === 'FIQQ1ZZ') {
        return 'FIQQ 1ZZ';
    }
    return null;

}