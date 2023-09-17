/**
 * Validates and formats postcodes in New Caledonia.
 *
 * Overseas Collectivity of France. French codes used. Range 98800 - 98890.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode < '98800' || postcode > '98890') {
        return null;
    }
    return postcode;

}