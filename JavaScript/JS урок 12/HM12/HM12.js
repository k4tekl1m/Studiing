
$(document).ready(function(){
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'get',
        dataType: 'json',
        success: function(data){
            data.forEach(task=>{
                console.log(task)
                $("#myTable").find('tbody').append(`
                <tr id="${task.id}">
                <td>${task.id}</td>
                <td>${task.title}</td>
                <td>${task.completed}</td>
                </tr>
                `)
            });
            const table = document.querySelector("#myTable");
            const th = table.querySelectorAll("th");
            let tbody = table.querySelector("tbody");
            let rows = [...tbody.rows];

            th.forEach((header) => {
                header.addEventListener("click", function () {
                let columnIndex = header.cellIndex;
                let sortDirection =
                header.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
                header.setAttribute("data-sort-direction", sortDirection);

            rows.sort((a, b) => {
                let aValue = a.cells[columnIndex].textContent;
                let bValue = b.cells[columnIndex].textContent;

                if (sortDirection === "asc") {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return bValue > aValue ? 1 : -1;
                }
            });

            tbody.remove();
            tbody = document.createElement("tbody");
            rows.forEach((row) => tbody.appendChild(row));
            table.appendChild(tbody);
        });
        });
        }
    })
})