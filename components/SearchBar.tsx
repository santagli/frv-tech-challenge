import { TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export const SearchBar = ({
  setSearchTerm,
  setPage,
}: {
  setSearchTerm: (term: string) => void;
  setPage: (page: number) => void;
}) => {
  return (
    <TextInput
      radius="xl"
      size="lg"
      width="1000px"
      placeholder="Buscar usuario..."
      rightSectionWidth={42}
      onChange={(e) => {
        setSearchTerm(e.currentTarget.value);
        setPage(1);
      }}
      leftSection={<IconSearch size={18} stroke={1.5} />}
    />
  );
};

export default SearchBar;
