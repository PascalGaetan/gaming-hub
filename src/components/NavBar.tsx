import logo from "../assets/logo.webp";
import { Image } from "@chakra-ui/react";
import SearchForm from "./SearchForm";

interface Props {
  onSearch: (input : string) => void;
}

function NavBar({onSearch} : Props) {  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image src={logo} boxSize="60px" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
          </ul>
          <SearchForm onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;