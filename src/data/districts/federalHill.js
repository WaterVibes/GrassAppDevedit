// Federal Hill District Data Structure
export const federalHillDistrict = {
    name: 'Federal Hill',
    id: 'federalHill',
    // Boundary coordinates for the glowing effect
    boundary: {
        type: 'Polygon',
        coordinates: [
            // Starting from northwest corner, going clockwise
            [39.284567, -76.613234], // Key Highway & Light St
            [39.284456, -76.607890], // Key Highway & Covington St
            [39.280123, -76.607923], // Grindall & Covington St
            [39.280234, -76.613345], // Grindall & Light St
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
            name: 'Key Highway',
            type: 'major',
            coordinates: [
                [39.284567, -76.613234], // Light St
                [39.284534, -76.611567], // William St
                [39.284489, -76.609890], // Battery Ave
                [39.284456, -76.607890]  // Covington St
            ]
        },
        {
            name: 'Grindall Street',
            type: 'major',
            coordinates: [
                [39.280234, -76.613345], // Light St
                [39.280201, -76.611678], // William St
                [39.280156, -76.609923], // Battery Ave
                [39.280123, -76.607923]  // Covington St
            ]
        },
        {
            name: 'Light Street',
            type: 'major',
            coordinates: [
                [39.284567, -76.613234], // Key Highway
                [39.283567, -76.613267], // Warren St
                [39.281890, -76.613301], // Cross St
                [39.280234, -76.613345]  // Grindall St
            ]
        },
        {
            name: 'Covington Street',
            type: 'major',
            coordinates: [
                [39.284456, -76.607890], // Key Highway
                [39.283456, -76.607901], // Warren St
                [39.281789, -76.607912], // Cross St
                [39.280123, -76.607923]  // Grindall St
            ]
        }
    ],
    // Internal streets
    internalStreets: [
        {
            name: 'Warren Street',
            type: 'secondary',
            coordinates: [
                [39.283567, -76.613267], // Light St
                [39.283534, -76.611590], // William St
                [39.283489, -76.609912], // Battery Ave
                [39.283456, -76.607901]  // Covington St
            ]
        },
        {
            name: 'Cross Street',
            type: 'secondary',
            coordinates: [
                [39.281890, -76.613301], // Light St
                [39.281867, -76.611634], // William St
                [39.281823, -76.609923], // Battery Ave
                [39.281789, -76.607912]  // Covington St
            ]
        },
        {
            name: 'William Street',
            type: 'secondary',
            coordinates: [
                [39.284534, -76.611567], // Key Highway
                [39.283534, -76.611590], // Warren St
                [39.281867, -76.611634], // Cross St
                [39.280201, -76.611678]  // Grindall St
            ]
        },
        {
            name: 'Battery Avenue',
            type: 'secondary',
            coordinates: [
                [39.284489, -76.609890], // Key Highway
                [39.283489, -76.609912], // Warren St
                [39.281823, -76.609923], // Cross St
                [39.280156, -76.609923]  // Grindall St
            ]
        }
    ],
    // Intersection points for accurate positioning
    intersections: [
        // Key Highway Intersections
        {
            id: 'key_light',
            name: 'Key Highway & Light',
            coordinates: [39.284567, -76.613234],
            connecting: ['Key Highway', 'Light Street']
        },
        {
            id: 'key_william',
            name: 'Key Highway & William',
            coordinates: [39.284534, -76.611567],
            connecting: ['Key Highway', 'William Street']
        },
        {
            id: 'key_battery',
            name: 'Key Highway & Battery',
            coordinates: [39.284489, -76.609890],
            connecting: ['Key Highway', 'Battery Avenue']
        },
        {
            id: 'key_covington',
            name: 'Key Highway & Covington',
            coordinates: [39.284456, -76.607890],
            connecting: ['Key Highway', 'Covington Street']
        },
        // Cross Street Intersections
        {
            id: 'cross_light',
            name: 'Cross & Light',
            coordinates: [39.281890, -76.613301],
            connecting: ['Cross Street', 'Light Street']
        },
        {
            id: 'cross_william',
            name: 'Cross & William',
            coordinates: [39.281867, -76.611634],
            connecting: ['Cross Street', 'William Street']
        },
        {
            id: 'cross_battery',
            name: 'Cross & Battery',
            coordinates: [39.281823, -76.609923],
            connecting: ['Cross Street', 'Battery Avenue']
        },
        {
            id: 'cross_covington',
            name: 'Cross & Covington',
            coordinates: [39.281789, -76.607912],
            connecting: ['Cross Street', 'Covington Street']
        }
    ],
    // Points of Interest (landmarks, venues, etc.)
    landmarks: [
        {
            name: 'Federal Hill Park',
            type: 'park',
            coordinates: [39.283890, -76.609234]
        },
        {
            name: 'Cross Street Market',
            type: 'market',
            coordinates: [39.281890, -76.611634]
        },
        {
            name: 'American Visionary Art Museum',
            type: 'museum',
            coordinates: [39.284123, -76.611234]
        },
        {
            name: 'Digital Harbor High School',
            type: 'school',
            coordinates: [39.281234, -76.608567]
        },
        {
            name: 'Be More Thai',
            type: 'restaurant',
            coordinates: [39.282890, -76.610234]
        }
    ]
}; 