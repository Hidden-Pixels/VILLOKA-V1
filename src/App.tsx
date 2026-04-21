import { useEffect, useMemo, useState } from 'react';

// ─── DATA ────────────────────────────────────────────────────────────────────
const LISTINGS = [
  {
    id: 1,
    titel: 'Luxury Villa with Rice Field View',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 850000,
    huur: null,
    locatie: 'Ubud',
    gebied: 'Central Bali',
    slaapkamers: 4,
    badkamers: 4,
    woonOpp: 420,
    perceel: 1200,
    lat: -8.5069,
    lng: 115.2625,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 2,
    titel: 'Modern Beachfront Villa Seminyak',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 1200000,
    huur: 8500,
    locatie: 'Seminyak',
    gebied: 'South Bali',
    slaapkamers: 5,
    badkamers: 5,
    woonOpp: 580,
    perceel: 900,
    lat: -8.6905,
    lng: 115.1638,
    makelaar: 'Island Dream Properties',
    makelaarRating: 8.7,
    makelaarReviews: 34,
    foto: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 3,
    titel: 'Tropical Joglo Estate Canggu',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 650000,
    huur: 4200,
    locatie: 'Canggu',
    gebied: 'South Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 280,
    perceel: 600,
    lat: -8.6478,
    lng: 115.1385,
    makelaar: 'Canggu Living',
    makelaarRating: 9.4,
    makelaarReviews: 72,
    foto: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 4,
    titel: 'Land Plot Klungkung Panoramic',
    type: 'Land',
    contract: 'Freehold',
    prijs: 180000,
    huur: null,
    locatie: 'Klungkung',
    gebied: 'East Bali',
    slaapkamers: 0,
    badkamers: 0,
    woonOpp: 0,
    perceel: 3500,
    lat: -8.5395,
    lng: 115.4026,
    makelaar: 'Bali Land Experts',
    makelaarRating: 8.2,
    makelaarReviews: 21,
    foto: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 5,
    titel: 'Cliffside Villa Uluwatu',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 2100000,
    huur: 12000,
    locatie: 'Uluwatu',
    gebied: 'Bukit Peninsula',
    slaapkamers: 6,
    badkamers: 6,
    woonOpp: 720,
    perceel: 1800,
    lat: -8.8291,
    lng: 115.0849,
    makelaar: 'Bukit Luxury Estates',
    makelaarRating: 9.6,
    makelaarReviews: 89,
    foto: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=900&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 6,
    titel: 'Rice Paddy Villa Tegallalang',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 420000,
    huur: 2800,
    locatie: 'Tegallalang',
    gebied: 'Central Bali',
    slaapkamers: 2,
    badkamers: 2,
    woonOpp: 180,
    perceel: 800,
    lat: -8.4312,
    lng: 115.2794,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 7,
    titel: 'Commercial Plot Kuta Central',
    type: 'Land',
    contract: 'Freehold',
    prijs: 950000,
    huur: null,
    locatie: 'Kuta',
    gebied: 'South Bali',
    slaapkamers: 0,
    badkamers: 0,
    woonOpp: 0,
    perceel: 2200,
    lat: -8.7215,
    lng: 115.1685,
    makelaar: 'Island Dream Properties',
    makelaarRating: 8.7,
    makelaarReviews: 34,
    foto: 'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=900&q=85',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 8,
    titel: 'Boutique Villa Complex Sanur',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 780000,
    huur: 5500,
    locatie: 'Sanur',
    gebied: 'South Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 320,
    perceel: 700,
    lat: -8.7058,
    lng: 115.2624,
    makelaar: 'Sanur Realty Group',
    makelaarRating: 8.9,
    makelaarReviews: 43,
    foto: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 9,
    titel: 'Hillside Villa with Ocean View',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 1450000,
    huur: 9800,
    locatie: 'Jimbaran',
    gebied: 'Bukit Peninsula',
    slaapkamers: 4,
    badkamers: 4,
    woonOpp: 480,
    perceel: 1100,
    lat: -8.7757,
    lng: 115.1698,
    makelaar: 'Bukit Luxury Estates',
    makelaarRating: 9.6,
    makelaarReviews: 89,
    foto: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 10,
    titel: 'Surf Camp Villa Canggu',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 520000,
    huur: 3500,
    locatie: 'Canggu',
    gebied: 'South Bali',
    slaapkamers: 5,
    badkamers: 5,
    woonOpp: 350,
    perceel: 500,
    lat: -8.652,
    lng: 115.132,
    makelaar: 'Canggu Living',
    makelaarRating: 9.4,
    makelaarReviews: 72,
    foto: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 11,
    titel: 'Traditional Balinese Compound',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 390000,
    huur: 2400,
    locatie: 'Ubud',
    gebied: 'Central Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 240,
    perceel: 900,
    lat: -8.512,
    lng: 115.264,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 12,
    titel: 'Beachside Land Plot Nusa Dua',
    type: 'Land',
    contract: 'Freehold',
    prijs: 750000,
    huur: null,
    locatie: 'Nusa Dua',
    gebied: 'Bukit Peninsula',
    slaapkamers: 0,
    badkamers: 0,
    woonOpp: 0,
    perceel: 2800,
    lat: -8.8013,
    lng: 115.2317,
    makelaar: 'Bali Land Experts',
    makelaarRating: 8.2,
    makelaarReviews: 21,
    foto: 'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1439130490301-25e322d88054?w=900&q=85',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
      'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=900&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 13,
    titel: 'Luxury Penthouse Seminyak',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 980000,
    huur: 7200,
    locatie: 'Seminyak',
    gebied: 'South Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 290,
    perceel: 290,
    lat: -8.685,
    lng: 115.16,
    makelaar: 'Island Dream Properties',
    makelaarRating: 8.7,
    makelaarReviews: 34,
    foto: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 14,
    titel: 'Eco Villa in Jungle Setting',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 310000,
    huur: 2100,
    locatie: 'Ubud',
    gebied: 'Central Bali',
    slaapkamers: 2,
    badkamers: 2,
    woonOpp: 160,
    perceel: 1400,
    lat: -8.52,
    lng: 115.27,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=85',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 15,
    titel: 'Investment Villa Complex Berawa',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 1680000,
    huur: 11000,
    locatie: 'Canggu',
    gebied: 'South Bali',
    slaapkamers: 6,
    badkamers: 6,
    woonOpp: 650,
    perceel: 1300,
    lat: -8.643,
    lng: 115.133,
    makelaar: 'Canggu Living',
    makelaarRating: 9.4,
    makelaarReviews: 72,
    foto: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 16,
    titel: 'Waterfront Land Amed East Bali',
    type: 'Land',
    contract: 'Freehold',
    prijs: 220000,
    huur: null,
    locatie: 'Amed',
    gebied: 'East Bali',
    slaapkamers: 0,
    badkamers: 0,
    woonOpp: 0,
    perceel: 4000,
    lat: -8.3492,
    lng: 115.6508,
    makelaar: 'Bali Land Experts',
    makelaarRating: 8.2,
    makelaarReviews: 21,
    foto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 17,
    titel: 'Modern Minimalist Villa Pererenan',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 580000,
    huur: 3900,
    locatie: 'Canggu',
    gebied: 'South Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 260,
    perceel: 550,
    lat: -8.638,
    lng: 115.124,
    makelaar: 'Canggu Living',
    makelaarRating: 9.4,
    makelaarReviews: 72,
    foto: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 18,
    titel: 'Cliffside Land Plot Bingin',
    type: 'Land',
    contract: 'Leasehold',
    prijs: 145000,
    huur: null,
    locatie: 'Uluwatu',
    gebied: 'Bukit Peninsula',
    slaapkamers: 0,
    badkamers: 0,
    woonOpp: 0,
    perceel: 1600,
    lat: -8.81,
    lng: 115.09,
    makelaar: 'Bukit Luxury Estates',
    makelaarRating: 9.6,
    makelaarReviews: 89,
    foto: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=85',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 19,
    titel: 'Family Villa with Large Garden',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 920000,
    huur: 6500,
    locatie: 'Sanur',
    gebied: 'South Bali',
    slaapkamers: 4,
    badkamers: 4,
    woonOpp: 400,
    perceel: 1000,
    lat: -8.702,
    lng: 115.258,
    makelaar: 'Sanur Realty Group',
    makelaarRating: 8.9,
    makelaarReviews: 43,
    foto: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 20,
    titel: 'Yoga Retreat Villa Ubud',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 475000,
    huur: 3200,
    locatie: 'Ubud',
    gebied: 'Central Bali',
    slaapkamers: 4,
    badkamers: 4,
    woonOpp: 300,
    perceel: 1500,
    lat: -8.508,
    lng: 115.258,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=900&q=85',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 21,
    titel: 'Beachfront Hotel Land Kerobokan',
    type: 'Land',
    contract: 'Freehold',
    prijs: 1850000,
    huur: null,
    locatie: 'Kerobokan',
    gebied: 'South Bali',
    slaapkamers: 0,
    badkamers: 0,
    woonOpp: 0,
    perceel: 5000,
    lat: -8.67,
    lng: 115.155,
    makelaar: 'Island Dream Properties',
    makelaarRating: 8.7,
    makelaarReviews: 34,
    foto: 'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=900&q=85',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=900&q=85',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 22,
    titel: 'Infinity Pool Villa Tabanan',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 690000,
    huur: 4600,
    locatie: 'Tabanan',
    gebied: 'West Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 310,
    perceel: 850,
    lat: -8.5408,
    lng: 115.125,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 23,
    titel: 'Smart Home Villa Seminyak',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 1100000,
    huur: 7800,
    locatie: 'Seminyak',
    gebied: 'South Bali',
    slaapkamers: 4,
    badkamers: 4,
    woonOpp: 420,
    perceel: 750,
    lat: -8.687,
    lng: 115.162,
    makelaar: 'Island Dream Properties',
    makelaarRating: 8.7,
    makelaarReviews: 34,
    foto: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
    ],
    nieuw: true,
  },
  {
    id: 24,
    titel: 'Riverside Villa Ayung Valley',
    type: 'Villa',
    contract: 'Leasehold',
    prijs: 560000,
    huur: 3700,
    locatie: 'Ubud',
    gebied: 'Central Bali',
    slaapkamers: 3,
    badkamers: 3,
    woonOpp: 260,
    perceel: 1100,
    lat: -8.514,
    lng: 115.248,
    makelaar: 'Bali Prestige Realty',
    makelaarRating: 9.1,
    makelaarReviews: 58,
    foto: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=85',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=900&q=85',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&q=85',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=900&q=85',
    ],
    nieuw: false,
  },
  {
    id: 25,
    titel: 'Luxury Estate Bukit Peninsula',
    type: 'Villa',
    contract: 'Freehold',
    prijs: 3200000,
    huur: 18000,
    locatie: 'Uluwatu',
    gebied: 'Bukit Peninsula',
    slaapkamers: 8,
    badkamers: 8,
    woonOpp: 1100,
    perceel: 3000,
    lat: -8.835,
    lng: 115.082,
    makelaar: 'Bukit Luxury Estates',
    makelaarRating: 9.6,
    makelaarReviews: 89,
    foto: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
    fotos: [
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=85',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=85',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=900&q=85',
      'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=900&q=85',
    ],
    nieuw: true,
  },
];

const MAKELAARS = [
  { naam: 'Bali Prestige Realty', rating: 9.1, reviews: 58 },
  { naam: 'Island Dream Properties', rating: 8.7, reviews: 34 },
  { naam: 'Canggu Living', rating: 9.4, reviews: 72 },
];

const fmt = (n) =>
  `$${new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(n)}`;
const G = '#40BC66';
const BLK = '#000000';
const WIT = '#FFFFFF';
const GR = '#f5f5f5';
const GRDR = '#e8e8e8';

// ─── RESPONSIVE HOOK ──────────────────────────────────────────────────────────
const Icon = ({ name, size = 16, color = 'currentColor', style = {} }) => {
  const s = {
    width: size,
    height: size,
    display: 'inline-block',
    flexShrink: 0,
    ...style,
  };
  const paths = {
    search: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    home: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    map: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
        <line x1="8" y1="2" x2="8" y2="18" />
        <line x1="16" y1="6" x2="16" y2="22" />
      </svg>
    ),
    user: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    users: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    heart: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    'heart-fill': (
      <svg
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    bed: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M2 4v16" />
        <path d="M2 8h18a2 2 0 0 1 2 2v10" />
        <path d="M2 17h20" />
        <path d="M6 8v9" />
      </svg>
    ),
    bath: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.4 1.5 1.5 0 0 0-1.5 1.5v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5" />
        <path d="M3 13h18" />
      </svg>
    ),
    area: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    land: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M3 17l4-8 4 4 4-6 4 10" />
        <line x1="3" y1="20" x2="21" y2="20" />
      </svg>
    ),
    list: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
    filter: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
    phone: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.07 6.07l1.27-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    mail: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    globe: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    star: (
      <svg
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    eye: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    message: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    plus: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
    chevronLeft: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
    chevronRight: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    menu: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    close: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    logout: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        <polyline points="16 17 21 12 16 7" />
        <line x1="21" y1="12" x2="9" y2="12" />
      </svg>
    ),
    pin: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    tag: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    check: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    newsletter: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    youtube: (
      <svg viewBox="0 0 24 24" fill={color} style={s}>
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
    instagram: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" fill={color} style={s}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    value: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    building: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01" />
        <path d="M16 6h.01" />
        <path d="M12 6h.01" />
        <path d="M12 10h.01" />
        <path d="M12 14h.01" />
        <path d="M16 10h.01" />
        <path d="M16 14h.01" />
        <path d="M8 10h.01" />
        <path d="M8 14h.01" />
      </svg>
    ),
    photo: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    floorplan: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <rect x="3" y="3" width="18" height="18" rx="1" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    video: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
    arrowLeft: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    ),
    sort: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={s}
      >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="15" y2="12" />
        <line x1="3" y1="18" x2="9" y2="18" />
      </svg>
    ),
  };
  return paths[name] || null;
};

// ─── LOGO SVG ─────────────────────────────────────────────────────────────────
// Origineel logo: VILLOKA_SVG_WEB_HEADER_LOGO.svg
// viewBox="0 0 834.93 153.46" — alle paden zijn wit (cls-1: fill #fff)
// variant="light"  → wit logo op groene achtergrond (nav)
// variant="dark"   → groen logo op witte achtergrond (elders)

function useWidth() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener('resize', fn);
    return () => window.removeEventListener('resize', fn);
  }, []);
  return w;
}

// ─── NAV ──────────────────────────────────────────────────────────────────────

