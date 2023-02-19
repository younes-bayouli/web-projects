let input = document.getElementById("input");
let r = document.getElementById("result");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                input.innerText = "";
                r.innerText = "";
            case "⌫":
                if (r.innerText === "Error!") {
                    input.innerText = "";
                    r.innerText = "";
                } else if (r.innerText) {
                    input.innerText = input.innerText.slice(0, -1);
                    r.innerText = r.innerText.slice(0, -1);
                }
                break;
            case "x":
                r.innerText += "*";
                input.innerText += e.target.innerText;
                break;
            case "÷":
                r.innerText += "/";
                input.innerText += e.target.innerText;
                break
            case "=":
                try {
                    input.innerText = eval(r.innerText);
                    r.innerText = eval(r.innerText);
                } catch {
                    input.innerText = "Error!";
                    r.innerText = "Error!";
                }
                break;
            default:
                input.innerText += e.target.innerText;
                r.innerText += e.target.innerText;
        }
    })
})
