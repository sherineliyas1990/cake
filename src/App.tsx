import React, { useState } from 'react';
import { 
  Cake, 
  Sparkles, 
  Star, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  Award, 
  X,
  Instagram,
  Facebook,
  Mail
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  price: string;
  tag: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'wedding' | 'chocolate' | 'fruity' | 'pastry'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  
  // AI Cake Designer State (Client-Side Interactive Generator)
  const [aiOccasion, setAiOccasion] = useState('Wedding Celebration');
  const [aiFlavor, setAiFlavor] = useState('Vanilla Bean & White Chocolate Raspberry');
  const [aiSize, setAiSize] = useState('3-Tier (80-100 servings)');
  const [aiTheme, setAiTheme] = useState('Cascading Sugar Peonies with Gold Leaf');
  const [aiDietary, setAiDietary] = useState('Standard (Organic Butter & Flour)');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<{
    cakeName: string;
    description: string;
    recommendedLayers: string[];
    bakingTips: string;
    estimatedPrice: string;
  } | null>(null);

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    type: 'Wedding Cake',
    guests: '50-100 guests',
    message: ''
  });

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Cascading Peony Wedding Masterpiece',
      category: 'wedding',
      image: '/src/assets/images/gallery_wedding_cake_1795689661966.jpg',
      description: 'Multi-tiered ivory fondant cake adorned with handcrafted sugar peonies and delicate edible 24k gold leaf accents.',
      price: 'From $450',
      tag: 'Bestseller'
    },
    {
      id: '2',
      title: 'Belgian Ganache Raspberry Drip',
      category: 'chocolate',
      image: '/src/assets/images/gallery_chocolate_ganache_1795689661993.jpg',
      description: 'Rich dark chocolate sponge layered with silky ganache, fresh organic raspberries, and artisan French macarons.',
      price: '$120',
      tag: 'Chef Choice'
    },
    {
      id: '3',
      title: 'Summer Berry Chiffon Shortcake',
      category: 'fruity',
      image: '/src/assets/images/gallery_strawberry_shortcake_1795689662410.jpg',
      description: 'Light chiffon sponge cake layered with whipped vanilla mascarpone cream and freshly picked sweet strawberries.',
      price: '$95',
      tag: 'Seasonal'
    },
    {
      id: '4',
      title: 'Rose & Pistachio Macaron Tower',
      category: 'pastry',
      image: '/src/assets/images/gallery_macaron_tower_1795689662293.jpg',
      description: 'Handcrafted French macaron pyramid featuring rosewater, Sicilian pistachio, and Tahitian vanilla bean.',
      price: '$280',
      tag: 'Events'
    },
    {
      id: '5',
      title: 'Matcha Green Tea Mirror Glaze',
      category: 'fruity',
      image: '/src/assets/images/gallery_matcha_mousse_1795689662392.jpg',
      description: 'Uji ceremonial grade matcha mousse with white chocolate crisp layers and mirror glaze finish.',
      price: '$110',
      tag: 'Artisan'
    },
    {
      id: '6',
      title: 'Signature Sunlit Bakery Tier',
      category: 'wedding',
      image: '/src/assets/images/hero_bakery_showcase_1795689661782.jpg',
      description: 'Our signature showcase creation with soft buttercream textures and fresh seasonal floral arrangements.',
      price: '$380',
      tag: 'Award Winning'
    }
  ];

  const filteredGallery = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const handleAiGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setAiLoading(true);

    setTimeout(() => {
      // Generate intelligent blueprint based on user selections
      const nameMap: Record<string, string> = {
        'Wedding Celebration': 'The Royal Botanical Ivory Tier',
        'Birthday Milestone': 'The Celebration Confetti Drip',
        'Anniversary': 'The Golden Romance Velvet Cake',
        'Baby Shower': 'The Pastel Whisper Chiffon',
        'Corporate Gala': 'The Grand Patisserie Noir'
      };

      const cakeName = nameMap[aiOccasion] || 'The Signature Custom Creation';
      
      setAiResult({
        cakeName,
        description: `A custom ${aiSize.toLowerCase()} designed for your ${aiOccasion.toLowerCase()}. Features ${aiFlavor.toLowerCase()} with ${aiTheme.toLowerCase()}, prepared with ${aiDietary.toLowerCase()}.`,
        recommendedLayers: [
          `Sponge: Organic ${aiFlavor.split('&')[0].trim()} Sponge`,
          `Filling: Artisan ${aiFlavor.includes('Raspberry') ? 'Raspberry Rose Compote' : aiFlavor.includes('Chocolate') ? 'Belgian Ganache' : 'Vanilla Mascarpone Cream'}`,
          `Exterior Finish: ${aiTheme}`
        ],
        bakingTips: `Crafted with European cultured butter and organic free-range eggs. Designed to serve your guests with exquisite balance of sweetness and texture.`,
        estimatedPrice: aiSize.includes('3-Tier') ? '$380 - $480' : aiSize.includes('2-Tier') ? '$220 - $290' : '$130 - $180'
      });
      setAiLoading(false);
    }, 600);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fcfbfa] text-[#2b2625] selection:bg-[#d4a373] selection:text-white">
      {/* TOP BAR CONTRACT: Brand | 4-5 Nav Links | 1 Primary CTA */}
      <header className="sticky top-0 z-40 bg-[#fcfbfa]/95 backdrop-blur-md border-b border-[#e6dfd5] px-6 lg:px-12 py-4 flex items-center justify-between gap-8">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-[#9c6644] flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Cake className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight text-[#3a2e2b]">
            Sweet Delights
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5c524f]">
          <a href="#gallery" className="hover:text-[#9c6644] transition-colors whitespace-nowrap shrink-0">Gallery</a>
          <a href="#ai-studio" className="hover:text-[#9c6644] transition-colors whitespace-nowrap shrink-0 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#b08968]" /> Cake Concept Studio
          </a>
          <a href="#menu" className="hover:text-[#9c6644] transition-colors whitespace-nowrap shrink-0">Menu & Pricing</a>
          <a href="#about" className="hover:text-[#9c6644] transition-colors whitespace-nowrap shrink-0">Our Story</a>
          <a href="#reviews" className="hover:text-[#9c6644] transition-colors whitespace-nowrap shrink-0">Reviews</a>
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <a 
            href="#contact" 
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#9c6644] rounded-full hover:bg-[#7f5539] transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            Order Custom Cake
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-20 lg:py-32 px-6 lg:px-12 bg-gradient-to-b from-[#f5ede3] to-[#fcfbfa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e3d5ca]/60 border border-[#d4c5b9] text-xs font-semibold text-[#7f5539]">
              <Sparkles className="w-3.5 h-3.5" /> Static GitHub Pages Ready · Artisan Bakery & Custom Cake Studio
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-[#2b2625] leading-[1.1] text-wrap balance">
              Handcrafted Artistry in Every <span className="italic text-[#9c6644]">Delicious</span> Slice
            </h1>
            
            <p className="text-lg text-[#6b5e59] max-w-xl leading-relaxed">
              From fairytale wedding masterpieces to decadent birthday cakes and delicate French macarons, we bake joy with organic ingredients, European butter, and boundless passion.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="#gallery" 
                className="px-7 py-3.5 text-sm font-semibold text-white bg-[#2b2625] rounded-full hover:bg-[#433835] transition-all shadow-md flex items-center gap-2 whitespace-nowrap"
              >
                Explore Gallery <ChevronRight className="w-4 h-4" />
              </a>
              <a 
                href="#ai-studio" 
                className="px-7 py-3.5 text-sm font-semibold text-[#7f5539] bg-white border border-[#d4c5b9] rounded-full hover:bg-[#faf6f0] transition-all flex items-center gap-2 shadow-sm whitespace-nowrap"
              >
                <Sparkles className="w-4 h-4 text-[#b08968]" /> Cake Concept Studio
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[#e6dfd5]">
              <div>
                <p className="text-2xl font-display font-bold text-[#2b2625]">15+</p>
                <p className="text-xs text-[#7f5539]">Years of Baking Excellence</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-[#2b2625]">5,000+</p>
                <p className="text-xs text-[#7f5539]">Custom Cakes Created</p>
              </div>
              <div>
                <p className="text-2xl font-display font-bold text-[#2b2625]">100%</p>
                <p className="text-xs text-[#7f5539]">Organic Fresh Ingredients</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src="/src/assets/images/hero_bakery_showcase_1795689661782.jpg" 
                alt="Sweet Delights Masterpiece Cake"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#eddcd2]">Signature Collection</p>
                  <p className="text-lg font-display font-semibold">The Grand Vanilla Peony Tier</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-[#e6dfd5] flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#9c6644]">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#7f5539] font-medium">Voted Best Bakery</p>
                <p className="text-sm font-bold text-[#2b2625]">City Culinary Awards 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY OF BEST CREATIONS */}
      <section id="gallery" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9c6644]">Our Finest Work</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2625]">
              Gallery of Best Creations
            </h2>
            <p className="text-[#6b5e59]">
              Browse our signature collection of bespoke cakes, decadent chocolate creations, and artisanal patisserie. Each piece is meticulously crafted to order.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Creations' },
              { id: 'wedding', label: 'Wedding Cakes' },
              { id: 'chocolate', label: 'Chocolate Delights' },
              { id: 'fruity', label: 'Fresh & Fruity' },
              { id: 'pastry', label: 'Pastry & Macarons' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'bg-[#9c6644] text-white shadow-sm' 
                    : 'bg-[#f5ede3]/60 text-[#6b5e59] hover:bg-[#e3d5ca]/60'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGallery.map(item => (
              <div 
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group bg-[#fcfbfa] rounded-2xl overflow-hidden border border-[#e6dfd5] hover:border-[#9c6644] transition-all duration-300 shadow-sm hover:shadow-xl cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f5ede3]">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#7f5539] shadow-sm backdrop-blur-sm">
                      {item.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#9c6644] text-white shadow-md">
                      {item.price}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#8d7b73]">
                      <span className="capitalize">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>Handmade fresh</span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-[#2b2625] group-hover:text-[#9c6644] transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-[#6b5e59] line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e6dfd5] flex items-center justify-between text-xs font-semibold text-[#9c6644]">
                    <span>View Details & Order</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI CUSTOM CAKE DESIGNER (Client-Side Instant Generator for Static Hosting) */}
      <section id="ai-studio" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#fcfbfa] to-[#f5ede3]/70 border-t border-b border-[#e6dfd5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#9c6644]/10 text-[#9c6644] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> Interactive Concept Studio
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2625]">
              Custom Cake Concept Designer
            </h2>
            <p className="text-[#6b5e59]">
              Select your preferences below to instantly generate a master pastry chef custom cake blueprint and recipe recommendation, 100% optimized for static hosting.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 bg-white p-8 rounded-2xl shadow-md border border-[#e6dfd5] space-y-6">
              <h3 className="text-xl font-display font-semibold text-[#2b2625]">Design Your Dream Cake</h3>

              <form onSubmit={handleAiGenerate} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Occasion</label>
                  <select 
                    value={aiOccasion}
                    onChange={(e) => setAiOccasion(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-[#fcfbfa] text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                  >
                    <option>Wedding Celebration</option>
                    <option>Birthday Milestone</option>
                    <option>Anniversary</option>
                    <option>Baby Shower</option>
                    <option>Corporate Gala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Flavor Preference</label>
                  <select 
                    value={aiFlavor}
                    onChange={(e) => setAiFlavor(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-[#fcfbfa] text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                  >
                    <option>Vanilla Bean & White Chocolate Raspberry</option>
                    <option>Belgian Dark Chocolate & Salted Caramel</option>
                    <option>Lemon Chiffon & Blueberry Compote</option>
                    <option>Matcha Green Tea & White Chocolate</option>
                    <option>Red Velvet & Cream Cheese Ganache</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Size / Servings</label>
                  <select 
                    value={aiSize}
                    onChange={(e) => setAiSize(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-[#fcfbfa] text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                  >
                    <option>Single Tier (15-20 servings)</option>
                    <option>2-Tier (40-50 servings)</option>
                    <option>3-Tier (80-100 servings)</option>
                    <option>Grand 4-Tier (150+ servings)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Theme & Aesthetics</label>
                  <input 
                    type="text"
                    value={aiTheme}
                    onChange={(e) => setAiTheme(e.target.value)}
                    placeholder="e.g., Rustic Botanical, Modern Minimalist Gold, Vintage Lace"
                    className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-[#fcfbfa] text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Dietary Notes</label>
                  <select 
                    value={aiDietary}
                    onChange={(e) => setAiDietary(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-[#fcfbfa] text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                  >
                    <option>Standard (Organic Butter & Flour)</option>
                    <option>Gluten-Free Options Available</option>
                    <option>Vegan Plant-Based</option>
                    <option>Nut-Free Facility Prep</option>
                  </select>
                </div>

                <button 
                  type="submit"
                  disabled={aiLoading}
                  className="w-full py-3.5 text-sm font-semibold text-white bg-[#9c6644] rounded-xl hover:bg-[#7f5539] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {aiLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Generating Blueprint...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" /> Generate Custom Cake Blueprint
                    </>
                  )}
                </button>
              </form>
            </div>

            <div className="lg:col-span-6 bg-white p-8 rounded-2xl shadow-md border border-[#e6dfd5] space-y-6">
              <h3 className="text-xl font-display font-semibold text-[#2b2625]">Master Pastry Concept</h3>

              {aiResult ? (
                <div className="space-y-6 animate-fadeIn">
                  <div className="bg-[#f5ede3]/50 p-6 rounded-xl border border-[#d4c5b9]/60 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#9c6644]">Recommended Creation</span>
                      <span className="text-sm font-bold text-[#2b2625]">{aiResult.estimatedPrice}</span>
                    </div>
                    <h4 className="text-2xl font-display font-bold text-[#2b2625]">{aiResult.cakeName}</h4>
                    <p className="text-sm text-[#6b5e59] leading-relaxed">{aiResult.description}</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-[#7f5539]">Layer & Filling Blueprint</h5>
                    <ul className="space-y-2">
                      {aiResult.recommendedLayers.map((layer, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-sm text-[#5c524f] bg-[#fcfbfa] p-3 rounded-lg border border-[#e6dfd5]">
                          <CheckCircle2 className="w-4 h-4 text-[#9c6644] shrink-0 mt-0.5" />
                          <span>{layer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#fcfbfa] p-4 rounded-xl border border-[#e6dfd5] space-y-1">
                    <p className="text-xs font-semibold text-[#9c6644]">Master Baker&apos;s Note</p>
                    <p className="text-xs text-[#6b5e59]">{aiResult.bakingTips}</p>
                  </div>

                  <a 
                    href="#contact" 
                    onClick={() => {
                      setFormData(prev => ({ ...prev, message: `I would like to order the custom cake concept: ${aiResult.cakeName} (${aiResult.estimatedPrice}).` }));
                    }}
                    className="w-full py-3.5 text-sm font-semibold text-white bg-[#2b2625] rounded-xl hover:bg-[#433835] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    Request This Custom Cake <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div className="py-20 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#f5ede3] flex items-center justify-center mx-auto text-[#9c6644]">
                    <Cake className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 max-w-sm mx-auto">
                    <p className="font-semibold text-[#2b2625]">Ready to Create Your Masterpiece</p>
                    <p className="text-xs text-[#7f5539]">Fill out your preferences on the left and click generate to see your custom cake blueprint instantly.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* MENU & PRICING GUIDE */}
      <section id="menu" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9c6644]">Transparent Pricing</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2625]">
              Menu & Pricing Guide
            </h2>
            <p className="text-[#6b5e59]">
              Every cake is baked from scratch using single-origin chocolates, fresh vanillas, and farm-fresh organic dairy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Signature Celebration Cakes',
                price: 'From $85',
                desc: 'Perfect for birthdays, anniversaries, and family gatherings. Custom color buttercream and personalized inscription.',
                features: ['Serves 12 - 20 guests', 'Choice of 3 sponge flavors', 'Custom color palette', 'Personalized topper']
              },
              {
                title: 'Multitier Wedding Masterpieces',
                price: 'From $380',
                desc: 'Bespoke architectural wedding cakes designed to complement your floral theme and guest count.',
                features: ['Serves 50 - 250+ guests', 'Tasting box included', 'Sugar flower craftsmanship', 'Delivery & setup service']
              },
              {
                title: 'Gourmet Cupcake Collections',
                price: '$45 / dozen',
                desc: 'Artisanal cupcakes topped with velvety Swiss meringue buttercream and delicate handmade sugar pearls.',
                features: ['Minimum 1 dozen per flavor', 'Gift box packaging', 'Vegan & GF available', 'Assorted flavor packs']
              },
              {
                title: 'French Macaron Towers',
                price: 'From $150',
                desc: 'Stunning acrylic tower displays arranged with delicate French macarons in pastel celebration hues.',
                features: ['50 to 150 macarons', 'Choice of 4 signature fillings', 'Tower rental included', 'Gluten-free friendly']
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-[#fcfbfa] p-8 rounded-2xl border border-[#e6dfd5] flex flex-col justify-between space-y-6 hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div>
                    <span className="text-xs font-bold text-[#9c6644] uppercase tracking-wider">{pkg.price}</span>
                    <h3 className="text-xl font-display font-semibold text-[#2b2625] mt-1">{pkg.title}</h3>
                    <p className="text-sm text-[#6b5e59] mt-2">{pkg.desc}</p>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-[#e6dfd5]">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#5c524f]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#9c6644] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="#contact" 
                  className="w-full py-3 text-xs font-semibold uppercase tracking-wider text-center text-[#7f5539] bg-white border border-[#d4c5b9] rounded-xl hover:bg-[#f5ede3] transition-colors"
                >
                  Inquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS & SOCIAL PROOF */}
      <section id="reviews" className="py-24 px-6 lg:px-12 bg-[#f5ede3]/40">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9c6644]">Testimonials</p>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2625]">
              Loved by Our Sweet Clients
            </h2>
            <p className="text-[#6b5e59]">
              Read how we helped make weddings, birthdays, and celebrations unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Sweet Delights created our 4-tier wedding cake and it was absolute perfection! Not only did it look like a magazine cover, but our guests are still raving about the raspberry white chocolate flavor.',
                name: 'Eleanor & Marcus Vance',
                role: 'Wedding Clients',
                date: 'October 2025'
              },
              {
                quote: 'The custom cake designer gave us an amazing concept for my daughter’s 10th birthday. The result exceeded every expectation—moist, decadent, and stunningly decorated!',
                name: 'Dr. Sophia Reynolds',
                role: 'Birthday Host',
                date: 'January 2026'
              },
              {
                quote: 'As an event planner, I work with many bakeries, but Sweet Delights is unmatched in punctuality, exquisite artistry, and professional tasting service. They are my absolute go-to.',
                name: 'Julian Thorne',
                role: 'Luxury Event Director',
                date: 'February 2026'
              }
            ].map((rev, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-[#e6dfd5] space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#5c524f] italic leading-relaxed">&ldquo;{rev.quote}&rdquo;</p>
                </div>

                <div className="pt-4 border-t border-[#e6dfd5] flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-[#2b2625]">{rev.name}</p>
                    <p className="text-xs text-[#7f5539]">{rev.role}</p>
                  </div>
                  <span className="text-xs text-[#8d7b73]">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE CONTACT & CUSTOM ORDER FORM */}
      <section id="contact" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f5ede3] text-xs font-semibold text-[#7f5539]">
              Get in Touch
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#2b2625]">
              Let&apos;s Bake Something Special Together
            </h2>
            
            <p className="text-[#6b5e59] leading-relaxed">
              Have a question, need a consultation, or ready to place a custom cake order? Fill out the form or reach out directly through our contact details below.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 text-[#5c524f]">
                <div className="w-10 h-10 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#9c6644] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#8d7b73]">Call or WhatsApp</p>
                  <p className="text-sm font-bold text-[#2b2625]">+1 (555) 382-7422</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#5c524f]">
                <div className="w-10 h-10 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#9c6644] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#8d7b73]">Email Studio</p>
                  <p className="text-sm font-bold text-[#2b2625]">orders@sweetdelightsbakery.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#5c524f]">
                <div className="w-10 h-10 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#9c6644] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#8d7b73]">Bakery Boutique</p>
                  <p className="text-sm font-bold text-[#2b2625]">482 Patisserie Lane, Culinary District</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-[#5c524f]">
                <div className="w-10 h-10 rounded-full bg-[#f5ede3] flex items-center justify-center text-[#9c6644] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-[#8d7b73]">Opening Hours</p>
                  <p className="text-sm font-bold text-[#2b2625]">Tue – Sat: 8:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#fcfbfa] p-8 lg:p-10 rounded-2xl border border-[#e6dfd5] shadow-md">
            {formSubmitted ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-[#2b2625]">Order Inquiry Received!</h3>
                <p className="text-sm text-[#6b5e59] max-w-md mx-auto">
                  Thank you, <span className="font-semibold text-[#2b2625]">{formData.name}</span>. Our master pastry chef will review your request and contact you within 24 hours with a formal quote and tasting schedule.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2.5 text-xs font-semibold text-[#9c6644] bg-[#f5ede3] rounded-full hover:bg-[#e3d5ca] transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <h3 className="text-xl font-display font-semibold text-[#2b2625]">Custom Order & Contact Form</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Your Full Name *</label>
                    <input 
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Email Address *</label>
                    <input 
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Phone Number *</label>
                    <input 
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="(555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Event Date *</label>
                    <input 
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Order Type</label>
                    <select 
                      value={formData.type}
                      onChange={(e) => setFormData({...formData, type: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                    >
                      <option>Wedding Cake</option>
                      <option>Birthday Cake</option>
                      <option>Anniversary Cake</option>
                      <option>Macaron Tower / Pastry Box</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Estimated Guest Count</label>
                    <select 
                      value={formData.guests}
                      onChange={(e) => setFormData({...formData, guests: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                    >
                      <option>Under 25 guests</option>
                      <option>25 - 50 guests</option>
                      <option>50 - 100 guests</option>
                      <option>100+ guests</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#7f5539] mb-1.5">Message / Custom Cake Details</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Tell us about your theme, colors, flavor preferences, or any dietary requirements..."
                    className="w-full px-4 py-3 rounded-xl border border-[#d4c5b9] bg-white text-sm focus:outline-none focus:ring-2 focus:ring-[#9c6644]"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-4 text-sm font-semibold text-white bg-[#9c6644] rounded-xl hover:bg-[#7f5539] transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Send Inquiry & Request Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#2b2625] text-[#e6dfd5] py-16 px-6 lg:px-12 border-t border-[#433835]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-[#9c6644] flex items-center justify-center text-white">
                <Cake className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-display tracking-tight text-white">
                Sweet Delights
              </span>
            </div>
            <p className="text-xs text-[#b8a494] leading-relaxed">
              Crafting bespoke luxury wedding cakes, artisanal patisserie, and joyous celebration treats since 2011.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Quick Navigation</p>
            <ul className="space-y-2 text-xs text-[#b8a494]">
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery of Best Creations</a></li>
              <li><a href="#ai-studio" className="hover:text-white transition-colors">Cake Concept Studio</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Menu & Pricing</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Bakery Boutique</p>
            <ul className="space-y-2 text-xs text-[#b8a494]">
              <li>482 Patisserie Lane</li>
              <li>Culinary District, City 10012</li>
              <li>Phone: +1 (555) 382-7422</li>
              <li>Email: orders@sweetdelightsbakery.com</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white mb-4">Follow Our Creations</p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-[#433835] flex items-center justify-center text-white hover:bg-[#9c6644] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#433835] flex items-center justify-center text-white hover:bg-[#9c6644] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#433835] flex items-center justify-center text-white hover:bg-[#9c6644] transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#433835] text-center text-xs text-[#8d7b73]">
          &copy; {new Date().getFullYear()} Sweet Delights Artisan Bakery & Custom Cake Studio. All rights reserved.
        </div>
      </footer>

      {/* IMAGE / ITEM DETAILS MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl animate-fadeIn relative">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-square md:aspect-auto">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-8 space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#f5ede3] text-[#7f5539]">
                      {selectedImage.tag}
                    </span>
                    <span className="text-lg font-bold font-display text-[#9c6644]">
                      {selectedImage.price}
                    </span>
                  </div>

                  <h3 className="text-2xl font-display font-semibold text-[#2b2625]">
                    {selectedImage.title}
                  </h3>

                  <p className="text-sm text-[#6b5e59] leading-relaxed">
                    {selectedImage.description}
                  </p>

                  <div className="bg-[#fcfbfa] p-4 rounded-xl border border-[#e6dfd5] space-y-2">
                    <p className="text-xs font-semibold text-[#2b2625]">Customization Options:</p>
                    <ul className="text-xs text-[#6b5e59] space-y-1">
                      <li>• Available in 6 gourmet sponge flavors</li>
                      <li>• Dietary modifications (GF & Vegan upon request)</li>
                      <li>• Customizable color theme & floral accents</li>
                    </ul>
                  </div>
                </div>

                <a 
                  href="#contact"
                  onClick={() => {
                    setFormData(prev => ({ ...prev, message: `I am interested in ordering: ${selectedImage.title} (${selectedImage.price}).` }));
                    setSelectedImage(null);
                  }}
                  className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#9c6644] rounded-xl hover:bg-[#7f5539] transition-all shadow-md"
                >
                  Request This Creation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
