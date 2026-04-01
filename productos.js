// ================================================================
//  PRODUCTOS.JS — Base de datos del catálogo
//  Cada modelo es un producto separado
// ================================================================

const PRODUCTOS = [

  // ── PRODUCTO 1: Shark Full Zip Hoodie - Pink Camo ────────────────────
  {
    id: "bape-shark-full-zip-pink-camo",
    nombre: "Shark Full Zip Hoodie - Pink Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado rosa clásico",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/qY4G2PQV/Bape-Full-Zip-Pink-Camo.jpg",
    color: "#e8a0b4"
  },

  // ── PRODUCTO 2: Shark Full Zip Hoodie - 1st Camo Shark Black Green ────────────────────
  {
    id: "bape-shark-full-zip-1st-camo-shark-black-green",
    nombre: "Shark Full Zip Hoodie - 1st Camo Shark Black Green",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado verde militar con shark negro",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/7NYLsNHH/Bape-Full-Zip-1st-Camo-Shark-Black-Green.jpg",
    color: "#3a5a2a"
  },

  // ── PRODUCTO 3: Shark Full Zip Hoodie - Blue Pink Camo ────────────────────
  {
    id: "bape-shark-full-zip-blue-pink-camo",
    nombre: "Shark Full Zip Hoodie - Blue Pink Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado azul con detalles rosa",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/4g9JVnWw/Bape-Full-Zip-Blue-Pink-Camo.jpg",
    color: "#6a8ecc"
  },

  // ── PRODUCTO 4: Shark Full Zip Hoodie - White Camo ────────────────────
  {
    id: "bape-shark-full-zip-white-camo",
    nombre: "Shark Full Zip Hoodie - White Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado blanco clásico",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/Mb8T5mp/Bape-Full-Zip-White-Camo.jpg",
    color: "#e8e8e8"
  },

  // ── PRODUCTO 5: Shark Full Zip Hoodie - Dream Camo ────────────────────
  {
    id: "bape-shark-full-zip-dream-camo",
    nombre: "Shark Full Zip Hoodie - Dream Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camo multicolor dream edition",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/1Gqyb8wT/Bape-Full-Zip-Dream-Camo.jpg",
    color: "#b08ec0"
  },

  // ── PRODUCTO 6: Shark Full Zip Hoodie - Nigo's Camo ────────────────────
  {
    id: "bape-shark-full-zip-nigo-s-camo",
    nombre: "Shark Full Zip Hoodie - Nigo's Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Edición especial Nigo",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/nqQC7Ly2/Bape-Full-Zip-Nigo-s-Camo.jpg",
    color: "#8a6a4a"
  },

  // ── PRODUCTO 7: Shark Full Zip Hoodie - Black White Camo ────────────────────
  {
    id: "bape-shark-full-zip-black-white-camo",
    nombre: "Shark Full Zip Hoodie - Black White Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado negro y blanco",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/7Jqth0P2/Bape-Full-Zip-Up-Black-White-Camo.jpg",
    color: "#444444"
  },

  // ── PRODUCTO 8: Shark Full Zip Hoodie - Black Grey Camo ────────────────────
  {
    id: "bape-shark-full-zip-black-grey-camo",
    nombre: "Shark Full Zip Hoodie - Black Grey Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado negro y gris",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/JRdhqMnx/Bape-Full-Zip-Black-Grey-Camo.jpg",
    color: "#2a2a2a"
  },

  // ── PRODUCTO 9: Shark Full Zip Hoodie - Strass Black Camo ────────────────────
  {
    id: "bape-shark-full-zip-strass-black-camo",
    nombre: "Shark Full Zip Hoodie - Strass Black Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camo negro con strass brillante",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/0yjSHMRh/Bape-Full-Zip-Strass-Black-Camo.jpg",
    color: "#1a1a1a"
  },

  // ── PRODUCTO 10: Shark Full Zip Hoodie - White Coloured Camo ────────────────────
  {
    id: "bape-shark-full-zip-white-coloured-camo",
    nombre: "Shark Full Zip Hoodie - White Coloured Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camo blanco con detalles de colores",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/nNhhNxNF/Bape-Full-Zip-White-Coloured-Camo.jpg",
    color: "#f0ece0"
  },

  // ── PRODUCTO 11: Shark Full Zip Hoodie - Orange Black Camo ────────────────────
  {
    id: "bape-shark-full-zip-orange-black-camo",
    nombre: "Shark Full Zip Hoodie - Orange Black Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado naranja y negro",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/MDZgGZqc/Bape-Full-Zip-Orange-Black-Camo.jpg",
    color: "#d4601a"
  },

  // ── PRODUCTO 12: Shark Full Zip Hoodie - Black Half Camo ────────────────────
  {
    id: "bape-shark-full-zip-black-half-camo",
    nombre: "Shark Full Zip Hoodie - Black Half Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Mitad negro liso, mitad camo",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/q3wp0jwT/Bape-Full-Zip-Black-Half-Camo.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 13: Shark Full Zip Hoodie - Green Camo ────────────────────
  {
    id: "bape-shark-full-zip-green-camo",
    nombre: "Shark Full Zip Hoodie - Green Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado verde militar",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/67QMBjdZ/Bape-Full-Zip-Green-Camo.jpg",
    color: "#4a7a3a"
  },

  // ── PRODUCTO 14: Shark Full Zip Hoodie - White Half Grey Camo ────────────────────
  {
    id: "bape-shark-full-zip-white-half-grey-camo",
    nombre: "Shark Full Zip Hoodie - White Half Grey Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Mitad blanca, mitad camo gris",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/9Hyj3G3F/Bape-Full-Zip-White-Half-Grey-Camo.jpg",
    color: "#c8c8c8"
  },

  // ── PRODUCTO 15: Shark Full Zip Hoodie - Green Light Blue Camo ────────────────────
  {
    id: "bape-shark-full-zip-green-light-blue-camo",
    nombre: "Shark Full Zip Hoodie - Green Light Blue Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado verde y celeste",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/KcBrDvFx/Bape-Full-Zip-Up-Green-Light-Blue-Camo.jpg",
    color: "#5aaa8a"
  },

  // ── PRODUCTO 16: Shark Full Zip Hoodie - Patchwork Camo v1 ────────────────────
  {
    id: "bape-shark-full-zip-patchwork-camo-v1",
    nombre: "Shark Full Zip Hoodie - Patchwork Camo v1",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Patchwork de camuflados combinados",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/MyqgsPGX/Bape-Full-Zip-Patchwork-Camo-1.jpg",
    color: "#7a6a5a"
  },

  // ── PRODUCTO 17: Shark Full Zip Hoodie - Light Blue Camo ────────────────────
  {
    id: "bape-shark-full-zip-light-blue-camo",
    nombre: "Shark Full Zip Hoodie - Light Blue Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado azul cielo",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/jStgjt2/Bape-Full-Zip-Light-Blue-Camo.jpg",
    color: "#80b8e0"
  },

  // ── PRODUCTO 18: Shark Full Zip Hoodie - Purple Camo ────────────────────
  {
    id: "bape-shark-full-zip-purple-camo",
    nombre: "Shark Full Zip Hoodie - Purple Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado lila violeta",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/vxgDyYdC/Bape-Full-Zip-Purple-Camo.jpg",
    color: "#8a50c0"
  },

  // ── PRODUCTO 19: Shark Full Zip Hoodie - Pink Camo v2 ────────────────────
  {
    id: "bape-shark-full-zip-pink-camo-v2",
    nombre: "Shark Full Zip Hoodie - Pink Camo v2",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Rosa alternativo — segunda versión",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/8nMYjGbT/Bape-Full-Zip-Pink-Camo-1.jpg",
    color: "#f0a0c0"
  },

  // ── PRODUCTO 20: Shark Full Zip Hoodie - Dark Purple Camo ────────────────────
  {
    id: "bape-shark-full-zip-dark-purple-camo",
    nombre: "Shark Full Zip Hoodie - Dark Purple Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado violeta oscuro",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/gnk3SSn/Bape-Full-Zip-Dark-Purple-Camo.jpg",
    color: "#4a1a6a"
  },

  // ── PRODUCTO 21: Shark Full Zip Hoodie - Patchwork Camo v2 ────────────────────
  {
    id: "bape-shark-full-zip-patchwork-camo-v2",
    nombre: "Shark Full Zip Hoodie - Patchwork Camo v2",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Patchwork edición alternativa",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/ccTWp54F/Bape-Full-Zip-Patchwork-Camo.jpg",
    color: "#9a8a6a"
  },

  // ── PRODUCTO 22: Shark Full Zip Hoodie - Dark Green Camo ────────────────────
  {
    id: "bape-shark-full-zip-dark-green-camo",
    nombre: "Shark Full Zip Hoodie - Dark Green Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Verde profundo oscuro",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/r20x5DyC/Bape-Full-Zip-Dark-Green-Camo.jpg",
    color: "#1e3a1e"
  },

  // ── PRODUCTO 23: Shark Full Zip Hoodie - Black White Camo v2 ────────────────────
  {
    id: "bape-shark-full-zip-black-white-camo-v2",
    nombre: "Shark Full Zip Hoodie - Black White Camo v2",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Negro y blanco versión alternativa",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/LzDvzsK9/Bape-Full-Zip-Black-White-Camo.jpg",
    color: "#333333"
  },

  // ── PRODUCTO 24: Shark Full Zip Hoodie - Dark Blue Camo ────────────────────
  {
    id: "bape-shark-full-zip-dark-blue-camo",
    nombre: "Shark Full Zip Hoodie - Dark Blue Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Azul marino oscuro",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/0jsP2Xcb/Bape-Full-Zip-Dark-Blue-Camo.jpg",
    color: "#0a1a3a"
  },

  // ── PRODUCTO 25: Shark Full Zip Hoodie - Yellow Camo ────────────────────
  {
    id: "bape-shark-full-zip-yellow-camo",
    nombre: "Shark Full Zip Hoodie - Yellow Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado amarillo vibrante",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/SXFhVpRn/Bape-Full-Zip-Yellow-Camo.jpg",
    color: "#d4c01a"
  },

  // ── PRODUCTO 26: Shark Full Zip Hoodie - Black White Stars ────────────────────
  {
    id: "bape-shark-full-zip-black-white-stars",
    nombre: "Shark Full Zip Hoodie - Black White Stars",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Estampado de estrellas negro y blanco",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/gbWQMwhz/Bape-Full-Zip-Black-White-Stars.jpg",
    color: "#222222"
  },

  // ── PRODUCTO 27: Shark Full Zip Hoodie - Pastel Camo ────────────────────
  {
    id: "bape-shark-full-zip-pastel-camo",
    nombre: "Shark Full Zip Hoodie - Pastel Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camo en tonos pastel suaves",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/SwYPP5G2/Bape-Full-Zip-Pastel-Camo.jpg",
    color: "#d0c0e8"
  },

  // ── PRODUCTO 28: Shark Full Zip Hoodie - Red Camo ────────────────────
  {
    id: "bape-shark-full-zip-red-camo",
    nombre: "Shark Full Zip Hoodie - Red Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado rojo intenso",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/F4Nsx0CX/Bape-Full-Zip-Red-Camo.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 29: Shark Full Zip Hoodie - Classic Olive Camo ────────────────────
  {
    id: "bape-shark-full-zip-classic-olive-camo",
    nombre: "Shark Full Zip Hoodie - Classic Olive Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Oliva clásico — el original",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/zWjypNtS/Bape-Full-Zip-Classic-Olive-Camo.jpg",
    color: "#6a7a3a"
  },

  // ── PRODUCTO 30: Shark Full Zip Hoodie - Pink Light Blue Camo ────────────────────
  {
    id: "bape-shark-full-zip-pink-light-blue-camo",
    nombre: "Shark Full Zip Hoodie - Pink Light Blue Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Rosa y celeste combinados",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/Nns0VRJG/Bape-Full-Zip-Pink-Light-Blue-Camo.jpg",
    color: "#d4a0d0"
  },

  // ── PRODUCTO 31: Shark Full Zip Hoodie - Acqua Blue Camo ────────────────────
  {
    id: "bape-shark-full-zip-acqua-blue-camo",
    nombre: "Shark Full Zip Hoodie - Acqua Blue Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado aqua turquesa",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/JWsYX9f6/Bape-Full-Zip-Acqua-Blue-Camo.jpg",
    color: "#1ac0c0"
  },

  // ── PRODUCTO 32: Shark Full Zip Hoodie - White Camo v2 ────────────────────
  {
    id: "bape-shark-full-zip-white-camo-v2",
    nombre: "Shark Full Zip Hoodie - White Camo v2",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Blanco alternativo segunda versión",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/rRYpqFnm/Bape-Full-Zip-White-Camo-1.jpg",
    color: "#f5f5f0"
  },

  // ── PRODUCTO 33: Shark Full Zip Hoodie - Black Pastel Camo ────────────────────
  {
    id: "bape-shark-full-zip-black-pastel-camo",
    nombre: "Shark Full Zip Hoodie - Black Pastel Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Negro con detalles pastel",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/XqBGrNW/Bape-Full-Zip-Black-Pastel-Camo.jpg",
    color: "#1e1e2e"
  },

  // ── PRODUCTO 34: Shark Full Zip Hoodie - Black Grey White Camo ────────────────────
  {
    id: "bape-shark-full-zip-black-grey-white-camo",
    nombre: "Shark Full Zip Hoodie - Black Grey White Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Triple tono: negro, gris y blanco",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/RGxHcfp8/Bape-Full-Zip-Black-Grey-White-Camo.jpg",
    color: "#555555"
  },

  // ── PRODUCTO 35: Shark Full Zip Hoodie - Black Camo ────────────────────
  {
    id: "bape-shark-full-zip-black-camo",
    nombre: "Shark Full Zip Hoodie - Black Camo",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Camuflado negro total",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/DHY7JWth/Bape-Full-Zip-Black-Camo.jpg",
    color: "#0a0a0a"
  },

  // ── PRODUCTO 36: Shark Full Zip Hoodie - x PSG Blue ────────────────────
  {
    id: "bape-shark-full-zip-x-psg-blue",
    nombre: "Shark Full Zip Hoodie - x PSG Blue",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Collab BAPE x Paris Saint-Germain — edición limitada",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/vvxkcCQD/Bape-x-PSG-Full-Zip.jpg",
    color: "#00408a"
  },

  // ── PRODUCTO 37: Double Hood Full Zip - Purple ────────────────────
  {
    id: "bape-double-full-zip-purple",
    nombre: "Double Hood Full Zip - Purple",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Lila sólido con logo bordado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/7NRLxPJX/Bape-Double-Full-Zip-Purple.jpg",
    color: "#7a3aaa"
  },

  // ── PRODUCTO 38: Double Hood Full Zip - Blue Camo Double ────────────────────
  {
    id: "bape-double-full-zip-blue-camo-double",
    nombre: "Double Hood Full Zip - Blue Camo Double",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Camo azul en corte doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/9HW7WSHZ/Bape-Full-Zip-Blue-Camo-Double.jpg",
    color: "#2a5a9a"
  },

  // ── PRODUCTO 39: Double Hood Full Zip - Pink Light Blue Camo ────────────────────
  {
    id: "bape-double-full-zip-pink-light-blue-camo",
    nombre: "Double Hood Full Zip - Pink Light Blue Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Rosa y celeste — doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/dszhLmgY/Bape-Double-Full-Zip-Pink-Light-Blue-Camo.jpg",
    color: "#e0a0cc"
  },

  // ── PRODUCTO 40: Double Hood Full Zip - White Camo ────────────────────
  {
    id: "bape-double-full-zip-white-camo",
    nombre: "Double Hood Full Zip - White Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Camo blanco en versión doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/chStVTZs/Bape-Double-Full-Zip-White-Camo.jpg",
    color: "#e8e8e8"
  },

  // ── PRODUCTO 41: Double Hood Full Zip - Purple Camo ────────────────────
  {
    id: "bape-double-full-zip-purple-camo",
    nombre: "Double Hood Full Zip - Purple Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Camuflado violeta — doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/6JGWB4Yy/Bape-Double-Full-Zip-Purple-Camo.jpg",
    color: "#6030a0"
  },

  // ── PRODUCTO 42: Double Hood Full Zip - Black Light Blue Camo ────────────────────
  {
    id: "bape-double-full-zip-black-light-blue-camo",
    nombre: "Double Hood Full Zip - Black Light Blue Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Negro con toques celeste",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/k2yY5ZwN/Bape-Double-Full-Zip-Black-Light-Blue-Camo.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 43: Double Hood Full Zip - White Grey Camo ────────────────────
  {
    id: "bape-double-full-zip-white-grey-camo",
    nombre: "Double Hood Full Zip - White Grey Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Blanco y gris — doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/ymxdr11j/Bape-Double-Full-Zip-White-Grey-Camo.jpg",
    color: "#b8b8b8"
  },

  // ── PRODUCTO 44: Double Hood Full Zip - Dark Blue Camo ────────────────────
  {
    id: "bape-double-full-zip-dark-blue-camo",
    nombre: "Double Hood Full Zip - Dark Blue Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Azul oscuro profundo",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/Tx88W6zC/Bape-Double-Full-Zip-Dark-Blue-Camo.jpg",
    color: "#0a1830"
  },

  // ── PRODUCTO 45: Double Hood Full Zip - White Black Camo ────────────────────
  {
    id: "bape-double-full-zip-white-black-camo",
    nombre: "Double Hood Full Zip - White Black Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Blanco y negro combinados",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/S17GVrf/Bape-Double-Full-Zip-White-Black-Camo.jpg",
    color: "#d0d0d0"
  },

  // ── PRODUCTO 46: Double Hood Full Zip - Red Camo Variant ────────────────────
  {
    id: "bape-double-full-zip-red-camo-variant",
    nombre: "Double Hood Full Zip - Red Camo Variant",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Rojo variante especial double",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/5XDb7dQZ/Bape-Double-Variant-Full-Zip-Red-Camo.jpg",
    color: "#c01a1a"
  },

  // ── PRODUCTO 47: Double Hood Full Zip - Red Camo ────────────────────
  {
    id: "bape-double-full-zip-red-camo",
    nombre: "Double Hood Full Zip - Red Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Rojo camuflado clásico — doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/wr8NyHZw/Bape-Double-Full-Zip-Red-Camo.jpg",
    color: "#8a0a0a"
  },

  // ── PRODUCTO 48: Double Hood Full Zip - Pink Camo ────────────────────
  {
    id: "bape-double-full-zip-pink-camo",
    nombre: "Double Hood Full Zip - Pink Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Rosa camuflado — doble zip",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/sv0BWtPv/Bape-Double-Full-Zip-Pink-Camo.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 49: Double Hood Full Zip - Black Pink Camo ────────────────────
  {
    id: "bape-double-full-zip-black-pink-camo",
    nombre: "Double Hood Full Zip - Black Pink Camo",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Negro con detalles rosa",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/YFChs3m9/Bape-Double-Full-Zip-Black-Pink-Camo.jpg",
    color: "#2a0a1a"
  },

  // ── PRODUCTO 50: Double Hood Full Zip - White Grey Camo v2 ────────────────────
  {
    id: "bape-double-full-zip-white-grey-camo-v2",
    nombre: "Double Hood Full Zip - White Grey Camo v2",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Blanco y gris segunda versión",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/zWJwP3wd/Bape-Double-Full-Zip-White-Grey-Camo-1.jpg",
    color: "#c0c0c0"
  },

  // ── PRODUCTO 51: x MM6 Skull Zip Up Hoodie - Grey ────────────────────
  {
    id: "supreme-mm6-skull-zip-grey",
    nombre: "x MM6 Skull Zip Up Hoodie - Grey",
    marca: "Supreme",
    precio: 99999,
    descripcion: "Gris con calaveras bordadas en capucha",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/939wggVf/9e2b03b9.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 52: x MM6 Skull Zip Up Hoodie - Black ────────────────────
  {
    id: "supreme-mm6-skull-zip-black",
    nombre: "x MM6 Skull Zip Up Hoodie - Black",
    marca: "Supreme",
    precio: 99999,
    descripcion: "Negro con calaveras bordadas en capucha",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/RpTk12v2/cf24dd23.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 53: x MM6 Skull Zip Up Hoodie - Green ────────────────────
  {
    id: "supreme-mm6-skull-zip-green",
    nombre: "x MM6 Skull Zip Up Hoodie - Green",
    marca: "Supreme",
    precio: 99999,
    descripcion: "Verde con calaveras bordadas en capucha",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/9m3j0cg7/d8b8830d.jpg",
    color: "#2a5a2a"
  },

  // ── PRODUCTO 54: Leather Belt - Black Cross Silver ────────────────────
  {
    id: "chrome-hearts-belt-black-cross-silver",
    nombre: "Leather Belt - Black Cross Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla plateada con cruz",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/0jTs2rW0/57.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 55: Leather Belt - Black Cross Gold ────────────────────
  {
    id: "chrome-hearts-belt-black-cross-gold",
    nombre: "Leather Belt - Black Cross Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla dorada con cruz",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/214BZRJQ/08.jpg",
    color: "#1a1a08"
  },

  // ── PRODUCTO 56: Leather Belt - Brown Cross Silver ────────────────────
  {
    id: "chrome-hearts-belt-brown-cross-silver",
    nombre: "Leather Belt - Brown Cross Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, hebilla plateada con cruz",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/Fq7xW29N/05.jpg",
    color: "#5a3010"
  },

  // ── PRODUCTO 57: Leather Belt - Black Multi Cross ────────────────────
  {
    id: "chrome-hearts-belt-black-multi-cross",
    nombre: "Leather Belt - Black Multi Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, cruces multicolor",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/RTC7wxGG/02.jpg",
    color: "#0a0a0a"
  },

  // ── PRODUCTO 58: Leather Belt - Black Red Cross ────────────────────
  {
    id: "chrome-hearts-belt-black-red-cross",
    nombre: "Leather Belt - Black Red Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, cruces rojas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/ZRLW1NR4/03.jpg",
    color: "#1a0000"
  },

  // ── PRODUCTO 59: Leather Belt - Black Blue Cross ────────────────────
  {
    id: "chrome-hearts-belt-black-blue-cross",
    nombre: "Leather Belt - Black Blue Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, cruces azules",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/j92875Rf/10.jpg",
    color: "#00001a"
  },

  // ── PRODUCTO 60: Leather Belt - Black Green Cross ────────────────────
  {
    id: "chrome-hearts-belt-black-green-cross",
    nombre: "Leather Belt - Black Green Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, cruces verdes",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/LDRyTygj/01.jpg",
    color: "#001a00"
  },

  // ── PRODUCTO 61: Leather Belt - Black Pink Cross ────────────────────
  {
    id: "chrome-hearts-belt-black-pink-cross",
    nombre: "Leather Belt - Black Pink Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, cruces rosas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/3y2nmy1Q/06.jpg",
    color: "#1a0010"
  },

  // ── PRODUCTO 62: Leather Belt - Black Yellow Cross ────────────────────
  {
    id: "chrome-hearts-belt-black-yellow-cross",
    nombre: "Leather Belt - Black Yellow Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, cruces amarillas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/3ysNfL5H/07.jpg",
    color: "#1a1500"
  },

  // ── PRODUCTO 63: Leather Belt - White Cross Silver ────────────────────
  {
    id: "chrome-hearts-belt-white-cross-silver",
    nombre: "Leather Belt - White Cross Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, hebilla plateada con cruz",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/XkC70X7h/11.jpg",
    color: "#e0e0e0"
  },

  // ── PRODUCTO 64: Leather Belt - White Cross Gold ────────────────────
  {
    id: "chrome-hearts-belt-white-cross-gold",
    nombre: "Leather Belt - White Cross Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, hebilla dorada con cruz",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/d4W7mBrB/12.jpg",
    color: "#e8e0c8"
  },

  // ── PRODUCTO 65: Leather Belt - White Red Cross ────────────────────
  {
    id: "chrome-hearts-belt-white-red-cross",
    nombre: "Leather Belt - White Red Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, cruces rojas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/ymvChXGY/16.jpg",
    color: "#e8d0d0"
  },

  // ── PRODUCTO 66: Leather Belt - White Blue Cross ────────────────────
  {
    id: "chrome-hearts-belt-white-blue-cross",
    nombre: "Leather Belt - White Blue Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, cruces azules",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/39nJ3YRh/14.jpg",
    color: "#d0d8e8"
  },

  // ── PRODUCTO 67: Leather Belt - White Green Cross ────────────────────
  {
    id: "chrome-hearts-belt-white-green-cross",
    nombre: "Leather Belt - White Green Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, cruces verdes",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/HfQh82d6/13.jpg",
    color: "#d0e8d0"
  },

  // ── PRODUCTO 68: Leather Belt - White Pink Cross ────────────────────
  {
    id: "chrome-hearts-belt-white-pink-cross",
    nombre: "Leather Belt - White Pink Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, cruces rosas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/KYtpyMG/15.jpg",
    color: "#e8d0e0"
  },

  // ── PRODUCTO 69: Leather Belt - White Purple Cross ────────────────────
  {
    id: "chrome-hearts-belt-white-purple-cross",
    nombre: "Leather Belt - White Purple Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, cruces violeta",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/RT14mK6g/17.jpg",
    color: "#ddd0e8"
  },

  // ── PRODUCTO 70: Leather Belt - White Multi Cross ────────────────────
  {
    id: "chrome-hearts-belt-white-multi-cross",
    nombre: "Leather Belt - White Multi Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, cruces multicolor",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/xShSChD7/19.jpg",
    color: "#e8e8e8"
  },

  // ── PRODUCTO 71: Leather Belt - Brown Multi Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-multi-cross",
    nombre: "Leather Belt - Brown Multi Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces multicolor",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/k6rW6WVD/18.jpg",
    color: "#6a3a18"
  },

  // ── PRODUCTO 72: Leather Belt - Brown Red Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-red-cross",
    nombre: "Leather Belt - Brown Red Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces rojas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/XfC9vRZ1/21.jpg",
    color: "#5a2010"
  },

  // ── PRODUCTO 73: Leather Belt - Brown Blue Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-blue-cross",
    nombre: "Leather Belt - Brown Blue Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces azules",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/5hb1sLzV/23.jpg",
    color: "#3a3a5a"
  },

  // ── PRODUCTO 74: Leather Belt - Brown Green Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-green-cross",
    nombre: "Leather Belt - Brown Green Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces verdes",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/qMwNGpQk/22.jpg",
    color: "#3a5a30"
  },

  // ── PRODUCTO 75: Leather Belt - Brown Pink Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-pink-cross",
    nombre: "Leather Belt - Brown Pink Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces rosas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/fJkzRbn/20.jpg",
    color: "#5a3040"
  },

  // ── PRODUCTO 76: Leather Belt - Brown Purple Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-purple-cross",
    nombre: "Leather Belt - Brown Purple Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces violeta",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/sp0vgfkc/26.jpg",
    color: "#3a2850"
  },

  // ── PRODUCTO 77: Leather Belt - Brown Yellow Cross ────────────────────
  {
    id: "chrome-hearts-belt-brown-yellow-cross",
    nombre: "Leather Belt - Brown Yellow Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cruces amarillas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/V0d6V93K/28.jpg",
    color: "#5a4a10"
  },

  // ── PRODUCTO 78: Leather Belt - Tan Cross Silver ────────────────────
  {
    id: "chrome-hearts-belt-tan-cross-silver",
    nombre: "Leather Belt - Tan Cross Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, hebilla plateada con cruz",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/Z1v35pfZ/27.jpg",
    color: "#c8a878"
  },

  // ── PRODUCTO 79: Leather Belt - Tan Multi Cross ────────────────────
  {
    id: "chrome-hearts-belt-tan-multi-cross",
    nombre: "Leather Belt - Tan Multi Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, cruces multicolor",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/cccPNMxg/30.jpg",
    color: "#c0a060"
  },

  // ── PRODUCTO 80: Leather Belt - Tan Red Cross ────────────────────
  {
    id: "chrome-hearts-belt-tan-red-cross",
    nombre: "Leather Belt - Tan Red Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, cruces rojas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/NqGWQDd/25.jpg",
    color: "#c89878"
  },

  // ── PRODUCTO 81: Leather Belt - Tan Blue Cross ────────────────────
  {
    id: "chrome-hearts-belt-tan-blue-cross",
    nombre: "Leather Belt - Tan Blue Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, cruces azules",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/fYnCMJRS/29.jpg",
    color: "#a8b8c8"
  },

  // ── PRODUCTO 82: Leather Belt - Tan Green Cross ────────────────────
  {
    id: "chrome-hearts-belt-tan-green-cross",
    nombre: "Leather Belt - Tan Green Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, cruces verdes",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/Y4gXKhsP/31.jpg",
    color: "#a8c0a0"
  },

  // ── PRODUCTO 83: Leather Belt - Tan Pink Cross ────────────────────
  {
    id: "chrome-hearts-belt-tan-pink-cross",
    nombre: "Leather Belt - Tan Pink Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, cruces rosas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/r8LVG4f/32.jpg",
    color: "#c8a8b8"
  },

  // ── PRODUCTO 84: Leather Belt - Tan Purple Cross ────────────────────
  {
    id: "chrome-hearts-belt-tan-purple-cross",
    nombre: "Leather Belt - Tan Purple Cross",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero canela, cruces violeta",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/YTyDtBJ3/33.jpg",
    color: "#b0a0c0"
  },

  // ── PRODUCTO 85: Leather Belt - Black Silver Chain ────────────────────
  {
    id: "chrome-hearts-belt-black-silver-chain",
    nombre: "Leather Belt - Black Silver Chain",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla con cadena plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/XZJcCmLj/37.jpg",
    color: "#222222"
  },

  // ── PRODUCTO 86: Leather Belt - Black Gold Chain ────────────────────
  {
    id: "chrome-hearts-belt-black-gold-chain",
    nombre: "Leather Belt - Black Gold Chain",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla con cadena dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/FbHVVWVB/38.jpg",
    color: "#181508"
  },

  // ── PRODUCTO 87: Leather Belt - Brown Silver Chain ────────────────────
  {
    id: "chrome-hearts-belt-brown-silver-chain",
    nombre: "Leather Belt - Brown Silver Chain",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cadena plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/QFKbFm62/39.jpg",
    color: "#4a2a10"
  },

  // ── PRODUCTO 88: Leather Belt - Brown Gold Chain ────────────────────
  {
    id: "chrome-hearts-belt-brown-gold-chain",
    nombre: "Leather Belt - Brown Gold Chain",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, cadena dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/9mMsFrRN/35.jpg",
    color: "#4a3010"
  },

  // ── PRODUCTO 89: Leather Belt - Black Floral Silver ────────────────────
  {
    id: "chrome-hearts-belt-black-floral-silver",
    nombre: "Leather Belt - Black Floral Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, grabado floral plateado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/wrcY1Ryj/40.jpg",
    color: "#0d0d0d"
  },

  // ── PRODUCTO 90: Leather Belt - Brown Floral Silver ────────────────────
  {
    id: "chrome-hearts-belt-brown-floral-silver",
    nombre: "Leather Belt - Brown Floral Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, grabado floral plateado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/Ym0h6Vz/36.jpg",
    color: "#5a3520"
  },

  // ── PRODUCTO 91: Leather Belt - Black Star Silver ────────────────────
  {
    id: "chrome-hearts-belt-black-star-silver",
    nombre: "Leather Belt - Black Star Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla estrella plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/Kc6RM09m/42.jpg",
    color: "#141414"
  },

  // ── PRODUCTO 92: Leather Belt - Black Star Gold ────────────────────
  {
    id: "chrome-hearts-belt-black-star-gold",
    nombre: "Leather Belt - Black Star Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla estrella dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/qT7wvWr/44.jpg",
    color: "#141410"
  },

  // ── PRODUCTO 93: Leather Belt - Black Dagger Silver ────────────────────
  {
    id: "chrome-hearts-belt-black-dagger-silver",
    nombre: "Leather Belt - Black Dagger Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla daga plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/ZQzJQmk/43.jpg",
    color: "#181818"
  },

  // ── PRODUCTO 94: Leather Belt - Black Dagger Gold ────────────────────
  {
    id: "chrome-hearts-belt-black-dagger-gold",
    nombre: "Leather Belt - Black Dagger Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla daga dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/hJxzJ1Kj/41.jpg",
    color: "#181810"
  },

  // ── PRODUCTO 95: Leather Belt - White Star Silver ────────────────────
  {
    id: "chrome-hearts-belt-white-star-silver",
    nombre: "Leather Belt - White Star Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, hebilla estrella plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/YTBYSDvK/45.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 96: Leather Belt - White Dagger Silver ────────────────────
  {
    id: "chrome-hearts-belt-white-dagger-silver",
    nombre: "Leather Belt - White Dagger Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero blanco, hebilla daga plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/F4hWXQVy/46.jpg",
    color: "#eeeeee"
  },

  // ── PRODUCTO 97: Leather Belt - Black Skull Silver ────────────────────
  {
    id: "chrome-hearts-belt-black-skull-silver",
    nombre: "Leather Belt - Black Skull Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla calavera plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/R4Pzjtfk/49.jpg",
    color: "#0a0a0a"
  },

  // ── PRODUCTO 98: Leather Belt - Black Skull Gold ────────────────────
  {
    id: "chrome-hearts-belt-black-skull-gold",
    nombre: "Leather Belt - Black Skull Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, hebilla calavera dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/chmdFZjt/47.jpg",
    color: "#0a0a08"
  },

  // ── PRODUCTO 99: Leather Belt - Brown Skull Silver ────────────────────
  {
    id: "chrome-hearts-belt-brown-skull-silver",
    nombre: "Leather Belt - Brown Skull Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, hebilla calavera plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/hxMZ15y0/50.jpg",
    color: "#503018"
  },

  // ── PRODUCTO 100: Leather Belt - Brown Skull Gold ────────────────────
  {
    id: "chrome-hearts-belt-brown-skull-gold",
    nombre: "Leather Belt - Brown Skull Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, hebilla calavera dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/MDJ8yrbT/48.jpg",
    color: "#503010"
  },

  // ── PRODUCTO 101: Leather Belt - Black Double Cross Silver ────────────────────
  {
    id: "chrome-hearts-belt-black-double-cross-silver",
    nombre: "Leather Belt - Black Double Cross Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, doble cruz plateada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/XksrCN62/53.jpg",
    color: "#0f0f0f"
  },

  // ── PRODUCTO 102: Leather Belt - Black Double Cross Gold ────────────────────
  {
    id: "chrome-hearts-belt-black-double-cross-gold",
    nombre: "Leather Belt - Black Double Cross Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, doble cruz dorada",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/HfS42tXN/56.jpg",
    color: "#0f0f08"
  },

  // ── PRODUCTO 103: Leather Belt - Black CH Logo Gold ────────────────────
  {
    id: "chrome-hearts-belt-black-ch-logo-gold",
    nombre: "Leather Belt - Black CH Logo Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero negro, logo CH grande dorado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/933QkfRL/51.jpg",
    color: "#131310"
  },

  // ── PRODUCTO 104: Leather Belt - Brown CH Logo Silver ────────────────────
  {
    id: "chrome-hearts-belt-brown-ch-logo-silver",
    nombre: "Leather Belt - Brown CH Logo Silver",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, logo CH plateado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/DP0JPCts/54.jpg",
    color: "#5a3520"
  },

  // ── PRODUCTO 105: Leather Belt - Brown CH Logo Gold ────────────────────
  {
    id: "chrome-hearts-belt-brown-ch-logo-gold",
    nombre: "Leather Belt - Brown CH Logo Gold",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cuero marrón, logo CH dorado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    imagen: "https://i.ibb.co/dJ2Ddg68/55.jpg",
    color: "#5a3518"
  },

  // ── PRODUCTO 106: Shark Shorts - White ────────────────────
  {
    id: "bape-shark-shorts-white",
    nombre: "Shark Shorts - White",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Blanco con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/23L1zcgq/54-Bape-Shark-Shorts-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 107: Shark Shorts - Blue ────────────────────
  {
    id: "bape-shark-shorts-blue",
    nombre: "Shark Shorts - Blue",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Azul con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/6JHSSj2q/53-Bape-Shark-Shorts-Blue.png",
    color: "#2a5a9a"
  },

  // ── PRODUCTO 108: Shark Shorts - Green ────────────────────
  {
    id: "bape-shark-shorts-green",
    nombre: "Shark Shorts - Green",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Verde con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/b5FqgCg6/52-Bape-Shark-Shorts-Green.png",
    color: "#2a7a3a"
  },

  // ── PRODUCTO 109: Shark Shorts - Pink ────────────────────
  {
    id: "bape-shark-shorts-pink",
    nombre: "Shark Shorts - Pink",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Rosa con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/5xw171q5/51-Bape-Shark-Shorts-Pink.png",
    color: "#e890b8"
  },

  // ── PRODUCTO 110: Shark Shorts - Purple ────────────────────
  {
    id: "bape-shark-shorts-purple",
    nombre: "Shark Shorts - Purple",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Violeta con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/h1cFxckz/55-Bape-Shark-Shorts-Purple.png",
    color: "#7a3aaa"
  },

  // ── PRODUCTO 111: Shark Shorts - Dark Blue ────────────────────
  {
    id: "bape-shark-shorts-dark-blue",
    nombre: "Shark Shorts - Dark Blue",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Azul oscuro con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/zHjhdSLf/56-Bape-Shark-Shorts-Dark-Blue.png",
    color: "#0a1a3a"
  },

  // ── PRODUCTO 112: Shark Shorts - Red ────────────────────
  {
    id: "bape-shark-shorts-red",
    nombre: "Shark Shorts - Red",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Rojo con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/YTF01B9F/57-Bape-Shark-Shorts-Red.png",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 113: Shark Shorts - Camo ────────────────────
  {
    id: "bape-shark-shorts-camo",
    nombre: "Shark Shorts - Camo",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Camuflado clásico BAPE",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/fVLt3D3M/58-Bape-Shark-Shorts-Camo.png",
    color: "#6a7a3a"
  },

  // ── PRODUCTO 114: Shark Shorts - Black ────────────────────
  {
    id: "bape-shark-shorts-black",
    nombre: "Shark Shorts - Black",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Negro con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/hFBnw5q1/59-Bape-Shark-Shorts-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 115: Shark Shorts - Gray ────────────────────
  {
    id: "bape-shark-shorts-gray",
    nombre: "Shark Shorts - Gray",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Gris con logo shark",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/0pMScYMT/60-Bape-Shark-Shorts-Gray.png",
    color: "#888888"
  },

  // ── PRODUCTO 116: Shark Shorts - Double Shark ────────────────────
  {
    id: "bape-shark-shorts-double-shark",
    nombre: "Shark Shorts - Double Shark",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Edición Double Shark — diseño especial",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/wFSPLz25/61-Bape-Double-Shark-Shorts.png",
    color: "#333333"
  },

  // ── PRODUCTO 117: Shark Shorts - Blue Camo ────────────────────
  {
    id: "bape-shark-shorts-blue-camo",
    nombre: "Shark Shorts - Blue Camo",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Camuflado azul clásico BAPE",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/CpWdnwTx/62-Bape-Blue-Camo-Shorts.png",
    color: "#2a4a8a"
  },

  // ── PRODUCTO 118: Shark Shorts - Pink Camo ────────────────────
  {
    id: "bape-shark-shorts-pink-camo",
    nombre: "Shark Shorts - Pink Camo",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Camuflado rosa clásico BAPE",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/rGDKf2ZD/63-Bape-Pink-Camo-Shorts.png",
    color: "#e8a0c0"
  },

  // ── PRODUCTO 119: x Miami Shorts - White ────────────────────
  {
    id: "bape-x-miami-shorts-white",
    nombre: "x Miami Shorts - White",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Blanco edición Miami",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/rfb1T9gk/65-Bape-x-Miami-Shorts-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 120: x Miami Shorts - Pink ────────────────────
  {
    id: "bape-x-miami-shorts-pink",
    nombre: "x Miami Shorts - Pink",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Rosa edición Miami",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/Fb2xBrVJ/64-Bape-x-Miami-Shorts-Pink.png",
    color: "#e890b8"
  },

  // ── PRODUCTO 121: x Miami Shorts - Black ────────────────────
  {
    id: "bape-x-miami-shorts-black",
    nombre: "x Miami Shorts - Black",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Negro edición Miami",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/Tf42dg9/66-Bape-x-Miami-Shorts-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 122: x Eric Emanuel Shorts - White ────────────────────
  {
    id: "bape-x-eric-emanuel-shorts-white",
    nombre: "x Eric Emanuel Shorts - White",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Blanco — Basket edition",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/4n2DYwT9/67-Bape-x-Eric-Emanuel-Basket-Shorts-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 123: x Eric Emanuel Shorts - Purple ────────────────────
  {
    id: "bape-x-eric-emanuel-shorts-purple",
    nombre: "x Eric Emanuel Shorts - Purple",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Violeta edición collab",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/xS2Pvt8X/68-Bape-x-Eric-Emanuel-Purple.png",
    color: "#7a3aaa"
  },

  // ── PRODUCTO 124: x Eric Emanuel Shorts - Red ────────────────────
  {
    id: "bape-x-eric-emanuel-shorts-red",
    nombre: "x Eric Emanuel Shorts - Red",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Rojo edición collab",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/tRVcHpk/69-Bape-x-Eric-Emanuel-Shorts-Red.png",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 125: x Eric Emanuel Shorts - Black Brown Stars ────────────────────
  {
    id: "bape-x-eric-emanuel-shorts-black-brown-stars",
    nombre: "x Eric Emanuel Shorts - Black Brown Stars",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Negro y marrón con estrellas",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/bgdFWXzc/70-Bape-x-Eric-Emanuel-Black-Brown-Stars.png",
    color: "#2a1a0a"
  },

  // ── PRODUCTO 126: x Eric Emanuel Shorts - Brown ────────────────────
  {
    id: "bape-x-eric-emanuel-shorts-brown",
    nombre: "x Eric Emanuel Shorts - Brown",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Marrón edición collab",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/bMb2fyzb/71-Bape-x-Eric-Emanuel-Shorts-Brown.png",
    color: "#6a3a1a"
  },

  // ── PRODUCTO 127: Zip Up Jacket - Triple Cross Patch ────────────────────
  {
    id: "chrome-hearts-zip-up-triple-cross-patch",
    nombre: "Zip Up Jacket - Triple Cross Patch",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Parches triple cruz en frente y espalda",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/BVYv4cGC/Chrome-Hearts-Triple-Cross-Patch-Zip-Up.png",
    color: "#111111"
  },

  // ── PRODUCTO 128: Zip Up Jacket - Quilted Nylon Cross Patch ────────────────────
  {
    id: "chrome-hearts-zip-up-quilted-nylon-cross-patch",
    nombre: "Zip Up Jacket - Quilted Nylon Cross Patch",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Nylon acolchado con parche de cruz CH",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/V533c5G/Chrome-Hearts-Quilted-Nylon-Cross-Patch-Jacket.png",
    color: "#1a1a2a"
  },

  // ── PRODUCTO 129: Denim Jeans - Modelo 1 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-1",
    nombre: "Denim Jeans - Modelo 1",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/8Z4z2gS/650f4a9a-aaba-49ee-a3c8-5139379cb400.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 130: Denim Jeans - Modelo 2 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-2",
    nombre: "Denim Jeans - Modelo 2",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/3yCz0Qsf/3b77d4f0-bd33-4ecc-93d6-9110d8639d4a.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 131: Denim Jeans - Modelo 3 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-3",
    nombre: "Denim Jeans - Modelo 3",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/gbWC6D6t/3186eeca-2939-47be-8353-0d82f6f45f2b.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 132: Denim Jeans - Modelo 4 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-4",
    nombre: "Denim Jeans - Modelo 4",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/JV6t8cK/f0f2a84e-9db9-4e82-945e-51657d0ef940.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 133: Denim Jeans - Modelo 5 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-5",
    nombre: "Denim Jeans - Modelo 5",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/Hf4CS0Gx/4e23c7c7-35e9-430c-ac3a-59ebc5089997.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 134: Denim Jeans - Modelo 6 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-6",
    nombre: "Denim Jeans - Modelo 6",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/B2gDCxLj/c6d69887-5228-4e60-878a-5a3472957794.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 135: Denim Jeans - Modelo 7 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-7",
    nombre: "Denim Jeans - Modelo 7",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/FbkPSXbV/93e15e17-5001-4aa4-a470-ed6a2d5b0575.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 136: Denim Jeans - Modelo 8 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-8",
    nombre: "Denim Jeans - Modelo 8",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/DDmcc6cB/811173a2-199f-451b-b718-4bb88b738a9b.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 137: Denim Jeans - Modelo 9 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-9",
    nombre: "Denim Jeans - Modelo 9",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/Q39pTtxZ/ee0e26fb-e3b8-4846-b292-f547fff32bde.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 138: Denim Jeans - Modelo 10 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-10",
    nombre: "Denim Jeans - Modelo 10",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/B51BFPsX/a54aa605-2fcf-4f0e-9983-06d204e4530f.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 139: Denim Jeans - Modelo 11 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-11",
    nombre: "Denim Jeans - Modelo 11",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/Z6dFM4MD/039c8abd-2d0a-48de-8d3c-74ff636a1eb9.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 140: Denim Jeans - Modelo 12 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-12",
    nombre: "Denim Jeans - Modelo 12",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/Tx2zkPXD/17cc1fba-ffb2-49c0-b4cf-d0fa20f6c620.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 141: Denim Jeans - Modelo 13 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-13",
    nombre: "Denim Jeans - Modelo 13",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/G4sjJLBP/bcde5fbb-4c6b-43c9-8328-aa6ff8b6585e.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 142: Denim Jeans - Modelo 14 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-14",
    nombre: "Denim Jeans - Modelo 14",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/rRSyvWWb/74c92faf-db7a-4668-8ce1-eaf575485771.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 143: Denim Jeans - Modelo 15 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-15",
    nombre: "Denim Jeans - Modelo 15",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/YFF45p22/95a94aa9-3640-49b7-b4fa-9fe72a5715de.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 144: Denim Jeans - Modelo 16 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-16",
    nombre: "Denim Jeans - Modelo 16",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/m5VsXrk6/4e120eea-3aba-48f0-b027-bce124dcffd4.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 145: Denim Jeans - Modelo 17 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-17",
    nombre: "Denim Jeans - Modelo 17",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/HDN4N2fT/2307147b-1540-4d47-a972-9d36e32f2895.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 146: Denim Jeans - Modelo 18 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-18",
    nombre: "Denim Jeans - Modelo 18",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/Xfq7FC8X/91842e38-d962-41c8-be7e-37382197dfd4.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 147: Denim Jeans - Modelo 19 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-19",
    nombre: "Denim Jeans - Modelo 19",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/S4TjqwMy/51dcd30c-2501-4dab-ace0-f3252dfa2598.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 148: Denim Jeans - Modelo 20 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-20",
    nombre: "Denim Jeans - Modelo 20",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/p6nkbmX7/03b942df-7640-43ba-aced-e8296f73da6f.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 149: Denim Jeans - Modelo 21 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-21",
    nombre: "Denim Jeans - Modelo 21",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/cc2Vm5hF/120012c1-8f03-4e27-8e13-5adc55741185.jpg",
    color: "#1a2a4a"
  },

  // ── PRODUCTO 150: Denim Jeans - Modelo 22 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-22",
    nombre: "Denim Jeans - Modelo 22",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/V0S9qyTs/d13f122f-27da-42f6-8d05-779aa9b50adb.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 151: Denim Jeans - Modelo 23 ────────────────────
  {
    id: "chrome-hearts-jeans-modelo-23",
    nombre: "Denim Jeans - Modelo 23",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Denim Chrome Hearts",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28","29","30","31","32","33","34","35","36"],
    imagen: "https://i.ibb.co/W46gGbgY/2a6204e0-91ac-45fa-b81e-15474d674511.jpg",
    color: "#2a3a5a"
  },

  // ── PRODUCTO 152: Denim Shorts - Blue ────────────────────
  {
    id: "valley-dreams-denim-shorts-blue",
    nombre: "Denim Shorts - Blue",
    marca: "Valley Dreams",
    precio: 79999,
    descripcion: "Denim azul clásico",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/Z67V27kD/VD-Valley-Denim-Shorts-Blue.jpg",
    color: "#2a4a7a"
  },

  // ── PRODUCTO 153: Denim Shorts - Grey ────────────────────
  {
    id: "valley-dreams-denim-shorts-grey",
    nombre: "Denim Shorts - Grey",
    marca: "Valley Dreams",
    precio: 79999,
    descripcion: "Denim gris lavado",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/KcG8xLCf/VD-Valley-Denim-Shorts-Grey.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 154: Denim Shorts - White ────────────────────
  {
    id: "valley-dreams-denim-shorts-white",
    nombre: "Denim Shorts - White",
    marca: "Valley Dreams",
    precio: 79999,
    descripcion: "Denim blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/pvmj3FGy/VD-Valley-Denim-Shorts-White.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 155: Denim Shorts - Brown ────────────────────
  {
    id: "valley-dreams-denim-shorts-brown",
    nombre: "Denim Shorts - Brown",
    marca: "Valley Dreams",
    precio: 79999,
    descripcion: "Denim marrón Dreams edition",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/8g3ySnd7/VD-Valley-Dreams-Denim-Shorts-Brown.jpg",
    color: "#5a3a1a"
  },

  // ── PRODUCTO 156: Denim Shorts - Black ────────────────────
  {
    id: "valley-dreams-denim-shorts-black",
    nombre: "Denim Shorts - Black",
    marca: "Valley Dreams",
    precio: 79999,
    descripcion: "Denim negro Dreams edition",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/vv1xLYGk/VD-Valley-Dreams-Denim-Shorts-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 157: Graphic T-Shirt - 199 X Graphic White ────────────────────
  {
    id: "valley-dreams-tshirt-199-x-graphic-white",
    nombre: "Graphic T-Shirt - 199 X Graphic White",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Gráfica 199 X sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/6RYpKvMs/VD-Other-Valley-Dreams-199-X-Graphic-T-Shirt-White.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 158: Graphic T-Shirt - Dream Printed Black ────────────────────
  {
    id: "valley-dreams-tshirt-dream-printed-black",
    nombre: "Graphic T-Shirt - Dream Printed Black",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Dream print sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/wFMpJf1Z/VD-Valley-Dream-Printed-T-Shirt-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 159: Graphic T-Shirt - Property of Targer Red ────────────────────
  {
    id: "valley-dreams-tshirt-property-of-targer-red",
    nombre: "Graphic T-Shirt - Property of Targer Red",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Property of Targer print sobre rojo",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/VYb37b9D/VD-Valley-T-Shirt-Property-of-Targer-Print-Red.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 160: Graphic T-Shirt - Ghost Print Black ────────────────────
  {
    id: "valley-dreams-tshirt-ghost-print-black",
    nombre: "Graphic T-Shirt - Ghost Print Black",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Ghost graphic sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/R4dH1FfW/VD-Valley-Ghost-Print-T-Shirt-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 161: Graphic T-Shirt - Jesus Graphic Washed Grey ────────────────────
  {
    id: "valley-dreams-tshirt-jesus-graphic-washed-grey",
    nombre: "Graphic T-Shirt - Jesus Graphic Washed Grey",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Jesus graphic sobre gris lavado",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/5pw5g8k/VD-Jesus-Graphic-T-Shirt-Washed-Grey.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 162: Graphic T-Shirt - Street Fighter Guile Black ────────────────────
  {
    id: "valley-dreams-tshirt-street-fighter-guile-black",
    nombre: "Graphic T-Shirt - Street Fighter Guile Black",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Street Fighter — Guile graphic sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/v4DBsjgM/VD-Street-Dreams-Street-Fighter-T-Shirt-Guile-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 163: Graphic T-Shirt - Michael Jackson Black ────────────────────
  {
    id: "valley-dreams-tshirt-michael-jackson-black",
    nombre: "Graphic T-Shirt - Michael Jackson Black",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "King of Pop — MJ graphic sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/TMkZBsVH/VD-Michael-Jackson-T-Shirt-King-of-Pop-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 164: Graphic T-Shirt - Selena Light Blue ────────────────────
  {
    id: "valley-dreams-tshirt-selena-light-blue",
    nombre: "Graphic T-Shirt - Selena Light Blue",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Selena graphic sobre celeste",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/kVGsg2x9/VD-Selena-T-Shirt-Graphic-Light-Blue.jpg",
    color: "#80b8e0"
  },

  // ── PRODUCTO 165: Graphic T-Shirt - Rock Graphic Light Blue ────────────────────
  {
    id: "valley-dreams-tshirt-rock-graphic-light-blue",
    nombre: "Graphic T-Shirt - Rock Graphic Light Blue",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Rock graphic sobre celeste",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/nqpFhNZs/VD-T-Shirt-Rock-Graphic-Light-Blue.jpg",
    color: "#80b8e0"
  },

  // ── PRODUCTO 166: Graphic T-Shirt - A Better Tomorrow Blue ────────────────────
  {
    id: "valley-dreams-tshirt-a-better-tomorrow-blue",
    nombre: "Graphic T-Shirt - A Better Tomorrow Blue",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Chow Yun-fat graphic sobre azul",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/fz2vTRx2/VD-A-Better-Tomorrow-T-Shirt-Chow-Yun-fat-Graphic-Blue.jpg",
    color: "#1a3a6a"
  },

  // ── PRODUCTO 167: Graphic T-Shirt - All Dogs Go To Heaven White ────────────────────
  {
    id: "valley-dreams-tshirt-all-dogs-go-to-heaven-white",
    nombre: "Graphic T-Shirt - All Dogs Go To Heaven White",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "All Dogs Go To Heaven sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/SwKJDXSZ/VD-All-Dogs-Go-To-Heaven-T-Shirt-White.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 168: Graphic T-Shirt - Vale Forever White ────────────────────
  {
    id: "valley-dreams-tshirt-vale-forever-white",
    nombre: "Graphic T-Shirt - Vale Forever White",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Vale Forever Destroyer King sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/SbJMhCC/VD-Vale-Forever-Valley-Dreams-Destroyer-King-T-Shirt-White.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 169: Graphic Hoodie - High Street Black Blue ────────────────────
  {
    id: "valley-dreams-hoodie-high-street-black-blue",
    nombre: "Graphic Hoodie - High Street Black Blue",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "High Street Hooded Jacket negro y azul",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/hRF4N2Cb/VD-Original-Valley-High-Street-Hooded-Jacket-Graphic-Print-Black-Blue.jpg",
    color: "#0a1a3a"
  },

  // ── PRODUCTO 170: Graphic Hoodie - Return of Vale Black ────────────────────
  {
    id: "valley-dreams-hoodie-return-of-vale-black",
    nombre: "Graphic Hoodie - Return of Vale Black",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Return of Vale hoodie negro",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/20hLktKJ/VD-Return-of-Vale-Sweater-Hooded-Printed-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 171: Graphic Hoodie - Original Valley Black Grey ────────────────────
  {
    id: "valley-dreams-hoodie-original-valley-black-grey",
    nombre: "Graphic Hoodie - Original Valley Black Grey",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Original Valley sweater negro y gris",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/KxhcCRVY/VD-Original-Valley-Sweater-Printed-Graphic-Hooded-Black-Grey.jpg",
    color: "#333333"
  },

  // ── PRODUCTO 172: Graphic Hoodie - Eagle Jacket White Red ────────────────────
  {
    id: "valley-dreams-hoodie-eagle-jacket-white-red",
    nombre: "Graphic Hoodie - Eagle Jacket White Red",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Hooded jacket eagle print blanco y rojo",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/vxNdL7vp/VD-Valley-Hooded-Jacket-Eagle-Graphic-Print-White-Red.jpg",
    color: "#e0e0e0"
  },

  // ── PRODUCTO 173: Zip Sweater - Spider Graphic Black ────────────────────
  {
    id: "valley-dreams-zip-sweater-spider-graphic-black",
    nombre: "Zip Sweater - Spider Graphic Black",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Spider graphic sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/PGwdbbtP/VD-Other-Original-Valley-Zip-Sweater-Spider-Graphic-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 174: Zip Sweater - Eagle Print Pink ────────────────────
  {
    id: "valley-dreams-zip-sweater-eagle-print-pink",
    nombre: "Zip Sweater - Eagle Print Pink",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Eagle print sobre rosa",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/dJKMfTQ6/VD-Original-Valley-Dreams-Zip-Sweater-Eagle-Print-Pink.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 175: Sweatpants - Loose Graphic White ────────────────────
  {
    id: "valley-dreams-sweatpants-loose-graphic-white",
    nombre: "Sweatpants - Loose Graphic White",
    marca: "Valley Dreams",
    precio: 49999,
    descripcion: "Estampado gráfico suelto sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/yB4Y4QWm/VD-Valley-Sweatpants-Loose-Graphic-Print-White.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 176: Sweatpants - Vale Dreams Pink ────────────────────
  {
    id: "valley-dreams-sweatpants-vale-dreams-pink",
    nombre: "Sweatpants - Vale Dreams Pink",
    marca: "Valley Dreams",
    precio: 49999,
    descripcion: "Vale Dreams print sobre rosa",
    disponible: true,
    etiqueta: "New",
    talles: ["S","M","L","XL","XXL"],
    imagen: "https://i.ibb.co/ymgNnss8/VD-Valley-Sweatpants-Vale-Dreams-Printed-Pink.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 177: T-Shirts - Green Camo Black ────────────────────
  {
    id: "bape-tshirts-green-camo-black",
    nombre: "T-Shirts - Green Camo Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Green Camo sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/Kc6mCSL0/95-A-Bathing-Ape-Green-Camo-Black.png",
    color: "#2a4a2a"
  },

  // ── PRODUCTO 178: T-Shirts - Green Camo White ────────────────────
  {
    id: "bape-tshirts-green-camo-white",
    nombre: "T-Shirts - Green Camo White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Green Camo sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/PvszW0JV/94-A-Bathing-Ape-Green-Camo-White.png",
    color: "#e8f0e8"
  },

  // ── PRODUCTO 179: T-Shirts - Purple Camo Black ────────────────────
  {
    id: "bape-tshirts-purple-camo-black",
    nombre: "T-Shirts - Purple Camo Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Purple Camo sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/ZpMDBMsb/93-A-Bathing-Ape-T-Shirt-Purple-Camo-Black.png",
    color: "#4a2a5a"
  },

  // ── PRODUCTO 180: T-Shirts - Purple Camo White ────────────────────
  {
    id: "bape-tshirts-purple-camo-white",
    nombre: "T-Shirts - Purple Camo White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Purple Camo sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/cmjnJvF/92-A-Bathing-Ape-T-Shirt-Purple-Camo-White.png",
    color: "#e8e0f0"
  },

  // ── PRODUCTO 181: T-Shirts - x Chrome Hearts Black ────────────────────
  {
    id: "bape-tshirts-x-chrome-hearts-black",
    nombre: "T-Shirts - x Chrome Hearts Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Chrome Hearts sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/2xF1GYN/91-Bape-X-Chrome-Hearts-T-Shirt-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 182: T-Shirts - x Chrome Hearts White ────────────────────
  {
    id: "bape-tshirts-x-chrome-hearts-white",
    nombre: "T-Shirts - x Chrome Hearts White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Chrome Hearts sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/62v6PpL/90-Bape-X-Chrome-Hearts-T-Shirt-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 183: T-Shirts - x Miami Black ────────────────────
  {
    id: "bape-tshirts-x-miami-black",
    nombre: "T-Shirts - x Miami Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Miami sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/hFWQJfZd/89-Bape-X-Miami-T-Shirt-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 184: T-Shirts - x Miami White ────────────────────
  {
    id: "bape-tshirts-x-miami-white",
    nombre: "T-Shirts - x Miami White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Miami sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/Pzv4pSsn/88-Bape-X-Miami-T-Shirt-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 185: T-Shirts - x Miami Pink ────────────────────
  {
    id: "bape-tshirts-x-miami-pink",
    nombre: "T-Shirts - x Miami Pink",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Miami sobre rosa",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/7tFpMHYX/87-Bape-X-Miami-T-Shirt-Pink.png",
    color: "#e890b8"
  },

  // ── PRODUCTO 186: T-Shirts - World Gone Mad Shark Camo White ────────────────────
  {
    id: "bape-tshirts-world-gone-mad-shark-camo-white",
    nombre: "T-Shirts - World Gone Mad Shark Camo White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Shark Camo sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/prJGzmY3/86-Bape-World-Gone-Mad-Shark-Camo-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 187: T-Shirts - World Gone Mad Shark Camo Black ────────────────────
  {
    id: "bape-tshirts-world-gone-mad-shark-camo-black",
    nombre: "T-Shirts - World Gone Mad Shark Camo Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Shark Camo sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/CKr68QFS/85-Bape-World-Gone-Mad-Shark-Camo-Black.png",
    color: "#1a1a1a"
  },

  // ── PRODUCTO 188: T-Shirts - x Heron Preston Purple ────────────────────
  {
    id: "bape-tshirts-x-heron-preston-purple",
    nombre: "T-Shirts - x Heron Preston Purple",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Heron Preston violeta",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/g0vM18r/84-Bape-X-Heron-Preston-T-Shirt-Purple.png",
    color: "#6a3a8a"
  },

  // ── PRODUCTO 189: T-Shirts - x Heron Preston White ────────────────────
  {
    id: "bape-tshirts-x-heron-preston-white",
    nombre: "T-Shirts - x Heron Preston White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Heron Preston blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/ccnn2htL/83-Bape-X-Heron-Preston-T-Shirt-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 190: T-Shirts - x Heron Preston Coral ────────────────────
  {
    id: "bape-tshirts-x-heron-preston-coral",
    nombre: "T-Shirts - x Heron Preston Coral",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Collab BAPE x Heron Preston coral",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/n8zX34tT/82-Bape-X-Heron-Preston-T-Shirt-Corchoal.png",
    color: "#e89080"
  },

  // ── PRODUCTO 191: T-Shirts - Shuffle Ape Head White ────────────────────
  {
    id: "bape-tshirts-shuffle-ape-head-white",
    nombre: "T-Shirts - Shuffle Ape Head White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Shuffle Ape Head graphic sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/HTJYKhVc/81-Bape-Shuffle-Ape-Head-T-Shirt-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 192: T-Shirts - Shuffle Ape Head Black ────────────────────
  {
    id: "bape-tshirts-shuffle-ape-head-black",
    nombre: "T-Shirts - Shuffle Ape Head Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Shuffle Ape Head graphic sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/LdF1Fgpx/80-Bape-Shuffle-Ape-Head-T-Shirt-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 193: T-Shirts - Baby Milo Camo Ape Head Light Blue ────────────────────
  {
    id: "bape-tshirts-baby-milo-camo-ape-head-light-blue",
    nombre: "T-Shirts - Baby Milo Camo Ape Head Light Blue",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Baby Milo Camo Ape Head celeste",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/mCKvDnR7/79-Bape-Baby-Milo-T-Shirt-Camo-Ape-Head-Light-Blue.png",
    color: "#80b8d0"
  },

  // ── PRODUCTO 194: T-Shirts - Baby Milo Camo Ape Head Pink ────────────────────
  {
    id: "bape-tshirts-baby-milo-camo-ape-head-pink",
    nombre: "T-Shirts - Baby Milo Camo Ape Head Pink",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Baby Milo Camo Ape Head rosa",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/9knGpCZk/78-Bape-Baby-Milo-T-Shirt-Camo-Ape-Head-Pink.png",
    color: "#e8a0b8"
  },

  // ── PRODUCTO 195: T-Shirts - Baby Milo Camo Ape Head Beige ────────────────────
  {
    id: "bape-tshirts-baby-milo-camo-ape-head-beige",
    nombre: "T-Shirts - Baby Milo Camo Ape Head Beige",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Baby Milo Camo Ape Head beige",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/m5kr8K9s/77-Bape-Baby-Milo-T-Shirt-Camo-Ape-Head-Beige.png",
    color: "#d0c0a0"
  },

  // ── PRODUCTO 196: T-Shirts - Big Ape Head White ────────────────────
  {
    id: "bape-tshirts-big-ape-head-white",
    nombre: "T-Shirts - Big Ape Head White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Big Ape Head sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/Q7cP38PH/76-Bape-T-Shirt-Big-Ape-Head-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 197: T-Shirts - Big Ape Head Black ────────────────────
  {
    id: "bape-tshirts-big-ape-head-black",
    nombre: "T-Shirts - Big Ape Head Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Big Ape Head sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/6JbwGLMc/75-Bape-T-Shirt-Big-Ape-Head-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 198: T-Shirts - World Gone Wild Red ────────────────────
  {
    id: "bape-tshirts-world-gone-wild-red",
    nombre: "T-Shirts - World Gone Wild Red",
    marca: "BAPE",
    precio: 39999,
    descripcion: "World Gone Wild rojo",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/zW1ryXk4/74-Bape-T-Shirt-World-Gone-Wild-Red.png",
    color: "#aa2020"
  },

  // ── PRODUCTO 199: T-Shirts - World Gone Mad White ────────────────────
  {
    id: "bape-tshirts-world-gone-mad-white",
    nombre: "T-Shirts - World Gone Mad White",
    marca: "BAPE",
    precio: 39999,
    descripcion: "World Gone Mad sobre blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/39qM0gFz/73-Bape-T-Shirt-World-Gone-Mad-White.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 200: T-Shirts - World Gone Mad Black ────────────────────
  {
    id: "bape-tshirts-world-gone-mad-black",
    nombre: "T-Shirts - World Gone Mad Black",
    marca: "BAPE",
    precio: 39999,
    descripcion: "World Gone Mad sobre negro",
    disponible: true,
    etiqueta: "New",
    talles: ["M","L","XL","XXL","3XL"],
    imagen: "https://i.ibb.co/FbdXS9xZ/72-Bape-T-Shirt-World-Gone-Mad-Black.png",
    color: "#111111"
  },

  // ── PRODUCTO 201: Bapesta - Black ────────────────────
  {
    id: "bape-bapesta-black",
    nombre: "Bapesta - Black",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Negro clásico",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/9HXgwZsp/00779b52-ccd5-4a00-ae57-ea1d658d8a60-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 202: Bapesta - White ────────────────────
  {
    id: "bape-bapesta-white",
    nombre: "Bapesta - White",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Blanco clásico",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/HTGx5vgD/57251a7b-2776-421a-b303-d34932b5543e-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 203: Bapesta - Blue ────────────────────
  {
    id: "bape-bapesta-blue",
    nombre: "Bapesta - Blue",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Azul BAPE",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/Ngp7q7w5/67921b7e-ee64-4890-9848-b89686c9fa49-jpg.jpg",
    color: "#1a4a8a"
  },

  // ── PRODUCTO 204: Bapesta - Red ────────────────────
  {
    id: "bape-bapesta-red",
    nombre: "Bapesta - Red",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Rojo clásico",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/RphGmH93/94640f07-329f-441c-84c4-1b69da3730c4-jpg.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 205: Bapesta - Pink ────────────────────
  {
    id: "bape-bapesta-pink",
    nombre: "Bapesta - Pink",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Rosa BAPE",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/NgXX7Wqr/b58cc857-ed63-43d1-8610-908f7c062e45-jpg.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 206: Bapesta - Purple ────────────────────
  {
    id: "bape-bapesta-purple",
    nombre: "Bapesta - Purple",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Violeta",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/CpmYK8gq/bd089cca-bace-481b-bd12-47aa63ad1e7d-jpg.jpg",
    color: "#7a3aaa"
  },

  // ── PRODUCTO 207: Bapesta - Yellow ────────────────────
  {
    id: "bape-bapesta-yellow",
    nombre: "Bapesta - Yellow",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Amarillo",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/99gJk8X7/cdfa6291-e15a-4205-8c57-da6d670ed971-jpg.jpg",
    color: "#d4c01a"
  },

  // ── PRODUCTO 208: Bapesta - Green ────────────────────
  {
    id: "bape-bapesta-green",
    nombre: "Bapesta - Green",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Verde",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/pvmQrJZ4/e0a9286d-19b3-4e41-b8ee-28b6b0bd3af5-jpg.jpg",
    color: "#2a7a3a"
  },

  // ── PRODUCTO 209: Bapesta - Orange ────────────────────
  {
    id: "bape-bapesta-orange",
    nombre: "Bapesta - Orange",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Naranja",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/k2VQQSDX/f05cf122-b01a-4028-81f8-28d40e2c4564-jpg.jpg",
    color: "#d4601a"
  },

  // ── PRODUCTO 210: Bapesta - Grey ────────────────────
  {
    id: "bape-bapesta-grey",
    nombre: "Bapesta - Grey",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Gris",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/fG1y9rMk/f18ad2b9-3bb7-458d-b7d9-65aa904214b0-jpg.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 211: Bapesta - Navy ────────────────────
  {
    id: "bape-bapesta-navy",
    nombre: "Bapesta - Navy",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Azul marino",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/Rp214p7z/fa70b465-6d3e-434d-bf0e-ef4d1c3c54f1-jpg.jpg",
    color: "#0a1a3a"
  },

  // ── PRODUCTO 212: Bapesta - Camo Green ────────────────────
  {
    id: "bape-bapesta-camo-green",
    nombre: "Bapesta - Camo Green",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Camo verde militar",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/C5r0GYwf/2d93ebcf-cc3f-4b8b-b69e-498ff99857db-jpg.jpg",
    color: "#4a6a3a"
  },

  // ── PRODUCTO 213: Bapesta - Camo Brown ────────────────────
  {
    id: "bape-bapesta-camo-brown",
    nombre: "Bapesta - Camo Brown",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Camo marrón",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/HDnLsyyr/5a5683c7-896e-450e-84ba-74a5ec2e13cc-jpg.jpg",
    color: "#5a3a1a"
  },

  // ── PRODUCTO 214: Bapesta - Gold ────────────────────
  {
    id: "bape-bapesta-gold",
    nombre: "Bapesta - Gold",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Dorado",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/jkCStR87/5f6985c8-bd52-4cd6-8bc5-0135f795528c-jpg.jpg",
    color: "#d4a01a"
  },

  // ── PRODUCTO 215: Bapesta - Silver ────────────────────
  {
    id: "bape-bapesta-silver",
    nombre: "Bapesta - Silver",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Plata",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/kPdtS6R/6a0f285c-4d87-4aac-8e4e-3fd1d3b0b1d3-jpg.jpg",
    color: "#c0c0c0"
  },

  // ── PRODUCTO 216: Bapesta - Black Gold ────────────────────
  {
    id: "bape-bapesta-black-gold",
    nombre: "Bapesta - Black Gold",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Negro con detalles dorados",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/5VznsBS/6f9fe105-3ac7-4a8a-bbc8-a4a77cbce1e7-jpg.jpg",
    color: "#1a1a08"
  },

  // ── PRODUCTO 217: Bapesta - White Blue ────────────────────
  {
    id: "bape-bapesta-white-blue",
    nombre: "Bapesta - White Blue",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Blanco y azul",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/MDrCXpmM/7a329582-e838-4601-9ddd-cb6ac500fc8b-jpg.jpg",
    color: "#6a8ecc"
  },

  // ── PRODUCTO 218: Bapesta - White Red ────────────────────
  {
    id: "bape-bapesta-white-red",
    nombre: "Bapesta - White Red",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Blanco y rojo",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/8nMX3xcm/7d69ec8a-ac9c-4bed-8870-2177aec1c549-jpg.jpg",
    color: "#e8e8e8"
  },

  // ── PRODUCTO 219: Bapesta - Black Red ────────────────────
  {
    id: "bape-bapesta-black-red",
    nombre: "Bapesta - Black Red",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Negro y rojo",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/wNsyggtT/8c9897fb-bcf5-4c8c-895d-421ef6b43082-jpg.jpg",
    color: "#2a0a0a"
  },

  // ── PRODUCTO 220: Bapesta - Black White ────────────────────
  {
    id: "bape-bapesta-black-white",
    nombre: "Bapesta - Black White",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Negro y blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/BdKFwxH/26e9e444-bbb0-48ad-bf19-502d3e35ba02-jpg.jpg",
    color: "#333333"
  },

  // ── PRODUCTO 221: Bapesta - Pink White ────────────────────
  {
    id: "bape-bapesta-pink-white",
    nombre: "Bapesta - Pink White",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Rosa y blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/dsx1jnjF/48f902ad-e15c-4734-8221-ee75f1feb1df-jpg.jpg",
    color: "#e8c0d0"
  },

  // ── PRODUCTO 222: Bapesta - Green Camo v2 ────────────────────
  {
    id: "bape-bapesta-green-camo-v2",
    nombre: "Bapesta - Green Camo v2",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Camo verde segunda versión",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/YBkkWdnT/69fb3212-caf6-4e74-a5c1-817622b1d1ad-jpg.jpg",
    color: "#3a5a2a"
  },

  // ── PRODUCTO 223: Bapesta - Light Blue ────────────────────
  {
    id: "bape-bapesta-light-blue",
    nombre: "Bapesta - Light Blue",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Azul claro",
    disponible: true,
    etiqueta: "New",
    talles: ["38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/nszG7bRc/88f963d1-c9b3-4d25-b38f-9d99cc43cfc7-jpg.jpg",
    color: "#80b8e0"
  },

  // ── PRODUCTO 224: Timberland Premium 6 - Wheat ────────────────────
  {
    id: "timberland-wheat",
    nombre: "Timberland Premium 6 - Wheat",
    marca: "Timberland",
    precio: 114999,
    descripcion: "Wheat - amarillo clásico",
    disponible: true,
    etiqueta: "Classic",
    talles: ["40","41","42","43","44","45","46"],
    imagen: "https://i.ibb.co/cKYJQCh6/Timberland-Premium-6-Inch-Waterproof-Boot-for-Men-in-Yellow-TBL-Yellow-MKTG1-1.jpg",
    color: "#d4a01a"
  },

  // ── PRODUCTO 225: Timberland Premium 6 - Black ────────────────────
  {
    id: "timberland-black",
    nombre: "Timberland Premium 6 - Black",
    marca: "Timberland",
    precio: 114999,
    descripcion: "Black - negro clásico",
    disponible: true,
    etiqueta: "Classic",
    talles: ["40","41","42","43","44","45","46"],
    imagen: "https://i.ibb.co/QFsXB8WD/Timberland-Premium-6-Inch-Waterproof-Boot-for-Men-in-Black-TBL-ALT8.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 226: x Undefeated Timberland - Nubuck Camo ────────────────────
  {
    id: "bape-undefeated-timberland-nubuck-camo",
    nombre: "x Undefeated Timberland - Nubuck Camo",
    marca: "BAPE",
    precio: 129999,
    descripcion: "Nubuck Camo - BAPE x Undefeated x Timberland",
    disponible: true,
    etiqueta: "Collab",
    talles: ["40","41","42","43","44","45","46"],
    imagen: "https://i.ibb.co/5hzrXhHs/1681856724-undefeated-a-bathing-ape-timberland-release-date-price-011.jpg",
    color: "#1a1a1a"
  },

  // ── PRODUCTO 227: Monogram Cross Print Pocket T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-monogram-cross-pocket-black",
    nombre: "Monogram Cross Print Pocket T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/zHtj7D6k/86-Chrome-Hearts-Monogram-Cross-Print-Pocket-T-Shirt-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 228: Multi Logo T-Shirt with Embroidered Triple Cross and Star - White ────────────────────
  {
    id: "chrome-hearts-multi-logo-triple-cross-star-white",
    nombre: "Multi Logo T-Shirt with Embroidered Triple Cross and Star - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/VYmsLQm1/85-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Triple-Cross-and-Star-1-en-blanco-y-1-en-negr.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 229: Multi Logo T-Shirt with Embroidered Triple Cross and Star - Black ────────────────────
  {
    id: "chrome-hearts-multi-logo-triple-cross-star-black",
    nombre: "Multi Logo T-Shirt with Embroidered Triple Cross and Star - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/VYmsLQm1/85-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Triple-Cross-and-Star-1-en-blanco-y-1-en-negr.png",
    color: "#111111"
  },

  // ── PRODUCTO 230: Fleur-de-Lis Patch Coaches Jacket - Black ────────────────────
  {
    id: "chrome-hearts-fleur-de-lis-coaches-black",
    nombre: "Fleur-de-Lis Patch Coaches Jacket - Black",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/1Jtfvfmp/84-Chrome-Hearts-Fleur-de-Lis-Patch-Coaches-Jacket-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 231: Matty Boy Chomper Horseshoe T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-matty-boy-chomper-white",
    nombre: "Matty Boy Chomper Horseshoe T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/XxbHRm14/83-Chrome-Hearts-Matty-Boy-Chomper-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 232: Matty Boy Chomper Horseshoe T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-matty-boy-chomper-black",
    nombre: "Matty Boy Chomper Horseshoe T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/XxbHRm14/83-Chrome-Hearts-Matty-Boy-Chomper-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 233: Vertical Cross Patch Turtle Neck Knit Sweater - Grey ────────────────────
  {
    id: "chrome-hearts-vertical-cross-turtleneck-grey",
    nombre: "Vertical Cross Patch Turtle Neck Knit Sweater - Grey",
    marca: "Chrome Hearts",
    precio: 119999,
    descripcion: "Gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/hRxYc9zf/82-Chrome-Hearts-Vertical-Cross-Patch-Turtle-Neck-Knit-Sweater-1-en-gris-y-1-en-negro.png",
    color: "#888888"
  },

  // ── PRODUCTO 234: Vertical Cross Patch Turtle Neck Knit Sweater - Black ────────────────────
  {
    id: "chrome-hearts-vertical-cross-turtleneck-black",
    nombre: "Vertical Cross Patch Turtle Neck Knit Sweater - Black",
    marca: "Chrome Hearts",
    precio: 119999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/hRxYc9zf/82-Chrome-Hearts-Vertical-Cross-Patch-Turtle-Neck-Knit-Sweater-1-en-gris-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 235: Multi Logo T-Shirt with Embroidered Crosses and Stars - White ────────────────────
  {
    id: "chrome-hearts-multi-logo-crosses-stars-white",
    nombre: "Multi Logo T-Shirt with Embroidered Crosses and Stars - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/SDXjnYQ7/81-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Crosses-and-Stars-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 236: Multi Logo T-Shirt with Embroidered Crosses and Stars - Black ────────────────────
  {
    id: "chrome-hearts-multi-logo-crosses-stars-black",
    nombre: "Multi Logo T-Shirt with Embroidered Crosses and Stars - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/SDXjnYQ7/81-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Crosses-and-Stars-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 237: Horseshoe Logo Sherpa Fleece Jacket - Black ────────────────────
  {
    id: "chrome-hearts-horseshoe-sherpa-fleece-black",
    nombre: "Horseshoe Logo Sherpa Fleece Jacket - Black",
    marca: "Chrome Hearts",
    precio: 159999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Xrs8sv99/80-Chrome-Hearts-Horseshoe-Logo-Sherpa-Fleece-Jacket-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 238: Multi Cross Patch Varsity Jacket - Grey ────────────────────
  {
    id: "chrome-hearts-multi-cross-varsity-grey",
    nombre: "Multi Cross Patch Varsity Jacket - Grey",
    marca: "Chrome Hearts",
    precio: 179999,
    descripcion: "Gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/3yWqk0jT/79-Chrome-Hearts-Multi-Cross-Patch-Varsity-Jacket-1-en-gris-y-1-en-negro.png",
    color: "#888888"
  },

  // ── PRODUCTO 239: Multi Cross Patch Varsity Jacket - Black ────────────────────
  {
    id: "chrome-hearts-multi-cross-varsity-black",
    nombre: "Multi Cross Patch Varsity Jacket - Black",
    marca: "Chrome Hearts",
    precio: 179999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/3yWqk0jT/79-Chrome-Hearts-Multi-Cross-Patch-Varsity-Jacket-1-en-gris-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 240: Denim Patch Horseshoe T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-denim-patch-horseshoe-white",
    nombre: "Denim Patch Horseshoe T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/sdvqbSFC/78-Chrome-Hearts-Denim-Patch-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 241: Denim Patch Horseshoe T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-denim-patch-horseshoe-black",
    nombre: "Denim Patch Horseshoe T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/sdvqbSFC/78-Chrome-Hearts-Denim-Patch-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 242: Triple Cross Heart Distressed Long Sleeve T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-triple-cross-heart-distressed-white",
    nombre: "Triple Cross Heart Distressed Long Sleeve T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/yFbQMtTF/77-Chrome-Hearts-Triple-Cross-Heart-Distressed-Long-Sleeve-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 243: Triple Cross Heart Distressed Long Sleeve T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-triple-cross-heart-distressed-black",
    nombre: "Triple Cross Heart Distressed Long Sleeve T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/yFbQMtTF/77-Chrome-Hearts-Triple-Cross-Heart-Distressed-Long-Sleeve-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 244: Embroidered Horseshoe Logo T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-embroidered-horseshoe-white",
    nombre: "Embroidered Horseshoe Logo T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/ZztXBNLT/76-Chrome-Hearts-Embroidered-Horseshoe-Logo-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 245: Embroidered Horseshoe Logo T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-embroidered-horseshoe-black",
    nombre: "Embroidered Horseshoe Logo T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/ZztXBNLT/76-Chrome-Hearts-Embroidered-Horseshoe-Logo-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 246: Multi Cross Outline T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-multi-cross-outline-white",
    nombre: "Multi Cross Outline T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/1Gnt8MBH/75-Chrome-Hearts-Multi-Cross-Outline-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 247: Multi Cross Outline T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-multi-cross-outline-black",
    nombre: "Multi Cross Outline T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/1Gnt8MBH/75-Chrome-Hearts-Multi-Cross-Outline-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 248: Multi Logo Pin Patch T-Shirt - Yellow ────────────────────
  {
    id: "chrome-hearts-multi-logo-pin-patch-yellow",
    nombre: "Multi Logo Pin Patch T-Shirt - Yellow",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Amarillo",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/RpdWn0Ft/74-Chrome-Hearts-Multi-Logo-Pin-Patch-T-Shirt-1-en-amarillo-y-1-en-negro.png",
    color: "#d4c01a"
  },

  // ── PRODUCTO 249: Multi Logo Pin Patch T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-multi-logo-pin-patch-black",
    nombre: "Multi Logo Pin Patch T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/RpdWn0Ft/74-Chrome-Hearts-Multi-Logo-Pin-Patch-T-Shirt-1-en-amarillo-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 250: CDG Homme Paris Distressed Cross T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-cdg-homme-distressed-white",
    nombre: "CDG Homme Paris Distressed Cross T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Wvtxkvdb/73-Chrome-Hearts-CDG-Homme-Paris-Distressed-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 251: CDG Homme Paris Distressed Cross T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-cdg-homme-distressed-black",
    nombre: "CDG Homme Paris Distressed Cross T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Wvtxkvdb/73-Chrome-Hearts-CDG-Homme-Paris-Distressed-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 252: CDG Homme Paris Cross T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-cdg-homme-cross-white",
    nombre: "CDG Homme Paris Cross T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/jvjCs7Jh/72-Chrome-Hearts-CDG-Homme-Paris-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 253: CDG Homme Paris Cross T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-cdg-homme-cross-black",
    nombre: "CDG Homme Paris Cross T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/jvjCs7Jh/72-Chrome-Hearts-CDG-Homme-Paris-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 254: Multi Logo Pocket T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-multi-logo-pocket-white",
    nombre: "Multi Logo Pocket T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/yFH3vT2Z/71-Chrome-Hearts-Multi-Logo-Pocket-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 255: Multi Logo Pocket T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-multi-logo-pocket-black",
    nombre: "Multi Logo Pocket T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/yFH3vT2Z/71-Chrome-Hearts-Multi-Logo-Pocket-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 256: CH Patch T-Shirt with Bottom Crosses - Black ────────────────────
  {
    id: "chrome-hearts-ch-patch-bottom-crosses-black",
    nombre: "CH Patch T-Shirt with Bottom Crosses - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/wFFqXhLy/70-Chrome-Hearts-CH-Patch-T-Shirt-with-Bottom-Crosses-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 257: Black Crewneck Sweatshirt with Leather Horseshoe Patch - Black ────────────────────
  {
    id: "chrome-hearts-crewneck-leather-horseshoe-black",
    nombre: "Black Crewneck Sweatshirt with Leather Horseshoe Patch - Black",
    marca: "Chrome Hearts",
    precio: 129999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/CKzgTtSz/69-Chrome-Hearts-Black-Crewneck-Sweatshirt-with-Leather-Horseshoe-Patch-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 258: Monogram Print Zip Up Hoodie - White ────────────────────
  {
    id: "chrome-hearts-monogram-zip-up-white",
    nombre: "Monogram Print Zip Up Hoodie - White",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/KjdLnFKv/68-Chrome-Hearts-Monogram-Print-Zip-Up-Hoodie-1-en-blanco-y-1-en-negro-y-1-en-celeste.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 259: Monogram Print Zip Up Hoodie - Black ────────────────────
  {
    id: "chrome-hearts-monogram-zip-up-black",
    nombre: "Monogram Print Zip Up Hoodie - Black",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/KjdLnFKv/68-Chrome-Hearts-Monogram-Print-Zip-Up-Hoodie-1-en-blanco-y-1-en-negro-y-1-en-celeste.png",
    color: "#111111"
  },

  // ── PRODUCTO 260: Monogram Print Zip Up Hoodie - Light Blue ────────────────────
  {
    id: "chrome-hearts-monogram-zip-up-light-blue",
    nombre: "Monogram Print Zip Up Hoodie - Light Blue",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Celeste",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/KjdLnFKv/68-Chrome-Hearts-Monogram-Print-Zip-Up-Hoodie-1-en-blanco-y-1-en-negro-y-1-en-celeste.png",
    color: "#80b8e0"
  },

  // ── PRODUCTO 261: Horseshoe and Filigree Cross T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-horseshoe-filigree-cross-white",
    nombre: "Horseshoe and Filigree Cross T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/9mL8grcs/67-Chrome-Hearts-Horseshoe-and-Filigree-Cross-T-Shirt-1-en-blanco-y-1-en-negro-y-1-en-gris.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 262: Horseshoe and Filigree Cross T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-horseshoe-filigree-cross-black",
    nombre: "Horseshoe and Filigree Cross T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/9mL8grcs/67-Chrome-Hearts-Horseshoe-and-Filigree-Cross-T-Shirt-1-en-blanco-y-1-en-negro-y-1-en-gris.png",
    color: "#111111"
  },

  // ── PRODUCTO 263: Horseshoe and Filigree Cross T-Shirt - Grey ────────────────────
  {
    id: "chrome-hearts-horseshoe-filigree-cross-grey",
    nombre: "Horseshoe and Filigree Cross T-Shirt - Grey",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/9mL8grcs/67-Chrome-Hearts-Horseshoe-and-Filigree-Cross-T-Shirt-1-en-blanco-y-1-en-negro-y-1-en-gris.png",
    color: "#888888"
  },

  // ── PRODUCTO 264: Scattered Cross Patch T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-scattered-cross-patch-white",
    nombre: "Scattered Cross Patch T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/4QLJ4h1/66-Chrome-Hearts-Scattered-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 265: Scattered Cross Patch T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-scattered-cross-patch-black",
    nombre: "Scattered Cross Patch T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/4QLJ4h1/66-Chrome-Hearts-Scattered-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 266: Multi Cross Patch T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-multi-cross-patch-white",
    nombre: "Multi Cross Patch T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/ZpK73Fcs/65-Chrome-Hearts-Multi-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 267: Multi Cross Patch T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-multi-cross-patch-black",
    nombre: "Multi Cross Patch T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/ZpK73Fcs/65-Chrome-Hearts-Multi-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 268: Cross Patch T-Shirt - Grey ────────────────────
  {
    id: "chrome-hearts-cross-patch-grey",
    nombre: "Cross Patch T-Shirt - Grey",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/jvCrQrQF/64-Chrome-Hearts-Cross-Patch-T-Shirt-1-en-gris-y-1-en-negro.png",
    color: "#888888"
  },

  // ── PRODUCTO 269: Cross Patch T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-cross-patch-black",
    nombre: "Cross Patch T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/jvCrQrQF/64-Chrome-Hearts-Cross-Patch-T-Shirt-1-en-gris-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 270: Triple Cemetery Cross T-Shirt - White ────────────────────
  {
    id: "chrome-hearts-triple-cemetery-cross-white",
    nombre: "Triple Cemetery Cross T-Shirt - White",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/0yqnCLnY/63-Chrome-Hearts-Triple-Cemetery-Cross-T-Shirt-1-blanco-y-1-en-negro.png",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 271: Triple Cemetery Cross T-Shirt - Black ────────────────────
  {
    id: "chrome-hearts-triple-cemetery-cross-black",
    nombre: "Triple Cemetery Cross T-Shirt - Black",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/0yqnCLnY/63-Chrome-Hearts-Triple-Cemetery-Cross-T-Shirt-1-blanco-y-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 272: Black Mesh V-Neck Football Jersey with Silver Script Logo - Black ────────────────────
  {
    id: "chrome-hearts-mesh-football-jersey-black",
    nombre: "Black Mesh V-Neck Football Jersey with Silver Script Logo - Black",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/99vfdvdK/62-Chrome-Hearts-Black-Mesh-V-Neck-Football-Jersey-with-Silver-Script-Logo-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 273: Black Leather Belt with Silver Star Studs and Star Buckle - Black ────────────────────
  {
    id: "chrome-hearts-leather-belt-star-studs-black",
    nombre: "Black Leather Belt with Silver Star Studs and Star Buckle - Black",
    marca: "Chrome Hearts",
    precio: 59999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/FbfKcJVJ/61-Chrome-Hearts-Black-Leather-Belt-with-Silver-Star-Studs-and-Star-Buckle-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 274: Black Zip Up Hoodie with Scroll Logo and Sleeve Script Print - Black ────────────────────
  {
    id: "chrome-hearts-zip-up-scroll-logo-black",
    nombre: "Black Zip Up Hoodie with Scroll Logo and Sleeve Script Print - Black",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/tpfMmX7y/60-Chrome-Hearts-Black-Zip-Up-Hoodie-with-Scroll-Logo-and-Sleeve-Script-Print-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 275: Black Zip Up Fleece Hoodie with Horseshoe Logo - Black ────────────────────
  {
    id: "chrome-hearts-zip-up-fleece-horseshoe-black",
    nombre: "Black Zip Up Fleece Hoodie with Horseshoe Logo - Black",
    marca: "Chrome Hearts",
    precio: 129999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/XfJ1H3zD/59-Chrome-Hearts-Black-Zip-Up-Fleece-Hoodie-with-Horseshoe-Logo-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 276: Horseshoe Logo Half Zip Fleece Pullover - Black ────────────────────
  {
    id: "chrome-hearts-half-zip-fleece-black",
    nombre: "Horseshoe Logo Half Zip Fleece Pullover - Black",
    marca: "Chrome Hearts",
    precio: 119999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/hRByvdtN/58-Chrome-Hearts-Horseshoe-Logo-Half-Zip-Fleece-Pullover-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 277: Black Varsity Jacket with Leather Sleeves and Red Cemetery Cross Embroidery - Black ────────────────────
  {
    id: "chrome-hearts-varsity-leather-sleeves-black",
    nombre: "Black Varsity Jacket with Leather Sleeves and Red Cemetery Cross Embroidery - Black",
    marca: "Chrome Hearts",
    precio: 199999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/TDL4ccKw/57-Chrome-Hearts-Black-Varsity-Jacket-with-Leather-Sleeves-and-Red-Cemetery-Cross-Embroidery-1-en.png",
    color: "#111111"
  },

  // ── PRODUCTO 278: Horseshoe Logo Panel Track Jacket - Black ────────────────────
  {
    id: "chrome-hearts-panel-track-jacket-black",
    nombre: "Horseshoe Logo Panel Track Jacket - Black",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/TMXNCrvP/56-Chrome-Hearts-Horseshoe-Logo-Panel-Track-Jacket-1-en-negro.png",
    color: "#111111"
  },

  // ── PRODUCTO 279: Charcoal Grey Zip Up Hoodie with All Over White Dagger Monogram Print - Charcoal Grey ────────────────────
  {
    id: "chrome-hearts-dagger-monogram-zip-up-charcoal-grey",
    nombre: "Charcoal Grey Zip Up Hoodie with All Over White Dagger Monogram Print - Charcoal Grey",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Gris carbón",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/BKKNNCGR/55-Chrome-Hearts-Charcoal-Grey-Zip-Up-Hoodie-with-All-Over-White-Dagger-Monogram-Print-1-en-gris.png",
    color: "#36454f"
  },

  // ── PRODUCTO 280: Future Low - Fire Red White Black ────────────────────
  {
    id: "margiela-future-low-fire-red-white-black",
    nombre: "Future Low - Fire Red White Black",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Fire Red White Black",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/HLcN3JGP/pcitem902012418622-7f0f0000019ca81eb46a0a207569-1440-1440-jpg.jpg",
    color: "#aa2020"
  },

  // ── PRODUCTO 281: Future Low - Travis Scott Brown ────────────────────
  {
    id: "margiela-future-low-travis-scott-brown",
    nombre: "Future Low - Travis Scott Brown",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Travis Scott Brown",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/PZB4VZJ4/wdseller1845163825-2f13000001901d8195be0a8133cc-1080-1080-jpg.jpg",
    color: "#5a3a2a"
  },

  // ── PRODUCTO 282: Future Low - Travis Scott Cactus Jack ────────────────────
  {
    id: "margiela-future-low-travis-scott-cactus-jack",
    nombre: "Future Low - Travis Scott Cactus Jack",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Travis Scott Cactus Jack",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/q3SDqCcJ/wdseller1845163825-3333000001901d7e21150a210256-1080-1080-jpg.jpg",
    color: "#3a2a1a"
  },

  // ── PRODUCTO 283: Future Low - Black Cat ────────────────────
  {
    id: "margiela-future-low-black-cat",
    nombre: "Future Low - Black Cat",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Black Cat",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/1thZ5w5M/wdseller1845163825-3464000001901d7ee72b0a2102c5-1080-1080-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 284: Future Low - Taupe Haze ────────────────────
  {
    id: "margiela-future-low-taupe-haze",
    nombre: "Future Low - Taupe Haze",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Taupe Haze",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/xqxp207Y/open1850717273-1234478995-0a16000001901b1eb8810a210559-1080-1080-jpg.jpg",
    color: "#9a8a7a"
  },

  // ── PRODUCTO 285: Future Low - Metallic Gold ────────────────────
  {
    id: "margiela-future-low-metallic-gold",
    nombre: "Future Low - Metallic Gold",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Metallic Gold",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/hJfsX4mV/open1850717273-1234478995-4b4d000001901b1f40d00a232357-1080-1080-jpg.webp",
    color: "#c8a020"
  },

  // ── PRODUCTO 286: Future Low - Black Canvas ────────────────────
  {
    id: "margiela-future-low-black-canvas",
    nombre: "Future Low - Black Canvas",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Black Canvas",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/7xLzQ41W/open1850717273-1234478995-67f4000001901b1ebb830a22d234-1074-1074-jpg.jpg",
    color: "#0a0a0a"
  },

  // ── PRODUCTO 287: Future Low - Bred Reimagined ────────────────────
  {
    id: "margiela-future-low-bred-reimagined",
    nombre: "Future Low - Bred Reimagined",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Bred Reimagined",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/jPxMVLw5/open1850717273-1234478995-683c000001901b1ef4540a22d234-1074-1074-jpg.jpg",
    color: "#aa1010"
  },

  // ── PRODUCTO 288: Future Low - SE Craft Medium Olive ────────────────────
  {
    id: "margiela-future-low-se-craft-medium-olive",
    nombre: "Future Low - SE Craft Medium Olive",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "SE Craft Medium Olive",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/Rp4G76yN/open1850717273-1234478995-2954000001901b1eec6b0a8115b5-1080-1080-jpg.webp",
    color: "#6a7a3a"
  },

  // ── PRODUCTO 289: Future Low - Military Blue ────────────────────
  {
    id: "margiela-future-low-military-blue",
    nombre: "Future Low - Military Blue",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Military Blue",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/rfmGb0YH/open1850717273-1234478995-6125000001901b1ef8de0a239383-1080-1080-jpg.jpg",
    color: "#1a3a6a"
  },

  // ── PRODUCTO 290: Future Low - Off White Sail ────────────────────
  {
    id: "margiela-future-low-off-white-sail",
    nombre: "Future Low - Off White Sail",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Off White Sail",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/ccp0cktJ/wdseller1845163825-3312000001901da695b20a2301b4-1080-1080-jpg.jpg",
    color: "#e8e4d8"
  },

  // ── PRODUCTO 291: Future Low - Lakers ────────────────────
  {
    id: "margiela-future-low-lakers",
    nombre: "Future Low - Lakers",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Lakers",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://i.ibb.co/nNrDp4Sc/pcitem902012418622-3a520000019b9560c4660a210256-1440-1440-jpg.jpg",
    color: "#6a1a8a"
  },

  // ── PRODUCTO 292: Future Low - Negro con Brillos ────────────────────
  {
    id: "margiela-future-low-negro-con-brillos",
    nombre: "Future Low - Negro con Brillos",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Negro con Brillos",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-19810000019b8a85e6e50a20e2c5_2160_2880.jpg",
    color: "#1a1a1a"
  },

  // ── PRODUCTO 293: Future Low - Rojas y Negras ────────────────────
  {
    id: "margiela-future-low-rojas-y-negras",
    nombre: "Future Low - Rojas y Negras",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Rojas y Negras",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-21b50000019b8a8621320a2304aa_2160_2880.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 294: Future Low - Azul ────────────────────
  {
    id: "margiela-future-low-azul",
    nombre: "Future Low - Azul",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Azul",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-45860000019b8a8683340a23057e_2160_2880.jpg",
    color: "#1a3a8a"
  },

  // ── PRODUCTO 295: Future Low - Gamuza Negra ────────────────────
  {
    id: "margiela-future-low-gamuza-negra",
    nombre: "Future Low - Gamuza Negra",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Gamuza Negra",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-45d30000019b8a858b9f0a210256_2160_2880.jpg",
    color: "#2a2a2a"
  },

  // ── PRODUCTO 296: Future Low - Cuero Negro ────────────────────
  {
    id: "margiela-future-low-cuero-negro",
    nombre: "Future Low - Cuero Negro",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Cuero Negro",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-54020000019ab76c23510a231316_2160_2880.jpg",
    color: "#0a0a0a"
  },

  // ── PRODUCTO 297: Future Low - Rojo ────────────────────
  {
    id: "margiela-future-low-rojo",
    nombre: "Future Low - Rojo",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Rojo",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-08900000019ab76bf4380a20e672_2160_2880.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 298: Future Low - Brillos ────────────────────
  {
    id: "margiela-future-low-brillos",
    nombre: "Future Low - Brillos",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Brillos",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-45da0000019b8a85bbb50a207569_2160_2880.jpg",
    color: "#e0ddd8"
  },

  // ── PRODUCTO 299: Future Low - White Light Blue ────────────────────
  {
    id: "margiela-future-low-white-light-blue",
    nombre: "Future Low - White Light Blue",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — White Light Blue",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-46340000019b8a865b280a210256_2160_2880.jpg",
    color: "#a0c8e8"
  },

  // ── PRODUCTO 300: Future Low - Blanco/Gris ────────────────────
  {
    id: "margiela-future-low-blanco-gris",
    nombre: "Future Low - Blanco/Gris",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "High — Blanco y Gris",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-03ff0000019ab76c556a0a2396f4_2160_2880.jpg",
    color: "#d0d0d0"
  },

  // ── PRODUCTO 301: Future Low - Negro Total ────────────────────
  {
    id: "margiela-future-low-negro-total",
    nombre: "Future Low - Negro Total",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Low — Negro Total",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-2a990000019bc3873dac0a8134f0_2160_2880.jpg",
    color: "#0a0a0a"
  },

  // ── PRODUCTO 302: Future Low - Negro/Blanco ────────────────────
  {
    id: "margiela-future-low-negro-blanco",
    nombre: "Future Low - Negro/Blanco",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Low — Negro y Blanco",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-248f0000019bc387d62e0a239646_2160_2880.jpg",
    color: "#2a2a2a"
  },

  // ── PRODUCTO 303: Future Low - White Brillantes ────────────────────
  {
    id: "margiela-future-low-white-brillantes",
    nombre: "Future Low - White Brillantes",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Low — White Brillantes",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-33df0000019bc38772960a23037f_2160_2880.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 304: Future Low - Rojas ────────────────────
  {
    id: "margiela-future-low-rojas",
    nombre: "Future Low - Rojas",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Low — Rojas",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-24c40000019bc3879d5c0a20e672_2160_2880.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 305: Future Low - Beige/Nude ────────────────────
  {
    id: "margiela-future-low-beige-nude",
    nombre: "Future Low - Beige/Nude",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Low — Beige Nude",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    imagen: "https://si.geilicdn.com/pcitem902012433257-006e0000019bc388126f0a811411_2160_2880.jpg",
    color: "#d4c4a8"
  },

  // ── PRODUCTO 306: Reversible Jacket - Black ────────────────────
  {
    id: "bape-reversible-jacket-black",
    nombre: "Reversible Jacket - Black",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro con detalles BAPE",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/NDQxxPv/crocs-black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 307: Reversible Jacket - Pink ────────────────────
  {
    id: "bape-reversible-jacket-pink",
    nombre: "Reversible Jacket - Pink",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rosa con detalles BAPE",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/m5pV0zc9/crocs-pink.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 308: Reversible Jacket - Blue ────────────────────
  {
    id: "bape-reversible-jacket-blue",
    nombre: "Reversible Jacket - Blue",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Azul con detalles BAPE",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/4wLCLvGK/crocs-blue.jpg",
    color: "#2a5a9a"
  },

  // ── PRODUCTO 309: Reversible Jacket - Green ────────────────────
  {
    id: "bape-reversible-jacket-green",
    nombre: "Reversible Jacket - Green",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Verde con detalles BAPE",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/N6Zt1Jqc/crocs-green.jpg",
    color: "#2a7a3a"
  },

  // ── PRODUCTO 310: Reversible Jacket - Negro ────────────────────
  {
    id: "bape-reversible-jacket-negro",
    nombre: "Reversible Jacket - Negro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro con logo SOX",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/FkRHjZsG/01.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 311: Reversible Jacket - Gris ────────────────────
  {
    id: "bape-reversible-jacket-gris",
    nombre: "Reversible Jacket - Gris",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Gris con logo SOX",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/RTncdttp/02.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 312: Reversible Jacket - Modelo 1 ────────────────────
  {
    id: "bape-reversible-jacket-modelo-1",
    nombre: "Reversible Jacket - Modelo 1",
    marca: "BAPE",
    precio: 149999,
    descripcion: "SOX Sweatpants — colorway 1",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/xSLX3Dq4/03.jpg",
    color: "#333333"
  },

  // ── PRODUCTO 313: Reversible Jacket - Modelo 2 ────────────────────
  {
    id: "bape-reversible-jacket-modelo-2",
    nombre: "Reversible Jacket - Modelo 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "SOX Sweatpants — colorway 2",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Jj5CnXfs/04.jpg",
    color: "#555555"
  },

  // ── PRODUCTO 314: Reversible Jacket - Negro ────────────────────
  {
    id: "bape-reversible-jacket-negro",
    nombre: "Reversible Jacket - Negro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/4ns6tDh7/05.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 315: Reversible Jacket - Azul/Letras Rojas ────────────────────
  {
    id: "bape-reversible-jacket-azul-letras-rojas",
    nombre: "Reversible Jacket - Azul/Letras Rojas",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Azul con letras rojas",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/GvpkZRg7/06.jpg",
    color: "#1a3a6a"
  },

  // ── PRODUCTO 316: Reversible Jacket - Negro Cross ────────────────────
  {
    id: "bape-reversible-jacket-negro-cross",
    nombre: "Reversible Jacket - Negro Cross",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Cross Big Logo negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/3mCBF095/07.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 317: Reversible Jacket - Gris Cross ────────────────────
  {
    id: "bape-reversible-jacket-gris-cross",
    nombre: "Reversible Jacket - Gris Cross",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Cross Big Logo gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Gmc9dXZ/08.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 318: Reversible Jacket - Celeste ────────────────────
  {
    id: "bape-reversible-jacket-celeste",
    nombre: "Reversible Jacket - Celeste",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Big Logo celeste",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Fq6kLFf2/09.jpg",
    color: "#80b8e0"
  },

  // ── PRODUCTO 319: Reversible Jacket - Gris ────────────────────
  {
    id: "bape-reversible-jacket-gris",
    nombre: "Reversible Jacket - Gris",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Big Logo gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/0RspkSKD/10.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 320: Reversible Jacket - Azul/Amarillo ────────────────────
  {
    id: "bape-reversible-jacket-azul-amarillo",
    nombre: "Reversible Jacket - Azul/Amarillo",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Azul con Supreme amarillo",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/DHy0kqC2/11.jpg",
    color: "#1a3a6a"
  },

  // ── PRODUCTO 321: Reversible Jacket - Gris ────────────────────
  {
    id: "bape-reversible-jacket-gris",
    nombre: "Reversible Jacket - Gris",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Gris con Supreme",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/0yGfW4tx/12.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 322: Reversible Jacket - Gris/Azul ────────────────────
  {
    id: "bape-reversible-jacket-gris-azul",
    nombre: "Reversible Jacket - Gris/Azul",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Gris con Supreme azul",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/MDGh1ZTH/13.jpg",
    color: "#6a8ecc"
  },

  // ── PRODUCTO 323: Reversible Jacket - Roja/Blanca ────────────────────
  {
    id: "bape-reversible-jacket-roja-blanca",
    nombre: "Reversible Jacket - Roja/Blanca",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Roja con Supreme blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/1YT050M0/14.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 324: Reversible Jacket - Rojo/Negro ────────────────────
  {
    id: "bape-reversible-jacket-rojo-negro",
    nombre: "Reversible Jacket - Rojo/Negro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rojo con Supreme negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/SDg8GzC6/20.jpg",
    color: "#aa1a1a"
  },

  // ── PRODUCTO 325: Reversible Jacket - Gris 2 ────────────────────
  {
    id: "bape-reversible-jacket-gris-2",
    nombre: "Reversible Jacket - Gris 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Gris segunda versión",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/VctQwTWZ/21.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 326: Reversible Jacket - Blue Denim ────────────────────
  {
    id: "bape-reversible-jacket-blue-denim",
    nombre: "Reversible Jacket - Blue Denim",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blue Denim jacket",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/m5nPyKfY/15.jpg",
    color: "#1a3a6a"
  },

  // ── PRODUCTO 327: Reversible Jacket - Black Denim ────────────────────
  {
    id: "bape-reversible-jacket-black-denim",
    nombre: "Reversible Jacket - Black Denim",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Black Denim jacket",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/kgf0f76w/16.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 328: Reversible Jacket - Negro ────────────────────
  {
    id: "bape-reversible-jacket-negro",
    nombre: "Reversible Jacket - Negro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/pBhkd5p8/17.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 329: Reversible Jacket - Rosa/Blanco ────────────────────
  {
    id: "bape-reversible-jacket-rosa-blanco",
    nombre: "Reversible Jacket - Rosa/Blanco",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rosa con blanco",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/27KjwFwy/18.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 330: Reversible Jacket - Rosa/Blanco 2 ────────────────────
  {
    id: "bape-reversible-jacket-rosa-blanco-2",
    nombre: "Reversible Jacket - Rosa/Blanco 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rosa con blanco segunda versión",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/xRK3S0w/19.jpg",
    color: "#e890b8"
  },

  // ── PRODUCTO 331: Reversible Jacket - Negro/Gris Metalizado ────────────────────
  {
    id: "bape-reversible-jacket-negro-gris-metalizado",
    nombre: "Reversible Jacket - Negro/Gris Metalizado",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro con gris metalizado",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/r2zxnTtx/23.jpg",
    color: "#1a1a1a"
  },

  // ── PRODUCTO 332: Reversible Jacket - Negro/Gris Metalizado 2 ────────────────────
  {
    id: "bape-reversible-jacket-negro-gris-metalizado-2",
    nombre: "Reversible Jacket - Negro/Gris Metalizado 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro con gris metalizado v2",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/d4ZmTHDW/22.jpg",
    color: "#1a1a1a"
  },

  // ── PRODUCTO 333: Reversible Jacket - Negro ────────────────────
  {
    id: "bape-reversible-jacket-negro",
    nombre: "Reversible Jacket - Negro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro IDGAF",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Hpk2RmWD/25.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 334: Reversible Jacket - Negro 2 ────────────────────
  {
    id: "bape-reversible-jacket-negro-2",
    nombre: "Reversible Jacket - Negro 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro IDGAF versión 2",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/JwXj40TG/24.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 335: Reversible Jacket - Navy Blue ────────────────────
  {
    id: "bape-reversible-jacket-navy-blue",
    nombre: "Reversible Jacket - Navy Blue",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Navy Blue IDGAF",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/CKDzfw1y/26.jpg",
    color: "#0a1a3a"
  },

  // ── PRODUCTO 336: Reversible Jacket - Azul Oscuro ────────────────────
  {
    id: "bape-reversible-jacket-azul-oscuro",
    nombre: "Reversible Jacket - Azul Oscuro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Azul Oscuro IDGAF",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/xKntW1TG/32.jpg",
    color: "#0a0a2a"
  },

  // ── PRODUCTO 337: Reversible Jacket - Navy Blue ────────────────────
  {
    id: "bape-reversible-jacket-navy-blue",
    nombre: "Reversible Jacket - Navy Blue",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Navy Blue washed",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/twMR6Vjt/27.jpg",
    color: "#0a1a3a"
  },

  // ── PRODUCTO 338: Reversible Jacket - Black ────────────────────
  {
    id: "bape-reversible-jacket-black",
    nombre: "Reversible Jacket - Black",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Black",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/ks0CvP2P/28.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 339: Reversible Jacket - Camo ────────────────────
  {
    id: "bape-reversible-jacket-camo",
    nombre: "Reversible Jacket - Camo",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rhinestone Camo",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/wrzpY88P/30.jpg",
    color: "#6a7a3a"
  },

  // ── PRODUCTO 340: Reversible Jacket - Camo 2 ────────────────────
  {
    id: "bape-reversible-jacket-camo-2",
    nombre: "Reversible Jacket - Camo 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rhinestone Camo 2",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/bjhGS4q3/29.jpg",
    color: "#4a6a3a"
  },

  // ── PRODUCTO 341: Reversible Jacket - Negro ────────────────────
  {
    id: "bape-reversible-jacket-negro",
    nombre: "Reversible Jacket - Negro",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Rhinestone Negro",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/q4J7dfS/31.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 342: Reversible Jacket - Cobalt Blue Tint ────────────────────
  {
    id: "bape-reversible-jacket-cobalt-blue-tint",
    nombre: "Reversible Jacket - Cobalt Blue Tint",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Azul cobalto con detalles tint",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/xKnmSFpC/Nike-x-NOCTA-Tech-Fleece-Hoodie-Joggers-Set-Cobalt-Blue-Tint.jpg",
    color: "#2a5aaa"
  },

  // ── PRODUCTO 343: Reversible Jacket - Stadium Green Sail ────────────────────
  {
    id: "bape-reversible-jacket-stadium-green-sail",
    nombre: "Reversible Jacket - Stadium Green Sail",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Verde stadium con sail",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Rk6kvsS0/Nike-x-NOCTA-Tech-Fleece-Hoodie-Joggers-Set-Stadium-Green-Sail.jpg",
    color: "#2a6a3a"
  },

  // ── PRODUCTO 344: Reversible Jacket - Black ────────────────────
  {
    id: "bape-reversible-jacket-black",
    nombre: "Reversible Jacket - Black",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro total",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Xk6WyBCc/Nike-x-NOCTA-Tech-Fleece-Hoodie-Joggers-Set-Black.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 345: Reversible Jacket - Black ────────────────────
  {
    id: "bape-reversible-jacket-black",
    nombre: "Reversible Jacket - Black",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negro clásico",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/1tyyNTz2/moonboot-negra.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 346: Reversible Jacket - Blanca 1 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-1",
    nombre: "Reversible Jacket - Blanca 1",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Q7Nywv1n/open1867150125-1234478995-275000000196693b3e480a8115c2-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 347: Reversible Jacket - Negra 1 ────────────────────
  {
    id: "bape-reversible-jacket-negra-1",
    nombre: "Reversible Jacket - Negra 1",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/kgWjwHD1/open1867150125-1234478995-2b3300000196693b3bd60aa0834c-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 348: Reversible Jacket - Blanca 2 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-2",
    nombre: "Reversible Jacket - Blanca 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/VKn04jR/open1867150125-1234478995-2b3500000196693b4a570aa0834c-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 349: Reversible Jacket - Blanca 3 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-3",
    nombre: "Reversible Jacket - Blanca 3",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/5gXGRK1k/open1867150125-1234478995-2b3900000196693b5ad90aa0834c-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 350: Reversible Jacket - Gris ────────────────────
  {
    id: "bape-reversible-jacket-gris",
    nombre: "Reversible Jacket - Gris",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Gris",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/0VhDxT0f/open1867150125-1234478995-2b4300000196693b79a20aa0834c-800-800-jpg.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 351: Reversible Jacket - Blanca 4 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-4",
    nombre: "Reversible Jacket - Blanca 4",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/M5fyG4dY/open1867150125-1234478995-11d100000196693b422b0a23b491-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 352: Reversible Jacket - Negra 2 ────────────────────
  {
    id: "bape-reversible-jacket-negra-2",
    nombre: "Reversible Jacket - Negra 2",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/XZvBqkkT/open1867150125-1234478995-15d400000196693b445b0a231226-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 353: Reversible Jacket - Negra 3 ────────────────────
  {
    id: "bape-reversible-jacket-negra-3",
    nombre: "Reversible Jacket - Negra 3",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/TDcNFDsK/open1867150125-1234478995-15da00000196693b54f30a231226-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 354: Reversible Jacket - Blanca 5 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-5",
    nombre: "Reversible Jacket - Blanca 5",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/3mySmQKk/open1867150125-1234478995-15e000000196693b75230a231226-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 355: Reversible Jacket - Blanca 6 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-6",
    nombre: "Reversible Jacket - Blanca 6",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/bMpJ6Ctf/open1867150125-1234478995-15e600000196693b84f70a231226-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 356: Reversible Jacket - Negra 4 ────────────────────
  {
    id: "bape-reversible-jacket-negra-4",
    nombre: "Reversible Jacket - Negra 4",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/tPCVQ1Q7/open1867150125-1234478995-20be00000196693b403d0a22d249-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 357: Reversible Jacket - Negra 5 ────────────────────
  {
    id: "bape-reversible-jacket-negra-5",
    nombre: "Reversible Jacket - Negra 5",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/sJHVHqNh/open1867150125-1234478995-20c400000196693b50da0a22d249-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 358: Reversible Jacket - Blanca 7 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-7",
    nombre: "Reversible Jacket - Blanca 7",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/XkpXZbff/open1867150125-1234478995-20c600000196693b62ef0a22d249-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 359: Reversible Jacket - Negra 6 ────────────────────
  {
    id: "bape-reversible-jacket-negra-6",
    nombre: "Reversible Jacket - Negra 6",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/GQpZ2vhN/open1867150125-1234478995-20ca00000196693b72e30a22d249-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 360: Reversible Jacket - Negra 7 ────────────────────
  {
    id: "bape-reversible-jacket-negra-7",
    nombre: "Reversible Jacket - Negra 7",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/r2R4DYBT/open1867150125-1234478995-20d000000196693b80700a22d249-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 361: Reversible Jacket - Negra 8 ────────────────────
  {
    id: "bape-reversible-jacket-negra-8",
    nombre: "Reversible Jacket - Negra 8",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/BH27LH3D/open1867150125-1234478995-30a000000196693b48700a8133b0-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 362: Reversible Jacket - Negra 9 ────────────────────
  {
    id: "bape-reversible-jacket-negra-9",
    nombre: "Reversible Jacket - Negra 9",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/YBYLw5hf/open1867150125-1234478995-30a600000196693b59070a8133b0-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 363: Reversible Jacket - Negra 10 ────────────────────
  {
    id: "bape-reversible-jacket-negra-10",
    nombre: "Reversible Jacket - Negra 10",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/8DWy8v6N/open1867150125-1234478995-30ae00000196693b77680a8133b0-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 364: Reversible Jacket - Blanca 8 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-8",
    nombre: "Reversible Jacket - Blanca 8",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/yBBPB7S7/open1867150125-1234478995-30b200000196693b88ea0a8133b0-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 365: Reversible Jacket - Blanca 9 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-9",
    nombre: "Reversible Jacket - Blanca 9",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/LdXLt5CY/open1867150125-1234478995-213b00000196693b70e50aa08290-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 366: Reversible Jacket - Blanca 10 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-10",
    nombre: "Reversible Jacket - Blanca 10",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/TDkPTCnd/open1867150125-1234478995-309e00000196693b39e90a8133b0-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 367: Reversible Jacket - Negra 11 ────────────────────
  {
    id: "bape-reversible-jacket-negra-11",
    nombre: "Reversible Jacket - Negra 11",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/MD8f9Lbc/open1867150125-1234478995-275400000196693b4cea0a8115c2-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 368: Reversible Jacket - Negra 12 ────────────────────
  {
    id: "bape-reversible-jacket-negra-12",
    nombre: "Reversible Jacket - Negra 12",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/5xX3WqCV/open1867150125-1234478995-276000000196693b7c850a8115c2-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 369: Reversible Jacket - Blanca 11 ────────────────────
  {
    id: "bape-reversible-jacket-blanca-11",
    nombre: "Reversible Jacket - Blanca 11",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Blanca",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/DcPkKjJ/open1867150125-1234478995-276200000196693b8d1a0a8115c2-800-800-jpg.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 370: Reversible Jacket - Negra 13 ────────────────────
  {
    id: "bape-reversible-jacket-negra-13",
    nombre: "Reversible Jacket - Negra 13",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/rGXJBXQG/open1867150125-1234478995-328200000196693b86f40a23b4de-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 371: Reversible Jacket - Negra 14 ────────────────────
  {
    id: "bape-reversible-jacket-negra-14",
    nombre: "Reversible Jacket - Negra 14",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Negra",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/0jq1WF1H/pcitem1934672132-7b7e00000198c3f93b950a20e7c7-800-800-jpg.jpg",
    color: "#111111"
  },

  // ── PRODUCTO 372: Reversible Jacket - Colección ────────────────────
  {
    id: "bape-reversible-jacket-colecci-n",
    nombre: "Reversible Jacket - Colección",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Vista de los 3 colorways",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/wZD4LHFT/bape-reversible-las-3-lado-lado.jpg",
    color: "#888888"
  },

  // ── PRODUCTO 373: Reversible Jacket - Blanca/Camo ────────────────────
  {
    id: "bape-reversible-jacket-blanca-camo",
    nombre: "Reversible Jacket - Blanca/Camo",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Lado blanco / lado camo reversible",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/HTMN1ySf/bape-reversible-blanca-lado-camo.jpg",
    color: "#f0f0f0"
  },

  // ── PRODUCTO 374: Reversible Jacket - Verde/Camo ────────────────────
  {
    id: "bape-reversible-jacket-verde-camo",
    nombre: "Reversible Jacket - Verde/Camo",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Lado verde / lado camo reversible",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/gnfbzhk/bape-reversible-verde-lado-camo.jpg",
    color: "#2a6a3a"
  },

  // ── PRODUCTO 375: Reversible Jacket - Azul/Camo ────────────────────
  {
    id: "bape-reversible-jacket-azul-camo",
    nombre: "Reversible Jacket - Azul/Camo",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Lado azul / lado camo reversible",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S","M","L","XL"],
    imagen: "https://i.ibb.co/Y48vLBfB/bape-reversible-azul-lado-camo.jpg",
    color: "#1a3a6a"
  }
];