// === VILLOKA LOGO SVG ===
const VillokaLogo = ({ height = 17, variant = 'light' }) => {
  const fill = variant === 'light' ? '#ffffff' : '#40BC66';
  return (
    <svg
      viewBox="0 0 834.93 153.46"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block', flexShrink: 0 }}
    >
      <g>
        <path
          fill={fill}
          d="M319.12,126.14c-1.46,0-2.79-.84-3.42-2.16l-43.24-91.24c-.9-1.89-.09-4.15,1.8-5.04,1.89-.9,4.15-.09,5.04,1.8l39.82,84.03,39.82-84.03c.9-1.89,3.16-2.69,5.04-1.8,1.89.89,2.69,3.15,1.8,5.04l-43.24,91.24c-.63,1.32-1.96,2.16-3.42,2.16Z"
        />
        <path
          fill={fill}
          d="M831.14,126.14c-1.42,0-2.78-.8-3.42-2.16l-39.82-84.03-39.82,84.03c-.89,1.89-3.15,2.69-5.04,1.8-1.89-.89-2.69-3.15-1.8-5.04l43.24-91.24c.63-1.32,1.96-2.16,3.42-2.16s2.79.84,3.42,2.16l43.24,91.24c.9,1.89.09,4.15-1.8,5.04-.52.25-1.08.37-1.62.37Z"
        />
        <path
          fill={fill}
          d="M387.25,126.14c-2.09,0-3.79-1.69-3.79-3.79V31.11c0-2.09,1.69-3.79,3.79-3.79s3.79,1.69,3.79,3.79v91.24c0,2.09-1.69,3.79-3.79,3.79Z"
        />
        <path
          fill={fill}
          d="M455.38,126.14h-43.24c-2.09,0-3.79-1.69-3.79-3.79V31.11c0-2.09,1.69-3.79,3.79-3.79s3.79,1.69,3.79,3.79v87.46h39.45c2.09,0,3.79,1.69,3.79,3.79s-1.69,3.79-3.79,3.79Z"
        />
        <path
          fill={fill}
          d="M523.5,126.14h-43.24c-2.09,0-3.79-1.69-3.79-3.79V31.11c0-2.09,1.69-3.79,3.79-3.79s3.79,1.69,3.79,3.79v87.46h39.45c2.09,0,3.79,1.69,3.79,3.79s-1.69,3.79-3.79,3.79Z"
        />
        <path
          fill={fill}
          d="M594.01,126.14c-27.24,0-49.41-22.16-49.41-49.41s22.16-49.41,49.41-49.41,49.41,22.16,49.41,49.41-22.16,49.41-49.41,49.41ZM594.01,34.89c-23.07,0-41.84,18.77-41.84,41.84s18.77,41.84,41.84,41.84,41.84-18.77,41.84-41.84-18.77-41.84-41.84-41.84Z"
        />
        <g>
          <path
            fill={fill}
            d="M664.52,126.14c-2.09,0-3.79-1.69-3.79-3.79V31.11c0-2.09,1.69-3.79,3.79-3.79s3.79,1.69,3.79,3.79v91.24c0,2.09-1.69,3.79-3.79,3.79Z"
          />
          <path
            fill={fill}
            d="M719.78,126.14c-.87,0-1.75-.3-2.46-.91l-55.26-47.38c-.86-.74-1.34-1.82-1.32-2.94.02-1.13.55-2.19,1.43-2.89l55.26-43.87c1.64-1.3,4.02-1.03,5.32.61,1.3,1.64,1.03,4.02-.61,5.32l-51.66,41.01,51.77,44.39c1.59,1.36,1.77,3.75.41,5.34-.75.87-1.81,1.32-2.87,1.32Z"
          />
        </g>
      </g>
      <g>
        <path
          fill={fill}
          d="M72.17,150.85c-5.07,0-9.68-2.92-11.85-7.5L1.27,18.73C-1.84,12.19.96,4.37,7.5,1.27c6.54-3.1,14.36-.31,17.47,6.23l47.21,99.62L119.38,7.5c3.1-6.54,10.92-9.34,17.47-6.23,6.54,3.1,9.34,10.92,6.23,17.47l-59.06,124.62c-2.17,4.58-6.78,7.5-11.85,7.5Z"
        />
        <path
          fill={fill}
          d="M233.94,153.46c-4.91,0-9.62-2.77-11.86-7.5l-47.21-99.62-47.21,99.62c-3.1,6.54-10.92,9.34-17.47,6.23-6.54-3.1-9.34-10.92-6.23-17.47L163.03,10.1c2.17-4.58,6.78-7.5,11.85-7.5s9.68,2.92,11.85,7.5l59.06,124.62c3.1,6.54.31,14.36-6.23,17.47-1.81.86-3.73,1.27-5.61,1.27Z"
        />
      </g>
    </svg>
  );
};

