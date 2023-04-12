var div = document.createElement("div");
div.setAttribute("class", "container");

var table = document.createElement("table");
table.setAttribute("class", "table");
table.setAttribute("id", "active");

var thead = document.createElement("thead");
thead.setAttribute("class", "thead-dark");

var tr1 = document.createElement("tr");


function tbody(tagname, atte, attr, content) {
    var ele = document.createElement(tagname);
    ele.setAttribute(atte, attr);
    ele.innerHTML = content;
    return ele;
}
var th0 = tbody("th", "id", "title", "Id");
var th1 = tbody("th", "id", "title", "Name");
var th2 = tbody("th", "id", "title", "Email");


var tbody = document.createElement("tbody");
tr1.append(th0, th1, th2);
thead.append(tr1);
var div1 = foo("div", "class", "container", "id", "contain");
var div2 = foo("div", "class", "container2", "id", "contain1")
function foo(tagname, fun, fu, att, ate) {
    var ele = document.createElement(tagname);
    ele.setAttribute(fun, fu);
    ele.setAttribute(att, ate);
    return ele;
}
var b1 = butt("button", "&lt;&ltPrev", "id", "a");
var b2 = butt("button", "1", "id", "b");
var b3 = butt("button", "2", "id", "c");
var b4 = butt("button", "3", "id", "d");
var b5 = butt("button", "Next&gt;&gt", "id", "e");

function butt(tag, content, aa, ae,) {
    var ele = document.createElement(tag);
    ele.innerHTML = content;
    ele.setAttribute(aa, ae);
    ele.setAttribute
    return ele;
}

var request = new XMLHttpRequest();
request.open("GET", "https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json");
request.send();
request.onload = function () {
    var res = JSON.parse(request.response);
    console.log(res);
    let x = 1;
    let y = 2;
    let z = 3;
    function foo() {
        b2.innerHTML = `${x}`;
        b3.innerHTML = `${y}`;
        b4.innerHTML = `${z}`;
    }
    document.getElementById("a").addEventListener("click", function () {
        tbody.innerHTML = "";
        if (x > 1 || y > 2 || z > 3) {
            x--; y--; z--;
            foo();
        }
        var row = 5;
        var start = (x - 1) * 5;
        var end = start + row;

        for (var i = start; i < end; i++) {
            var tr = document.createElement("tr");
            var td0 = document.createElement("td");
            td0.innerHTML = `${res[i].id}`;
            var td1 = document.createElement("td");
            td1.innerHTML = `${res[i].name}`;
            var td2 = document.createElement("td");
            td2.innerHTML = `${res[i].email}`;

            tr.append(td0, td1, td2);
            tbody.append(tr);

        }
    });
    document.getElementById("b").addEventListener("click", function () {
        tbody.innerHTML = "";

        var row = 5;
        var start = ((b2.innerHTML) - 1) * 5;
        var end = start + row;
        for (var i = start; i < end; i++) {
            var tr = document.createElement("tr");
            var td0 = document.createElement("td");
            td0.innerHTML = `${res[i].id}`;
            var td1 = document.createElement("td");
            td1.innerHTML = `${res[i].name}`;
            var td2 = document.createElement("td")
            td2.innerHTML = `${res[i].email}`;

            tr.append(td0, td1, td2);
            tbody.append(tr);
        }
        console.log(start);
    });
    document.getElementById("c").addEventListener("click", function () {
        tbody.innerHTML = "";
        var row = 5;
        var start = (b3.innerHTML - 1) * 5;
        var end = start + row;
        x++; y++; z++;
        for (var i = start; i < end; i++) {
            var tr = document.createElement("tr");
            var td0 = document.createElement("td");
            td0.innerHTML = `${res[i].id}`;
            var td1 = document.createElement("td");
            td1.innerHTML = `${res[i].name}`;
            var td2 = document.createElement("td");
            td2.innerHTML = `${res[i].email}`;

            tr.append(td0, td1, td2);
            tbody.append(tr);
        }
        console.log(page);
    });
    document.getElementById("d").addEventListener("click", function () {
        tbody.innerHTML = "";

        var row = 5;
        var start = (b4.innerHTML - 1) * 5;
        var end = start + row;
        for (var i = start; i < end; i++) {
            var tr = document.createElement("tr");
            var td0 = document.createElement("td");
            td0.innerHTML = `${res[i].id}`;
            var td1 = document.createElement("td");
            td1.innerHTML = `${res[i].name}`;
            var td2 = document.createElement("td");
            td2.innerHTML = `${res[i].email}`;

            tr.append(td0, td1, td2);
            tbody.append(tr);
        }
        console.log(start);
        x += 2;
        y += 2;
        z += 2;
    });
    document.getElementById("e").addEventListener("click", function () {
        tbody.innerHTML = "";
        x++; y++; z++;
        foo();
        var row = 5;
        var start = (x - 1) * 5;
        var end = start + row;
        for (var i = start; i < end; i++) {
            var tr = document.createElement("tr");
            var td0 = document.createElement("td");
            td0.innerHTML = `${res[i].id}`;
            var td1 = document.createElement("td");
            td1.innerHTML = `${res[i].name}`;
            var td2 = document.createElement("td");
            td2.innerHTML = `${res[i].email}`;

            tr.append(td0, td1, td2);
            tbody.append(tr);
        }

    });

}
table.append(thead, tbody);
div1.append(table)
document.body.append(div1);
div2.append(b1, b2, b3, b4, b5)
document.body.append(div2);