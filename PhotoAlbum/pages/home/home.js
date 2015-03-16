var objImage = [
    { url: "/images/1.jpg", imageName: "1.jpg", imageLocation: "Thailand" },
    { url: "/images/2.jpg", imageName: "2.jpg", imageLocation: "Thailand" }
];
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // 每当用户导航至此页面时都要调用此功能。它
        // 使用应用程序的数据填充页面元素。
        ready: function (element, options) {
            // TODO: 在此处初始化页面。
            var image1 = document.getElementById("displayImage1");
            image1.addEventListener("click", this.imageClickHandler1, false);
        },
        imageClickHandler1: function (eventInfo) {
            WinJS.Navigation.navigate("pages/description/description.html",objImage[0])
        }
    });
})();
