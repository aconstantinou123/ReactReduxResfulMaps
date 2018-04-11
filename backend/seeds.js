// use favourite_countries 

db.countries.insert({
    alpha3Code: "CHN",
    area: 9640011,
    borders: ["AFG", "BTN", "MMR", "HKG", "IND", "KAZ", "PRK", "KGZ", "LAO", "MAC", "MNG", "PAK", "RUS", "TJK", "VNM"],
    flag: "https://restcountries.eu/data/chn.svg",
    latlng:[35, 105],
    name:"China",
    nativeName: "中国",
    region: "Asia"
})

db.countries.insert({
    alpha3Code: "RUS",
    area: 17124442,
    borders: ["AZE", "BLR", "CHN", "EST", "FIN", "GEO", "KAZ", "PRK", "LVA", "LTU", "MNG", "NOR", "POL", "UKR"],
    flag: "https://restcountries.eu/data/rus.svg",
    latlng:[60, 100],
    name:"Russia",
    nativeName: "Россия",
    region: "Europe"
})

db.countries.insert({
    alpha3Code: "VNM",
    area: 331212,
    borders: ["KHM", "CHN", "LAO"],
    flag: "https://restcountries.eu/data/vnm.svg",
    latlng:[16.16666666, 107.83333333],
    name:"Viet Nam",
    nativeName: "Việt Nam",
    region: "Asia"
})


db.my_trips.insert({
    flag: "https://restcountries.eu/data/chn.svg",
    latlng:[35, 105],
    name:"China",
    dates: "24/06/2017-29/07/17",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos:[]
})

db.my_trips.insert({
    flag: "https://restcountries.eu/data/rus.svg",
    latlng:[60, 100],
    name:"Russia",
    dates: "22/12/2016-05/01/17",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos:[]
})

db.my_trips.insert({
    flag: "https://restcountries.eu/data/vnm.svg",
    latlng:[16.16666666, 107.83333333],
    name:"Viet Nam",
    dates: "15/02/2015-11/11/15",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    photos:[]
})