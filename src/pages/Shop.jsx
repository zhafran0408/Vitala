/** @format */

import { useState } from "react";
import {
  Search,
  ShoppingBag,
  Heart,
  Star,
  ArrowRight,
  ArrowUpRight,
  Truck,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { images } from "../data/images";

const CATEGORIES = [
  "Semua",
  "Jaket",
  "Fleece & Hoodie",
  "Kemeja Outdoor",
  "Celana",
  "Kaos",
  "Sepatu",
  "Aksesoris",
];

const PRODUCTS = [
  {
    id: 1,
    name: "Summit Shell Jacket",
    brand: "Vitala Pro",
    category: "Jaket",
    price: 1450000,
    originalPrice: 1890000,
    rating: 4.9,
    reviews: 234,
    badge: "Sale",
    image: images.shop.item1,
  },
  {
    id: 2,
    name: "Ridge Fleece Half-Zip",
    brand: "Vitala Wear",
    category: "Fleece & Hoodie",
    price: 750000,
    rating: 4.7,
    reviews: 213,
    badge: "Best Seller",
    image: images.shop.item2,
  },
  {
    id: 3,
    name: "Trail Cargo Pants",
    brand: "Vitala Wear",
    category: "Celana",
    price: 685000,
    rating: 4.8,
    reviews: 187,
    badge: "New",
    image: images.shop.item3,
  },
  {
    id: 4,
    name: "Alpine Flannel Shirt",
    brand: "Vitala Wear",
    category: "Kemeja Outdoor",
    price: 495000,
    originalPrice: 650000,
    rating: 4.7,
    reviews: 342,
    badge: "Sale",
    image: images.shop.item1,
  },
  {
    id: 5,
    name: "Basecamp Graphic Tee",
    brand: "Vitala Wear",
    category: "Kaos",
    price: 245000,
    rating: 4.8,
    reviews: 456,
    badge: "Best Seller",
    image: images.shop.item2,
  },
  {
    id: 6,
    name: "Windproof Anorak",
    brand: "Vitala Pro",
    category: "Jaket",
    price: 1150000,
    rating: 4.9,
    reviews: 128,
    badge: "New",
    image: images.shop.item3,
  },
  {
    id: 7,
    name: "Hoodie Oversized Outdoor",
    brand: "Vitala Wear",
    category: "Fleece & Hoodie",
    price: 585000,
    rating: 4.6,
    reviews: 289,
    badge: null,
    image: images.shop.item1,
  },
  {
    id: 8,
    name: "Wool Beanie",
    brand: "Vitala Wear",
    category: "Aksesoris",
    price: 185000,
    rating: 4.6,
    reviews: 456,
    badge: null,
    image: images.shop.item2,
  },
  {
    id: 9,
    name: "Trail Grip Boots",
    brand: "Vitala Pro",
    category: "Sepatu",
    price: 1850000,
    rating: 4.8,
    reviews: 342,
    badge: "Best Seller",
    image: images.shop.item3,
  },
];

const VALUE_PROPS = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Untuk pembelian di atas Rp 500.000",
  },
  {
    icon: RotateCcw,
    title: "30-Day Return",
    desc: "Nggak cocok? Kembalikan tanpa ribet.",
  },
  {
    icon: ShieldCheck,
    title: "Garansi Original",
    desc: "100% produk asli, garansi resmi.",
  },
  {
    icon: Sparkles,
    title: "Cicilan 0%",
    desc: "Bayar pakai kartu kredit, cicil 3-12 bulan.",
  },
];

