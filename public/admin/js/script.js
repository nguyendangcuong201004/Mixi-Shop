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

// Tinh nang thay doi trang thai 1 san pham bang phuong thuc patch -> cai method override

const listButtonChangeStatus = document.querySelectorAll('[button-change-status]');

if (listButtonChangeStatus.length > 0){
    const formChangeStatus = document.querySelector("[form-change-status]");
    listButtonChangeStatus.forEach((button) => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("data-status");
            const id = button.getAttribute("data-id");
            const path = formChangeStatus.getAttribute("path");
            const action = `${path}/${status}/${id}?_method=PATCH`;
            formChangeStatus.action = action;
            formChangeStatus.submit()
        });
    })
}

// Tinh nang thay doi trang thai 1 san pham bang phuong thuc patch -> cai method overriinde

// Tinh nang Check box multi

const checkboxMulti = document.querySelector("[checkbox-multi]");

if (checkboxMulti){
    const checkAll = document.querySelector("input[name='checkall']");
    const listCheckBoxId = document.querySelectorAll("input[name='checkbox']");
    
    checkAll.addEventListener("click", () => {
        if (checkAll.checked){
            listCheckBoxId.forEach((item) => {
                item.checked = true;
            })
        }
        else {
            listCheckBoxId.forEach((item) => {
                item.checked = false;
            })
        }
    })

    listCheckBoxId.forEach((item) => {
        item.addEventListener("click", () => {
            const countInputChecked = document.querySelectorAll("input[name='checkbox']:checked").length;
            if (countInputChecked == listCheckBoxId.length){
                checkAll.checked = true;
            }
            else checkAll.checked = false;
        })
    })
}

// Tinh nang Check box multi

// Tinh nang thay doi trang thai nhieu san pham

const formChangeMulti = document.querySelector("[form-change-multi]");

if (formChangeMulti){
    formChangeMulti.addEventListener("submit", (event) => {
        event.preventDefault();
        const listInputChecked = document.querySelectorAll("input[name='checkbox']:checked");   
        if (listInputChecked.length > 0){
            const ids = [];
            listInputChecked.forEach((item) => {
                ids.push(item.getAttribute("data"));
            })
            const input = document.querySelector("input[name='ids']");
            const stringIds = ids.join(", ");
            input.value = stringIds;
            formChangeMulti.submit();
        }
        else {
            alert("Bạn phải chọn ít nhất 1 sản phẩm !");
        }
    })
}

// Tinh nang thay doi trang thai nhieu san pham