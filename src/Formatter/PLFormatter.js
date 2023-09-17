/**
 * Validates and formats postcodes in Poland.
 *
 * Postcodes consist of 5 digits in the following format: xy-zzz.
 *
 * - The first digit represents the postal district
 * - The second digit represents the major geographical subdivision of this district
 * - The three digits after the dash represents the post office, or in the case of large cities,
 *   a particular street, part of the street or even separate address.
 *
 * @see https://en.wikipedia.org/wiki/List_of_postal_codes
 */
export default function format(postcode) {
    if (!/^[0-9]{5}$/.test(postcode)) {
        return null;
    }
    return postcode.substring(0, 2) + '-' + postcode.substring(2);

}