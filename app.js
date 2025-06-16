// Hardcoded data to avoid loading issues
const garagesData = [
    {"name": "בית אביחי", "address": "המלך ג'ורג' 44", "floors": "-3, -4, -5, -6, -7", "neighborhood": "רחביה", "floor_count": 5, "lat": 31.776, "lng": 35.2109, "id": "garage-0"},
    {"name": "בית בנית", "address": "האומן 14", "floors": "1", "neighborhood": "תלפיות", "floor_count": 1, "lat": 31.7555, "lng": 35.2207, "id": "garage-1"},
    {"name": "בית יהב", "address": "ירמיהו 80", "floors": "1, 2, 3, 4", "neighborhood": "רוממה", "floor_count": 4, "lat": 31.7922, "lng": 35.1989, "id": "garage-2"},
    {"name": "בניין כלל", "address": "יפו 97 /אגריפס 42", "floors": "2,3", "neighborhood": "מרכז העיר", "floor_count": 2, "lat": 31.7857, "lng": 35.2007, "id": "garage-3"},
    {"name": "הגן הטכנולוגי 4", "address": "הגן הטכנולוגי, דרך אגודת ספורט הפועל 2", "floors": "2", "neighborhood": "מלחה", "floor_count": 1, "lat": 31.73, "lng": 35.2, "id": "garage-4"},
    {"name": "הגן הטכנולוגי בניין 1-2 בנין המגדל", "address": "אגודת הפועל 2", "floors": "ח6, ח7", "neighborhood": "מלחה", "floor_count": 2, "lat": 31.73, "lng": 35.2, "id": "garage-5"},
    {"name": "הגן הטכנולוגי בניין 5", "address": "הגן הטכנולוגי, דרך אגודת ספורט הפועל 2", "floors": "2", "neighborhood": "מלחה", "floor_count": 1, "lat": 31.73, "lng": 35.2, "id": "garage-6"},
    {"name": "הגן הטכנולוגי בניינים 8-9", "address": "הגן הטכנולוגי, דרך אגודת ספורט הפועל 2, ירושלים", "floors": "2", "neighborhood": "מלחה", "floor_count": 1, "lat": 31.73, "lng": 35.2, "id": "garage-7"},
    {"name": "התחנה המרכזית", "address": "יפו 224", "floors": "-2", "neighborhood": "רוממה", "floor_count": 1, "lat": 31.7922, "lng": 35.1989, "id": "garage-8"},
    {"name": "חלונות ירושלים", "address": "אגריפס 40", "floors": "-2, -3, -4, -5", "neighborhood": "מרכז העיר", "floor_count": 4, "lat": 31.7857, "lng": 35.2007, "id": "garage-9"},
    {"name": "חניון אוריינט", "address": "עמק רפאים 3", "floors": "-3, -4, -5", "neighborhood": "המושבה הגרמנית", "floor_count": 3, "lat": 31.765, "lng": 35.215, "id": "garage-10"},
    {"name": "חניון אורנים", "address": "כנפי נשרים 66", "floors": "1,2", "neighborhood": "גבעת שאול", "floor_count": 2, "lat": 31.8, "lng": 35.18, "id": "garage-11"},
    {"name": "חניון בית השנהב", "address": "בית הדפוס 12", "floors": "-3", "neighborhood": "גבעת שאול", "floor_count": 1, "lat": 31.8, "lng": 35.18, "id": "garage-12"},
    {"name": "חניון בנייני האומה", "address": 'שדרות שז"ר 1', "floors": "-5, -6, -7", "neighborhood": "קריית האומה", "floor_count": 3, "lat": 31.76, "lng": 35.21, "id": "garage-13"},
    {"name": "חניון בצלאל", "address": "זמורה 1, ירושלים", "floors": "קומות B,C,D", "neighborhood": "מרכז העיר", "floor_count": 3, "lat": 31.7857, "lng": 35.2007, "id": "garage-14"},
    {"name": "חניון גולדה (מובילאיי)", "address": "שדרות גולדה מאיר מערבית לרח' שלמה הלוי", "floors": "-5, -6, -7", "neighborhood": "הר חוצבים", "floor_count": 3, "lat": 31.74, "lng": 35.17, "id": "garage-15"},
    {"name": "חניון דוד ילין", "address": "מעגל בית המדרש 7", "floors": "1,2,3", "neighborhood": "בית הכרם", "floor_count": 3, "lat": 31.785, "lng": 35.19, "id": "garage-16"},
    {"name": "חניון דונה", "address": "בית הדפוס 20", "floors": "-3, -4, -5, -6", "neighborhood": "גבעת שאול", "floor_count": 4, "lat": 31.8, "lng": 35.18, "id": "garage-17"}
];

