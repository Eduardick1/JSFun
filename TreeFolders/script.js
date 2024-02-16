const DATA = {
  services: [
    {
      id: 1,
      head: null,
      name: "Проф.осмотр",
      node: 0,
      price: 100.0,
      sorthead: 20,
    },
    {
      id: 2,
      head: null,
      name: "Хирургия",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 3,
      head: 2,
      name: "Удаление зубов",
      node: 1,
      price: 0.0,
      sorthead: 10,
    },
    {
      id: 4,
      head: 3,
      name: "Удаление зуба",
      node: 0,
      price: 800.0,
      sorthead: 10,
    },
    {
      id: 5,
      head: 3,
      name: "Удаление 8ого зуба",
      node: 0,
      price: 1000.0,
      sorthead: 30,
    },
    {
      id: 6,
      head: 3,
      name: "Удаление осколка зуба",
      node: 0,
      price: 2000.0,
      sorthead: 20,
    },
    {
      id: 7,
      head: 2,
      name: "Хирургические вмешательство",
      node: 0,
      price: 200.0,
      sorthead: 10,
    },
    {
      id: 8,
      head: 2,
      name: "Имплантация зубов",
      node: 1,
      price: 0.0,
      sorthead: 20,
    },
    {
      id: 9,
      head: 8,
      name: "Коронка",
      node: 0,
      price: 3000.0,
      sorthead: 10,
    },
    {
      id: 10,
      head: 8,
      name: "Слепок челюсти",
      node: 0,
      price: 500.0,
      sorthead: 20,
    },
  ],
};

// рекурсивная функция принимающая: массив даннных, id родителя списка и самого родителя
function buildTree(data, parentId, container) {
  const ul = document.createElement("ul");
  data.forEach((item) => {
    if (item.head === parentId) {
      const li = document.createElement("li");
      switch (item.node) {
        case 0: {
          li.classList.add("element");
          li.innerHTML = `<span>${item.name}, ${item.price} руб.</span>`;
          break;
        }
        case 1: {
          li.classList.add("node");
          li.innerHTML = `<span>${item.name}</span>`;
          break;
        }
      }

      ul.appendChild(li);
      const children = buildTree(data, item.id, ul);
      if (children) {
        li.appendChild(children);
      }
    }
  });
  return ul.childNodes.length ? ul : null;
}

// Сортировка данных по sorthead
const sortedData = DATA.services.sort((a, b) => a.sorthead - b.sorthead);

// Построение и отображение дерева
const treeContainer = document.querySelector(".container");
const tree = buildTree(sortedData, null, treeContainer);
if (tree) {
  treeContainer.appendChild(tree);
}

treeContainer.onclick = (e) => {
  console.log(e);
  if (e.target.tagName != "SPAN") return;

  const children = e.target.parentNode.querySelector("ul");
  if (!children) return;
  children.parentNode.classList.toggle("closed");
  children.hidden = !children.hidden;
};
