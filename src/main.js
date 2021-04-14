const html = ( newHtml) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
            crossorigin="anonymous"
          />
          <link 
          rel='stylesheet'
          href='./assets/style.css'
          />
          <title>Profiles</title>
        </head>
      
        <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container-fluid">
          <h1 class="display-4 text-center">Profiles</h1>
        </div>
      </div>
          <div class="container-fluid mx-auto">
          <div class='card-columns'>
          ${newHtml}
          </div>
               
              </div>
              <script src="index.js"></script>
              </body>
      
  `;
  };
  
  module.exports = html;