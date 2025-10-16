function emailValidation(email){
    return email.includes("@")&&email.includes(".com")
}
console.log(emailValidation("test@example.com"))