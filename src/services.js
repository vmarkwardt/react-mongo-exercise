export async function getCards() {
  const res = await fetch('/cards');
  return await res.json();
}

export function postCards(card) {
  return fetch('/cards', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card),
  });
}

export function patchCard(card) {
  return fetch(`/cards/${card._id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(card),
  }).then((res) => res.json);
}

export function deleteCard(id) {
  console.log('services.js -> DELETE Cards: ', id);

  return fetch(`/cards/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: id }),
  }).then((res) => res.json);
}

export function setLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getLocal(name) {
  try {
    return JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.log(error);
  }
}