const formatIDR = (num) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(num);

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  const filtered = PRODUCTS.filter((p) => {
    const matchCat =
      activeCategory === "Semua" || p.category === activeCategory;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <section className="border-b border-neutral-200 bg-neutral-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center gap-3">
            <span className="flex size-2 rounded-full bg-[#17382c]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-neutral-500">
              Vitala Shop · Winter 2026
            </span>
          </div>

          <div className="grid items-end gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Outfit yang bikin
              <br />
              <span className="text-neutral-400">
                perjalanan terasa ringan.
              </span>
            </h1>

            <div>
              <p className="max-w-md text-sm leading-7 text-neutral-500 sm:text-base">
                Apparel outdoor pilihan, dikurasi langsung oleh tim yang
                sudah ke lapangan. Bukan sekadar jual, tapi kami pakai sendiri.
              </p>

              <div className="mt-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                <span className="h-px w-10 bg-neutral-300" />
                9 produk tersedia
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari jaket, kaos, celana..."
                className="w-full rounded-xl border border-neutral-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition-all focus:border-[#17382c] focus:ring-2 focus:ring-[#17382c]/10"
              />
            </div>

            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full appearance-none rounded-xl border border-neutral-200 bg-white py-3.5 pl-4 pr-10 text-sm font-medium outline-none transition-all hover:border-neutral-300 focus:border-[#17382c] sm:w-48"
              >
                <option value="popular">Paling Populer</option>
                <option value="price-asc">Harga: Rendah → Tinggi</option>
                <option value="price-desc">Harga: Tinggi → Rendah</option>
                <option value="rating">Rating Tertinggi</option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-neutral-400" />
            </div>

            <button className="flex items-center justify-center gap-2 rounded-xl bg-[#17382c] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1e4a38]">
              <ShoppingBag className="size-4" />
              Keranjang
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px]">
                0
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-white px-6 py-4 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-all ${
                activeCategory === cat
                  ? "bg-[#17382c] text-white"
                  : "border border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              Menampilkan{" "}
              <span className="font-semibold text-neutral-900">
                {filtered.length}
              </span>{" "}
              produk
              {activeCategory !== "Semua" && (
                <>
                  {" "}
                  di kategori{" "}
                  <span className="font-semibold text-neutral-900">
                    {activeCategory}
                  </span>
                </>
              )}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-20 text-center">
              <p className="text-sm font-semibold text-neutral-700">
                Nggak ada produk yang cocok
              </p>
              <p className="mt-1 text-sm text-neutral-500">
                Coba ganti kata kunci atau kategori.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
              {filtered.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {product.badge && (
                      <div className="absolute left-3 top-3">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.16em] ${
                            product.badge === "Sale"
                              ? "bg-red-500 text-white"
                              : product.badge === "New"
                                ? "bg-[#17382c] text-white"
                                : "bg-[#f2c94c] text-black"
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>
                    )}

                    <button className="absolute right-3 top-3 flex size-8 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-500 backdrop-blur-md transition-all hover:border-red-300 hover:text-red-500">
                      <Heart className="size-3.5" />
                    </button>

                    <div className="absolute inset-x-3 bottom-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-900 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#17382c]">
                        <ShoppingBag className="size-3.5" />
                        Tambah ke Keranjang
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 px-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-neutral-400">
                      {product.brand}
                    </p>

                    <h3 className="mt-1 text-sm font-semibold leading-snug tracking-tight">
                      {product.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-1">
                      <Star className="size-3 fill-[#f2c94c] text-[#f2c94c]" />
                      <span className="text-xs font-medium">
                        {product.rating}
                      </span>
                      <span className="text-xs text-neutral-400">
                        ({product.reviews})
                      </span>
                    </div>

                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="text-base font-bold">
                        {formatIDR(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs text-neutral-400 line-through">
                          {formatIDR(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 flex justify-center">
            <button className="group inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold transition-all hover:border-[#17382c] hover:bg-[#17382c] hover:text-white">
              Muat lebih banyak
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      <section className="border-y border-neutral-200 bg-neutral-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = prop.icon;
            return (
              <div key={i} className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-neutral-200">
                  <Icon className="size-5 text-[#17382c]" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{prop.title}</p>
                  <p className="mt-1 text-xs leading-5 text-neutral-500">
                    {prop.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[#17382c]">
            <div className="grid items-center gap-8 lg:grid-cols-2">
              <div className="order-2 p-8 text-white sm:p-12 lg:order-1 lg:p-16">
                <span className="mb-4 inline-block text-[10px] font-mono uppercase tracking-[0.3em] text-[#a3c299]">
                  New Collection
                </span>

                <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                  Winter 2026
                  <br />
                  <span className="font-serif italic font-normal text-[#a3c299]">
                    Alpine Series.
                  </span>
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-white/60">
                  Outfit baru yang dirancang untuk suhu -10°C ke bawah.
                  Waterproof, breathable, dan tetap ringan dipakai.
                </p>

                <Link
                  to="/sign-up"
                  className="group mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#17251f] transition-all hover:-translate-y-1 hover:bg-[#e9e5d9]"
                >
                  Lihat koleksi
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              <div className="relative order-1 h-72 sm:h-96 lg:order-2 lg:h-full lg:min-h-[520px]">
                <img
                  src={images.shop.item2}
                  alt="Winter collection"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#17382c] via-transparent to-transparent lg:bg-gradient-to-r" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 lg:px-16 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[24px] border border-neutral-200 bg-neutral-50 p-8 sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                Dapat diskon 10% untuk order pertamamu.
              </h2>
              <p className="mt-3 max-w-md text-sm text-neutral-500">
                Subscribe newsletter. Kami kirim tips outdoor + update outfit
                baru, maksimal 1x seminggu.
              </p>
            </div>

            <div className="flex w-full gap-2 lg:w-auto">
              <input
                type="email"
                placeholder="email@kamu.com"
                className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3.5 text-sm outline-none transition-all focus:border-[#17382c] focus:ring-2 focus:ring-[#17382c]/10 lg:w-72"
              />
              <button className="shrink-0 rounded-xl bg-[#17382c] px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#1e4a38]">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
