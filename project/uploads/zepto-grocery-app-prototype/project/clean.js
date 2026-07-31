const fs = require('fs');

const data = JSON.parse(fs.readFileSync('products.json', 'utf8'));
let products = data.products;

// 1. Clean existing products
products = products.map(p => {
    let cat = p.categories?.[0] || 'Uncategorized';
    let subcat = p.subcategories?.[0] || 'General';

    // Map "fresh" air fresheners to household-essentials
    if (cat === 'fresh') {
        cat = 'household-essentials';
        subcat = 'Air Fresheners';
    }
    
    // Normalize toys
    if (cat === 'toys-games' || cat === 'Toys & Games') {
        cat = 'toys-games';
    }

    // Fix nested duplicates
    if (cat === subcat) {
        if (cat === 'toys-games') subcat = 'General Toys';
        else if (cat === 'household-essentials') subcat = 'Essentials';
        else if (cat === 'beauty-personal-care') subcat = 'Personal Care';
        else if (cat === 'fashion-lifestyle') subcat = 'Fashion';
        else subcat = 'General';
    }

    p.categories = [cat];
    p.subcategories = [subcat];
    return p;
});

const generateRandomId = () => Math.floor(100000 + Math.random() * 900000).toString();

const generateProducts = (category, subcategories, prefixes, suffixes, count) => {
    const newProducts = [];
    for (let i = 0; i < count; i++) {
        const subcat = subcategories[Math.floor(Math.random() * subcategories.length)];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const name = `${prefix} ${suffix}`;
        
        const price = Math.floor(Math.random() * 400) + 20;
        const discount = Math.floor(Math.random() * 30);
        const mrp = price + Math.floor((price * discount) / 100);
        const qty = [ '1 pc', '500 g', '1 kg', '250 g', '200 ml', '1 L'][Math.floor(Math.random() * 6)];
        const id = generateRandomId();
        
        newProducts.push({
            id,
            name,
            image: `https://placehold.co/300x300?text=${encodeURIComponent(name)}`,
            categories: [category],
            subcategories: [subcat],
            variants: [{
                id,
                name,
                weight: qty,
                price,
                mrp,
                discount,
                inStock: true
            }]
        });
    }
    return newProducts;
};

// Target categories to generate
const counts = {};
products.forEach(p => {
    counts[p.categories[0]] = (counts[p.categories[0]] || 0) + 1;
});

// Night Store (needs 100)
if ((counts['night-store'] || 0) < 100) {
    const needed = 100 - (counts['night-store'] || 0);
    const generated = generateProducts('night-store', 
        ['Ice Creams', 'Cold Drinks', 'Snacks', 'Chocolates', 'Party Supplies'],
        ['Magnum', 'Lays', 'Kurkure', 'Coca Cola', 'Sprite', 'Amul', 'Kwality Walls', 'Dairy Milk', 'Snickers', 'Doritos'],
        ['Ice Cream Tub', 'Magic Masala 50g', 'Cola Can 300ml', 'Chocobar', 'Crisps', 'Silk Chocolate', 'Party Pack', 'Energy Drink'],
        needed
    );
    products = products.concat(generated);
}

// Fresh (needs 100)
if ((counts['fresh'] || 0) < 100) {
    const needed = 100 - (counts['fresh'] || 0);
    const generated = generateProducts('fresh',
        ['Fruits', 'Vegetables', 'Dairy', 'Bread'],
        ['Fresh', 'Organic', 'Farm Picked', 'Premium', 'Daily'],
        ['Apples', 'Bananas', 'Potatoes', 'Onions', 'Tomatoes', 'Cow Milk', 'Whole Wheat Bread', 'Paneer 200g', 'Spinach Bunch', 'Mangoes'],
        needed
    );
    products = products.concat(generated);
}

// Pooja Needs (needs 100)
if ((counts['pooja-needs'] || 0) < 100) {
    const needed = 100 - (counts['pooja-needs'] || 0);
    const generated = generateProducts('pooja-needs',
        ['Agarbatti', 'Pooja Essentials', 'Idols & Diya'],
        ['Zed Black', 'Cycle Pure', 'Mangaldeep', 'Hari Darshan', 'Pure'],
        ['Agarbatti 100 Sticks', 'Camphor 50g', 'Cow Ghee Diya', 'Sandalwood Paste', 'Incense Cones', 'Cotton Wicks', 'Pooja Oil 1L'],
        needed
    );
    products = products.concat(generated);
}

// Toys & Games (needs 100)
if ((counts['toys-games'] || 0) < 100) {
    const needed = 100 - (counts['toys-games'] || 0);
    const generated = generateProducts('toys-games',
        ['Board Games', 'Soft Toys', 'Action Figures', 'Puzzles'],
        ['Funskool', 'Mattel', 'Hasbro', 'LEGO', 'Soft', 'Interactive'],
        ['Monopoly', 'Uno Cards', 'Teddy Bear', 'Car Toy', 'Jigsaw Puzzle 500 pcs', 'Rubiks Cube', 'Chess Set', 'Building Blocks'],
        needed
    );
    products = products.concat(generated);
}

// Save back to products.json
data.products = products;
fs.writeFileSync('products.json', JSON.stringify(data, null, 2));

console.log('Categories counts after generation:');
const finalCounts = {};
products.forEach(p => {
    finalCounts[p.categories[0]] = (finalCounts[p.categories[0]] || 0) + 1;
});
console.log(finalCounts);
