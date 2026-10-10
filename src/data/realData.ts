import { RealMenuItem } from '../types';

export const BUSINESS_INFO = {
  name: 'HoneyDip Donuts & Diner',
  tagline: 'Fresh donuts. Breakfast all day. The sweetest spot on Kenny Road.',
  history: 'A Columbus institution since the 1970s — 50+ years, family-owned, donuts made fresh daily.',
  address: '4480 Kenny Road, Columbus, OH 43220',
  phone: '(614) 459-0812',
  phoneRaw: '6144590812',
  rating: '4.6',
  reviewCount: '851+',
  hours: [
    { days: 'Monday & Tuesday', time: 'CLOSED', kitchen: 'Closed' },
    { days: 'Wednesday – Saturday', time: '6:00 AM – 2:30 PM', kitchen: 'Kitchen closes at 2:00 PM' },
    { days: 'Sunday', time: '7:00 AM – 2:30 PM', kitchen: 'Kitchen closes at 2:00 PM' }
  ],
  kitchenNote: 'Kitchen closes at 2:00 PM daily.',
  googleMapsUrl: 'https://maps.google.com/?q=4480+Kenny+Road+Columbus+OH+43220',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3054.4087588390177!2d-83.0560867!3d40.046182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88388dc8992ad7c3%3A0x6b4f8a846c243884!2sHoneyDip%20Donuts%20%26%20Diner!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus',
  socials: {
    instagram: 'https://www.instagram.com',
    facebook: 'https://www.facebook.com'
  }
};

export const DONUT_VARIETIES = {
  regular: [
    'Honey Dip Glazed',
    'Chocolate Frosted',
    'Chocolate Frosted Sprinkles',
    'Vanilla Frosted Sprinkles',
    'Cinnamon Sugar',
    'Sugar Raised',
    'Old Fashion Cake',
    'Buttermilk Cake',
    'Devils Food',
    'Double Chocolate Devils Food',
    'Red Velvet',
    'Blueberry',
    'Cherry',
    'Jelly Iced',
    'Jelly Powdered'
  ],
  fancy: [
    'Glazed Cinnamon Roll',
    'Apple Fritter',
    'Chocolate Cream',
    'Vanilla Cream',
    'Black Raspberry',
    'Chocolate Custard',
    'Chocolate Long John',
    'Maple Long John',
    'Vanilla Long John',
    'Glazed Bowtie',
    'Seasonal Pumpkin'
  ]
};

