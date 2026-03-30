// ================================================================
//  PRODUCTOS.JS — Base de datos del catálogo
//  Para agregar un producto: copiá un bloque { ... } y editá los campos.
//  Para quitar uno: borrá el bloque completo.
//  Para cambiar el precio: editá solo el campo "precio".
// ================================================================

const PRODUCTOS = [

  // ── PRODUCTO 1: BAPE Shark Full Zip Hoodie ────────────────────
  {
    id: "bape-shark-full-zip",
    nombre: "Shark Full Zip Hoodie",
    marca: "BAPE",
    precio: 79999,
    descripcion: "Icónica hoodie con full zip y capucha shark. Construcción premium, interior de felpa suave. Importada directo.",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "Pink Camo", descripcion: "Camuflado rosa clásico", imagen: "https://i.ibb.co/qY4G2PQV/Bape-Full-Zip-Pink-Camo.jpg", color: "#e8a0b4" },
      { nombre: "1st Camo Shark Black Green", descripcion: "Camuflado verde militar con shark negro", imagen: "https://i.ibb.co/7NYLsNHH/Bape-Full-Zip-1st-Camo-Shark-Black-Green.jpg", color: "#3a5a2a" },
      { nombre: "Blue Pink Camo", descripcion: "Camuflado azul con detalles rosa", imagen: "https://i.ibb.co/4g9JVnWw/Bape-Full-Zip-Blue-Pink-Camo.jpg", color: "#6a8ecc" },
      { nombre: "White Camo", descripcion: "Camuflado blanco clásico", imagen: "https://i.ibb.co/Mb8T5mp/Bape-Full-Zip-White-Camo.jpg", color: "#e8e8e8" },
      { nombre: "Dream Camo", descripcion: "Camo multicolor dream edition", imagen: "https://i.ibb.co/1Gqyb8wT/Bape-Full-Zip-Dream-Camo.jpg", color: "#b08ec0" },
      { nombre: "Nigo's Camo", descripcion: "Edición especial Nigo", imagen: "https://i.ibb.co/nqQC7Ly2/Bape-Full-Zip-Nigo-s-Camo.jpg", color: "#8a6a4a" },
      { nombre: "Black White Camo", descripcion: "Camuflado negro y blanco", imagen: "https://i.ibb.co/7Jqth0P2/Bape-Full-Zip-Up-Black-White-Camo.jpg", color: "#444444" },
      { nombre: "Black Grey Camo", descripcion: "Camuflado negro y gris", imagen: "https://i.ibb.co/JRdhqMnx/Bape-Full-Zip-Black-Grey-Camo.jpg", color: "#2a2a2a" },
      { nombre: "Strass Black Camo", descripcion: "Camo negro con strass brillante", imagen: "https://i.ibb.co/0yjSHMRh/Bape-Full-Zip-Strass-Black-Camo.jpg", color: "#1a1a1a" },
      { nombre: "White Coloured Camo", descripcion: "Camo blanco con detalles de colores", imagen: "https://i.ibb.co/nNhhNxNF/Bape-Full-Zip-White-Coloured-Camo.jpg", color: "#f0ece0" },
      { nombre: "Orange Black Camo", descripcion: "Camuflado naranja y negro", imagen: "https://i.ibb.co/MDZgGZqc/Bape-Full-Zip-Orange-Black-Camo.jpg", color: "#d4601a" },
      { nombre: "Black Half Camo", descripcion: "Mitad negro liso, mitad camo", imagen: "https://i.ibb.co/q3wp0jwT/Bape-Full-Zip-Black-Half-Camo.jpg", color: "#111111" },
      { nombre: "Green Camo", descripcion: "Camuflado verde militar", imagen: "https://i.ibb.co/67QMBjdZ/Bape-Full-Zip-Green-Camo.jpg", color: "#4a7a3a" },
      { nombre: "White Half Grey Camo", descripcion: "Mitad blanca, mitad camo gris", imagen: "https://i.ibb.co/9Hyj3G3F/Bape-Full-Zip-White-Half-Grey-Camo.jpg", color: "#c8c8c8" },
      { nombre: "Green Light Blue Camo", descripcion: "Camuflado verde y celeste", imagen: "https://i.ibb.co/KcBrDvFx/Bape-Full-Zip-Up-Green-Light-Blue-Camo.jpg", color: "#5aaa8a" },
      { nombre: "Patchwork Camo v1", descripcion: "Patchwork de camuflados combinados", imagen: "https://i.ibb.co/MyqgsPGX/Bape-Full-Zip-Patchwork-Camo-1.jpg", color: "#7a6a5a" },
      { nombre: "Light Blue Camo", descripcion: "Camuflado azul cielo", imagen: "https://i.ibb.co/jStgjt2/Bape-Full-Zip-Light-Blue-Camo.jpg", color: "#80b8e0" },
      { nombre: "Purple Camo", descripcion: "Camuflado lila violeta", imagen: "https://i.ibb.co/vxgDyYdC/Bape-Full-Zip-Purple-Camo.jpg", color: "#8a50c0" },
      { nombre: "Pink Camo v2", descripcion: "Rosa alternativo — segunda versión", imagen: "https://i.ibb.co/8nMYjGbT/Bape-Full-Zip-Pink-Camo-1.jpg", color: "#f0a0c0" },
      { nombre: "Dark Purple Camo", descripcion: "Camuflado violeta oscuro", imagen: "https://i.ibb.co/gnk3SSn/Bape-Full-Zip-Dark-Purple-Camo.jpg", color: "#4a1a6a" },
      { nombre: "Patchwork Camo v2", descripcion: "Patchwork edición alternativa", imagen: "https://i.ibb.co/ccTWp54F/Bape-Full-Zip-Patchwork-Camo.jpg", color: "#9a8a6a" },
      { nombre: "Dark Green Camo", descripcion: "Verde profundo oscuro", imagen: "https://i.ibb.co/r20x5DyC/Bape-Full-Zip-Dark-Green-Camo.jpg", color: "#1e3a1e" },
      { nombre: "Black White Camo v2", descripcion: "Negro y blanco versión alternativa", imagen: "https://i.ibb.co/LzDvzsK9/Bape-Full-Zip-Black-White-Camo.jpg", color: "#333333" },
      { nombre: "Dark Blue Camo", descripcion: "Azul marino oscuro", imagen: "https://i.ibb.co/0jsP2Xcb/Bape-Full-Zip-Dark-Blue-Camo.jpg", color: "#0a1a3a" },
      { nombre: "Yellow Camo", descripcion: "Camuflado amarillo vibrante", imagen: "https://i.ibb.co/SXFhVpRn/Bape-Full-Zip-Yellow-Camo.jpg", color: "#d4c01a" },
      { nombre: "Black White Stars", descripcion: "Estampado de estrellas negro y blanco", imagen: "https://i.ibb.co/gbWQMwhz/Bape-Full-Zip-Black-White-Stars.jpg", color: "#222222" },
      { nombre: "Pastel Camo", descripcion: "Camo en tonos pastel suaves", imagen: "https://i.ibb.co/SwYPP5G2/Bape-Full-Zip-Pastel-Camo.jpg", color: "#d0c0e8" },
      { nombre: "Red Camo", descripcion: "Camuflado rojo intenso", imagen: "https://i.ibb.co/F4Nsx0CX/Bape-Full-Zip-Red-Camo.jpg", color: "#aa1a1a" },
      { nombre: "Classic Olive Camo", descripcion: "Oliva clásico — el original", imagen: "https://i.ibb.co/zWjypNtS/Bape-Full-Zip-Classic-Olive-Camo.jpg", color: "#6a7a3a" },
      { nombre: "Pink Light Blue Camo", descripcion: "Rosa y celeste combinados", imagen: "https://i.ibb.co/Nns0VRJG/Bape-Full-Zip-Pink-Light-Blue-Camo.jpg", color: "#d4a0d0" },
      { nombre: "Acqua Blue Camo", descripcion: "Camuflado aqua turquesa", imagen: "https://i.ibb.co/JWsYX9f6/Bape-Full-Zip-Acqua-Blue-Camo.jpg", color: "#1ac0c0" },
      { nombre: "White Camo v2", descripcion: "Blanco alternativo segunda versión", imagen: "https://i.ibb.co/rRYpqFnm/Bape-Full-Zip-White-Camo-1.jpg", color: "#f5f5f0" },
      { nombre: "Black Pastel Camo", descripcion: "Negro con detalles pastel", imagen: "https://i.ibb.co/XqBGrNW/Bape-Full-Zip-Black-Pastel-Camo.jpg", color: "#1e1e2e" },
      { nombre: "Black Grey White Camo", descripcion: "Triple tono: negro, gris y blanco", imagen: "https://i.ibb.co/RGxHcfp8/Bape-Full-Zip-Black-Grey-White-Camo.jpg", color: "#555555" },
      { nombre: "Black Camo", descripcion: "Camuflado negro total", imagen: "https://i.ibb.co/DHY7JWth/Bape-Full-Zip-Black-Camo.jpg", color: "#0a0a0a" },
      { nombre: "x PSG Blue", descripcion: "Collab BAPE x Paris Saint-Germain — edición limitada", imagen: "https://i.ibb.co/vvxkcCQD/Bape-x-PSG-Full-Zip.jpg", color: "#00408a" }
    ]
  },

  // ── PRODUCTO 2: BAPE Double Full Zip Hoodie ───────────────────
  {
    id: "bape-double-full-zip",
    nombre: "Double Hood Full Zip",
    marca: "BAPE",
    precio: 89999,
    descripcion: "Hoodie con doble cierre full zip. Dos cremalleras YKK, construcción más elaborada. Edición premium del clásico shark.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "Purple", descripcion: "Lila sólido con logo bordado", imagen: "https://i.ibb.co/7NRLxPJX/Bape-Double-Full-Zip-Purple.jpg", color: "#7a3aaa" },
      { nombre: "Blue Camo Double", descripcion: "Camo azul en corte doble zip", imagen: "https://i.ibb.co/9HW7WSHZ/Bape-Full-Zip-Blue-Camo-Double.jpg", color: "#2a5a9a" },
      { nombre: "Pink Light Blue Camo", descripcion: "Rosa y celeste — doble zip", imagen: "https://i.ibb.co/dszhLmgY/Bape-Double-Full-Zip-Pink-Light-Blue-Camo.jpg", color: "#e0a0cc" },
      { nombre: "White Camo", descripcion: "Camo blanco en versión doble zip", imagen: "https://i.ibb.co/chStVTZs/Bape-Double-Full-Zip-White-Camo.jpg", color: "#e8e8e8" },
      { nombre: "Purple Camo", descripcion: "Camuflado violeta — doble zip", imagen: "https://i.ibb.co/6JGWB4Yy/Bape-Double-Full-Zip-Purple-Camo.jpg", color: "#6030a0" },
      { nombre: "Black Light Blue Camo", descripcion: "Negro con toques celeste", imagen: "https://i.ibb.co/k2yY5ZwN/Bape-Double-Full-Zip-Black-Light-Blue-Camo.jpg", color: "#1a2a4a" },
      { nombre: "White Grey Camo", descripcion: "Blanco y gris — doble zip", imagen: "https://i.ibb.co/ymxdr11j/Bape-Double-Full-Zip-White-Grey-Camo.jpg", color: "#b8b8b8" },
      { nombre: "Dark Blue Camo", descripcion: "Azul oscuro profundo", imagen: "https://i.ibb.co/Tx88W6zC/Bape-Double-Full-Zip-Dark-Blue-Camo.jpg", color: "#0a1830" },
      { nombre: "White Black Camo", descripcion: "Blanco y negro combinados", imagen: "https://i.ibb.co/S17GVrf/Bape-Double-Full-Zip-White-Black-Camo.jpg", color: "#d0d0d0" },
      { nombre: "Red Camo Variant", descripcion: "Rojo variante especial double", imagen: "https://i.ibb.co/5XDb7dQZ/Bape-Double-Variant-Full-Zip-Red-Camo.jpg", color: "#c01a1a" },
      { nombre: "Red Camo", descripcion: "Rojo camuflado clásico — doble zip", imagen: "https://i.ibb.co/wr8NyHZw/Bape-Double-Full-Zip-Red-Camo.jpg", color: "#8a0a0a" },
      { nombre: "Pink Camo", descripcion: "Rosa camuflado — doble zip", imagen: "https://i.ibb.co/sv0BWtPv/Bape-Double-Full-Zip-Pink-Camo.jpg", color: "#e890b8" },
      { nombre: "Black Pink Camo", descripcion: "Negro con detalles rosa", imagen: "https://i.ibb.co/YFChs3m9/Bape-Double-Full-Zip-Black-Pink-Camo.jpg", color: "#2a0a1a" },
      { nombre: "White Grey Camo v2", descripcion: "Blanco y gris segunda versión", imagen: "https://i.ibb.co/zWJwP3wd/Bape-Double-Full-Zip-White-Grey-Camo-1.jpg", color: "#c0c0c0" }
    ]
  },

  // ── PRODUCTO 3: Supreme x MM6 Skull Zip Up Hoodie ─────────────
  {
    id: "supreme-mm6-skull-zip",
    nombre: "x MM6 Skull Zip Up Hoodie",
    marca: "Supreme",
    precio: 99999,
    descripcion: "Collab Supreme x Maison Margiela MM6. Calaveras bordadas en la capucha, construcción premium. Edición limitada, muy difícil de conseguir.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Grey",  descripcion: "Gris con calaveras bordadas en capucha",  imagen: "https://i.ibb.co/939wggVf/9e2b03b9.jpg", color: "#888888" },
      { nombre: "Black", descripcion: "Negro con calaveras bordadas en capucha", imagen: "https://i.ibb.co/RpTk12v2/cf24dd23.jpg", color: "#111111" },
      { nombre: "Green", descripcion: "Verde con calaveras bordadas en capucha", imagen: "https://i.ibb.co/9m3j0cg7/d8b8830d.jpg", color: "#2a5a2a" }
    ]
  },

  // ── PRODUCTO 4: Chrome Hearts Cinturón de Cuero ───────────────
  {
    id: "chrome-hearts-belt",
    nombre: "Leather Belt",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cinturón de cuero genuino Chrome Hearts. 110cm de largo, 3.8cm de alto. Hebilla metálica con cruz grabada, acabado premium. Importado directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["110cm"],
    modelos: [
      { nombre: "Black Cross Silver",       descripcion: "Cuero negro, hebilla plateada con cruz",     imagen: "https://i.ibb.co/0jTs2rW0/57.jpg",      color: "#111111" },
      { nombre: "Black Cross Gold",         descripcion: "Cuero negro, hebilla dorada con cruz",       imagen: "https://i.ibb.co/214BZRJQ/08.jpg",      color: "#1a1a08" },
      { nombre: "Brown Cross Silver",       descripcion: "Cuero marrón, hebilla plateada con cruz",   imagen: "https://i.ibb.co/Fq7xW29N/05.jpg",      color: "#5a3010" },
      { nombre: "Black Multi Cross",        descripcion: "Cuero negro, cruces multicolor",             imagen: "https://i.ibb.co/RTC7wxGG/02.jpg",      color: "#0a0a0a" },
      { nombre: "Black Red Cross",          descripcion: "Cuero negro, cruces rojas",                  imagen: "https://i.ibb.co/ZRLW1NR4/03.jpg",      color: "#1a0000" },
      { nombre: "Black Blue Cross",         descripcion: "Cuero negro, cruces azules",                 imagen: "https://i.ibb.co/j92875Rf/10.jpg",      color: "#00001a" },
      { nombre: "Black Green Cross",        descripcion: "Cuero negro, cruces verdes",                 imagen: "https://i.ibb.co/LDRyTygj/01.jpg",      color: "#001a00" },
      { nombre: "Black Pink Cross",         descripcion: "Cuero negro, cruces rosas",                  imagen: "https://i.ibb.co/3y2nmy1Q/06.jpg",      color: "#1a0010" },
      { nombre: "Black Yellow Cross",       descripcion: "Cuero negro, cruces amarillas",              imagen: "https://i.ibb.co/3ysNfL5H/07.jpg",      color: "#1a1500" },
      { nombre: "White Cross Silver",       descripcion: "Cuero blanco, hebilla plateada con cruz",   imagen: "https://i.ibb.co/XkC70X7h/11.jpg",      color: "#e0e0e0" },
      { nombre: "White Cross Gold",         descripcion: "Cuero blanco, hebilla dorada con cruz",     imagen: "https://i.ibb.co/d4W7mBrB/12.jpg",      color: "#e8e0c8" },
      { nombre: "White Red Cross",          descripcion: "Cuero blanco, cruces rojas",                 imagen: "https://i.ibb.co/ymvChXGY/16.jpg",      color: "#e8d0d0" },
      { nombre: "White Blue Cross",         descripcion: "Cuero blanco, cruces azules",                imagen: "https://i.ibb.co/39nJ3YRh/14.jpg",      color: "#d0d8e8" },
      { nombre: "White Green Cross",        descripcion: "Cuero blanco, cruces verdes",                imagen: "https://i.ibb.co/HfQh82d6/13.jpg",      color: "#d0e8d0" },
      { nombre: "White Pink Cross",         descripcion: "Cuero blanco, cruces rosas",                 imagen: "https://i.ibb.co/KYtpyMG/15.jpg",       color: "#e8d0e0" },
      { nombre: "White Purple Cross",       descripcion: "Cuero blanco, cruces violeta",               imagen: "https://i.ibb.co/RT14mK6g/17.jpg",      color: "#ddd0e8" },
      { nombre: "White Multi Cross",        descripcion: "Cuero blanco, cruces multicolor",            imagen: "https://i.ibb.co/xShSChD7/19.jpg",      color: "#e8e8e8" },
      { nombre: "Brown Multi Cross",        descripcion: "Cuero marrón, cruces multicolor",            imagen: "https://i.ibb.co/k6rW6WVD/18.jpg",      color: "#6a3a18" },
      { nombre: "Brown Red Cross",          descripcion: "Cuero marrón, cruces rojas",                 imagen: "https://i.ibb.co/XfC9vRZ1/21.jpg",      color: "#5a2010" },
      { nombre: "Brown Blue Cross",         descripcion: "Cuero marrón, cruces azules",                imagen: "https://i.ibb.co/5hb1sLzV/23.jpg",      color: "#3a3a5a" },
      { nombre: "Brown Green Cross",        descripcion: "Cuero marrón, cruces verdes",                imagen: "https://i.ibb.co/qMwNGpQk/22.jpg",      color: "#3a5a30" },
      { nombre: "Brown Pink Cross",         descripcion: "Cuero marrón, cruces rosas",                 imagen: "https://i.ibb.co/fJkzRbn/20.jpg",       color: "#5a3040" },
      { nombre: "Brown Purple Cross",       descripcion: "Cuero marrón, cruces violeta",               imagen: "https://i.ibb.co/sp0vgfkc/26.jpg",      color: "#3a2850" },
      { nombre: "Brown Yellow Cross",       descripcion: "Cuero marrón, cruces amarillas",             imagen: "https://i.ibb.co/V0d6V93K/28.jpg",      color: "#5a4a10" },
      { nombre: "Tan Cross Silver",         descripcion: "Cuero canela, hebilla plateada con cruz",   imagen: "https://i.ibb.co/Z1v35pfZ/27.jpg",      color: "#c8a878" },
      { nombre: "Tan Multi Cross",          descripcion: "Cuero canela, cruces multicolor",            imagen: "https://i.ibb.co/cccPNMxg/30.jpg",      color: "#c0a060" },
      { nombre: "Tan Red Cross",            descripcion: "Cuero canela, cruces rojas",                 imagen: "https://i.ibb.co/NqGWQDd/25.jpg",       color: "#c89878" },
      { nombre: "Tan Blue Cross",           descripcion: "Cuero canela, cruces azules",                imagen: "https://i.ibb.co/fYnCMJRS/29.jpg",      color: "#a8b8c8" },
      { nombre: "Tan Green Cross",          descripcion: "Cuero canela, cruces verdes",                imagen: "https://i.ibb.co/Y4gXKhsP/31.jpg",      color: "#a8c0a0" },
      { nombre: "Tan Pink Cross",           descripcion: "Cuero canela, cruces rosas",                 imagen: "https://i.ibb.co/r8LVG4f/32.jpg",       color: "#c8a8b8" },
      { nombre: "Tan Purple Cross",         descripcion: "Cuero canela, cruces violeta",               imagen: "https://i.ibb.co/YTyDtBJ3/33.jpg",      color: "#b0a0c0" },
      { nombre: "Black Silver Chain",       descripcion: "Cuero negro, hebilla con cadena plateada",  imagen: "https://i.ibb.co/XZJcCmLj/37.jpg",      color: "#222222" },
      { nombre: "Black Gold Chain",         descripcion: "Cuero negro, hebilla con cadena dorada",    imagen: "https://i.ibb.co/FbHVVWVB/38.jpg",      color: "#181508" },
      { nombre: "Brown Silver Chain",       descripcion: "Cuero marrón, cadena plateada",             imagen: "https://i.ibb.co/QFKbFm62/39.jpg",      color: "#4a2a10" },
      { nombre: "Brown Gold Chain",         descripcion: "Cuero marrón, cadena dorada",               imagen: "https://i.ibb.co/9mMsFrRN/35.jpg",      color: "#4a3010" },
      { nombre: "Black Floral Silver",      descripcion: "Cuero negro, grabado floral plateado",      imagen: "https://i.ibb.co/wrcY1Ryj/40.jpg",      color: "#0d0d0d" },
      { nombre: "Brown Floral Silver",      descripcion: "Cuero marrón, grabado floral plateado",     imagen: "https://i.ibb.co/Ym0h6Vz/36.jpg",       color: "#5a3520" },
      { nombre: "Black Star Silver",        descripcion: "Cuero negro, hebilla estrella plateada",    imagen: "https://i.ibb.co/Kc6RM09m/42.jpg",      color: "#141414" },
      { nombre: "Black Star Gold",          descripcion: "Cuero negro, hebilla estrella dorada",      imagen: "https://i.ibb.co/qT7wvWr/44.jpg",       color: "#141410" },
      { nombre: "Black Dagger Silver",      descripcion: "Cuero negro, hebilla daga plateada",        imagen: "https://i.ibb.co/ZQzJQmk/43.jpg",       color: "#181818" },
      { nombre: "Black Dagger Gold",        descripcion: "Cuero negro, hebilla daga dorada",          imagen: "https://i.ibb.co/hJxzJ1Kj/41.jpg",      color: "#181810" },
      { nombre: "White Star Silver",        descripcion: "Cuero blanco, hebilla estrella plateada",   imagen: "https://i.ibb.co/YTBYSDvK/45.jpg",      color: "#f0f0f0" },
      { nombre: "White Dagger Silver",      descripcion: "Cuero blanco, hebilla daga plateada",       imagen: "https://i.ibb.co/F4hWXQVy/46.jpg",      color: "#eeeeee" },
      { nombre: "Black Skull Silver",       descripcion: "Cuero negro, hebilla calavera plateada",    imagen: "https://i.ibb.co/R4Pzjtfk/49.jpg",      color: "#0a0a0a" },
      { nombre: "Black Skull Gold",         descripcion: "Cuero negro, hebilla calavera dorada",      imagen: "https://i.ibb.co/chmdFZjt/47.jpg",      color: "#0a0a08" },
      { nombre: "Brown Skull Silver",       descripcion: "Cuero marrón, hebilla calavera plateada",   imagen: "https://i.ibb.co/hxMZ15y0/50.jpg",      color: "#503018" },
      { nombre: "Brown Skull Gold",         descripcion: "Cuero marrón, hebilla calavera dorada",     imagen: "https://i.ibb.co/MDJ8yrbT/48.jpg",      color: "#503010" },
      { nombre: "Black Double Cross Silver",descripcion: "Cuero negro, doble cruz plateada",          imagen: "https://i.ibb.co/XksrCN62/53.jpg",      color: "#0f0f0f" },
      { nombre: "Black Double Cross Gold",  descripcion: "Cuero negro, doble cruz dorada",            imagen: "https://i.ibb.co/HfS42tXN/56.jpg",      color: "#0f0f08" },
      { nombre: "Black CH Logo Gold",       descripcion: "Cuero negro, logo CH grande dorado",        imagen: "https://i.ibb.co/933QkfRL/51.jpg",      color: "#131310" },
      { nombre: "Brown CH Logo Silver",     descripcion: "Cuero marrón, logo CH plateado",            imagen: "https://i.ibb.co/DP0JPCts/54.jpg",      color: "#5a3520" },
      { nombre: "Brown CH Logo Gold",       descripcion: "Cuero marrón, logo CH dorado",              imagen: "https://i.ibb.co/dJ2Ddg68/55.jpg",      color: "#5a3518" }
    ]
  },

  // ── PRODUCTO 5: BAPE Shark Shorts ────────────────────────────
  {
    id: "bape-shark-shorts",
    nombre: "Shark Shorts",
    marca: "BAPE",
    precio: 49999,
    descripcion: "Short deportivo BAPE con diseño shark icónico. Tela premium, elástico ajustable con cordón, bolsillos laterales. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["M", "L", "XL", "XXL", "3XL"],
    modelos: [
      { nombre: "White",       descripcion: "Blanco con logo shark",               imagen: "https://i.ibb.co/23L1zcgq/54-Bape-Shark-Shorts-White.png",       color: "#f0f0f0" },
      { nombre: "Blue",        descripcion: "Azul con logo shark",                 imagen: "https://i.ibb.co/6JHSSj2q/53-Bape-Shark-Shorts-Blue.png",        color: "#2a5a9a" },
      { nombre: "Green",       descripcion: "Verde con logo shark",                imagen: "https://i.ibb.co/b5FqgCg6/52-Bape-Shark-Shorts-Green.png",       color: "#2a7a3a" },
      { nombre: "Pink",        descripcion: "Rosa con logo shark",                 imagen: "https://i.ibb.co/5xw171q5/51-Bape-Shark-Shorts-Pink.png",        color: "#e890b8" },
      { nombre: "Purple",      descripcion: "Violeta con logo shark",              imagen: "https://i.ibb.co/h1cFxckz/55-Bape-Shark-Shorts-Purple.png",      color: "#7a3aaa" },
      { nombre: "Dark Blue",   descripcion: "Azul oscuro con logo shark",          imagen: "https://i.ibb.co/zHjhdSLf/56-Bape-Shark-Shorts-Dark-Blue.png",   color: "#0a1a3a" },
      { nombre: "Red",         descripcion: "Rojo con logo shark",                 imagen: "https://i.ibb.co/YTF01B9F/57-Bape-Shark-Shorts-Red.png",         color: "#aa1a1a" },
      { nombre: "Camo",        descripcion: "Camuflado clásico BAPE",              imagen: "https://i.ibb.co/fVLt3D3M/58-Bape-Shark-Shorts-Camo.png",        color: "#6a7a3a" },
      { nombre: "Black",       descripcion: "Negro con logo shark",                imagen: "https://i.ibb.co/hFBnw5q1/59-Bape-Shark-Shorts-Black.png",       color: "#111111" },
      { nombre: "Gray",        descripcion: "Gris con logo shark",                 imagen: "https://i.ibb.co/0pMScYMT/60-Bape-Shark-Shorts-Gray.png",        color: "#888888" },
      { nombre: "Double Shark",descripcion: "Edición Double Shark — diseño especial", imagen: "https://i.ibb.co/wFSPLz25/61-Bape-Double-Shark-Shorts.png",  color: "#333333" },
      { nombre: "Blue Camo",   descripcion: "Camuflado azul clásico BAPE",         imagen: "https://i.ibb.co/CpWdnwTx/62-Bape-Blue-Camo-Shorts.png",        color: "#2a4a8a" },
      { nombre: "Pink Camo",   descripcion: "Camuflado rosa clásico BAPE",         imagen: "https://i.ibb.co/rGDKf2ZD/63-Bape-Pink-Camo-Shorts.png",        color: "#e8a0c0" }
    ]
  },

  // ── PRODUCTO 6: BAPE x Miami Shorts ──────────────────────────
  {
    id: "bape-x-miami-shorts",
    nombre: "x Miami Shorts",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Collab exclusiva BAPE x Miami. Short con diseño especial de la colección edición Miami. Importado directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M", "L", "XL", "XXL", "3XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco edición Miami", imagen: "https://i.ibb.co/rfb1T9gk/65-Bape-x-Miami-Shorts-White.png", color: "#f0f0f0" },
      { nombre: "Pink",  descripcion: "Rosa edición Miami",   imagen: "https://i.ibb.co/Fb2xBrVJ/64-Bape-x-Miami-Shorts-Pink.png",  color: "#e890b8" },
      { nombre: "Black", descripcion: "Negro edición Miami",  imagen: "https://i.ibb.co/Tf42dg9/66-Bape-x-Miami-Shorts-Black.png",  color: "#111111" }
    ]
  },

  // ── PRODUCTO 7: BAPE x Eric Emanuel Shorts ───────────────────
  {
    id: "bape-x-eric-emanuel-shorts",
    nombre: "x Eric Emanuel Shorts",
    marca: "BAPE",
    precio: 54999,
    descripcion: "Collab BAPE x Eric Emanuel. Short de básquet premium con gráficas exclusivas de la colaboración. Importado directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["M", "L", "XL", "XXL", "3XL"],
    modelos: [
      { nombre: "White",            descripcion: "Blanco — Basket edition",          imagen: "https://i.ibb.co/4n2DYwT9/67-Bape-x-Eric-Emanuel-Basket-Shorts-White.png", color: "#f0f0f0" },
      { nombre: "Purple",           descripcion: "Violeta edición collab",            imagen: "https://i.ibb.co/xS2Pvt8X/68-Bape-x-Eric-Emanuel-Purple.png",              color: "#7a3aaa" },
      { nombre: "Red",              descripcion: "Rojo edición collab",               imagen: "https://i.ibb.co/tRVcHpk/69-Bape-x-Eric-Emanuel-Shorts-Red.png",           color: "#aa1a1a" },
      { nombre: "Black Brown Stars",descripcion: "Negro y marrón con estrellas",      imagen: "https://i.ibb.co/bgdFWXzc/70-Bape-x-Eric-Emanuel-Black-Brown-Stars.png",   color: "#2a1a0a" },
      { nombre: "Brown",            descripcion: "Marrón edición collab",             imagen: "https://i.ibb.co/bMb2fyzb/71-Bape-x-Eric-Emanuel-Shorts-Brown.png",        color: "#6a3a1a" }
    ]
  },

  // ── PRODUCTO 8: Chrome Hearts Zip Up ─────────────────────────
  {
    id: "chrome-hearts-zip-up",
    nombre: "Zip Up Jacket",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Zip up jacket Chrome Hearts. Construcción premium con parches de cruz icónicos y logo CH. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Triple Cross Patch",       descripcion: "Parches triple cruz en frente y espalda",  imagen: "https://i.ibb.co/BVYv4cGC/Chrome-Hearts-Triple-Cross-Patch-Zip-Up.png",          color: "#111111" },
      { nombre: "Quilted Nylon Cross Patch",descripcion: "Nylon acolchado con parche de cruz CH",    imagen: "https://i.ibb.co/V533c5G/Chrome-Hearts-Quilted-Nylon-Cross-Patch-Jacket.png",   color: "#1a1a2a" }
    ]
  },

  // ── PRODUCTO 9: Chrome Hearts Jeans ──────────────────────────
  {
    id: "chrome-hearts-jeans",
    nombre: "Denim Jeans",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Jeans de denim Chrome Hearts. Corte premium, detalles bordados con cruces y logo CH. Talle USA (cintura en pulgadas). Importados directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["28", "29", "30", "31", "32", "33", "34", "35", "36"],
    modelos: [
      { nombre: "Modelo 1",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/8Z4z2gS/650f4a9a-aaba-49ee-a3c8-5139379cb400.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 2",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/3yCz0Qsf/3b77d4f0-bd33-4ecc-93d6-9110d8639d4a.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 3",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/gbWC6D6t/3186eeca-2939-47be-8353-0d82f6f45f2b.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 4",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/JV6t8cK/f0f2a84e-9db9-4e82-945e-51657d0ef940.jpg",   color: "#111111" },
      { nombre: "Modelo 5",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/Hf4CS0Gx/4e23c7c7-35e9-430c-ac3a-59ebc5089997.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 6",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/B2gDCxLj/c6d69887-5228-4e60-878a-5a3472957794.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 7",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/FbkPSXbV/93e15e17-5001-4aa4-a470-ed6a2d5b0575.jpg",  color: "#111111" },
      { nombre: "Modelo 8",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/DDmcc6cB/811173a2-199f-451b-b718-4bb88b738a9b.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 9",  descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/Q39pTtxZ/ee0e26fb-e3b8-4846-b292-f547fff32bde.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 10", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/B51BFPsX/a54aa605-2fcf-4f0e-9983-06d204e4530f.jpg",  color: "#111111" },
      { nombre: "Modelo 11", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/Z6dFM4MD/039c8abd-2d0a-48de-8d3c-74ff636a1eb9.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 12", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/Tx2zkPXD/17cc1fba-ffb2-49c0-b4cf-d0fa20f6c620.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 13", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/G4sjJLBP/bcde5fbb-4c6b-43c9-8328-aa6ff8b6585e.jpg",  color: "#111111" },
      { nombre: "Modelo 14", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/rRSyvWWb/74c92faf-db7a-4668-8ce1-eaf575485771.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 15", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/YFF45p22/95a94aa9-3640-49b7-b4fa-9fe72a5715de.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 16", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/m5VsXrk6/4e120eea-3aba-48f0-b027-bce124dcffd4.jpg",  color: "#111111" },
      { nombre: "Modelo 17", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/HDN4N2fT/2307147b-1540-4d47-a972-9d36e32f2895.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 18", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/Xfq7FC8X/91842e38-d962-41c8-be7e-37382197dfd4.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 19", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/S4TjqwMy/51dcd30c-2501-4dab-ace0-f3252dfa2598.jpg",  color: "#111111" },
      { nombre: "Modelo 20", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/p6nkbmX7/03b942df-7640-43ba-aced-e8296f73da6f.jpg",  color: "#2a3a5a" },
      { nombre: "Modelo 21", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/cc2Vm5hF/120012c1-8f03-4e27-8e13-5adc55741185.jpg",  color: "#1a2a4a" },
      { nombre: "Modelo 22", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/V0S9qyTs/d13f122f-27da-42f6-8d05-779aa9b50adb.jpg",  color: "#111111" },
      { nombre: "Modelo 23", descripcion: "Denim Chrome Hearts", imagen: "https://i.ibb.co/W46gGbgY/2a6204e0-91ac-45fa-b81e-15474d674511.jpg",  color: "#2a3a5a" }
    ]
  },

  // ── PRODUCTO 10: Valley Dreams Denim Shorts ───────────────────
  {
    id: "valley-dreams-denim-shorts",
    nombre: "Denim Shorts",
    marca: "Valley Dreams",
    precio: 79999,
    descripcion: "Short de denim Valley Dreams. Corte holgado streetwear con detalles y lavados originales. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "Blue",  descripcion: "Denim azul clásico",       imagen: "https://i.ibb.co/Z67V27kD/VD-Valley-Denim-Shorts-Blue.jpg",             color: "#2a4a7a" },
      { nombre: "Grey",  descripcion: "Denim gris lavado",         imagen: "https://i.ibb.co/KcG8xLCf/VD-Valley-Denim-Shorts-Grey.jpg",             color: "#888888" },
      { nombre: "White", descripcion: "Denim blanco",              imagen: "https://i.ibb.co/pvmj3FGy/VD-Valley-Denim-Shorts-White.jpg",            color: "#f0f0f0" },
      { nombre: "Brown", descripcion: "Denim marrón Dreams edition",imagen: "https://i.ibb.co/8g3ySnd7/VD-Valley-Dreams-Denim-Shorts-Brown.jpg",    color: "#5a3a1a" },
      { nombre: "Black", descripcion: "Denim negro Dreams edition", imagen: "https://i.ibb.co/vv1xLYGk/VD-Valley-Dreams-Denim-Shorts-Black.jpg",    color: "#111111" }
    ]
  },

  // ── PRODUCTO 11: Valley Dreams Graphic T-Shirt ───────────────
  {
    id: "valley-dreams-tshirt",
    nombre: "Graphic T-Shirt",
    marca: "Valley Dreams",
    precio: 39999,
    descripcion: "Remera de algodón Valley Dreams con gráficas originales de alta calidad. Corte streetwear oversize, serigrafía premium. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "199 X Graphic White",        descripcion: "Gráfica 199 X sobre blanco",                         imagen: "https://i.ibb.co/6RYpKvMs/VD-Other-Valley-Dreams-199-X-Graphic-T-Shirt-White.jpg",              color: "#f0f0f0" },
      { nombre: "Dream Printed Black",        descripcion: "Dream print sobre negro",                            imagen: "https://i.ibb.co/wFMpJf1Z/VD-Valley-Dream-Printed-T-Shirt-Black.jpg",                           color: "#111111" },
      { nombre: "Property of Targer Red",     descripcion: "Property of Targer print sobre rojo",                imagen: "https://i.ibb.co/VYb37b9D/VD-Valley-T-Shirt-Property-of-Targer-Print-Red.jpg",                  color: "#aa1a1a" },
      { nombre: "Ghost Print Black",          descripcion: "Ghost graphic sobre negro",                          imagen: "https://i.ibb.co/R4dH1FfW/VD-Valley-Ghost-Print-T-Shirt-Black.jpg",                             color: "#111111" },
      { nombre: "Jesus Graphic Washed Grey",  descripcion: "Jesus graphic sobre gris lavado",                    imagen: "https://i.ibb.co/5pw5g8k/VD-Jesus-Graphic-T-Shirt-Washed-Grey.jpg",                            color: "#888888" },
      { nombre: "Street Fighter Guile Black", descripcion: "Street Fighter — Guile graphic sobre negro",         imagen: "https://i.ibb.co/v4DBsjgM/VD-Street-Dreams-Street-Fighter-T-Shirt-Guile-Black.jpg",              color: "#111111" },
      { nombre: "Michael Jackson Black",      descripcion: "King of Pop — MJ graphic sobre negro",               imagen: "https://i.ibb.co/TMkZBsVH/VD-Michael-Jackson-T-Shirt-King-of-Pop-Black.jpg",                    color: "#111111" },
      { nombre: "Selena Light Blue",          descripcion: "Selena graphic sobre celeste",                       imagen: "https://i.ibb.co/kVGsg2x9/VD-Selena-T-Shirt-Graphic-Light-Blue.jpg",                            color: "#80b8e0" },
      { nombre: "Rock Graphic Light Blue",    descripcion: "Rock graphic sobre celeste",                         imagen: "https://i.ibb.co/nqpFhNZs/VD-T-Shirt-Rock-Graphic-Light-Blue.jpg",                              color: "#80b8e0" },
      { nombre: "A Better Tomorrow Blue",     descripcion: "Chow Yun-fat graphic sobre azul",                    imagen: "https://i.ibb.co/fz2vTRx2/VD-A-Better-Tomorrow-T-Shirt-Chow-Yun-fat-Graphic-Blue.jpg",           color: "#1a3a6a" },
      { nombre: "All Dogs Go To Heaven White",descripcion: "All Dogs Go To Heaven sobre blanco",                 imagen: "https://i.ibb.co/SwKJDXSZ/VD-All-Dogs-Go-To-Heaven-T-Shirt-White.jpg",                          color: "#f0f0f0" },
      { nombre: "Vale Forever White",         descripcion: "Vale Forever Destroyer King sobre blanco",            imagen: "https://i.ibb.co/SbJMhCC/VD-Vale-Forever-Valley-Dreams-Destroyer-King-T-Shirt-White.jpg",       color: "#f0f0f0" }
    ]
  },

  // ── PRODUCTO 12: Valley Dreams Graphic Hoodie ────────────────
  {
    id: "valley-dreams-hoodie",
    nombre: "Graphic Hoodie",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Hoodie pullover Valley Dreams con gráficas originales. Construcción premium, interior de felpa, capucha amplia. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "High Street Black Blue",   descripcion: "High Street Hooded Jacket negro y azul",    imagen: "https://i.ibb.co/hRF4N2Cb/VD-Original-Valley-High-Street-Hooded-Jacket-Graphic-Print-Black-Blue.jpg", color: "#0a1a3a" },
      { nombre: "Return of Vale Black",     descripcion: "Return of Vale hoodie negro",                imagen: "https://i.ibb.co/20hLktKJ/VD-Return-of-Vale-Sweater-Hooded-Printed-Black.jpg",                          color: "#111111" },
      { nombre: "Original Valley Black Grey",descripcion: "Original Valley sweater negro y gris",     imagen: "https://i.ibb.co/KxhcCRVY/VD-Original-Valley-Sweater-Printed-Graphic-Hooded-Black-Grey.jpg",            color: "#333333" },
      { nombre: "Eagle Jacket White Red",   descripcion: "Hooded jacket eagle print blanco y rojo",   imagen: "https://i.ibb.co/vxNdL7vp/VD-Valley-Hooded-Jacket-Eagle-Graphic-Print-White-Red.jpg",                   color: "#e0e0e0" }
    ]
  },

  // ── PRODUCTO 13: Valley Dreams Zip Sweater ───────────────────
  {
    id: "valley-dreams-zip-sweater",
    nombre: "Zip Sweater",
    marca: "Valley Dreams",
    precio: 59999,
    descripcion: "Sweater con cierre full zip Valley Dreams. Gráficas originales premium, construcción de alta calidad. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "Spider Graphic Black", descripcion: "Spider graphic sobre negro", imagen: "https://i.ibb.co/PGwdbbtP/VD-Other-Original-Valley-Zip-Sweater-Spider-Graphic-Black.jpg",  color: "#111111" },
      { nombre: "Eagle Print Pink",     descripcion: "Eagle print sobre rosa",     imagen: "https://i.ibb.co/dJKMfTQ6/VD-Original-Valley-Dreams-Zip-Sweater-Eagle-Print-Pink.jpg",      color: "#e890b8" }
    ]
  },

  // ── PRODUCTO 14: Valley Dreams Sweatpants ────────────────────
  {
    id: "valley-dreams-sweatpants",
    nombre: "Sweatpants",
    marca: "Valley Dreams",
    precio: 49999,
    descripcion: "Pantalón de buzo Valley Dreams con gráficas originales. Corte holgado streetwear, elástico ajustable con cordón. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL", "XXL"],
    modelos: [
      { nombre: "Loose Graphic White", descripcion: "Estampado gráfico suelto sobre blanco", imagen: "https://i.ibb.co/yB4Y4QWm/VD-Valley-Sweatpants-Loose-Graphic-Print-White.jpg",    color: "#f0f0f0" },
      { nombre: "Vale Dreams Pink",    descripcion: "Vale Dreams print sobre rosa",           imagen: "https://i.ibb.co/ymgNnss8/VD-Valley-Sweatpants-Vale-Dreams-Printed-Pink.jpg",      color: "#e890b8" }
    ]
  },

  // ── PRODUCTO 15: BAPE T-Shirts ────────────────────────────────
  {
    id: "bape-tshirts",
    nombre: "T-Shirts",
    marca: "BAPE",
    precio: 39999,
    descripcion: "Remeras BAPE con los graficos mas iconicOS. Algodon premium, corte oversize. Importadas directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["M", "L", "XL", "XXL", "3XL"],
    modelos: [
      { nombre: "Green Camo Black", descripcion: "Green Camo sobre negro", imagen: "https://i.ibb.co/Kc6mCSL0/95-A-Bathing-Ape-Green-Camo-Black.png", color: "#2a4a2a" },
      { nombre: "Green Camo White", descripcion: "Green Camo sobre blanco", imagen: "https://i.ibb.co/PvszW0JV/94-A-Bathing-Ape-Green-Camo-White.png", color: "#e8f0e8" },
      { nombre: "Purple Camo Black", descripcion: "Purple Camo sobre negro", imagen: "https://i.ibb.co/ZpMDBMsb/93-A-Bathing-Ape-T-Shirt-Purple-Camo-Black.png", color: "#4a2a5a" },
      { nombre: "Purple Camo White", descripcion: "Purple Camo sobre blanco", imagen: "https://i.ibb.co/cmjnJvF/92-A-Bathing-Ape-T-Shirt-Purple-Camo-White.png", color: "#e8e0f0" },
      { nombre: "x Chrome Hearts Black", descripcion: "Collab BAPE x Chrome Hearts sobre negro", imagen: "https://i.ibb.co/2xF1GYN/91-Bape-X-Chrome-Hearts-T-Shirt-Black.png", color: "#111111" },
      { nombre: "x Chrome Hearts White", descripcion: "Collab BAPE x Chrome Hearts sobre blanco", imagen: "https://i.ibb.co/62v6PpL/90-Bape-X-Chrome-Hearts-T-Shirt-White.png", color: "#f0f0f0" },
      { nombre: "x Miami Black", descripcion: "Collab BAPE x Miami sobre negro", imagen: "https://i.ibb.co/hFWQJfZd/89-Bape-X-Miami-T-Shirt-Black.png", color: "#111111" },
      { nombre: "x Miami White", descripcion: "Collab BAPE x Miami sobre blanco", imagen: "https://i.ibb.co/Pzv4pSsn/88-Bape-X-Miami-T-Shirt-White.png", color: "#f0f0f0" },
      { nombre: "x Miami Pink", descripcion: "Collab BAPE x Miami sobre rosa", imagen: "https://i.ibb.co/7tFpMHYX/87-Bape-X-Miami-T-Shirt-Pink.png", color: "#e890b8" },
      { nombre: "World Gone Mad Shark Camo White", descripcion: "Shark Camo sobre blanco", imagen: "https://i.ibb.co/prJGzmY3/86-Bape-World-Gone-Mad-Shark-Camo-White.png", color: "#f0f0f0" },
      { nombre: "World Gone Mad Shark Camo Black", descripcion: "Shark Camo sobre negro", imagen: "https://i.ibb.co/CKr68QFS/85-Bape-World-Gone-Mad-Shark-Camo-Black.png", color: "#1a1a1a" },
      { nombre: "x Heron Preston Purple", descripcion: "Collab BAPE x Heron Preston violeta", imagen: "https://i.ibb.co/g0vM18r/84-Bape-X-Heron-Preston-T-Shirt-Purple.png", color: "#6a3a8a" },
      { nombre: "x Heron Preston White", descripcion: "Collab BAPE x Heron Preston blanco", imagen: "https://i.ibb.co/ccnn2htL/83-Bape-X-Heron-Preston-T-Shirt-White.png", color: "#f0f0f0" },
      { nombre: "x Heron Preston Coral", descripcion: "Collab BAPE x Heron Preston coral", imagen: "https://i.ibb.co/n8zX34tT/82-Bape-X-Heron-Preston-T-Shirt-Corchoal.png", color: "#e89080" },
      { nombre: "Shuffle Ape Head White", descripcion: "Shuffle Ape Head graphic sobre blanco", imagen: "https://i.ibb.co/HTJYKhVc/81-Bape-Shuffle-Ape-Head-T-Shirt-White.png", color: "#f0f0f0" },
      { nombre: "Shuffle Ape Head Black", descripcion: "Shuffle Ape Head graphic sobre negro", imagen: "https://i.ibb.co/LdF1Fgpx/80-Bape-Shuffle-Ape-Head-T-Shirt-Black.png", color: "#111111" },
      { nombre: "Baby Milo Camo Ape Head Light Blue", descripcion: "Baby Milo Camo Ape Head celeste", imagen: "https://i.ibb.co/mCKvDnR7/79-Bape-Baby-Milo-T-Shirt-Camo-Ape-Head-Light-Blue.png", color: "#80b8d0" },
      { nombre: "Baby Milo Camo Ape Head Pink", descripcion: "Baby Milo Camo Ape Head rosa", imagen: "https://i.ibb.co/9knGpCZk/78-Bape-Baby-Milo-T-Shirt-Camo-Ape-Head-Pink.png", color: "#e8a0b8" },
      { nombre: "Baby Milo Camo Ape Head Beige", descripcion: "Baby Milo Camo Ape Head beige", imagen: "https://i.ibb.co/m5kr8K9s/77-Bape-Baby-Milo-T-Shirt-Camo-Ape-Head-Beige.png", color: "#d0c0a0" },
      { nombre: "Big Ape Head White", descripcion: "Big Ape Head sobre blanco", imagen: "https://i.ibb.co/Q7cP38PH/76-Bape-T-Shirt-Big-Ape-Head-White.png", color: "#f0f0f0" },
      { nombre: "Big Ape Head Black", descripcion: "Big Ape Head sobre negro", imagen: "https://i.ibb.co/6JbwGLMc/75-Bape-T-Shirt-Big-Ape-Head-Black.png", color: "#111111" },
      { nombre: "World Gone Wild Red", descripcion: "World Gone Wild rojo", imagen: "https://i.ibb.co/zW1ryXk4/74-Bape-T-Shirt-World-Gone-Wild-Red.png", color: "#aa2020" },
      { nombre: "World Gone Mad White", descripcion: "World Gone Mad sobre blanco", imagen: "https://i.ibb.co/39qM0gFz/73-Bape-T-Shirt-World-Gone-Mad-White.png", color: "#f0f0f0" },
      { nombre: "World Gone Mad Black", descripcion: "World Gone Mad sobre negro", imagen: "https://i.ibb.co/FbdXS9xZ/72-Bape-T-Shirt-World-Gone-Mad-Black.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 16: BAPE Bapesta Sneakers ───────────────────────
  {
    id: "bape-bapesta",
    nombre: "Bapesta",
    marca: "BAPE",
    precio: 109999,
    descripcion: "Iconicas zapatillas Bapesta. Silueta reconocible worldwide, construcción premium. Importadas directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["38", "39", "40", "41", "42", "43", "44"],
    modelos: [
      { nombre: "Black",     descripcion: "Negro clásico",                      imagen: "https://i.ibb.co/9HXgwZsp/00779b52-ccd5-4a00-ae57-ea1d658d8a60-jpg.jpg",        color: "#111111" },
      { nombre: "White",     descripcion: "Blanco clásico",                    imagen: "https://i.ibb.co/HTGx5vgD/57251a7b-2776-421a-b303-d34932b5543e-jpg.jpg",        color: "#f0f0f0" },
      { nombre: "Blue",      descripcion: "Azul BAPE",                         imagen: "https://i.ibb.co/Ngp7q7w5/67921b7e-ee64-4890-9848-b89686c9fa49-jpg.jpg",        color: "#1a4a8a" },
      { nombre: "Red",       descripcion: "Rojo clásico",                      imagen: "https://i.ibb.co/RphGmH93/94640f07-329f-441c-84c4-1b69da3730c4-jpg.jpg",        color: "#aa1a1a" },
      { nombre: "Pink",      descripcion: "Rosa BAPE",                         imagen: "https://i.ibb.co/NgXX7Wqr/b58cc857-ed63-43d1-8610-908f7c062e45-jpg.jpg",        color: "#e890b8" },
      { nombre: "Purple",    descripcion: "Violeta",                           imagen: "https://i.ibb.co/CpmYK8gq/bd089cca-bace-481b-bd12-47aa63ad1e7d-jpg.jpg",        color: "#7a3aaa" },
      { nombre: "Yellow",    descripcion: "Amarillo",                          imagen: "https://i.ibb.co/99gJk8X7/cdfa6291-e15a-4205-8c57-da6d670ed971-jpg.jpg",        color: "#d4c01a" },
      { nombre: "Green",     descripcion: "Verde",                             imagen: "https://i.ibb.co/pvmQrJZ4/e0a9286d-19b3-4e41-b8ee-28b6b0bd3af5-jpg.jpg",        color: "#2a7a3a" },
      { nombre: "Orange",    descripcion: "Naranja",                           imagen: "https://i.ibb.co/k2VQQSDX/f05cf122-b01a-4028-81f8-28d40e2c4564-jpg.jpg",        color: "#d4601a" },
      { nombre: "Grey",      descripcion: "Gris",                               imagen: "https://i.ibb.co/fG1y9rMk/f18ad2b9-3bb7-458d-b7d9-65aa904214b0-jpg.jpg",        color: "#888888" },
      { nombre: "Navy",      descripcion: "Azul marino",                       imagen: "https://i.ibb.co/Rp214p7z/fa70b465-6d3e-434d-bf0e-ef4d1c3c54f1-jpg.jpg",        color: "#0a1a3a" },
      { nombre: "Camo Green",descripcion: "Camo verde militar",                imagen: "https://i.ibb.co/C5r0GYwf/2d93ebcf-cc3f-4b8b-b69e-498ff99857db-jpg.jpg",        color: "#4a6a3a" },
      { nombre: "Camo Brown",descripcion: "Camo marrón",                        imagen: "https://i.ibb.co/HDnLsyyr/5a5683c7-896e-450e-84ba-74a5ec2e13cc-jpg.jpg",        color: "#5a3a1a" },
      { nombre: "Gold",      descripcion: "Dorado",                            imagen: "https://i.ibb.co/jkCStR87/5f6985c8-bd52-4cd6-8bc5-0135f795528c-jpg.jpg",        color: "#d4a01a" },
      { nombre: "Silver",     descripcion: "Plata",                             imagen: "https://i.ibb.co/kPdtS6R/6a0f285c-4d87-4aac-8e4e-3fd1d3b0b1d3-jpg.jpg",        color: "#c0c0c0" },
      { nombre: "Black Gold",descripcion: "Negro con detalles dorados",        imagen: "https://i.ibb.co/5VznsBS/6f9fe105-3ac7-4a8a-bbc8-a4a77cbce1e7-jpg.jpg",        color: "#1a1a08" },
      { nombre: "White Blue",descripcion: "Blanco y azul",                     imagen: "https://i.ibb.co/MDrCXpmM/7a329582-e838-4601-9ddd-cb6ac500fc8b-jpg.jpg",        color: "#6a8ecc" },
      { nombre: "White Red", descripcion: "Blanco y rojo",                     imagen: "https://i.ibb.co/8nMX3xcm/7d69ec8a-ac9c-4bed-8870-2177aec1c549-jpg.jpg",        color: "#e8e8e8" },
      { nombre: "Black Red",  descripcion: "Negro y rojo",                      imagen: "https://i.ibb.co/wNsyggtT/8c9897fb-bcf5-4c8c-895d-421ef6b43082-jpg.jpg",        color: "#2a0a0a" },
      { nombre: "Black White",descripcion: "Negro y blanco",                   imagen: "https://i.ibb.co/BdKFwxH/26e9e444-bbb0-48ad-bf19-502d3e35ba02-jpg.jpg",        color: "#333333" },
      { nombre: "Pink White", descripcion: "Rosa y blanco",                    imagen: "https://i.ibb.co/dsx1jnjF/48f902ad-e15c-4734-8221-ee75f1feb1df-jpg.jpg",        color: "#e8c0d0" },
      { nombre: "Green Camo v2",descripcion: "Camo verde segunda versión",     imagen: "https://i.ibb.co/YBkkWdnT/69fb3212-caf6-4e74-a5c1-817622b1d1ad-jpg.jpg",        color: "#3a5a2a" },
      { nombre: "Light Blue", descripcion: "Azul claro",                       imagen: "https://i.ibb.co/nszG7bRc/88f963d1-c9b3-4d25-b38f-9d99cc43cfc7-jpg.jpg",        color: "#80b8e0" }
    ]
  },

  // ── PRODUCTO 17: Timberland ────────────────────────────────────
  {
    id: "timberland",
    nombre: "Timberland Premium 6",
    marca: "Timberland",
    precio: 114999,
    descripcion: "Botas Timberland Premium 6 classic. Cuero premium waterproof, suela antideslizante. Icono del streetwear. Importadas directo.",
    disponible: true,
    etiqueta: "Classic",
    talles: ["40", "41", "42", "43", "44", "45", "46"],
    modelos: [
      { nombre: "Wheat", descripcion: "Wheat - amarillo clásico", imagen: "https://i.ibb.co/cKYJQCh6/Timberland-Premium-6-Inch-Waterproof-Boot-for-Men-in-Yellow-TBL-Yellow-MKTG1-1.jpg", color: "#d4a01a" },
      { nombre: "Black", descripcion: "Black - negro clásico", imagen: "https://i.ibb.co/QFsXB8WD/Timberland-Premium-6-Inch-Waterproof-Boot-for-Men-in-Black-TBL-ALT8.jpg", color: "#111111" }
    ]
  },

  // ── PRODUCTO 18: BAPE x Undefeated x Timberland ────────────────
  {
    id: "bape-undefeated-timberland",
    nombre: "x Undefeated Timberland",
    marca: "BAPE",
    precio: 129999,
    descripcion: "Colaboracion exclusiva BAPE x Undefeated x Timberland. Botas clsasicas de cuero premium con detalles de las 3 marcas. Importadas directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["40", "41", "42", "43", "44", "45", "46"],
    modelos: [
      { nombre: "Nubuck Camo", descripcion: "Nubuck Camo - BAPE x Undefeated x Timberland", imagen: "https://i.ibb.co/5hzrXhHs/1681856724-undefeated-a-bathing-ape-timberland-release-date-price-011.jpg", color: "#1a1a1a" }
    ]
  },
  // ── PRODUCTO 20: Chrome Hearts Monogram Cross Pocket T ───────
  {
    id: "chrome-hearts-monogram-cross-pocket",
    nombre: "Monogram Cross Print Pocket T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con bolsillo y cruz monograma. Algodón premium, corte oversize. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/zHtj7D6k/86-Chrome-Hearts-Monogram-Cross-Print-Pocket-T-Shirt-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 21: Chrome Hearts Multi Logo Triple Cross Star ────
  {
    id: "chrome-hearts-multi-logo-triple-cross-star",
    nombre: "Multi Logo T-Shirt with Embroidered Triple Cross and Star",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con triple cruz y estrella bordadas. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/VYmsLQm1/85-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Triple-Cross-and-Star-1-en-blanco-y-1-en-negr.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/VYmsLQm1/85-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Triple-Cross-and-Star-1-en-blanco-y-1-en-negr.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 22: Chrome Hearts Fleur-de-Lis Coaches Jacket ───────
  {
    id: "chrome-hearts-fleur-de-lis-coaches",
    nombre: "Fleur-de-Lis Patch Coaches Jacket",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Coaches jacket Chrome Hearts con parche fleur-de-lis. Cuero y tela premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/1Jtfvfmp/84-Chrome-Hearts-Fleur-de-Lis-Patch-Coaches-Jacket-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 23: Chrome Hearts Matty Boy Chomper Horseshoe ───────
  {
    id: "chrome-hearts-matty-boy-chomper",
    nombre: "Matty Boy Chomper Horseshoe T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts Matty Boy con logo horseshoe. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/XxbHRm14/83-Chrome-Hearts-Matty-Boy-Chomper-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/XxbHRm14/83-Chrome-Hearts-Matty-Boy-Chomper-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 24: Chrome Hearts Vertical Cross Turtle Neck ─────────
  {
    id: "chrome-hearts-vertical-cross-turtleneck",
    nombre: "Vertical Cross Patch Turtle Neck Knit Sweater",
    marca: "Chrome Hearts",
    precio: 119999,
    descripcion: "Sweater turtle neck Chrome Hearts con parche de cruz vertical. Tejido de punto premium, diseño exclusivo. Importado directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Grey", descripcion: "Gris", imagen: "https://i.ibb.co/hRxYc9zf/82-Chrome-Hearts-Vertical-Cross-Patch-Turtle-Neck-Knit-Sweater-1-en-gris-y-1-en-negro.png", color: "#888888" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/hRxYc9zf/82-Chrome-Hearts-Vertical-Cross-Patch-Turtle-Neck-Knit-Sweater-1-en-gris-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 25: Chrome Hearts Multi Logo Crosses Stars ──────────
  {
    id: "chrome-hearts-multi-logo-crosses-stars",
    nombre: "Multi Logo T-Shirt with Embroidered Crosses and Stars",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con cruces y estrellas bordadas. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/SDXjnYQ7/81-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Crosses-and-Stars-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/SDXjnYQ7/81-Chrome-Hearts-Multi-Logo-T-Shirt-with-Embroidered-Crosses-and-Stars-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 26: Chrome Hearts Horseshoe Sherpa Fleece ───────────
  {
    id: "chrome-hearts-horseshoe-sherpa-fleece",
    nombre: "Horseshoe Logo Sherpa Fleece Jacket",
    marca: "Chrome Hearts",
    precio: 159999,
    descripcion: "Jacket de Sherpa fleece Chrome Hearts con logo horseshoe. Forro suave premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/Xrs8sv99/80-Chrome-Hearts-Horseshoe-Logo-Sherpa-Fleece-Jacket-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 27: Chrome Hearts Multi Cross Varsity ────────────────
  {
    id: "chrome-hearts-multi-cross-varsity",
    nombre: "Multi Cross Patch Varsity Jacket",
    marca: "Chrome Hearts",
    precio: 179999,
    descripcion: "Varsity jacket Chrome Hearts con parches de cruces múltiples. Cuero y tela premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Grey", descripcion: "Gris", imagen: "https://i.ibb.co/3yWqk0jT/79-Chrome-Hearts-Multi-Cross-Patch-Varsity-Jacket-1-en-gris-y-1-en-negro.png", color: "#888888" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/3yWqk0jT/79-Chrome-Hearts-Multi-Cross-Patch-Varsity-Jacket-1-en-gris-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 28: Chrome Hearts Denim Patch Horseshoe ──────────────
  {
    id: "chrome-hearts-denim-patch-horseshoe",
    nombre: "Denim Patch Horseshoe T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con parche horseshoe en denim. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/sdvqbSFC/78-Chrome-Hearts-Denim-Patch-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/sdvqbSFC/78-Chrome-Hearts-Denim-Patch-Horseshoe-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 29: Chrome Hearts Triple Cross Heart Distressed ──────
  {
    id: "chrome-hearts-triple-cross-heart-distressed",
    nombre: "Triple Cross Heart Distressed Long Sleeve T-Shirt",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Remera manga larga Chrome Hearts con triple cruz heart y efecto distressed. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/yFbQMtTF/77-Chrome-Hearts-Triple-Cross-Heart-Distressed-Long-Sleeve-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/yFbQMtTF/77-Chrome-Hearts-Triple-Cross-Heart-Distressed-Long-Sleeve-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 30: Chrome Hearts Embroidered Horseshoe ───────────────
  {
    id: "chrome-hearts-embroidered-horseshoe",
    nombre: "Embroidered Horseshoe Logo T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con logo horseshoe bordado. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/ZztXBNLT/76-Chrome-Hearts-Embroidered-Horseshoe-Logo-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/ZztXBNLT/76-Chrome-Hearts-Embroidered-Horseshoe-Logo-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 31: Chrome Hearts Multi Cross Outline ───────────────
  {
    id: "chrome-hearts-multi-cross-outline",
    nombre: "Multi Cross Outline T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con cruces outline. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/1Gnt8MBH/75-Chrome-Hearts-Multi-Cross-Outline-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/1Gnt8MBH/75-Chrome-Hearts-Multi-Cross-Outline-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 32: Chrome Hearts Multi Logo Pin Patch ────────────────
  {
    id: "chrome-hearts-multi-logo-pin-patch",
    nombre: "Multi Logo Pin Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con parches de pin logo. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Yellow", descripcion: "Amarillo", imagen: "https://i.ibb.co/RpdWn0Ft/74-Chrome-Hearts-Multi-Logo-Pin-Patch-T-Shirt-1-en-amarillo-y-1-en-negro.png", color: "#d4c01a" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/RpdWn0Ft/74-Chrome-Hearts-Multi-Logo-Pin-Patch-T-Shirt-1-en-amarillo-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 33: Chrome Hearts CDG Homme Paris Distressed ──────────
  {
    id: "chrome-hearts-cdg-homme-distressed",
    nombre: "CDG Homme Paris Distressed Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Collab Chrome Hearts x CDG Homme Paris con cruz distressed. Algodón premium, edición limitada. Importada directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/Wvtxkvdb/73-Chrome-Hearts-CDG-Homme-Paris-Distressed-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/Wvtxkvdb/73-Chrome-Hearts-CDG-Homme-Paris-Distressed-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 34: Chrome Hearts CDG Homme Paris Cross ──────────────
  {
    id: "chrome-hearts-cdg-homme-cross",
    nombre: "CDG Homme Paris Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Collab Chrome Hearts x CDG Homme Paris con cruz. Algodón premium, edición limitada. Importada directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/jvjCs7Jh/72-Chrome-Hearts-CDG-Homme-Paris-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/jvjCs7Jh/72-Chrome-Hearts-CDG-Homme-Paris-Cross-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 35: Chrome Hearts Multi Logo Pocket ─────────────────
  {
    id: "chrome-hearts-multi-logo-pocket",
    nombre: "Multi Logo Pocket T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con bolsillo y logos múltiples. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/yFH3vT2Z/71-Chrome-Hearts-Multi-Logo-Pocket-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/yFH3vT2Z/71-Chrome-Hearts-Multi-Logo-Pocket-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 36: Chrome Hearts CH Patch Bottom Crosses ────────────
  {
    id: "chrome-hearts-ch-patch-bottom-crosses",
    nombre: "CH Patch T-Shirt with Bottom Crosses",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con parche CH y cruces en la parte inferior. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/wFFqXhLy/70-Chrome-Hearts-CH-Patch-T-Shirt-with-Bottom-Crosses-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 37: Chrome Hearts Black Crewneck Leather Horseshoe ────
  {
    id: "chrome-hearts-crewneck-leather-horseshoe",
    nombre: "Black Crewneck Sweatshirt with Leather Horseshoe Patch",
    marca: "Chrome Hearts",
    precio: 129999,
    descripcion: "Sudadera crewneck Chrome Hearts con parche de cuero horseshoe. Algodón premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/CKzgTtSz/69-Chrome-Hearts-Black-Crewneck-Sweatshirt-with-Leather-Horseshoe-Patch-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 38: Chrome Hearts Monogram Print Zip Up ───────────────
  {
    id: "chrome-hearts-monogram-zip-up",
    nombre: "Monogram Print Zip Up Hoodie",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Hoodie zip up Chrome Hearts con print monograma. Algodón premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/KjdLnFKv/68-Chrome-Hearts-Monogram-Print-Zip-Up-Hoodie-1-en-blanco-y-1-en-negro-y-1-en-celeste.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/KjdLnFKv/68-Chrome-Hearts-Monogram-Print-Zip-Up-Hoodie-1-en-blanco-y-1-en-negro-y-1-en-celeste.png", color: "#111111" },
      { nombre: "Light Blue", descripcion: "Celeste", imagen: "https://i.ibb.co/KjdLnFKv/68-Chrome-Hearts-Monogram-Print-Zip-Up-Hoodie-1-en-blanco-y-1-en-negro-y-1-en-celeste.png", color: "#80b8e0" }
    ]
  },

  // ── PRODUCTO 39: Chrome Hearts Horseshoe Filigree Cross ───────────
  {
    id: "chrome-hearts-horseshoe-filigree-cross",
    nombre: "Horseshoe and Filigree Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con horseshoe y cruz filigree. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/9mL8grcs/67-Chrome-Hearts-Horseshoe-and-Filigree-Cross-T-Shirt-1-en-blanco-y-1-en-negro-y-1-en-gris.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/9mL8grcs/67-Chrome-Hearts-Horseshoe-and-Filigree-Cross-T-Shirt-1-en-blanco-y-1-en-negro-y-1-en-gris.png", color: "#111111" },
      { nombre: "Grey", descripcion: "Gris", imagen: "https://i.ibb.co/9mL8grcs/67-Chrome-Hearts-Horseshoe-and-Filigree-Cross-T-Shirt-1-en-blanco-y-1-en-negro-y-1-en-gris.png", color: "#888888" }
    ]
  },

  // ── PRODUCTO 40: Chrome Hearts Scattered Cross Patch ──────────────
  {
    id: "chrome-hearts-scattered-cross-patch",
    nombre: "Scattered Cross Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con parches de cruz dispersos. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/4QLJ4h1/66-Chrome-Hearts-Scattered-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/4QLJ4h1/66-Chrome-Hearts-Scattered-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 41: Chrome Hearts Multi Cross Patch ──────────────────
  {
    id: "chrome-hearts-multi-cross-patch",
    nombre: "Multi Cross Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con múltiples parches de cruz. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/ZpK73Fcs/65-Chrome-Hearts-Multi-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/ZpK73Fcs/65-Chrome-Hearts-Multi-Cross-Patch-T-Shirt-1-en-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 42: Chrome Hearts Cross Patch ────────────────────────
  {
    id: "chrome-hearts-cross-patch",
    nombre: "Cross Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con parche de cruz. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Grey", descripcion: "Gris", imagen: "https://i.ibb.co/jvCrQrQF/64-Chrome-Hearts-Cross-Patch-T-Shirt-1-en-gris-y-1-en-negro.png", color: "#888888" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/jvCrQrQF/64-Chrome-Hearts-Cross-Patch-T-Shirt-1-en-gris-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 43: Chrome Hearts Triple Cemetery Cross ──────────────
  {
    id: "chrome-hearts-triple-cemetery-cross",
    nombre: "Triple Cemetery Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Remera Chrome Hearts con triple cruz cemetery. Algodón premium, diseño exclusivo. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "White", descripcion: "Blanco", imagen: "https://i.ibb.co/0yqnCLnY/63-Chrome-Hearts-Triple-Cemetery-Cross-T-Shirt-1-blanco-y-1-en-negro.png", color: "#f0f0f0" },
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/0yqnCLnY/63-Chrome-Hearts-Triple-Cemetery-Cross-T-Shirt-1-blanco-y-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 44: Chrome Hearts Black Mesh Football Jersey ─────────
  {
    id: "chrome-hearts-mesh-football-jersey",
    nombre: "Black Mesh V-Neck Football Jersey with Silver Script Logo",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Jersey de fútbol mesh Chrome Hearts con logo plateado. Malla premium, diseño deportivo. Importado directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/99vfdvdK/62-Chrome-Hearts-Black-Mesh-V-Neck-Football-Jersey-with-Silver-Script-Logo-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 45: Chrome Hearts Leather Belt Star Studs ─────────────
  {
    id: "chrome-hearts-leather-belt-star-studs",
    nombre: "Black Leather Belt with Silver Star Studs and Star Buckle",
    marca: "Chrome Hearts",
    precio: 59999,
    descripcion: "Cinturón de cuero Chrome Hearts con studs de estrella y hebilla estrella. Cuero premium, acabado de alta calidad. Importado directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/FbfKcJVJ/61-Chrome-Hearts-Black-Leather-Belt-with-Silver-Star-Studs-and-Star-Buckle-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 46: Chrome Hearts Zip Up Hoodie Scroll Logo ────────────
  {
    id: "chrome-hearts-zip-up-scroll-logo",
    nombre: "Black Zip Up Hoodie with Scroll Logo and Sleeve Script Print",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Hoodie zip up Chrome Hearts con logo scroll y print en manga. Algodón premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/tpfMmX7y/60-Chrome-Hearts-Black-Zip-Up-Hoodie-with-Scroll-Logo-and-Sleeve-Script-Print-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 47: Chrome Hearts Zip Up Fleece Horseshoe ──────────────
  {
    id: "chrome-hearts-zip-up-fleece-horseshoe",
    nombre: "Black Zip Up Fleece Hoodie with Horseshoe Logo",
    marca: "Chrome Hearts",
    precio: 129999,
    descripcion: "Hoodie fleece zip up Chrome Hearts con logo horseshoe. Forro suave premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/XfJ1H3zD/59-Chrome-Hearts-Black-Zip-Up-Fleece-Hoodie-with-Horseshoe-Logo-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 48: Chrome Hearts Half Zip Fleece Pullover ────────────
  {
    id: "chrome-hearts-half-zip-fleece",
    nombre: "Horseshoe Logo Half Zip Fleece Pullover",
    marca: "Chrome Hearts",
    precio: 119999,
    descripcion: "Pullover fleece half zip Chrome Hearts con logo horseshoe. Forro suave premium, construcción de alta calidad. Importado directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/hRByvdtN/58-Chrome-Hearts-Horseshoe-Logo-Half-Zip-Fleece-Pullover-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 49: Chrome Hearts Varsity Leather Sleeves ────────────
  {
    id: "chrome-hearts-varsity-leather-sleeves",
    nombre: "Black Varsity Jacket with Leather Sleeves and Red Cemetery Cross Embroidery",
    marca: "Chrome Hearts",
    precio: 199999,
    descripcion: "Varsity jacket Chrome Hearts con mangas de cuero y bordado de cruz cemetery roja. Premium construcción. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/TDL4ccKw/57-Chrome-Hearts-Black-Varsity-Jacket-with-Leather-Sleeves-and-Red-Cemetery-Cross-Embroidery-1-en.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 50: Chrome Horseshoe Panel Track Jacket ───────────────
  {
    id: "chrome-hearts-panel-track-jacket",
    nombre: "Horseshoe Logo Panel Track Jacket",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Track jacket Chrome Hearts con panel y logo horseshoe. Tela técnica premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Black", descripcion: "Negro", imagen: "https://i.ibb.co/TMXNCrvP/56-Chrome-Hearts-Horseshoe-Logo-Panel-Track-Jacket-1-en-negro.png", color: "#111111" }
    ]
  },

  // ── PRODUCTO 51: Chrome Hearts Dagger Monogram Zip Up ─────────────
  {
    id: "chrome-hearts-dagger-monogram-zip-up",
    nombre: "Charcoal Grey Zip Up Hoodie with All Over White Dagger Monogram Print",
    marca: "Chrome Hearts",
    precio: 139999,
    descripcion: "Hoodie zip up Chrome Hearts con print monograma daga. Algodón premium, construcción de alta calidad. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Charcoal Grey", descripcion: "Gris carbón", imagen: "https://i.ibb.co/BKKNNCGR/55-Chrome-Hearts-Charcoal-Grey-Zip-Up-Hoodie-with-All-Over-White-Dagger-Monogram-Print-1-en-gris.png", color: "#36454f" }
    ]
  },

  // ── PRODUCTO 19: Jordan 4 ─────────────────────────────────────
  {
    id: "jordan-4",
    nombre: "Air Jordan 4",
    marca: "Jordan",
    precio: 129999,
    descripcion: "Air Jordan 4 original. Silueta clasica de Michael Jordan, construccion premium. Importadas directo.",
    disponible: true,
    etiqueta: "Classic",
    talles: ["40", "41", "42", "43", "44", "45", "46"],
    modelos: [
      { nombre: "Fire Red White Black",    descripcion: "Fire Red White Black",    imagen: "https://i.ibb.co/HLcN3JGP/pcitem902012418622-7f0f0000019ca81eb46a0a207569-1440-1440-jpg.jpg",                color: "#aa2020" },
      { nombre: "Travis Scott Brown",      descripcion: "Travis Scott Brown",      imagen: "https://i.ibb.co/PZB4VZJ4/wdseller1845163825-2f13000001901d8195be0a8133cc-1080-1080-jpg.jpg",        color: "#5a3a2a" },
      { nombre: "Travis Scott Cactus Jack",descripcion: "Travis Scott Cactus Jack",imagen: "https://i.ibb.co/q3SDqCcJ/wdseller1845163825-3333000001901d7e21150a210256-1080-1080-jpg.jpg",        color: "#3a2a1a" },
      { nombre: "Black Cat",               descripcion: "Black Cat",               imagen: "https://i.ibb.co/1thZ5w5M/wdseller1845163825-3464000001901d7ee72b0a2102c5-1080-1080-jpg.jpg",        color: "#111111" },
      { nombre: "Taupe Haze",              descripcion: "Taupe Haze",              imagen: "https://i.ibb.co/xqxp207Y/open1850717273-1234478995-0a16000001901b1eb8810a210559-1080-1080-jpg.jpg",  color: "#9a8a7a" },
      { nombre: "Metallic Gold",           descripcion: "Metallic Gold",           imagen: "https://i.ibb.co/hJfsX4mV/open1850717273-1234478995-4b4d000001901b1f40d00a232357-1080-1080-jpg.webp", color: "#c8a020" },
      { nombre: "Black Canvas",            descripcion: "Black Canvas",            imagen: "https://i.ibb.co/7xLzQ41W/open1850717273-1234478995-67f4000001901b1ebb830a22d234-1074-1074-jpg.jpg",  color: "#0a0a0a" },
      { nombre: "Bred Reimagined",         descripcion: "Bred Reimagined",         imagen: "https://i.ibb.co/jPxMVLw5/open1850717273-1234478995-683c000001901b1ef4540a22d234-1074-1074-jpg.jpg",  color: "#aa1010" },
      { nombre: "SE Craft Medium Olive",   descripcion: "SE Craft Medium Olive",   imagen: "https://i.ibb.co/Rp4G76yN/open1850717273-1234478995-2954000001901b1eec6b0a8115b5-1080-1080-jpg.webp", color: "#6a7a3a" },
      { nombre: "Military Blue",           descripcion: "Military Blue",           imagen: "https://i.ibb.co/rfmGb0YH/open1850717273-1234478995-6125000001901b1ef8de0a239383-1080-1080-jpg.jpg",  color: "#1a3a6a" },
      { nombre: "Off White Sail",          descripcion: "Off White Sail",          imagen: "https://i.ibb.co/ccp0cktJ/wdseller1845163825-3312000001901da695b20a2301b4-1080-1080-jpg.jpg",        color: "#e8e4d8" },
      { nombre: "Lakers",                  descripcion: "Lakers",                  imagen: "https://i.ibb.co/nNrDp4Sc/pcitem902012418622-3a520000019b9560c4660a210256-1440-1440-jpg.jpg",        color: "#6a1a8a" }
    ]
  },

  // ── Maison Margiela Future High ───────────────────────────────
  {
    id: "margiela-future-high",
    nombre: "Future High",
    marca: "Maison Margiela",
    precio: 109999,
    descripcion: "Maison Margiela Future High. Zapatilla high-top con velcro/cinturón en el tobillo. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    modelos: [
      { nombre: "Negro con Brillos",  descripcion: "High — Negro con Brillos", imagen: "https://si.geilicdn.com/pcitem902012433257-19810000019b8a85e6e50a20e2c5_2160_2880.jpg",  color: "#1a1a1a" },
      { nombre: "Rojas y Negras",     descripcion: "High — Rojas y Negras",    imagen: "https://si.geilicdn.com/pcitem902012433257-21b50000019b8a8621320a2304aa_2160_2880.jpg",  color: "#aa1a1a" },
      { nombre: "Azul",               descripcion: "High — Azul",              imagen: "https://si.geilicdn.com/pcitem902012433257-45860000019b8a8683340a23057e_2160_2880.jpg",  color: "#1a3a8a" },
      { nombre: "Gamuza Negra",       descripcion: "High — Gamuza Negra",      imagen: "https://si.geilicdn.com/pcitem902012433257-45d30000019b8a858b9f0a210256_2160_2880.jpg",  color: "#2a2a2a" },
      { nombre: "Cuero Negro",        descripcion: "High — Cuero Negro",       imagen: "https://si.geilicdn.com/pcitem902012433257-54020000019ab76c23510a231316_2160_2880.jpg",  color: "#0a0a0a" },
      { nombre: "Rojo",               descripcion: "High — Rojo",              imagen: "https://si.geilicdn.com/pcitem902012433257-08900000019ab76bf4380a20e672_2160_2880.jpg",  color: "#aa1a1a" },
      { nombre: "Brillos",            descripcion: "High — Brillos",           imagen: "https://si.geilicdn.com/pcitem902012433257-45da0000019b8a85bbb50a207569_2160_2880.jpg",  color: "#e0ddd8" },
      { nombre: "White Light Blue",   descripcion: "High — White Light Blue",  imagen: "https://si.geilicdn.com/pcitem902012433257-46340000019b8a865b280a210256_2160_2880.jpg",  color: "#a0c8e8" },
      { nombre: "Blanco/Gris",        descripcion: "High — Blanco y Gris",     imagen: "https://si.geilicdn.com/pcitem902012433257-03ff0000019ab76c556a0a2396f4_2160_2880.jpg",  color: "#d0d0d0" }
    ]
  },

  // ── Maison Margiela Future Low ────────────────────────────────
  {
    id: "margiela-future-low",
    nombre: "Future Low",
    marca: "Maison Margiela",
    precio: 99999,
    descripcion: "Maison Margiela Future Low. Zapatilla low-top runner, silueta limpia. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["36","37","38","39","40","41","42","43","44"],
    modelos: [
      { nombre: "Negro Total",     descripcion: "Low — Negro Total",     imagen: "https://si.geilicdn.com/pcitem902012433257-2a990000019bc3873dac0a8134f0_2160_2880.jpg",  color: "#0a0a0a" },
      { nombre: "Negro/Blanco",    descripcion: "Low — Negro y Blanco",  imagen: "https://si.geilicdn.com/pcitem902012433257-248f0000019bc387d62e0a239646_2160_2880.jpg",  color: "#2a2a2a" },
      { nombre: "White Brillantes", descripcion: "Low — White Brillantes", imagen: "https://si.geilicdn.com/pcitem902012433257-33df0000019bc38772960a23037f_2160_2880.jpg",  color: "#f0f0f0" },
      { nombre: "Rojas",           descripcion: "Low — Rojas",           imagen: "https://si.geilicdn.com/pcitem902012433257-24c40000019bc3879d5c0a20e672_2160_2880.jpg",  color: "#aa1a1a" },
      { nombre: "Beige/Nude",      descripcion: "Low — Beige Nude",      imagen: "https://si.geilicdn.com/pcitem902012433257-006e0000019bc388126f0a811411_2160_2880.jpg",  color: "#d4c4a8" }
    ]
  },

  // ── PRODUCTO 20: BAPE x Crocs ─────────────────────────────────
  {
    id: "bape-x-crocs",
    nombre: "x Crocs",
    marca: "BAPE",
    precio: 69999,
    descripcion: "Colaboración exclusiva BAPE x Crocs. Diseño icónico con detalles del camo BAPE. Importadas directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["36/37", "38/39", "40/41", "42/43", "44/45", "45/46"],
    modelos: [
      { nombre: "Black", descripcion: "Negro con detalles BAPE", imagen: "https://i.ibb.co/NDQxxPv/crocs-black.jpg", color: "#111111" },
      { nombre: "Pink",  descripcion: "Rosa con detalles BAPE",  imagen: "https://i.ibb.co/m5pV0zc9/crocs-pink.jpg",  color: "#e890b8" },
      { nombre: "Blue",  descripcion: "Azul con detalles BAPE",  imagen: "https://i.ibb.co/4wLCLvGK/crocs-blue.jpg",  color: "#2a5a9a" },
      { nombre: "Green", descripcion: "Verde con detalles BAPE", imagen: "https://i.ibb.co/N6Zt1Jqc/crocs-green.jpg", color: "#2a7a3a" }
    ]
  }
,
  // ── Supreme x SOX Zip Up ─────────────────────────────────────
  {
    id: "supreme-x-sox-zip",
    nombre: "x SOX Zip Up Hoodie",
    marca: "Supreme",
    precio: 129999,
    descripcion: "Collab Supreme x SOX. Zip up hoodie con branding de ambas marcas. Importada directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con logo SOX", imagen: "https://i.ibb.co/FkRHjZsG/01.jpg", color: "#111111" },
      { nombre: "Gris",  descripcion: "Gris con logo SOX",  imagen: "https://i.ibb.co/RTncdttp/02.jpg", color: "#888888" }
    ]
  },

  // ── Supreme x SOX Sweatpants ──────────────────────────────────
  {
    id: "supreme-x-sox-sweatpants",
    nombre: "x SOX Sweatpants",
    marca: "Supreme",
    precio: 69999,
    descripcion: "Sweatpants de la collab Supreme x SOX. Corte holgado con branding de ambas marcas. Importados directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Modelo 1", descripcion: "SOX Sweatpants — colorway 1", imagen: "https://i.ibb.co/xSLX3Dq4/03.jpg", color: "#333333" },
      { nombre: "Modelo 2", descripcion: "SOX Sweatpants — colorway 2", imagen: "https://i.ibb.co/Jj5CnXfs/04.jpg", color: "#555555" }
    ]
  },

  // ── Supreme Jacket Gabardina ──────────────────────────────────
  {
    id: "supreme-jacket-gabardina",
    nombre: "Jacket Gabardina",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Jacket de gabardina Supreme. Construcción premium, corte structured. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro",          descripcion: "Negro",               imagen: "https://i.ibb.co/4ns6tDh7/05.jpg", color: "#111111" },
      { nombre: "Azul/Letras Rojas", descripcion: "Azul con letras rojas", imagen: "https://i.ibb.co/GvpkZRg7/06.jpg", color: "#1a3a6a" }
    ]
  },





  // ── Supreme Big Logo Hoodie ───────────────────────────────────
  {
    id: "supreme-big-logo-hoodie",
    nombre: "Big Logo Hoodie",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Hoodie Supreme big logo bordado. Construcción premium. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro Cross",  descripcion: "Cross Big Logo negro",  imagen: "https://i.ibb.co/3mCBF095/07.jpg", color: "#111111" },
      { nombre: "Gris Cross",   descripcion: "Cross Big Logo gris",   imagen: "https://i.ibb.co/Gmc9dXZ/08.jpg",  color: "#888888" },
      { nombre: "Celeste",      descripcion: "Big Logo celeste",       imagen: "https://i.ibb.co/Fq6kLFf2/09.jpg", color: "#80b8e0" },
      { nombre: "Gris",         descripcion: "Big Logo gris",          imagen: "https://i.ibb.co/0RspkSKD/10.jpg", color: "#888888" }
    ]
  },
  // ── Supreme Zip Up Script Logo ────────────────────────────────
  {
    id: "supreme-zip-script-logo",
    nombre: "Script Logo Zip Up Hoodie",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Zip up hoodie Supreme con script logo. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Azul/Amarillo", descripcion: "Azul con Supreme amarillo", imagen: "https://i.ibb.co/DHy0kqC2/11.jpg",  color: "#1a3a6a" },
      { nombre: "Gris",          descripcion: "Gris con Supreme",          imagen: "https://i.ibb.co/0yGfW4tx/12.jpg",  color: "#888888" },
      { nombre: "Gris/Azul",     descripcion: "Gris con Supreme azul",     imagen: "https://i.ibb.co/MDGh1ZTH/13.jpg",  color: "#6a8ecc" },
      { nombre: "Roja/Blanca",   descripcion: "Roja con Supreme blanco",   imagen: "https://i.ibb.co/1YT050M0/14.jpg",  color: "#aa1a1a" },
      { nombre: "Rojo/Negro",    descripcion: "Rojo con Supreme negro",     imagen: "https://i.ibb.co/SDg8GzC6/20.jpg",  color: "#aa1a1a" },
      { nombre: "Gris 2",        descripcion: "Gris segunda versión",       imagen: "https://i.ibb.co/VctQwTWZ/21.jpg",  color: "#888888" }
    ]
  },

  // ── Supreme Jacket Jean ───────────────────────────────────────
  {
    id: "supreme-jacket-jean",
    nombre: "Denim Jacket",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Jacket de jean Supreme. Construcción denim premium con logo bordado. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Blue Denim", descripcion: "Blue Denim jacket", imagen: "https://i.ibb.co/m5nPyKfY/15.jpg", color: "#1a3a6a" },
      { nombre: "Black Denim",descripcion: "Black Denim jacket",imagen: "https://i.ibb.co/kgf0f76w/16.jpg", color: "#111111" }
    ]
  },

  // ── Supreme Faded Logo Hoodie ─────────────────────────────────
  {
    id: "supreme-faded-logo-hoodie",
    nombre: "Faded Logo Hoodie",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Hoodie Supreme con faded logo efecto lavado. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro",          descripcion: "Negro",           imagen: "https://i.ibb.co/pBhkd5p8/17.jpg", color: "#111111" },
      { nombre: "Rosa/Blanco",    descripcion: "Rosa con blanco", imagen: "https://i.ibb.co/27KjwFwy/18.jpg", color: "#e890b8" },
      { nombre: "Rosa/Blanco 2",  descripcion: "Rosa con blanco segunda versión", imagen: "https://i.ibb.co/xRK3S0w/19.jpg", color: "#e890b8" }
    ]
  },


  // ── Supreme x MM6 Big Logo ────────────────────────────────────
  {
    id: "supreme-x-mm6-big-logo",
    nombre: "x MM6 Big Logo Hoodie",
    marca: "Supreme",
    precio: 129999,
    descripcion: "Collab Supreme x Maison Margiela MM6. Big logo con detalles metalizados. Edición limitada. Importada directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro/Gris Metalizado",   descripcion: "Negro con gris metalizado",   imagen: "https://i.ibb.co/r2zxnTtx/23.jpg", color: "#1a1a1a" },
      { nombre: "Negro/Gris Metalizado 2", descripcion: "Negro con gris metalizado v2", imagen: "https://i.ibb.co/d4ZmTHDW/22.jpg", color: "#1a1a1a" }
    ]
  },

  // ── Supreme IDGAF Zip Up ──────────────────────────────────────
  {
    id: "supreme-idgaf-zip",
    nombre: "IDGAF Zip Up Hoodie",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Zip up hoodie Supreme IDGAF. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro",       descripcion: "Negro IDGAF",          imagen: "https://i.ibb.co/Hpk2RmWD/25.jpg", color: "#111111" },
      { nombre: "Negro 2",     descripcion: "Negro IDGAF versión 2", imagen: "https://i.ibb.co/JwXj40TG/24.jpg", color: "#111111" },
      { nombre: "Navy Blue",   descripcion: "Navy Blue IDGAF",      imagen: "https://i.ibb.co/CKDzfw1y/26.jpg", color: "#0a1a3a" },
      { nombre: "Azul Oscuro", descripcion: "Azul Oscuro IDGAF",    imagen: "https://i.ibb.co/xKntW1TG/32.jpg", color: "#0a0a2a" }
    ]
  },

  // ── Supreme Michael Jackson Dangerous Zip Up ──────────────────
  {
    id: "supreme-michael-jackson-zip",
    nombre: "Michael Jackson Dangerous Zip Up",
    marca: "Supreme",
    precio: 109999,
    descripcion: "Zip up hoodie Supreme Michael Jackson Dangerous. Gráfica icónica del álbum. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Navy Blue", descripcion: "Navy Blue washed",  imagen: "https://i.ibb.co/twMR6Vjt/27.jpg", color: "#0a1a3a" },
      { nombre: "Black",     descripcion: "Black",             imagen: "https://i.ibb.co/ks0CvP2P/28.jpg", color: "#111111" }
    ]
  },

  // ── Supreme Rhinestone Zip Up ─────────────────────────────────
  {
    id: "supreme-rhinestone-zip",
    nombre: "Rhinestone Zip Up Hoodie",
    marca: "Supreme",
    precio: 129999,
    descripcion: "Zip up hoodie Supreme con rhinestone. Detalles de strass premium. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Camo",   descripcion: "Rhinestone Camo",   imagen: "https://i.ibb.co/wrzpY88P/30.jpg", color: "#6a7a3a" },
      { nombre: "Camo 2", descripcion: "Rhinestone Camo 2", imagen: "https://i.ibb.co/bjhGS4q3/29.jpg", color: "#4a6a3a" },
      { nombre: "Negro",  descripcion: "Rhinestone Negro",  imagen: "https://i.ibb.co/q4J7dfS/31.jpg",  color: "#111111" }
    ]
  },

  // ── Nike x NOCTA Tech Fleece Set ─────────────────────────────
  {
    id: "nike-nocta-tech-fleece-set",
    nombre: "x NOCTA Tech Fleece Set",
    marca: "Nike",
    precio: 89999,
    descripcion: "Conjunto completo Nike x NOCTA Tech Fleece — hoodie + joggers. Collab exclusiva con Drake. Construcción premium, tela tech fleece. Importado directo.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL", "2XL"],
    modelos: [
      { nombre: "Cobalt Blue Tint",   descripcion: "Azul cobalto con detalles tint", imagen: "https://i.ibb.co/xKnmSFpC/Nike-x-NOCTA-Tech-Fleece-Hoodie-Joggers-Set-Cobalt-Blue-Tint.jpg",   color: "#2a5aaa" },
      { nombre: "Stadium Green Sail", descripcion: "Verde stadium con sail",          imagen: "https://i.ibb.co/Rk6kvsS0/Nike-x-NOCTA-Tech-Fleece-Hoodie-Joggers-Set-Stadium-Green-Sail.jpg", color: "#2a6a3a" },
      { nombre: "Black",              descripcion: "Negro total",                     imagen: "https://i.ibb.co/Xk6WyBCc/Nike-x-NOCTA-Tech-Fleece-Hoodie-Joggers-Set-Black.jpg",              color: "#111111" }
    ]
  },

  // ── Moon Boot ────────────────────────────────────────────────
  {
    id: "moon-boot",
    nombre: "Moon Boot",
    marca: "Moon Boot",
    precio: 129999,
    descripcion: "Moon Boot originales. Icono del après-ski, construcción premium acolchada, suela antideslizante. Importadas directo.",
    disponible: true,
    etiqueta: "Classic",
    talles: ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44"],
    modelos: [
      { nombre: "Black", descripcion: "Negro clásico", imagen: "https://i.ibb.co/1tyyNTz2/moonboot-negra.jpg", color: "#111111" }
    ]
  },

  // ── Maison Margiela T-Shirts ──────────────────────────────────
  {
    id: "margiela-tshirts",
    nombre: "T-Shirts",
    marca: "Maison Margiela",
    precio: 49999,
    descripcion: "Remeras Maison Margiela con gráficas originales de la casa. Algodón premium, corte oversize. Importadas directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Blanca 1", descripcion: "Blanca", imagen: "https://i.ibb.co/Q7Nywv1n/open1867150125-1234478995-275000000196693b3e480a8115c2-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Negra 1", descripcion: "Negra", imagen: "https://i.ibb.co/kgWjwHD1/open1867150125-1234478995-2b3300000196693b3bd60aa0834c-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Blanca 2", descripcion: "Blanca", imagen: "https://i.ibb.co/VKn04jR/open1867150125-1234478995-2b3500000196693b4a570aa0834c-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Blanca 3", descripcion: "Blanca", imagen: "https://i.ibb.co/5gXGRK1k/open1867150125-1234478995-2b3900000196693b5ad90aa0834c-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Gris", descripcion: "Gris", imagen: "https://i.ibb.co/0VhDxT0f/open1867150125-1234478995-2b4300000196693b79a20aa0834c-800-800-jpg.jpg", color: "#888888" },
      { nombre: "Blanca 4", descripcion: "Blanca", imagen: "https://i.ibb.co/M5fyG4dY/open1867150125-1234478995-11d100000196693b422b0a23b491-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Negra 2", descripcion: "Negra", imagen: "https://i.ibb.co/XZvBqkkT/open1867150125-1234478995-15d400000196693b445b0a231226-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 3", descripcion: "Negra", imagen: "https://i.ibb.co/TDcNFDsK/open1867150125-1234478995-15da00000196693b54f30a231226-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Blanca 5", descripcion: "Blanca", imagen: "https://i.ibb.co/3mySmQKk/open1867150125-1234478995-15e000000196693b75230a231226-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Blanca 6", descripcion: "Blanca", imagen: "https://i.ibb.co/bMpJ6Ctf/open1867150125-1234478995-15e600000196693b84f70a231226-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Negra 4", descripcion: "Negra", imagen: "https://i.ibb.co/tPCVQ1Q7/open1867150125-1234478995-20be00000196693b403d0a22d249-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 5", descripcion: "Negra", imagen: "https://i.ibb.co/sJHVHqNh/open1867150125-1234478995-20c400000196693b50da0a22d249-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Blanca 7", descripcion: "Blanca", imagen: "https://i.ibb.co/XkpXZbff/open1867150125-1234478995-20c600000196693b62ef0a22d249-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Negra 6", descripcion: "Negra", imagen: "https://i.ibb.co/GQpZ2vhN/open1867150125-1234478995-20ca00000196693b72e30a22d249-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 7", descripcion: "Negra", imagen: "https://i.ibb.co/r2R4DYBT/open1867150125-1234478995-20d000000196693b80700a22d249-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 8", descripcion: "Negra", imagen: "https://i.ibb.co/BH27LH3D/open1867150125-1234478995-30a000000196693b48700a8133b0-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 9", descripcion: "Negra", imagen: "https://i.ibb.co/YBYLw5hf/open1867150125-1234478995-30a600000196693b59070a8133b0-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 10", descripcion: "Negra", imagen: "https://i.ibb.co/8DWy8v6N/open1867150125-1234478995-30ae00000196693b77680a8133b0-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Blanca 8", descripcion: "Blanca", imagen: "https://i.ibb.co/yBBPB7S7/open1867150125-1234478995-30b200000196693b88ea0a8133b0-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Blanca 9", descripcion: "Blanca", imagen: "https://i.ibb.co/LdXLt5CY/open1867150125-1234478995-213b00000196693b70e50aa08290-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Blanca 10", descripcion: "Blanca", imagen: "https://i.ibb.co/TDkPTCnd/open1867150125-1234478995-309e00000196693b39e90a8133b0-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Negra 11", descripcion: "Negra", imagen: "https://i.ibb.co/MD8f9Lbc/open1867150125-1234478995-275400000196693b4cea0a8115c2-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 12", descripcion: "Negra", imagen: "https://i.ibb.co/5xX3WqCV/open1867150125-1234478995-276000000196693b7c850a8115c2-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Blanca 11", descripcion: "Blanca", imagen: "https://i.ibb.co/DcPkKjJ/open1867150125-1234478995-276200000196693b8d1a0a8115c2-800-800-jpg.jpg", color: "#f0f0f0" },
      { nombre: "Negra 13", descripcion: "Negra", imagen: "https://i.ibb.co/rGXJBXQG/open1867150125-1234478995-328200000196693b86f40a23b4de-800-800-jpg.jpg", color: "#111111" },
      { nombre: "Negra 14", descripcion: "Negra", imagen: "https://i.ibb.co/0jq1WF1H/pcitem1934672132-7b7e00000198c3f93b950a20e7c7-800-800-jpg.jpg", color: "#111111" }
    ]
  },

  // ── BAPE Reversible Jacket ────────────────────────────────────
  {
    id: "bape-reversible-jacket",
    nombre: "Reversible Jacket",
    marca: "BAPE",
    precio: 149999,
    descripcion: "Campera reversible BAPE. Dos looks en una: un lado liso de color, el otro en el icónico camo BAPE. Construcción premium. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Colección",  descripcion: "Vista de los 3 colorways",         imagen: "https://i.ibb.co/wZD4LHFT/bape-reversible-las-3-lado-lado.jpg",  color: "#888888" },
      { nombre: "Blanca/Camo",descripcion: "Lado blanco / lado camo reversible",imagen: "https://i.ibb.co/HTMN1ySf/bape-reversible-blanca-lado-camo.jpg", color: "#f0f0f0" },
      { nombre: "Verde/Camo", descripcion: "Lado verde / lado camo reversible", imagen: "https://i.ibb.co/gnfbzhk/bape-reversible-verde-lado-camo.jpg",   color: "#2a6a3a" },
      { nombre: "Azul/Camo",  descripcion: "Lado azul / lado camo reversible",  imagen: "https://i.ibb.co/Y48vLBfB/bape-reversible-azul-lado-camo.jpg",   color: "#1a3a6a" }
    ]
  },

  // ── Chrome Hearts Horseshoe Logo Panel Track Jacket ────────────
  {
    id: "chrome-hearts-panel-track-jacket",
    nombre: "Horseshoe Logo Panel Track Jacket",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Chaqueta de panel con logo Horseshoe Chrome Hearts. Construcción premium, detalles en panel. Importada directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con logo Horseshoe", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Black Varsity Jacket ─────────────────────────
  {
    id: "chrome-hearts-varsity-jacket",
    nombre: "Varsity Jacket with Leather Sleeves",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Chaqueta varsity Chrome Hearts con mangas de cuero y bordado de Cemetery Cross rojo. Construcción premium. Importada directo.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro/Rojo", descripcion: "Negro con rojas de Cemetery Cross", imagen: "", color: "#880000" }
    ]
  },

  // ── Chrome Hearts Horseshoe Logo Half-Zip Fleece ────────────────
  {
    id: "chrome-hearts-half-zip-fleece",
    nombre: "Horseshoe Logo Half-Zip Fleece Pullover",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Sweater medio cierre con logo Horseshoe. Felpa suave, construcción premium. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Gris", descripcion: "Gris con logo Horseshoe", imagen: "", color: "#666666" }
    ]
  },

  // ── Chrome Hearts Zip-Up Fleece Hoodie ───────────────────────────
  {
    id: "chrome-hearts-zip-fleece-hoodie",
    nombre: "Zip-Up Fleece Hoodie with Horseshoe Logo",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Hoodie con cierre de felpa con logo Horseshoe. Interior suave, construcción premium. Importado directo.",
    disponible: true,
    etiqueta: "Hot",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con logo Horseshoe", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Zip-Up Hoodie Scroll Logo ─────────────────────
  {
    id: "chrome-hearts-zip-hoodie-scroll",
    nombre: "Zip-Up Hoodie with Scroll Logo",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Hoodie con cierre y print de Scroll Logo en las mangas. Construcción premium. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con Scroll Logo", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Leather Belt Silver Star Studs ────────────────
  {
    id: "chrome-hearts-belt-star-stud",
    nombre: "Leather Belt with Silver Star Studs and Star Buckle",
    marca: "Chrome Hearts",
    precio: 44999,
    descripcion: "Cinturón de cuero con tachas de estrella y hebilla estrella. Acabado premium. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["110cm"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con estrellas plateadas", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Mesh Football Jersey ───────────────────────────
  {
    id: "chrome-hearts-football-jersey",
    nombre: "Mesh V-Neck Football Jersey with Script Logo",
    marca: "Chrome Hearts",
    precio: 79999,
    descripcion: "Camiseta de fútbol mesh con logo Script en plata. Malla ventilada, construcción premium. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con logo Script plateado", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Triple Cemetery Cross T-Shirt ─────────────────
  {
    id: "chrome-hearts-tshirt-triple-cross",
    nombre: "Triple Cemetery Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con triple parche Cemetery Cross. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con triple cruz", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Cross Patch T-Shirt ───────────────────────────
  {
    id: "chrome-hearts-tshirt-cross-patch",
    nombre: "Cross Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con parche de cruz. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con cruz", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Multi-Cross Patch T-Shirt ──────────────────────
  {
    id: "chrome-hearts-tshirt-multi-cross",
    nombre: "Multi-Cross Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con múltiples cruces. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con múltiples cruces", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Scattered Cross Patch T-Shirt ────────────────
  {
    id: "chrome-hearts-tshirt-scattered-cross",
    nombre: "Scattered Cross Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con cruces dispersas. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con cruces dispersas", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Horseshoe and Filigree Cross T-Shirt ──────────
  {
    id: "chrome-hearts-tshirt-horseshoe-filigree",
    nombre: "Horseshoe and Filigree Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con logo Horseshoe y cruz filigree. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con Horseshoe y filigree", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Monogram Print Zip-Up Hoodie ──────────────────
  {
    id: "chrome-hearts-zip-hoodie-monogram",
    nombre: "Monogram Print Zip-Up Hoodie",
    marca: "Chrome Hearts",
    precio: 99999,
    descripcion: "Hoodie con cierre y print monograma. Construcción premium, interior de felpa. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con monograma", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Crewneck Sweatshirt ────────────────────────────
  {
    id: "chrome-hearts-crewneck-horseshoe",
    nombre: "Crewneck Sweatshirt with Leather Horseshoe Patch",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Sweater crewneck con parche de cuero Horseshoe. Construcción premium. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con parche Horseshoe", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts CH Patch T-Shirt ────────────────────────────────
  {
    id: "chrome-hearts-tshirt-ch-patch",
    nombre: "CH Patch T-Shirt with Bottom Crosses",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con parche CH y cruces inferiores. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con CH y cruces", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Multi-Logo Pocket T-Shirt ───────────────────────
  {
    id: "chrome-hearts-tshirt-multi-logo-pocket",
    nombre: "Multi-Logo Pocket T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con bolsillo y múltiples logos. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro multi-logo", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts CDG Homme Paris Cross T-Shirt ──────────────────
  {
    id: "chrome-hearts-tshirt-cdg-cross",
    nombre: "CDG Homme Paris Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera colaborativa CDG Homme Paris con cruz. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro CDG", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts CDG Homme Paris Distressed Cross T-Shirt ──────
  {
    id: "chrome-hearts-tshirt-cdg-distressed",
    nombre: "CDG Homme Paris Distressed Cross T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera CDG con cruz distressed. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "Collab",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro distressed", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Multi-Logo Pin/Patch T-Shirt ──────────────────
  {
    id: "chrome-hearts-tshirt-multi-pin-patch",
    nombre: "Multi-Logo Pin/Patch T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con múltiples pins y parches. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con pins", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Multi-Cross Outline T-Shirt ────────────────────
  {
    id: "chrome-hearts-tshirt-multi-cross-outline",
    nombre: "Multi-Cross Outline T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con contorno de múltiples cruces. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro outline", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Embroidered Horseshoe Logo T-Shirt ─────────────
  {
    id: "chrome-hearts-tshirt-horseshoe-embroidered",
    nombre: "Embroidered Horseshoe Logo T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con logo Horseshoe bordado. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro bordado", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Triple Cross Heart Distressed Long Sleeve ──────
  {
    id: "chrome-hearts-long-sleeve-triple-cross",
    nombre: "Triple Cross Heart Distressed Long Sleeve T-Shirt",
    marca: "Chrome Hearts",
    precio: 59999,
    descripcion: "Remera manga larga con triple cruz y corazón distressado. Algodón premium. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro distressado", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Denim Patch Horseshoe T-Shirt ────────────────
  {
    id: "chrome-hearts-tshirt-denim-patch",
    nombre: "Denim Patch Horseshoe T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con parche de denim y Horseshoe. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro con denim", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Multi-Cross Patch Varsity Jacket ──────────────
  {
    id: "chrome-hearts-varsity-multi-cross",
    nombre: "Multi-Cross Patch Varsity Jacket",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Chaqueta varsity con múltiples parches de cruz. Construcción premium. Importada directa.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro multi-cross", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Horseshoe Logo Sherpa Fleece Jacket ───────────
  {
    id: "chrome-hearts-sherpa-fleece",
    nombre: "Horseshoe Logo Sherpa Fleece Jacket",
    marca: "Chrome Hearts",
    precio: 149999,
    descripcion: "Chaqueta de sherpa con logo Horseshoe. Forro suave, construcción premium. Importada directa.",
    disponible: true,
    etiqueta: "Premium",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Gris", descripcion: "Gris sherpa", imagen: "", color: "#666666" }
    ]
  },

  // ── Chrome Hearts Multi-Logo T-Shirt Embroidered Crosses Stars ─
  {
    id: "chrome-hearts-tshirt-multi-logo-embroidered",
    nombre: "Multi-Logo T-Shirt with Embroidered Crosses and Stars",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera multi-logo con cruces y estrellas bordadas. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro bordado", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Vertical Cross Patch Turtle Neck ───────────────
  {
    id: "chrome-hearts-turtleneck-cross",
    nombre: "Vertical Cross Patch Turtle Neck Knit Sweater",
    marca: "Chrome Hearts",
    precio: 89999,
    descripcion: "Sweter de cuello alto con parche de cruz vertical. Tejido de punto premium. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro cuello alto", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Matty Boy Chomper Horseshoe T-Shirt ───────────
  {
    id: "chrome-hearts-tshirt-matty-boy",
    nombre: "Matty Boy Chomper Horseshoe T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera Matty Boy Chomper con Horseshoe. Algodón premium, edición especial. Importada directa.",
    disponible: true,
    etiqueta: "Limited",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro Matty Boy", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Fleur-de-Lis Patch Coaches Jacket ─────────────
  {
    id: "chrome-hearts-coaches-jacket",
    nombre: "Fleur-de-Lis Patch Coaches Jacket",
    marca: "Chrome Hearts",
    precio: 109999,
    descripcion: "Chaqueta coaches con parche Fleur-de-Lis. Construcción premium. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro Fleur-de-Lis", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Multi-Logo T-Shirt Triple Cross Star ─────────
  {
    id: "chrome-hearts-tshirt-triple-cross-star",
    nombre: "Multi-Logo T-Shirt with Embroidered Triple Cross and Star",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera multi-logo con triple cruz y estrella bordadas. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro bordado", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Monogram Cross Print Pocket T-Shirt ──────────
  {
    id: "chrome-hearts-tshirt-monogram-pocket",
    nombre: "Monogram Cross Print Pocket T-Shirt",
    marca: "Chrome Hearts",
    precio: 54999,
    descripcion: "Remera con bolsillo y print de cruz monograma. Algodón premium, corte oversize. Importada directa.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Negro", descripcion: "Negro monograma", imagen: "", color: "#111111" }
    ]
  },

  // ── Chrome Hearts Camo Cargo Pants ───────────────────────────────
  {
    id: "chrome-hearts-camo-cargo-pants",
    nombre: "Camo Cargo Pants",
    marca: "Chrome Hearts",
    precio: 79999,
    descripcion: "Pantalón cargo camo. Tela premium, múltiples bolsillos. Importado directo.",
    disponible: true,
    etiqueta: "New",
    talles: ["S", "M", "L", "XL"],
    modelos: [
      { nombre: "Camo", descripcion: "Camo militar", imagen: "", color: "#3a4a2a" }
    ]
  }

];