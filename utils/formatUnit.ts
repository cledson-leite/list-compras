export const FormatUnit = (unidade: string, quantidade: number) => {
  switch (unidade) {
    case 'quilo':
      return quantidade + ' kg'
    case 'litro':
      return quantidade + ' L'
    case 'unidade':
      return quantidade + ' un'
  }
}