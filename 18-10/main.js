let productName = [];

function disPlayAll() {
    str = '';
    str = '<tr><td><b>Product Names</b></td><td></td>'+'<td>'+productName.length+' products</td></tr>';
    for (let i = 0; i < productName.length; i++) {
    str += '<tr><td>'+ productName[i] + '</td>' +
        '<td><button onclick="editName('+i+')">Edit</button></td>' +
        '<td><button onclick="deleteProduct('+i+')">Delete</td></tr>';
}
document.getElementById('disPlay').innerHTML = str;
}

function addProduct() {
    let product = document.getElementById('inp').value;
    productName.push(product);
    document.getElementById('disPlay').innerHTML = "";
    disPlayAll();
}

function editName(index) {
    let name = prompt("Nhập tên mới: ");
    productName[index] = name;
    disPlayAll();
}

function deleteProduct(index) {
    productName.splice(index, 1);
    disPlayAll();
}

function onSearch() {
    let name = document.getElementById('inp').value;
    let check = productName.indexOf(name);
    if (check == '-1') alert('Không có sản phẩm này.');
    else ("Sản phẩm thứ: "+check+1);
}