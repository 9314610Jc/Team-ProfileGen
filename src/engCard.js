const engHtml = (role) => {
    return `
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">${role.name}</div>
  <h5 class="card-title"> ${role.getRole()}</h5>  
  <ul class="list-group list-group-flush" style="color: black;">
  <li class="list-group-item">id:${role.id}</li>
  <li class="list-group-item"><a href="#" class="card-link">${role.getGithub()}</a></li>
</ul>
  <div class="card-body">
  <a href="#" class="card-link">${role.email}</a>
</div>
  </div>`
  };
  
  module.exports = engHtml;