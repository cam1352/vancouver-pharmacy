const fs = require('fs');
const path = require('path');

const bcLocations = [
  // Major Cities
  "Vancouver", "Surrey", "Burnaby", "Richmond", "Coquitlam", "Langley", "Delta", "North Vancouver", "Maple Ridge", "New Westminster", "Port Coquitlam", "West Vancouver", "Port Moody", "White Rock", "Pitt Meadows",
  // Vancouver Island
  "Victoria", "Saanich", "Nanaimo", "Langford", "Duncan", "Courtenay", "Campbell River", "Parksville", "Sidney", "Sooke", "Esquimalt", "Oak Bay", "Colwood", "Comox", "Qualicum Beach",
  // Interior / Okanagan
  "Kelowna", "Kamloops", "Vernon", "Penticton", "West Kelowna", "Salmon Arm", "Cranbrook", "Castlegar", "Nelson", "Trail", "Merritt", "Summerland", "Oliver", "Osoyoos", "Peachland",
  // Northern BC
  "Prince George", "Fort St. John", "Dawson Creek", "Terrace", "Prince Rupert", "Williams Lake", "Quesnel", "Smithers", "Kitimat", "Vanderhoof",
  // Fraser Valley
  "Abbotsford", "Chilliwack", "Mission", "Hope", "Agassiz", "Harrison Hot Springs",
  // Vancouver Neighborhoods
  "Kitsilano", "Yaletown", "Gastown", "Coal Harbour", "West End", "Mount Pleasant", "Commercial Drive", "Kerrisdale", "Dunbar", "Point Grey", "Marpole", "Killarney", "Renfrew", "Hastings-Sunrise", "Grandview-Woodland", "Riley Park", "Shaughnessy", "South Cambie", "Sunset", "Victoria-Fraserview",
  // Surrey Neighborhoods
  "Guildford", "Fleetwood", "Newton", "Cloverdale", "South Surrey", "Whalley", "Panorama Ridge", "Sullivan Station", "Fraser Heights", "Morgan Creek", "Ocean Park", "Crescent Beach",
  // Burnaby Neighborhoods
  "Metrotown", "Brentwood", "Lougheed", "Edmonds", "Highgate", "Willingdon Heights", "Capitol Hill", "Burnaby Heights",
  // Richmond Neighborhoods
  "Steveston", "Ironwood", "Seafair", "Broadmoor", "Terra Nova", "Brighouse", "Queensborough"
];

const locations = bcLocations.map((name, index) => {
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return {
    id: index + 1,
    name: name,
    slug: slug,
    title: `Pharmacy Services in ${name}, BC | Vancouver Pharmacy`,
    description: `Top-rated clinical pharmacy and free prescription delivery in ${name}.`,
    content: `Are you looking for a reliable local pharmacy in ${name}? We provide fast prescription transfers, medication reviews, and free express delivery directly to your door in the ${name} area. Whether you need blister packaging, minor ailment prescribing, or simple prescription refills, our clinical pharmacists are here to serve the ${name} community with exceptional care.`
  };
});

fs.writeFileSync(path.join(__dirname, 'src/data/locations.json'), JSON.stringify(locations, null, 2));
console.log(`Generated ${locations.length} BC locations.`);
