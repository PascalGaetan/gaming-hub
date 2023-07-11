import { FormEvent, useRef } from "react";

interface Props {
  onSearch: (input : string) => void;
}

function SearchForm({onSearch} : Props) {

  const searchRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (searchRef.current !== null)
      onSearch(searchRef.current.value);
  };
  return (
    <form
      className="d-flex"
      role="search"
      onSubmit={handleSubmit}
    >
      <input className="form-control me-2" type="text" placeholder="Search" ref={searchRef}/>
      <button className="btn btn-outline-success" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
