const getCookies = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) {
    return match[2];
  }
  return "";
};

function createRipple(event) {
  const button = event.currentTarget;
  console.log("button", button);
  console.log("event.clientY", event.clientY);
  console.log("event.clientX", event.clientX);
  console.log(button.offsetTop);
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - button.getBoundingClientRect().left - radius
  }px`;
  circle.style.top = `${
    event.clientY - button.getBoundingClientRect().top - radius
  }px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

const button = document.getElementById("shop-upet-button");
button.addEventListener("click", createRipple);

// mdc.ripple.MDCRipple.attachTo(document.querySelector(".foo-button"));
