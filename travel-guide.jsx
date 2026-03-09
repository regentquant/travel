import { useState } from "react";

const categories = [
  {
    id: "food",
    icon: "🍽",
    title: "Food & Dining",
    color: "#E8453C",
    bg: "#FFF5F4",
    items: [
      { name: "JOEY Valley Fair", desc: "Upscale fusion, great steaks & cocktails", area: "Santa Clara", drive: "5 min", rating: 4.8, price: "$$", tags: ["Date Night", "Fusion"] },
      { name: "Restaurant Gish", desc: "Korean-influenced tasting menu, creative 5-course dinner", area: "Santa Clara", drive: "5 min", rating: 4.7, price: "$$$", tags: ["Fine Dining", "Korean Fusion"] },
      { name: "GIWA", desc: "Stunning floral-themed Korean fusion, brunch favorite", area: "Santa Clara", drive: "10 min", rating: 4.6, price: "$$", tags: ["Brunch", "Instagrammable"] },
      { name: "Puesto", desc: "Upscale Mexican tacos & margaritas", area: "Santa Clara", drive: "10 min", rating: 4.5, price: "$$", tags: ["Mexican", "Casual"] },
      { name: "Eataly", desc: "Italian marketplace + restaurant, 3 floors", area: "Valley Fair", drive: "5 min", rating: 4.0, price: "$$", tags: ["Italian", "Market"] },
      { name: "Cannery Row Restaurants", desc: "Seafood & waterfront dining in Monterey", area: "Monterey", drive: "1 hr 15 min", rating: null, price: "$$", tags: ["Seafood", "Ocean View"] },
      { name: "Old Fisherman's Wharf", desc: "Clam chowder, calamari, ocean views", area: "Monterey", drive: "1 hr 15 min", rating: null, price: "$$", tags: ["Seafood", "Tourist Spot"] },
    ],
  },
  {
    id: "wine",
    icon: "🍷",
    title: "Wineries & Tasting",
    color: "#7B2D8E",
    bg: "#FAF5FC",
    items: [
      { name: "Castello di Amorosa", desc: "Medieval castle winery with tours & tastings", area: "Calistoga, Napa", drive: "1 hr 50 min", rating: 4.2, price: "$$$", tags: ["Castle", "Tours"] },
      { name: "Trefethen Family Vineyards", desc: "Historic estate, excellent guided tastings", area: "Napa", drive: "1 hr 30 min", rating: 4.9, price: "$$", tags: ["Estate", "Top Rated"] },
      { name: "Domaine Carneros", desc: "French château, sparkling wine specialists", area: "Napa", drive: "1 hr 20 min", rating: 4.3, price: "$$", tags: ["Sparkling", "Views"] },
      { name: "V. Sattui Winery", desc: "Wine + deli + picnic grounds, family friendly", area: "St Helena", drive: "1 hr 40 min", rating: 4.3, price: "$$", tags: ["Picnic", "Deli"] },
      { name: "Monticello Vineyards", desc: "Hidden gem, relaxed & personal experience", area: "Napa", drive: "1 hr 30 min", rating: 4.8, price: "$$", tags: ["Hidden Gem", "Intimate"] },
    ],
  },
  {
    id: "nature",
    icon: "🌲",
    title: "Hiking & Nature",
    color: "#2D7D46",
    bg: "#F2FAF5",
    items: [
      { name: "Henry Cowell Redwoods", desc: "Easy 0.8mi loop through old-growth redwoods", area: "Felton", drive: "45 min", rating: 4.8, price: "Free/$10 parking", tags: ["Redwoods", "Easy"] },
      { name: "Big Basin Redwoods", desc: "Stunning redwoods, ocean view summit trail", area: "Boulder Creek", drive: "55 min", rating: 4.8, price: "Reserve parking", tags: ["Redwoods", "Moderate"] },
      { name: "Castle Rock State Park", desc: "Huge boulders, rock climbing, panoramic views", area: "Los Gatos", drive: "35 min", rating: 4.8, price: "Free/$10 parking", tags: ["Bouldering", "Views"] },
      { name: "Wilder Ranch State Park", desc: "Coastal cliffs, farm animals, fern grotto", area: "Santa Cruz", drive: "50 min", rating: 4.8, price: "$10 parking", tags: ["Coastal", "Family"] },
      { name: "Forest of Nisene Marks", desc: "Peaceful redwood forest, creek trails", area: "Aptos", drive: "55 min", rating: 4.8, price: "$8 parking", tags: ["Peaceful", "Creekside"] },
    ],
  },
  {
    id: "beach",
    icon: "🏖",
    title: "Beaches & Coast",
    color: "#1A8FB5",
    bg: "#F0FAFE",
    items: [
      { name: "Half Moon Bay State Beach", desc: "Wide sandy beach, coastal trail, picnic areas", area: "Half Moon Bay", drive: "40 min", rating: 4.7, price: "$10 parking", tags: ["Sandy", "Family"] },
      { name: "Poplar Beach", desc: "Dog-friendly, blufftop trail, Ritz-Carlton nearby", area: "Half Moon Bay", drive: "40 min", rating: 4.7, price: "$10 parking", tags: ["Dog Friendly", "Walking"] },
      { name: "Gray Whale Cove", desc: "Dramatic cliff staircase, secluded cove", area: "Half Moon Bay", drive: "45 min", rating: 4.7, price: "Free", tags: ["Secluded", "Scenic"] },
      { name: "Natural Bridges State Beach", desc: "Sea arch, tide pools, monarch butterflies in winter", area: "Santa Cruz", drive: "50 min", rating: 4.7, price: "Free street / $10 lot", tags: ["Tide Pools", "Iconic"] },
    ],
  },
  {
    id: "museum",
    icon: "🎨",
    title: "Museums & Culture",
    color: "#C76E1A",
    bg: "#FFF8F0",
    items: [
      { name: "SF Museum of Modern Art", desc: "7 floors of modern & contemporary art", area: "San Francisco", drive: "55 min", rating: 4.6, price: "$25-30", tags: ["Modern Art", "World Class"] },
      { name: "de Young Museum", desc: "Art + free observation tower with city views", area: "Golden Gate Park, SF", drive: "1 hr", rating: 4.6, price: "$15-20", tags: ["Art", "Views"] },
      { name: "Asian Art Museum", desc: "Thousands of years of Asian art & culture", area: "San Francisco", drive: "55 min", rating: 4.6, price: "$15-20", tags: ["Asian Art", "Gift Shop"] },
      { name: "Exploratorium", desc: "Hands-on science museum, Bay views, all ages", area: "Pier 15, SF", drive: "1 hr", rating: 4.7, price: "$30-40", tags: ["Interactive", "Science"] },
      { name: "California Academy of Sciences", desc: "Aquarium + planetarium + rainforest under one roof", area: "Golden Gate Park, SF", drive: "1 hr", rating: 4.6, price: "$35-45", tags: ["Aquarium", "Planetarium"] },
    ],
  },
  {
    id: "attractions",
    icon: "🎢",
    title: "Attractions & Fun",
    color: "#D4508B",
    bg: "#FFF5FA",
    items: [
      { name: "Monterey Bay Aquarium", desc: "World-famous aquarium, otters, kelp forest, jellyfish", area: "Monterey", drive: "1 hr 15 min", rating: 4.6, price: "$55-65", tags: ["Must See", "Family"] },
      { name: "California's Great America", desc: "Theme park with roller coasters & water park", area: "Santa Clara", drive: "5 min", rating: 4.3, price: "$45-75", tags: ["Rides", "Water Park"] },
      { name: "Dennis the Menace Playground", desc: "Legendary creative playground for kids", area: "Monterey", drive: "1 hr 15 min", rating: 4.7, price: "Free", tags: ["Kids", "Free"] },
    ],
  },
  {
    id: "scenic",
    icon: "📸",
    title: "Scenic Drives & Viewpoints",
    color: "#3A5BA0",
    bg: "#F0F4FC",
    items: [
      { name: "Big Sur / Bixby Bridge", desc: "Iconic bridge, dramatic cliffs, jaw-dropping views", area: "Big Sur", drive: "2 hr", rating: 4.8, price: "Free", tags: ["Iconic", "Photography"] },
      { name: "17-Mile Drive", desc: "Coastal road through Pebble Beach, Lone Cypress", area: "Pacific Grove", drive: "1 hr 20 min", rating: null, price: "$11.50/car", tags: ["Scenic Drive", "Golf"] },
      { name: "Highway 1 Scenic Byway", desc: "Stunning Pacific coast road, many pulloffs", area: "Carmel → Big Sur", drive: "1 hr 30 min+", rating: 4.9, price: "Free", tags: ["Road Trip", "Coast"] },
      { name: "Seal Beach Overlook", desc: "Watch seals from the cliff, possible condor sightings", area: "Big Sur", drive: "2 hr", rating: 4.8, price: "Free", tags: ["Wildlife", "Easy Stop"] },
    ],
  },
  {
    id: "shopping",
    icon: "🛍",
    title: "Shopping & Markets",
    color: "#6B5B3E",
    bg: "#FAF8F4",
    items: [
      { name: "Gilroy Premium Outlets", desc: "60+ stores, up to 60% off major brands", area: "Gilroy", drive: "35 min", rating: 4.3, price: "Varies", tags: ["Outlets", "Deals"] },
      { name: "Santana Row", desc: "Upscale outdoor shopping, dining, entertainment", area: "San Jose", drive: "10 min", rating: null, price: "Varies", tags: ["Upscale", "Dining"] },
      { name: "Mountain View Farmers Market", desc: "Huge Sunday market, live music, fresh produce", area: "Mountain View", drive: "15 min", rating: 4.7, price: "Free entry", tags: ["Sunday Only", "Fresh"] },
      { name: "California Ave Farmers Market", desc: "Sunday market in Palo Alto, bakeries & organic produce", area: "Palo Alto", drive: "20 min", rating: 4.7, price: "Free entry", tags: ["Sunday Only", "Organic"] },
    ],
  },
];

