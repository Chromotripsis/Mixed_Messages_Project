// Subway sandwich generator

let pao = ['Whole wheat', 'Italian white', 'Multi-seed', 'Herbs & Cheese', 'Glúten free', 'Wheat wrap'];
let protein = ['Chicken breast', 'Chicken tikka', 'Tuna', 'Surimi', 'BBQ pork', 'Ham', 'Salame', 'Pepperoni', 'Bacon', 'Steak', 'Meatballs', 'Vegan patty', 'T.L.C. teriyaki'];
let cheese = ['Sliced parmesan', 'Cheddar', 'American cheese', 'Shredded mozzarella and cheddar'];
let extra = ['Cheese', 'Bacon', 'Pepperoni', 'Guacamole', 'Protein'];
let vegetables = ['Lettuce', 'Carrot', 'Cucumber', 'Onion', 'Jalapeno', 'Tomato', 'Peppers', 'Olives', 'Pickles'];
let sauce = ['Honey mustard', 'Barbecue', 'Sweet onion', 'Vegan garlic', 'Mustard', 'Ketchup', 'Light mayo', 'Chipotle', 'Caesar', 'Vinegar', 'Olive oil'];

pao = pao[Math.floor(Math.random()*pao.length)];
protein = protein[Math.floor(Math.random()*protein.length)];
cheese = cheese[Math.floor(Math.random()*cheese.length)];
extra = extra[Math.floor(Math.random()*extra.length)];
vegetables = vegetables[Math.floor(Math.random()*vegetables.length)];
sauce = sauce[Math.floor(Math.random()*sauce.length)];

console.log(`Here is your sandwich: a ${pao} with ${protein}, with some ${cheese}, ${vegetables}, extra ${extra} and ${sauce} sauce. `);