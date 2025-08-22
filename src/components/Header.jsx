import React from "react";
import { AiOutlineClockCircle, AiOutlineHeart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { HiOutlineSearch, HiOutlineShoppingCart } from "react-icons/hi";
import img from "../assets/img.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

export default function Header() {
  const products = [
    {
      id: 1,
      name: "Cup cake",
      rate: "4.5",
      image: img,
      price: 50000,
    },
    {
      id: 2,
      name: "Cake birthday",
      rate: "3.4",
      image: img1,
      price: 100000,
    },
    {
      id: 5,
      name: "Cake birthday",
      rate: "4.2",
      image: img1,
      price: 100000,
    },
    {
      id: 3,
      name: "Cup dringk",
      rate: "3.5",
      image: img2,
      price: 80000,
    },
    {
      id: 4,
      name: "Hot coffee",
      rate: "4.5",
      image: img3,
      price: 60000,
    },
    {
      id: 6,
      name: "Hot coffee",
      rate: "5",
      image: img3,
      price: 60000,
    },
  ];
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-accent/60 sticky top-0 z-50">
        <div className="flex justify-between items-center py-5 lg:px-28 md:px-12 px-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold">B</span>
            </div>
            <span className="font-serif font-bold text-xl">Bakrey Dest</span>
          </div>
          <nav className="hidden lg:flex items-center gap-9">
            <a href="#home" className="hover:text-primary transition-colors">
              Home
            </a>
            <a href="#product" className="hover:text-primary transition-colors">
              Product
            </a>
            <a
              href="#subcribe"
              className="hover:text-primary transition-colors"
            >
              About
            </a>
            <a href="#footer" className="hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3 md:gap-9">
            <div className="w-9 h-9 hover:bg-softwhit flex items-center justify-center rounded-xl">
              <button>
                <HiOutlineSearch className="w-5 h-5" />
              </button>
            </div>
            <div className="w-9 h-9 hover:bg-softwhit flex items-center justify-center rounded-xl">
              <button className="relative">
                <HiOutlineShoppingCart className="w-5 h-5" />
                <div className="absolute -top-3 -right-3 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-primary text-white font-semibold">
                  3
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* body */}
      <section
        id="home"
        className="relative bg-[url('/src/assets/bg-img.jpg')] bg-cover bg-center bg-no-repeat h-screen flex justify-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative flex flex-col gap-5 items-center justify-center">
          <h1 className="text-center z-10 text-white font-extrabold text-4xl md:text-7xl">
            Nikmati Kelezatan
            <br />
            <span className="text-accent">Dest</span>
          </h1>
          <div className="z-10 text-white flex flex-col text-center items-center gap-5 justify-center">
            <p className="md:text-2xl text-lg font-semibold w-2/3">
              Roti dan kue berkualitas premium yang dibuat dengan cinta dan
              resep tradisional turun temurun
            </p>
            <button className="py-2 md:px-6 px-3 bg-primary hover:bg-primary/90 transition-colors duration-300 rounded-lg font-semibold">
              Pesan Sekarang
            </button>
          </div>
        </div>
      </section>
      {/* product card */}
      <div
        id="product"
        className="bg-softwhit py-10 flex flex-col items-center justify-center"
      >
        <h2 className="md:text-4xl text-2xl font-bold">Best Seller</h2>
        <br />
        <p className="text-base md:text-lg font-semibold text-primary/50 w-1/2 text-center">
          Koleksi terbaik dari dapur kami, dibuat segar setiap hari dengan
          bahan-bahan pilihan
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 w-full px-5 md:px-10 mt-10">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 ease-in-out group"
              >
                <div className="relative overflow-hidden w-full h-48 rounded-t-xl">
                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5 pt-2 flex flex-col gap-2">
                  <div className="flex items-center space-x-1">
                    <FaStar className="text-yellow-400" />
                    <p>{product.rate}</p>
                  </div>
                  <h1 className="text-lg font-bold">{product.name}</h1>
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold text-primary">
                      Rp. {product.price}
                    </p>
                    <button className="py-2 px-6 bg-primary hover:bg-primary/90 transition-colors duration-300 text-white rounded-lg font-semibold">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="my-10 flex md:flex-row flex-col gap-5 items-center justify-center">
        <div className="flex flex-col items-center px-5 text-center justify-center gap-2">
          <div className="w-14 h-14 flex items-center justify-center bg-accent rounded-full">
            <AiOutlineClockCircle className="text-3xl text-primary" />
          </div>
          <h3 className="text-xl font-semibold mt-3">Segar Setiap Hari</h3>
          <p className="text-primary/60">
            Bakrey Dest menyediakan roti dan kue segar setiap hari
          </p>
        </div>
        <div className="flex flex-col items-center px-5 gap-2 justify-center text-center">
          <div className="w-14 h-14 flex items-center justify-center bg-accent rounded-full">
            <GiAchievement className="text-3xl text-primary" />
          </div>
          <h3 className="text-xl font-semibold mt-3">Kualitas Premium</h3>
          <p className="text-primary/60">
            Bakrey Dest menyediakan roti dan kue berkualitas premium
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 px-5 justify-center text-center">
          <div className="w-14 h-14 flex items-center justify-center bg-accent rounded-full">
            <AiOutlineHeart className="text-3xl text-primary" />
          </div>
          <h3 className="text-xl font-semibold mt-3">Dibuat dengan Cinta</h3>
          <p className="text-primary/60">
            Bakrey Dest menyediakan roti dan kue dibuat dengan cinta
          </p>
        </div>
      </div>
      {/* subcribe */}
      <div id="subcribe" className="py-10 flex justify-center bg-primary">
        <div className="flex flex-col justify-center items-center text-center gap-5 text-white">
          <h2 className="md:text-4xl text-2xl font-bold">
            Siap Merasakan Kelezatan Bakrey Dest ?
          </h2>
          <p className="text-base md:text-lg font-semibold text-center w-2/3 text-accent">
            bergabung dengan ribuan pelanggan yang telah merasakan kualitas
            premium produk kami
          </p>
          <div className="flex gap-5">
            <button className="bg-secondary rounded-lg px-6 py-2 font-semibold">
              Daftar Menu
            </button>
            <button className="border border-softwhit hover:bg-softwhit hover:text-primary transition-colors duration-300 rounded-lg px-6 py-2 font-semibold">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="py-10" id="footer">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">B</span>
                </div>
                <span className="text-xl font-bold">Bakery Dest</span>
              </div>
              <p className="text-background/80">
                Menghadirkan kelezatan roti dan kue dest berkualitas premium
                untuk keluarga Indonesia.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Produk</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Roti
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Kue
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pastry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Custom Order
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Menu</h4>
              <div className="space-y-2 flex flex-col text-background/80">
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#product"
                  className="hover:text-primary transition-colors"
                >
                  Product
                </a>
                <a
                  href="#subcribe"
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
                <a
                  href="#footer"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="space-y-2 text-background/80">
                <p>Jl. Raya Bakery No. 123</p>
                <p>Jakarta Selatan, 12345</p>
                <p>+62 21 999 9999</p>
                <p>info@bakerydest</p>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2024 Bakery Dest. Semua hak dilindungi.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
