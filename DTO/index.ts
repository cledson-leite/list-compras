export interface Product {
  id?: string
  nome: string,
  categoria: string,
  unidade: string,
  quantidade: number
}

export interface Confirmed {
    id: string
    nome: string
    categoria: string
    unidade: string
    quantidade: number
    price: number
  }