const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const recentSearchList = document.getElementById("recent-search-list");

// Function to load recent searches from localStorage
function loadRecentSearches() {
const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
recentSearchList.innerHTML = ""; // Clear the list

// Ensure that the parent list can wrap items
recentSearchList.style.display = "flex";
recentSearchList.style.flexWrap = "wrap"; // This allows items to move to the next line when space is filled
recentSearchList.style.gap = "10px"; // Optional: Space between items

recentSearches.forEach((search) => {
  const listItem = document.createElement("li");
  listItem.textContent = search;
  listItem.style.display = "flex";
  listItem.style.maxWidth = "calc(33% - 10px)"; // Set a max width for each item (e.g., 33% of the container)
  listItem.style.alignItems = "center"; // Center vertically
  listItem.style.justifyContent = "center"; // Center horizontally
  listItem.style.padding = "5px 15px"; 
  listItem.style.cursor = "pointer";
  listItem.style.border = "1px solid #ccc";
  listItem.style.borderRadius = "15px";
  listItem.style.backgroundColor = "#f8f9fa";
  listItem.style.whiteSpace = "nowrap"; // Prevent text wrapping
  listItem.style.fontSize = "10px"; // Adjust font size for better centering
  listItem.addEventListener("click", () => {
      searchInput.value = search; // Fill the search bar when clicked
  });
  recentSearchList.appendChild(listItem);
});
}
function loadRecentSearches() {
const recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
recentSearchList.innerHTML = ""; // Clear the list

// Ensure that the parent list can wrap items
recentSearchList.style.display = "flex";
recentSearchList.style.flexWrap = "wrap"; // This allows items to move to the next line when space is filled
recentSearchList.style.gap = "10px"; // Optional: Space between items

recentSearches.forEach((search, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = search;
  listItem.style.display = "flex";
  listItem.style.maxWidth = "calc(33% - 10px)"; // Set a max width for each item (e.g., 33% of the container)
  listItem.style.alignItems = "center"; // Center vertically
  listItem.style.justifyContent = "center"; // Center horizontally
  listItem.style.padding = "5px 15px"; 
  listItem.style.cursor = "pointer";
  listItem.style.border = "1px solid #ccc";
  listItem.style.borderRadius = "15px";
  listItem.style.backgroundColor = "#f8f9fa";
  listItem.style.whiteSpace = "nowrap"; // Prevent text wrapping
  listItem.style.fontSize = "10px"; // Adjust font size for better centering
  listItem.addEventListener("click", () => {
      searchInput.value = search; // Fill the search bar when clicked
  });

  // Create a cancel button with an "X" (cross) mark
  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = '✖'; // Unicode for cross mark
  cancelButton.style.marginLeft = "10px";
  cancelButton.style.fontSize = "12px"; // Adjust the font size for the "X"
  cancelButton.style.padding = "0 5px";
  cancelButton.style.cursor = "pointer";
  cancelButton.style.border = "none";
  cancelButton.style.backgroundColor = "transparent";
  cancelButton.style.color = "#black"; // Red color for the cross
  cancelButton.style.fontWeight = "bold";

  cancelButton.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent the list item click event from triggering
      recentSearches.splice(index, 1); // Remove the clicked search from the array
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches)); // Update the localStorage
      loadRecentSearches(); // Re-render the list
  });

  // Append the cancel button to the list item
  listItem.appendChild(cancelButton);

  // Append the list item to the list
  recentSearchList.appendChild(listItem);
});
}


// Function to handle form submission
searchForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent default form submission
  const query = searchInput.value.trim();

  if (query) {
    // Save the search query to localStorage
    let recentSearches = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (!recentSearches.includes(query)) {
      if (recentSearches.length >= 20) recentSearches.pop(); // Limit to 5 items
      recentSearches.unshift(query); // Add new search to the top
      localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
    }

    // Clear the input field and reload recent searches
    searchInput.value = "";
    loadRecentSearches();
  }
});

// Load recent searches on page load
document.addEventListener("DOMContentLoaded", loadRecentSearches);


