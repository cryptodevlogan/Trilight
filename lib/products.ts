// The single source of truth for what you sell and for how much.
//
// IMPORTANT: prices live here on the server, NOT in the browser. The checkout
// route reads the price from this file using only the product `id` sent by the
// page. That way a customer can never edit the page in their browser and pay a
// price you didn't set. To change a price or add a product, edit this file.

/** One slide in the product gallery. */
export type GalleryItem =
  | { type: "image"; src: string; alt: string; objectPosition?: string }
  | { type: "video"; src: string; thumbnail: string; alt: string }

export interface Product {
  id: string
  name: string
  /** Short line shown under the name in the buy box. */
  tagline: string
  /** What's physically in the box. */
  includes: string[]
  /** Longer, per-bundle description shown above the buy box on the product page. */
  blurb: string
  /** One calm, reassuring line shown under the what's-included list. */
  assurance: string
  /** Price in CENTS. $60.00 => 6000. Stripe always works in cents. */
  priceCents: number
  /** Image shown in the buy box (from /public). */
  image: string
  /**
   * Ordered media for the product gallery when this kit is selected. List images
   * first, then videos — a generated "what's included" fact sheet is inserted
   * automatically between the images and the videos.
   */
  media: GalleryItem[]
  /**
   * Optional: a real Stripe Price ID (looks like "price_1AbC..."). If you create
   * this product in the Stripe dashboard (Products → Add product) and paste its
   * Price ID here, checkout will charge that Stripe price — and your Stripe
   * reports/receipts will show the proper product + image. If left undefined,
   * checkout falls back to `priceCents` above. Either way works.
   */
  stripePriceId?: string
}

// Already-hosted product videos, reused from the marketing pages.
const VID = {
  wearable:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%206-McpD9yVvsuO2AytemVjcPDYxF242sK.mp4",
  roadside:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%208-4rsNliWiO3YR9dLylK4gudqBOxG1WK.mp4",
  dock:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/My%20Movie%207-az1al5tB3lfNdheoiDtBujVLYkrmxW.mp4",
}

export const PRODUCTS: Product[] = [
  {
    id: "wearable",
    name: "Personal Kit",
    tagline: "One wearable LED safety triangle.",
    includes: ["1 × Wearable LED triangle"],
    blurb:
      "Wear your safety. A single high-visibility LED triangle you strap on before you step out of the cab, so drivers see you from front and back long before they reach you. Rechargeable, built for roadside conditions, and ready in seconds.",
    assurance:
      "Slip it on and step out of the cab lit up from front and back, so drivers spot you long before they reach you.",
    priceCents: 6500, // $65
    image: "/trilight-personal-main.png",
    media: [
      { type: "image", src: "/trilight-personal-main.png", alt: "TRILIGHT wearable LED harness laid out flat" },
      { type: "image", src: "/trilight-wearable.jpg", alt: "TRILIGHT wearable LED triangle unfolded from the harness" },
      { type: "image", src: "/trilight-wearable-driver.jpg", alt: "Driver wearing the TRILIGHT LED safety harness" },
      { type: "video", src: "/wearable-trilight.mp4", thumbnail: "/trilight-wearable-inspection.jpg", alt: "Wearing TRILIGHT during a night engine inspection" },
      { type: "video", src: "/trilight-personal-inspection.mp4", thumbnail: "/trilight-tire-inspection.jpg", alt: "Wearing TRILIGHT during a roadside tire inspection" },
    ],
  },
  {
    id: "roadside-kit",
    name: "Vehicle Kit",
    tagline: "Turn your existing safety triangles into LED beacons.",
    includes: [
      "1 × Large magnetic LED triangle",
      "3 × Stackable magnetic triangles (fit on top of traditional safety triangles)",
    ],
    blurb:
      "Upgrade your rig's roadside presence. Turn your existing safety triangles into bright LED beacons and add a large magnetic triangle that mounts right to the truck. Seen from over a mile away at night, deployed in seconds, and it even folds into a directional arrow to guide traffic around you.",
    assurance:
      "With this kit you can rest assured your vehicle stays totally visible to everyone on the road, day or night.",
    priceCents: 10000, // $100
    image: "/trilight-roadside-kit.png",
    media: [
      { type: "image", src: "/trilight-roadside-kit.png", alt: "TRILIGHT Vehicle Kit magnetic LED triangles" },
      { type: "image", src: "/trilight-vehicle-detail.png", alt: "Fitting the TRILIGHT LED triangle over a traditional roadside safety triangle" },
      { type: "image", src: "/trilight-night.jpeg", alt: "TRILIGHT LED triangles glowing behind a truck on the highway at night", objectPosition: "68% 50%" },
      { type: "video", src: VID.roadside, thumbnail: "/trilight-roadside-poster.jpg", alt: "Roadside emergency deployment" },
    ],
  },
  {
    id: "complete-kit",
    name: "Complete Kit",
    tagline: "Everything TRILIGHT makes, in one box.",
    includes: [
      "1 × Wearable LED triangle",
      "1 × Large magnetic LED triangle",
      "3 × Stackable magnetic triangles",
    ],
    blurb:
      "Everything TRILIGHT makes, in one box. The wearable Personal triangle paired with the full magnetic Vehicle set, so you are covered on your body, on the truck, and on the pavement. Five ways to stay seen, one system.",
    assurance:
      "Truck, body, and pavement all covered, so you and your vehicle are impossible to miss in any situation.",
    priceCents: 15000, // $150
    image: "/product image 1.png",
    media: [
      { type: "image", src: "/make_the_yellow_202603251220.png", alt: "TRILIGHT LED triangles with wearable harness" },
      { type: "image", src: "/trilight-complete-package.png", alt: "TRILIGHT Complete Kit laid out: wearable harness, large triangle, and three stackable triangles" },
      { type: "video", src: VID.roadside, thumbnail: "/trilight-roadside-poster.jpg", alt: "Roadside emergency deployment" },
      { type: "video", src: VID.wearable, thumbnail: "/trilight-wearable-poster.jpg", alt: "TRILIGHT wearable safety system" },
    ],
  },
]

export function getProduct(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

/** Format cents as a display price, e.g. 6000 => "$60". */
export function formatPrice(cents: number): string {
  const dollars = cents / 100
  return `$${dollars % 1 === 0 ? dollars : dollars.toFixed(2)}`
}
