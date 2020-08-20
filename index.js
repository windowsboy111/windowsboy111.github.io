projects = document.getElementById("projects").children;
var tooltip_desc;
for (var project of projects) {
    if (project.tagName === "P") {
        switch (project.children[0].getAttribute("href")) {
            case "merlin-py/":
                tooltip_desc = "An open source discord.py bot that can moderate servers and more";
                break;
            case "pyTableMaker/":
                tooltip_desc = "The library / module for python to allow programmers to create, edit and show tables without gui conveniently";
                break;
            case "marshup/":
                tooltip_desc = "A file explorer written in nim-lang for colorized consoles";
                break;
            default:
                // discard
        }
        if (tooltip_desc) {
            project.children[0].setAttribute("title", tooltip_desc);
        }
        tooltip_desc = "";
    }
}