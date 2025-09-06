import contentData from '@/data/content.json';

export interface Company {
  name: string;
  phone: string;
  email: string;
  address: string;
  tagline: string;
  description: string;
  facebook: string;
}

export interface HeroFeature {
  icon: string;
  value: string;
  label: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  ctaButton: string;
  backgroundImage: string;
  features: HeroFeature[];
}

export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  imageStyles: { backgroundPosition: string };
  video: {
    src: string;
    poster: string;
    autoplay: boolean;
    muted: boolean;
    loop: boolean;
  };
  features: string[];
}

export interface About {
  title: string;
  description: string;
  features: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface GalleryCategory {
  id: string;
  name: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  description: string;
  category: string;
}

export interface Gallery {
  title: string;
  subtitle: string;
  categories: GalleryCategory[];
  images: GalleryImage[];
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}

export interface ContactCard {
  icon: string;
  title: string;
  subtitle: string;
  content: string;
  link?: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  form: {
    fields: FormField[];
    submitButton: string;
  };
  contactCards: ContactCard[];
}

export interface Theme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string;
}

export interface ContentData {
  company: Company;
  hero: Hero;
  services: Service[];
  about: About;
  testimonials: Testimonial[];
  gallery: Gallery;
  contact: Contact;
  theme: Theme;
  seo: SEO;
}

export function getContent(): ContentData {
  return contentData as ContentData;
}

export function getCompanyInfo(): Company {
  return contentData.company as Company;
}

export function getServices(): Service[] {
  return contentData.services as Service[];
}

export function getGalleryData(): Gallery {
  return contentData.gallery as Gallery;
}

export function getContactInfo(): Contact {
  return contentData.contact as Contact;
} 