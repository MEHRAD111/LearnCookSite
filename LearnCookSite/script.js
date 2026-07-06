//LearnCookSite JS!
const inputForSearch = document.querySelector(".input").value;
const ErrorForSearch = document.querySelector(".ErrorForSearch");
const runThis = () => {
  if (inputForSearch === "") {
    ErrorForSearch.textContent = "لطفا موضوعی را برای جستجو بنویسید!";
    setTimeout(() => {
      ErrorForSearch.textContent = "";
    }, 5000);
  }
};
