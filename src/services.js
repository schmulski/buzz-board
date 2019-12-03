export function getEvents() {
  return fetch('/events').then(res => res.json())
}
// export function postEvents(event) {
//   return fetch('/events', {
//     method: 'POST',
//     body: JSON.stringify(event),
//     headers: {
//       'content-type': 'application/json',
//     },
//   }).then(res => res.json())
// }
// export function patchEvent(event) {
//   return fetch('/events/' + event.id, {
//     method: 'PATCH',
//     body: JSON.stringify(event),
//     headers: {
//       'content-type': 'application/json',
//     },
//   }).then(res => res.json())
// }
// export function deleteCard(id) {
//   return fetch('/cards/' + id, {
//     method: 'DELETE',
//   }).then(res => res.json())
// }
