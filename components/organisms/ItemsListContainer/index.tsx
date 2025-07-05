import { memo, useEffect } from "react";
import { useListPending } from "@/stores";
import { Loader } from "@/components/atomic/Loader";
import { Empty } from "@/components/atomic/Empty";
import ItemsList from "../ItemsList";

function ItemsListContainer() {
  const { list, loading, loadList } = useListPending();

  useEffect(() => {
    loadList();
  }, []);

  if (loading) {
    return <Loader isLoading={loading} />;
  }

  if (list.length === 0) {
    return (
      <Empty 
        title="Nenhum pedido pendente" 
        subtitle="Você ainda não possui nenhum pedido pendente." 
      />
    );
  }

  return <ItemsList list={list} />;
}

export default memo(ItemsListContainer);