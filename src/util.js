function scrollToBottom() {
    let element = document.querySelector(".scrollable-messages");
    element.scrollTop = element.scrollHeight;
}
export {scrollToBottom}