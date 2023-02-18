export default function newdiv(color, sizex, sizey, name) {
  const a = document.createElement("div");
  a.style.backgroundColor = color;
  a.style.width = sizex;
  a.style.height = sizey;
  a.id = name;
  return a;
}
