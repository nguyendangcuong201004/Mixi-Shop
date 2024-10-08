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
        
        const type = formChangeMulti.querySelector("select[name='type']").value;

        const listInputChecked = document.querySelectorAll("input[name='checkbox']:checked");   
        if (listInputChecked.length > 0){
            const ids = [];
            listInputChecked.forEach((item) => {
                const id = item.getAttribute("data");
                
                if (type == "change-position"){
                    const position = item.closest("tr").querySelector("input[name='position']").value;
                    ids.push(`${id}-${position}`)
                }
                else {
                    ids.push(id);
                }
            })
            const input = document.querySelector("input[name='ids']");
            const stringIds = ids.join(", ");
            input.value = stringIds;

            if (type == "delete-all"){
                if (!confirm("Bạn chắc chắn muốn xóa những sản phẩm này?")){
                    return;
                }
            }

            formChangeMulti.submit();
        }
        else {
            alert("Bạn phải chọn ít nhất 1 sản phẩm !");
        }
    })
}

// Tinh nang thay doi trang thai nhieu san pham


// Tinh nang xoa 1 san pham - xoa mem

const listButtonDelete = document.querySelectorAll("[button-delete ]");

if (listButtonDelete.length > 0){
    const formDeleteItem = document.querySelector("[form-delete-item]");
    if (formDeleteItem){
        listButtonDelete.forEach((button) => {
            button.addEventListener("click", () => {
                if (confirm("Bạn chắc chắn muốn xóa sản phẩm này?")){
                    const id = button.getAttribute("data-id");
                    const path = formDeleteItem.getAttribute("path");
                    const action = `${path}/${id}?_method=PATCH`;
                    formDeleteItem.action = action;
                    formDeleteItem.submit();
                }
            })
        })
    }
}


// Tinh nang xoa 1 san pham - xoa mem



// Show alert

const showAlert = document.querySelector("[show-alert]");
if (showAlert){
    const time = showAlert.getAttribute("data-time");
    setTimeout(() => {
        showAlert.classList.add("alert-hidden")
    }, parseInt(time))
}

// Close alert
const closeAlert = document.querySelector("[close-alert]");
if (closeAlert){
    closeAlert.addEventListener("click", () => {
        showAlert.classList.add("alert-hidden")
    })
}

//preview

const uploadImage = document.querySelector("[upload-image]");
if(uploadImage) {
  const uploadImageInput = uploadImage.querySelector("[upload-image-input]");
  const uploadImagePreview = uploadImage.querySelector("[upload-image-preview]");

  uploadImageInput.addEventListener("change", () => {
    const file = uploadImageInput.files[0];
    if(file) {
      uploadImagePreview.src = URL.createObjectURL(file);
    }
  });
}

//preview






























// JS cho trang thung rac////////////////////////////////////////////////////////////////////////

const listButtonRestore = document.querySelectorAll('[button-restore]');

if (listButtonRestore.length > 0){
    const formRestore = document.querySelector('[form-restore]');
    if (formRestore){
        listButtonRestore.forEach((button) => {
            button.addEventListener("click", () => {
                const id = button.getAttribute("data-id");
                const path = formRestore.getAttribute("path");
                const action = `${path}/${id}?_method=PATCH`;
                formRestore.action = action;
                formRestore.submit();
            })
        })
    }
}

const listButtonPermanentlyDeleted = document.querySelectorAll("[button-permanently-deleted]");

if (listButtonPermanentlyDeleted.length > 0){
    const formPermanentlyDeleted = document.querySelector('[form-permanently-deleted]');
    if (formPermanentlyDeleted){
        listButtonPermanentlyDeleted.forEach((button) => {
            button.addEventListener("click", () => {
               if (confirm("Bạn chắc chắn muốn xóa vĩnh viễn sản phẩm này?")){
                    const id = button.getAttribute("data-id");
                    const path = formPermanentlyDeleted.getAttribute("path");
                    const action = `${path}/${id}?_method=DELETE`;
                    formPermanentlyDeleted.action = action;
                    formPermanentlyDeleted.submit();
               }
            })
        })
    }
}

// JS cho trang thung rac////////////////////////////////////////////////////////////////////////