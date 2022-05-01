// Usa un bucle for para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un console log el array.

const placesToTravel1 = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (const index in placesToTravel1) {
  const { id, name } = placesToTravel1[index];
  if (id === 11 || id === 40) {
    placesToTravel1.splice(index, 1);
  }
}

console.log(placesToTravel1);
