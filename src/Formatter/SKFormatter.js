/**
 * Validates and formats postcodes in Slovakia.
 *
 * Postcodes consist of 5 digits in the following format: xxx xx.
 *
 * - The first digit represents the postal district and is either 8, 9, or 0.
 * - Other digits, depending on the district, represent further geographical
 *   division of this district.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    let district;

    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    district = postcode[0];
    if (['8', '9', '0'].indexOf(district) === -1) {
        return null;
    }
    return postcode.substring(0, 3) + ' ' + postcode.substring(3);

}