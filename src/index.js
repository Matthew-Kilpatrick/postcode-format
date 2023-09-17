import countryMap from "./country-map.js";
import InvalidPostcodeException from "./Exception/InvalidPostcodeException.js";
import UnknownCountryException from "./Exception/UnknownCountryException.js";

export default function format(country, postcode) {
    country = country.toUpperCase();
    if (!(country in countryMap)) {
        throw new UnknownCountryException();
    }

    const formatter = countryMap[country];
    let trimmed = postcode.replace(/ |-/g, '').toUpperCase();

    const formatted = formatter(trimmed);
    if (formatted) {
        return formatted;
    }

    throw new InvalidPostcodeException();
};