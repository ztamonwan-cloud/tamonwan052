
// แสดงและซ่อนรหัสผ่าน
function togglePassword() {

    const password = document.getElementById("password");

    const button = document.getElementById("showPassword");

    if (password.type === "password") {

        password.type = "text";
        button.textContent = "ซ่อน";

    } else {

        password.type = "password";
        button.textContent = "แสดง";

    }

}


// ตรวจสอบการเข้าสู่ระบบ
document.getElementById("loginForm")
    .addEventListener("submit", function(event) {

    // ป้องกันการโหลดหน้าเว็บใหม่
    event.preventDefault();

    // รับข้อมูลจากช่องกรอก
    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    const role =
        document.getElementById("role").value;

    const message =
        document.getElementById("loginMessage");


    // ตรวจสอบบัญชี Admin
    if (
        username === "admin" &&
        password === "admin123" &&
        role === "admin"
    ) {

        message.style.color = "green";

        message.textContent =
            "เข้าสู่ระบบผู้ดูแลระบบสำเร็จ";

        alert("ยินดีต้อนรับผู้ดูแลระบบ");

        window.location.href = "index.html";


    // ตรวจสอบบัญชี User
    } else if (
        username === "user" &&
        password === "user123" &&
        role === "user"
    ) {

        message.style.color = "green";

        message.textContent =
            "เข้าสู่ระบบสมาชิกสำเร็จ";

        alert("ยินดีต้อนรับสมาชิก");

        window.location.href = "index.html";


    // หากข้อมูลไม่ถูกต้อง
    } else {

        message.style.color = "red";

        message.textContent =
            "ชื่อผู้ใช้ รหัสผ่าน หรือประเภทผู้ใช้งานไม่ถูกต้อง";

    }

});
