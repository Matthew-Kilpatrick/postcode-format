/**
 * Validates and formats postcodes in Argentina.
 *
 * The postcode is either 4 digits, or 1 letter + 4 digits + 3 letters, with no separators.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Argentina
 */
export default function format(postcode) {
    if (!/^(([0-9]{4})|([A-Z][0-9]{4}[A-Z]{3}))$/.test(postcode)) {
        return null;
    }
    return postcode;

}