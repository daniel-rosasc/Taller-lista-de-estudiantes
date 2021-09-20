// // let itemList = [];
// let itemList = localStorage.getItem("items");
// // console.log(itemList);
// if (itemList) {
//   itemList = itemList.split(",");
// } else {
//   itemList = [];
// }

// console.log("itemList 1", itemList);
// lista();

// function addItem() {
//   let itemValue = document.getElementById("item").value;

//   if (itemValue.length > 0) {
//     itemList.push(itemValue);
//     localStorage.setItem("item", itemList);

//     lista();
//   } else {
//     alert("Debes llenar el campo");
//   }
// }

// function lista() {

//   let celItem = document.getElementById("celItem").value
//   let mailItem = document.getElementById("mailItem").value
//   let html = "";
//   for (let i = 0; i < itemList.length; i++) {
//     html += `<div class="row" >
//         <div class="col" >  ${itemList[i]}  </div>
//         <div class="col" > ${celItem[i]} </div>
//         <div class="col" > ${mailItem[i]} </div>
//         <div class="col" >  <button type="button" onclick="deleteItem(${i})" class="btn btn-danger"> X </button> </div>
//         </div>`;
//   }

//   document.getElementById("showImtemList").innerHTML = html;
// }



let itemList = localStorage.getItem("datos")
itemList = itemList ? itemList.split(',') : []

function addItem() {
  let nameEstudiante = document.getElementById("items").value
  let edadEstudiante = document.getElementById("edad").value
  let cursoEstudiante = document.getElementById("curso").value
  let celEstudiante = document.getElementById("celItem").value
  let mailEstudiante = document.getElementById("mailItem").value

  if (
    nameEstudiante &&
    edadEstudiante &&
    cursoEstudiante &&
    celEstudiante &&
    mailEstudiante
  ) {
    itemList.push({
      "nameEstudiante": nameEstudiante,
      "edadEstudiante": edadEstudiante,
      "cursoEstudiante": cursoEstudiante,
      "celEstudiante": celEstudiante,
      "mailEstudiante": mailEstudiante,
    });

    let html = "";
    itemList.forEach((i, index) => {
      html += `<div class="row">
      <div class="col"> ${i.nameEstudiante} </div>
      <div class="col"> ${i.edadEstudiante} </div>
      <div class="col"> ${i.cursoEstudiante} </div>
      <div class="col"> ${i.celEstudiante} </div>
      <div class="col"> ${i.mailEstudiante} </div>
      <div class="col"> <button type="button" onclick="deleteItem(${index})" class="btn btn-danger" > X </button></div>
      `
    })
    document.getElementById("showItemList").innerHTML = html
  }
}

// function showList() {
//   let html = ''
//   for (let i = 0; i < itemList.length; i++) {
//       html += `<div class="row"> 
//    <div class= "col" > ${EstudiantesList[i]} </div> 
//    <div class= "col" > <button type="button" onclick="deleteItem(${i})" class="btn btn-danger" > X </div> 
//    </div>`
//   }

//   document.getElementById('showEstudiantesList').innerHTML = html

// }

function deleteItem(index) {
  itemList.splice(index, 1);
  saveStorage()
  
}

function saveStorage(){
  localStorage.setItem("datos", itemList);
}