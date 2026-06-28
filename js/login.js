document.addEventListener("DOMContentLoaded", () => {
    const authTabsContainer = document.getElementById("authTabs");
    
    if (authTabsContainer) {
        const tabs = authTabsContainer.querySelectorAll(".auth-tab");
        const loginForm = document.getElementById("login-form");
        const registerForm = document.getElementById("register-form");

        tabs.forEach(tab => {
            tab.addEventListener("click", () => {
                tabs.forEach(t => t.classList.remove("active"));
                if(loginForm) loginForm.classList.remove("active");
                if(registerForm) registerForm.classList.remove("active");

                tab.classList.add("active");
                const targetForm = tab.getAttribute("data-tab");

                if (targetForm === "login" && loginForm) {
                    loginForm.classList.add("active");
                } else if (targetForm === "register" && registerForm) {
                    registerForm.classList.add("active");
                }
            });
        });

        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const emailInput = document.getElementById("login-email").value.trim().toLowerCase();
                const passwordInput = document.getElementById("login-password").value;
                const errorMessage = document.getElementById("login-error-message");

                if (emailInput === "paiefilho@gmail.com" && passwordInput === "123") {
                    if(errorMessage) errorMessage.style.display = "none";
                    window.location.href = "index.html";
                } else {
                    if(errorMessage) errorMessage.style.display = "block";
                }
            });
        }
    }
});