const csvData = `name,description,type
Plumber,Fixes pipes and leaks,home services
Electrician,Installs electrical systems,home services
Handyman,Repairs and maintains homes,home services
Carpenter,Builds and repairs furniture,home services
HVAC Technician,Repairs and maintains HVAC systems,home services
Roofer,Repairs and replaces roofs,home services
Locksmith,Locks and key services,home services
Painter,Applies paint to surfaces,home services
Pest Control Specialist,Eliminates pests from homes,home services
Home Security Installer,Installs home security systems,home services
Window Installer,Installs windows and glass,home services
Insulation Specialist,Installs insulation for homes,home services
Drywall Contractor,Repairs drywall and plaster,home services
Garage Door Repair,Repairs and installs garage doors,home services
Appliance Repair Technician,Repairs household appliances,home services
Deck Builder,Builds outdoor decks,home services
Masonry Service,Repairs and installs masonry,home services
Tile Installer,Installs tiles for floors/walls,home services
General Contractor,Oversees home construction projects,home services
Floor Installer,Installs various flooring types,home services
Interior Designer,Designs and decorates interiors,home services
House Cleaning Service,Cleans and maintains homes,home services
Furniture Assembly,Assembles furniture,home services
Property Maintenance,Maintains residential properties,home services
Water Damage Restoration,Restores water damage,home services
Foundation Repair,Repairs foundation issues,home services
Gutter Cleaning,Cleans gutters and downspouts,home services
Chimney Sweep,Cleans and inspects chimneys,home services
Fireplace Installer,Installs and repairs fireplaces,home services
Pool Maintenance,Maintains and repairs pools,home services
Solar Panel Installer,Installs solar energy systems,home services
Fence Builder,Builds fences and gates,home services
Basement Waterproofing,Waterproofs basement foundations,home services
Septic Tank Service,Services and repairs septic systems,home services
Sandblasting Service,Cleans surfaces with high-pressure air,home services
Stucco Repair,Repairs stucco exteriors,home services
Mold Remediation Specialist,Remediates mold problems,home services
Water Heater Repair,Repairs and installs water heaters,home services
Plumbing Inspection,Conducts plumbing inspections,home services
Cabinet Maker,Builds custom cabinets,home services
Door Installer,Installs doors and frames,home services
Countertop Installer,Installs countertops,home services
Skylight Installer,Installs and repairs skylights,home services
Garage Organizer,Organizes garages and spaces,home services
Shed Builder,Builds storage sheds,home services
Patio Contractor,Installs outdoor patios,home services
Demolition Contractor,Demolishes structures safely,home services
Grout Cleaning,Cleans and restores grout,home services
Trash Hauling Service,Hauls away unwanted items,home services
Storm Window Installer,Installs storm windows,home services
Weatherproofing Specialist,Prevents weather-related damage,home services
Wallpaper Removal,Removes wallpaper,home services
Carpet Installer,Installs carpet and flooring,home services
Light Fixture Installation,Installs lighting fixtures,home services
Air Duct Cleaning,Cleans air ducts,home services
Ceiling Fan Installer,Installs ceiling fans,home services
Emergency Plumbing,Responds to emergency plumbing,home services
Leak Detection Service,Detects and fixes leaks,home services
Retaining Wall Builder,Builds retaining walls,home services
Structural Engineer,Evaluates building structures,home services
Excavation Service,Excavates land for construction,home services
Renovation Specialist,Specializes in home renovations,home services
General Home Repair,Repairs general home issues,home services
Energy Audit Specialist,Conducts energy efficiency audits,home services
Smart Home Installer,Installs smart home technology,home services
Fireplace Maintenance,Maintains and repairs fireplaces,home services
Driveway Installer,Installs driveways and paths,home services
Tree Removal Service,Removes trees and stumps,home services
Landscape Designer,Designs outdoor landscapes,home services
Sprinkler System Installer,Installs sprinkler systems,home services
Pergola Builder,Builds pergolas and gazebos,home services
Stone Mason,Builds stone and brick structures,home services
Exterior Painter,Paints exterior surfaces,home services
Holiday Lighting Installer,Installs holiday lights,home services
Pressure Washer Operator,Cleans surfaces using pressure,home services
Roof Inspector,Inspects roof conditions,home services
Handrail Installer,Installs handrails and supports,home services
Skylight Repair,Repairs and installs skylights,home services
Shutter Installer,Installs window shutters,home services
Doorbell Camera Installer,Installs video doorbells,home services
Greenhouse Builder,Builds greenhouses,home services
Home Theater Installer,Installs home theater systems,home services
Insulation Tester,Tests home insulation,home services
Home Warranty Inspector,Inspects and maintains warranties,home services
Soundproofing Service,Soundproofs home environments,home services
Ventilation System Installer,Installs ventilation systems,home services
Termite Control Service,Controls termite infestations,home services
Waterproofing Contractor,Waterproofs homes and basements,home services
Roof Sealing Specialist,Seals roofs against leaks,home services
Gas Line Repair,Repairs and installs gas lines,home services
Outdoor Kitchen Builder,Builds outdoor kitchens,home services
Chimney Inspector,Inspects chimneys for safety,home services
Fence Repair Specialist,Repairs and maintains fences,home services
Landscape Maintenance,Maintains outdoor landscapes,home services
Window Repair Technician,Repairs window damage,home services
Soil Testing Service,Tests soil for construction,home services
Trenching Service,Digs trenches for projects,home services
Crawl Space Cleaning,Cleans crawl spaces,home services
Wall Panel Installer,Installs wall panels,home services
Roofing Maintenance,Maintains roofing structures,home services
Appliance Installation,Installs home appliances,home services
Attic Fan Installer,Installs attic fans,home services
Drain Cleaning Specialist,Cleans and maintains drains,home services
Furniture Repair Service,Repairs and restores furniture,home services
Hardwood Floor Refinishing,Refinishes hardwood floors,home services
Metal Roof Installer,Installs and repairs metal roofs,home services
Stone Patio Builder,Builds stone patios,home services
Tuckpointing Specialist,Repairs brickwork and mortar,home services
Wallpaper Installation,Installs wallpaper,home services
Epoxy Flooring Specialist,Specializes in epoxy flooring,home services
Cabinet Refacing,Refaces and updates cabinets,home services
Garage Door Opener Installer,Installs garage door openers,home services
Exterior Door Repair,Repairs exterior doors,home services
Weatherstripping Service,Seals windows and doors,home services
Flooring Consultant,Consults on flooring options,home services
Home Automation Specialist,Installs home automation,home services
Electric Gate Installer,Installs automatic gates,home services
Shed Removal Service,Removes old sheds,home services
Bathtub Refinishing,Refinishes bathtubs,home services
Concrete Repair Service,Repairs concrete surfaces,home services
Home Stager,Stages homes for sale,home services
Rainwater Harvesting Installer,Installs rainwater harvesting systems,home services
Window Tinting Specialist,Applies window tinting,home services
Curtain Installer,Installs and adjusts curtains,home services
Driveway Pressure Washing,Pressure washes driveways,home services
Fence Painting Service,Paints and maintains fences,home services
Gazebo Builder,Builds gazebos and structures,home services
Hot Tub Maintenance,Maintains hot tubs and spas,home services
Landscape Lighting Specialist,Installs outdoor lighting,home services
Leak Repair Technician,Repairs leaks and seals,home services
Security Camera Installer,Installs security camera systems,home services
Soundproof Window Installer,Installs soundproof windows,home services
Storm Damage Repair,Repairs storm damage,home services
Water Leak Detector,Detects water leaks,home services
Wooden Staircase Builder,Builds wooden staircases,home services
Solar Water Heater Installer,Installs solar water heating,home services
Tree Pruning Service,Prunes trees for health,home services
Vinyl Siding Repair,Repairs vinyl siding,home services
Window Shutter Installer,Installs window shutters,home services
Outdoor Fireplace Builder,Builds outdoor fireplaces,home services
Interior Wall Repair,Repairs interior walls,home services
Closet Organizer Installer,Installs closet organizers,home services
Metal Fabricator,Fabricates metal components,home services
Green Roof Installer,Installs green roofs,home services
HVAC Duct Installer,Installs HVAC ducts,home services
Underground Utility Locator,Locates underground utilities,home services
Wind Turbine Installer,Installs wind turbines,home services
Wood Floor Polishing Service,Polishes wood floors,home services
Pool Fence Installer,Installs pool fences,home services
Crawl Space Insulation Specialist,Insulates crawl spaces,home services
Barber,Haircut and grooming,personal care services
Hairstylist,Hair styling services,personal care services
Nail Technician,Nail care expert,personal care services
Makeup Artist,Professional makeup artist,personal care services
Massage Therapist,Massage therapy provider,personal care services
Skin Care Specialist,Skin health specialist,personal care services
Waxing Specialist,Waxing and hair removal,personal care services
Tattoo Artist,Body art creator,personal care services
Personal Trainer,Fitness training coach,personal care services
Yoga Instructor,Yoga instruction,personal care services
Zumba Instructor,Dance fitness leader,personal care services
Nutritionist,Healthy eating advisor,personal care services
Dietitian,Diet planning expert,personal care services
Weight Loss Consultant,Weight loss guidance,personal care services
Esthetician,Advanced skincare expert,personal care services
Spa Therapist,Relaxation therapy provider,personal care services
Eyebrow Threading Specialist,Eyebrow threading pro,personal care services
Eyelash Extension Technician,Eyelash enhancement,personal care services
Reiki Practitioner,Reiki energy healer,personal care services
Acupuncturist,Acupuncture treatment,personal care services
Aromatherapist,Essential oil therapy,personal care services
Holistic Healer,Natural healing specialist,personal care services
Hypnotherapist,Hypnosis for wellness,personal care services
Hair Color Specialist,Hair coloring specialist,personal care services
Henna Artist,Henna body artist,personal care services
Wedding Makeup Artist,Bridal makeup artist,personal care services
Bridal Hairstylist,Wedding hair stylist,personal care services
Men’s Grooming Specialist,Men’s grooming expert,personal care services
Beard Stylist,Beard styling expert,personal care services
Hair Extensions Specialist,Hair extensions services,personal care services
Foot Care Specialist,Foot care specialist,personal care services
Reflexologist,Foot reflexology provider,personal care services
Ear Piercing Specialist,Ear piercing services,personal care services
Body Piercing Technician,Body piercing expert,personal care services
Tattoo Removal Specialist,Tattoo removal expert,personal care services
Hair Removal Specialist,Body hair removal,personal care services
Laser Hair Removal Specialist,Laser hair reduction,personal care services
Scalp Micropigmentation Specialist,Scalp pigmentation pro,personal care services
Cosmetic Surgeon Consultant,Cosmetic surgery advice,personal care services
Dermatologist,Skin doctor,personal care services
Beauty Consultant,Beauty and makeup coach,personal care services
Microblading Artist,Semi-permanent makeup,personal care services
Permanent Makeup Artist,Permanent makeup expert,personal care services
Image Consultant,Image styling advisor,personal care services
Fashion Stylist,Fashion styling expert,personal care services
Wardrobe Consultant,Wardrobe organizing help,personal care services
Manicure Specialist,Nail shaping expert,personal care services
Pedicure Specialist,Foot spa services,personal care services
Bridal Spa Specialist,Bridal spa preparation,personal care services
Facial Specialist,Facial care provider,personal care services
Tanning Specialist,Tanning services,personal care services
Spray Tanning Technician,Spray tanning expert,personal care services
Teeth Whitening Specialist,Teeth whitening,personal care services
Hair Treatment Specialist,Hair revitalization,personal care services
Hair Relaxing Specialist,Hair relaxing services,personal care services
Natural Hair Care Specialist,Natural hair care,personal care services
Braiding Specialist,Braiding specialist,personal care services
Dreadlock Stylist,Dreadlock styling,personal care services
Wig Stylist,Wig design expert,personal care services
Hair Prosthesis Specialist,Hair prosthesis provider,personal care services
Anti-Aging Treatment Specialist,Anti-aging treatments,personal care services
Collagen Therapy Provider,Collagen therapy,personal care services
Skin Rejuvenation Specialist,Skin rejuvenation,personal care services
Chemical Peel Specialist,Chemical peel services,personal care services
Microdermabrasion Specialist,Skin exfoliation,personal care services
Medical Aesthetician,Medical skin care,personal care services
Beauty Therapist,Comprehensive beauty care,personal care services
Spa Coordinator,Spa operations manager,personal care services
Hydrafacial Specialist,Hydrafacial treatments,personal care services
Wellness Coach,Wellness improvement coach,personal care services
Pilates Instructor,Pilates instructor,personal care services
Meditation Coach,Meditation guidance,personal care services
Reiki Master,Advanced Reiki healer,personal care services
Tai Chi Instructor,Tai Chi training,personal care services
Fitness Instructor,Fitness instruction,personal care services
Online Fitness Coach,Online fitness sessions,personal care services
Prenatal Yoga Instructor,Prenatal yoga guide,personal care services
Postpartum Fitness Trainer,Postpartum fitness help,personal care services
Lifestyle Coach,Lifestyle improvement coach,personal care services
Life Coach,Life coaching services,personal care services
Aromatherapy Consultant,Aromatherapy consultant,personal care services
Biofeedback Therapist,Biofeedback therapy,personal care services
Energy Healer,Energy healing,personal care services
Cupping Therapy Provider,Cupping therapy,personal care services
Pain Management Specialist,Pain relief expert,personal care services
Stress Management Coach,Stress management,personal care services
Wellness Retreat Organizer,Wellness retreat organizer,personal care services
Sound Therapy Practitioner,Sound healing,personal care services
Cryotherapy Specialist,Cryotherapy services,personal care services
Weight Management Consultant,Weight management help,personal care services
Kinesiology Specialist,Kinesiology specialist,personal care services
Orthopedic Massage Therapist,Orthopedic massage,personal care services
Oncology Massage Therapist,Cancer massage care,personal care services
Sports Massage Therapist,Sports massage pro,personal care services
Hot Stone Massage Therapist,Hot stone massage,personal care services
Chair Massage Specialist,Chair massage expert,personal care services
Trigger Point Massage Therapist,Trigger point therapy,personal care services
Deep Tissue Massage Specialist,Deep tissue massage,personal care services
Swedish Massage Therapist,Swedish massage,personal care services
Thai Massage Therapist,Thai massage expert,personal care services
Prenatal Massage Therapist,Prenatal massage,personal care services
Postpartum Massage Therapist,Postnatal massage,personal care services
Pediatric Massage Therapist,Children’s massage,personal care services
Shiatsu Massage Therapist,Shiatsu massage,personal care services
Lymphatic Drainage Specialist,Lymph drainage expert,personal care services
Scar Tissue Release Specialist,Scar tissue release,personal care services
Aromatherapy Massage Therapist,Aromatherapy massage,personal care services
Mobile Massage Therapist,Mobile massage services,personal care services
In-Home Spa Service Provider,In-home spa care,personal care services
Couples Massage Specialist,Couples massage specialist,personal care services
Romantic Spa Experience Provider,Romantic spa expert,personal care services
Luxury Spa Specialist,Luxury spa treatments,personal care services
Anti-Cellulite Specialist,Anti-cellulite care,personal care services
Body Wrap Specialist,Body wrap services,personal care services
Detox Treatment Specialist,Detox treatments,personal care services
Exfoliation Treatment Specialist,Skin exfoliation expert,personal care services
Body Scrub Specialist,Body scrubbing,personal care services
Stretch Mark Reduction Specialist,Stretch mark reduction,personal care services
Eye Care Specialist,Eye care specialist,personal care services
Eyebrow Lamination Specialist,Eyebrow lamination,personal care services
Brow Tinting Specialist,Brow tinting,personal care services
Lash Lift Specialist,Lash lifting,personal care services
Lash Tinting Specialist,Lash tinting expert,personal care services
Lash Technician,Eyelash technician,personal care services
Cosmetic Tattoo Artist,Cosmetic tattoo expert,personal care services
Scalp Treatment Specialist,Scalp care treatments,personal care services
Baby Hair Care Specialist,Baby hair care,personal care services
Men’s Hair Restoration Specialist,Men’s hair restoration,personal care services
Senior Hair Care Specialist,Senior hair services,personal care services
Teen Skincare Specialist,Teen skincare help,personal care services
Kids Spa Specialist,Kids spa specialist,personal care services
Parent-Child Spa Specialist,Parent-child spa organizer,personal care services
Family Spa Experience Coordinator,Family spa coordinator,personal care services
Destination Spa Specialist,Destination spa specialist,personal care services
Ayurvedic Massage Therapist,Ayurvedic massage,personal care services
Traditional Chinese Medicine Practitioner,Chinese medicine expert,personal care services
Indigenous Healing Therapist,Indigenous healing,personal care services
Facial Reflexology Specialist,Facial reflexology,personal care services
Eco-Friendly Beauty Specialist,Eco-friendly beauty,personal care services
Organic Beauty Consultant,Organic beauty services,personal care services
Zero Waste Beauty Specialist,Zero waste beauty,personal care services
Men’s Nail Care Specialist,Men’s nail care,personal care services
Hair Styling for Special Needs,Special needs hair,personal care services
Skincare for Special Needs,Special needs skincare,personal care services
Spa Services for Special Needs,Special needs spa,personal care services
Virtual Beauty Consultant,Virtual beauty advice,personal care services
Virtual Fitness Trainer,Virtual fitness coach,personal care services
Virtual Makeup Artist,Virtual makeup help,personal care services
Mobile Personal Trainer,Mobile fitness trainer,personal care services
In-Home Hair Stylist,In-home hair stylist,personal care services
`;

