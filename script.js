function createTable() {
    //Write your code here
	let rows = prompt("Input number of rows");
	if(rows<2){
		alert("please enter value >=2");
		return;
	}
	let columns= prompt("input number of columns");
	if(columns<3){
		alert("please enter value >=2");
		return;
	}

	let myTable = document.getElementById('myTable');

	for(let row=0;row<rows;row++){
		let tr = document.createElement('tr');
		for(let col=0;col<columns;col++){
			let td = document.createElement('td');
				td.innerText= `Row-${row} Column-${col}`;
			tr.appendChild(td);
		}

			myTable.appendChild(tr);
	}

  
}