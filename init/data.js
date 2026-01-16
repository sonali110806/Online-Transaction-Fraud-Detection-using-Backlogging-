const sampleListings = 
  [
    {
    name: "Wireless Headphones",
    description: "High quality noise cancelling headphones",
    image: {
      filename: "headphones",
      url: "https://images.unsplash.com/photo-1674989844487-722ec77b9b81?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lyZWxlc3MlMjBibHVldG9vdGglMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww"
    },
    type: "Electronics",
    price: 2999,
    category: "Audio",
    availability: "In Stock"
  },
  {
    name: "Smart Watch",
    description: "Fitness tracking smart watch",
    image: {
      filename: "watch",
      url: "https://images.unsplash.com/photo-1660844817855-3ecc7ef21f12?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
    },
    type: "Electronics",
    price: 3999,
    category: "Wearable",
    availability: "In Stock"
  },
  {
    name: "Laptop Backpack",
    description: "Waterproof laptop backpack",
    image: {
      filename: "bag",
      url: "https://images.unsplash.com/photo-1611461527944-1a718332613b?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bGFwdG9wJTIwYmFnfGVufDB8fDB8fHww"
    },
    type: "Accessory",
    price: 1499,
    category: "Bags",
    availability: "In Stock"
  },
  {
    name: "Bluetooth Speaker",
    description: "Portable bluetooth speaker",
    image: {
      filename: "speaker",
      url: "https://images.unsplash.com/photo-1589001181560-a8df1800e501?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ymx1ZXRvb3RoJTIwc3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D"
    },
    type: "Electronics",
    price: 1999,
    category: "Audio",
    availability: "In Stock"
  },
  {
    name: "DSLR Camera",
    description: "Professional DSLR camera",
    image: {
      filename: "camera",
      url: "https://images.unsplash.com/photo-1606986628470-26a67fa4730c?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZHNsciUyMGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
    },
    type: "Electronics",
    price: 45999,
    category: "Camera",
    availability: "Limited Stock"
  },
  {
    name: "Running Shoes",
    description: "Comfortable sports shoes",
    image: {
      filename: "shoes",
      url: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvZXN8ZW58MHx8MHx8fDA%3D"
    },
    type: "Footwear",
    price: 2499,
    category: "Sports",
    availability: "In Stock"
  },
  {
    name: "Office Chair",
    description: "Ergonomic office chair",
    image: {
      filename: "chair",
      url: "https://images.unsplash.com/photo-1688578735352-9a6f2ac3b70a?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwY2hhaXJ8ZW58MHx8MHx8fDA%3D"
    },
    type: "Furniture",
    price: 6999,
    category: "Office",
    availability: "In Stock"
  },
  {
    name: "Study Table",
    description: "Wooden study table",
    image: {
      filename: "table",
      url: "https://images.unsplash.com/photo-1526887593587-a307ea5d46b4?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0dWR5JTIwdGFibGV8ZW58MHx8MHx8fDA%3D"
    },
    type: "Furniture",
    price: 8999,
    category: "Home",
    availability: "In Stock"
  },
  {
    name: "LED Desk Lamp",
    description: "Adjustable LED lamp",
    image: {
      filename: "lamp",
      url: "https://images.unsplash.com/photo-1708513427809-728a7913fc9f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxlZCUyMGRlc2slMjBsYW1wfGVufDB8fDB8fHww"
    },
    type: "Home",
    price: 999,
    category: "Lighting",
    availability: "In Stock"
  },
  {
    name: "Coffee Mug",
    description: "Ceramic coffee mug",
    image: {
      filename: "mug",
      url: "https://images.unsplash.com/photo-1546379753-abb7fd8cfb93?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29mZmVlJTIwbXVnfGVufDB8fDB8fHww"
    },
    type: "Kitchen",
    price: 299,
    category: "Utensils",
    availability: "In Stock"
  },

  // 10 MORE PRODUCTS
  {
    name: "Notebook",
    description: "Hard cover notebook",
    image: { filename: "notebook", 
      url: "https://images.unsplash.com/photo-1620275765334-4ed948bb4502?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm90ZWJvb2t8ZW58MHx8MHx8fDA%3D" },
    type: "Stationery",
    price: 199,
    category: "Books",
    availability: "In Stock"
  },
  {
    name: "Pen Set",
    description: "Premium pen set",
    image: { filename: "pen", 
      url: "https://images.unsplash.com/photo-1605641987825-c1664626d79f?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVuJTIwc2V0fGVufDB8fDB8fHww" },
    type: "Stationery",
    price: 149,
    category: "Office",
    availability: "In Stock"
  },
  {
    name: "Water Bottle",
    description: "Steel water bottle",
    image: { filename: "bottle", 
      url: "https://images.unsplash.com/photo-1530711654140-23ef9ad45094?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdhdGVyJTIwYm90dGxlfGVufDB8fDB8fHww" },
    type: "Utility",
    price: 499,
    category: "Daily Use",
    availability: "In Stock"
  },
  {
    name: "Power Bank",
    description: "10000mAh power bank",
    image: { filename: "powerbank",
       url: "https://images.unsplash.com/photo-1614399113305-a127bb2ca893?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cG93ZXIlMjBiYW5rfGVufDB8fDB8fHww" },
    type: "Electronics",
    price: 1299,
    category: "Charging",
    availability: "In Stock"
  },
  {
    name: "Keyboard",
    description: "Mechanical keyboard",
    image: { filename: "keyboard", 
      url: "https://plus.unsplash.com/premium_photo-1683543124615-fb42e42c6201?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8a2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D" },
    type: "Electronics",
    price: 2499,
    category: "Computer",
    availability: "In Stock"
  },
  {
    name: "Mouse",
    description: "Wireless mouse",
    image: { filename: "mouse", 
      url: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91c2V8ZW58MHx8MHx8fDA%3D" },
    type: "Electronics",
    price: 799,
    category: "Computer",
    availability: "In Stock"
  },
  {
    name: "Yoga Mat",
    description: "Anti-slip yoga mat",
    image: { filename: "yoga",
       url: "https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D" },
    type: "Fitness",
    price: 999,
    category: "Health",
    availability: "In Stock"
  },
  {
    name: "Sunglasses",
    description: "UV protected sunglasses",
    image: { filename: "sunglasses", 
      url: "https://images.unsplash.com/photo-1608539733292-190446b22b83?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D" },
    type: "Fashion",
    price: 1299,
    category: "Accessories",
    availability: "In Stock"
  },
  {
    name: "Wallet",
    description: "Leather wallet",
    image: { filename: "wallet", 
      url: "https://images.unsplash.com/photo-1579014134953-1580d7f123f3?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2FsbGV0fGVufDB8fDB8fHww" },
    type: "Fashion",
    price: 899,
    category: "Accessories",
    availability: "In Stock"
  },
  {
    name: "Travel Trolley",
    description: "Large travel trolley bag",
    image: { filename: "trolley",
       url: "https://plus.unsplash.com/premium_photo-1756137396133-252d108c1911?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    type: "Travel",
    price: 6999,
    category: "Luggage",
    availability: "In Stock"
  }
];
module.exports = { data: sampleListings };