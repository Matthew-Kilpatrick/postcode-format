/**
 * Validates and formats postcodes in Ethiopia.
 *
 * Postcodes consist of 4 digits, without separator.
 * According to Wikipedia, the code is only used on a trial basis for Addis Ababa addresses.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    return postcode;

}