function Nav({ pagina, setPagina, gebruiker, onLogout }) {
  const isMobile = useWidth() < 640;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 200,
          background: G,
          height: 56,
          display: 'flex',
          alignItems: 'center',
          padding: isMobile ? '0 16px' : '0 32px',
          gap: isMobile ? 0 : 24,
        }}
      >
        {/* Logo */}
        <div
          onClick={() => {
            setPagina('home');
            setMenuOpen(false);
          }}
          style={{ cursor: 'pointer' }}
        >
          <VillokaLogo height={17} variant="light" />
        </div>

        {/* Desktop nav links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: 4, marginLeft: 8 }}>
            {[
              ['zoeken', 'Buy'],
              ['zoeken', 'Rent'],
              ['listyourhouse', 'Sell'],
            ].map(([p, label]) => (
              <button
                key={label}
                onClick={() => setPagina(p)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: WIT,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 600,
                  borderRadius: 4,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {/* Right side */}
        <div
          style={{
            marginLeft: 'auto',
            display: 'flex',
            gap: 8,
            alignItems: 'center',
          }}
        >
          {!isMobile &&
            (gebruiker ? (
              <>
                <button
                  onClick={() =>
                    setPagina(
                      gebruiker.type === 'makelaar' ? 'dashboard' : 'opgeslagen'
                    )
                  }
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    color: WIT,
                    padding: '6px 14px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Icon name="home" size={16} color={WIT} />
                    My house
                  </span>
                </button>
                <button
                  onClick={onLogout}
                  style={{
                    background: 'rgba(0,0,0,0.2)',
                    border: 'none',
                    color: WIT,
                    padding: '6px 12px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                  }}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setPagina('opgeslagen')}
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    border: 'none',
                    color: WIT,
                    padding: '6px 14px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Icon name="home" size={16} color={WIT} />
                    My house
                  </span>
                </button>
                <button
                  onClick={() => setPagina('login')}
                  style={{
                    background: WIT,
                    border: 'none',
                    color: G,
                    padding: '6px 14px',
                    borderRadius: 4,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 700,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Icon name="user" size={16} color={G} />
                    Login
                  </span>
                </button>
              </>
            ))}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: WIT,
                cursor: 'pointer',
                padding: 4,
              }}
            >
              <Icon name={menuOpen ? 'close' : 'menu'} size={22} color={WIT} />
            </button>
          )}
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 56,
            left: 0,
            right: 0,
            zIndex: 199,
            background: G,
            padding: '8px 0 16px',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
          }}
        >
          {[
            ['zoeken', 'Buy'],
            ['zoeken', 'Rent'],
            ['listyourhouse', 'Sell'],
            ['makelaars', 'Find a broker'],
            ['kaart', 'Map'],
          ].map(([p, label]) => (
            <button
              key={label}
              onClick={() => {
                setPagina(p);
                setMenuOpen(false);
              }}
              style={{
                display: 'block',
                width: '100%',
                background: 'none',
                border: 'none',
                color: WIT,
                padding: '12px 20px',
                cursor: 'pointer',
                fontSize: 15,
                fontWeight: 600,
                textAlign: 'left',
              }}
            >
              {label}
            </button>
          ))}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.2)',
              margin: '8px 0',
            }}
          />
          {gebruiker ? (
            <>
              <button
                onClick={() => {
                  setPagina(
                    gebruiker.type === 'makelaar' ? 'dashboard' : 'opgeslagen'
                  );
                  setMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: WIT,
                  padding: '12px 20px',
                  cursor: 'pointer',
                  fontSize: 15,
                  fontWeight: 600,
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <Icon name="home" size={16} color={WIT} />
                  My house
                </span>
              </button>
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.7)',
                  padding: '12px 20px',
                  cursor: 'pointer',
                  fontSize: 14,
                  textAlign: 'left',
                }}
              >
                Logout ({gebruiker.naam.split(' ')[0]})
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setPagina('login');
                setMenuOpen(false);
              }}
              style={{
                display: 'block',
                width: '90%',
                margin: '8px auto 0',
                background: WIT,
                border: 'none',
                color: G,
                padding: '12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontSize: 14,
                fontWeight: 800,
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Icon name="user" size={16} color={G} />
                Login / Register
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
}

// ─── LISTING CARD (mobiel = kaart, desktop = rij) ────────────────────────────
function ListingItem({ listing, opgeslagen, onSave, onClick, isMobile }) {
  const [hover, setHover] = useState(false);

  if (isMobile) {
    return (
      <div
        onClick={onClick}
        style={{
          background: WIT,
          borderRadius: 10,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          marginBottom: 16,
          cursor: 'pointer',
          border: `1px solid ${GRDR}`,
        }}
      >
        <div style={{ position: 'relative' }}>
          <img
            src={listing.foto}
            style={{ width: '100%', height: 200, objectFit: 'cover' }}
            alt=""
          />
          {listing.nieuw && (
            <div
              style={{
                position: 'absolute',
                top: 10,
                left: 10,
                background: G,
                color: WIT,
                padding: '3px 10px',
                borderRadius: 3,
                fontSize: 11,
                fontWeight: 700,
              }}
            >
              New
            </div>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSave(listing.id);
            }}
            style={{
              position: 'absolute',
              top: 8,
              right: 8,
              background: 'rgba(255,255,255,0.9)',
              border: 'none',
              borderRadius: '50%',
              width: 36,
              height: 36,
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Icon
              name={opgeslagen ? 'heart-fill' : 'heart'}
              size={18}
              color={opgeslagen ? '#e53e3e' : '#aaa'}
            />
          </button>
        </div>
        <div style={{ padding: '14px 16px' }}>
          <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>
            {listing.titel}
          </div>
          <div style={{ fontSize: 12, color: '#777', marginBottom: 8 }}>
            {listing.locatie} · {listing.contract}
          </div>
          <div style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>
            {fmt(listing.prijs)}
          </div>
          <div
            style={{
              display: 'flex',
              gap: 12,
              fontSize: 12,
              color: '#666',
              flexWrap: 'wrap',
            }}
          >
            {listing.woonOpp > 0 && (
              <span
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <Icon name="area" size={12} color="#888" /> {listing.woonOpp}m²
              </span>
            )}
            <span
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
            >
              <Icon name="land" size={12} color="#888" /> {listing.perceel}m²
            </span>
            {listing.slaapkamers > 0 && (
              <span
                style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              >
                <Icon name="bed" size={12} color="#888" /> {listing.slaapkamers}
              </span>
            )}
          </div>
          <div style={{ marginTop: 8, fontSize: 11, color: '#aaa' }}>
            via {listing.makelaar}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: WIT,
        border: `1px solid ${hover ? G : GRDR}`,
        borderRadius: 8,
        display: 'flex',
        cursor: 'pointer',
        overflow: 'hidden',
        marginBottom: 12,
        height: 140,
        transition: 'border-color 0.15s, box-shadow 0.15s',
        boxShadow: hover
          ? '0 4px 16px rgba(64,188,102,0.15)'
          : '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <div
        style={{ position: 'relative', width: 200, flexShrink: 0, height: 140 }}
      >
        <img
          src={listing.foto}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt=""
        />
        {listing.nieuw && (
          <div
            style={{
              position: 'absolute',
              top: 8,
              left: 8,
              background: G,
              color: WIT,
              padding: '2px 10px',
              borderRadius: 3,
              fontSize: 11,
              fontWeight: 700,
            }}
          >
            New
          </div>
        )}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSave(listing.id);
          }}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            background: 'rgba(255,255,255,0.9)',
            border: 'none',
            borderRadius: '50%',
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon
            name={opgeslagen ? 'heart-fill' : 'heart'}
            size={16}
            color={opgeslagen ? '#e53e3e' : '#aaa'}
          />
        </button>
      </div>
      <div
        style={{
          padding: '14px 18px',
          flex: 1,
          textAlign: 'left',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div
            style={{
              fontSize: 15,
              fontWeight: 700,
              marginBottom: 3,
              color: BLK,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {listing.titel}
          </div>
          <div
            style={{
              fontSize: 12,
              color: '#888',
              marginBottom: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Icon name="pin" size={11} color="#bbb" />
            {listing.locatie}, Bali · {listing.contract}
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: BLK }}>
            {fmt(listing.prijs)}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{ display: 'flex', gap: 14, fontSize: 12, color: '#777' }}
          >
            {listing.woonOpp > 0 && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Icon name="area" size={12} color="#bbb" />
                {listing.woonOpp}m²
              </span>
            )}
            <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
              <Icon name="land" size={12} color="#bbb" />
              {listing.perceel}m²
            </span>
            {listing.slaapkamers > 0 && (
              <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <Icon name="bed" size={12} color="#bbb" />
                {listing.slaapkamers} bed
              </span>
            )}
          </div>
          <div style={{ fontSize: 11, color: '#bbb' }}>
            via {listing.makelaar}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ isMobile, setPagina }) {
  const sections = [
    [
      'Tools',
      [
        ['List your house', 'listyourhouse'],
        ['Find an agent', 'makelaars'],
        ['Browse', 'zoeken'],
        ['Value check', 'valuecheck'],
      ],
    ],
    [
      'Information',
      [
        ['FAQ', 'faq'],
        ['Villoka index', 'index'],
        ['Buying', 'buying'],
        ['Selling', 'selling'],
      ],
    ],
    [
      'Agents',
      [
        ['Tips & news', 'tips'],
        ['Leads', 'leads'],
        ['Products', 'products'],
      ],
    ],
    [
      'About',
      [
        ['About Villoka', 'about'],
        ['Contact', 'contact'],
        ['Advertising', 'advertising'],
      ],
    ],
  ];
  return (
    <footer style={{ background: G, width: '100%' }}>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: isMobile ? '32px 24px 0' : '48px 32px 0',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: isMobile ? 24 : 40,
            paddingBottom: 32,
          }}
        >
          {sections.map(([title, links]) => (
            <div key={title}>
              <div
                style={{
                  color: WIT,
                  fontWeight: 800,
                  fontSize: 13,
                  marginBottom: 14,
                  letterSpacing: 0.5,
                  textAlign: 'left',
                }}
              >
                {title}
              </div>
              {links.map(([label, page]) => (
                <button
                  key={label}
                  onClick={() => setPagina && setPagina(page)}
                  style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontSize: 13,
                    cursor: 'pointer',
                    display: 'block',
                    marginBottom: 8,
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    lineHeight: 1.4,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            padding: '16px 0',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
            <Icon name="youtube" size={18} color="rgba(255,255,255,0.7)" />
            <Icon name="instagram" size={16} color="rgba(255,255,255,0.7)" />
            <Icon name="facebook" size={16} color="rgba(255,255,255,0.7)" />
          </div>
          <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 11 }}>
            2025 Villoka · Privacy · Cookies · Terms of use
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── HOME ─────────────────────────────────────────────────────────────────────
function Home({ setPagina, setFilters, onDetail }) {
  const isMobile = useWidth() < 640;
  const [zoek, setZoek] = useState('');
  const [modus, setModus] = useState('Buy');

  return (
    <div style={{ paddingTop: 56 }}>
      {/* Hero - vervang HERO_IMAGE_URL met jouw eigen .jpg URL of pad */}
      <div
        style={{
          position: 'relative',
          height: isMobile ? 320 : 420,
          overflow: 'hidden',
          background: '#2a5a3a',
        }}
      >
        <img
          src="https://www.dropbox.com/scl/fi/ro63o3a35e07vbcds4yek/4836-2.jpg?rlkey=yf2bnk96rcr8lu2livysfq0qc&st=cydc1vou&dl=1"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          alt="Villoka hero"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.35)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 24,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            maxWidth: 700,
            padding: isMobile ? '0 16px' : '0 24px',
          }}
        >
          <div style={{ display: 'flex', gap: 2, marginBottom: 0 }}>
            {['Buy', 'Rent', 'Sell'].map((m) => (
              <button
                key={m}
                onClick={() => setModus(m)}
                style={{
                  background: modus === m ? WIT : 'rgba(255,255,255,0.3)',
                  border: 'none',
                  padding: isMobile ? '7px 14px' : '8px 20px',
                  cursor: 'pointer',
                  fontSize: isMobile ? 12 : 13,
                  fontWeight: 700,
                  color: modus === m ? BLK : WIT,
                  borderRadius: '6px 6px 0 0',
                }}
              >
                {m}
              </button>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              background: 'rgba(255,255,255,0.85)',
              borderRadius: '0 8px 8px 8px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}
          >
            <input
              placeholder="Address, Neighbourhood..."
              value={zoek}
              onChange={(e) => setZoek(e.target.value)}
              onKeyDown={(e) =>
                e.key === 'Enter' &&
                (setFilters((f) => ({ ...f, zoek })), setPagina('zoeken'))
              }
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                padding: isMobile ? '12px 14px' : '16px 20px',
                fontSize: isMobile ? 13 : 15,
                background: 'transparent',
                color: '#111',
              }}
            />
            <button
              onClick={() => {
                setFilters((f) => ({ ...f, zoek }));
                setPagina('zoeken');
              }}
              style={{
                background: G,
                border: 'none',
                color: WIT,
                padding: isMobile ? '0 16px' : '0 28px',
                cursor: 'pointer',
                fontSize: isMobile ? 13 : 14,
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Quick links */}
      <div
        style={{
          background: WIT,
          borderBottom: `3px solid ${G}`,
          width: '100%',
        }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex' }}>
          {[
            [
              <Icon name="users" size={isMobile ? 22 : 28} color={G} />,
              'Find a broker',
              'makelaars',
            ],
            [
              <Icon name="map" size={isMobile ? 22 : 28} color={G} />,
              'Map search',
              'zoeken',
            ],
            [
              <Icon name="value" size={isMobile ? 22 : 28} color={G} />,
              'Value check',
              'valuecheck',
            ],
          ].map(([icon, label, page]) => (
            <button
              key={label}
              onClick={() => setPagina(page)}
              style={{
                flex: 1,
                background: 'none',
                border: 'none',
                borderRight: `1px solid ${GRDR}`,
                padding: isMobile ? '14px 8px' : '20px 16px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 6,
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = GR)}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
            >
              {icon}
              <span
                style={{
                  fontSize: isMobile ? 11 : 13,
                  fontWeight: 700,
                  color: BLK,
                }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Intro tekst */}
      <div style={{ background: WIT, width: '100%' }}>
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: isMobile ? '28px 16px' : '40px 32px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? 16 : 32,
              marginBottom: isMobile ? 32 : 48,
            }}
          >
            {[0, 1].map((i) => (
              <p
                key={i}
                style={{ color: '#555', fontSize: 14, lineHeight: 1.8 }}
              >
                {i === 0
                  ? "Villoka is Bali's first complete real estate platform. Whether you're looking to buy, rent or sell — we bring all listings from trusted agents together in one place."
                  : 'Search across Ubud, Seminyak, Canggu, Uluwatu and beyond. Our verified agent network ensures every listing is accurate and ready for inquiry.'}
              </p>
            ))}
          </div>

          <h2
            style={{
              fontSize: isMobile ? 20 : 24,
              fontWeight: 800,
              marginBottom: 20,
              color: '#111111',
            }}
          >
            Popular houses
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: 16,
              marginBottom: 40,
            }}
          >
            {LISTINGS.filter((l) => l.nieuw)
              .slice(0, 3)
              .map((l) => (
                <div
                  key={l.id}
                  onClick={() => onDetail(l)}
                  style={{
                    borderRadius: 8,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <img
                    src={l.foto}
                    style={{
                      width: '100%',
                      height: isMobile ? 180 : 200,
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    alt=""
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        'linear-gradient(to top, rgba(0,0,0,0.75), transparent)',
                      padding: '28px 14px 14px',
                    }}
                  >
                    <div style={{ color: WIT, fontWeight: 700, fontSize: 15 }}>
                      {l.locatie}
                    </div>
                    <div
                      style={{
                        color: 'rgba(255,255,255,0.85)',
                        fontSize: 13,
                        marginBottom: 8,
                      }}
                    >
                      {fmt(l.prijs)}
                    </div>
                    <div
                      style={{
                        display: 'inline-block',
                        background: G,
                        color: WIT,
                        fontSize: 11,
                        fontWeight: 700,
                        padding: '4px 12px',
                        borderRadius: 4,
                      }}
                    >
                      View listing
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div
        style={{
          background: GR,
          padding: isMobile ? '40px 16px' : '60px 32px',
          width: '100%',
        }}
      >
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <h3
            style={{
              fontSize: isMobile ? 20 : 24,
              fontWeight: 800,
              marginBottom: 10,
              color: '#111111',
            }}
          >
            Let's keep in touch!
          </h3>
          <p
            style={{
              color: '#666',
              fontSize: 14,
              marginBottom: 20,
              lineHeight: 1.7,
            }}
          >
            Sign up for our newsletter and be the first to receive new listings!
          </p>
          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: isMobile ? 10 : 0,
            }}
          >
            <input
              placeholder="Enter your email"
              style={{
                flex: 1,
                border: 'none',
                borderRight: isMobile ? 'none' : 'none',
                padding: '12px 16px',
                borderRadius: isMobile ? 6 : '6px 0 0 6px',
                fontSize: 14,
                outline: 'none',
                background: '#e8e8e8',
                color: '#111',
              }}
            />
            <button
              style={{
                background: BLK,
                color: WIT,
                border: 'none',
                padding: '12px 20px',
                borderRadius: isMobile ? 6 : '0 6px 6px 0',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: 13,
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>

      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

// ─── ZOEKEN ───────────────────────────────────────────────────────────────────
function Zoeken({
  filters,
  setFilters,
  opgeslagen,
  onSave,
  onDetail,
  setPagina,
}) {
  const isMobile = useWidth() < 640;
  const [toonFilters, setToonFilters] = useState(false);
  const [actief, setActief] = useState(null);
  const [weergave, setWeergave] = useState('list');
  const [pagina, setPaginaNum] = useState(1);
  const PER_PAGINA = 8;

  const gefilterd = LISTINGS.filter((l) => {
    if (filters.type !== 'all' && l.type !== filters.type) return false;
    if (filters.contract !== 'all' && l.contract !== filters.contract)
      return false;
    if (l.prijs > filters.maxPrijs) return false;
    if (
      filters.slaapkamers &&
      l.slaapkamers > 0 &&
      l.slaapkamers < filters.slaapkamers
    )
      return false;
    if (
      filters.zoek &&
      !l.titel.toLowerCase().includes(filters.zoek.toLowerCase()) &&
      !l.locatie.toLowerCase().includes(filters.zoek.toLowerCase())
    )
      return false;
    return true;
  });

  const aantalPaginas = Math.max(1, Math.ceil(gefilterd.length / PER_PAGINA));
  const huidigePagina = Math.min(pagina, aantalPaginas);
  const zichtbaar = gefilterd.slice(
    (huidigePagina - 1) * PER_PAGINA,
    huidigePagina * PER_PAGINA
  );

  const gaNaarPagina = (n) => {
    setPaginaNum(n);
    window.scrollTo(0, 0);
  };

  return (
    <div style={{ paddingTop: 56, minHeight: '100vh', background: WIT }}>
      {/* Zoekbalk */}
      <div
        style={{
          background: WIT,
          borderBottom: `1px solid ${GRDR}`,
          padding: isMobile ? '12px 16px' : '14px 32px',
        }}
      >
        <div
          style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', gap: 8 }}
        >
          <input
            placeholder="Address, Neighbourhood"
            value={filters.zoek}
            onChange={(e) =>
              setFilters((f) => ({ ...f, zoek: e.target.value }))
            }
            style={{
              flex: 1,
              border: `1px solid ${GRDR}`,
              borderRadius: 6,
              padding: '9px 12px',
              fontSize: 14,
              outline: 'none',
              background: '#ffffff',
              color: '#111',
            }}
          />
          <button
            style={{
              background: G,
              border: 'none',
              color: WIT,
              padding: '9px 16px',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 13,
              whiteSpace: 'nowrap',
            }}
          >
            Search
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div
        style={{
          background: WIT,
          borderBottom: `1px solid ${GRDR}`,
          padding: isMobile ? '10px 16px' : '10px 32px',
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <button
              onClick={() => setToonFilters(true)}
              style={{
                background: toonFilters ? G : WIT,
                border: `1px solid ${toonFilters ? G : GRDR}`,
                color: toonFilters ? WIT : BLK,
                padding: '7px 14px',
                borderRadius: 4,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
              }}
            >
              <span
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
              >
                <Icon name="filter" size={15} color={toonFilters ? WIT : BLK} />
                Filters
              </span>
            </button>
            {!isMobile && (
              <span style={{ fontSize: 12, color: '#999' }}>
                {gefilterd.length} results
              </span>
            )}
          </div>
          <div
            style={{
              display: 'flex',
              border: `1px solid ${GRDR}`,
              borderRadius: 4,
              overflow: 'hidden',
            }}
          >
            {[
              ['list', 'List', 'menu'],
              ['kaart', 'Map', 'map'],
            ].map(([v, icon]) => (
              <button
                key={v}
                onClick={() => setWeergave(v)}
                style={{
                  background: weergave === v ? G : WIT,
                  border: 'none',
                  color: weergave === v ? WIT : BLK,
                  padding: isMobile ? '7px 12px' : '7px 16px',
                  cursor: 'pointer',
                  fontSize: 14,
                  fontWeight: weergave === v ? 700 : 400,
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Icon
                    name={icon as string as any}
                    size={15}
                    color={weergave === v ? WIT : BLK}
                  />
                  {!isMobile && (icon === 'menu' ? 'List' : 'Map')}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Modal */}
      {toonFilters && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 300,
            background: 'rgba(0,0,0,0.4)',
            display: 'flex',
            alignItems: isMobile ? 'flex-end' : 'center',
            justifyContent: 'center',
          }}
          onClick={() => setToonFilters(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: WIT,
              borderRadius: isMobile ? '16px 16px 0 0' : 10,
              padding: 24,
              width: isMobile ? '100%' : 420,
              maxHeight: isMobile ? '85vh' : 'auto',
              overflowY: 'auto',
              boxShadow: '0 -4px 32px rgba(0,0,0,0.15)',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
              }}
            >
              <span style={{ fontWeight: 800, fontSize: 17 }}>Filters</span>
              <button
                onClick={() => setToonFilters(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: 20,
                }}
              >
                <Icon name="close" size={20} color={BLK} />
              </button>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>
                Property Type
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                {['all', 'Villa', 'Land'].map((t) => (
                  <label
                    key={t}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      cursor: 'pointer',
                      fontSize: 14,
                    }}
                  >
                    <input
                      type="radio"
                      checked={filters.type === t}
                      onChange={() => {
                        setFilters((f) => ({ ...f, type: t }));
                        setPaginaNum(1);
                      }}
                      style={{ accentColor: G, width: 16, height: 16 }}
                    />
                    {t === 'all' ? 'All' : t}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 10 }}>
                Contract Type
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {['all', 'Leasehold', 'Freehold'].map((t) => (
                  <label
                    key={t}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      cursor: 'pointer',
                      fontSize: 14,
                    }}
                  >
                    <input
                      type="radio"
                      checked={filters.contract === t}
                      onChange={() => {
                        setFilters((f) => ({ ...f, contract: t }));
                        setPaginaNum(1);
                      }}
                      style={{ accentColor: G, width: 16, height: 16 }}
                    />
                    {t === 'all' ? 'All' : t}
                  </label>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                Max price: {fmt(filters.maxPrijs)}
              </div>
              <input
                type="range"
                min="0"
                max="3000000"
                step="50000"
                value={filters.maxPrijs}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    maxPrijs: parseInt(e.target.value),
                  }))
                }
                style={{ width: '100%', accentColor: G, height: 6 }}
              />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: 11,
                  color: '#aaa',
                  marginTop: 4,
                }}
              >
                <span>$0</span>
                <span>$3M+</span>
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 8 }}>
                Min bedrooms: {filters.slaapkamers || 1}
              </div>
              <input
                type="range"
                min="1"
                max="8"
                value={filters.slaapkamers || 1}
                onChange={(e) =>
                  setFilters((f) => ({
                    ...f,
                    slaapkamers: parseInt(e.target.value),
                  }))
                }
                style={{ width: '100%', accentColor: G, height: 6 }}
              />
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                onClick={() => {
                  setFilters({
                    type: 'all',
                    contract: 'all',
                    maxPrijs: 3000000,
                    zoek: '',
                    slaapkamers: 1,
                  });
                  setToonFilters(false);
                }}
                style={{
                  flex: 1,
                  background: BLK,
                  color: WIT,
                  border: 'none',
                  padding: '13px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Clear
              </button>
              <button
                onClick={() => setToonFilters(false)}
                style={{
                  flex: 1,
                  background: G,
                  color: WIT,
                  border: 'none',
                  padding: '13px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 700,
                  fontSize: 14,
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lijst of kaart */}
      {weergave === 'list' ? (
        <div
          style={{
            maxWidth: 1100,
            margin: '0 auto',
            padding: isMobile ? '16px 16px' : '24px 32px',
          }}
        >
          {isMobile && (
            <div style={{ fontSize: 12, color: '#999', marginBottom: 12 }}>
              {gefilterd.length} results
            </div>
          )}
          {gefilterd.length === 0 ? (
            <div
              style={{ textAlign: 'center', padding: '60px 0', color: '#bbb' }}
            >
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Icon name="search" size={36} color="#bbb" />
              </div>
              <div style={{ fontWeight: 600, fontSize: 15, marginTop: 12 }}>
                No results found
              </div>
            </div>
          ) : (
            zichtbaar.map((l) => (
              <ListingItem
                key={l.id}
                listing={l}
                opgeslagen={opgeslagen.includes(l.id)}
                onSave={onSave}
                onClick={() => onDetail(l)}
                isMobile={isMobile}
              />
            ))
          )}
          {/* Paginering */}
          {aantalPaginas > 1 && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 4,
                marginTop: 24,
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={() => gaNaarPagina(Math.max(1, huidigePagina - 1))}
                style={{
                  background: 'none',
                  border: `1px solid ${GRDR}`,
                  width: 34,
                  height: 34,
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14,
                  color: huidigePagina === 1 ? '#ccc' : BLK,
                }}
              >
                ‹
              </button>
              {Array.from({ length: aantalPaginas }, (_, i) => i + 1).map(
                (n) => (
                  <button
                    key={n}
                    onClick={() => gaNaarPagina(n)}
                    style={{
                      background: n === huidigePagina ? G : 'none',
                      border: `1px solid ${n === huidigePagina ? G : GRDR}`,
                      width: 34,
                      height: 34,
                      borderRadius: 4,
                      cursor: 'pointer',
                      fontSize: 13,
                      color: n === huidigePagina ? WIT : BLK,
                      fontWeight: n === huidigePagina ? 700 : 400,
                    }}
                  >
                    {n}
                  </button>
                )
              )}
              <button
                onClick={() =>
                  gaNaarPagina(Math.min(aantalPaginas, huidigePagina + 1))
                }
                style={{
                  background: 'none',
                  border: `1px solid ${GRDR}`,
                  width: 34,
                  height: 34,
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14,
                  color: huidigePagina === aantalPaginas ? '#ccc' : BLK,
                }}
              >
                ›
              </button>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            height: `calc(100vh - ${isMobile ? 110 : 116}px)`,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
          }}
        >
          {/* Kaart */}
          <div
            style={{
              flex: 1,
              position: 'relative',
              background: '#e8f0e8',
              order: isMobile ? -1 : 0,
              height: isMobile ? '50vh' : 'auto',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=1200&q=50"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.5,
              }}
              alt=""
            />
            <div style={{ position: 'absolute', inset: 0 }}>
              {gefilterd.map((l) => (
                <div
                  key={l.id}
                  onClick={() => setActief(l.id === actief ? null : l.id)}
                  style={{
                    position: 'absolute',
                    left: `${((l.lng - 114.9) / 0.7) * 100}%`,
                    top: `${((l.lat - -8.3) / 0.7) * 100}%`,
                    transform: 'translate(-50%, -50%)',
                    cursor: 'pointer',
                    zIndex: actief === l.id ? 10 : 1,
                  }}
                >
                  <div
                    style={{
                      background: actief === l.id ? G : BLK,
                      color: WIT,
                      padding: isMobile ? '3px 7px' : '4px 10px',
                      borderRadius: 20,
                      fontSize: isMobile ? 10 : 11,
                      fontWeight: 700,
                      whiteSpace: 'nowrap',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                      transform: actief === l.id ? 'scale(1.15)' : 'scale(1)',
                      transition: 'all 0.15s',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 3,
                    }}
                  >
                    <div
                      style={{
                        width: 14,
                        height: 14,
                        background: WIT,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span style={{ color: G, fontSize: 7, fontWeight: 900 }}>
                        VA
                      </span>
                    </div>
                    {fmt(l.prijs)
                      .replace('$', '')
                      .replace(',000,000', 'M')
                      .replace(',000', 'K')}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Sidebar */}
          <div
            style={{
              width: isMobile ? '100%' : 300,
              overflowY: 'auto',
              borderLeft: isMobile ? 'none' : `1px solid ${GRDR}`,
              borderTop: isMobile ? `1px solid ${GRDR}` : 'none',
              height: isMobile ? '50vh' : 'auto',
            }}
          >
            {gefilterd.map((l) => (
              <div
                key={l.id}
                onClick={() => {
                  setActief(l.id);
                  onDetail(l);
                }}
                style={{
                  display: 'flex',
                  gap: 10,
                  padding: '12px 14px',
                  borderBottom: `1px solid ${GRDR}`,
                  cursor: 'pointer',
                  background: actief === l.id ? '#f0faf4' : WIT,
                }}
              >
                <img
                  src={l.foto}
                  style={{
                    width: 56,
                    height: 44,
                    objectFit: 'cover',
                    borderRadius: 4,
                    flexShrink: 0,
                  }}
                  alt=""
                />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {l.titel}
                  </div>
                  <div style={{ fontSize: 11, color: '#888' }}>{l.locatie}</div>
                  <div style={{ fontSize: 13, fontWeight: 800 }}>
                    {fmt(l.prijs)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

// ─── DETAIL ───────────────────────────────────────────────────────────────────
function Detail({
  listing,
  opgeslagen,
  onSave,
  onBack,
  onMakelaar,
  onDetail,
  setPagina,
}) {
  const vw = useWidth();
  const isMobile = vw < 640;
  // Alleen op smal (mobile) centreren; op alle andere breedtes links uitlijnen
  const centerDetail = isMobile;
  const [tab, setTab] = useState("Foto's");
  const [beschrijvingOpen, setBeschrijvingOpen] = useState(false);
  const fotos = useMemo(() => {
    const extraFotos = Array.isArray(listing?.fotos) ? listing.fotos : [];
    const all = [listing?.foto, ...extraFotos]
      .filter(Boolean)
      .map((s) => String(s));
    // de-dupe zonder volgorde te slopen
    return all.filter((src, idx) => all.indexOf(src) === idx);
  }, [listing]);
  const [fotoIndex, setFotoIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [lightboxOpen]);

  useEffect(() => {
    // reset bij nieuwe listing
    setFotoIndex(0);
    setLightboxOpen(false);
  }, [listing?.id]);
  if (!listing) return null;

  return (
    <div style={{ paddingTop: 56, background: WIT, minHeight: '100vh' }}>
      {/* Foto's (Funda-achtig: begrensd + thumbnails + lightbox) */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '12px 0 0' : '16px 32px 0',
        }}
      >
        {isMobile ? (
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                setFotoIndex(0);
                setLightboxOpen(true);
              }}
              style={{
                width: '100%',
                padding: 0,
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                display: 'block',
              }}
            >
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 10',
                  maxHeight: 320,
                  background: GR,
                  overflow: 'hidden',
                }}
              >
                <img
                  src={fotos[fotoIndex] || listing.foto}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  alt=""
                />
              </div>
            </button>

            <button
              onClick={() => onSave(listing.id)}
              style={{
                position: 'absolute',
                top: 12,
                right: 12,
                background: 'rgba(255,255,255,0.95)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Icon
                name={opgeslagen.includes(listing.id) ? 'heart-fill' : 'heart'}
                size={18}
                color={opgeslagen.includes(listing.id) ? '#e53e3e' : '#aaa'}
              />
            </button>
            <button
              onClick={onBack}
              style={{
                position: 'absolute',
                top: 12,
                left: 12,
                background: 'rgba(255,255,255,0.95)',
                border: 'none',
                borderRadius: 10,
                padding: '8px 12px',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
                color: G,
              }}
            >
              ← Back
            </button>
          </div>
        ) : (
          <div style={{ position: 'relative' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: 6,
                height: 420,
                borderRadius: 14,
                overflow: 'hidden',
                background: GR,
              }}
            >
              <button
                onClick={() => {
                  setFotoIndex(0);
                  setLightboxOpen(true);
                }}
                style={{
                  gridRow: '1 / 3',
                  padding: 0,
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={fotos[0] || listing.foto}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  alt=""
                />
              </button>

              {[1, 2].map((i) => (
                <button
                  key={i}
                  onClick={() => {
                    setFotoIndex(i);
                    setLightboxOpen(true);
                  }}
                  style={{
                    padding: 0,
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                    overflow: 'hidden',
                  }}
                >
                  <img
                    src={fotos[i] || listing.foto}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      filter: 'brightness(0.92)',
                    }}
                    alt=""
                  />
                </button>
              ))}
            </div>

            <button
              onClick={() => onSave(listing.id)}
              style={{
                position: 'absolute',
                top: 14,
                right: 14,
                background: 'rgba(255,255,255,0.95)',
                border: 'none',
                borderRadius: '50%',
                width: 42,
                height: 42,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
              }}
            >
              <Icon
                name={opgeslagen.includes(listing.id) ? 'heart-fill' : 'heart'}
                size={18}
                color={opgeslagen.includes(listing.id) ? '#e53e3e' : '#aaa'}
              />
            </button>
            <button
              onClick={onBack}
              style={{
                position: 'absolute',
                top: 14,
                left: 14,
                background: 'rgba(255,255,255,0.95)',
                border: 'none',
                borderRadius: 12,
                padding: '10px 14px',
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 800,
                color: G,
              }}
            >
              ← Back to results
            </button>
            <button
              onClick={() => {
                setFotoIndex(0);
                setLightboxOpen(true);
              }}
              style={{
                position: 'absolute',
                right: 14,
                bottom: 14 + 74 + 10, // net boven thumbnail-row
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: WIT,
                padding: '10px 12px',
                borderRadius: 12,
                cursor: 'pointer',
                fontSize: 12,
                fontWeight: 700,
                backdropFilter: 'blur(6px)',
              }}
            >
              View all photos ({fotos.length})
            </button>
          </div>
        )}
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${GRDR}` }}>
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: isMobile ? '0 16px' : '0 32px',
            display: 'flex',
          }}
        >
          {["Foto's", 'Ground Plan', "Video's"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom:
                  tab === t ? `3px solid ${G}` : '3px solid transparent',
                padding: isMobile ? '10px 14px' : '12px 20px',
                cursor: 'pointer',
                fontSize: isMobile ? 12 : 13,
                fontWeight: tab === t ? 700 : 400,
                color: tab === t ? G : '#555',
                marginBottom: -1,
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? 16 : 28,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: 'min(1100px, 100%)',
              maxHeight: 'min(78vh, 820px)',
              display: 'grid',
              gridTemplateRows: 'auto 1fr auto',
              gap: 12,
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                color: WIT,
              }}
            >
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>
                {fotoIndex + 1} / {Math.max(1, fotos.length)}
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                style={{
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(255,255,255,0.08)',
                  color: WIT,
                  borderRadius: 12,
                  padding: '8px 12px',
                  cursor: 'pointer',
                  fontWeight: 800,
                }}
              >
                Close ✕
              </button>
            </div>

            <div
              style={{
                position: 'relative',
                background: 'rgba(255,255,255,0.06)',
                borderRadius: 16,
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={fotos[fotoIndex] || listing.foto}
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />

              <button
                onClick={() => setFotoIndex((i) => Math.max(0, i - 1))}
                disabled={fotoIndex <= 0}
                style={{
                  position: 'absolute',
                  left: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(0,0,0,0.35)',
                  color: WIT,
                  cursor: fotoIndex <= 0 ? 'not-allowed' : 'pointer',
                  opacity: fotoIndex <= 0 ? 0.35 : 1,
                  fontSize: 18,
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>
              <button
                onClick={() =>
                  setFotoIndex((i) => Math.min(fotos.length - 1, i + 1))
                }
                disabled={fotoIndex >= fotos.length - 1}
                style={{
                  position: 'absolute',
                  right: 14,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.25)',
                  background: 'rgba(0,0,0,0.35)',
                  color: WIT,
                  cursor:
                    fotoIndex >= fotos.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: fotoIndex >= fotos.length - 1 ? 0.35 : 1,
                  fontSize: 18,
                }}
                aria-label="Next photo"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        style={{
          padding: isMobile ? '20px 16px' : '32px 32px',
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
        {!isMobile && (
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-start',
            }}
          >
            <button
              onClick={onBack}
              style={{
                background: 'none',
                border: 'none',
                color: G,
                cursor: 'pointer',
                fontSize: 13,
                fontWeight: 700,
                padding: 0,
                marginBottom: 16,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              ← Back to results
            </button>
          </div>
        )}

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 300px',
            gap: isMobile ? 24 : 40,
          }}
        >
          {/* LEFT COLUMN: description + kenmerken */}
          <div>
            <div style={{ textAlign: centerDetail ? 'center' : 'left' }}>
              <h1
                style={{
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 800,
                  marginBottom: 8,
                  color: '#111111',
                }}
              >
                {listing.titel}
              </h1>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: isMobile ? 10 : 20,
                  fontSize: 13,
                  color: '#555',
                  marginBottom: 12,
                  justifyContent: centerDetail ? 'center' : 'flex-start',
                }}
              >
                {listing.woonOpp > 0 && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <Icon name="area" size={13} color="#666" />{' '}
                    {listing.woonOpp}m²
                  </span>
                )}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <Icon name="land" size={13} color="#666" /> {listing.perceel}
                  m²
                </span>
                {listing.slaapkamers > 0 && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    <Icon name="bed" size={13} color="#666" />{' '}
                    {listing.slaapkamers}
                  </span>
                )}
              </div>
              <div
                style={{
                  fontSize: isMobile ? 24 : 28,
                  fontWeight: 900,
                  marginBottom: 20,
                  color: '#111111',
                }}
              >
                {fmt(listing.prijs)}{' '}
                <span style={{ fontSize: 13, fontWeight: 400, color: '#888' }}>
                  ({listing.contract})
                </span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 8 }}>
                Description
              </h3>
              <p
                style={{
                  color: '#555',
                  lineHeight: 1.8,
                  fontSize: 14,
                  marginBottom: 8,
                }}
              >
                This exceptional {listing.type.toLowerCase()} is situated in{' '}
                {listing.locatie}, one of Bali's most prestigious areas. The
                property offers an outstanding combination of traditional
                Balinese architecture and modern amenities, set amidst lush
                tropical gardens with panoramic views.
                {listing.huur && (
                  <>
                    {' '}
                    Also available for monthly rental at{' '}
                    <strong>{fmt(listing.huur)}/month</strong>.
                  </>
                )}
              </p>

              {/* Uitklapbare extra beschrijving */}
              <div
                style={{
                  overflow: 'hidden',
                  maxHeight: beschrijvingOpen ? 400 : 0,
                  transition: 'max-height 0.4s ease',
                }}
              >
                <p
                  style={{
                    color: '#555',
                    lineHeight: 1.8,
                    fontSize: 14,
                    marginBottom: 8,
                    paddingTop: 4,
                  }}
                >
                  The {listing.type === 'Villa' ? 'villa' : 'property'} features
                  high-end finishes throughout, with an open-plan living and
                  dining area that flows seamlessly onto a spacious terrace and
                  {listing.slaapkamers > 0
                    ? ` ${listing.slaapkamers} generously sized bedrooms,`
                    : ''}{' '}
                  each with its own ensuite bathroom. The private infinity pool
                  overlooks the surrounding
                  {listing.locatie === 'Ubud' ||
                  listing.locatie === 'Tegallalang'
                    ? ' rice terraces and jungle canopy'
                    : listing.locatie === 'Uluwatu' ||
                      listing.locatie === 'Jimbaran'
                    ? ' Indian Ocean and clifftop'
                    : ' tropical garden and coconut palms'}
                  .
                </p>
                <p
                  style={{
                    color: '#555',
                    lineHeight: 1.8,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  The property is fully equipped with high-speed fibre internet,
                  air conditioning in all rooms, a modern kitchen, and 24/7
                  security. Located just minutes from world-class restaurants,
                  beach clubs, and surf spots in {listing.locatie}. Ideal for
                  both personal use and as a high-yield investment with an
                  estimated ROI of 8–12% per annum through short-term rentals.
                </p>
                {listing.type === 'Land' && (
                  <p
                    style={{
                      color: '#555',
                      lineHeight: 1.8,
                      fontSize: 14,
                      marginBottom: 8,
                    }}
                  >
                    This is a rare opportunity to secure a prime{' '}
                    {listing.perceel}m² plot in one of Bali's most sought-after
                    areas. Zoning permits villa or boutique resort development.
                    Infrastructure including water, electricity and road access
                    is already in place.
                  </p>
                )}
              </div>

              <button
                onClick={() => setBeschrijvingOpen(!beschrijvingOpen)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: G,
                  cursor: 'pointer',
                  fontSize: 13,
                  fontWeight: 700,
                  padding: 0,
                  marginTop: 8,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}
              >
                <span
                  style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s',
                    transform: beschrijvingOpen
                      ? 'rotate(45deg)'
                      : 'rotate(0deg)',
                    fontSize: 16,
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
                {beschrijvingOpen
                  ? 'Hide description'
                  : 'Read the full description'}
              </button>

              {/* Broker sectie — alleen op mobiel, onder de beschrijving */}
              {isMobile && (
                <div
                  style={{
                    marginTop: 24,
                    border: `1px solid ${GRDR}`,
                    borderRadius: 8,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      marginBottom: 14,
                      cursor: 'pointer',
                    }}
                    onClick={() => onMakelaar(listing.makelaar)}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        background: BLK,
                        borderRadius: 6,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ color: G, fontWeight: 900, fontSize: 13 }}>
                        VA
                      </span>
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, fontSize: 14 }}>
                        {listing.makelaar}
                      </div>
                      <div
                        style={{
                          color: G,
                          fontWeight: 700,
                          fontSize: 13,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}
                      >
                        <Icon name="phone" size={13} color={G} /> Show phone
                      </div>
                      <div style={{ color: '#888', fontSize: 11 }}>
                        Until 17:00
                      </div>
                    </div>
                  </div>
                  <button
                    style={{
                      width: '100%',
                      background: G,
                      border: 'none',
                      color: WIT,
                      padding: '12px',
                      borderRadius: 6,
                      cursor: 'pointer',
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 8,
                    }}
                  >
                    Contact Broker
                  </button>
                  <button
                    onClick={() => onSave(listing.id)}
                    style={{
                      width: '100%',
                      background: opgeslagen.includes(listing.id)
                        ? '#f0faf4'
                        : WIT,
                      border: `1px solid ${
                        opgeslagen.includes(listing.id) ? G : GRDR
                      }`,
                      color: opgeslagen.includes(listing.id) ? G : '#666',
                      padding: '10px',
                      borderRadius: 6,
                      cursor: 'pointer',
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {opgeslagen.includes(listing.id)
                      ? 'Saved'
                      : 'Save property'}
                  </button>
                </div>
              )}
            </div>
            {/* end description inner div */}

            {/* Kenmerken in left column */}
            <div style={{ marginTop: 40, textAlign: 'left' }}>
              <h2
                style={{
                  fontSize: isMobile ? 20 : 24,
                  fontWeight: 800,
                  marginBottom: 24,
                  color: BLK,
                  textAlign: 'left',
                  paddingLeft: 0,
                }}
              >
                Property details
              </h2>
              {[
                {
                  icon: 'tag',
                  title: 'Transfer',
                  rows: [
                    [
                      'Asking price',
                      `${fmt(listing.prijs)} (${listing.contract})`,
                    ],
                    [
                      'Price per m²',
                      listing.woonOpp > 0
                        ? fmt(Math.round(listing.prijs / listing.woonOpp)) +
                          ' / m²'
                        : 'See plot price',
                    ],
                    [
                      'Rental income',
                      listing.huur
                        ? fmt(listing.huur) + ' / month'
                        : 'Not applicable',
                    ],
                    ['Status', 'Available'],
                    [
                      'Offered since',
                      [
                        'Jan 2024',
                        'Mar 2024',
                        'May 2024',
                        'Aug 2024',
                        'Oct 2024',
                      ][listing.id % 5],
                    ],
                  ],
                },
                {
                  icon: 'building',
                  title: 'Construction',
                  rows: [
                    ['Property type', listing.type],
                    [
                      'Style',
                      [
                        'Tropical Balinese / Modern',
                        'Traditional Joglo',
                        'Contemporary minimalist',
                        'Balinese resort style',
                      ][listing.id % 4],
                    ],
                    [
                      'Roof type',
                      [
                        'Thatched alang-alang',
                        'Terracotta tiles',
                        'Flat concrete + garden',
                        'Joglo pyramid',
                      ][listing.id % 4],
                    ],
                    ['Year built', 2018 + (listing.id % 6)],
                    [
                      'Condition',
                      ['Excellent', 'Very good', 'Good — recently renovated'][
                        listing.id % 3
                      ],
                    ],
                    [
                      'Furnished',
                      listing.woonOpp > 0
                        ? [
                            'Fully furnished',
                            'Semi-furnished',
                            'Unfurnished — ready to design',
                          ][listing.id % 3]
                        : 'N/A',
                    ],
                  ],
                },
                {
                  icon: 'area',
                  title: 'Surface areas',
                  rows: [
                    ...(listing.woonOpp > 0
                      ? [
                          ['Living area', `${listing.woonOpp} m²`],
                          [
                            'Terrace / veranda',
                            `${Math.round(listing.woonOpp * 0.22)} m²`,
                          ],
                          ['Pool area', `${20 + listing.slaapkamers * 8} m²`],
                        ]
                      : []),
                    ['Plot size', `${listing.perceel} m²`],
                    [
                      'Garden',
                      listing.woonOpp > 0
                        ? `${
                            listing.perceel - listing.woonOpp
                          } m² tropical garden`
                        : `${listing.perceel} m² undeveloped`,
                    ],
                  ],
                },
                ...(listing.slaapkamers > 0
                  ? [
                      {
                        icon: 'home',
                        title: 'Layout',
                        rows: [
                          [
                            'Bedrooms',
                            `${listing.slaapkamers} bedrooms (all en-suite)`,
                          ],
                          ['Bathrooms', `${listing.badkamers} bathrooms`],
                          [
                            'Living area',
                            listing.slaapkamers > 3
                              ? '2 living rooms + dining'
                              : '1 open-plan living & dining',
                          ],
                          [
                            'Kitchen',
                            [
                              'Western + Balinese outdoor kitchen',
                              'Open-plan modern kitchen',
                              'Full kitchen + outdoor BBQ',
                            ][listing.id % 3],
                          ],
                          [
                            'Floors',
                            listing.slaapkamers > 4
                              ? '2 floors + rooftop terrace'
                              : '1 floor (single level)',
                          ],
                          [
                            'Staff quarters',
                            listing.slaapkamers > 3
                              ? 'Yes — private staff area'
                              : 'No',
                          ],
                        ],
                      },
                    ]
                  : []),
                ...(listing.woonOpp > 0
                  ? [
                      {
                        icon: 'check',
                        title: 'Facilities',
                        rows: [
                          [
                            'Pool',
                            [
                              'Private infinity pool',
                              'Private lap pool 12x4m',
                              'Plunge pool + overflow',
                            ][listing.id % 3],
                          ],
                          ['Garden', 'Tropical landscaped garden'],
                          [
                            'Parking',
                            `${1 + (listing.id % 3)} covered car port(s)`,
                          ],
                          [
                            'Security',
                            [
                              '24/7 guard + CCTV',
                              'Gated compound + guard',
                              'CCTV + remote monitoring',
                            ][listing.id % 3],
                          ],
                          ['Internet', 'Fibre optic 100 Mbps'],
                          ['Air conditioning', 'Split AC in all rooms'],
                          ['Water supply', 'PDAM city water + private well'],
                          ['Electricity', '3.500–5.500 VA'],
                        ],
                      },
                    ]
                  : []),
                {
                  icon: 'globe',
                  title: 'Legal & Ownership',
                  rows: [
                    [
                      'Land certificate',
                      [
                        'IMB + SHM (Hak Milik)',
                        'PBG + SHGB (extendable 25yr)',
                        'IMB + HGB via PT PMA',
                      ][listing.id % 3],
                    ],
                    [
                      'Zoning',
                      listing.type === 'Land'
                        ? 'Tourism / residential zone'
                        : 'Residential tourism zone (WP)',
                    ],
                    [
                      'Foreign ownership',
                      'Leasehold or PT PMA structure available',
                    ],
                    [
                      'Annual land tax (PBB)',
                      `~${fmt(Math.round(listing.prijs * 0.0008))} / year`,
                    ],
                    ['Notary (PPAT) fee', '~1% of purchase price'],
                    ['Agent commission', '3–5% (negotiable)'],
                  ],
                },
              ].map(({ icon, title, rows }) => (
                <div
                  key={title}
                  style={{
                    border: `1px solid ${GRDR}`,
                    borderRadius: 10,
                    marginBottom: 12,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      padding: '13px 18px',
                      borderBottom: `1px solid ${GRDR}`,
                      background: '#fafafa',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    <Icon name={icon} size={15} color={BLK} />
                    <span style={{ fontWeight: 700, fontSize: 14, color: BLK }}>
                      {title}
                    </span>
                  </div>
                  {rows.map(([label, value]) => (
                    <div
                      key={label}
                      style={{
                        display: 'flex',
                        padding: '17px 18px',
                        borderBottom: `1px solid ${GRDR}`,
                        fontSize: 13,
                      }}
                    >
                      <span
                        style={{
                          color: '#666',
                          width: 180,
                          flexShrink: 0,
                          textAlign: 'left',
                        }}
                      >
                        {label}
                      </span>
                      <span
                        style={{
                          color: BLK,
                          fontWeight: 500,
                          textAlign: 'left',
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            {/* end kenmerken div */}
          </div>
          {/* end LEFT COLUMN */}

          {/* RIGHT COLUMN: Sticky sidebar — makelaar + ad */}
          {!isMobile && (
            <div
              style={{
                position: 'sticky',
                top: 72,
                alignSelf: 'start',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}
            >
              {/* Makelaar */}
              <div
                style={{
                  border: `1px solid ${GRDR}`,
                  borderRadius: 8,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 16,
                    cursor: 'pointer',
                  }}
                  onClick={() => onMakelaar(listing.makelaar)}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      background: BLK,
                      borderRadius: 6,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <span style={{ color: G, fontWeight: 900, fontSize: 14 }}>
                      VA
                    </span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: 14 }}>
                      {listing.makelaar}
                    </div>
                    <div
                      style={{
                        color: G,
                        fontWeight: 700,
                        fontSize: 13,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                      }}
                    >
                      <Icon name="phone" size={14} color={G} /> Show phone
                    </div>
                    <div style={{ color: '#888', fontSize: 11 }}>
                      Until 17:00
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    width: '100%',
                    background: G,
                    border: 'none',
                    color: WIT,
                    padding: '12px',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontWeight: 700,
                    fontSize: 14,
                    marginBottom: 8,
                  }}
                >
                  Contact Broker
                </button>
                <button
                  onClick={() => onSave(listing.id)}
                  style={{
                    width: '100%',
                    background: opgeslagen.includes(listing.id)
                      ? '#f0faf4'
                      : WIT,
                    border: `1px solid ${
                      opgeslagen.includes(listing.id) ? G : GRDR
                    }`,
                    color: opgeslagen.includes(listing.id) ? G : '#666',
                    padding: '10px',
                    borderRadius: 6,
                    cursor: 'pointer',
                    fontSize: 13,
                    fontWeight: 600,
                  }}
                >
                  {opgeslagen.includes(listing.id) ? 'Saved' : 'Save property'}
                </button>
              </div>
              {/* Ad box */}
              <div
                style={{
                  border: `1px solid ${GRDR}`,
                  borderRadius: 8,
                  overflow: 'hidden',
                  background: '#f8f8f8',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: 10,
                    color: '#bbb',
                    letterSpacing: 1,
                    marginBottom: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  Advertisement
                </div>
                <div
                  style={{
                    width: '100%',
                    height: 200,
                    background: 'linear-gradient(135deg, #e8f4e8, #c8e8c8)',
                    borderRadius: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `1px dashed ${GRDR}`,
                  }}
                >
                  <Icon name="star" size={28} color={G} />
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      color: G,
                      marginTop: 8,
                    }}
                  >
                    Your ad here
                  </div>
                  <div style={{ fontSize: 11, color: '#888', marginTop: 4 }}>
                    Contact us for rates
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ─── BUURT ─────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '0 16px 32px' : '0 32px 40px',
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 20 : 24,
            fontWeight: 800,
            marginBottom: 20,
            color: BLK,
          }}
        >
          Neighbourhood
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 16,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              border: `1px solid ${GRDR}`,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
                paddingBottom: 14,
                borderBottom: `1px solid ${GRDR}`,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  overflow: 'hidden',
                  flexShrink: 0,
                }}
              >
                <img
                  src={listing.foto}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  alt=""
                />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 15, color: G }}>
                  {listing.locatie}
                </div>
                <div style={{ fontSize: 12, color: '#888' }}>
                  {listing.gebied}, Bali
                </div>
              </div>
            </div>
            {[
              ['Expat community', 'Very active'],
              [
                'Avg. price / m²',
                fmt(
                  Math.round(
                    listing.prijs /
                      Math.max(listing.woonOpp || listing.perceel, 1)
                  )
                ) + ' / m²',
              ],
              ['Restaurants nearby', `${20 + listing.id * 3}+`],
              [
                'Distance to beach',
                ['< 500m', '< 1 km', '2 km', '5 km', '15 km'][listing.id % 5],
              ],
              [
                'Distance to airport',
                ['8 km', '12 km', '18 km', '35 km', '45 km'][listing.id % 5],
              ],
              [
                'Nearest hospital',
                [
                  'BIMC Kuta (6 km)',
                  'BIMC Nusa Dua (8 km)',
                  'Kasih Ibu (12 km)',
                ][listing.id % 3],
              ],
            ].map(([l, v]) => (
              <div
                key={l}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '9px 0',
                  borderBottom: `1px solid ${GRDR}`,
                  fontSize: 13,
                }}
              >
                <span style={{ color: '#666' }}>{l}</span>
                <span style={{ fontWeight: 600, color: BLK }}>{v}</span>
              </div>
            ))}
          </div>
          <div
            style={{
              background: '#f0faf4',
              border: `1px solid ${G}25`,
              borderRadius: 10,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 8 }}>
                Discover {listing.locatie}
              </div>
              <p
                style={{
                  fontSize: 13,
                  color: '#555',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                Curious about the property market, local lifestyle and top
                agents active in {listing.locatie}? Explore area insights and
                price trends.
              </p>
            </div>
            <a
              href={`https://www.google.com/maps?q=${listing.lat},${listing.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                color: G,
                fontWeight: 700,
                fontSize: 13,
                textDecoration: 'none',
              }}
            >
              <Icon name="pin" size={14} color={G} /> View on Google Maps
            </a>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
            height: isMobile ? 200 : 280,
            borderRadius: 10,
            overflow: 'hidden',
            border: `1px solid ${GRDR}`,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(135deg, #e8f4e8 0%, #d0ecd0 40%, #c0e0c0 70%, #a8d4c8 100%)',
            }}
          >
            <svg
              width="100%"
              height="100%"
              style={{ position: 'absolute', inset: 0, opacity: 0.3 }}
            >
              <line
                x1="0"
                y1="45%"
                x2="100%"
                y2="47%"
                stroke="#888"
                strokeWidth="2"
              />
              <line
                x1="0"
                y1="68%"
                x2="100%"
                y2="66%"
                stroke="#aaa"
                strokeWidth="1"
              />
              <line
                x1="30%"
                y1="0"
                x2="29%"
                y2="100%"
                stroke="#888"
                strokeWidth="2"
              />
              <line
                x1="65%"
                y1="0"
                x2="66%"
                y2="100%"
                stroke="#aaa"
                strokeWidth="1"
              />
            </svg>
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%,-50%)',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  background: G,
                  color: WIT,
                  borderRadius: 8,
                  padding: '7px 14px',
                  fontWeight: 700,
                  fontSize: 13,
                  boxShadow: '0 3px 12px rgba(0,0,0,0.2)',
                  whiteSpace: 'nowrap',
                }}
              >
                <Icon name="pin" size={12} color={WIT} /> {listing.locatie}
              </div>
              <div
                style={{
                  width: 2,
                  height: 10,
                  background: G,
                  margin: '0 auto',
                }}
              />
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: G,
                  margin: '0 auto',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ─── VERGELIJKBAAR ──────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: isMobile ? '0 16px 48px' : '0 32px 60px',
        }}
      >
        <h2
          style={{
            fontSize: isMobile ? 20 : 24,
            fontWeight: 800,
            marginBottom: 20,
            color: BLK,
          }}
        >
          Similar properties nearby
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {LISTINGS.filter(
            (l) => l.id !== listing.id && l.type === listing.type
          )
            .sort(
              (a, b) =>
                Math.abs(a.prijs - listing.prijs) -
                Math.abs(b.prijs - listing.prijs)
            )
            .slice(0, 3)
            .map((l) => (
              <div
                key={l.id}
                onClick={() => {
                  onDetail(l);
                  window.scrollTo(0, 0);
                }}
                style={{
                  border: `1px solid ${GRDR}`,
                  borderRadius: 10,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.15s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    '0 4px 16px rgba(64,188,102,0.15)')
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <img
                  src={l.foto}
                  style={{
                    width: '100%',
                    height: 180,
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  alt=""
                />
                <div style={{ padding: '16px 14px', textAlign: 'center' }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: 14,
                      marginBottom: 4,
                      color: BLK,
                    }}
                  >
                    {l.titel}
                  </div>
                  <div
                    style={{ fontSize: 12, color: '#888', marginBottom: 10 }}
                  >
                    {l.locatie} · {l.contract}
                  </div>
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: 18,
                      color: BLK,
                      marginBottom: 12,
                    }}
                  >
                    {fmt(l.prijs)}
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      fontSize: 12,
                      color: '#666',
                      justifyContent: 'center',
                      marginBottom: 10,
                    }}
                  >
                    {l.woonOpp > 0 && (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 3,
                        }}
                      >
                        <Icon name="area" size={12} color="#aaa" />
                        {l.woonOpp}m²
                      </span>
                    )}
                    <span
                      style={{ display: 'flex', alignItems: 'center', gap: 3 }}
                    >
                      <Icon name="land" size={12} color="#aaa" />
                      {l.perceel}m²
                    </span>
                    {l.slaapkamers > 0 && (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 3,
                        }}
                      >
                        <Icon name="bed" size={12} color="#aaa" />
                        {l.slaapkamers}
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 11, color: '#bbb' }}>
                    via {l.makelaar}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}
function Login({ setGebruiker, setPagina, modus, setModus }) {
  const isMobile = useWidth() < 640;
  const [email, setEmail] = useState('');
  const [ww, setWw] = useState('');
  const [naam, setNaam] = useState('');
  const [fout, setFout] = useState('');
  const [toonReg, setToonReg] = useState(false);

  const login = () => {
    const demo =
      modus === 'koper'
        ? {
            email: 'jan@example.com',
            ww: 'demo',
            naam: 'Jan de Vries',
            type: 'koper',
          }
        : {
            email: 'agent@villoka.com',
            ww: 'demo',
            naam: 'Bali Prestige Realty',
            type: 'makelaar',
          };
    if (email === demo.email && ww === demo.ww) {
      setGebruiker({ naam: demo.naam, type: demo.type });
      setPagina(demo.type === 'makelaar' ? 'dashboard' : 'zoeken');
    } else {
      setFout(`Try: ${demo.email} / demo`);
    }
  };

  return (
    <div
      style={{
        paddingTop: 56,
        minHeight: '100vh',
        background: GR,
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'center',
        padding: isMobile ? '24px 16px' : '60px 24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: 420 }}>
        <div
          style={{
            display: 'flex',
            background: GRDR,
            borderRadius: 8,
            padding: 4,
            marginBottom: 20,
          }}
        >
          {[
            ['koper', 'Looking'],
            ['makelaar', 'Agent'],
          ].map(([m, label]) => (
            <button
              key={m}
              onClick={() => {
                setModus(m);
                setFout('');
              }}
              style={{
                flex: 1,
                padding: '10px 8px',
                border: 'none',
                borderRadius: 6,
                background: modus === m ? WIT : 'transparent',
                fontWeight: modus === m ? 700 : 400,
                fontSize: 13,
                cursor: 'pointer',
                color: modus === m ? BLK : '#777',
                boxShadow: modus === m ? '0 2px 8px rgba(0,0,0,0.08)' : 'none',
              }}
            >
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <Icon
                  name={m === 'koper' ? 'home' : 'users'}
                  size={16}
                  color={modus === m ? BLK : '#777'}
                />
                {label}
              </span>
            </button>
          ))}
        </div>

        <div
          style={{
            background: WIT,
            borderRadius: 12,
            padding: isMobile ? 24 : 36,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div
              style={{
                width: 44,
                height: 44,
                background: G,
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 12px',
              }}
            >
              <span style={{ color: WIT, fontWeight: 900, fontSize: 16 }}>
                VA
              </span>
            </div>
            <h2 style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>
              {toonReg ? 'Create account' : 'Welcome back'}
            </h2>
            <p style={{ color: '#888', fontSize: 13 }}>
              {modus === 'koper'
                ? 'Save your favourite properties'
                : 'Manage your Villoka listings'}
            </p>
          </div>

          {toonReg && (
            <div style={{ marginBottom: 14 }}>
              <label
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#777',
                  letterSpacing: 1,
                  display: 'block',
                  marginBottom: 5,
                }}
              >
                NAME
              </label>
              <input
                value={naam}
                onChange={(e) => setNaam(e.target.value)}
                placeholder="Your name"
                style={{
                  width: '100%',
                  border: `1px solid ${GRDR}`,
                  borderRadius: 6,
                  padding: '12px 14px',
                  fontSize: 15,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          )}

          {[
            [
              'EMAIL',
              email,
              setEmail,
              'email',
              modus === 'koper' ? 'jan@example.com' : 'agent@villoka.com',
            ],
            ['PASSWORD', ww, setWw, 'password', 'demo'],
          ].map(([label, val, setter, type, ph]) => (
            <div key={label} style={{ marginBottom: 14 }}>
              <label
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: '#777',
                  letterSpacing: 1,
                  display: 'block',
                  marginBottom: 5,
                }}
              >
                {label}
              </label>
              <input
                type={type}
                value={val}
                onChange={(e) => setter(e.target.value)}
                placeholder={ph}
                onKeyDown={(e) => e.key === 'Enter' && login()}
                style={{
                  width: '100%',
                  border: `1px solid ${GRDR}`,
                  borderRadius: 6,
                  padding: '12px 14px',
                  fontSize: 15,
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}

          {fout && (
            <div
              style={{
                background: '#fff0f0',
                border: '1px solid #ffcccc',
                borderRadius: 6,
                padding: '10px 14px',
                fontSize: 12,
                color: '#cc0000',
                marginBottom: 14,
              }}
            >
              {fout}
            </div>
          )}

          <div
            style={{
              background: '#f0faf4',
              border: `1px solid rgba(64,188,102,0.3)`,
              borderRadius: 6,
              padding: '8px 12px',
              fontSize: 11,
              color: '#555',
              marginBottom: 14,
            }}
          >
            Demo: {modus === 'koper' ? 'jan@example.com' : 'agent@villoka.com'}{' '}
            / demo
          </div>

          <button
            onClick={
              toonReg
                ? () => {
                    setGebruiker({ naam: naam || 'New User', type: modus });
                    setPagina(modus === 'makelaar' ? 'dashboard' : 'zoeken');
                  }
                : login
            }
            style={{
              width: '100%',
              background: G,
              border: 'none',
              color: WIT,
              padding: '14px',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 800,
              fontSize: 15,
            }}
          >
            {toonReg ? 'Create account →' : 'Login →'}
          </button>

          <div
            style={{
              textAlign: 'center',
              marginTop: 16,
              fontSize: 13,
              color: '#888',
            }}
          >
            {toonReg ? 'Already have an account? ' : 'No account? '}
            <span
              onClick={() => setToonReg(!toonReg)}
              style={{ color: G, cursor: 'pointer', fontWeight: 700 }}
            >
              {toonReg ? 'Login' : 'Create one'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── DASHBOARD ────────────────────────────────────────────────────────────────
function Dashboard({ gebruiker, setPagina, opgeslagen, onSave, onDetail }) {
  const isMobile = useWidth() < 640;
  const [toonForm, setToonForm] = useState(false);
  const listings = LISTINGS.filter((l) => l.makelaar === gebruiker?.naam);

  return (
    <div style={{ paddingTop: 56, minHeight: '100vh', background: GR }}>
      <div
        style={{
          background: G,
          padding: isMobile ? '20px 16px' : '24px 32px',
          color: WIT,
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 2,
            marginBottom: 4,
            opacity: 0.8,
          }}
        >
          AGENT DASHBOARD
        </div>
        <h1 style={{ fontSize: isMobile ? 20 : 24, fontWeight: 800 }}>
          Welcome, {gebruiker?.naam}
        </h1>
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: isMobile ? '20px 16px' : '28px 32px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: 12,
            marginBottom: 28,
          }}
        >
          {[
            ['home', listings.length, 'Listings'],
            ['eye', '142', 'Views'],
            ['message', '8', 'Inquiries'],
            ['star', '9.1', 'Rating'],
          ].map(([icon, val, label]) => (
            <div
              key={label}
              style={{
                background: WIT,
                border: `1px solid ${GRDR}`,
                borderRadius: 8,
                padding: isMobile ? 16 : 20,
              }}
            >
              <div style={{ marginBottom: 6 }}>
                <Icon name={icon} size={22} color={G} />
              </div>
              <div style={{ fontSize: isMobile ? 24 : 28, fontWeight: 900 }}>
                {val}
              </div>
              <div style={{ fontSize: 12, color: '#888' }}>{label}</div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 16,
          }}
        >
          <h2 style={{ fontSize: isMobile ? 17 : 20, fontWeight: 800 }}>
            My listings
          </h2>
          <button
            onClick={() => setToonForm(!toonForm)}
            style={{
              background: G,
              border: 'none',
              color: WIT,
              padding: '9px 16px',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 13,
            }}
          >
            + Add
          </button>
        </div>

        {toonForm && (
          <div
            style={{
              background: WIT,
              border: `1px solid ${GRDR}`,
              borderRadius: 8,
              padding: isMobile ? 20 : 28,
              marginBottom: 20,
            }}
          >
            <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>
              New listing
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: 12,
              }}
            >
              {[
                ['Title', 'Luxury Villa Ubud'],
                ['Price (USD)', '850000'],
                ['Location', 'Ubud'],
                ['Type', 'Villa'],
                ['Bedrooms', '4'],
                ['Plot m²', '1200'],
              ].map(([label, ph]) => (
                <div key={label}>
                  <label
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      color: '#777',
                      letterSpacing: 1,
                      display: 'block',
                      marginBottom: 5,
                    }}
                  >
                    {label.toUpperCase()}
                  </label>
                  <input
                    placeholder={ph}
                    style={{
                      width: '100%',
                      border: `1px solid ${GRDR}`,
                      borderRadius: 6,
                      padding: '10px 12px',
                      fontSize: 14,
                      outline: 'none',
                      boxSizing: 'border-box',
                      background: GR,
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              <button
                onClick={() => setToonForm(false)}
                style={{
                  flex: 1,
                  background: G,
                  border: 'none',
                  color: WIT,
                  padding: '11px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                Save
              </button>
              <button
                onClick={() => setToonForm(false)}
                style={{
                  background: 'none',
                  border: `1px solid ${GRDR}`,
                  color: '#666',
                  padding: '11px 16px',
                  borderRadius: 6,
                  cursor: 'pointer',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {listings.map((l) => (
          <ListingItem
            key={l.id}
            listing={l}
            opgeslagen={opgeslagen.includes(l.id)}
            onSave={onSave}
            onClick={() => onDetail(l)}
            isMobile={isMobile}
          />
        ))}
      </div>
      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

// ─── OPGESLAGEN ───────────────────────────────────────────────────────────────
function Opgeslagen({ opgeslagen, onSave, onDetail, setPagina }) {
  const isMobile = useWidth() < 640;
  const lijst = LISTINGS.filter((l) => opgeslagen.includes(l.id));
  return (
    <div style={{ paddingTop: 56, minHeight: '100vh', background: WIT }}>
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: isMobile ? '20px 16px' : '36px 32px',
        }}
      >
        <button
          onClick={() => setPagina('zoeken')}
          style={{
            background: 'none',
            border: 'none',
            color: G,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 700,
            padding: 0,
            marginBottom: 14,
          }}
        >
          ← Back
        </button>
        <h1
          style={{
            fontSize: isMobile ? 22 : 26,
            fontWeight: 800,
            marginBottom: 4,
          }}
        >
          My house
        </h1>
        <p style={{ color: '#888', fontSize: 14, marginBottom: 24 }}>
          {lijst.length} saved properties
        </p>
        {lijst.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Icon name="heart" size={40} color="#bbb" />
            </div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                marginTop: 12,
                marginBottom: 12,
              }}
            >
              Nothing saved yet
            </div>
            <button
              onClick={() => setPagina('zoeken')}
              style={{
                background: G,
                border: 'none',
                color: WIT,
                padding: '10px 24px',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              Browse listings →
            </button>
          </div>
        ) : (
          lijst.map((l) => (
            <ListingItem
              key={l.id}
              listing={l}
              opgeslagen={opgeslagen}
              onSave={onSave}
              onClick={() => onDetail(l)}
              isMobile={isMobile}
            />
          ))
        )}
      </div>
      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

// ─── MAKELAARS ────────────────────────────────────────────────────────────────
function MakelaarsOverzicht({ setPagina, setActiefMakelaar }) {
  const isMobile = useWidth() < 640;
  return (
    <div style={{ paddingTop: 56, minHeight: '100vh', background: WIT }}>
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: isMobile ? '20px 16px' : '36px 32px',
        }}
      >
        <button
          onClick={() => setPagina('home')}
          style={{
            background: 'none',
            border: 'none',
            color: G,
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: 13,
            padding: 0,
            marginBottom: 16,
          }}
        >
          ← Home
        </button>
        <h1
          style={{
            fontSize: isMobile ? 22 : 28,
            fontWeight: 800,
            marginBottom: 24,
          }}
        >
          Find a broker
        </h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {MAKELAARS.map((m) => (
            <div
              key={m.naam}
              onClick={() => {
                setActiefMakelaar(m.naam);
                setPagina('makelaar');
              }}
              style={{
                border: `1px solid ${GRDR}`,
                borderRadius: 8,
                padding: 20,
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = G;
                e.currentTarget.style.boxShadow =
                  '0 4px 16px rgba(64,188,102,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = GRDR;
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  background: BLK,
                  borderRadius: 8,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 12,
                }}
              >
                <span style={{ color: G, fontWeight: 900, fontSize: 16 }}>
                  VA
                </span>
              </div>
              <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>
                {m.naam}
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    background: G,
                    color: WIT,
                    fontWeight: 800,
                    fontSize: 12,
                    padding: '2px 8px',
                    borderRadius: 4,
                  }}
                >
                  {m.rating}
                </span>
                <span style={{ fontSize: 12, color: '#888' }}>
                  ({m.reviews} reviews)
                </span>
              </div>
              <div style={{ fontSize: 12, color: '#888' }}>
                {LISTINGS.filter((l) => l.makelaar === m.naam).length} active
                listings
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

// ─── MAKELAAR PROFIEL ─────────────────────────────────────────────────────────
function MakelaarProfiel({
  naam,
  onBack,
  onDetail,
  opgeslagen,
  onSave,
  setPagina,
}) {
  const isMobile = useWidth() < 640;
  const m = MAKELAARS.find((x) => x.naam === naam) || MAKELAARS[0];
  const listings = LISTINGS.filter((l) => l.makelaar === naam);
  return (
    <div style={{ paddingTop: 56, background: WIT, minHeight: '100vh' }}>
      <div style={{ height: isMobile ? 140 : 200, overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=60"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt=""
        />
      </div>
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 16,
            marginTop: -24,
            marginBottom: 20,
            paddingBottom: 20,
            borderBottom: `1px solid ${GRDR}`,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: 64,
              height: 64,
              background: BLK,
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: `3px solid ${WIT}`,
              flexShrink: 0,
            }}
          >
            <span style={{ color: G, fontWeight: 900, fontSize: 20 }}>VA</span>
          </div>
          <div style={{ paddingBottom: 4 }}>
            <div style={{ fontWeight: 800, fontSize: isMobile ? 16 : 18 }}>
              {m.naam}
            </div>
            <div
              style={{
                display: 'flex',
                gap: 6,
                alignItems: 'center',
                marginBottom: 4,
              }}
            >
              <span
                style={{
                  background: G,
                  color: WIT,
                  fontWeight: 800,
                  fontSize: 12,
                  padding: '2px 8px',
                  borderRadius: 4,
                }}
              >
                {m.rating}
              </span>
              <span style={{ fontSize: 12, color: '#888' }}>
                ({m.reviews} reviews)
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                gap: isMobile ? 12 : 20,
                flexWrap: 'wrap',
              }}
            >
              {['Email', 'Phone', 'Website'].map((l) => (
                <span
                  key={l}
                  style={{
                    color: G,
                    fontSize: 12,
                    cursor: 'pointer',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Icon
                    name={
                      l === 'Email' ? 'mail' : l === 'Phone' ? 'phone' : 'globe'
                    }
                    size={14}
                    color={G}
                  />
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={onBack}
          style={{
            background: 'none',
            border: 'none',
            color: G,
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: 13,
            padding: 0,
            marginBottom: 20,
          }}
        >
          ← Back
        </button>
        {listings.map((l) => (
          <ListingItem
            key={l.id}
            listing={l}
            opgeslagen={opgeslagen.includes(l.id)}
            onSave={onSave}
            onClick={() => onDetail(l)}
            isMobile={isMobile}
          />
        ))}
      </div>
      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
function ContentPagina({ setPagina, titel, children }) {
  const isMobile = useWidth() < 640;
  return (
    <div style={{ paddingTop: 56, minHeight: '100vh', background: WIT }}>
      <div
        style={{ background: G, padding: isMobile ? '28px 16px' : '36px 32px' }}
      >
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <button
            onClick={() => setPagina('home')}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.7)',
              cursor: 'pointer',
              fontSize: 13,
              fontWeight: 600,
              padding: 0,
              marginBottom: 10,
              display: 'flex',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Icon name="arrowLeft" size={13} color="rgba(255,255,255,0.7)" />{' '}
            Home
          </button>
          <h1
            style={{
              color: WIT,
              fontSize: isMobile ? 24 : 32,
              fontWeight: 800,
            }}
          >
            {titel}
          </h1>
        </div>
      </div>
      <div
        style={{
          maxWidth: 900,
          margin: '0 auto',
          padding: isMobile ? '28px 16px' : '40px 32px',
        }}
      >
        {children}
      </div>
      <Footer isMobile={isMobile} setPagina={setPagina} />
    </div>
  );
}

function ListYourHouse({ setPagina }) {
  const isMobile = useWidth() < 640;
  return (
    <ContentPagina setPagina={setPagina} titel="List your house on Villoka">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: 24,
          marginBottom: 40,
        }}
      >
        {[
          [
            'Free listing',
            'Create your property listing for free and reach thousands of buyers and investors actively searching in Bali.',
            'star',
          ],
          [
            'Premium visibility',
            'Boost your listing to the top of search results and get featured on the homepage.',
            'eye',
          ],
          [
            'Lead management',
            'Receive qualified leads directly in your dashboard and track all inquiries.',
            'message',
          ],
          [
            'Analytics',
            'See how many people viewed your listing, saved it, and contacted you.',
            'sort',
          ],
        ].map(([title, desc, icon]) => (
          <div
            key={title}
            style={{
              border: `1px solid ${GRDR}`,
              borderRadius: 10,
              padding: 24,
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                background: '#f0faf4',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 14px',
              }}
            >
              <Icon name={icon} size={20} color={G} />
            </div>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
              {title}
            </div>
            <p style={{ color: '#666', fontSize: 14, lineHeight: 1.7 }}>
              {desc}
            </p>
          </div>
        ))}
      </div>
      <div
        style={{
          background: '#f0faf4',
          border: `1px solid ${G}30`,
          borderRadius: 10,
          padding: 28,
          textAlign: 'center',
        }}
      >
        <div style={{ fontWeight: 800, fontSize: 20, marginBottom: 8 }}>
          Ready to list your property?
        </div>
        <p style={{ color: '#666', fontSize: 14, marginBottom: 20 }}>
          Create a free agent account and start listing in minutes.
        </p>
        <button
          onClick={() => setPagina('login')}
          style={{
            background: G,
            border: 'none',
            color: WIT,
            padding: '13px 32px',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          Create account
        </button>
      </div>
    </ContentPagina>
  );
}

function ValueCheck({ setPagina }) {
  const [step, setStep] = useState(0);
  const [adres, setAdres] = useState('');
  const [type, setType] = useState('Villa');
  const [opp, setOpp] = useState('');
  const [result, setResult] = useState(null);

  const bereken = () => {
    const base = type === 'Villa' ? 2800 : 180;
    const m = parseInt(opp) || 200;
    const laag = Math.round((base * m * 0.85) / 1000) * 1000;
    const hoog = Math.round((base * m * 1.15) / 1000) * 1000;
    setResult({ laag, hoog });
    setStep(3);
  };

  return (
    <ContentPagina setPagina={setPagina} titel="What's my property worth?">
      {step < 3 ? (
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <p
            style={{
              color: '#666',
              fontSize: 14,
              lineHeight: 1.7,
              marginBottom: 32,
            }}
          >
            Get a free estimated value for your Bali property based on current
            market data.
          </p>
          {step === 0 && (
            <>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: '#777',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                ADDRESS OR AREA
              </label>
              <input
                value={adres}
                onChange={(e) => setAdres(e.target.value)}
                placeholder="e.g. Seminyak, Canggu, Ubud..."
                style={{
                  width: '100%',
                  border: `1px solid ${GRDR}`,
                  borderRadius: 6,
                  padding: '12px 14px',
                  fontSize: 15,
                  outline: 'none',
                  marginBottom: 16,
                  boxSizing: 'border-box',
                }}
              />
              <button
                onClick={() => adres && setStep(1)}
                style={{
                  background: G,
                  border: 'none',
                  color: WIT,
                  padding: '12px 28px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                Next
              </button>
            </>
          )}
          {step === 1 && (
            <>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: '#777',
                  display: 'block',
                  marginBottom: 10,
                }}
              >
                PROPERTY TYPE
              </label>
              <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
                {['Villa', 'Land', 'Commercial'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setType(t)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      border: `2px solid ${type === t ? G : GRDR}`,
                      borderRadius: 6,
                      background: type === t ? '#f0faf4' : WIT,
                      fontWeight: type === t ? 700 : 400,
                      cursor: 'pointer',
                      color: type === t ? G : BLK,
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(2)}
                style={{
                  background: G,
                  border: 'none',
                  color: WIT,
                  padding: '12px 28px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <label
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: '#777',
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                LIVING AREA (M²)
              </label>
              <input
                value={opp}
                onChange={(e) => setOpp(e.target.value)}
                placeholder="e.g. 250"
                type="number"
                style={{
                  width: '100%',
                  border: `1px solid ${GRDR}`,
                  borderRadius: 6,
                  padding: '12px 14px',
                  fontSize: 15,
                  outline: 'none',
                  marginBottom: 16,
                  boxSizing: 'border-box',
                }}
              />
              <button
                onClick={bereken}
                style={{
                  background: G,
                  border: 'none',
                  color: WIT,
                  padding: '12px 28px',
                  borderRadius: 6,
                  cursor: 'pointer',
                  fontWeight: 700,
                }}
              >
                Calculate value
              </button>
            </>
          )}
        </div>
      ) : (
        <div style={{ maxWidth: 540, margin: '0 auto' }}>
          <div
            style={{
              border: `2px solid ${G}`,
              borderRadius: 12,
              padding: 32,
              textAlign: 'center',
              marginBottom: 24,
            }}
          >
            <div style={{ fontSize: 13, color: '#888', marginBottom: 8 }}>
              Estimated value for {adres}
            </div>
            <div style={{ fontSize: 13, color: '#888', marginBottom: 16 }}>
              {type} · {opp}m²
            </div>
            <div
              style={{
                fontSize: 36,
                fontWeight: 900,
                color: G,
                marginBottom: 4,
              }}
            >
              ${new Intl.NumberFormat('en-US').format(result.laag)} – $
              {new Intl.NumberFormat('en-US').format(result.hoog)}
            </div>
            <div style={{ fontSize: 13, color: '#aaa' }}>
              Based on current Bali market data
            </div>
          </div>
          <p
            style={{
              color: '#666',
              fontSize: 14,
              lineHeight: 1.7,
              marginBottom: 20,
            }}
          >
            Want a more accurate valuation? Contact one of our verified agents
            for a free in-person assessment.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              onClick={() => {
                setStep(0);
                setResult(null);
                setAdres('');
                setOpp('');
              }}
              style={{
                flex: 1,
                background: 'none',
                border: `1px solid ${GRDR}`,
                color: BLK,
                padding: '12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 600,
              }}
            >
              Recalculate
            </button>
            <button
              onClick={() => setPagina('makelaars')}
              style={{
                flex: 1,
                background: G,
                border: 'none',
                color: WIT,
                padding: '12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 700,
              }}
            >
              Find an agent
            </button>
          </div>
        </div>
      )}
    </ContentPagina>
  );
}

function FAQ({ setPagina }) {
  const [open, setOpen] = useState(null);
  const vragen = [
    [
      'Can foreigners buy property in Bali?',
      'Foreigners cannot own freehold (Hak Milik) land in Indonesia. However, they can use leasehold agreements (typically 25–30 years, extendable), nominee structures, or a PT PMA (foreign-owned company) to legally hold property.',
    ],
    [
      'What is the difference between Freehold and Leasehold?',
      'Freehold (Hak Milik) is permanent ownership, only available to Indonesian citizens. Leasehold gives you the right to use the property for a fixed period, typically 25–30 years with renewal options. Most foreign buyers use leasehold.',
    ],
    [
      'How does Villoka make money?',
      'Villoka charges real estate agents a monthly subscription fee to list their properties. Buyers and renters can use the platform completely free.',
    ],
    [
      'Are all listings verified?',
      'Yes. Every agent on Villoka is verified before they can list properties. We check their license, contact details and property ownership documents.',
    ],
    [
      'How do I contact an agent?',
      "Click on any property and use the 'Contact Broker' button. Your inquiry is sent directly to the agent. You can also call or email them directly from their profile.",
    ],
    [
      'Can I save properties I like?',
      'Yes. Create a free account and click the heart icon on any property to save it to your personal list.',
    ],
    [
      'Is Villoka available outside Bali?',
      'Currently Villoka covers Bali. We are expanding to Lombok, Jakarta and the rest of Indonesia in 2026.',
    ],
  ];
  return (
    <ContentPagina setPagina={setPagina} titel="Frequently asked questions">
      <div style={{ maxWidth: 700, margin: '0 auto' }}>
        {vragen.map(([v, a], i) => (
          <div
            key={i}
            style={{ borderBottom: `1px solid ${GRDR}`, padding: '16px 0' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <span style={{ fontWeight: 700, fontSize: 15 }}>{v}</span>
              <Icon
                name={open === i ? 'close' : 'plus'}
                size={16}
                color={G}
                style={{ flexShrink: 0 }}
              />
            </button>
            {open === i && (
              <p
                style={{
                  color: '#666',
                  fontSize: 14,
                  lineHeight: 1.8,
                  marginTop: 12,
                }}
              >
                {a}
              </p>
            )}
          </div>
        ))}
      </div>
    </ContentPagina>
  );
}

function VillokaIndex({ setPagina }) {
  const isMobile = useWidth() < 640;
  const data = [
    { gebied: 'Seminyak', gem: 1850000, groei: '+8.2%', transacties: 34 },
    { gebied: 'Canggu', gem: 920000, groei: '+12.4%', transacties: 51 },
    { gebied: 'Ubud', gem: 680000, groei: '+6.1%', transacties: 28 },
    { gebied: 'Uluwatu', gem: 1420000, groei: '+9.8%', transacties: 19 },
    { gebied: 'Sanur', gem: 750000, groei: '+4.3%', transacties: 22 },
    { gebied: 'Kuta', gem: 540000, groei: '+3.1%', transacties: 15 },
  ];
  return (
    <ContentPagina setPagina={setPagina} titel="Villoka Price Index">
      <p
        style={{
          color: '#666',
          fontSize: 14,
          lineHeight: 1.7,
          marginBottom: 32,
          maxWidth: 600,
        }}
      >
        The Villoka Index tracks average property prices and market trends
        across Bali's key areas. Updated monthly based on actual listings and
        transactions on our platform.
      </p>
      <div
        style={{
          border: `1px solid ${GRDR}`,
          borderRadius: 10,
          overflow: 'hidden',
          marginBottom: 32,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : '2fr 2fr 1fr 1fr',
            background: GR,
            padding: '12px 20px',
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 1,
            color: '#777',
          }}
        >
          <span>AREA</span>
          <span>AVG. PRICE</span>
          <span>12M GROWTH</span>
          {!isMobile && <span>TRANSACTIONS</span>}
        </div>
        {data.map((r, i) => (
          <div
            key={r.gebied}
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr 1fr' : '2fr 2fr 1fr 1fr',
              padding: '14px 20px',
              borderTop: `1px solid ${GRDR}`,
              fontSize: 14,
              background: i % 2 === 0 ? WIT : '#fafafa',
            }}
          >
            <span style={{ fontWeight: 600 }}>{r.gebied}</span>
            <span>${new Intl.NumberFormat('en-US').format(r.gem)}</span>
            <span style={{ color: G, fontWeight: 700 }}>{r.groei}</span>
            {!isMobile && (
              <span style={{ color: '#888' }}>{r.transacties}</span>
            )}
          </div>
        ))}
      </div>
      <p style={{ color: '#aaa', fontSize: 12 }}>
        * Data based on Villoka listings. Last updated April 2026.
      </p>
    </ContentPagina>
  );
}

function GidsPagina({ setPagina, titel, secties }) {
  const [open, setOpen] = useState(0);
  return (
    <ContentPagina setPagina={setPagina} titel={titel}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 0,
          maxWidth: 700,
          margin: '0 auto',
        }}
      >
        {secties.map((s, i) => (
          <div key={i} style={{ borderBottom: `1px solid ${GRDR}` }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                background: 'none',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                padding: '18px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontWeight: 700,
                  fontSize: 15,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}
              >
                <span
                  style={{
                    background: G,
                    color: WIT,
                    borderRadius: '50%',
                    width: 24,
                    height: 24,
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 12,
                    fontWeight: 800,
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </span>
                {s.titel}
              </span>
              <Icon
                name={open === i ? 'close' : 'plus'}
                size={16}
                color={G}
                style={{ flexShrink: 0 }}
              />
            </button>
            {open === i && (
              <p
                style={{
                  color: '#666',
                  fontSize: 14,
                  lineHeight: 1.8,
                  paddingBottom: 18,
                }}
              >
                {s.tekst}
              </p>
            )}
          </div>
        ))}
      </div>
    </ContentPagina>
  );
}

function TipsNieuws({ setPagina }) {
  const isMobile = useWidth() < 640;
  const artikelen = [
    {
      titel: "Why Canggu is Bali's hottest investment area in 2026",
      datum: 'April 2026',
      categorie: 'Market trends',
      foto: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&q=80',
    },
    {
      titel: 'Leasehold vs Freehold: what every foreign buyer needs to know',
      datum: 'March 2026',
      categorie: 'Legal guide',
      foto: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80',
    },
    {
      titel: 'Bali property prices rise 9% — which areas grew the most?',
      datum: 'March 2026',
      categorie: 'Price index',
      foto: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=600&q=80',
    },
    {
      titel: 'The complete guide to buying land in Bali as a foreigner',
      datum: 'February 2026',
      categorie: 'Buying guide',
      foto: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    },
    {
      titel: 'Top 5 mistakes expats make when buying property in Bali',
      datum: 'February 2026',
      categorie: 'Tips',
      foto: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&q=80',
    },
    {
      titel: "Indonesia's Golden Visa: what it means for property investors",
      datum: 'January 2026',
      categorie: 'Legal',
      foto: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80',
    },
  ];
  return (
    <ContentPagina setPagina={setPagina} titel="Tips, trends & news">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 24,
        }}
      >
        {artikelen.map((a) => (
          <div
            key={a.titel}
            style={{
              border: `1px solid ${GRDR}`,
              borderRadius: 10,
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                '0 4px 16px rgba(64,188,102,0.15)')
            }
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
          >
            <img
              src={a.foto}
              style={{ width: '100%', height: 160, objectFit: 'cover' }}
              alt=""
            />
            <div style={{ padding: 16 }}>
              <span
                style={{
                  background: '#f0faf4',
                  color: G,
                  fontSize: 11,
                  fontWeight: 700,
                  padding: '3px 8px',
                  borderRadius: 3,
                }}
              >
                {a.categorie}
              </span>
              <div
                style={{
                  fontWeight: 700,
                  fontSize: 14,
                  marginTop: 10,
                  marginBottom: 6,
                  lineHeight: 1.4,
                }}
              >
                {a.titel}
              </div>
              <div style={{ fontSize: 12, color: '#aaa' }}>{a.datum}</div>
            </div>
          </div>
        ))}
      </div>
    </ContentPagina>
  );
}

function Leads({ setPagina, gebruiker }) {
  return (
    <ContentPagina setPagina={setPagina} titel="Leads">
      {!gebruiker || gebruiker.type !== 'makelaar' ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <Icon
            name="user"
            size={48}
            color="#ddd"
            style={{ margin: '0 auto 16px', display: 'block' }}
          />
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>
            Agent access only
          </div>
          <p style={{ color: '#888', fontSize: 14, marginBottom: 20 }}>
            Log in as an agent to manage your leads.
          </p>
          <button
            onClick={() => setPagina('login')}
            style={{
              background: G,
              border: 'none',
              color: WIT,
              padding: '12px 28px',
              borderRadius: 6,
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            Login as agent
          </button>
        </div>
      ) : (
        <div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
              marginBottom: 32,
            }}
          >
            {[
              ['12', 'New leads this month'],
              ['4', 'Pending responses'],
              ['€2,400', 'Est. commission pipeline'],
            ].map(([val, label]) => (
              <div
                key={label}
                style={{
                  border: `1px solid ${GRDR}`,
                  borderRadius: 8,
                  padding: 20,
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 900, color: G }}>
                  {val}
                </div>
                <div style={{ fontSize: 13, color: '#888', marginTop: 4 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
          {[
            {
              naam: 'Thomas Berg',
              datum: 'Today 09:14',
              property: 'Luxury Villa Ubud',
              status: 'New',
            },
            {
              naam: 'Sarah Chen',
              datum: 'Yesterday',
              property: 'Cliffside Villa Uluwatu',
              status: 'Contacted',
            },
            {
              naam: 'Marc Dupont',
              datum: 'Apr 18',
              property: 'Tropical Joglo Canggu',
              status: 'Closed',
            },
          ].map((l) => (
            <div
              key={l.naam}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                padding: '14px 0',
                borderBottom: `1px solid ${GRDR}`,
              }}
            >
              <div
                style={{
                  width: 40,
                  height: 40,
                  background: G,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: WIT,
                  fontWeight: 800,
                  fontSize: 14,
                  flexShrink: 0,
                }}
              >
                {l.naam[0]}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>{l.naam}</div>
                <div style={{ fontSize: 12, color: '#888' }}>
                  {l.property} · {l.datum}
                </div>
              </div>
              <span
                style={{
                  background:
                    l.status === 'New'
                      ? '#f0faf4'
                      : l.status === 'Contacted'
                      ? '#fff8e1'
                      : '#f5f5f5',
                  color:
                    l.status === 'New'
                      ? G
                      : l.status === 'Contacted'
                      ? '#f59e0b'
                      : '#888',
                  fontSize: 12,
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: 20,
                }}
              >
                {l.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </ContentPagina>
  );
}

function Products({ setPagina }) {
  return (
    <ContentPagina setPagina={setPagina} titel="Products & pricing">
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 24,
          marginBottom: 40,
        }}
      >
        {[
          {
            naam: 'Starter',
            prijs: 'Free',
            per: 'forever',
            kleur: GRDR,
            features: [
              '5 listings',
              'Basic profile',
              'Email leads',
              'Villoka badge',
            ],
          },
          {
            naam: 'Pro',
            prijs: '€79',
            per: '/ month',
            kleur: G,
            features: [
              'Unlimited listings',
              'Featured placement',
              'Priority leads',
              'Analytics dashboard',
              'Phone & email support',
            ],
          },
          {
            naam: 'Agency',
            prijs: '€199',
            per: '/ month',
            kleur: BLK,
            features: [
              'Everything in Pro',
              'Multiple agents',
              'Custom branding',
              'API access',
              'Dedicated account manager',
            ],
          },
        ].map((p) => (
          <div
            key={p.naam}
            style={{
              border: `2px solid ${p.kleur}`,
              borderRadius: 12,
              padding: 28,
              position: 'relative',
            }}
          >
            {p.naam === 'Pro' && (
              <div
                style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: G,
                  color: WIT,
                  fontSize: 11,
                  fontWeight: 800,
                  padding: '3px 14px',
                  borderRadius: 20,
                  whiteSpace: 'nowrap',
                }}
              >
                MOST POPULAR
              </div>
            )}
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
              {p.naam}
            </div>
            <div
              style={{
                fontSize: 32,
                fontWeight: 900,
                color: p.naam === 'Pro' ? G : BLK,
              }}
            >
              {p.prijs}
              <span style={{ fontSize: 14, fontWeight: 400, color: '#888' }}>
                {p.per}
              </span>
            </div>
            <div style={{ margin: '20px 0', borderTop: `1px solid ${GRDR}` }} />
            {p.features.map((f) => (
              <div
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 10,
                  fontSize: 14,
                }}
              >
                <Icon name="check" size={14} color={G} />
                {f}
              </div>
            ))}
            <button
              onClick={() => setPagina('login')}
              style={{
                width: '100%',
                background: p.naam === 'Pro' ? G : 'none',
                border: `2px solid ${p.naam === 'Pro' ? G : GRDR}`,
                color: p.naam === 'Pro' ? WIT : BLK,
                padding: '12px',
                borderRadius: 6,
                cursor: 'pointer',
                fontWeight: 700,
                marginTop: 20,
              }}
            >
              {p.naam === 'Starter' ? 'Get started free' : 'Start trial'}
            </button>
          </div>
        ))}
      </div>
    </ContentPagina>
  );
}

function About({ setPagina }) {
  const isMobile = useWidth() < 640;
  return (
    <ContentPagina setPagina={setPagina} titel="About Villoka">
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 40 }}>
          <img
            src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=900&q=80"
            style={{
              width: '100%',
              height: 300,
              objectFit: 'cover',
              objectPosition: 'center 40%',
            }}
            alt=""
          />
        </div>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.9,
            color: '#444',
            marginBottom: 20,
          }}
        >
          Villoka was founded with one simple goal: to make finding property in
          Bali as easy and transparent as possible. We noticed that buyers and
          renters had to visit dozens of different agency websites, each with
          their own listings, their own formats, and their own way of doing
          things.
        </p>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.9,
            color: '#444',
            marginBottom: 20,
          }}
        >
          Villoka brings everything together in one place. All listings from
          verified agents across Bali — villas, land, commercial — searchable on
          one platform with one search bar and one map.
        </p>
        <p
          style={{
            fontSize: 15,
            lineHeight: 1.9,
            color: '#444',
            marginBottom: 40,
          }}
        >
          We started in Bali and are expanding across Indonesia. Our mission is
          to become the go-to real estate platform for everyone looking to buy,
          rent, or sell property in Indonesia.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 16,
          }}
        >
          {[
            ['8+', 'Active listings'],
            ['3', 'Verified agents'],
            ['1', 'Island — growing fast'],
          ].map(([val, label]) => (
            <div
              key={label}
              style={{
                textAlign: 'center',
                background: '#f0faf4',
                border: `1px solid ${G}20`,
                borderRadius: 10,
                padding: '24px 16px',
              }}
            >
              <div
                style={{
                  fontSize: 36,
                  fontWeight: 900,
                  color: G,
                  marginBottom: 6,
                }}
              >
                {val}
              </div>
              <div style={{ fontSize: 13, color: '#666' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </ContentPagina>
  );
}

function Contact({ setPagina }) {
  const isMobile = useWidth() < 640;
  return (
    <ContentPagina setPagina={setPagina} titel="Contact">
      <div style={{ maxWidth: 800 }}>
        <p
          style={{
            color: '#666',
            fontSize: 14,
            lineHeight: 1.8,
            marginBottom: 40,
          }}
        >
          Have a question, feedback, or want to partner with us? We'd love to
          hear from you.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? 32 : 60,
            alignItems: 'start',
          }}
        >
          {/* Left: contact info */}
          <div>
            {[
              [
                <Icon name="mail" size={18} color={G} />,
                'EMAIL',
                'hello@villoka.com',
              ],
              [
                <Icon name="phone" size={18} color={G} />,
                'WHATSAPP',
                '+62 812 3456 7890',
              ],
              [
                <Icon name="pin" size={18} color={G} />,
                'OFFICE',
                'Canggu, Bali, Indonesia',
              ],
            ].map(([icon, label, val]) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    background: '#f0faf4',
                    borderRadius: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      color: '#aaa',
                      letterSpacing: 1.5,
                      marginBottom: 3,
                    }}
                  >
                    {label}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: BLK }}>
                    {val}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right: form */}
          <div>
            {[
              ['Your name', 'text', 'Jan de Vries'],
              ['Email address', 'email', 'jan@example.com'],
            ].map(([label, type, ph]) => (
              <div key={label} style={{ marginBottom: 18 }}>
                <label
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    color: '#aaa',
                    letterSpacing: 1.5,
                    display: 'block',
                    marginBottom: 6,
                  }}
                >
                  {label.toUpperCase()}
                </label>
                <input
                  type={type}
                  placeholder={ph}
                  style={{
                    width: '100%',
                    border: `1px solid ${GRDR}`,
                    borderRadius: 8,
                    padding: '12px 14px',
                    fontSize: 14,
                    outline: 'none',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                  }}
                />
              </div>
            ))}
            <div style={{ marginBottom: 20 }}>
              <label
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  color: '#aaa',
                  letterSpacing: 1.5,
                  display: 'block',
                  marginBottom: 6,
                }}
              >
                MESSAGE
              </label>
              <textarea
                placeholder="How can we help?"
                rows={5}
                style={{
                  width: '100%',
                  border: `1px solid ${GRDR}`,
                  borderRadius: 8,
                  padding: '12px 14px',
                  fontSize: 14,
                  outline: 'none',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              />
            </div>
            <button
              style={{
                width: '100%',
                background: G,
                border: 'none',
                color: WIT,
                padding: '14px',
                borderRadius: 8,
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: 15,
              }}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </ContentPagina>
  );
}

function Advertising({ setPagina }) {
  const isMobile = useWidth() < 640;
  return (
    <ContentPagina setPagina={setPagina} titel="Advertising on Villoka">
      <div style={{ maxWidth: 800 }}>
        <p
          style={{
            color: '#666',
            fontSize: 14,
            lineHeight: 1.8,
            marginBottom: 40,
            maxWidth: 600,
          }}
        >
          Reach thousands of qualified buyers and investors actively searching
          for real estate in Bali. Our audience consists of expats, investors
          and high-net-worth individuals from Europe, Australia and Asia.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: 16,
            marginBottom: 40,
          }}
        >
          {[
            [
              'Homepage banner',
              'Featured placement on the homepage, seen by every visitor.',
              'From €500/month',
              G,
            ],
            [
              'Sponsored listing',
              'Your project at the top of search results in your area.',
              'From €200/month',
              '#5AB2E9',
            ],
            [
              'Developer spotlight',
              'Full-page featured project with custom content and photos.',
              'From €1,000/month',
              '#F5B82E',
            ],
            [
              'Newsletter inclusion',
              'Reach our subscriber base directly in their inbox.',
              'From €300/send',
              '#F15152',
            ],
          ].map(([titel, desc, prijs, kleur]) => (
            <div
              key={titel}
              style={{
                border: `1px solid ${GRDR}`,
                borderRadius: 10,
                padding: 24,
                borderTop: `3px solid ${kleur}`,
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: 15,
                  marginBottom: 8,
                  color: BLK,
                }}
              >
                {titel}
              </div>
              <p
                style={{
                  color: '#888',
                  fontSize: 13,
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}
              >
                {desc}
              </p>
              <div style={{ color: kleur, fontWeight: 900, fontSize: 16 }}>
                {prijs}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            background: '#f0faf4',
            border: `1px solid ${G}30`,
            borderRadius: 12,
            padding: isMobile ? 24 : 32,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            justifyContent: 'space-between',
            gap: 20,
          }}
        >
          <div>
            <div style={{ fontWeight: 800, fontSize: 17, marginBottom: 6 }}>
              Interested in advertising?
            </div>
            <p style={{ color: '#666', fontSize: 13 }}>
              Contact us for a custom package and media kit.
            </p>
          </div>
          <button
            onClick={() => setPagina('contact')}
            style={{
              flexShrink: 0,
              background: G,
              border: 'none',
              color: WIT,
              padding: '13px 28px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </ContentPagina>
  );
}

export default function App() {
  const [pagina, setPagina] = useState('home');
  const [gebruiker, setGebruiker] = useState(null);
  const [opgeslagen, setOpgeslagen] = useState([1, 5]);
  const [detailListing, setDetailListing] = useState(null);
  const [actiefMakelaar, setActiefMakelaar] = useState(null);
  const [loginModus, setLoginModus] = useState('koper');
  const [filters, setFilters] = useState({
    type: 'all',
    contract: 'all',
    maxPrijs: 3000000,
    zoek: '',
    slaapkamers: 1,
  });

  const toggleOpslaan = (id) => {
    if (!gebruiker) {
      setPagina('login');
      return;
    }
    setOpgeslagen((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const naarDetail = (l) => {
    setDetailListing(l);
    setPagina('detail');
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html, body, #root { width: 100%; min-height: 100vh; }
        body { font-family: Montserrat, sans-serif; overflow-x: hidden; }
        input, select, button { font-family: Montserrat, sans-serif; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: #40BC66; border-radius: 2px; }
        ::placeholder { color: #666; opacity: 1; }
        input[type=range] { height: 6px; }
      `}</style>

      <Nav
        pagina={pagina}
        setPagina={setPagina}
        gebruiker={gebruiker}
        onLogout={() => {
          setGebruiker(null);
          setPagina('home');
        }}
      />

      {pagina === 'home' && (
        <Home
          setPagina={setPagina}
          setFilters={setFilters}
          onDetail={naarDetail}
        />
      )}
      {pagina === 'zoeken' && (
        <Zoeken
          filters={filters}
          setFilters={setFilters}
          opgeslagen={opgeslagen}
          onSave={toggleOpslaan}
          onDetail={naarDetail}
          setPagina={setPagina}
        />
      )}
      {pagina === 'detail' && detailListing && (
        <Detail
          listing={detailListing}
          opgeslagen={opgeslagen}
          onSave={toggleOpslaan}
          onBack={() => setPagina('zoeken')}
          onMakelaar={(naam) => {
            setActiefMakelaar(naam);
            setPagina('makelaar');
          }}
          onDetail={naarDetail}
          setPagina={setPagina}
        />
      )}
      {pagina === 'makelaars' && (
        <MakelaarsOverzicht
          setPagina={setPagina}
          setActiefMakelaar={setActiefMakelaar}
        />
      )}
      {pagina === 'makelaar' && (
        <MakelaarProfiel
          naam={actiefMakelaar}
          onBack={() => setPagina('zoeken')}
          onDetail={naarDetail}
          opgeslagen={opgeslagen}
          onSave={toggleOpslaan}
          setPagina={setPagina}
        />
      )}
      {pagina === 'login' && (
        <Login
          setGebruiker={setGebruiker}
          setPagina={setPagina}
          modus={loginModus}
          setModus={setLoginModus}
        />
      )}
      {pagina === 'dashboard' && (
        <Dashboard
          gebruiker={gebruiker}
          setPagina={setPagina}
          opgeslagen={opgeslagen}
          onSave={toggleOpslaan}
          onDetail={naarDetail}
        />
      )}
      {pagina === 'opgeslagen' && (
        <Opgeslagen
          opgeslagen={opgeslagen}
          onSave={toggleOpslaan}
          onDetail={naarDetail}
          setPagina={setPagina}
        />
      )}
      {pagina === 'listyourhouse' && <ListYourHouse setPagina={setPagina} />}
      {pagina === 'valuecheck' && <ValueCheck setPagina={setPagina} />}
      {pagina === 'faq' && <FAQ setPagina={setPagina} />}
      {pagina === 'index' && <VillokaIndex setPagina={setPagina} />}
      {pagina === 'buying' && (
        <GidsPagina
          setPagina={setPagina}
          titel="Buying a house in Bali"
          secties={[
            {
              titel: 'Can foreigners buy property in Bali?',
              tekst:
                'Foreigners cannot directly own freehold land in Indonesia. However, there are legal structures available: leasehold agreements (25–30 years, extendable), PT PMA (foreign-owned company), or working with a trusted Indonesian nominee. Always consult a licensed notary.',
            },
            {
              titel: 'Choose the right area',
              tekst:
                'Bali has very different vibes per area. Seminyak and Canggu are great for rental investment. Ubud suits those seeking a quieter, cultural lifestyle. Uluwatu and Bukit offer dramatic clifftop views. Sanur is family-friendly with a calm beach scene.',
            },
            {
              titel: 'Set your budget',
              tekst:
                'Beyond the purchase price, budget for notary fees (1%), land and building transfer tax (BPHTB, 5%), agent commission (typically 3–5%), and annual property tax. For leasehold, also factor in renewal costs.',
            },
            {
              titel: 'Due diligence',
              tekst:
                'Always verify the land certificate (sertifikat), check for any liens or disputes, confirm the zoning allows your intended use, and have a licensed notary review all documents before signing anything.',
            },
            {
              titel: 'Sign & transfer',
              tekst:
                'The sale is executed through a notary (PPAT) who prepares the deed of sale (AJB). The title transfer is then registered with the National Land Agency (BPN). The process typically takes 2–4 weeks.',
            },
          ]}
        />
      )}
      {pagina === 'selling' && (
        <GidsPagina
          setPagina={setPagina}
          titel="Selling your property in Bali"
          secties={[
            {
              titel: 'Prepare your property',
              tekst:
                'First impressions matter. Ensure the property is clean, well-maintained and professionally photographed. A good set of photos can significantly increase enquiries and final sale price.',
            },
            {
              titel: 'Set the right price',
              tekst:
                'Use the Villoka Price Index to understand current market prices in your area. Overpricing is the most common mistake — it leads to the property sitting on the market and ultimately selling for less.',
            },
            {
              titel: 'List on Villoka',
              tekst:
                'Create an agent account and list your property on Villoka. Make sure to include all relevant details: size, contract type, facilities, and high-quality photos. Featured listings get 3x more views.',
            },
            {
              titel: 'Negotiate & accept',
              tekst:
                'Once you receive offers, negotiate through your agent. Standard practice in Bali is to negotiate 5–10% off the asking price. Once agreed, both parties sign a preliminary sales agreement (PPJB).',
            },
            {
              titel: 'Complete the sale',
              tekst:
                'The final transfer is handled by a notary. The buyer pays the transfer tax (BPHTB) and you as seller pay income tax on the sale (PPh, typically 2.5%). The notary registers the new title within 2–4 weeks.',
            },
          ]}
        />
      )}
      {pagina === 'tips' && <TipsNieuws setPagina={setPagina} />}
      {pagina === 'leads' && (
        <Leads setPagina={setPagina} gebruiker={gebruiker} />
      )}
      {pagina === 'products' && <Products setPagina={setPagina} />}
      {pagina === 'about' && <About setPagina={setPagina} />}
      {pagina === 'contact' && <Contact setPagina={setPagina} />}
      {pagina === 'advertising' && <Advertising setPagina={setPagina} />}
    </div>
  );
}
