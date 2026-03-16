async function loadChart(){

const response = await fetch("/getUsers");
const data = await response.json();


// PRODUCT LINE SALES
const productLine = {};

data.forEach(item => {
if(!productLine[item.PRODUCTLINE]){
productLine[item.PRODUCTLINE] = 0;
}
productLine[item.PRODUCTLINE] += item.SALES;
});

new Chart(document.getElementById("productChart"),{
type:"bar",
data:{
labels:Object.keys(productLine),
datasets:[{
label:"Sales by Product Line",
data:Object.values(productLine),
backgroundColor:"orange"
}]
},
options:{
plugins:{
title:{
display:true,
text:"Sales by Product Line",
font:{ size:18, weight:'bold' }
},
legend:{
labels:{ font:{ weight:'bold' } }
}
},
scales:{
x:{
ticks:{ font:{ size:20, weight:'bold' } }
},
y:{
ticks:{ font:{ size:20, weight:'bold' } }
}
}
}
});


// COUNTRY SALES
const countrySales = {};

data.forEach(item => {
if(!countrySales[item.COUNTRY]){
countrySales[item.COUNTRY] = 0;
}
countrySales[item.COUNTRY] += item.SALES;
});

new Chart(document.getElementById("countryChart"),{
type:"pie",
data:{
labels:Object.keys(countrySales),
datasets:[{
label:"Yearly Sales by Country",
data:Object.values(countrySales)
}]
},
options:{
plugins:{
title:{
display:true,
text:"Yearly Sales by Country",
font:{ size:18, weight:'bold' }
},
legend:{
labels:{ font:{ size:20, weight:'bold' } }
}
}
}
});


// MONTHLY SALES
const monthlySales = {};

data.forEach(item => {
if(!monthlySales[item.MONTH_ID]){
monthlySales[item.MONTH_ID] = 0;
}
monthlySales[item.MONTH_ID] += item.SALES;
});

new Chart(document.getElementById("monthlyChart"),{
type:"line",
data:{
labels:Object.keys(monthlySales),
datasets:[{
label:"Monthly Sales",
data:Object.values(monthlySales),
borderColor:"blue",
fill:false
}]
},
options:{
plugins:{
title:{
display:true,
text:"Monthly Sales",
font:{ size:18, weight:'bold' }
},
legend:{
labels:{ font:{ weight:'bold' } }
}
},
scales:{
x:{
ticks:{ font:{ size:20, weight:'bold' } }
},
y:{
ticks:{ font:{ size:20, weight:'bold' } }
}
}
}
});

}

window.onload = loadChart;