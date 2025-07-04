export const CATEGORIAS = [
  "Hortifruti",
  "Açougue",
  "Frios",
  "Mercearia",
  "Biscoitos",
  "Bebidas",
  "Higiene",
  "Limpeza",
  "Temperos",
] as const

export type Categoria = typeof CATEGORIAS[number]
