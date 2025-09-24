const prenom = localStorage.getItem('prenom')
 
if(prenom === null){
  localStorage.setItem('prenom', 'Yoann')
}
else{
  document.querySelector('p').innerHTML = `Bonjour ${prenom}`
}