import { Button } from "@mantine/core";

interface FavoriteButtonProps {
  isFavorite: boolean;
  handler: () => void;
}

export default function FavoriteButton({
  isFavorite,
  handler,
}: FavoriteButtonProps) {
  return (
    <Button
      fullWidth
      radius="md"
      mt="xl"
      size="md"
      variant="outline"
      color={isFavorite ? "red" : "violet"}
      onClick={handler}
    >
      {isFavorite ? "Quitar de Favoritos" : "Agregar a Favoritos"}
    </Button>
  );
}
