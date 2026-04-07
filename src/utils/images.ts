// Import all product images from src/assets for Astro Image optimization
const productImages = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/products/*.png',
  { eager: true }
);

/**
 * Get the optimized image metadata for a product image path.
 * Converts /images/products/foo.png -> the imported ImageMetadata object.
 * Falls back to the original path string if not found.
 */
export function getProductImage(publicPath: string): ImageMetadata | string {
  // Convert /images/products/foo.png -> /src/assets/products/foo.png
  const assetPath = publicPath.replace('/images/products/', '/src/assets/products/');
  const entry = productImages[assetPath];
  return entry ? entry.default : publicPath;
}
