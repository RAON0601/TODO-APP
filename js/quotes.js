const quotes = [
  {
    author: "Diane Frolov",
    message: "마음에 대해 논할 때, 자기 기만에 대해서는 할 말이 많다.",
  },
  {
    author: "Seneca",
    message:
      "당신이 행한 봉사에 대해서는 말을 아끼라. 허나 당신이 받았던 호의들에 대해서는 이야기하라",
  },
  {
    author: "Mother Teresa",
    message:
      "나는 내가 아픔을 느낄만큼 사랑하면 아픔은 사라지고 더 큰 사랑만이 생겨난다는 역설을 발견했다",
  },
  {
    author: "Iris Murdoch",
    message: "우리는 오로지 사랑을 함으로써 사랑을 배울 수 있다.",
  },
  {
    author: "Benjamin Disraeli",
    message: "위대한 봉사는 하나의 행위나 단 한 가지 실수로도 없어질 수 없다",
  },
  {
    author: "Mother Teresa",
    message:
      "세상에는 빵 한 조각 때문에 죽어가는 사람도 많지만, 작은 사랑도 받지 못해서 죽어가는 사람은 더 많다.",
  },
  {
    author: "William Somerset Maugham",
    message:
      "여자는 남자에게서 받은 상처는 용서할 수 있지만 자신을 위해 하는 희생은 절대 용서하지 못한다",
  },
  {
    author: "Anton Chekhov",
    message:
      "아마도 사랑할 때 우리가 경험하는 감정은 우리가 정상임을 보여준다. 사랑은 스스로 어떤 사람이 되어야 하는지를 보여준다",
  },
  {
    author: "Henry David Thoreau",
    message: "더 많이 사랑하는 것 외에 다른 사랑의 치료약은 없다",
  },
  {
    author: "Madonna",
    message:
      "용기있다는 것은 답례로 아무것도 기대하지 않고 누군가를 무조건적으로 사랑하는 것이다. 사랑을 그저 주는 것이다. 우리는 넘어지거나 쉽게 상처 받길 원치 않으므로 사랑하려면 용기가 필요하다.",
  },
];

const qutoe = document.querySelector(".quote");
const author = qutoe.querySelector(".author");
const message = qutoe.querySelector(".message");

const getRandomIndex = (length) => Math.floor(Math.random() * length);

const rIdx = getRandomIndex(quotes.length);
author.innerHTML = quotes[rIdx].author;
message.innerHTML = quotes[rIdx].message;