// Hardcoded statistics
const statistics = {
    "total_garages": 45,
    "total_neighborhoods": 14,
    "neighborhoods_list": ["בית הכרם", "גבעת שאול", "הר חוצבים", "המושבה הגרמנית", "טלביה - קוממיות", "מקור ברוך", "מלחה", "ממילא", "מרכז העיר", "קריית האומה", "קריית יובל", "רחביה", "רוממה", "תלפיות"],
    "neighborhood_distribution": {
        "מרכז העיר": 18,
        "רוממה": 5,
        "מלחה": 4,
        "גבעת שאול": 4,
        "תלפיות": 3,
        "קריית האומה": 2,
        "בית הכרם": 2,
        "רחביה": 1,
        "המושבה הגרמנית": 1,
        "הר חוצבים": 1,
        "טלביה - קוממיות": 1,
        "ממילא": 1,
        "קריית יובל": 1,
        "מקור ברוך": 1
    },
    "average_floors_per_garage": 2.7
};

// Global variables
let map = null;
let markers = {};
let selectedGarageId = null;

// DOM elements
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear');
const neighborhoodSelect = document.getElementById('neighborhood-select');
const garageListContainer = document.getElementById('garage-list');
const resultsCount = document.getElementById('results-count');

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});

// Main initialization function
function initializeApp() {
    // Update statistics UI
    updateStatisticsUI();
    
    // Initialize map
    initMap();
    
    // Populate the UI with garages data
    populateNeighborhoodFilter();
    renderGaragesList();
    
    // Setup event listeners
    setupEventListeners();
}

// Update statistics in the UI
function updateStatisticsUI() {
    document.getElementById('total-garages').textContent = statistics.total_garages;
    document.getElementById('total-neighborhoods').textContent = statistics.total_neighborhoods;
    document.getElementById('avg-floors').textContent = statistics.average_floors_per_garage;
}

// Initialize Leaflet map
function initMap() {
    try {
        // Create map centered on Jerusalem
        map = L.map('map', {
            scrollWheelZoom: false // Disable scroll wheel zoom by default
        }).setView([31.7857, 35.2007], 13);
        
        // Enable scroll wheel zoom only when map is focused
        map.on('focus', () => {
            map.scrollWheelZoom.enable();
        });
        
        map.on('blur', () => {
            map.scrollWheelZoom.disable();
        });
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add markers for each garage
        addGarageMarkers();
        
        console.log('Map initialized successfully');
    } catch (error) {
        console.error('Error initializing map:', error);
        document.getElementById('map').innerHTML = '<div class="map-error">שגיאה בטעינת המפה. אנא רענן את הדף.</div>';
    }
}

// Add markers to the map
function addGarageMarkers() {
    if (!map) return;
    
    garagesData.forEach(garage => {
        try {
            // Create custom blue icon
            const blueIcon = L.divIcon({
                className: 'custom-marker',
                html: `<div class="marker-pin"></div>`,
                iconSize: [30, 30],
                iconAnchor: [15, 30],
                popupAnchor: [0, -30]
            });
            
            const marker = L.marker([garage.lat, garage.lng], {
                title: garage.name,
                alt: garage.name,
                icon: blueIcon
            });
            
            // Create popup content
            const popupContent = createPopupContent(garage);
            marker.bindPopup(popupContent);
            
            // Add marker to map
            marker.addTo(map);
            
            // Store marker reference
            markers[garage.id] = marker;
            
            // Add click event to marker
            marker.on('click', () => {
                selectGarage(garage.id);
            });
        } catch (error) {
            console.error(`Error adding marker for ${garage.name}:`, error);
        }
    });
}

// Create HTML content for marker popup
function createPopupContent(garage) {
    return `
        <div class="leaflet-popup">
            <h3>${garage.name}</h3>
            <div class="popup-address">${garage.address}</div>
            <div class="popup-details">
                ${garage.floors ? `<span class="popup-floors">קומות: ${garage.floors}</span>` : ''}
                <span class="popup-neighborhood">${garage.neighborhood}</span>
            </div>
        </div>
    `;
}

