import { useColorScheme } from "./xnft-hooks";

export function useTheme() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  return {
    custom: theme,
    colorScheme,
  };
}

const darkTheme = {
  backgroundColor: "black",
  fontColor: "#ff7003",
};

const lightTheme = {
  backgroundColor: "black",
  fontColor: "#ff7003",
};
