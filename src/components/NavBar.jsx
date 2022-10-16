import { Button, Menu } from "semantic-ui-react";
import "../index.css";

export default function NavBar(props) {
  return (
    <Menu inverted fixed="top">
      <Menu.Item header>
        <img
          src="/movieslogo.png"
          alt="logo"
          style={{ marginRight: "10px", marginLeft: "10px" }}
        />
        Movies
      </Menu.Item>
      <Menu.Item>
        <Button positive content="Add Movie" onClick={() => props.addForm()} />
      </Menu.Item>
    </Menu>
  );
}
