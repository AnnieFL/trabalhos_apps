export const CATEGORIES = [
  {id: 1, name: "Veículos", icon: "car"},
  {id: 2, name: "Imóveis", icon: "home"},
  {id: 3, name: "Produtos", icon: "invoice-list"},
]

export const SUBCATEGORIES = [
  {id: 1, name: "Sofás e Poltronas", category: 3},
  {id: 2, name: "Consoles de Vídeo Game", category: 3},
  {id: 3, name: "Ar-condicionados", category: 3},
  {id: 4, name: "Carros", category: 1},
  {id: 5, name: "Motos", category: 1},
  {id: 6, name: "Casas", category: 2},
  {id: 7, name: "Apartamentos", category: 2}
]

export const PRODUCTS = [
  { 
    id: 1, 
    name: "Sofá retrátil", 
    subcategory: 1, 
    value: 450.0, 
    location: "Brasília - DF", 
    datetime: "02/11/2025, 22:08", 
    seller: "sellername123", 
    description: "Sofá muito confortável e bonito, perfeito para sua sala.", 
    details: { 
      condition: "Usado", 
      material: "Tecido", 
      size: "2 lugares", 
      type: "Sofá Retrátil", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 2, 
    name: "Poltrona de couro marrom", 
    subcategory: 1, 
    value: 650.0, 
    location: "São Paulo - SP", 
    datetime: "01/11/2025, 18:32", 
    seller: "moveis_classicos", 
    description: "Poltrona elegante de couro legítimo, pouco usada.", 
    details: { 
      condition: "Usado", 
      material: "Couro", 
      size: "1 lugar", 
      type: "Poltrona", 
      donation: false, 
      trading: true 
    }
  },
  { 
    id: 3, 
    name: "Sofá 3 lugares novo", 
    subcategory: 1, 
    value: 1200.0, 
    location: "Curitiba - PR", 
    datetime: "02/11/2025, 15:12", 
    seller: "decor_lar", 
    description: "Sofá novo, direto da loja, ideal para sala de estar moderna.", 
    details: { 
      condition: "Novo", 
      material: "Tecido", 
      size: "3 lugares", 
      type: "Sofá", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 4, 
    name: "PlayStation 5 com 2 controles", 
    subcategory: 2, 
    value: 3600.0, 
    location: "Rio de Janeiro - RJ", 
    datetime: "30/10/2025, 12:45", 
    seller: "games_rj", 
    description: "PS5 em ótimo estado, com caixa original e dois controles.", 
    details: { 
      condition: "Usado", 
      type: "Console", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 5, 
    name: "Xbox Series S novo lacrado", 
    subcategory: 2, 
    value: 2200.0, 
    location: "São Paulo - SP", 
    datetime: "01/11/2025, 11:15", 
    seller: "games_br", 
    description: "Console novo, lacrado na caixa, com garantia de 1 ano.", 
    details: { 
      condition: "Novo", 
      type: "Console", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 6, 
    name: "Nintendo Switch OLED", 
    subcategory: 2, 
    value: 2300.0, 
    location: "Belo Horizonte - MG", 
    datetime: "02/11/2025, 19:08", 
    seller: "gamerzone", 
    description: "Switch OLED, pouco usado, acompanha dock e case.", 
    details: { 
      condition: "Usado", 
      type: "Console portátil", 
      donation: false, 
      trading: true 
    }
  },
  { 
    id: 7, 
    name: "Ar-condicionado Split 9000 BTUs", 
    subcategory: 3, 
    value: 1200.0, 
    location: "Salvador - BA", 
    datetime: "31/10/2025, 09:40", 
    seller: "clima_fresco", 
    description: "Aparelho em perfeito estado, com controle remoto e manual.", 
    details: { 
      condition: "Usado", 
      power: "9000 BTUs", 
      type: "Split", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 8, 
    name: "Ar-condicionado portátil Philco", 
    subcategory: 3, 
    value: 950.0, 
    location: "Florianópolis - SC", 
    datetime: "29/10/2025, 21:20", 
    seller: "tempcontrol", 
    description: "Portátil, ótimo para ambientes pequenos, fácil de mover.", 
    details: { 
      condition: "Usado", 
      power: "10000 BTUs", 
      type: "Portátil", 
      donation: false, 
      trading: true 
    }
  },
  { 
    id: 9, 
    name: "Carro Honda Civic 2019", 
    subcategory: 4, 
    value: 85000.0, 
    location: "São Paulo - SP", 
    datetime: "01/11/2025, 17:10", 
    seller: "auto_sp", 
    description: "Civic 2019 completo, 45.000 km rodados, único dono.", 
    details: { 
      condition: "Usado", 
      fuel: "Flex", 
      transmission: "Automático", 
      color: "Prata", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 10, 
    name: "Carro Fiat Uno 2012", 
    subcategory: 4, 
    value: 25000.0, 
    location: "Recife - PE", 
    datetime: "28/10/2025, 08:22", 
    seller: "joaocarros", 
    description: "Uno econômico, ótimo para o dia a dia, revisado recentemente.", 
    details: { 
      condition: "Usado", 
      fuel: "Gasolina", 
      transmission: "Manual", 
      color: "Branco", 
      donation: false, 
      trading: true 
    }
  },
  { 
    id: 11, 
    name: "Toyota Corolla 2021 híbrido", 
    subcategory: 4, 
    value: 145000.0, 
    location: "Brasília - DF", 
    datetime: "02/11/2025, 14:45", 
    seller: "greenmotors", 
    description: "Corolla Hybrid impecável, consumo excelente e tecnologia de ponta.", 
    details: { 
      condition: "Usado", 
      fuel: "Híbrido", 
      transmission: "Automático", 
      color: "Cinza", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 12, 
    name: "Moto Honda CG 160 2022", 
    subcategory: 5, 
    value: 13000.0, 
    location: "Fortaleza - CE", 
    datetime: "30/10/2025, 19:00", 
    seller: "motocenter", 
    description: "Moto em ótimo estado, IPVA 2025 pago, pneus novos.", 
    details: { 
      condition: "Usado", 
      engine: "160cc", 
      fuel: "Gasolina", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 13, 
    name: "Bicicleta MTB Caloi 2023", 
    subcategory: 5, 
    value: 2500.0, 
    location: "Porto Alegre - RS", 
    datetime: "01/11/2025, 16:30", 
    seller: "bike_shop", 
    description: "Mountain bike nova, aro 29, suspensão dianteira.", 
    details: { 
      condition: "Novo", 
      type: "MTB", 
      donation: false, 
      trading: false 
    }
  },
  { 
    id: 14, 
    name: "Smartphone iPhone 14", 
    subcategory: 6, 
    value: 4500.0, 
    location: "São Paulo - SP", 
    datetime: "02/11/2025, 10:20", 
    seller: "tech_store", 
    description: "iPhone 14 novo, 128GB, com nota fiscal e garantia.", 
    details: { 
      condition: "Novo", 
      storage: "128GB", 
      color: "Preto", 
      donation: false, 
      trading: false 
    }
  },
  { id: 15, name: "Smartphone Samsung Galaxy S22", subcategory: 6, value: 3500.0, location: "Rio de Janeiro - RJ", datetime: "01/11/2025, 13:50", seller: "samsung_store", description: "Galaxy S22 novo, 128GB, tela AMOLED, excelente câmera.", details: { condition: "Novo", storage: "128GB", color: "Branco", donation: false, trading: false } },
  { id: 16, name: "Relógio Apple Watch Series 8", subcategory: 7, value: 2500.0, location: "Curitiba - PR", datetime: "02/11/2025, 09:05", seller: "tech_wearables", description: "Apple Watch Series 8, novo, com caixa e pulseira extra.", details: { condition: "Novo", type: "Smartwatch", donation: false, trading: false } },
  { id: 17, name: "Câmera Canon EOS 250D", subcategory: 8, value: 3500.0, location: "Belo Horizonte - MG", datetime: "30/10/2025, 15:30", seller: "photo_store", description: "Câmera DSLR, pouco usada, acompanha lente 18-55mm.", details: { condition: "Usado", type: "DSLR", donation: false, trading: true } },
  { id: 18, name: "Câmera Sony Alpha 7 III", subcategory: 8, value: 12000.0, location: "São Paulo - SP", datetime: "01/11/2025, 18:25", seller: "sony_photos", description: "Mirrorless full-frame, perfeita para profissionais e amadores.", details: { condition: "Usado", type: "Mirrorless", donation: false, trading: false } },
  { id: 19, name: "Geladeira Brastemp 400L", subcategory: 9, value: 2200.0, location: "Recife - PE", datetime: "29/10/2025, 17:45", seller: "home_appliances", description: "Geladeira duplex, frost free, pouco uso.", details: { condition: "Usado", capacity: "400L", type: "Duplex", donation: false, trading: false } },
  { id: 20, name: "Fogão Electrolux 5 bocas", subcategory: 9, value: 1200.0, location: "São Paulo - SP", datetime: "30/10/2025, 12:00", seller: "cozinha_ideal", description: "Fogão 5 bocas, ótimo estado, com forno elétrico.", details: { condition: "Usado", type: "Gás", donation: false, trading: false } },
  { id: 21, name: "Sofá-cama 2 lugares", subcategory: 1, value: 800.0, location: "Porto Alegre - RS", datetime: "01/11/2025, 14:15", seller: "moveis_confort", description: "Sofá-cama confortável, ideal para espaços pequenos.", details: { condition: "Usado", material: "Tecido", size: "2 lugares", type: "Sofá-cama", donation: false, trading: false } },
  { id: 22, name: "Estante de madeira 3 prateleiras", subcategory: 1, value: 300.0, location: "Curitiba - PR", datetime: "02/11/2025, 11:40", seller: "decor_lar", description: "Estante resistente, perfeita para livros e decoração.", details: { condition: "Usado", material: "Madeira", type: "Estante", donation: false, trading: true } },
  { id: 23, name: "Cadeira de escritório giratória", subcategory: 1, value: 250.0, location: "Brasília - DF", datetime: "31/10/2025, 10:30", seller: "moveis_chef", description: "Cadeira confortável, regulável em altura e encosto.", details: { condition: "Usado", material: "Couro sintético", type: "Cadeira", donation: false, trading: false } },
  { id: 24, name: "Micro-ondas Electrolux 30L", subcategory: 9, value: 500.0, location: "Florianópolis - SC", datetime: "02/11/2025, 08:50", seller: "home_appliances", description: "Micro-ondas digital, pouco usado, fácil de limpar.", details: { condition: "Usado", capacity: "30L", type: "Micro-ondas", donation: false, trading: false } },
  { id: 25, name: "Notebook Dell Inspiron 15", subcategory: 6, value: 3200.0, location: "São Paulo - SP", datetime: "01/11/2025, 16:00", seller: "tech_store", description: "Notebook i5, 8GB RAM, 256GB SSD, ótimo para trabalho e estudos.", details: { condition: "Usado", storage: "256GB", ram: "8GB", donation: false, trading: false } },
  { id: 26, name: "Notebook MacBook Air M1", subcategory: 6, value: 7200.0, location: "Rio de Janeiro - RJ", datetime: "02/11/2025, 12:30", seller: "apple_store", description: "MacBook Air M1, 256GB SSD, novo, com garantia Apple.", details: { condition: "Novo", storage: "256GB", ram: "8GB", donation: false, trading: false } },
  { id: 27, name: "Máquina de lavar Brastemp 11kg", subcategory: 9, value: 1800.0, location: "Salvador - BA", datetime: "30/10/2025, 11:45", seller: "home_appliances", description: "Lavadora Brastemp 11kg, funciona perfeitamente, pouco uso.", details: { condition: "Usado", capacity: "11kg", type: "Máquina de lavar", donation: false, trading: false } },
  { id: 28, name: "Ventilador Mondial 40cm", subcategory: 3, value: 150.0, location: "Fortaleza - CE", datetime: "01/11/2025, 09:15", seller: "tempcontrol", description: "Ventilador de mesa, ótimo para dias quentes, pouco uso.", details: { condition: "Usado", type: "Mesa", donation: false, trading: true } },
  { id: 29, name: "Tapete Sala 2x3m", subcategory: 1, value: 350.0, location: "Curitiba - PR", datetime: "02/11/2025, 13:20", seller: "decor_lar", description: "Tapete moderno, em excelente estado, fácil de limpar.", details: { condition: "Usado", material: "Syntético", type: "Tapete", donation: false, trading: false } },
  { id: 30, name: "Estufa elétrica de pizza", subcategory: 9, value: 900.0, location: "São Paulo - SP", datetime: "02/11/2025, 17:00", seller: "cozinha_ideal", description: "Estufa profissional, ótima para pizzarias ou uso doméstico.", details: { condition: "Usado", type: "Estufa elétrica", donation: false, trading: false } }
]
