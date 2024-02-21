const name_element = document.getElementById("name-input");
const comment_element = document.getElementById("comment-input");

const name_placeholder = document.getElementById("name-placeholder");
const comment_placeholder = document.getElementById("comment-placeholder");


if (name_element.value !== "") {
    name_placeholder.style.display = "none";
}

if (comment_element.value !== "") {
    comment_placeholder.style.display = "none";
}

name_element.addEventListener("focusin", (e) => {
    if (name_element.value === "") {
        name_placeholder.style.display = "none";
    }
});

name_element.addEventListener("focusout", (e) => {
    if (name_element.value === "") {
        name_placeholder.style.display = "block";
    }
});


comment_element.addEventListener("focusin", (e) => {
    if (comment_element.value === "") {
        comment_placeholder.style.display = "none";
    }
});

comment_element.addEventListener("focusout", (e) => {
    if (comment_element.value === "") {
        comment_placeholder.style.display = "block";
    } else {
        comment_placeholder.style.display = "none";
    }
});
