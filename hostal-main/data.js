// Hostel Management System - Data File

// Rooms Data
const roomsData = [
    {
        id: 1,
        name: "Single Room",
        type: "Single",
        icon: "🛏️",
        capacity: 1,
        features: [
            "✓ Single Bed",
            "✓ Study Table & Chair",
            "✓ Wardrobe",
            "✓ Attached Bathroom"
        ],
        available: 5,
        total: 10
    },
    {
        id: 2,
        name: "Double Room",
        type: "Double",
        icon: "🛏️🛏️",
        capacity: 2,
        features: [
            "✓ Two Beds",
            "✓ Study Tables",
            "✓ Shared Wardrobe",
            "✓ Attached Bathroom"
        ],
        available: 8,
        total: 20
    },
    {
        id: 3,
        name: "Triple Room",
        type: "Triple",
        icon: "🛏️🛏️🛏️",
        capacity: 3,
        features: [
            "✓ Three Beds",
            "✓ Study Area",
            "✓ Storage Space",
            "✓ Common Bathroom"
        ],
        available: 4,
        total: 15
    },
    {
        id: 4,
        name: "Quad Room",
        type: "Quad",
        icon: "🏠",
        capacity: 4,
        features: [
            "✓ Four Beds",
            "✓ Large Study Area",
            "✓ Storage Lockers",
            "✓ Common Bathroom"
        ],
        available: 2,
        total: 5
    }
];

// Facilities Data
const facilitiesData = [
    {
        id: 1,
        icon: "📶",
        title: "High-Speed WiFi",
        description: "24/7 internet connectivity throughout the hostel"
    },
    {
        id: 2,
        icon: "🍽️",
        title: "Mess Facility",
        description: "Nutritious meals three times a day with varied menu"
    },
    {
        id: 3,
        icon: "🧺",
        title: "Laundry Service",
        description: "Washing machines and dryers available for students"
    },
    {
        id: 4,
        icon: "📚",
        title: "Study Room",
        description: "Quiet study areas with reading lights and tables"
    },
    {
        id: 5,
        icon: "🏋️",
        title: "Gym",
        description: "Well-equipped gym for fitness enthusiasts"
    },
    {
        id: 6,
        icon: "🎮",
        title: "Recreation Room",
        description: "Games, TV, and entertainment facilities"
    },
    {
        id: 7,
        icon: "🔒",
        title: "24/7 Security",
        description: "CCTV surveillance and security personnel"
    },
    {
        id: 8,
        icon: "⚕️",
        title: "Medical Support",
        description: "First aid and medical assistance available"
    }
];

// Hostel Information
const hostelInfo = {
    boys: {
        hostName: "Mr. Kumar Silva",
        address: "Block A, Campus Road, Colombo 07",
        contactNum: "+94 77 123 4567",
        capacity: 100,
        currentOccupancy: 85,
        facilities: [
            "Gym",
            "Study Room",
            "Recreation Room",
            "24/7 Security"
        ]
    },
    girls: {
        hostName: "Mrs. Priya Fernando",
        address: "Block B, Campus Road, Colombo 07",
        contactNum: "+94 77 234 5678",
        capacity: 100,
        currentOccupancy: 92,
        facilities: [
            "Beauty Salon",
            "Study Room",
            "Recreation Room",
            "24/7 Security"
        ]
    }
};

// Staff Data
const staffData = [
    {
        id: 1,
        name: "Mr. Kumar Silva",
        position: "Boys Hostel Warden",
        contact: "+94 77 123 4567",
        address: "Colombo 07"
    },
    {
        id: 2,
        name: "Mrs. Priya Fernando",
        position: "Girls Hostel Warden",
        contact: "+94 77 234 5678",
        address: "Colombo 07"
    },
    {
        id: 3,
        name: "Mr. Ravi Perera",
        position: "Maintenance Staff",
        contact: "+94 77 345 6789",
        address: "Colombo 07"
    }
];

// Student Data (Sample)
const studentsData = [
    {
        stuId: 1,
        name: "John Doe",
        rollNum: "2021/CS/001",
        phoneNum: "+94 77 111 2222",
        address: "Kandy, Sri Lanka",
        email: "john@student.lk",
        roomId: 1,
        admissionDate: "2021-09-01"
    },
    {
        stuId: 2,
        name: "Jane Smith",
        rollNum: "2021/CS/002",
        phoneNum: "+94 77 222 3333",
        address: "Galle, Sri Lanka",
        email: "jane@student.lk",
        roomId: 2,
        admissionDate: "2021-09-01"
    }
];

// Bill Data (Sample)
const billsData = [
    {
        billId: 1,
        stuId: 1,
        amount: 15000,
        type: "Monthly Rent",
        date: "2025-01-01",
        status: "Paid"
    },
    {
        billId: 2,
        stuId: 1,
        amount: 5000,
        type: "Mess Bill",
        date: "2025-01-01",
        status: "Paid"
    }
];

// Admin Data
const adminData = {
    adminId: 1,
    username: "admin",
    password: "admin123", // In real app, this would be hashed
    staffDetail: "Manage all staff information and assignments",
    stuDetails: "Manage student registrations and records",
    roomDetails: "Manage room allocations and availability",
    messBill: "Generate and manage mess bills"
};

// Rules and Regulations
const hostelRules = [
    "Maintain discipline and decorum at all times",
    "No smoking or consumption of alcohol within hostel premises",
    "Entry only with valid ID card",
    "Visitors allowed only during specified hours (9 AM - 6 PM)",
    "Maintain cleanliness in rooms and common areas",
    "Respect noise levels, especially during study hours (7 PM - 10 PM)",
    "Report any maintenance issues immediately",
    "No subletting of rooms allowed",
    "Follow mess timings strictly",
    "Participate in hostel activities and meetings"
];

// Mess Timings
const messTimings = {
    breakfast: "7:00 AM - 9:00 AM",
    lunch: "12:30 PM - 2:00 PM",
    snacks: "5:00 PM - 6:00 PM",
    dinner: "7:30 PM - 9:00 PM"
};

// Contact Information
const contactInfo = {
    address: "University Campus, Colombo 07, Sri Lanka",
    phone: "+94 11 234 5678",
    email: "info@campushostel.lk",
    emergencyContact: "+94 77 999 8888",
    office Hours: "Monday - Friday: 9:00 AM - 5:00 PM"
};

// Export all data (for use in script.js)
const hostelData = {
    rooms: roomsData,
    facilities: facilitiesData,
    hostel: hostelInfo,
    staff: staffData,
    students: studentsData,
    bills: billsData,
    admin: adminData,
    rules: hostelRules,
    messTimings: messTimings,
    contact: contactInfo
};