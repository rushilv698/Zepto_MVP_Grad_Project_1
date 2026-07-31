const fs = require('fs');

try {
  const data = fs.readFileSync('products.json', 'utf8');
  let root = JSON.parse(data);
  let products = root.products;
  const initialCount = products.length;

  products = products.filter(p => p.image_url && !p.image_url.includes('placehold.co'));

  const finalCount = products.length;
  console.log(`Removed ${initialCount - finalCount} products with placeholder images.`);
  console.log(`Remaining products: ${finalCount}`);

  root.products = products;
  fs.writeFileSync('products.json', JSON.stringify(root, null, 2));
} catch (e) {
  console.error("Error:", e);
}
