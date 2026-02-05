let books = ["Nha Gia Kim", "Dac Nhan Tam", "Tuan Lam Viec 4 Gio"];

let menu = `--- QUẢN LÝ THƯ VIỆN 4.0 ---
            1. Xem danh sách
            2. Nhập sách mới
            3. Mượn sách (Xóa)
            4. Sửa tên sách
            5. Sắp xếp A-Z
            0. Thoát

            Bạn chọn:`;

let choice;
do {
    choice = prompt(menu);
    
    switch (choice) {
        case "1":
            console. log("Số lượng sách trong kho: ", books.length);
            console. log("Danh sách các quyển sách trong kho: ");
            for (let i = 0; i < books.length; i++) {
                console. log(`${i + 1}. ${books[i]}`);
            }
            break;

        case "2":
            let newBook = prompt("Nhập tên cuốn sách mới:");
            if (newBook && newBook.trim() !== "") {
                books.push(newBook.trim());
                alert("Đã thêm thành công!");
            } else {
                alert("Tên sách không hợp lệ!");
            }
            break;

        case "3":
            let bookName = prompt("Nhập tên sách muốn mượn:");
            if (bookName) {
                let index = books.indexOf(bookName.trim());
                if (index === -1) {
                    alert(`=> Lỗi: Không tìm thấy sách ${bookName}!`);
                } else {
                    books.splice(index, 1);
                    alert(`=> Đã cho mượn cuốn '${bookName}'.`);
                }
            }
            break;

        case "4":
            let oldName = prompt("Nhập tên sách cũ cần sửa:");
            if (oldName) {
                let idx = books.indexOf(oldName.trim());
                if (idx === -1) {
                    alert(`=> Lỗi: Không tìm thấy sách '${oldName}'!`);
                } else {
                    let newName = prompt("Nhập tên sách mới:");
                    if (newName && newName.trim() !== "") {
                        books[idx] = newName.trim();
                        alert(`=> Đã cập nhật '${oldName}' thành '${newName}'.`);
                    } else {
                        alert("Tên sách mới không hợp lệ!");
                    }
                }
            }
            break;

        case "5":
            books.sort();
            let sorted = "=> Danh sách sau khi sắp xếp:\n";
            for (let i = 0; i < books.length; i++) {
                sorted += `${i + 1}. ${books[i]}\n`;
            }
            alert(sorted);
            break;

        case "0":
            alert("Cảm ơn bạn đã sử dụng thư viện. Tạm biệt!");
            break;

        default:
            if (choice !== null) {
                alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 0-5.");
            }
    }
} while (choice !== "0" && choice !== null);