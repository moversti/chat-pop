export default async function elizabot(humanMessage) {
  async function fetchaa(url) {
    const p = await fetch(url, { mode: "cors" });
    const text = await p.text()
    return text
  }

  let url = "https://moversti.eu.pythonanywhere.com/eliza?msg=" + humanMessage;
  let result = await fetchaa(url);
  return result;
}
