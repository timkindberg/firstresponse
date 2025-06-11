import contentData from '@/data/content.json';

export interface Company {
  name: string;
  tagline: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  logo: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  cta: string;
  backgroundImage: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface Gallery {
  title: string;
  description: string;
  categories: string[];
  images: GalleryImage[];
}

export interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

export interface Contact {
  title: string;
  description: string;
  formFields: FormField[];
}

export interface ContentData {
  company: Company;
  hero: Hero;
  services: Service[];
  about: {
    title: string;
    content: string;
    features: string[];
  };
  testimonials: Testimonial[];
  gallery: Gallery;
  contact: Contact;
  settings: {
    theme: {
      primaryColor: string;
      secondaryColor: string;
      accentColor: string;
    };
    seo: {
      title: string;
      description: string;
      keywords: string;
    };
  };
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

export function getTestimonials(): Testimonial[] {
  return contentData.testimonials as Testimonial[];
}

export function getGalleryData(): Gallery {
  return contentData.gallery as Gallery;
}

export function getContactInfo(): Contact {
  return contentData.contact as Contact;
} 