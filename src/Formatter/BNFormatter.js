/**
 * Validates and formats postcodes in Brunei.
 *
 * Postcode format is two letters followed by 4 digits, without separator.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Brunei
 */
export default function format(postcode) {
    let matches;

    if (!(matches = postcode.match(/^[A-Z]{2}[0-9]{4}$/))) {
        return null;
    }
    return postcode;

}