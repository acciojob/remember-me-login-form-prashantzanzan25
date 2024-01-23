//your JS code here. If required.
if (localStorage.getItem("savedUsername") && localStorage.getItem("savedPassword")) {
            var existingButton = document.createElement("button");
            existingButton.setAttribute("id", "existing");
            existingButton.textContent = "Login as existing user";
            document.body.appendChild(existingButton);

            existingButton.addEventListener("click", function () {
                alert("Logged in as " + localStorage.getItem("savedUsername"));
            });
        }

        document.getElementById("loginForm").addEventListener("submit", function (event) {
            event.preventDefault();
			
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;
            var rememberMe = document.getElementById("checkbox").checked;

            if (rememberMe) {
                localStorage.setItem("savedUsername", username);
                localStorage.setItem("savedPassword", password);
            } 
			else {
                localStorage.removeItem("savedUsername");
                localStorage.removeItem("savedPassword");
            }

            alert("Logged in as " + username);
        });

