/**
 * Validates and formats postcodes in British Antarctic Territory.
 *
 * This country uses a single postcode for all addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === 'BIQQ1ZZ') {
        return 'BIQQ 1ZZ';
    }
    return null;

}