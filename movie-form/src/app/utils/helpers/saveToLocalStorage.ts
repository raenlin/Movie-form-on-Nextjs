export function saveToLocalStorage(name: string, data: unknown) {
  localStorage.setItem(name, JSON.stringify(data));
}

export function getFromLocalStorage(name: string) {
  return localStorage.getItem(name);
}
