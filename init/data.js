const sampleListings = [
  
    {
      title: "Cozy Beachfront Cottage",
      description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-118.7798, 34.0259]
      }
    },
    {
      title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New York City",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-74.0060, 40.7128]
      }
    },
    {
      title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1000,
      location: "Aspen",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-106.8370, 39.1911]
      }
    },
    {
      title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
      geometry: {
        type: "Point",
        coordinates: [11.2558, 43.7696]
      }
    },
    {
      title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 800,
      location: "Portland",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-122.6765, 45.5231]
      }
    },
    {
      title: "Beachfront Paradise",
      description: "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
      geometry: {
        type: "Point",
        coordinates: [-86.8475, 21.1619]
      }
    },
    {
      title: "Rustic Cabin by the Lake",
      description: "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-120.0448, 39.0968]
      }
    },
    {
      title: "Luxury Penthouse with City Views",
      description: "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      image: {
        filename: "listingimage",
        url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
      geometry: {
        type: "Point",
        coordinates: [-118.2437, 34.0522]
      }
    },
      {
        title: "Countryside Farmhouse",
        description: "Escape the hustle and bustle in this charming countryside farmhouse. Enjoy fresh air, green pastures, and simple living.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1542457270-1e017cff6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybWhvdXNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 700,
        location: "Nashville",
        country: "United States",
        geometry: {
          type: "Point",
          coordinates: [-86.7816, 36.1627]
        }
      },
      {
        title: "Cozy Scandinavian Cabin",
        description: "Find tranquility in this Scandinavian-style cabin nestled in snowy mountains. Ideal for a winter escape.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1516457527541-4e9f2cf19b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FiaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1300,
        location: "Bergen",
        country: "Norway",
        geometry: {
          type: "Point",
          coordinates: [5.3221, 60.3928]
        }
      },
      {
        title: "Desert Oasis Villa",
        description: "An exotic retreat in the heart of the desert. Enjoy luxury and serenity in this private villa with stunning views.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1533310355747-013bd3f78573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzZXJ0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 3000,
        location: "Dubai",
        country: "United Arab Emirates",
        geometry: {
          type: "Point",
          coordinates: [55.2708, 25.2048]
        }
      },
      {
        title: "Coastal Cliffside Cottage",
        description: "Perched on the edge of a cliff, this cottage offers breathtaking ocean views. Perfect for nature lovers.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xpZmZzaWRlJTIwaG91c2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2200,
        location: "Santorini",
        country: "Greece",
        geometry: {
          type: "Point",
          coordinates: [25.4310, 36.3932]
        }
      },
      {
        title: "Traditional Ryokan",
        description: "Immerse yourself in Japanese culture in this traditional ryokan. Enjoy tatami rooms, futon beds, and onsen baths.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1506629082955-511b1e95b6de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8amFwYW4lMjBob3RlbHN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1800,
        location: "Kyoto",
        country: "Japan",
        geometry: {
          type: "Point",
          coordinates: [135.7681, 35.0116]
        }
      },
      {
        title: "French Countryside Manor",
        description: "Experience French charm in this rustic manor surrounded by vineyards and lavender fields.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1564236484098-6e2183a2b1cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlbmNoJTIwY291bnRyeXNpZGUlMjB2aWxsYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 2600,
        location: "Provence",
        country: "France",
        geometry: {
          type: "Point",
          coordinates: [5.9466, 43.8375]
        }
      },
      {
        title: "Art Deco Apartment",
        description: "Step into the roaring twenties in this chic art deco apartment in the city center.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1560073379-9d4e1d1e18a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXJ0JTIwZGVjb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 1450,
        location: "Miami",
        country: "United States",
        geometry: {
          type: "Point",
          coordinates: [-80.1918, 25.7617]
        }
      },
      {
        title: "Ski-in/Ski-out Chalet",
        description: "Hit the slopes right from your front door in this cozy chalet located next to the best ski trails.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1554163931-b20a65a5e533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hhbGV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
        },
        price: 2400,
        location: "Whistler",
        country: "Canada",
        geometry: {
          type: "Point",
          coordinates: [-122.9574, 50.1163]
        }
      },
      {
        title: "Safari Lodge",
        description: "Get close to nature in this safari lodge. Watch wildlife from the comfort of your private deck.",
        image: {
          filename: "listingimage",
          url: "https://images.unsplash.com/photo-1580657014524-318710bd04d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2FmYXJpJTIwbG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        },
        price: 3500,
        location: "Maasai Mara",
        country: "Kenya",
        geometry: {
          type: "Point",
          coordinates: [35.214, -1.4061]
        }
      }
    
    
 ];

module.exports = { data: sampleListings };