const menu = document.getElementById("menu");
const tools = document.querySelectorAll(".tool");

tools.forEach(tool => {
    const title = tool.querySelector("h2").textContent;

    const  link = document.createElement("a");
    link.href = "#" + tool.id;
    link.textContent = title;

    menu.appendChild(link);
});
