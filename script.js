const urlInput = document.querySelector('input')
const button = document.querySelector('button')
const messageErr = document.querySelector('.messageErr')

button.addEventListener("click", async () => {
    try {
        const reponse = await fetch(urlInput.value)
        const file = await reponse.blob()
        const link = document.createElement("a")
        link.href = URL.createObjectURL(file)
        link.download = new Date().getTime()
        link.click()
        messageErr.textContent = ""
        messageErr.style.display = ""
    } catch (error) {
        messageErr.textContent = "error download file"
        messageErr.style.display = "block"
    }
})