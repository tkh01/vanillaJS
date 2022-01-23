const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImgae = document.createElement("img");

bgImgae.src = `img/${chosenImage}`;

document.body.appendChild(bgImgae);

// ******이미지를 특정 요소에 삽입하고 싶을 때******
// insertBefore() 메소드를 사용하시면 됩니다
// 이 메소드는 참조된 노드 앞에 특정 부모 노드의 자식 노드를 삽입합니다.
// const h2 = document.querySelector("#clock")
// document.body.insertBefore(bgImage, h2);
// 두개의 인자중에 앞의 bgImage는 새로운 노드 즉 추가하고 싶은 노드이고 h2는 참조할 노드입니다. 즉 이렇게 코드를 짜시면 h2요소 앞에 bgImage가 추가되게 됩니다.
