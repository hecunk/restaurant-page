import "./styles.css";
import { Home, Menu, About } from "./content";



function main() {
    Home();

    const home = document.getElementById("home");
    home.addEventListener("click", () => { Home() });

    const menu = document.getElementById("menu");   
    menu.addEventListener("click", () => { Menu() });

    const about = document.getElementById("about");
    about.addEventListener("click", () => { About() });
}

main();