export {}

declare global {
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
}
