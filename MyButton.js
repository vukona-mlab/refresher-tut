export class MyButton{
    constructor(bgColor,buttonText, cornerRadius, textColor)
    {
        this.bgColor=bgColor;
        this.buttonText =buttonText;
        this.cornerRadius = cornerRadius;
        this.textColor = textColor;
    }

    render()
    {
        const btn = document.createElement('button');
        btn.textContent = this.buttonText;
        btn.style.backgroundColor = this.bgColor;
        btn.style.color= this.textColor;
        btn.style.borderRadius = this.cornerRadius;
        btn.style.padding = "10px 20px";
        document.getElementById("root").appendChild(btn)
    }
}