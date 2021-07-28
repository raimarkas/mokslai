let textInput = document.getElementById('person')
const displayList = document.getElementById('display-text')

  const option = document.getElementById("buttons");
  option.addEventListener("click", (event) => {
  console.log(event.target.id)
  const btn = event.target.id
  let text = textInput.value
  // inputText = document.createElement('li')
  // li.type = 'text', inputText.value = ""
  displayList.append(text)
  // displayList.textContent = text
})