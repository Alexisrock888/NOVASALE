export const initialProducts = [
  { id: 1, name: 'Auriculares Studio Pro', category: 'Tecnología', price: 189900, oldPrice: 229900, rating: 4.9, reviews: 128, stock: 4, sku: 'TEC-014', badge: 'Más vendido', emoji: '🎧', color: 'lavender', description: 'Sonido inmersivo, cancelación de ruido y 30 horas de batería.' },
  { id: 2, name: 'Smartwatch Active 2', category: 'Tecnología', price: 249900, oldPrice: 299900, rating: 4.8, reviews: 86, stock: 18, sku: 'TEC-022', badge: '−17%', emoji: '⌚', color: 'mint', description: 'Tu salud y tus notificaciones, siempre a la vista.' },
  { id: 3, name: 'Silla ergonómica Nórdica', category: 'Hogar', price: 589900, oldPrice: null, rating: 4.7, reviews: 54, stock: 3, sku: 'HOG-031', badge: 'Últimas unidades', emoji: '🪑', color: 'peach', description: 'Diseño escandinavo y soporte lumbar para tus días largos.' },
  { id: 4, name: 'Lámpara Aura de mesa', category: 'Hogar', price: 139900, oldPrice: 169900, rating: 4.8, reviews: 72, stock: 27, sku: 'HOG-018', badge: '−18%', emoji: '💡', color: 'butter', description: 'Luz cálida regulable para crear tu espacio favorito.' },
  { id: 5, name: 'Tenis Urban Flex', category: 'Moda', price: 219900, oldPrice: null, rating: 4.6, reviews: 43, stock: 11, sku: 'MOD-009', badge: 'Nuevo', emoji: '👟', color: 'sky', description: 'Comodidad ligera para moverte por la ciudad.' },
  { id: 6, name: 'Morral Explorer 24L', category: 'Moda', price: 159900, oldPrice: 189900, rating: 4.9, reviews: 91, stock: 22, sku: 'MOD-026', badge: 'Favorito', emoji: '🎒', color: 'rose', description: 'Espacio inteligente y materiales resistentes al agua.' },
  { id: 7, name: 'Set de bandas Move', category: 'Deportes', price: 79900, oldPrice: null, rating: 4.7, reviews: 37, stock: 36, sku: 'DEP-011', badge: '', emoji: '🏋️', color: 'mint', description: 'Cinco niveles de resistencia para entrenar donde quieras.' },
  { id: 8, name: 'Botella térmica Flow', category: 'Deportes', price: 64900, oldPrice: 79900, rating: 4.8, reviews: 64, stock: 2, sku: 'DEP-019', badge: 'Últimas unidades', emoji: '🥤', color: 'lavender', description: 'Acero inoxidable, hidratación fría por 24 horas.' },
]

export const initialOrders = [
  { id: 'NS-1024', customer: 'Valentina Rojas', date: 'Hoy, 10:42', total: 439800, status: 'Pendiente', items: 2 },
  { id: 'NS-1023', customer: 'Mateo Gómez', date: 'Hoy, 09:18', total: 589900, status: 'Enviado', items: 1 },
  { id: 'NS-1022', customer: 'Laura Méndez', date: 'Ayer, 16:31', total: 329800, status: 'Entregado', items: 2 },
  { id: 'NS-1021', customer: 'Andrés Silva', date: 'Ayer, 14:06', total: 249900, status: 'Pendiente', items: 1 },
]

export const categories = [
  { name: 'Tecnología', emoji: '✳', count: 24, tone: 'lavender' },
  { name: 'Hogar', emoji: '⌂', count: 18, tone: 'peach' },
  { name: 'Moda', emoji: '◇', count: 32, tone: 'rose' },
  { name: 'Deportes', emoji: '◉', count: 16, tone: 'mint' },
]
