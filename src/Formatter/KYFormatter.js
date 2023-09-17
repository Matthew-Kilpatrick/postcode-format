/**
 * Validates and formats postcodes in the Cayman Islands.
 *
 * Postcode format is KYN-NNNN, where N are digits. The first digit can only be 1 to 3.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_the_Cayman_Islands
 */
export default function format(postcode) {
    if (postcode.substring(0, 2) !== 'KY') {
        return null;
    }
    postcode = postcode.substring(2);
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    if (postcode[0] < '1' || postcode[0] > '3') {
        return null;
    }
    return 'KY' + postcode[0] + '-' + postcode.substring(1);

}