function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSpecialChars = document.getElementById("specialchars").checked;

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSpecialChars) {
        alert("Please select at least one type of characters to include in the password.");
        return;
    }

    const password = generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
    const passwordField = document.getElementById("password");
    passwordField.value = password;

    const notification = document.getElementById("notification");
    notification.style.opacity = 1;

    setTimeout(function() {
        notification.style.opacity = 0;
    }, 3000);
}

function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
    const chars = [];
    if (includeUppercase) chars.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    if (includeLowercase) chars.push("abcdefghijklmnopqrstuvwxyz");
    if (includeNumbers) chars.push("0123456789");
    if (includeSpecialChars) chars.push("!@#$%^&*()_-+=<>?");

    if (chars.length === 0) return ""; // No characters selected

    const charSet = chars.join("");
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charSet.length);
        password += charSet.charAt(randomIndex);
    }
    return password;
}
