/*
 <tr>
    <td>1.</td>
    <td>Kiss</td>
    <td>János</td>
    <td>55</td>
    <td>
    <div class="btn-group">
    <button class="btn btn-info"><i class="fas fa-sync-alt"></i></button>
    <div class="button btn btn-danger"><i class="fas fa-trash-alt"></i></div>
    </div>
    </td>
</tr>
*/

let users = [
    {surName : "Berger", firstname : "Whitney", age :22},
    {surName : "Isván", firstname : "Kiss", age :31},
    {surName : "Rostás", firstname : "Mária", age :48},
    {surName : "Gizella", firstname : "Piros", age :12},
    {surName : "Kornél", firstname : "Varga", age :76},
];

let tableBody = document.querySelector("#userTable tbody");
let createTD = (html, parent) => {
    let td = document.createElement("td");
    td.innerHTML = html;
    parent.appendChild(td);
};
for (let k in users) {
    let tr = document.createElement("tr");
    createTD(parseInt(k)+1, tr);
    for(let value of Object.values(users[k])) {
        createTD(value, tr);
    }
    tableBody.appendChild(tr);
};