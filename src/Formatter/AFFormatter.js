/**
 * Validates and formats postcodes in Afghanistan.
 *
 * Postcodes consist of 4 digits, without separator.
 *
 * The first two digits (ranging from 10–43) correspond to the province,
 * while the last two digits correspond either to the city/delivery zone (range 01–50)
 * or to the district/delivery zone (range 51–99).
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 * @see https://en.wikipedia.org/wiki/Postal_codes_in_Afghanistan
 */
export default function format(postcode) {
    let province;

    if (!/^[0-9]{4}$/.test(postcode)) {
        return null;
    }
    province = postcode.substring(0, 2);
    if (province < '10' || province > '43') {
        return null;
    }
    return postcode;

}