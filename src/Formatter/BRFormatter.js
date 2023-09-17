/**
 * Validates and formats postcodes in Brazil.
 *
 * Format is 5 digits, hyphen, 3 digits.
 * The old format that used 5 digits is not accepted by this formatter.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/C%C3%B3digo_de_Endere%C3%A7amento_Postal
 */
export default function format(postcode) {
    if (!/^[0-9]{8}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 5) + '-' + postcode.substring(5);

}