/**
 * Validates and formats postcodes in Pitcairn Islands.
 *
 * This country uses a single postcode for all addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (postcode === 'PCRN1ZZ') {
        return 'PCRN 1ZZ';
    }
    return null;

}