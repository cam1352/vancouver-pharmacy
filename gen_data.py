import json

# 1. 30 Commercial Services
services = [
    "Restaurant Cleaning", "Cafe & Bakery Cleaning", "Doctor's Office Cleaning", "Physiotherapy Clinic Cleaning",
    "Dental Clinic Cleaning", "Corporate Office Cleaning", "Retail Store Cleaning", "Gym & Fitness Center Cleaning",
    "Daycare & Preschool Cleaning", "Warehouse & Industrial Cleaning", "Car Dealership Cleaning", "Bank & Financial Institution Cleaning",
    "Hotel & Hospitality Cleaning", "Yoga Studio Cleaning", "Salon & Spa Cleaning", "Veterinary Clinic Cleaning",
    "Shopping Mall Cleaning", "Supermarket & Grocery Cleaning", "Event Venue Cleaning", "Church & Place of Worship Cleaning",
    "Movie Theater Cleaning", "Auto Repair Shop Cleaning", "Pharmacy Cleaning", "Library Cleaning",
    "Museum & Art Gallery Cleaning", "Tech Startup Office Cleaning", "Co-working Space Cleaning", "Government Building Cleaning",
    "Post-Construction Commercial Cleaning", "Strata & Multi-Tenant Building Cleaning"
]

services_data = []
for i, s in enumerate(services):
    slug = s.lower().replace(" ", "-").replace("&", "and").replace("'", "").replace(",", "")
    services_data.append({
        "id": i + 1,
        "title": s,
        "slug": slug,
        "description": f"Professional and compliant {s.lower()} services in Vancouver. We ensure a sanitized, welcoming environment for your staff and clients.",
        "content": f"Our {s.lower()} team is highly trained in industry-specific sanitation protocols. Whether it's daily maintenance or deep cleaning, we use hospital-grade disinfectants and eco-friendly products to keep your facility pristine."
    })

with open("src/data/services.json", "w", encoding="utf-8") as f:
    json.dump(services_data, f, indent=2)

# 2. 100 Locations (Cities + Sub-locations)
cities = ["Vancouver", "Burnaby", "Richmond", "Surrey", "Coquitlam", "New Westminster", "Langley", "Delta", "North Vancouver", "West Vancouver", "Port Coquitlam", "Port Moody", "Pitt Meadows", "Maple Ridge", "White Rock"]
sub_locations = [
    "Lynn Valley", "Deep Cove", "Edgemont Village", "Lonsdale", "Kitsilano", "Yaletown", "Gastown", "Coal Harbour", "West End", "Mount Pleasant",
    "Commercial Drive", "Main Street", "Kerrisdale", "Dunbar", "Point Grey", "UBC", "Shaughnessy", "Oakridge", "Marpole", "Killarney",
    "Metrotown", "Brentwood", "Edmonds", "Lougheed", "Highgate", "Steveston", "Ironwood", "Cambie", "Guildford", "Fleetwood",
    "Newton", "Cloverdale", "South Surrey", "Whalley", "Walnut Grove", "Willoughby", "Fort Langley", "Brookswood", "Aldergrove", "Tsawwassen",
    "Ladner", "North Delta", "Ambleside", "Dundarave", "British Properties", "Horseshoe Bay", "Caulfeild", "Lynn Creek", "Seymour", "Capilano",
    "Burquitlam", "Austin Heights", "Maillardville", "Westwood Plateau", "Mary Hill", "Citadel", "Heritage Mountain", "Newport Village", "Queensborough", "Sapperton",
    "Uptown New West", "Downtown New West", "Fraser Heights", "Panorama Ridge", "Sullivan Station", "Clayton Heights", "Morgan Creek", "Crescent Beach", "Ocean Park", "Sunnyside",
    "Steveston Village", "Seafair", "Broadmoor", "Terra Nova", "Brighouse", "Ironwood", "East Richmond", "Queensborough", "Annacis Island", "Tilbury",
    "Grandview-Woodland", "Hastings-Sunrise", "Renfrew-Collingwood", "Sunset", "Victoria-Fraserview", "Riley Park", "South Cambie", "Arbutus Ridge", "Strathcona", "Downtown Eastside",
    "West Point Grey", "Southlands", "False Creek", "Chinatown", "Punjabi Market", "Little Italy", "Greektown", "Japantown", "Crosstown", "Granville Island"
]

locations = cities + sub_locations[:85] # Total 100
locations_data = []
for i, loc in enumerate(locations):
    slug = loc.lower().replace(" ", "-").replace("'", "")
    locations_data.append({
        "id": i + 1,
        "name": loc,
        "slug": slug,
        "description": f"Top-rated commercial and residential cleaning services in {loc}.",
        "content": f"Are you looking for reliable cleaning in {loc}? We provide daily, weekly, and monthly cleaning solutions tailored to businesses and homes in the {loc} area."
    })

with open("src/data/locations.json", "w", encoding="utf-8") as f:
    json.dump(locations_data, f, indent=2)

print("Generated services and locations data.")
