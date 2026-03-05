import { defineComponent, unref, mergeProps, shallowRef, ref, useModel, watch, nextTick, reactive, computed, resolveDirective, openBlock, createElementBlock, normalizeClass, withDirectives, withKeys, createElementVNode, createCommentVNode, toDisplayString, renderSlot, withModifiers, vModelText, Fragment, renderList, vModelDynamic, mergeModels, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const Ie = [
  [
    "Afghanistan (‫افغانستان‬‎)",
    "af",
    "93"
  ],
  [
    "Albania (Shqipëri)",
    "al",
    "355"
  ],
  [
    "Algeria (‫الجزائر‬‎)",
    "dz",
    "213"
  ],
  [
    "American Samoa",
    "as",
    "1",
    5,
    ["684"]
  ],
  [
    "Andorra",
    "ad",
    "376"
  ],
  [
    "Angola",
    "ao",
    "244"
  ],
  [
    "Anguilla",
    "ai",
    "1",
    6,
    ["264"]
  ],
  [
    "Antigua and Barbuda",
    "ag",
    "1",
    7,
    ["268"]
  ],
  [
    "Argentina",
    "ar",
    "54"
  ],
  [
    "Armenia (Հայաստան)",
    "am",
    "374"
  ],
  [
    "Aruba",
    "aw",
    "297"
  ],
  [
    "Ascension Island",
    "ac",
    "247"
  ],
  [
    "Australia",
    "au",
    "61",
    0
  ],
  [
    "Austria (Österreich)",
    "at",
    "43"
  ],
  [
    "Azerbaijan (Azərbaycan)",
    "az",
    "994"
  ],
  [
    "Bahamas",
    "bs",
    "1",
    8,
    ["242"]
  ],
  [
    "Bahrain (‫البحرين‬‎)",
    "bh",
    "973"
  ],
  [
    "Bangladesh (বাংলাদেশ)",
    "bd",
    "880"
  ],
  [
    "Barbados",
    "bb",
    "1",
    9,
    ["246"]
  ],
  [
    "Belarus (Беларусь)",
    "by",
    "375"
  ],
  [
    "Belgium (België)",
    "be",
    "32"
  ],
  [
    "Belize",
    "bz",
    "501"
  ],
  [
    "Benin (Bénin)",
    "bj",
    "229"
  ],
  [
    "Bermuda",
    "bm",
    "1",
    10,
    ["441"]
  ],
  [
    "Bhutan (འབྲུག)",
    "bt",
    "975"
  ],
  [
    "Bolivia",
    "bo",
    "591"
  ],
  [
    "Bosnia and Herzegovina (Босна и Херцеговина)",
    "ba",
    "387"
  ],
  [
    "Botswana",
    "bw",
    "267"
  ],
  [
    "Brazil (Brasil)",
    "br",
    "55"
  ],
  [
    "British Indian Ocean Territory",
    "io",
    "246"
  ],
  [
    "British Virgin Islands",
    "vg",
    "1",
    11,
    ["284"]
  ],
  [
    "Brunei",
    "bn",
    "673"
  ],
  [
    "Bulgaria (България)",
    "bg",
    "359"
  ],
  [
    "Burkina Faso",
    "bf",
    "226"
  ],
  [
    "Burundi (Uburundi)",
    "bi",
    "257"
  ],
  [
    "Cambodia (កម្ពុជា)",
    "kh",
    "855"
  ],
  [
    "Cameroon (Cameroun)",
    "cm",
    "237"
  ],
  [
    "Canada",
    "ca",
    "1",
    1,
    ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]
  ],
  [
    "Cape Verde (Kabu Verdi)",
    "cv",
    "238"
  ],
  [
    "Caribbean Netherlands",
    "bq",
    "599",
    1,
    ["3", "4", "7"]
  ],
  [
    "Cayman Islands",
    "ky",
    "1",
    12,
    ["345"]
  ],
  [
    "Central African Republic (République centrafricaine)",
    "cf",
    "236"
  ],
  [
    "Chad (Tchad)",
    "td",
    "235"
  ],
  [
    "Chile",
    "cl",
    "56"
  ],
  [
    "China (中国)",
    "cn",
    "86"
  ],
  [
    "Christmas Island",
    "cx",
    "61",
    2,
    ["89164"]
  ],
  [
    "Cocos (Keeling) Islands",
    "cc",
    "61",
    1,
    ["89162"]
  ],
  [
    "Colombia",
    "co",
    "57"
  ],
  [
    "Comoros (‫جزر القمر‬‎)",
    "km",
    "269"
  ],
  [
    "Congo (DRC) (République démocratique du Congo)",
    "cd",
    "243"
  ],
  [
    "Congo (Republic) (Congo-Brazzaville)",
    "cg",
    "242"
  ],
  [
    "Cook Islands",
    "ck",
    "682"
  ],
  [
    "Costa Rica",
    "cr",
    "506"
  ],
  [
    "Côte d’Ivoire",
    "ci",
    "225"
  ],
  [
    "Croatia (Hrvatska)",
    "hr",
    "385"
  ],
  [
    "Cuba",
    "cu",
    "53"
  ],
  [
    "Curaçao",
    "cw",
    "599",
    0
  ],
  [
    "Cyprus (Κύπρος)",
    "cy",
    "357"
  ],
  [
    "Czech Republic (Česká republika)",
    "cz",
    "420"
  ],
  [
    "Denmark (Danmark)",
    "dk",
    "45"
  ],
  [
    "Djibouti",
    "dj",
    "253"
  ],
  [
    "Dominica",
    "dm",
    "1",
    13,
    ["767"]
  ],
  [
    "Dominican Republic (República Dominicana)",
    "do",
    "1",
    2,
    ["809", "829", "849"]
  ],
  [
    "Ecuador",
    "ec",
    "593"
  ],
  [
    "Egypt (‫مصر‬‎)",
    "eg",
    "20"
  ],
  [
    "El Salvador",
    "sv",
    "503"
  ],
  [
    "Equatorial Guinea (Guinea Ecuatorial)",
    "gq",
    "240"
  ],
  [
    "Eritrea",
    "er",
    "291"
  ],
  [
    "Estonia (Eesti)",
    "ee",
    "372"
  ],
  [
    "Eswatini",
    "sz",
    "268"
  ],
  [
    "Ethiopia",
    "et",
    "251"
  ],
  [
    "Falkland Islands (Islas Malvinas)",
    "fk",
    "500"
  ],
  [
    "Faroe Islands (Føroyar)",
    "fo",
    "298"
  ],
  [
    "Fiji",
    "fj",
    "679"
  ],
  [
    "Finland (Suomi)",
    "fi",
    "358",
    0
  ],
  [
    "France",
    "fr",
    "33"
  ],
  [
    "French Guiana (Guyane française)",
    "gf",
    "594"
  ],
  [
    "French Polynesia (Polynésie française)",
    "pf",
    "689"
  ],
  [
    "Gabon",
    "ga",
    "241"
  ],
  [
    "Gambia",
    "gm",
    "220"
  ],
  [
    "Georgia (საქართველო)",
    "ge",
    "995"
  ],
  [
    "Germany (Deutschland)",
    "de",
    "49"
  ],
  [
    "Ghana (Gaana)",
    "gh",
    "233"
  ],
  [
    "Gibraltar",
    "gi",
    "350"
  ],
  [
    "Greece (Ελλάδα)",
    "gr",
    "30"
  ],
  [
    "Greenland (Kalaallit Nunaat)",
    "gl",
    "299"
  ],
  [
    "Grenada",
    "gd",
    "1",
    14,
    ["473"]
  ],
  [
    "Guadeloupe",
    "gp",
    "590",
    0
  ],
  [
    "Guam",
    "gu",
    "1",
    15,
    ["671"]
  ],
  [
    "Guatemala",
    "gt",
    "502"
  ],
  [
    "Guernsey",
    "gg",
    "44",
    1,
    ["1481", "7781", "7839", "7911"]
  ],
  [
    "Guinea (Guinée)",
    "gn",
    "224"
  ],
  [
    "Guinea-Bissau (Guiné Bissau)",
    "gw",
    "245"
  ],
  [
    "Guyana",
    "gy",
    "592"
  ],
  [
    "Haiti",
    "ht",
    "509"
  ],
  [
    "Honduras",
    "hn",
    "504"
  ],
  [
    "Hong Kong (香港)",
    "hk",
    "852"
  ],
  [
    "Hungary (Magyarország)",
    "hu",
    "36"
  ],
  [
    "Iceland (Ísland)",
    "is",
    "354"
  ],
  [
    "India (भारत)",
    "in",
    "91"
  ],
  [
    "Indonesia",
    "id",
    "62"
  ],
  [
    "Iran (‫ایران‬‎)",
    "ir",
    "98"
  ],
  [
    "Iraq (‫العراق‬‎)",
    "iq",
    "964"
  ],
  [
    "Ireland",
    "ie",
    "353"
  ],
  [
    "Isle of Man",
    "im",
    "44",
    2,
    ["1624", "74576", "7524", "7924", "7624"]
  ],
  [
    "Israel (‫ישראל‬‎)",
    "il",
    "972"
  ],
  [
    "Italy (Italia)",
    "it",
    "39",
    0
  ],
  [
    "Jamaica",
    "jm",
    "1",
    4,
    ["876", "658"]
  ],
  [
    "Japan (日本)",
    "jp",
    "81"
  ],
  [
    "Jersey",
    "je",
    "44",
    3,
    ["1534", "7509", "7700", "7797", "7829", "7937"]
  ],
  [
    "Jordan (‫الأردن‬‎)",
    "jo",
    "962"
  ],
  [
    "Kazakhstan (Казахстан)",
    "kz",
    "7",
    1,
    ["33", "7"]
  ],
  [
    "Kenya",
    "ke",
    "254"
  ],
  [
    "Kiribati",
    "ki",
    "686"
  ],
  [
    "Kosovo",
    "xk",
    "383"
  ],
  [
    "Kuwait (‫الكويت‬‎)",
    "kw",
    "965"
  ],
  [
    "Kyrgyzstan (Кыргызстан)",
    "kg",
    "996"
  ],
  [
    "Laos (ລາວ)",
    "la",
    "856"
  ],
  [
    "Latvia (Latvija)",
    "lv",
    "371"
  ],
  [
    "Lebanon (‫لبنان‬‎)",
    "lb",
    "961"
  ],
  [
    "Lesotho",
    "ls",
    "266"
  ],
  [
    "Liberia",
    "lr",
    "231"
  ],
  [
    "Libya (‫ليبيا‬‎)",
    "ly",
    "218"
  ],
  [
    "Liechtenstein",
    "li",
    "423"
  ],
  [
    "Lithuania (Lietuva)",
    "lt",
    "370"
  ],
  [
    "Luxembourg",
    "lu",
    "352"
  ],
  [
    "Macau (澳門)",
    "mo",
    "853"
  ],
  [
    "Madagascar (Madagasikara)",
    "mg",
    "261"
  ],
  [
    "Malawi",
    "mw",
    "265"
  ],
  [
    "Malaysia",
    "my",
    "60"
  ],
  [
    "Maldives",
    "mv",
    "960"
  ],
  [
    "Mali",
    "ml",
    "223"
  ],
  [
    "Malta",
    "mt",
    "356"
  ],
  [
    "Marshall Islands",
    "mh",
    "692"
  ],
  [
    "Martinique",
    "mq",
    "596"
  ],
  [
    "Mauritania (‫موريتانيا‬‎)",
    "mr",
    "222"
  ],
  [
    "Mauritius (Moris)",
    "mu",
    "230"
  ],
  [
    "Mayotte",
    "yt",
    "262",
    1,
    ["269", "639"]
  ],
  [
    "Mexico (México)",
    "mx",
    "52"
  ],
  [
    "Micronesia",
    "fm",
    "691"
  ],
  [
    "Moldova (Republica Moldova)",
    "md",
    "373"
  ],
  [
    "Monaco",
    "mc",
    "377"
  ],
  [
    "Mongolia (Монгол)",
    "mn",
    "976"
  ],
  [
    "Montenegro (Crna Gora)",
    "me",
    "382"
  ],
  [
    "Montserrat",
    "ms",
    "1",
    16,
    ["664"]
  ],
  [
    "Morocco (‫المغرب‬‎)",
    "ma",
    "212",
    0
  ],
  [
    "Mozambique (Moçambique)",
    "mz",
    "258"
  ],
  [
    "Myanmar (Burma) (မြန်မာ)",
    "mm",
    "95"
  ],
  [
    "Namibia (Namibië)",
    "na",
    "264"
  ],
  [
    "Nauru",
    "nr",
    "674"
  ],
  [
    "Nepal (नेपाल)",
    "np",
    "977"
  ],
  [
    "Netherlands (Nederland)",
    "nl",
    "31"
  ],
  [
    "New Caledonia (Nouvelle-Calédonie)",
    "nc",
    "687"
  ],
  [
    "New Zealand",
    "nz",
    "64"
  ],
  [
    "Nicaragua",
    "ni",
    "505"
  ],
  [
    "Niger (Nijar)",
    "ne",
    "227"
  ],
  [
    "Nigeria",
    "ng",
    "234"
  ],
  [
    "Niue",
    "nu",
    "683"
  ],
  [
    "Norfolk Island",
    "nf",
    "672"
  ],
  [
    "North Korea (조선 민주주의 인민 공화국)",
    "kp",
    "850"
  ],
  [
    "North Macedonia (Северна Македонија)",
    "mk",
    "389"
  ],
  [
    "Northern Mariana Islands",
    "mp",
    "1",
    17,
    ["670"]
  ],
  [
    "Norway (Norge)",
    "no",
    "47",
    0
  ],
  [
    "Oman (‫عُمان‬‎)",
    "om",
    "968"
  ],
  [
    "Pakistan (‫پاکستان‬‎)",
    "pk",
    "92"
  ],
  [
    "Palau",
    "pw",
    "680"
  ],
  [
    "Palestine (‫فلسطين‬‎)",
    "ps",
    "970"
  ],
  [
    "Panama (Panamá)",
    "pa",
    "507"
  ],
  [
    "Papua New Guinea",
    "pg",
    "675"
  ],
  [
    "Paraguay",
    "py",
    "595"
  ],
  [
    "Peru (Perú)",
    "pe",
    "51"
  ],
  [
    "Philippines",
    "ph",
    "63"
  ],
  [
    "Poland (Polska)",
    "pl",
    "48"
  ],
  [
    "Portugal",
    "pt",
    "351"
  ],
  [
    "Puerto Rico",
    "pr",
    "1",
    3,
    ["787", "939"]
  ],
  [
    "Qatar (‫قطر‬‎)",
    "qa",
    "974"
  ],
  [
    "Réunion (La Réunion)",
    "re",
    "262",
    0
  ],
  [
    "Romania (România)",
    "ro",
    "40"
  ],
  [
    "Russia (Россия)",
    "ru",
    "7",
    0
  ],
  [
    "Rwanda",
    "rw",
    "250"
  ],
  [
    "Saint Barthélemy",
    "bl",
    "590",
    1
  ],
  [
    "Saint Helena",
    "sh",
    "290"
  ],
  [
    "Saint Kitts and Nevis",
    "kn",
    "1",
    18,
    ["869"]
  ],
  [
    "Saint Lucia",
    "lc",
    "1",
    19,
    ["758"]
  ],
  [
    "Saint Martin (Saint-Martin (partie française))",
    "mf",
    "590",
    2
  ],
  [
    "Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)",
    "pm",
    "508"
  ],
  [
    "Saint Vincent and the Grenadines",
    "vc",
    "1",
    20,
    ["784"]
  ],
  [
    "Samoa",
    "ws",
    "685"
  ],
  [
    "San Marino",
    "sm",
    "378"
  ],
  [
    "São Tomé and Príncipe (São Tomé e Príncipe)",
    "st",
    "239"
  ],
  [
    "Saudi Arabia (‫المملكة العربية السعودية‬‎)",
    "sa",
    "966"
  ],
  [
    "Senegal (Sénégal)",
    "sn",
    "221"
  ],
  [
    "Serbia (Србија)",
    "rs",
    "381"
  ],
  [
    "Seychelles",
    "sc",
    "248"
  ],
  [
    "Sierra Leone",
    "sl",
    "232"
  ],
  [
    "Singapore",
    "sg",
    "65"
  ],
  [
    "Sint Maarten",
    "sx",
    "1",
    21,
    ["721"]
  ],
  [
    "Slovakia (Slovensko)",
    "sk",
    "421"
  ],
  [
    "Slovenia (Slovenija)",
    "si",
    "386"
  ],
  [
    "Solomon Islands",
    "sb",
    "677"
  ],
  [
    "Somalia (Soomaaliya)",
    "so",
    "252"
  ],
  [
    "South Africa",
    "za",
    "27"
  ],
  [
    "South Korea (대한민국)",
    "kr",
    "82"
  ],
  [
    "South Sudan (‫جنوب السودان‬‎)",
    "ss",
    "211"
  ],
  [
    "Spain (España)",
    "es",
    "34"
  ],
  [
    "Sri Lanka (ශ්‍රී ලංකාව)",
    "lk",
    "94"
  ],
  [
    "Sudan (‫السودان‬‎)",
    "sd",
    "249"
  ],
  [
    "Suriname",
    "sr",
    "597"
  ],
  [
    "Svalbard and Jan Mayen",
    "sj",
    "47",
    1,
    ["79"]
  ],
  [
    "Sweden (Sverige)",
    "se",
    "46"
  ],
  [
    "Switzerland (Schweiz)",
    "ch",
    "41"
  ],
  [
    "Syria (‫سوريا‬‎)",
    "sy",
    "963"
  ],
  [
    "Taiwan (台灣)",
    "tw",
    "886"
  ],
  [
    "Tajikistan",
    "tj",
    "992"
  ],
  [
    "Tanzania",
    "tz",
    "255"
  ],
  [
    "Thailand (ไทย)",
    "th",
    "66"
  ],
  [
    "Timor-Leste",
    "tl",
    "670"
  ],
  [
    "Togo",
    "tg",
    "228"
  ],
  [
    "Tokelau",
    "tk",
    "690"
  ],
  [
    "Tonga",
    "to",
    "676"
  ],
  [
    "Trinidad and Tobago",
    "tt",
    "1",
    22,
    ["868"]
  ],
  [
    "Tunisia (‫تونس‬‎)",
    "tn",
    "216"
  ],
  [
    "Turkey (Türkiye)",
    "tr",
    "90"
  ],
  [
    "Turkmenistan",
    "tm",
    "993"
  ],
  [
    "Turks and Caicos Islands",
    "tc",
    "1",
    23,
    ["649"]
  ],
  [
    "Tuvalu",
    "tv",
    "688"
  ],
  [
    "U.S. Virgin Islands",
    "vi",
    "1",
    24,
    ["340"]
  ],
  [
    "Uganda",
    "ug",
    "256"
  ],
  [
    "Ukraine (Україна)",
    "ua",
    "380"
  ],
  [
    "United Arab Emirates (‫الإمارات العربية المتحدة‬‎)",
    "ae",
    "971"
  ],
  [
    "United Kingdom",
    "gb",
    "44",
    0
  ],
  [
    "United States",
    "us",
    "1",
    0
  ],
  [
    "Uruguay",
    "uy",
    "598"
  ],
  [
    "Uzbekistan (Oʻzbekiston)",
    "uz",
    "998"
  ],
  [
    "Vanuatu",
    "vu",
    "678"
  ],
  [
    "Vatican City (Città del Vaticano)",
    "va",
    "39",
    1,
    ["06698"]
  ],
  [
    "Venezuela",
    "ve",
    "58"
  ],
  [
    "Vietnam (Việt Nam)",
    "vn",
    "84"
  ],
  [
    "Wallis and Futuna (Wallis-et-Futuna)",
    "wf",
    "681"
  ],
  [
    "Western Sahara (‫الصحراء الغربية‬‎)",
    "eh",
    "212",
    1,
    ["5288", "5289"]
  ],
  [
    "Yemen (‫اليمن‬‎)",
    "ye",
    "967"
  ],
  [
    "Zambia",
    "zm",
    "260"
  ],
  [
    "Zimbabwe",
    "zw",
    "263"
  ],
  [
    "Åland Islands",
    "ax",
    "358",
    1,
    ["18"]
  ]
], Be = Ie.map(([t, i, u, d = 0, s = null]) => ({
  name: t,
  iso2: i.toUpperCase(),
  dialCode: u,
  priority: d,
  areaCodes: s
}));
function Te(t, i) {
  if (t.setSelectionRange)
    t.focus(), t.setSelectionRange(i, i);
  else if ("createTextRange" in t && typeof t.createTextRange == "function") {
    const u = t.createTextRange();
    u.collapse(true), u.moveEnd("character", i), u.moveStart("character", i), u.select();
  }
}
const Ne = [
  {
    name: "allCountries",
    type: Array,
    default: Be,
    description: "All countries that are used in <code>libphonenumber-js</code>, can be overridden by this prop",
    inDemo: false
  },
  {
    name: "autoFormat",
    type: Boolean,
    default: true,
    description: "Auto update the input to the formatted phone number when it's valid",
    inDemo: true
  },
  {
    name: "customValidate",
    type: [Boolean, RegExp],
    default: false,
    description: "Custom validation RegExp for input",
    inDemo: false
  },
  {
    name: "defaultCountry",
    default: "",
    type: [String, Number],
    description: "Default country (by iso2 or dialCode), will override the country fetched from IP address of user",
    inDemo: false
  },
  {
    name: "disabled",
    default: false,
    type: Boolean,
    description: "Disable <code>vue-tel-input</code>, including the input & flag dropdown",
    inDemo: false
  },
  {
    name: "autoDefaultCountry",
    default: true,
    type: Boolean,
    description: "To fetch default country based on IP address of user",
    inDemo: false
  },
  {
    name: "dropdownOptions",
    type: Object,
    description: "Options for dropdown, see below",
    inDemo: false
  },
  {
    name: "dropdownOptions.ariaLabel",
    default: "Country Code Selector",
    type: String,
    description: "Aria label for the country code selector dropdown",
    inDemo: false
  },
  {
    name: "dropdownOptions.disabled",
    default: false,
    type: Boolean,
    description: "Disable dropdown",
    inDemo: false
  },
  {
    name: "dropdownOptions.showDialCodeInList",
    default: true,
    type: Boolean,
    description: "Show dial code in the dropdown list",
    inDemo: true
  },
  {
    name: "dropdownOptions.showDialCodeInSelection",
    default: false,
    type: Boolean,
    description: "Show dial code in the dropdown selection",
    inDemo: true
  },
  {
    name: "dropdownOptions.showFlags",
    default: true,
    type: Boolean,
    description: "Show flags in the dropdown selection and list",
    inDemo: true
  },
  {
    name: "dropdownOptions.showSearchBox",
    default: false,
    type: Boolean,
    description: "Show country search box",
    inDemo: true
  },
  {
    name: "dropdownOptions.searchBoxPlaceholder",
    default: "",
    type: String,
    description: "Placeholder for the search box",
    inDemo: false
  },
  {
    name: "dropdownOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native dropdown <code>tabindex</code> attribute",
    inDemo: false
  },
  {
    name: "ignoredCountries",
    default: [],
    type: Array,
    description: "List of countries will NOT be shown on the dropdown",
    inDemo: false
  },
  {
    name: "inputOptions",
    type: Object,
    description: "Options for input, see below",
    inDemo: false
  },
  {
    name: "inputOptions.autocomplete",
    type: String,
    default: "on",
    description: "Native input <code>autocomplete</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.autofocus",
    type: Boolean,
    default: false,
    description: "Native input <code>autofocus</code> attribute",
    inDemo: false
  },
  // {
  //   name: 'inputOptions.dynamicPlaceholder',
  //   default: false,
  //   type: Boolean,
  //   description: 'Placeholder as a sample phone number in the current country',
  //   inDemo: false,
  // },
  {
    name: "inputOptions.aria-describedby",
    default: "",
    type: String,
    description: "Native input <code>aria-describedby</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.id",
    default: "",
    type: String,
    description: "Native input <code>id</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.maxlength",
    default: 25,
    type: Number,
    description: "Native input <code>maxlength</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.name",
    default: "telephone",
    type: String,
    description: "Native input <code>name</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.showDialCode",
    default: false,
    type: Boolean,
    description: "Show dial code in input",
    inDemo: false
  },
  {
    name: "inputOptions.placeholder",
    default: "Enter a phone number",
    type: String,
    description: "Placeholder for the input",
    inDemo: false
  },
  {
    name: "inputOptions.readonly",
    default: false,
    type: Boolean,
    description: "Native input <code>readonly</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.required",
    default: false,
    type: Boolean,
    description: "Native input <code>required</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.tabindex",
    default: 0,
    type: Number,
    description: "Native input <code>tabindex</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.type",
    default: "tel",
    type: String,
    description: "Native input <code>type</code> attribute",
    inDemo: false
  },
  {
    name: "inputOptions.styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the <code>input</code>",
    inDemo: false
  },
  {
    name: "invalidMsg",
    default: "",
    type: String,
    description: "",
    inDemo: false
  },
  {
    name: "mode",
    default: "auto",
    type: String,
    description: "Allowed values: <code>'auto'</code> (Default set by phone),  <code>'international'</code> (Format number with the dial code i.e. + 61), <code>'national'</code> (Format number without dial code i.e. 0321232)",
    inDemo: true,
    options: ["auto", "national", "international"]
  },
  {
    name: "onlyCountries",
    default: [],
    type: Array,
    description: "List of countries will be shown on the dropdown",
    inDemo: false
  },
  {
    name: "preferredCountries",
    default: [],
    type: Array,
    description: "Preferred countries list, will be on top of the dropdown",
    inDemo: false
  },
  {
    name: "styleClasses",
    default: "",
    type: [String, Array, Object],
    description: "Custom classes for the wrapper",
    inDemo: false
  },
  {
    name: "validCharactersOnly",
    default: false,
    type: Boolean,
    description: "Only allow valid characters in a phone number (will also verify in <code>mounted</code>, so phone number with invalid characters will be shown as an empty string)",
    inDemo: false
  },
  {
    name: "strictValidation",
    default: false,
    type: Boolean,
    description: "Use strict phone number validation with full metadata (libphonenumber-js/max). When false (default), uses minimal metadata for smaller bundle size. When true, validates phone number patterns more precisely but increases bundle size by ~145KB.",
    inDemo: false
  }
], _ = [...Ne].reduce((t, i) => {
  if (i.name.includes(".")) {
    const [u, d] = i.name.split(".");
    t[u] ? Object.assign(t[u], { [d]: i.default }) : Object.assign(t, { [u]: { [d]: i.default } });
  } else
    Object.assign(t, { [i.name]: i.default });
  return t;
}, {}), G = {
  options: { ..._ }
};
function c(t) {
  const i = G.options[t];
  return typeof i > "u" ? G.options[t] : i;
}
function B(t) {
  return t == null ? void 0 : t.toLowerCase();
}
function M(t) {
  return t == null ? void 0 : t.toUpperCase();
}
let C = null;
function J(t, i, u = false) {
  return u ? i ? parsePhoneNumberFromString(t, i) : parsePhoneNumberFromString(t) : i ? parsePhoneNumberFromString(t, i) : parsePhoneNumberFromString(t);
}
function Z() {
  return C !== null;
}
const Ee = {
  beforeMount(t, i, u) {
    if (typeof i.value != "function") {
      const d = u.context.name;
      let s = `[Vue-click-outside:] provided expression ${i.expression} is not a function, but has to be`;
      d && (s += `Found in component ${d}`), console.warn(s);
    }
    t.clickOutsideEvent = function(d) {
      const s = d.composedPath ? d.composedPath() : d.path;
      t === d.target || t.contains(d.target) || s.includes(t) || i.value(d, t);
    }, (void 0).body.addEventListener("click", t.clickOutsideEvent);
  },
  unmounted(t) {
    (void 0).body.removeEventListener("click", t.clickOutsideEvent);
  }
}, Re = ["aria-label", "aria-expanded", "tabindex"], Ve = { class: "vti__selection" }, ze = {
  key: 1,
  class: "vti__country-code"
}, Ae = { class: "vti__dropdown-arrow" }, Fe = {
  key: 0,
  class: "vti__search_box_container"
}, Le = ["placeholder"], je = ["onClick", "onMousemove", "aria-selected"], Ge = { key: 1 }, qe = ["type", "autocomplete", "autofocus", "disabled", "id", "maxlength", "name", "placeholder", "readonly", "required", "tabindex", "value", "aria-describedby"], Ke = /* @__PURE__ */ defineComponent({
  name: "VueTelInput",
  directives: {
    clickOutside: Ee
  },
  __name: "vue-tel-input",
  props: /* @__PURE__ */ mergeModels({
    allCountries: {
      type: Array,
      default: () => c("allCountries")
    },
    autoFormat: {
      type: Boolean,
      default: () => c("autoFormat")
    },
    customValidate: {
      type: [Boolean, RegExp],
      default: () => c("customValidate")
    },
    defaultCountry: {
      // Default country code, ie: 'AU'
      // Will override the current country of user
      type: [String, Number],
      default: () => c("defaultCountry")
    },
    disabled: {
      type: Boolean,
      default: () => c("disabled")
    },
    autoDefaultCountry: {
      type: Boolean,
      default: () => c("autoDefaultCountry")
    },
    dropdownOptions: {
      type: Object,
      default: () => c("dropdownOptions")
    },
    ignoredCountries: {
      type: Array,
      default: () => c("ignoredCountries")
    },
    inputOptions: {
      type: Object,
      default: () => c("inputOptions")
    },
    invalidMsg: {
      type: String,
      default: () => c("invalidMsg")
    },
    mode: {
      type: String,
      default: () => c("mode")
    },
    onlyCountries: {
      type: Array,
      default: () => c("onlyCountries")
    },
    preferredCountries: {
      type: Array,
      default: () => c("preferredCountries")
    },
    validCharactersOnly: {
      type: Boolean,
      default: () => c("validCharactersOnly")
    },
    styleClasses: {
      type: [String, Array, Object],
      default: () => c("styleClasses")
    },
    strictValidation: {
      type: Boolean,
      default: () => c("strictValidation")
    }
  }, {
    modelValue: { type: String },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ mergeModels([
    "blur",
    "close",
    "country-changed",
    "enter",
    "focus",
    "on-input",
    "open",
    "space",
    "validate"
  ], ["update:modelValue"]),
  setup(t, { expose: i, emit: u }) {
    const d = shallowRef(), s = shallowRef(), b = shallowRef(), f = u, a = t, q = ref(Z()), S = useModel(t, "modelValue");
    watch(S, (e, o) => {
      ie() ? n.phone = e ?? "" : nextTick(() => {
        n.phone = o ?? "", K();
      });
    });
    const n = reactive({
      phone: "",
      activeCountryCode: void 0,
      open: false,
      finishMounted: false,
      selectedIndex: null,
      typeToFindInput: "",
      typeToFindTimer: void 0,
      dropdownOpenDirection: "below",
      parsedPlaceholder: a.inputOptions.placeholder,
      searchQuery: ""
    });
    watch(() => n.open, (e) => {
      e ? (he(), f("open")) : f("close");
    });
    const N = computed(() => a.onlyCountries.length ? a.allCountries.filter(({ iso2: e }) => a.onlyCountries.some((o) => M(o) === e)) : a.ignoredCountries.length ? a.allCountries.filter(
      ({ iso2: e }) => !a.ignoredCountries.includes(M(e)) && !a.ignoredCountries.includes(B(e))
    ) : a.allCountries), z = computed(() => P(n.activeCountryCode));
    watch(z, (e, o) => {
      if (!e && (o != null && o.iso2)) {
        n.activeCountryCode = o.iso2;
        return;
      }
      e != null && e.iso2 && f("country-changed", e);
    });
    const Y = computed(() => {
      var o;
      const e = B(a.mode);
      return e === "auto" ? (o = n.phone) != null && o.startsWith("+") ? "international" : "national" : ["national", "international", "e.164", "rfc3966", "idd"].includes(e) ? e : (console.error('Invalid value of prop "mode"'), "international");
    }), g = computed(() => {
      const o = [...ne(a.preferredCountries).map((p) => ({ ...p, preferred: true })), ...N.value];
      if (!a.dropdownOptions.showSearchBox)
        return o;
      const r = n.searchQuery.toLowerCase().replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?-_]/g, "");
      return o.filter(
        (p) => new RegExp(r, "i").test(p.name) || new RegExp(r, "i").test(p.iso2) || new RegExp(r, "i").test(p.dialCode)
      );
    }), m = computed(() => {
      var l;
      q.value;
      const e = n.phone.startsWith("+") ? J(n.phone, void 0, a.strictValidation) : J(n.phone, n.activeCountryCode, a.strictValidation), o = {
        country: e == null ? void 0 : e.country,
        countryCode: e == null ? void 0 : e.country,
        formatted: n.phone,
        valid: e == null ? void 0 : e.isValid(),
        possible: (l = e == null ? void 0 : e.isPossible) == null ? void 0 : l.call(e),
        nationalNumber: e == null ? void 0 : e.nationalNumber
      };
      return o.valid && (o.formatted = e == null ? void 0 : e.format(M(Y.value))), e != null && e.country && (a.ignoredCountries.length || a.onlyCountries.length) && !P(e.country) && (o.valid = false, o.possible = false, e.country = null), e ? {
        ...o,
        ...e
      } : o;
    });
    watch(() => m.value.countryCode, (e) => {
      e && (n.activeCountryCode = e);
    }), watch(() => m.value.valid, () => {
      f("validate", m.value);
    }), watch(() => m.value.formatted, (e) => {
      !a.autoFormat || a.customValidate || (E(e), nextTick(() => {
        e && !S.value && (n.phone = e);
      }));
    }), watch(() => a.inputOptions.placeholder, X);
    function X() {
      n.parsedPlaceholder = a.inputOptions.placeholder;
    }
    function ne(e = []) {
      return e.map(P).filter(Boolean);
    }
    function P(e = "") {
      return N.value.find((o) => o.iso2 === M(e));
    }
    function oe(e, o) {
      const l = n.selectedIndex === e, r = e === a.preferredCountries.length - 1, p = a.preferredCountries.some((A) => M(A) === o);
      return {
        highlighted: l,
        "last-preferred": r,
        preferred: p
      };
    }
    function w(e) {
      var l, r, p;
      let o = e;
      if (typeof o == "string" && (o = P(o)), !!o) {
        if (((l = n.phone) == null ? void 0 : l[0]) === "+" && o.iso2 && m.value.nationalNumber) {
          n.activeCountryCode = o.iso2, n.phone = ((r = parsePhoneNumberFromString(
            m.value.nationalNumber,
            o.iso2
          )) == null ? void 0 : r.formatInternational()) ?? "";
          return;
        }
        if ((p = a.inputOptions) != null && p.showDialCode && o) {
          n.phone = `+${o.dialCode}`, n.activeCountryCode = o.iso2;
          return;
        }
        n.activeCountryCode = o.iso2, E(n.phone);
      }
    }
    function ie() {
      return a.validCharactersOnly && !/^[()\-+0-9\s]*$/.test(n.phone) ? false : a.customValidate ? re() : true;
    }
    function re() {
      return a.customValidate instanceof RegExp ? a.customValidate.test(n.phone) : false;
    }
    function K() {
      var e;
      (e = b.value) == null || e.setCustomValidity(m.value.valid ? "" : a.invalidMsg), E(n.phone);
    }
    function E(e) {
      S.value = e, f("on-input", e, m.value, b.value);
    }
    function se(e) {
      f("blur", e);
    }
    function le(e) {
      Te(b.value, n.phone.length), f("focus", e);
    }
    function de(e) {
      f("enter", e);
    }
    function ue(e) {
      f("space", e);
    }
    function ce() {
      var e;
      (e = b.value) == null || e.focus();
    }
    function pe() {
      var e;
      (e = b.value) == null || e.blur();
    }
    function H() {
      a.disabled || a.dropdownOptions.disabled || (n.searchQuery = "", n.open = !n.open);
    }
    function fe() {
      n.open = false;
    }
    function me(e) {
      if (e.keyCode === 40) {
        e.preventDefault(), n.open = true, n.selectedIndex === null ? n.selectedIndex = 0 : n.selectedIndex = Math.min(g.value.length - 1, n.selectedIndex + 1);
        const o = s.value.children[n.selectedIndex];
        o.focus(), o.offsetTop + o.clientHeight > s.value.scrollTop + s.value.clientHeight && (s.value.scrollTop = o.offsetTop - s.value.clientHeight + o.clientHeight);
      } else if (e.keyCode === 38) {
        e.preventDefault(), n.open = true, n.selectedIndex === null ? n.selectedIndex = g.value.length - 1 : n.selectedIndex = Math.max(0, n.selectedIndex - 1);
        const o = s.value.children[n.selectedIndex];
        o.focus(), o.offsetTop < s.value.scrollTop && (s.value.scrollTop = o.offsetTop);
      } else if (e.keyCode === 13)
        n.selectedIndex !== null && w(g.value[n.selectedIndex]), n.open = !n.open;
      else if (n.open) {
        n.typeToFindInput += e.key, clearTimeout(n.typeToFindTimer), n.typeToFindTimer = setTimeout(() => {
          n.typeToFindInput = "";
        }, 700);
        const o = g.value.slice(a.preferredCountries.length).findIndex((l) => B(l.name).startsWith(n.typeToFindInput));
        if (o >= 0) {
          n.selectedIndex = a.preferredCountries.length + o;
          const l = s.value.children[n.selectedIndex], r = l.offsetTop < s.value.scrollTop, p = l.offsetTop + l.clientHeight > s.value.scrollTop + s.value.clientHeight;
          (r || p) && (s.value.scrollTop = l.offsetTop - s.value.clientHeight / 2);
        }
      }
    }
    function U() {
      n.selectedIndex = g.value.map((e) => e.iso2).indexOf(n.activeCountryCode), n.open = false;
    }
    function he() {
      (void 0).innerHeight - d.value.getBoundingClientRect().bottom > 200 ? n.dropdownOpenDirection = "below" : n.dropdownOpenDirection = "above";
    }
    return i({
      focus: ce,
      blur: pe
    }), (e, o) => {
      const l = resolveDirective("click-outside");
      return openBlock(), createElementBlock("div", {
        ref_key: "refRoot",
        ref: d,
        class: normalizeClass(["vue-tel-input", t.styleClasses, { disabled: t.disabled }])
      }, [
        withDirectives((openBlock(), createElementBlock("div", {
          "aria-label": t.dropdownOptions.ariaLabel,
          "aria-haspopup": "listbox",
          "aria-expanded": n.open,
          role: "button",
          class: normalizeClass(["vti__dropdown", { open: n.open, disabled: t.dropdownOptions.disabled }]),
          tabindex: t.dropdownOptions.tabindex,
          onKeydown: [
            me,
            withKeys(H, ["space"]),
            withKeys(U, ["esc"]),
            withKeys(U, ["tab"])
          ],
          onClick: H
        }, [
          createElementVNode("span", Ve, [
            t.dropdownOptions.showFlags ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: normalizeClass(["vti__flag", unref(B)(n.activeCountryCode)])
            }, null, 2)) : createCommentVNode("", true),
            t.dropdownOptions.showDialCodeInSelection ? (openBlock(), createElementBlock("span", ze, " +" + toDisplayString(z.value && z.value.dialCode), 1)) : createCommentVNode("", true),
            renderSlot(e.$slots, "arrow-icon", {
              open: n.open
            }, () => [
              createElementVNode("span", Ae, toDisplayString(n.open ? "▲" : "▼"), 1)
            ])
          ]),
          n.open ? (openBlock(), createElementBlock("ul", {
            key: 0,
            ref_key: "refList",
            ref: s,
            class: normalizeClass(["vti__dropdown-list", n.dropdownOpenDirection]),
            role: "listbox"
          }, [
            t.dropdownOptions.showSearchBox ? (openBlock(), createElementBlock("div", Fe, [
              renderSlot(e.$slots, "search-icon"),
              withDirectives(createElementVNode("input", {
                class: normalizeClass(["vti__input", "vti__search_box"]),
                "aria-label": "Search by country name or country code",
                placeholder: t.dropdownOptions.searchBoxPlaceholder || (g.value.length ? g.value[0].name : ""),
                type: "text",
                "onUpdate:modelValue": o[0] || (o[0] = (r) => n.searchQuery = r),
                onClick: o[1] || (o[1] = withModifiers(() => {
                }, ["stop"]))
              }, null, 8, Le), [
                [vModelText, n.searchQuery]
              ])
            ])) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(g.value, (r, p) => (openBlock(), createElementBlock("li", {
              role: "option",
              class: normalizeClass(["vti__dropdown-item", oe(p, r.iso2)]),
              key: r.iso2 + (r.preferred ? "-preferred" : ""),
              tabindex: "-1",
              onClick: (A) => w(r),
              onMousemove: (A) => n.selectedIndex = p,
              "aria-selected": n.activeCountryCode === r.iso2 && !r.preferred
            }, [
              t.dropdownOptions.showFlags ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["vti__flag", unref(B)(r.iso2)])
              }, null, 2)) : createCommentVNode("", true),
              createElementVNode("strong", null, toDisplayString(r.name), 1),
              t.dropdownOptions.showDialCodeInList ? (openBlock(), createElementBlock("span", Ge, " +" + toDisplayString(r.dialCode), 1)) : createCommentVNode("", true)
            ], 42, je))), 128))
          ], 2)) : createCommentVNode("", true)
        ], 42, Re)), [
          [l, fe]
        ]),
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": o[2] || (o[2] = (r) => n.phone = r),
          ref_key: "refInput",
          ref: b,
          type: t.inputOptions.type,
          autocomplete: t.inputOptions.autocomplete,
          autofocus: t.inputOptions.autofocus,
          class: normalizeClass(["vti__input", "vti__phone", t.inputOptions.styleClasses]),
          disabled: t.disabled,
          id: t.inputOptions.id,
          maxlength: t.inputOptions.maxlength,
          name: t.inputOptions.name,
          placeholder: n.parsedPlaceholder,
          readonly: t.inputOptions.readonly,
          required: t.inputOptions.required,
          tabindex: t.inputOptions.tabindex,
          value: S.value,
          "aria-describedby": t.inputOptions["aria-describedby"],
          onBlur: se,
          onFocus: le,
          onInput: K,
          onKeyup: [
            withKeys(de, ["enter"]),
            withKeys(ue, ["space"])
          ]
        }, null, 42, qe), [
          [vModelDynamic, n.phone]
        ]),
        renderSlot(e.$slots, "icon-right")
      ], 2);
    };
  }
});
const defaultCountry = "CM";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Phone",
  __ssrInlineRender: true,
  setup(__props) {
    const telOption = {
      placeholder: ""
    };
    const dropDownOptions = {
      showDialCodeInSelection: true,
      showFlags: true
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Ke), mergeProps({
        mode: "international",
        defaultCountry,
        inputOptions: telOption,
        autoDefaultCountry: false,
        dropdownOptions: dropDownOptions,
        class: "text-text-primary text-sm h-9 py-2"
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Input/Phone.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_5 = Object.assign(_sfc_main, { __name: "InputPhone" });

export { __nuxt_component_5 as _ };
//# sourceMappingURL=Phone-jhFUo5M2.mjs.map
