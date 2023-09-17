/**
 * Validates and formats postcodes in Romania.
 *
 * Postal codes have six digits and no separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Romania
 */
export default function format(postcode) {
    if (!/^[0-9]{6}$/.test(postcode)) {
        return null;
    }
    return postcode;

}