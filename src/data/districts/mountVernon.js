// Mount Vernon District Data Structure
export const mountVernonDistrict = {
    name: 'Mount Vernon',
    id: 'mountVernon',
    // Boundary coordinates for the glowing effect
    boundary: {
        type: 'Polygon',
        coordinates: [
            // Starting from northwest corner, going clockwise
            [39.299123, -76.619234], // Preston & Howard St
            [39.299012, -76.613890], // Preston & St. Paul St
            [39.295234, -76.613923], // Monument & St. Paul St
            [39.295345, -76.619345], // Monument & Howard St
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
            name: 'W Preston Street',
            type: 'major',
            coordinates: [
                [39.299123, -76.619234], // Howard St
                [39.299090, -76.617567], // Park Ave
                [39.299045, -76.615890], // Charles St
                [39.299012, -76.613890]  // St. Paul St
            ]
        },
        {
            name: 'W Monument Street',
            type: 'major',
            coordinates: [
                [39.295345, -76.619345], // Howard St
                [39.295312, -76.617678], // Park Ave
                [39.295267, -76.615923], // Charles St
                [39.295234, -76.613923]  // St. Paul St
            ]
        },
        {
            name: 'N Howard Street',
            type: 'major',
            coordinates: [
                [39.299123, -76.619234], // Preston St
                [39.298123, -76.619267], // Madison St
                [39.296789, -76.619301], // Centre St
                [39.295345, -76.619345]  // Monument St
            ]
        },
        {
            name: 'St. Paul Street',
            type: 'major',
            coordinates: [
                [39.299012, -76.613890], // Preston St
                [39.298012, -76.613901], // Madison St
                [39.296678, -76.613912], // Centre St
                [39.295234, -76.613923]  // Monument St
            ]
        }
    ],
    // Internal streets
    internalStreets: [
        {
            name: 'W Madison Street',
            type: 'secondary',
            coordinates: [
                [39.298123, -76.619267], // Howard St
                [39.298090, -76.617590], // Park Ave
                [39.298045, -76.615923], // Charles St
                [39.298012, -76.613901]  // St. Paul St
            ]
        },
        {
            name: 'W Centre Street',
            type: 'secondary',
            coordinates: [
                [39.296789, -76.619301], // Howard St
                [39.296756, -76.617634], // Park Ave
                [39.296712, -76.615956], // Charles St
                [39.296678, -76.613912]  // St. Paul St
            ]
        },
        {
            name: 'N Charles Street',
            type: 'secondary',
            coordinates: [
                [39.299045, -76.615890], // Preston St
                [39.298045, -76.615923], // Madison St
                [39.296712, -76.615956], // Centre St
                [39.295267, -76.615923]  // Monument St
            ]
        },
        {
            name: 'Park Avenue',
            type: 'secondary',
            coordinates: [
                [39.299090, -76.617567], // Preston St
                [39.298090, -76.617590], // Madison St
                [39.296756, -76.617634], // Centre St
                [39.295312, -76.617678]  // Monument St
            ]
        }
    ],
    // Intersection points for accurate positioning
    intersections: [
        // Preston Street Intersections
        {
            id: 'preston_howard',
            name: 'Preston & Howard',
            coordinates: [39.299123, -76.619234],
            connecting: ['W Preston Street', 'N Howard Street']
        },
        {
            id: 'preston_park',
            name: 'Preston & Park',
            coordinates: [39.299090, -76.617567],
            connecting: ['W Preston Street', 'Park Avenue']
        },
        {
            id: 'preston_charles',
            name: 'Preston & Charles',
            coordinates: [39.299045, -76.615890],
            connecting: ['W Preston Street', 'N Charles Street']
        },
        {
            id: 'preston_stpaul',
            name: 'Preston & St. Paul',
            coordinates: [39.299012, -76.613890],
            connecting: ['W Preston Street', 'St. Paul Street']
        },
        // Monument Street Intersections
        {
            id: 'monument_howard',
            name: 'Monument & Howard',
            coordinates: [39.295345, -76.619345],
            connecting: ['W Monument Street', 'N Howard Street']
        },
        {
            id: 'monument_park',
            name: 'Monument & Park',
            coordinates: [39.295312, -76.617678],
            connecting: ['W Monument Street', 'Park Avenue']
        },
        {
            id: 'monument_charles',
            name: 'Monument & Charles',
            coordinates: [39.295267, -76.615923],
            connecting: ['W Monument Street', 'N Charles Street']
        },
        {
            id: 'monument_stpaul',
            name: 'Monument & St. Paul',
            coordinates: [39.295234, -76.613923],
            connecting: ['W Monument Street', 'St. Paul Street']
        }
    ],
    // Points of Interest (landmarks, venues, etc.)
    landmarks: [
        {
            name: 'Washington Monument',
            type: 'monument',
            coordinates: [39.296789, -76.615923]
        },
        {
            name: 'Walters Art Museum',
            type: 'museum',
            coordinates: [39.296712, -76.616789]
        },
        {
            name: 'Peabody Library',
            type: 'library',
            coordinates: [39.296345, -76.615678]
        },
        {
            name: 'Hotel Revival Baltimore',
            type: 'hotel',
            coordinates: [39.297234, -76.615890]
        },
        {
            name: 'Hotel Ulysses',
            type: 'hotel',
            coordinates: [39.297890, -76.614567]
        },
        {
            name: 'UMMC Midtown Campus',
            type: 'hospital',
            coordinates: [39.298567, -76.617234]
        },
        {
            name: 'Topside',
            type: 'restaurant',
            coordinates: [39.297234, -76.615890]
        },
        {
            name: 'Sugarvale',
            type: 'bar',
            coordinates: [39.297123, -76.615678]
        },
        {
            name: 'Unity Bar & Restaurant',
            type: 'restaurant',
            coordinates: [39.296456, -76.615234]
        }
    ]
}; 