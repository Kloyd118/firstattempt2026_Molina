// server/api/data.js
export default defineEventHandler((event) => {
  return {
    user: {
      name: "Juan Dela Cruz",
      email: "juan.delacruz@addu.edu.ph",
      phone: "+63 912 345 6789",
      address: "Jacinto St, Davao City, Philippines",
      gradYear: "2015",
      degree: "BS Computer Science",
      studentId: "2011-12345",
      currentJob: "Senior Software Engineer",
      company: "Tech Innovators Inc.",
      profileStrength: 85,
      verified: true,
      skills: ["Vue.js", "Nuxt 3", "Node.js", "UI/UX Design", "Project Management"]
    },
    events: [
      // UPCOMING EVENTS
      { 
        id: 1, 
        title: "Alumni Homecoming", 
        date: "15 Oct 2026", 
        time: "6:00 PM", 
        location: "Martin Hall, AdDU", 
        type: "upcoming", 
        description: "Join us for the annual AdDU Alumni Homecoming. A night of celebration, networking, and reconnecting with old friends.",
        seats: 150
      },
      
      // PAST EVENTS
      { 
        id: 2, 
        title: "AdDU Christmas Gala 2025", 
        date: "18 Dec 2025", 
        time: "7:00 PM", 
        location: "Seda Hotel, Davao", 
        type: "past", 
        description: "Our annual alumni Christmas gathering and charity dinner. Thank you to everyone who attended and donated to the scholarship fund!",
        seats: 200
      },
      { 
        id: 3, 
        title: "Business Networking Night", 
        date: "05 Feb 2026", 
        time: "6:00 PM", 
        location: "Finster Hall, AdDU", 
        type: "past", 
        description: "An evening dedicated to AdDU alumni entrepreneurs connecting with local business leaders and investors.",
        seats: 80
      },

      // SEMINARS & MENTORSHIP
      { 
        id: 4, 
        title: "Tech Mentorship Program", 
        date: "10 Nov 2026", 
        time: "1:00 PM", 
        location: "Online via Zoom", 
        type: "seminar", 
        description: "Get matched with an experienced AdDU alumni mentor in the tech industry to guide your career path.",
        seats: 50
      },
      { 
        id: 5, 
        title: "Web Development Seminar", 
        date: "22 Nov 2026", 
        time: "10:00 AM", 
        location: "Community Center", 
        type: "seminar", 
        description: "A deep dive into modern web frameworks led by industry experts.",
        seats: 100
      }
    ],
    directory: [
      { id: 1, name: "Peter Jay Torrefiel", batch: "2018", course: "BS Information Technology", industry: "Tech", location: "Davao City" },
      { id: 2, name: "Maki Yanagida", batch: "2015", course: "BS Computer Science", industry: "Finance", location: "Manila" },
      { id: 3, name: "Jessa Orcine", batch: "2020", course: "AB Communication", industry: "Marketing", location: "Cebu City" }
    ],
    chats: []
  }
})