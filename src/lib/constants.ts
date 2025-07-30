export const COMPANY_INFO = {
  name: 'First Response Tree Service',
  phone: '(513) 293-7930',
  email: 'firsttothetrees@gmail.com',
  address: '4251 Deer Cross Ln., Hamilton, OH 45013',
  tagline:
    'Exemplifying honesty, integrity, and professionalism in every job that we do.',
  description:
    'First Response Tree Service has the knowledge, equipment, and personnel to handle all of your tree related needs. We are owned and operated by local firefighters that take pride in performing a job well done while taking every measure to ensure minimal impact to your property. Honesty, transparency, and communication with our customers is a top priority.',
  facebook: 'https://www.facebook.com/FirstResponseTreeService/',
};

export const SERVICES = [
  {
    id: 'tree-removal',
    name: 'Complete Tree Removal',
    shortDescription:
      'Safe and efficient tree removal services for hazardous or unwanted trees.',
    icon: 'tree',
    image: '/images/services/tree-removal.jpg',
    features: [
      'Emergency removal',
      'Complete cleanup',
      'Stump grinding available',
      'Insurance coordination',
    ],
  },
  {
    id: 'tree-pruning',
    name: 'Tree Pruning & Trimming',
    shortDescription:
      'Professional pruning to maintain tree health and enhance your landscape.',
    icon: 'scissors',
    image: '/images/services/tree-pruning.jpg',
    features: [
      'Crown thinning',
      'Deadwood removal',
      'Shape enhancement',
      'Safety pruning',
    ],
  },
  {
    id: 'emergency-service',
    name: '24/7 Emergency Service',
    shortDescription: 'Quick response for storm damage and emergency tree situations.',
    icon: 'phone',
    image: '/images/services/emergency-service.jpg',
    features: [
      'Storm cleanup',
      'Fallen tree removal',
      'Power line clearance',
      'Insurance coordination',
    ],
  },
  {
    id: 'stump-grinding',
    name: 'Stump Grinding',
    shortDescription: "Complete stump removal to restore your landscape's beauty.",
    icon: 'cog',
    image: '/images/services/stump-grinding.jpg',
    features: [
      'Below-grade grinding',
      'Chip removal',
      'Topsoil placement',
      'Area restoration',
    ],
  },
  {
    id: 'land-clearing',
    name: 'Land & Vegetation Clearing',
    shortDescription:
      'Clearing overgrowth and unwanted vegetation to enhance your property.',
    icon: 'leaf',
    image: '/images/services/land-clearing.jpg',
    features: [
      'Overgrowth removal',
      'Site preparation',
      'Vegetation clearing',
      'Property enhancement',
    ],
  },
  {
    id: 'lawn-debris',
    name: 'Lawn Debris Removal',
    shortDescription: 'Professional debris removal to save you time and effort.',
    icon: 'truck',
    image: '/images/services/debris-removal.jpg',
    features: [
      'Yard waste removal',
      'Firewood clearing',
      'Equipment provided',
      'Quick cleanup',
    ],
  },
] as const;
