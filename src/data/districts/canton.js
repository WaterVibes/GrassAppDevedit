// Canton District Data Structure
export const cantonDistrict = {
    name: 'Canton',
    id: 'canton',
    // Boundary coordinates for the glowing effect
    boundary: {
        type: 'Polygon',
        coordinates: [
            // Starting from northwest corner, going clockwise
            [39.284123, -76.580234], // Fleet & Patterson Park Ave
            [39.284567, -76.573456], // Fleet & East Ave
            [39.281234, -76.573567], // Boston & East Ave
            [39.281345, -76.580345], // Boston & Patterson Park Ave
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
            name: 'Fleet Street',
            type: 'major',
            coordinates: [
                [39.284123, -76.580234], // Patterson Park Ave
                [39.284234, -76.578567], // Montford Ave
                [39.284345, -76.576789], // Milton Ave
                [39.284567, -76.573456]  // East Ave
            ]
        },
        {
            name: 'Boston Street',
            type: 'major',
            coordinates: [
                [39.281345, -76.580345], // Patterson Park Ave
                [39.281289, -76.578678], // Montford Ave
                [39.281267, -76.576890], // Milton Ave
                [39.281234, -76.573567]  // East Ave
            ]
        },
        {
            name: 'Patterson Park Avenue',
            type: 'major',
            coordinates: [
                [39.284123, -76.580234], // Fleet St
                [39.283567, -76.580289], // Eastern Ave
                [39.282456, -76.580312], // O'Donnell St
                [39.281345, -76.580345]  // Boston St
            ]
        },
        {
            name: 'East Avenue',
            type: 'major',
            coordinates: [
                [39.284567, -76.573456], // Fleet St
                [39.283789, -76.573489], // Eastern Ave
                [39.282678, -76.573523], // O'Donnell St
                [39.281234, -76.573567]  // Boston St
            ]
        }
    ],
    // Internal streets
    internalStreets: [
        {
            name: 'Eastern Avenue',
            type: 'secondary',
            coordinates: [
                [39.283567, -76.580289], // Patterson Park Ave
                [39.283623, -76.578567], // Montford Ave
                [39.283678, -76.576789], // Milton Ave
                [39.283789, -76.573489]  // East Ave
            ]
        },
        {
            name: "O'Donnell Street",
            type: 'secondary',
            coordinates: [
                [39.282456, -76.580312], // Patterson Park Ave
                [39.282512, -76.578590], // Montford Ave
                [39.282567, -76.576812], // Milton Ave
                [39.282678, -76.573523]  // East Ave
            ]
        },
        {
            name: 'Montford Avenue',
            type: 'secondary',
            coordinates: [
                [39.284234, -76.578567], // Fleet St
                [39.283623, -76.578567], // Eastern Ave
                [39.282512, -76.578590], // O'Donnell St
                [39.281289, -76.578678]  // Boston St
            ]
        },
        {
            name: 'Milton Avenue',
            type: 'secondary',
            coordinates: [
                [39.284345, -76.576789], // Fleet St
                [39.283678, -76.576789], // Eastern Ave
                [39.282567, -76.576812], // O'Donnell St
                [39.281267, -76.576890]  // Boston St
            ]
        }
    ],
    // Intersection points for accurate positioning
    intersections: [
        // Fleet Street Intersections
        {
            id: 'fleet_patterson',
            name: 'Fleet & Patterson Park',
            coordinates: [39.284123, -76.580234],
            connecting: ['Fleet Street', 'Patterson Park Avenue']
        },
        {
            id: 'fleet_montford',
            name: 'Fleet & Montford',
            coordinates: [39.284234, -76.578567],
            connecting: ['Fleet Street', 'Montford Avenue']
        },
        {
            id: 'fleet_milton',
            name: 'Fleet & Milton',
            coordinates: [39.284345, -76.576789],
            connecting: ['Fleet Street', 'Milton Avenue']
        },
        {
            id: 'fleet_east',
            name: 'Fleet & East',
            coordinates: [39.284567, -76.573456],
            connecting: ['Fleet Street', 'East Avenue']
        },
        // Boston Street Intersections
        {
            id: 'boston_patterson',
            name: 'Boston & Patterson Park',
            coordinates: [39.281345, -76.580345],
            connecting: ['Boston Street', 'Patterson Park Avenue']
        },
        {
            id: 'boston_montford',
            name: 'Boston & Montford',
            coordinates: [39.281289, -76.578678],
            connecting: ['Boston Street', 'Montford Avenue']
        },
        {
            id: 'boston_milton',
            name: 'Boston & Milton',
            coordinates: [39.281267, -76.576890],
            connecting: ['Boston Street', 'Milton Avenue']
        },
        {
            id: 'boston_east',
            name: 'Boston & East',
            coordinates: [39.281234, -76.573567],
            connecting: ['Boston Street', 'East Avenue']
        }
    ],
    // Points of Interest (landmarks, venues, etc.)
    landmarks: [
        {
            name: "O'Donnell Square Park",
            type: 'park',
            coordinates: [39.282512, -76.578590]
        },
        {
            name: 'Canton Waterfront Park',
            type: 'park',
            coordinates: [39.281123, -76.576234]
        },
        {
            name: 'Canton Dog Park',
            type: 'park',
            coordinates: [39.283234, -76.575678]
        },
        {
            name: 'Safeway Canton',
            type: 'shopping',
            coordinates: [39.282890, -76.574567]
        }
    ]
}; 