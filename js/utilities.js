const getModalData = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL).then(res => res.json()).then(data => showModalData(data.data)).catch(error => console.log(error))
}


const showModalData = (data) => {
    console.log(data);
}
// getModalData('01');