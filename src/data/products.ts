export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  uses: string[];
  features: string[];
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 'polygranite-sheets',
    name: 'Polygranite Sheets',
    category: 'Surface Panels',
    tagline: 'Granite-Look Elegance, Lightweight Strength',
    description: 'Polygranite Sheets offer the premium visual appeal of natural granite with the ease of modern composite technology. Ideal for feature walls, countertops, reception desks and cladding applications.',
    uses: ['Feature walls', 'Reception counters', 'Kitchen backsplash', 'Commercial facades'],
    features: ['Granite-look finish', 'Lightweight & easy to install', 'Water resistant', 'Low maintenance'],
    image: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'stone-panels',
    name: 'Stone Panels',
    category: 'Wall Cladding',
    tagline: 'Natural Stone Charm for Every Wall',
    description: 'Decorative stone panels bring the timeless beauty of natural stone to interior and exterior walls. Perfect for accent walls, hotel lobbies, living rooms and commercial spaces.',
    uses: ['Accent walls', 'Hotel lobbies', 'Living rooms', 'Commercial interiors'],
    features: ['Natural stone texture', 'Durable & weather-resistant', 'Easy panel installation', 'Multiple finishes available'],
    image: 'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'wpc-interior-fluted-panels',
    name: 'WPC Interior Fluted Panels',
    category: 'Interior Panels',
    tagline: 'Modern Fluted Elegance for Indoor Spaces',
    description: 'Wood Polymer Composite interior fluted panels deliver a contemporary fluted wall aesthetic for bedrooms, living rooms, restaurants and office interiors. Moisture-resistant and long-lasting.',
    uses: ['Bedroom feature walls', 'Living room accent walls', 'Restaurant interiors', 'Office lobbies'],
    features: ['Contemporary fluted design', 'Moisture & termite resistant', 'Easy click-fit installation', 'Rich wood-tone finishes'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'wpc-exterior-fluted-panels',
    name: 'WPC Exterior Fluted Panels',
    category: 'Exterior Panels',
    tagline: 'Weather-Proof Fluted Cladding for Facades',
    description: 'WPC Exterior Fluted Panels are engineered for outdoor durability. Ideal for building facades, exterior accent walls, balcony cladding and garden features with long-term UV resistance.',
    uses: ['Building facades', 'Balcony cladding', 'Exterior accent walls', 'Commercial exteriors'],
    features: ['UV & weather resistant', 'Anti-fade technology', 'Slip resistant surface', 'Structural durability'],
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'spc-flooring',
    name: 'SPC Flooring',
    category: 'Flooring',
    tagline: 'Stone-Core Flooring Built for Real Life',
    description: 'Stone Plastic Composite (SPC) flooring combines a rigid stone-polymer core with a realistic wood or stone surface layer. 100% waterproof, scratch-resistant and ideal for all areas including kitchens and bathrooms.',
    uses: ['Living rooms', 'Bedrooms', 'Kitchens', 'Commercial floors', 'Bathrooms'],
    features: ['100% waterproof', 'Scratch & dent resistant', 'Thermal & sound insulation', 'Easy click-lock installation'],
    image: 'https://images.pexels.com/photos/4846097/pexels-photo-4846097.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'soffit-panels',
    name: 'Soffit Panels',
    category: 'Ceiling Systems',
    tagline: 'Clean, Finished Ceilings with Premium Soffit Panels',
    description: 'Soffit panels provide a clean, finished look for ceilings, overhangs, eaves and covered walkways. Lightweight, durable and available in multiple finishes for residential and commercial applications.',
    uses: ['Ceilings', 'Building overhangs', 'Covered walkways', 'Eaves & soffits'],
    features: ['Lightweight construction', 'Moisture resistant', 'Smooth finish', 'Easy to maintain'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'soffit-fluted-panels',
    name: 'Soffit Fluted Panels',
    category: 'Ceiling Systems',
    tagline: 'Architectural Fluted Design Overhead',
    description: 'Soffit fluted panels add architectural depth and texture to ceilings, corridor overhangs and exterior soffits. An elegant solution for premium homes, hotels and commercial buildings.',
    uses: ['Premium ceiling designs', 'Corridor ceilings', 'Hotel lobbies', 'Architectural facades'],
    features: ['Structured fluted profile', 'Durable composite material', 'UV stable for exterior use', 'Multiple colour options'],
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pu-stone-panels',
    name: 'PU Stone Panels',
    category: 'Decorative Panels',
    tagline: 'Ultra-Light Stone Panels with Real Stone Look',
    description: 'Polyurethane (PU) stone panels replicate the texture and appearance of real stone at a fraction of the weight. Perfect for interior feature walls, TV units, fireplaces and accent surfaces.',
    uses: ['TV wall panels', 'Fireplace surrounds', 'Feature walls', 'Restaurant & café décor'],
    features: ['Ultra-lightweight', 'Realistic stone texture', 'Simple DIY or professional fit', 'Fire retardant grade available'],
    image: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'bamboo-charcoal-boards',
    name: 'Bamboo Charcoal Boards',
    category: 'Eco Boards',
    tagline: 'Natural, Eco-Friendly Boards with Air-Purifying Properties',
    description: 'Bamboo charcoal boards are a sustainable, eco-friendly wall and ceiling material with natural air-purifying and humidity-regulating properties. Ideal for health-conscious modern interiors.',
    uses: ['Bedrooms', 'Meditation spaces', 'Eco-homes', 'Wellness interiors'],
    features: ['Eco-friendly bamboo source', 'Air purifying properties', 'Humidity regulation', 'Warm natural aesthetic'],
    image: 'https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'wallpapers',
    name: 'Wallpapers',
    category: 'Wall Finishes',
    tagline: 'Transform Any Room with Designer Wallpapers',
    description: 'Our curated range of designer wallpapers includes textures, patterns, murals and abstract designs for bedrooms, living rooms, offices and commercial interiors. Wide range of styles and finishes.',
    uses: ['Bedroom accent walls', 'Living rooms', 'Office interiors', 'Commercial spaces'],
    features: ['Wide design range', 'Easy to apply & remove', 'Durable finish', 'Washable surface options'],
    image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pvc-panels',
    name: 'PVC Panels',
    category: 'Interior Panels',
    tagline: 'Practical, Durable PVC Panels for Every Space',
    description: 'PVC panels are a versatile, waterproof wall and ceiling solution for bathrooms, kitchens, offices and commercial interiors. Low cost, high durability and easy installation make them a popular choice.',
    uses: ['Bathrooms', 'Kitchens', 'Commercial ceilings', 'Office walls'],
    features: ['100% waterproof', 'Mold & termite resistant', 'Easy to clean', 'Cost-effective solution'],
    image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'pvc-partitions',
    name: 'PVC Partitions',
    category: 'Partitions',
    tagline: 'Smart Space Division with PVC Partition Systems',
    description: 'PVC partition systems provide a flexible, cost-effective way to divide office spaces, shops, showrooms and commercial areas. Lightweight, durable and available in various profiles and finishes.',
    uses: ['Office partitions', 'Shop dividers', 'Showroom sections', 'Commercial interiors'],
    features: ['Lightweight modular system', 'Easy to reconfigure', 'Sound dampening options', 'Professional finish'],
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'stone-coated-steel-roofing',
    name: 'Stone-Coated Steel Roofing Sheets',
    category: 'Roofing',
    tagline: 'Premium Steel Roofing with Natural Stone Coating',
    description: 'Stone-coated steel roofing sheets combine the strength of galvanised steel with a natural stone chip coating for a premium, durable and weather-resistant roof covering for homes and commercial buildings.',
    uses: ['Residential roofing', 'Commercial buildings', 'Hotels', 'Industrial roofing'],
    features: ['Steel core strength', 'Natural stone chip finish', 'UV & corrosion resistant', '40+ year lifespan'],
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'upvc-roofing-sheets',
    name: 'UPVC Roofing Sheets',
    category: 'Roofing',
    tagline: 'Lightweight, Durable UPVC Roofing for Modern Structures',
    description: 'UPVC roofing sheets offer excellent weather resistance, thermal insulation and noise reduction for homes, sheds, garages, commercial buildings and agricultural structures.',
    uses: ['Home roofing', 'Sheds & garages', 'Commercial structures', 'Agricultural buildings'],
    features: ['Lightweight & strong', 'Thermal insulation', 'Noise reduction', 'Corrosion & rust free'],
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 'adhesives',
    name: 'Adhesives',
    category: 'Installation Materials',
    tagline: 'Professional-Grade Adhesives for Interior Installations',
    description: 'High-performance construction adhesives for bonding panels, flooring, cladding and all interior installation materials. Compatible with all Business Bench products for seamless, long-lasting bonds.',
    uses: ['Panel bonding', 'Flooring adhesion', 'Cladding installation', 'General construction'],
    features: ['High-bond strength', 'Weather & moisture resistant', 'Compatible with all panel types', 'Professional-grade formula'],
    image: 'https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export const SERVICES = [
  {
    title: 'Product Consultation',
    desc: 'Expert guidance on selecting the right materials for your project, budget and aesthetic preferences.',
    icon: 'MessageSquare',
  },
  {
    title: 'Material Selection',
    desc: 'Hands-on assistance choosing from our full range of Business Bench products for every surface and application.',
    icon: 'Layers',
  },
  {
    title: 'Site Measurement',
    desc: 'Accurate on-site measurement services to ensure correct quantities and perfect-fit installation planning.',
    icon: 'Ruler',
  },
  {
    title: 'Interior Designing',
    desc: 'Creative interior design advice for homes, offices, shops, hotels and commercial spaces.',
    icon: 'PenTool',
  },
  {
    title: 'Interior Decoration',
    desc: 'Decoration planning and styling support to create beautiful, cohesive interior spaces.',
    icon: 'Palette',
  },
  {
    title: 'Supply & Delivery Support',
    desc: 'Reliable product supply and delivery support to your location in Tuensang and Nagaland.',
    icon: 'Truck',
  },
  {
    title: 'Professional Installation',
    desc: 'Skilled installation teams for panels, flooring, roofing, partitions and all interior surfaces.',
    icon: 'Wrench',
  },
  {
    title: 'Residential Interiors',
    desc: 'Complete interior solutions for homes — from living rooms and bedrooms to kitchens and bathrooms.',
    icon: 'Home',
  },
  {
    title: 'Commercial Interiors',
    desc: 'End-to-end interior supply and installation for shops, offices, hotels, restaurants and commercial spaces.',
    icon: 'Building2',
  },
];

export const PHONE = '9436401033';
export const PHONE_DISPLAY = '+91 9436 4010 33';
export const WHATSAPP_NUMBER = '9436401033';
export const WHATSAPP_DISPLAY = '+91 9436 4010 33';
export const WHATSAPP_URL = 'https://wa.me/919436401033';
export const PHONE_URL = 'tel:+919436401033';
export const ADDRESS = 'Bazaar-A, Near SBI ATM Booth, Below Parade Ground, Tuensang Town, Nagaland – 798612';
export const LOGO_PATH = '/assets/images/WhatsApp_Image_2026-07-09_at_3.53.34_PM.jpeg';
