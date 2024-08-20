const add = document.querySelector(".submit")
const title = document.querySelector("#title")
const note = document.querySelector("#context")
const saved = document.querySelector(".notes")
const update = document.querySelector(".update")
const cancel = document.querySelector(".cancel")
let ids = [];
let response = await fetch("/show")
let notes = await response.json()

let indexForEdit;
title.value = ""
note.value = ""

notes.forEach(element => {
    ids.push(element._id)
    saved.innerHTML = saved.innerHTML + `
    <div>
    <div class="titlecont">
    <div class="title">
    <h3>${element.title}</h3>
    </div>
    <div>
    <button class="edit">
    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                            color="#ffffff" fill="none">
                            <path
                            d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591"
                            stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                            <path d="M11 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            </button>
                            
                            <button class="delete">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
                            color="#ffffff" fill="none">
                            <path
                            d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                            <path
                                d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
                                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" />
                                <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5"
                                stroke-linecap="round" />
                                </svg>
                                </button>
                                </div>
                                </div>
                                <div class="note">
                                <p>${element.note}</p>
                                </div>
                                 </div> 
                                `
});

function updateclick() {
    updatefxn(indexForEdit)
}

let edit = document.querySelectorAll(".edit")
let noteTitle = document.querySelectorAll(".title")
let noteNote = document.querySelectorAll(".note")

edit.forEach((element, index) => {
    element.addEventListener("click", () => editfxn(index))
});

let deleted = document.querySelectorAll(".delete")

deleted.forEach((element, index) => {
    element.addEventListener("click", () => deletefxn(index))
});


let data = {}

add.addEventListener("click", async () => {
    data = {
        title: title.value == "" ? undefined : title.value,
        note: note.value
    }
    let response = await fetch('/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    let newid = await response.json()
    ids.push(newid)
    data.title.trim() === "" ? data.title = "Untitled" : data.title = data.title;

    if (response.status == 200) {

        saved.innerHTML = saved.innerHTML + `
        <div>
        <div class="titlecont">
        <div class="title">
        <h3>${data.title}</h3>
        </div>
        <div>
        <button class="edit">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
        color="#ffffff" fill="none">
        <path
        d="M15.2141 5.98239L16.6158 4.58063C17.39 3.80646 18.6452 3.80646 19.4194 4.58063C20.1935 5.3548 20.1935 6.60998 19.4194 7.38415L18.0176 8.78591M15.2141 5.98239L6.98023 14.2163C5.93493 15.2616 5.41226 15.7842 5.05637 16.4211C4.70047 17.058 4.3424 18.5619 4 20C5.43809 19.6576 6.94199 19.2995 7.57889 18.9436C8.21579 18.5877 8.73844 18.0651 9.78375 17.0198L18.0176 8.78591M15.2141 5.98239L18.0176 8.78591"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
        stroke-linejoin="round" />
        <path d="M11 20H17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        </svg>
        </button>
        
        <button class="delete">
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"
        color="#ffffff" fill="none">
        <path
        d="M19.5 5.5L18.8803 15.5251C18.7219 18.0864 18.6428 19.3671 18.0008 20.2879C17.6833 20.7431 17.2747 21.1273 16.8007 21.416C15.8421 22 14.559 22 11.9927 22C9.42312 22 8.1383 22 7.17905 21.4149C6.7048 21.1257 6.296 20.7408 5.97868 20.2848C5.33688 19.3626 5.25945 18.0801 5.10461 15.5152L4.5 5.5"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path
        d="M3 5.5H21M16.0557 5.5L15.3731 4.09173C14.9196 3.15626 14.6928 2.68852 14.3017 2.39681C14.215 2.3321 14.1231 2.27454 14.027 2.2247C13.5939 2 13.0741 2 12.0345 2C10.9688 2 10.436 2 9.99568 2.23412C9.8981 2.28601 9.80498 2.3459 9.71729 2.41317C9.32164 2.7167 9.10063 3.20155 8.65861 4.17126L8.05292 5.5"
        stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
        <path d="M9.5 16.5L9.5 10.5" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" />
        <path d="M14.5 16.5L14.5 10.5" stroke="currentColor" stroke-width="1.5"
        stroke-linecap="round" />
        </svg>
        </button>
        </div>
        </div>
        <div class="note">
        <p>${data.note}</p>
        </div>
        </div>
        `
        title.value = ""
        note.value = ""

        document.querySelectorAll(".note")[document.querySelectorAll(".note").length - 1].scrollIntoView({
            behavior: 'smooth'
        });

        edit = document.querySelectorAll(".edit")
        deleted = document.querySelectorAll(".delete")
        noteTitle = document.querySelectorAll(".title")
        noteNote = document.querySelectorAll(".note")

        edit.forEach((element, index) => {
            element.addEventListener("click", () => editfxn(index))
        });

        deleted.forEach((element, index) => {
            element.addEventListener("click", () => deletefxn(index))
        });

    }
    else {
        alert(`Error ${response.status}: You are being stupid, maybe check your note.`)
    }

})

cancel.addEventListener("click", () => {
    add.style.display = "block"
    cancel.style.display = "none"
    update.style.display = "none"
    title.value = ""
    note.value = ""
})

const editfxn = (index) => {
    title.value = noteTitle[index].firstElementChild.innerHTML
    note.value = noteNote[index].firstElementChild.innerHTML

    title.scrollIntoView({
        behavior: 'smooth'
    });

    add.style.display = "none"
    update.style.display = "block"
    cancel.style.display = "block"
    indexForEdit = index
    if (update.addEventListener("click", updateclick)) {
        update.removeEventListener("click", updateclick)
    }
    update.addEventListener("click", updateclick)

}
const updatefxn = async (index) => {
    let updated = {
        id: ids[index],
        title: title.value,
        note: note.value
    }

    let response = await fetch("/update", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updated)
    })
    let titles = document.querySelectorAll(".title")
    let notes = document.querySelectorAll(".note")
    if (response.status == 200) {
        titles[index].innerHTML = `<h3>${updated.title}</h3>`
        notes[index].innerHTML = `<p>${updated.note}</p>`
        titles[index].scrollIntoView({
            behavior: 'smooth'
        });

        add.style.display = "block"
        update.style.display = "none"
        cancel.style.display = "none"
        title.value = ""
        note.value = ""
    }
    else {
        alert(await response.text())
    }
}

const deletefxn = async (index) => {
    let id = { id: ids[index] }
    ids.splice(index, 1)
    let response = await fetch("/delete", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(id)
    })

    if (response.status == 200) {
        deleted = document.querySelectorAll(".delete")
        deleted[index].parentElement.parentElement.parentElement.remove()
        deleted = document.querySelectorAll(".delete")

        add.style.display = "block"
        update.style.display = "none"
        cancel.style.display = "none"
        title.value = ""
        note.value = ""
        deleted.forEach((element, index) => {
            let newElement = element.cloneNode(true);
            element.parentNode.replaceChild(newElement, element);
            newElement.addEventListener("click", () => deletefxn(index))
        });
    }
    else if (response.status == 404) {
        alert("Note not found")
    }

}


// todos


// fix the new element not editing must be to do sonethibng with add eventr listener edit.foreach