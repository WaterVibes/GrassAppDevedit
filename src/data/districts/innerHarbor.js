// Inner Harbor District Data Structure
export const innerHarborDistrict = {
    name: 'Baltimore Inner Harbor',
    id: 'innerHarbor',
    // Boundary coordinates for the glowing effect
    boundary: {
        type: 'Polygon',
        coordinates: [
            // Starting from northwest corner, going clockwise
            [39.287678, -76.614571], // Pratt & Light St
            [39.287345, -76.607833], // Pratt & Caroline St
            [39.282456, -76.607876], // Lancaster & Caroline St
            [39.282567, -76.614742], // Lancaster & Light St
        ],
        style: {
            color: '#00ff00',
            opacity: 0.5,
            weight: 3,
            fillColor: '#00ff00',
            fillOpacity: 0.1,
            glowSize: 20,
            glowColor: '#00ff00'
        }
    },
    // Main boundary streets
    boundaryStreets: [
        {
            name: 'E Pratt Street',
            type: 'major',
            coordinates: [
                [39.287678, -76.614571], // Start at Light St
                [39.287567, -76.612234], // Charles St
                [39.287456, -76.610123], // Market Place
                [39.287345, -76.607833]  // End at Caroline St
            ]
        },
        {
            name: 'Light Street',
            type: 'major',
            coordinates: [
                [39.287678, -76.614571], // Start at Pratt St
                [39.286924, -76.614646], // Lombard St
                [39.286123, -76.614678], // Water St
                [39.283567, -76.614721], // Trinity St
                [39.283123, -76.614732], // Fleet St
                [39.282567, -76.614742]  // End at Lancaster St
            ]
        },
        {
            name: 'Lancaster Street',
            type: 'major',
            coordinates: [
                [39.282567, -76.614742], // Start at Light St
                [39.282534, -76.612345], // Charles St
                [39.282489, -76.610234], // Market Place
                [39.282456, -76.607876]  // End at Caroline St
            ]
        },
        {
            name: 'S Caroline Street',
            type: 'major',
            coordinates: [
                [39.287345, -76.607833], // Start at Pratt St
                [39.286645, -76.607876], // Lombard St
                [39.285845, -76.607919], // Water St
                [39.283234, -76.607943], // Trinity St
                [39.282845, -76.607962], // Fleet St
                [39.282456, -76.607876]  // End at Lancaster St
            ]
        }
    ],
    // Internal streets
    internalStreets: [
        {
            name: 'E Lombard Street',
            type: 'secondary',
            coordinates: [
                [39.286924, -76.614646], // Light St
                [39.286834, -76.612234], // Charles St
                [39.286723, -76.610123], // Market Place
                [39.286645, -76.607876]  // Caroline St
            ]
        },
        {
            name: 'Water Street',
            type: 'secondary',
            coordinates: [
                [39.286123, -76.614678], // Light St
                [39.286034, -76.612234], // Charles St
                [39.285923, -76.610123], // Market Place
                [39.285845, -76.607919]  // Caroline St
            ]
        },
        {
            name: 'Trinity Street',
            type: 'secondary',
            coordinates: [
                [39.283567, -76.614721], // Light St
                [39.283456, -76.612234], // Charles St
                [39.283345, -76.610123], // Market Place
                [39.283234, -76.609123]  // Caroline St
            ]
        },
        {
            name: 'Fleet Street',
            type: 'secondary',
            coordinates: [
                [39.283123, -76.614732], // Light St
                [39.283034, -76.612234], // Charles St
                [39.282923, -76.610123], // Market Place
                [39.282845, -76.607962]  // Caroline St
            ]
        },
        {
            name: 'Charles Street',
            type: 'secondary',
            coordinates: [
                [39.287567, -76.612234], // Pratt St
                [39.286834, -76.612234], // Lombard St
                [39.286034, -76.612234], // Water St
                [39.283456, -76.612234], // Trinity St
                [39.283034, -76.612234], // Fleet St
                [39.282678, -76.612345]  // Lancaster St
            ]
        },
        {
            name: 'Market Place',
            type: 'secondary',
            coordinates: [
                [39.287456, -76.610123], // Pratt St
                [39.286723, -76.610123], // Lombard St
                [39.285923, -76.610123], // Water St
                [39.283345, -76.610123], // Trinity St
                [39.282923, -76.610123], // Fleet St
                [39.282489, -76.610234]  // Lancaster St
            ]
        }
    ],
    // Intersection points for accurate positioning
    intersections: [
        // Pratt Street Intersections
        {
            id: 'pratt_light',
            name: 'Pratt & Light',
            coordinates: [39.287678, -76.614571],
            connecting: ['E Pratt Street', 'Light Street']
        },
        {
            id: 'pratt_charles',
            name: 'Pratt & Charles',
            coordinates: [39.287567, -76.612234],
            connecting: ['E Pratt Street', 'Charles Street']
        },
        {
            id: 'pratt_market',
            name: 'Pratt & Market Place',
            coordinates: [39.287456, -76.610123],
            connecting: ['E Pratt Street', 'Market Place']
        },
        {
            id: 'pratt_caroline',
            name: 'Pratt & Caroline',
            coordinates: [39.287345, -76.607833],
            connecting: ['E Pratt Street', 'S Caroline Street']
        },
        // Light Street Intersections
        {
            id: 'light_lombard',
            name: 'Light & Lombard',
            coordinates: [39.286924, -76.614646],
            connecting: ['Light Street', 'E Lombard Street']
        },
        {
            id: 'light_water',
            name: 'Light & Water',
            coordinates: [39.286123, -76.614678],
            connecting: ['Light Street', 'Water Street']
        },
        {
            id: 'light_trinity',
            name: 'Light & Trinity',
            coordinates: [39.283567, -76.614721],
            connecting: ['Light Street', 'Trinity Street']
        },
        {
            id: 'light_fleet',
            name: 'Light & Fleet',
            coordinates: [39.283123, -76.614732],
            connecting: ['Light Street', 'Fleet Street']
        },
        // Caroline Street Intersections
        {
            id: 'caroline_lombard',
            name: 'Caroline & Lombard',
            coordinates: [39.286645, -76.607876],
            connecting: ['S Caroline Street', 'E Lombard Street']
        },
        {
            id: 'caroline_water',
            name: 'Caroline & Water',
            coordinates: [39.285845, -76.607919],
            connecting: ['S Caroline Street', 'Water Street']
        },
        {
            id: 'caroline_trinity',
            name: 'Caroline & Trinity',
            coordinates: [39.283234, -76.607943],
            connecting: ['S Caroline Street', 'Trinity Street']
        },
        {
            id: 'caroline_fleet',
            name: 'Caroline & Fleet',
            coordinates: [39.282845, -76.607962],
            connecting: ['S Caroline Street', 'Fleet Street']
        }
    ],
    // Points of Interest (landmarks, venues, etc.)
    landmarks: [
        {
            name: 'National Aquarium',
            type: 'attraction',
            coordinates: [39.284694, -76.608150]
        },
        {
            name: 'Maryland Science Center',
            type: 'attraction',
            coordinates: [39.281651, -76.612748]
        },
        {
            name: 'Inner Harbor Marina',
            type: 'waterfront',
            coordinates: [39.283970, -76.610460]
        },
        {
            name: 'Power Plant',
            type: 'entertainment',
            coordinates: [39.285789, -76.607876]
        },
        {
            name: 'Port Discovery Children\'s Museum',
            type: 'attraction',
            coordinates: [39.289876, -76.612345]
        }
    ]
}; 