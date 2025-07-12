import { memo, useEffect } from "react";
import { useListPending } from "@/stores";
import { Loader } from "@/components/atomic/Loader";
import { Empty } from "@/components/atomic/Empty";
import ItemsList from "../ItemsList";
import { Confirmed, Product } from "@/DTO";

type ItemsListContainerProps = {
  list: Confirmed[] |Product[]
  loading: boolean
}

function ItemsListContainer({ list, loading }: ItemsListContainerProps) {
  const isConfirmeds= !!(list[0] as Confirmed)?.price;
  if (loading) {
    return <Loader isLoading={loading} />;
  }

  if (list.length === 0) {
    return (
      <Empty 
        title={`Nenhum pedido ${isConfirmeds ? 'confirmado' : 'pendente'}.`} 
        subtitle={`Você ainda não possui nenhum pedido ${isConfirmeds ? 'confirmado' : 'pendente'}.`} 
      />
    );
  }

  return <ItemsList list={list} />;
}

export default memo(ItemsListContainer);