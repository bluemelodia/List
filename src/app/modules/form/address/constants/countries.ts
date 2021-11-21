export interface Country {
	readonly [key: string]: CountryData;
}

export interface CountryData {
	name: string;
}

export enum Region {
	County = "County",
	State = "State",
	Oblast = "Oblast",
	Prefecture = "Prefecture",
	Province = "Province",
}

export const countries: Country = {
    "BD":{
        name: "Bangladesh"
    },
    "BE":{
        name: "Belgium"
    },
    "BF":{
        name: "Burkina Faso"
    },
    "BG":{
        name: "Bulgaria"
    },
    "BA":{
        name: "Bosnia and Herzegovina"
    },
    "BB":{
        name: "Barbados"
    },
    "WF":{
        name: "Wallis and Futuna"
    },
    "BL":{
        name: "Saint Barthelemy"
    },
    "BM":{
        name: "Bermuda"
    },
    "BN":{
        name: "Brunei"
    },
    "BO":{
        name: "Bolivia"
    },
    "BH":{
        name: "Bahrain"
    },
    "BI":{
        name: "Burundi"
    },
    "BJ":{
        name: "Benin"
    },
    "BT":{
        name: "Bhutan"
    },
    "JM":{
        name: "Jamaica"
    },
    "BV":{
        name: "Bouvet Island"
    },
    "BW":{
        name: "Botswana"
    },
    "WS":{
        name: "Samoa"
    },
    "BQ":{
        name: "Bonaire, Saint Eustatius and Saba "
    },
    "BR":{
        name: "Brazil"
    },
    "BS":{
        name: "Bahamas"
    },
    "JE":{
        name: "Jersey"
    },
    "BY":{
        name: "Belarus"
    },
    "BZ":{
        name: "Belize"
    },
    "RU":{
        name: "Russia"
    },
    "RW":{
        name: "Rwanda"
    },
    "RS":{
        name: "Serbia"
    },
    "TL":{
        name: "East Timor"
    },
    "RE":{
        name: "Reunion"
    },
    "TM":{
        name: "Turkmenistan"
    },
    "TJ":{
        name: "Tajikistan"
    },
    "RO":{
        name: "Romania"
    },
    "TK":{
        name: "Tokelau"
    },
    "GW":{
        name: "Guinea-Bissau"
    },
    "GU":{
        name: "Guam"
    },
    "GT":{
        name: "Guatemala"
    },
    "GS":{
        name: "South Georgia and the South Sandwich Islands"
    },
    "GR":{
        name: "Greece"
    },
    "GQ":{
        name: "Equatorial Guinea"
    },
    "GP":{
        name: "Guadeloupe"
    },
    "JP":{
        name: "Japan"
    },
    "GY":{
        name: "Guyana"
    },
    "GG":{
        name: "Guernsey"
    },
    "GF":{
        name: "French Guiana"
    },
    "GE":{
        name: "Georgia"
    },
    "GD":{
        name: "Grenada"
    },
    "GB":{
        name: "United Kingdom"
    },
    "GA":{
        name: "Gabon"
    },
    "SV":{
        name: "El Salvador"
    },
    "GN":{
        name: "Guinea"
    },
    "GM":{
        name: "Gambia"
    },
    "GL":{
        name: "Greenland"
    },
    "GI":{
        name: "Gibraltar"
    },
    "GH":{
        name: "Ghana"
    },
    "OM":{
        name: "Oman"
    },
    "TN":{
        name: "Tunisia"
    },
    "JO":{
        name: "Jordan"
    },
    "HR":{
        name: "Croatia"
    },
    "HT":{
        name: "Haiti"
    },
    "HU":{
        name: "Hungary"
    },
    "HK":{
        name: "Hong Kong"
    },
    "HN":{
        name: "Honduras"
    },
    "HM":{
        name: "Heard Island and McDonald Islands"
    },
    "VE":{
        name: "Venezuela"
    },
    "PR":{
        name: "Puerto Rico"
    },
    "PS":{
        name: "Palestinian Territory"
    },
    "PW":{
        name: "Palau"
    },
    "PT":{
        name: "Portugal"
    },
    "SJ":{
        name: "Svalbard and Jan Mayen"
    },
    "PY":{
        name: "Paraguay"
    },
    "IQ":{
        name: "Iraq"
    },
    "PA":{
        name: "Panama"
    },
    "PF":{
        name: "French Polynesia"
    },
    "PG":{
        name: "Papua New Guinea"
    },
    "PE":{
        name: "Peru"
    },
    "PK":{
        name: "Pakistan"
    },
    "PH":{
        name: "Philippines"
    },
    "PN":{
        name: "Pitcairn"
    },
    "PL":{
        name: "Poland"
    },
    "PM":{
        name: "Saint Pierre and Miquelon"
    },
    "ZM":{
        name: "Zambia"
    },
    "EH":{
        name: "Western Sahara"
    },
    "EE":{
        name: "Estonia"
    },
    "EG":{
        name: "Egypt"
    },
    "ZA":{
        name: "South Africa"
    },
    "EC":{
        name: "Ecuador"
    },
    "IT":{
        name: "Italy"
    },
    "VN":{
        name: "Vietnam"
    },
    "SB":{
        name: "Solomon Islands"
    },
    "ET":{
        name: "Ethiopia"
    },
    "SO":{
        name: "Somalia"
    },
    "ZW":{
        name: "Zimbabwe"
    },
    "SA":{
        name: "Saudi Arabia"
    },
    "ES":{
        name: "Spain"
    },
    "ER":{
        name: "Eritrea"
    },
    "ME":{
        name: "Montenegro"
    },
    "MD":{
        name: "Moldova"
    },
    "MG":{
        name: "Madagascar"
    },
    "MF":{
        name: "Saint Martin"
    },
    "MA":{
        name: "Morocco"
    },
    "MC":{
        name: "Monaco"
    },
    "UZ":{
        name: "Uzbekistan"
    },
    "MM":{
        name: "Myanmar"
    },
    "ML":{
        name: "Mali"
    },
    "MO":{
        name: "Macao"
    },
    "MN":{
        name: "Mongolia"
    },
    "MH":{
        name: "Marshall Islands"
    },
    "MK":{
        name: "Macedonia"
    },
    "MU":{
        name: "Mauritius"
    },
    "MT":{
        name: "Malta"
    },
    "MW":{
        name: "Malawi"
    },
    "MV":{
        name: "Maldives"
    },
    "MQ":{
        name: "Martinique"
    },
    "MP":{
        name: "Northern Mariana Islands"
    },
    "MS":{
        name: "Montserrat"
    },
    "MR":{
        name: "Mauritania"
    },
    "IM":{
        name: "Isle of Man"
    },
    "UG":{
        name: "Uganda"
    },
    "TZ":{
        name: "Tanzania"
    },
    "MY":{
        name: "Malaysia"
    },
    "MX":{
        name: "Mexico"
    },
    "IL":{
        name: "Israel"
    },
    "FR":{
        name: "France"
    },
    "IO":{
        name: "British Indian Ocean Territory"
    },
    "SH":{
        name: "Saint Helena"
    },
    "FI":{
        name: "Finland"
    },
    "FJ":{
        name: "Fiji"
    },
    "FK":{
        name: "Falkland Islands"
    },
    "FM":{
        name: "Micronesia"
    },
    "FO":{
        name: "Faroe Islands"
    },
    "NI":{
        name: "Nicaragua"
    },
    "NL":{
        name: "Netherlands"
    },
    "NO":{
        name: "Norway"
    },
    "NA":{
        name: "Namibia"
    },
    "VU":{
        name: "Vanuatu"
    },
    "NC":{
        name: "New Caledonia"
    },
    "NE":{
        name: "Niger"
    },
    "NF":{
        name: "Norfolk Island"
    },
    "NG":{
        name: "Nigeria"
    },
    "NZ":{
        name: "New Zealand"
    },
    "NP":{
        name: "Nepal"
    },
    "NR":{
        name: "Nauru"
    },
    "NU":{
        name: "Niue"
    },
    "CK":{
        name: "Cook Islands"
    },
    "XK":{
        name: "Kosovo"
    },
    "CI":{
        name: "Ivory Coast"
    },
    "CH":{
        name: "Switzerland"
    },
    "CO":{
        name: "Colombia"
    },
    "CN":{
        name: "China"
    },
    "CM":{
        name: "Cameroon"
    },
    "CL":{
        name: "Chile"
    },
    "CC":{
        name: "Cocos Islands"
    },
    "CA":{
        name: "Canada"
    },
    "CG":{
        name: "Republic of the Congo"
    },
    "CF":{
        name: "Central African Republic"
    },
    "CD":{
        name: "Democratic Republic of the Congo"
    },
    "CZ":{
        name: "Czech Republic"
    },
    "CY":{
        name: "Cyprus"
    },
    "CX":{
        name: "Christmas Island"
    },
    "CR":{
        name: "Costa Rica"
    },
    "CW":{
        name: "Curacao"
    },
    "CV":{
        name: "Cape Verde"
    },
    "CU":{
        name: "Cuba"
    },
    "SZ":{
        name: "Swaziland"
    },
    "SY":{
        name: "Syria"
    },
    "SX":{
        name: "Sint Maarten"
    },
    "KG":{
        name: "Kyrgyzstan"
    },
    "KE":{
        name: "Kenya"
    },
    "SS":{
        name: "South Sudan"
    },
    "SR":{
        name: "Suriname"
    },
    "KI":{
        name: "Kiribati"
    },
    "KH":{
        name: "Cambodia"
    },
    "KN":{
        name: "Saint Kitts and Nevis"
    },
    "KM":{
        name: "Comoros"
    },
    "ST":{
        name: "Sao Tome and Principe"
    },
    "SK":{
        name: "Slovakia"
    },
    "KR":{
        name: "South Korea"
    },
    "SI":{
        name: "Slovenia"
    },
    "KP":{
        name: "North Korea"
    },
    "KW":{
        name: "Kuwait"
    },
    "SN":{
        name: "Senegal"
    },
    "SM":{
        name: "San Marino"
    },
    "SL":{
        name: "Sierra Leone"
    },
    "SC":{
        name: "Seychelles"
    },
    "KZ":{
        name: "Kazakhstan"
    },
    "KY":{
        name: "Cayman Islands"
    },
    "SG":{
        name: "Singapore"
    },
    "SE":{
        name: "Sweden"
    },
    "SD":{
        name: "Sudan"
    },
    "DO":{
        name: "Dominican Republic"
    },
    "DM":{
        name: "Dominica"
    },
    "DJ":{
        name: "Djibouti"
    },
    "DK":{
        name: "Denmark"
    },
    "VG":{
        name: "British Virgin Islands"
    },
    "DE":{
        name: "Germany"
    },
    "YE":{
        name: "Yemen"
    },
    "DZ":{
        name: "Algeria"
    },
    "US":{
        name: "United States"
    },
    "UY":{
        name: "Uruguay"
    },
    "YT":{
        name: "Mayotte"
    },
    "UM":{
        name: "United States Minor Outlying Islands"
    },
    "LB":{
        name: "Lebanon"
    },
    "LC":{
        name: "Saint Lucia"
    },
    "LA":{
        name: "Laos"
    },
    "TV":{
        name: "Tuvalu"
    },
    "TW":{
        name: "Taiwan"
    },
    "TT":{
        name: "Trinidad and Tobago"
    },
    "TR":{
        name: "Turkey"
    },
    "LK":{
        name: "Sri Lanka"
    },
    "LI":{
        name: "Liechtenstein"
    },
    "LV":{
        name: "Latvia"
    },
    "TO":{
        name: "Tonga"
    },
    "LT":{
        name: "Lithuania"
    },
    "LU":{
        name: "Luxembourg"
    },
    "LR":{
        name: "Liberia"
    },
    "LS":{
        name: "Lesotho"
    },
    "TH":{
        name: "Thailand"
    },
    "TF":{
        name: "French Southern Territories"
    },
    "TG":{
        name: "Togo"
    },
    "TD":{
        name: "Chad"
    },
    "TC":{
        name: "Turks and Caicos Islands"
    },
    "LY":{
        name: "Libya"
    },
    "VA":{
        name: "Vatican"
    },
    "VC":{
        name: "Saint Vincent and the Grenadines"
    },
    "AE":{
        name: "United Arab Emirates"
    },
    "AD":{
        name: "Andorra"
    },
    "AG":{
        name: "Antigua and Barbuda"
    },
    "AF":{
        name: "Afghanistan"
    },
    "AI":{
        name: "Anguilla"
    },
    "VI":{
        name: "U.S. Virgin Islands"
    },
    "IS":{
        name: "Iceland"
    },
    "IR":{
        name: "Iran"
    },
    "AM":{
        name: "Armenia"
    },
    "AL":{
        name: "Albania"
    },
    "AO":{
        name: "Angola"
    },
    "AQ":{
        name: "Antarctica"
    },
    "AS":{
        name: "American Samoa"
    },
    "AR":{
        name: "Argentina"
    },
    "AU":{
        name: "Australia"
    },
    "AT":{
        name: "Austria"
    },
    "AW":{
        name: "Aruba"
    },
    "IN":{
        name: "India"
    },
    "AX":{
        name: "Aland Islands"
    },
    "AZ":{
        name: "Azerbaijan"
    },
    "IE":{
        name: "Ireland"
    },
    "ID":{
        name: "Indonesia"
    },
    "UA":{
        name: "Ukraine"
    },
    "QA":{
        name: "Qatar"
    },
    "MZ":{
        name: "Mozambique"
    }
};