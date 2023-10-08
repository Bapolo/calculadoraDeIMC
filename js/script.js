document.addEventListener("DOMContentLoaded", () => {

    const altura = document.querySelector("#altura")
    const peso = document.querySelector("#peso")
    const form = document.querySelector("form")
    const localDoResultado = document.querySelector("#valor")

    altura.addEventListener("focus", () =>
    {
        document.querySelectorAll("table tr").forEach((el) => 
        {
            el.style.backgroundColor = "#203357"
        })
    })

    peso.addEventListener("focus", () =>
    {
        document.querySelectorAll("table tr").forEach((el) => 
        {
            el.style.backgroundColor = "#203357"
        })
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault()
         const IMC = parseFloat(peso.value) / (Math.pow((parseFloat(altura.value) / 100), 2))

         localDoResultado.innerHTML = ""
         localDoResultado.innerHTML = parseFloat(IMC.toFixed(2))

         if (parseFloat(IMC.toFixed(2)) < 18.5)
         {
            document.querySelector("table tr:nth-child(2)").style.backgroundColor = "#5C862C"
         }
         else if (parseFloat(IMC.toFixed(2)) >= 18.5 && parseFloat(IMC.toFixed(2)) < 25)
         {
            document.querySelector("table tr:nth-child(3)").style.backgroundColor = "#889409"
         }
         else if (parseFloat(IMC.toFixed(2)) >= 25 && parseFloat(IMC.toFixed(2)) < 30)
         {
            document.querySelector("table tr:nth-child(4)").style.backgroundColor = "#B57808"
         }
         else
         {
            document.querySelector("table tr:nth-child(5)").style.backgroundColor = "#B55D08"
         }

    })

})