const driveColor = (drive) => {
  if (!drive) return "#999";
  const num = parseInt(drive);
  if (drive.includes("hr")) return "#C0392B";
  if (num <= 15) return "#27AE60";
  if (num <= 45) return "#F39C12";
  return "#E67E22";
};

const driveLabel = (drive) => {
  if (!drive) return "";
  const num = parseInt(drive);
  if (drive.includes("hr")) return "far";
  if (num <= 15) return "close";
  return "mid";
};

export default function TravelGuide() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "All" },
    { id: "close", label: "< 30 min" },
    { id: "mid", label: "30–60 min" },
    { id: "far", label: "1+ hr" },
  ];

  const matchesFilter = (drive) => {
    if (filter === "all") return true;
    if (!drive) return filter === "far";
    const num = parseInt(drive);
    const hasHr = drive.includes("hr");
    if (filter === "close") return !hasHr && num < 30;
    if (filter === "mid") return !hasHr && num >= 30 && num <= 60;
    if (filter === "far") return hasHr || num > 60;
    return true;
  };

  return (
    <div style={{ fontFamily: "'Playfair Display', Georgia, serif", background: "#FAFAF7", minHeight: "100vh", padding: "0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        color: "#fff",
        padding: "48px 24px 40px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.06, backgroundImage: "radial-gradient(circle at 20% 50%, #fff 1px, transparent 1px), radial-gradient(circle at 80% 20%, #fff 1px, transparent 1px)", backgroundSize: "60px 60px, 40px 40px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 14, fontFamily: "'DM Sans', sans-serif", letterSpacing: 4, textTransform: "uppercase", color: "#E5B86F", marginBottom: 12 }}>7-Day Road Trip from Santa Clara</div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 900, margin: "0 0 8px", lineHeight: 1.15, letterSpacing: -0.5 }}>Your Activity Menu</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, opacity: 0.7, maxWidth: 500, margin: "0 auto", lineHeight: 1.5 }}>Everything within 2 hours of home. Pick what excites you, skip what doesn't. No rigid schedule.</p>
        </div>
      </div>

      {/* Drive time filter */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "20px 16px 8px", flexWrap: "wrap" }}>
        {filterOptions.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              fontWeight: 600,
              padding: "8px 18px",
              borderRadius: 24,
              border: filter === f.id ? "2px solid #1a1a2e" : "2px solid #ddd",
              background: filter === f.id ? "#1a1a2e" : "#fff",
              color: filter === f.id ? "#fff" : "#555",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Categories */}
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "12px 16px 60px" }}>
        {categories.map((cat) => {
          const filteredItems = cat.items.filter((item) => matchesFilter(item.drive));
          if (filteredItems.length === 0) return null;
          const isOpen = active === cat.id;

          return (
            <div key={cat.id} style={{ marginBottom: 12 }}>
              {/* Category header */}
              <button
                onClick={() => setActive(isOpen ? null : cat.id)}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "18px 20px",
                  background: isOpen ? cat.bg : "#fff",
                  border: `2px solid ${isOpen ? cat.color + "40" : "#eee"}`,
                  borderRadius: isOpen ? "16px 16px 0 0" : 16,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 28 }}>{cat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: "#1a1a2e" }}>{cat.title}</div>
                  <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#888", marginTop: 2 }}>
                    {filteredItems.length} option{filteredItems.length !== 1 ? "s" : ""}
                  </div>
                </div>
                <span style={{
                  fontSize: 20,
                  color: cat.color,
                  transform: isOpen ? "rotate(90deg)" : "rotate(0)",
                  transition: "transform 0.25s ease",
                  fontFamily: "system-ui",
                }}>›</span>
              </button>

              {/* Items */}
              {isOpen && (
                <div style={{
                  background: cat.bg,
                  border: `2px solid ${cat.color}40`,
                  borderTop: "none",
                  borderRadius: "0 0 16px 16px",
                  padding: "4px 12px 12px",
                }}>
                  {filteredItems.map((item, i) => (
                    <div
                      key={i}
                      style={{
                        background: "#fff",
                        borderRadius: 12,
                        padding: "14px 16px",
                        marginTop: 8,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      {/* Drive time badge */}
                      <div style={{
                        minWidth: 64,
                        textAlign: "center",
                        paddingTop: 2,
                      }}>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13,
                          fontWeight: 700,
                          color: driveColor(item.drive),
                          background: driveColor(item.drive) + "14",
                          borderRadius: 8,
                          padding: "6px 8px",
                          lineHeight: 1.2,
                        }}>
                          🚗 {item.drive}
                        </div>
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "#1a1a2e" }}>{item.name}</span>
                          {item.rating && (
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#F39C12", background: "#FFF8E1", padding: "2px 7px", borderRadius: 6 }}>
                              ★ {item.rating}
                            </span>
                          )}
                          {item.price && (
                            <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, color: "#888" }}>{item.price}</span>
                          )}
                        </div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#666", marginTop: 3, lineHeight: 1.4 }}>
                          {item.desc}
                        </div>
                        <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "#999", marginTop: 2 }}>
                          📍 {item.area}
                        </div>
                        <div style={{ display: "flex", gap: 5, marginTop: 6, flexWrap: "wrap" }}>
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: 11,
                                fontWeight: 500,
                                color: cat.color,
                                background: cat.color + "12",
                                borderRadius: 6,
                                padding: "3px 8px",
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer tip */}
      <div style={{
        textAlign: "center",
        padding: "0 24px 40px",
        fontFamily: "'DM Sans', sans-serif",
        fontSize: 13,
        color: "#aaa",
        maxWidth: 500,
        margin: "0 auto",
        lineHeight: 1.6,
      }}>
        💡 Pro tip: Combine nearby activities. Monterey = Aquarium + Cannery Row food + 17-Mile Drive. Napa = 2–3 wineries + picnic. Half Moon Bay = beach + coastal trail + seafood.
      </div>
    </div>
  );
}
