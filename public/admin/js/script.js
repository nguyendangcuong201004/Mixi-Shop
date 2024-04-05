// Tinh nang bo loc

const buttonStatus = document.querySelectorAll("[button-status]");

console.log(buttonStatus)

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

// Tinh nang bo loc
