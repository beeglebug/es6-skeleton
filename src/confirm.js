export default function confirm (provider) {
  const element = document.getElementById('output')
  const message = provider.message
  element.innerText = message
  return message
}
