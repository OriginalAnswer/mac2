//박스 앱
//텍스트
function apptext(v,ID){
    const obj = localStorage.getItem(ID);
    const reObj = JSON.parse(obj);
    reObj.textContent = v;
    console.log(v);
    console.log(reObj.textContent);
    console.log(reObj);
    
    localStorage.setItem(ID,JSON.stringify(reObj))

    let textarea = document.getElementById(`txt${ID}`);
    textarea.addEventListener("keyup", e => {
        textarea.style.height = 'auto';
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    })
}
