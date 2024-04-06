// Tinh nang bo loc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const buttonStatus = document.querySelectorAll("[button-status]");

if (buttonStatus.length > 0){
    let url = new URL(location.href);

    buttonStatus.forEach((button) => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if (status){
                url.searchParams.set("status", status);
            }
            else url.searchParams.delete("status");
            location.href = url.href;
        })
    })
}

// Tinh nang bo loc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Tinh nang tim kiem - khong mat bo loc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const formSearch = document.querySelector("#form-search");

if (formSearch){
    let url = new URL(location.href);
    formSearch.addEventListener("submit", (event) => {
        event.preventDefault();

        const keyword = event.target.elements.keyword.value;

        if (keyword){
            url.searchParams.set("keyword", keyword);
        }
        else url.searchParams.delete("keyword");

        location.href = url.href;
    })
}

// Tinh nang tim kiem - khong mat bo loc~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Tinh nang phan trang~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`~

const listButtonPagination = document.querySelectorAll('[button-pagination]');

if (listButtonPagination.length > 0){
    let url = new URL (location.href);
    listButtonPagination.forEach((button) => {
        button.addEventListener("click", () => {
            const page = button.getAttribute('button-pagination');
            url.searchParams.set("page", page);
            location.href = url.href;
        })
    })
}

// Tinh nang phan trang~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~