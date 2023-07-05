import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BiChevronDownCircle } from "react-icons/bi";

interface Props {
  onSelectOrderBy : (sortOrder : string) => void
}

function SortSelector({onSelectOrderBy} : Props) {
  const sortSelectors = [
    { value: '', label: 'Relevance'},
    { value: '-added', label: 'Date added'},
    { value: '-name', label: 'Name'},
    { value: '-released', label: 'Release date'},
    { value: '-metacritic', label: 'Popularity'},
    { value: '-rating', label: 'Average rating'}
  ]
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BiChevronDownCircle />}>
        Order By: 
      </MenuButton>
      <MenuList>
        {sortSelectors.map((sort) => (
          <MenuItem onClick ={() => onSelectOrderBy(sort.value)} key={sort.value} value={sort.value}>{ sort.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default SortSelector;
