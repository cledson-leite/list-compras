import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; 

export function formatToBRL(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
}