export const REAL_MENU_ITEMS: RealMenuItem[] = [
  // --- DONUTS ---
  {
    id: 'donut-regular',
    name: 'Regular Donuts',
    category: 'donuts',
    price: 1.35,
    description: 'Made fresh from scratch every morning. Choose Honey Dip Glazed, Chocolate Frosted, Sprinkles, Old Fashion, Blueberry Cake, Red Velvet, and more.',
    imageUrl: 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&w=1200&q=80',
    altText: 'Fresh golden honey dip glazed donuts on bakery display rack',
    badge: 'Fresh Daily 6 AM',
    featured: true,
    options: [
      { label: 'Single Donut', price: 1.35 },
      { label: 'Half Dozen (6)', price: 8.10 },
      { label: 'Full Dozen (12)', price: 16.20 }
    ]
  },
  {
    id: 'donut-fancy',
    name: 'Fancy & Specialty Donuts',
    category: 'donuts',
    price: 1.60,
    description: 'Generously filled creams and custards, black raspberry, Long Johns (chocolate, maple, vanilla), glazed bowties, and seasonal pumpkin.',
    imageUrl: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1200&q=80',
    altText: 'Gourmet filled and frosted specialty donuts with chocolate and vanilla cream',
    badge: 'House Specialty',
    featured: true,
    options: [
      { label: 'Single Fancy Donut', price: 1.60 },
      { label: 'Half Dozen Fancy (6)', price: 9.60 },
      { label: 'Full Dozen Fancy (12)', price: 19.20 }
    ]
  },
  {
    id: 'cinnamon-roll',
    name: 'Glazed Cinnamon Roll',
    category: 'donuts',
    price: 1.60,
    description: 'Our beloved spiral yeast roll loaded with brown sugar and fragrant cinnamon, baked golden and dipped in HoneyDip glaze.',
    imageUrl: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80',
    altText: 'Warm hand-rolled cinnamon roll topped with sweet dripping glaze',
    badge: 'Customer Beloved',
    featured: true
  },
  {
    id: 'apple-fritter',
    name: 'Jumbo Apple Fritter',
    category: 'donuts',
    price: 1.60,
    description: 'Crispy caramelized nooks and crannies with tart apple chunks, spiced cinnamon swirls, and our signature honey glaze coating.',
    imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1200&q=80',
    altText: 'Golden-brown apple fritter with caramelized edges and honey dip glaze',
    badge: 'Local Favorite',
    featured: true
  },
  {
    id: 'long-john',
    name: 'Long John Pastry',
    category: 'donuts',
    price: 1.60,
    description: 'Traditional bakery yeast bar generously iced with rich Dutch chocolate, real maple glaze, or smooth vanilla icing.',
    imageUrl: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Bakery frosted long john donuts with rich chocolate and maple glaze',
    options: [
      { label: 'Chocolate Long John', price: 1.60 },
      { label: 'Maple Long John', price: 1.60 },
      { label: 'Vanilla Long John', price: 1.60 }
    ]
  },

  // --- BREAKFAST (Served All Day!) ---
  {
    id: 'two-eggs-homefries-toast',
    name: 'Two Eggs, Home Fries & Toast',
    category: 'breakfast',
    price: 9.00,
    description: 'Two farm-fresh eggs prepared your way, seasoned crispy griddled home fries, and your choice of buttered diner toast.',
    imageUrl: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=80',
    altText: 'Classic diner breakfast plate with sunny eggs, griddled home fries, and buttered toast',
    featured: true
  },
  {
    id: 'two-eggs-meat-homefries-toast',
    name: 'Two Eggs, Home Fries, Meat & Toast',
    category: 'breakfast',
    price: 11.00,
    description: 'Two farm eggs any style, crispy home fries, toast, and your choice of thick-cut smoked bacon, savory breakfast sausage, or country ham.',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    altText: 'Hearty diner breakfast with two eggs, crispy bacon strips, home fries, and toast',
    badge: 'All-Day Classic',
    featured: true
  },
  {
    id: 'corned-beef-hash',
    name: 'Corned Beef Hash, 2 Eggs & Toast',
    category: 'breakfast',
    price: 12.00,
    description: 'Hearty slow-cooked corned beef hash griddled crispy brown, served with two farm eggs cooked to order and warm toast.',
    imageUrl: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&w=1200&q=80',
    altText: 'Crispy griddled corned beef hash with eggs and buttered toast'
  },
  {
    id: 'blueberry-pancakes',
    name: 'Blueberry Pancakes',
    category: 'breakfast',
    price: 3.85,
    description: 'Our famous fluffy diner hotcake bursting with sweet plump blueberries, served hot with whipped butter and maple syrup.',
    imageUrl: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=1200&q=80',
    altText: 'Stack of golden blueberry pancakes with warm maple syrup dripping over blueberries',
    badge: 'Beloved Favorite',
    featured: true
  },
  {
    id: 'plain-pancakes',
    name: 'Pancakes (Plain)',
    category: 'breakfast',
    price: 3.50,
    description: 'Golden buttermilk hotcake grilled fresh to order with whipped butter and warm maple syrup.',
    imageUrl: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1200&q=80',
    altText: 'Golden buttermilk pancakes with melting butter and maple syrup'
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    category: 'breakfast',
    price: 11.25,
    description: 'Toasted English muffin halves topped with grilled country ham, poached eggs, and silky rich hollandaise sauce.',
    imageUrl: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1200&q=80',
    altText: 'Classic Eggs Benedict with poached eggs, ham, and velvety hollandaise sauce',
    badge: 'Diner Favorite'
  },
  {
    id: 'sausage-gravy-biscuits',
    name: 'Sausage, Gravy & Biscuits',
    category: 'breakfast',
    price: 10.75,
    description: 'Warm, flaky split buttermilk biscuits smothered in hearty house-made peppery country sausage gravy.',
    imageUrl: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80',
    altText: 'Warm southern biscuits covered in thick country sausage gravy'
  },
  {
    id: 'breakfast-burrito',
    name: 'Breakfast Burrito',
    category: 'breakfast',
    price: 9.50,
    description: 'Fluffy scrambled eggs, melted cheese, and seasoned potatoes wrapped in a warm flour tortilla.',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80',
    altText: 'Stuffed breakfast burrito cut in half showing eggs, cheese, and seasoned potatoes'
  },
  {
    id: 'chili-breakfast-burrito',
    name: 'Chili Breakfast Burrito',
    category: 'breakfast',
    price: 13.50,
    description: 'Our hearty breakfast burrito smothered in homemade diner chili and melted cheddar cheese.',
    imageUrl: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1200&q=80',
    altText: 'Hearty chili smothered breakfast burrito with melted cheddar'
  },
  {
    id: 'build-your-own-omelette',
    name: 'Build-Your-Own Omelette',
    category: 'breakfast',
    price: 9.25,
    description: 'Three fluffy farm eggs folded to perfection. Customize with your favorite cheeses, fresh vegetables, and meats.',
    imageUrl: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?auto=format&fit=crop&w=1200&q=80',
    altText: 'Fresh three-egg diner omelette with melted cheese and herbs'
  },
  {
    id: 'fried-egg-sandwich',
    name: 'Fried Egg Sandwich',
    category: 'breakfast',
    price: 6.00,
    description: 'Fresh fried farm egg on toasted diner bread, English muffin, or roll.',
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1200&q=80',
    altText: 'Fried egg breakfast sandwich on toasted bread',
    options: [
      { label: 'Egg Only', price: 6.00 },
      { label: 'With Melted Cheese', price: 6.75 },
      { label: 'With Meat & Cheese', price: 7.75 }
    ]
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    category: 'breakfast',
    price: 8.75,
    description: 'Thick sliced bread dipped in our cinnamon vanilla custard batter, griddled golden and dusted with powdered sugar.',
    imageUrl: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1200&q=80',
    altText: 'Golden custardy French toast with powdered sugar and maple syrup'
  },
  {
    id: 'coffee',
    name: 'Fresh Hot Coffee',
    category: 'breakfast',
    price: 2.50,
    description: 'Steaming hot diner blend coffee brewed fresh throughout the morning. The perfect pair with a warm HoneyDip donut.',
    imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    altText: 'Steaming ceramic mug of freshly brewed black diner coffee'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    category: 'breakfast',
    price: 2.75,
    description: 'Rich, comforting hot cocoa served with whipped cream.',
    imageUrl: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=1200&q=80',
    altText: 'Rich hot chocolate with whipped cream in ceramic mug'
  },
  {
    id: 'juice',
    name: 'Chilled Fruit Juice',
    category: 'breakfast',
    price: 2.30,
    description: 'Crisp and refreshing orange or apple juice.',
    imageUrl: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=1200&q=80',
    altText: 'Glass of fresh chilled orange juice',
    options: [
      { label: 'Small Juice', price: 2.30 },
      { label: 'Large Juice', price: 2.80 }
    ]
  },
  {
    id: 'home-fries-side',
    name: 'Seasoned Home Fries (Side)',
    category: 'breakfast',
    price: 4.75,
    description: 'Diced russet potatoes seasoned and griddled with crispy edges.',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80',
    altText: 'Crispy skillet home fries with seasoned herbs'
  },
  {
    id: 'breakfast-meat-side',
    name: 'Side of Bacon, Sausage or Ham',
    category: 'breakfast',
    price: 5.50,
    description: 'Crisp applewood bacon strips, seasoned breakfast sausage patties, or savory grilled ham slice.',
    imageUrl: 'https://images.unsplash.com/photo-1528607929212-2636ec44253e?auto=format&fit=crop&w=1200&q=80',
    altText: 'Crispy sizzling bacon and breakfast sausage'
  },
  {
    id: 'oatmeal',
    name: 'Warm Oatmeal',
    category: 'breakfast',
    price: 5.90,
    description: 'Hearty whole rolled oats cooked creamy, served with brown sugar and milk.',
    imageUrl: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=1200&q=80',
    altText: 'Bowl of warm creamy oatmeal with cinnamon and brown sugar'
  },

  // --- LUNCH CLASSICS ---
  {
    id: 'patty-melt',
    name: 'Patty Melt',
    category: 'lunch',
    price: 10.90,
    description: 'Fresh beef patty smothered with sweet caramelized grilled onions and melted Swiss cheese on griddled rye bread.',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Juicy patty melt sandwich with melted Swiss cheese and caramelized onions on toasted rye',
    badge: 'Diner Classic',
    featured: true
  },
  {
    id: 'hamburger',
    name: 'Classic Hamburger',
    category: 'lunch',
    price: 8.80,
    description: 'Fresh grilled beef patty on a soft toasted bun with crisp lettuce, ripe tomato, pickles, and onion.',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Fresh diner hamburger with lettuce, tomato, and pickles on a toasted bun'
  },
  {
    id: 'traditional-gyro',
    name: 'Traditional Gyro',
    category: 'lunch',
    price: 10.50,
    description: 'Seasoned gyro meat carved hot, sliced tomatoes, crisp onions, and cool tzatziki sauce wrapped in a warm grilled pita.',
    imageUrl: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=1200&q=80',
    altText: 'Traditional gyro with sliced seasoned meat, tzatziki, onions, and tomatoes in grilled pita',
    badge: 'Local Favorite',
    featured: true
  },
  {
    id: 'blt',
    name: 'Classic BLT',
    category: 'lunch',
    price: 10.25,
    description: 'Generous strips of crispy bacon, ripe red tomatoes, crisp iceberg lettuce, and mayonnaise on toasted bread.',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80',
    altText: 'Classic BLT sandwich cut diagonally with crispy bacon, lettuce, and ripe tomato',
    featured: true
  },
  {
    id: 'club-sandwich',
    name: 'Triple-Decker Club',
    category: 'lunch',
    price: 11.50,
    description: 'Triple-decker stacked with sliced turkey, crispy bacon, lettuce, tomato, cheese, and mayo on toasted bread.',
    imageUrl: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=1200&q=80',
    altText: 'Triple-decker diner club sandwich layered with turkey, bacon, cheese, and lettuce'
  },
  {
    id: 'grilled-chicken-breast',
    name: 'Grilled Chicken Breast Sandwich',
    category: 'lunch',
    price: 10.80,
    description: 'Tender marinated chicken breast grilled juicy, served with lettuce, tomato, and mayonnaise on a toasted bun.',
    imageUrl: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=1200&q=80',
    altText: 'Grilled chicken breast sandwich with lettuce and tomato on a toasted bun'
  },
  {
    id: 'grilled-cheese',
    name: 'Classic Grilled Cheese',
    category: 'lunch',
    price: 8.75,
    description: 'Melted American and cheddar cheeses griddled to golden, buttery perfection on thick diner bread.',
    imageUrl: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&w=1200&q=80',
    altText: 'Buttery golden grilled cheese sandwich with gooey melted cheese pull'
  },
  {
    id: 'coney',
    name: 'Coney Dog',
    category: 'lunch',
    price: 9.80,
    description: 'Plump grilled frankfurter in a warm bun smothered with our rich Coney meat sauce, diced yellow onions, and yellow mustard.',
    imageUrl: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=1200&q=80',
    altText: 'All-American Coney dog smothered with savory chili sauce, mustard, and diced onions'
  },
  {
    id: 'fried-bologna',
    name: 'Fried Bologna Sandwich',
    category: 'lunch',
    price: 10.75,
    description: 'An Ohio diner tradition: thick-cut bologna scored and seared hot on the flat-top with melted cheese and pickles on toasted bread.',
    imageUrl: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=1200&q=80',
    altText: 'Thick-cut seared fried bologna sandwich with melted cheese on toasted diner bread',
    badge: 'Ohio Tradition'
  },
  {
    id: 'soup',
    name: 'Homemade Diner Soup of the Day',
    category: 'lunch',
    price: 8.50,
    description: 'Made from scratch in our diner kitchen daily. Served piping hot with crackers.',
    imageUrl: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Bowl of hot homemade vegetable and noodle soup with soup spoon and crackers',
    options: [
      { label: 'Bowl of Soup', price: 8.50 },
      { label: 'Cup of Soup', price: 7.50 }
    ]
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    category: 'lunch',
    price: 10.80,
    description: 'Crisp greens, kalamata olives, tangy feta cheese, cucumbers, tomatoes, and red onions with Greek vinaigrette.',
    imageUrl: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1200&q=80',
    altText: 'Crisp Greek salad with kalamata olives, crumbled feta cheese, and red onions'
  },
  {
    id: 'grilled-chicken-salad',
    name: 'Grilled Chicken Salad',
    category: 'lunch',
    price: 12.25,
    description: 'Mixed garden greens topped with sliced tender grilled chicken breast, shredded cheese, tomatoes, and your choice of dressing.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Garden salad topped with warm grilled chicken breast slices and fresh vegetables'
  },
  {
    id: 'garden-salad',
    name: 'Fresh Garden Salad',
    category: 'lunch',
    price: 9.75,
    description: 'Fresh mixed lettuce, sliced cucumbers, ripe tomatoes, carrots, and croutons with house dressing.',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=80',
    altText: 'Fresh colorful garden salad with cucumbers, tomatoes, and crisp greens'
  },
  {
    id: 'crispy-fries',
    name: 'Golden Diner Fries',
    category: 'lunch',
    price: 4.90,
    description: 'Hot, crispy golden fried potatoes tossed in diner seasoning salt.',
    imageUrl: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=1200&q=80',
    altText: 'Crispy golden French fries in a diner basket'
  },
  {
    id: 'onion-rings',
    name: 'Crispy Onion Rings',
    category: 'lunch',
    price: 5.50,
    description: 'Thick sweet onion rings dipped in crunchy batter and fried golden brown.',
    imageUrl: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=1200&q=80',
    altText: 'Crunchy golden battered onion rings piled high'
  }
];

export const CUSTOMER_REVIEWS = [
  {
    quote: 'The blueberry pancakes are easily the best in Columbus! Fluffy, loaded with berries, and paired with a warm glazed donut. Service is so warm and welcoming.',
    author: 'Sarah M.',
    source: 'Google Reviewer',
    rating: 5,
    details: 'Kenny Road Regular'
  },
  {
    quote: 'Fifty years of history and you can taste it in every bite. Their glazed cinnamon rolls and apple fritters are legendary. Real diner atmosphere with unbeatable prices.',
    author: 'David K.',
    source: 'Google Reviewer',
    rating: 5,
    details: 'Columbus Resident'
  },
  {
    quote: 'HoneyDip is an absolute gem. Two eggs, home fries, bacon, and coffee under $15 served with a smile. My family has been coming here since the 80s.',
    author: 'Jennifer T.',
    source: 'Google Reviewer',
    rating: 5,
    details: '3-Generation Customer'
  }
];
