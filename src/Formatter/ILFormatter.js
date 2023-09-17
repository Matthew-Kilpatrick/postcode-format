/**
 * Validates and formats postcodes in Israel.
 *
 * Postcodes consist of 7 digits, without separator.
 * The country used 5 digit postcodes up to 2013. These postcodes are not supported by this formatter.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Israel
 */
export default function format(postcode) {
    if (!/^[0-9]{7}$/.test(postcode)) {
        return null;
    }
    return postcode;

}