export interface Product {
  id: string
  nome: string
  categoria: string
  unidade: string
  quantidade: number
}

export interface Confirmed extends Product {
  price: number
}
