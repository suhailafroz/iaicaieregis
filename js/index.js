console.log("Linked", firebase);

//Reading the data from the firebase real time database

let read = document.getElementById("read");
let display = document.getElementById("display");
let total = document.getElementById("total");
let students = document.getElementById("stud");
let exportBtn = document.getElementById("btnExport");


read.addEventListener("click", () => {
    let dbRef = firebase.database().ref().child("users/");
    dbRef.orderByChild("organization").on("value", (snap) => {
        display.innerHTML = "";
        let tot = 0;
        let stud = 0;
        tot = Object.keys(snap.val()).length;
        console.log(tot);
        snap.forEach((childSnap) => {
            let row = display.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);

            cell1.innerHTML = childSnap.val().name;
            cell2.innerHTML = childSnap.val().designation;
            cell3.innerHTML = childSnap.val().organization;
            cell4.innerHTML = childSnap.val().location;
            cell5.innerHTML = childSnap.val().phone;
            cell6.innerHTML = childSnap.val().email;
            cell7.innerHTML = childSnap.val().area;
            // console.log('user', childSnap.val().name);
            if ((childSnap.val().designation).toLowerCase() === "student") {
                // console.log('user', childSnap.val().designation);
                stud = stud + 1;
            }
        });
        total.innerHTML = "Total Registrations  : " + tot;
        students.innerHTML = "Students  : " + stud;
        console.log(stud);
    })
})



