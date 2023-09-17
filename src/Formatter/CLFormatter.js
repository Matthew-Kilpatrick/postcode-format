/**
 * Validates and formats postcodes in Chile.
 *
 * Postcodes consist of 7 digits, without separator.
 * According to Wikipedia, postal codes are rarely included in addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Chile
 */
export default function format(postcode) {
    if (!/^[0-9]{7}$/.test(postcode)) {
        return null;
    }
    return postcode;

}