import template from "./template.html";
import "./style.css";

window.onload = () => {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1.0');
  document.head.appendChild(meta);

  const devicon = document.createElement("link");
  devicon.setAttribute("rel", "stylesheet");
  devicon.setAttribute("href", "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css");
  document.head.appendChild(devicon);

  const iconify = document.createElement("script");
  iconify.setAttribute("src", "//code.iconify.design/1/1.0.6/iconify.min.js");
  document.head.appendChild(iconify);

  document.body.innerHTML = template;
}