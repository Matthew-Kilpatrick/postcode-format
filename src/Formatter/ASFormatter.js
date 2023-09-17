/**
 * Validates and formats postcodes in American Samoa.
 *
 * Mail service in American Samoa is fully integrated with the United States Postal Service.
 * All points in the territory use the same ZIP code, 96799.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_American_Samoa
 */
export default function format(postcode) {
    let plusFour;
    let zip;
    let length;

    length = postcode.length;
    if (length === 5) {
        if (postcode !== '96799') {
            return null;
        }
        return postcode;
    }
    if (!/^[0-9]{9}$/.test(postcode)) {
        return null;
    }
    zip = postcode.substring(0, 5);
    if (zip !== '96799') {
        return null;
    }
    plusFour = postcode.substring(5);
    return zip + '-' + plusFour;

}