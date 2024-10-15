let favNumber = 37;
let baseURL = "http://numbersapi.com";
let favNumbers = [37, 27, 17];

// 1 revised
async function part1() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
part1();

// 2. revised
async function part2() {
  let data = await $.getJSON(`${baseURL}/${favNumbers}?json`);
  console.log(data);
}
part2();

// 3. revised
async function part3() {
  let facts = [];

  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  facts.push(data.text)

  data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  facts.push(data.text)

  data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  facts.push(data.text)

  data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  facts.push(data.text)

  facts.forEach(fact => {
    $("body").append (`<p>${fact}</p>`);
  })
}
part3()
