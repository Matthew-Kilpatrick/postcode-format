/**
 * Validates and formats postcodes in Gibraltar.
 *
 * This country uses a single postcode for all addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_addresses_in_Gibraltar
 */
export default function format(postcode) {
    if (postcode === 'GX111AA') {
        return 'GX11 1AA';
    }
    return null;

}