let services = [];

// Parse the CSV data
Papa.parse(csvData, {
  header: true,
  skipEmptyLines: true,
  complete: function (results) {
    services = results.data; // Store parsed data
    displayCards(services); // Display all services initially
  },
});

// Function to filter services
function filterServices() {
  const query = document.getElementById('search-input').value.toLowerCase();

  // Filter by "type" for headings
  const filteredTypes = services.filter((service) =>
    service.type.toLowerCase().includes(query)
  );

  const headingContainer = document.getElementById('heading-container');
  headingContainer.innerHTML = filteredTypes
    .map(
      (service) => `
        <h4>${service.type}</h4>
        <h5>View all ></h5>
      `
    )
    .join('');

  // Filter by "name" or "description" for cards
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query)
  );

  const cardContainer = document.getElementById('cardContainer1');
  const golozapdetails = document.getElementById('golozapdetails');

  if (filteredServices.length === 0) {
    cardContainer.style.display = 'block';
    cardContainer.textContent = 'No data found';
    golozapdetails.style.display = 'none'; // Hide details
  } else if (query.length === 0) {
    golozapdetails.style.display = 'block'; // Show details
    cardContainer.style.display = 'none'; // Hide container
    displayCards(services);
  } else {
    golozapdetails.style.display = 'none'; // Hide details
    cardContainer.style.display = 'none'; // Hide container
    displayCards(filteredServices);
  }
}

// Function to display service cards
function displayCards(services) {
  const container = document.getElementById('cardContainer');
  container.innerHTML = services
    .map(
      (service) => `
      <div class="col-md-2 mb-3">
          <div class="card">
              <img src="https://via.placeholder.com/50" class="card-img-top" alt="${service.name}">
              <div class="card-body">
                  <h6 class="card-title">${service.name}</h6>
                  <p class="card-text" style="font-size:10px">${service.description}</p>
              </div>
          </div>
      </div>
    `
    )
    .join('');
}


/*document.querySelector('#cardContainer1_1 h5').addEventListener('click', function() {
  const container = document.getElementById('cardContainer');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
});

document.querySelector('#cardContainer2_1 h5').addEventListener('click', function() {
  const container = document.getElementById('cardContainer2');
  container.style.display = container.style.display === 'none' ? 'block' : 'none';
});*/
