/**
 * Validates and formats postcodes in Czechia.
 *
 * Postcodes consist of 5 digits in the following format: xxx xx.
 *
 * - The first digit (ranging from 1-7) represents the postal district.
 * - The second digit represents a further geographical division of this
 *   district.
 * - The third and, if necessary, other digits are used to distinguish
 *   the post office and eventually post office boxes.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let district;

    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    district = postcode[0];
    if (district < '1' || district > '7') {
        return null;
    }
    return postcode.substring(0, 3) + ' ' + postcode.substring(3);

}