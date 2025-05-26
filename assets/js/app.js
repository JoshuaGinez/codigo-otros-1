const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); //se corrige el selector
const $b = document.querySelector('.blog'); //cambio de selector # a . 
const $l = document.querySelector('.location'); 

async function displayUser(username) { // se le añade la async a la funcion, no estaba 
  $n.textContent = 'cargando...';
try{  //se inicializa el trycatch 
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();  //se añade para obtener la data 
  console.log(data);
  $n.textContent = `${data.name}`;//se cambian las comillas ' por `
  $b.textContent = `${data.blog}`;//se cambian las comillas ' por `
  $l.textContent = `${data.location}`;//se cambian las comillas ' por `
} catch (erro){
  handleError(err);
}
} // no estaba cerrada la funcion display 
function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`; 
} 

displayUser('stolinski'); //se elimina el catch ya que se refactoriza en la funcion principal 
