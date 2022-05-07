const BASE_URL = "https://note-board-b.herokuapp.com";

const GET = () => fetch(`${BASE_URL}/notes`).then((res) => res.json());

async function POST(body) {
    await fetch (BASE_URL + "/save-note",{
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body)
  })};

async function DELETE(id){
  await fetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
  })};

const PUT = (id, body) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(body),
  });

export { GET, POST, PUT, DELETE };
