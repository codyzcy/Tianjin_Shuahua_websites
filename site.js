(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll("[data-set-lang]");
  var saved = localStorage.getItem("siteLang") || "zh";

  function setLang(lang) {
    root.setAttribute("data-lang", lang);
    root.setAttribute("lang", lang === "zh" ? "zh-CN" : "en");
    localStorage.setItem("siteLang", lang);
    buttons.forEach(function (button) {
      button.classList.toggle("active", button.getAttribute("data-set-lang") === lang);
    });
  }

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      setLang(button.getAttribute("data-set-lang"));
    });
  });

  setLang(saved);

  var inquiryForm = document.querySelector("[data-inquiry-form]");
  if (inquiryForm) {
    inquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var formData = new FormData(inquiryForm);
      var name = formData.get("name") || "";
      var contact = formData.get("contact") || "";
      var message = formData.get("message") || "";
      var subject = "天津书华化工有限公司官网咨询";
      var body = [
        "客户姓名: " + name,
        "联系方式: " + contact,
        "",
        "咨询内容:",
        message
      ].join("\n");
      window.location.href = "mailto:1659215016@qq.com,727707972@qq.com?subject=" +
        encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    });
  }
})();
