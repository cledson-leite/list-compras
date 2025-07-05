import { View } from "@/styles/Themed";
import Typograph from "../Typograph";
import { styles } from "./styles";

type EmptyProps = {
  title: string;
  subtitle: string;
}

export const Empty = ({ title, subtitle }: EmptyProps) => {
  return (
    <View style={styles.container}>
      <Typograph variant='title'>{title}</Typograph>
      <Typograph variant='subtitle'>{subtitle}</Typograph>
    </View>
  );
};