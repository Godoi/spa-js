import "./list.css";
import { getUsers } from '../../core/services/git-service.js';

const innerTable = (table,section) => {  
  const tbody = document.createElement('tbody');
  const innerRow = (id,user) => {
    const tr = document.createElement('tr');
    const row = `<th scope=\"row\">${id}</th> 
    <td>${user}</td>
    <td>
      <a href=\"javascript:void(0);\" onclick=\"nav('/register')\">
        [detalhes]
      </a>
    </td>`;
    tr.innerHTML = row;
    return tr;
  }
  let response = getUsers();
  response.then(result => { 
    if(result){
      result.data.forEach(item => {
        tbody.appendChild(innerRow(item.id,item.login));
      });
    }          
  }).catch();

  table.appendChild(tbody);
  section.querySelector('.container-list').appendChild(table);
}

const embedTable = (section) => {
  const thead = 
  `<thead class="bg-dark-slate-gray">
       <tr>
         <th scope="col">#</th>
         <th scope="col">Usuário</th>
         <th scope="col">Repositórios</th>
       </tr>
     </thead>`
  
  const table = document.createElement('table');
  table.innerHTML = thead;
  table.classList.add('table');
  table.classList.add('table-bordered');
  innerTable(table,section);
  return table;
}

const templateList = () => {
  const header = `
    <div class="header-section bg-dark-slate-gray">
      <div class="container">
        <h1>Lista de usuários</h1>
      </div>
    </div>
    <div class="container-list container bg-gray-lightest"></div>`

    const section = document.createElement('section');
    section.innerHTML = header;
    embedTable(section);
    return section;
}

export default templateList;