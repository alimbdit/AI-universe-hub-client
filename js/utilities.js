const getModalData = (id) => {
    const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(URL).then(res => res.json()).then(data => showModalData(data.data)).catch(error => console.log(error))
}


const showModalData = (data) => {
    console.log(data);

    

    // const modalContainer = document.getElementById('modal-container');

    // modalContainer.innerHTML = `
    // <!-- card 1 -->
    // <div class="p-6 bg-btn-color-normal/[.06]  border border-btn-color-normal rounded-xl shadow dark:bg-btn-color-normal/[.06]  dark:border-gray-700 w-full">

    //     <h3 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
    //         ChatGPT is an
    //         AI-powered chatbot platform that uses OpenAI's GPT technology to simulate human
    //         conversation.
    //     </h3>
    //      <div class="my-6 flex flex-col md:flex-row gap-4 items-center md:justify-between">
    //         <p
    //             class="w-3/4 md:w-full  py-3  text-center leading-5 bg-white text-green-700 font-bold rounded-2xl">
    //             $10/ <br> month <br> Basic</p>
    //         <p
    //             class="w-3/4 md:w-full  py-3  text-center leading-5 bg-white text-amber-500 font-bold rounded-2xl">
    //             $50/ <br> month <br> Pro</p>
    //         <p
    //             class="w-3/4 md:w-full  py-3  text-center leading-5 bg-white text-btn-color-normal font-bold rounded-2xl">
    //             Contact <br> us <br> Enterprise</p>
    //     </div> 

    //     <!-- feature and Integrations -->
    //  <div class="flex flex-col md:flex-row gap-5 md:gap-2 justify-between">
    //         <div class="feature ">
    //             <h3
    //                 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
    //                 Features</h3>
    //             <ol class="list-disc text-color-light pl-6 mt-4">
    //                 <li>Customizable responses</li>
    //                 <li>Customizable responses</li>
    //                 <li>Customizable responses</li>
    //             </ol>
    //         </div>
    //         <div class="integrations ">
    //             <h3
    //                 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
    //                 Integrations</h3>
    //             <ol class="list-disc text-color-light pl-6 mt-4">
    //                 <li>FB Messenge</li>
    //                 <li>FB Messenge</li>
    //                 <li>FB Messenge</li>

    //             </ol>
    //         </div>
    //     </div>

    // </div>
    // <!-- card 2 -->
    // <div
    //     class="p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 w-full">

    //     <div class="relative">
    //         <img class="rounded-xl w-full" src="https://picsum.photos/200"
    //             alt="product image" />

    //         <button type="button"
    //             class="absolute top-3 right-3 focus:outline-none text-white bg-btn-color-normal hover:bg-btn-color-hover focus:ring-1 focus:ring-red-200 font-semibold rounded-lg px-4 py-2 ">94% accuracy</button>
    //     </div>

    //     <div class="pt-6 text-center">
    //         <h3 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
    //             Hi, how are you
    //             doing today?</h3>
    //         <p class="text-color-light">I'm doing well, thank you for asking. How can I assist
    //             you today?</p>

    //     </div>
    // </div>

    // `;
}
// getModalData('01');