export { }

// eslint-ignore-next-line
declare global {

  // eslint-disable-next-line no-unused-vars
  interface AppConfig {
    siteName: string;
    siteTagline: string;
    siteAuthor: string;
    socialMedia?: {
      text: string;
      icon: string;
      href: string;
    }[]
  }
  // eslint-disable-next-line no-unused-vars
  interface Track {
    data?: {
      id: string;
      title: string;
      embed: string;
    };
  }

  interface ProductVariant {
    id: number;
    sku: string;
    cost: number;
    price: number;
    title: string;
    grams: number;
    is_enabled: boolean;
    is_default: boolean;
    is_available: boolean;
    options: number[];
    quantity: number;
  }

  interface ProductImage {
    src: string;
    variant_ids: number[];
    position: string;
    is_default: boolean;
    is_selected_for_publishing: boolean;
  }

  // eslint-disable-next-line no-unused-vars
  interface Product {
    id: string;
    title: string;
    description: string;
    tags: string[];
    options: any[];
    variants: ProductVariant[];
    images: ProductImage[];
    created_at: string;
    updated_at: string;
    visible: boolean;
    is_locked: boolean;
    blueprint_id: number;
    user_id: number;
    shop_id: number;
    print_provider_id: number;
    print_areas: any[];
    print_details: any[];
    sales_channel_properties: any[];
    twodaydelivery_enabled: boolean;
  }

  // Releases must be one of these release types
  export type ReleaseType = 'LP' | 'EP' | 'SINGLE' | 'B-SIDE' | 'REMIX' | 'REMASTER' | 'LIVE';
  export interface ReleaseLink {
    url: string;
    text: string;
    preferred?: boolean;
  }
  export interface ReleaseTrack {
    title: string;
    length: string;
  }

  export type OhSilenceReleaseId = `OH-${string|number}` | `OH-${string|number}R`;

  // Releases must follow this template
  export interface Release {
    id: OhSilenceReleaseId;
    title: string;
    description?: string;
    type: ReleaseType;
    artwork: string | null;
    artworkCredit?: string;
    links: ReleaseLink[];
    date: Date;
    artistName?: string;
    artistSlug?: string;
    tracks?: ReleaseTrack[];
    notes?: string;
  }

  // Artists must follow this template
  export interface Artist {
    slug: string;
    name: string;
    bio: string;
    image: OhSilenceImage;
    releases: Release[];
  }

  export interface OhSilenceImage {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
  }
}
