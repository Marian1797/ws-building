function httpGet(){
    var url  = "https://reqres.in/api/users?page=1";
    var xhr  = new XMLHttpRequest();
    xhr.open('GET', url, true)
    //xhr.readystatechange = function () {
    //https://teamtreehouse.com/community/xhronreadystatechange-vs-xhronload
    xhr.onload = function () {
        var users = JSON.parse(xhr.responseText);
        let userCard = '';
        const content= document.getElementById('continut');
        if (xhr.readyState == 4 && xhr.status == "200") {
            console.table(users.data);
            let myUsers= users.data
            for(let i=0; i<myUsers.lenght;i++){
                userCard +=`
                <div id="continut" class="feature col">
            <div class="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              <svg class="bi" width="1em" height="1em"><use xlink:href="#collection"></use></svg>
            </div>
            <h3 class="fs-2 text-body-emphasis">${myUsers[i].first_name}</h3>
            <p></p>
            <a href="#" class="icon-link">
              Call to action
              
            </a>
          </div>`
            };

            content.innerHTML=userCard;
        } else {
            console.error(users);
        }
    }
    xhr.send(null);
    }