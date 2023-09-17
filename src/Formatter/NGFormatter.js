/**
 * Validates and formats postcodes in Nigeria.
 *
 * Postal codes in Nigeria are numeric, consisting of six digits.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Nigeria
 */
export default function format(postcode) {
    if (!/^[0-9]{6}$/.test(postcode)) {
        return null;
    }
    return postcode;

}