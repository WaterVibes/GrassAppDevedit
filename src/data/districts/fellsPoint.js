// Fells Point District Data Structure
export const fellsPointDistrict = {
    name: 'Fells Point',
    id: 'fellsPoint',
    // Boundary coordinates for the glowing effect
    boundary: {
        type: 'Polygon',
        coordinates: [
            // Starting from northwest corner, going clockwise
            [39.284890, -76.596234], // Pratt & Central Ave
            [39.284678, -76.589123], // Pratt & Patterson Park Ave
            [39.281234, -76.589234], // Lancaster & Patterson Park Ave
            [39.281345, -76.596345], // Lancaster & Central Ave
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
                [39.284890, -76.596234], // Central Ave
                [39.284823, -76.594567], // Broadway
                [39.284756, -76.591890], // Ann St
                [39.284678, -76.589123]  // Patterson Park Ave
            ]
        },
        {
            name: 'Lancaster Street',
            type: 'major',
            coordinates: [
                [39.281345, -76.596345], // Central Ave
                [39.281312, -76.594678], // Broadway
                [39.281278, -76.591923], // Ann St
                [39.281234, -76.589234]  // Patterson Park Ave
            ]
        },
        {
            name: 'S Central Avenue',
            type: 'major',
            coordinates: [
                [39.284890, -76.596234], // Pratt St
                [39.283890, -76.596267], // Eastern Ave
                [39.282567, -76.596301], // Fleet St
                [39.281345, -76.596345]  // Lancaster St
            ]
        },
        {
            name: 'S Patterson Park Avenue',
            type: 'major',
            coordinates: [
                [39.284678, -76.589123], // Pratt St
                [39.283678, -76.589156], // Eastern Ave
                [39.282345, -76.589190], // Fleet St
                [39.281234, -76.589234]  // Lancaster St
            ]
        }
    ],
    // Internal streets
    internalStreets: [
        {
            name: 'Eastern Avenue',
            type: 'secondary',
            coordinates: [
                [39.283890, -76.596267], // Central Ave
                [39.283823, -76.594590], // Broadway
                [39.283756, -76.591923], // Ann St
                [39.283678, -76.589156]  // Patterson Park Ave
            ]
        },
        {
            name: 'Fleet Street',
            type: 'secondary',
            coordinates: [
                [39.282567, -76.596301], // Central Ave
                [39.282534, -76.594634], // Broadway
                [39.282456, -76.591956], // Ann St
                [39.282345, -76.589190]  // Patterson Park Ave
            ]
        },
        {
            name: 'S Broadway',
            type: 'secondary',
            coordinates: [
                [39.284823, -76.594567], // Pratt St
                [39.283823, -76.594590], // Eastern Ave
                [39.282534, -76.594634], // Fleet St
                [39.281312, -76.594678]  // Lancaster St
            ]
        },
        {
            name: 'S Ann Street',
            type: 'secondary',
            coordinates: [
                [39.284756, -76.591890], // Pratt St
                [39.283756, -76.591923], // Eastern Ave
                [39.282456, -76.591956], // Fleet St
                [39.281278, -76.591923]  // Lancaster St
            ]
        }
    ],
    // Intersection points for accurate positioning
    intersections: [
        // Pratt Street Intersections
        {
            id: 'pratt_central',
            name: 'Pratt & Central',
            coordinates: [39.284890, -76.596234],
            connecting: ['E Pratt Street', 'S Central Avenue']
        },
        {
            id: 'pratt_broadway',
            name: 'Pratt & Broadway',
            coordinates: [39.284823, -76.594567],
            connecting: ['E Pratt Street', 'S Broadway']
        },
        {
            id: 'pratt_ann',
            name: 'Pratt & Ann',
            coordinates: [39.284756, -76.591890],
            connecting: ['E Pratt Street', 'S Ann Street']
        },
        {
            id: 'pratt_patterson',
            name: 'Pratt & Patterson Park',
            coordinates: [39.284678, -76.589123],
            connecting: ['E Pratt Street', 'S Patterson Park Avenue']
        },
        // Lancaster Street Intersections
        {
            id: 'lancaster_central',
            name: 'Lancaster & Central',
            coordinates: [39.281345, -76.596345],
            connecting: ['Lancaster Street', 'S Central Avenue']
        },
        {
            id: 'lancaster_broadway',
            name: 'Lancaster & Broadway',
            coordinates: [39.281312, -76.594678],
            connecting: ['Lancaster Street', 'S Broadway']
        },
        {
            id: 'lancaster_ann',
            name: 'Lancaster & Ann',
            coordinates: [39.281278, -76.591923],
            connecting: ['Lancaster Street', 'S Ann Street']
        },
        {
            id: 'lancaster_patterson',
            name: 'Lancaster & Patterson Park',
            coordinates: [39.281234, -76.589234],
            connecting: ['Lancaster Street', 'S Patterson Park Avenue']
        }
    ],
    // Points of Interest (landmarks, venues, etc.)
    landmarks: [
        {
            name: 'Broadway Market',
            type: 'market',
            coordinates: [39.283823, -76.594590]
        },
        {
            name: 'Thames Street Park',
            type: 'park',
            coordinates: [39.281345, -76.593234]
        },
        {
            name: 'Fells Point Square',
            type: 'plaza',
            coordinates: [39.282534, -76.594634]
        },
        {
            name: 'Henderson\'s Wharf',
            type: 'waterfront',
            coordinates: [39.281123, -76.591234]
        },
        {
            name: 'The Inn at Henderson\'s Wharf',
            type: 'hotel',
            coordinates: [39.281234, -76.591345]
        },
        {
            name: 'Keystone Korner Baltimore',
            type: 'entertainment',
            coordinates: [39.281456, -76.593567]
        }
    ]
}; 