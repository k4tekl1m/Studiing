//1
const pp = [...document.querySelectorAll('.pp')];
const hh = [...document.querySelectorAll('h2')];

hh.forEach(elem => {	
  elem.style.backgroundColor = "rgb(63, 128, 169)"
  elem.style.color = "white"
  elem.style.padding = "5px"
  elem.style.margin = "0px"
  elem.style.border = "1px solid rgb(33, 61, 78)"
	elem.style.cursor = 'pointer';	
	elem.addEventListener('click', function () {
		if(this.classList.contains('clk')) return;

		this.classList.add('clk');		
		let nextElement = this.nextElementSibling;
		nextElement.style.display = 'block';
		
		pp.forEach(p => {
			if(p === nextElement) return;
			p.style.display = 'none';
		});
		
		hh.forEach(h => {
			if(h === this) return;
			h.classList.remove('clk');
		});
	});
});


//2
const onSubmit = (e) => {
    e.preventDefault()
    let monthNumber = document.getElementById("monthNumber").value
    let year = document.getElementById("yearNumber").value
    let mon = monthNumber - 1; 
    let d = new Date(year, mon);
    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';
    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';
      if (getDay(d) % 7 == 6) { 
        table += '</tr><tr>';
      }
      d.setDate(d.getDate() + 1);
    }
    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }
    table += '</tr></table>';
    calendar.innerHTML = table;
  }
  function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }


//3
for (let e of Array.from(document.links)) {
  e.addEventListener('mouseover', function (){
    if (e.href.match(/^https?:/i || /^http?:/i)){
      e.style.borderBottom = "1px dashed rgb(78, 88, 221)"
      e.style.color = "rgb(78, 88, 221)"
    }else{
      e.style.color = "blue"
    }
  })
  e.addEventListener('mouseout', function (){
    if (e.href.match(/^https?:/i || /^http?:/i))
        e.style.borderBottom = "none"
        e.style.color = "blue"
  })
}