// Populate neighborhood filter dropdown
function populateNeighborhoodFilter() {
    if (!statistics || !statistics.neighborhoods_list) return;
    
    // Sort neighborhoods alphabetically
    const sortedNeighborhoods = [...statistics.neighborhoods_list].sort();
    
    // Add options to select
    sortedNeighborhoods.forEach(neighborhood => {
        const option = document.createElement('option');
        option.value = neighborhood;
        option.textContent = neighborhood;
        neighborhoodSelect.appendChild(option);
    });
}

// Render garages list based on current filters
function renderGaragesList(filterText = '', filterNeighborhood = '') {
    // Clear current list
    garageListContainer.innerHTML = '';
    
    // Filter garages
    const filteredGarages = garagesData.filter(garage => {
        const nameMatch = garage.name.includes(filterText);
        const addressMatch = garage.address.includes(filterText);
        const neighborhoodMatch = !filterNeighborhood || garage.neighborhood === filterNeighborhood;
        
        return (nameMatch || addressMatch) && neighborhoodMatch;
    });
    
    // Update results count
    resultsCount.textContent = `(${filteredGarages.length} תוצאות)`;
    
    // Render each garage card
    filteredGarages.forEach(garage => {
        const garageCard = createGarageCard(garage);
        garageListContainer.appendChild(garageCard);
    });
    
    // If no results, show message
    if (filteredGarages.length === 0) {
        const noResults = document.createElement('div');
        noResults.className = 'no-results';
        noResults.textContent = 'לא נמצאו תוצאות מתאימות לחיפוש';
        garageListContainer.appendChild(noResults);
    }
}

// Create a garage card element
function createGarageCard(garage) {
    const card = document.createElement('div');
    card.className = 'garage-card';
    card.id = garage.id;
    
    if (selectedGarageId === garage.id) {
        card.classList.add('selected');
    }
    
    card.innerHTML = `
        <h4>${garage.name}</h4>
        <div class="address">${garage.address}</div>
        <div class="details">
            ${garage.floors ? `<span class="floors">קומות: ${garage.floors}</span>` : ''}
            <span class="neighborhood">${garage.neighborhood}</span>
        </div>
    `;
    
    // Add click event to card
    card.addEventListener('click', () => {
        selectGarage(garage.id);
    });
    
    return card;
}

// Select a garage (highlight in list and map)
function selectGarage(garageId) {
    // Remove selection from previously selected
    if (selectedGarageId) {
        const prevCard = document.getElementById(selectedGarageId);
        if (prevCard) {
            prevCard.classList.remove('selected');
        }
    }
    
    // Update selected garage ID
    selectedGarageId = garageId;
    
    // Highlight selected card
    const card = document.getElementById(garageId);
    if (card) {
        card.classList.add('selected');
        
        // Scroll to card
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Open popup on map and zoom to marker
    const marker = markers[garageId];
    if (marker && map) {
        map.setView(marker.getLatLng(), 15);
        marker.openPopup();
    }
}

// Setup all event listeners
function setupEventListeners() {
    // Search input event
    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.trim();
        renderGaragesList(searchText, neighborhoodSelect.value);
    });
    
    // Clear search button
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        renderGaragesList('', neighborhoodSelect.value);
    });
    
    // Neighborhood filter change
    neighborhoodSelect.addEventListener('change', () => {
        const neighborhood = neighborhoodSelect.value;
        renderGaragesList(searchInput.value.trim(), neighborhood);
        
        // If a specific neighborhood is selected, center map on that area
        if (neighborhood) {
            centerMapOnNeighborhood(neighborhood);
        } else {
            // Reset map view to Jerusalem
            map.setView([31.7857, 35.2007], 13);
        }
    });
}

// Center map on a specific neighborhood
function centerMapOnNeighborhood(neighborhood) {
    if (!map) return;
    
    // Find garages in the selected neighborhood
    const neighborhoodGarages = garagesData.filter(garage => garage.neighborhood === neighborhood);
    
    if (neighborhoodGarages.length > 0) {
        // Calculate center point of the neighborhood
        const latSum = neighborhoodGarages.reduce((sum, garage) => sum + garage.lat, 0);
        const lngSum = neighborhoodGarages.reduce((sum, garage) => sum + garage.lng, 0);
        
        const centerLat = latSum / neighborhoodGarages.length;
        const centerLng = lngSum / neighborhoodGarages.length;
        
        // Center map on neighborhood
        map.setView([centerLat, centerLng], 14);
    }
}