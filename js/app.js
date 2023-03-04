const getData = (isSort, limit) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => showData(isSort, data.data.tools, limit))
    .catch(error => console.log(error));
};

const showData = ( isSort, data, limit) => {

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerText = "";
  const seeMore = document.getElementById("see-more");
  //   console.log(data);

  if (limit && data.length > limit) {
    data = data.slice(0, limit);
    if(isSort){
      data.sort(byDate);
    }
    seeMore.classList.remove("hidden");
  } else {
    seeMore.classList.add("hidden");
  }

  if(isSort){
    data.sort(byDate);
  }

  let count = 0;
  data.forEach((element) => {
    count++;
    console.log(element, count);
    const card = document.createElement("div");

    card.classList.add(
      "p-6",
      "bg-white",
      "border",
      "border-gray-200",
      "rounded-xl",
      "shadow",
      "dark:bg-gray-800",
      "dark:border-gray-700",
      "w-full"
    );

    card.innerHTML = `
    <img class="rounded-xl h-[200px] w-full" src="${
      element.image ? element.image : "https://picsum.photos/200"
    }" alt="product image" />

    <div class="pt-6">
        <h3 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white">Features</h3>
        <div class="h-[85px] mt-2.5 mb-5">
            <ol id="feature-list-${count}" class="list-decimal pl-6 text-color-light">

            </ol>
        </div>
        <hr class="border mb-3">
        <div class="flex items-center justify-between">
            <div>
                <h3 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white">
                ${element.name ? element.name : "Not defined"}</h3>
                <div class="flex gap-4 items-center text-color-light font-medium mt-1">
                    <i class="fa-solid fa-calendar-days text-xl"></i>
                    <p>${
                      element.published_in
                        ? element.published_in
                        : "Not available"
                    }</p>
                </div>
            </div>

       <a  onclick="openModal();  getModalData('${
         element.id
       }')" class="text-white bg-red-100 hover:bg-red-200 focus:ring-1 focus:outline-none focus:ring-red-300 font-bold rounded-full text-xl p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-100 dark:hover:bg-red-200 dark:focus:ring-red-300">
                <svg aria-hidden="true" class="w-5 h-5 text-btn-color-normal" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
        </div>
    </div>
    `;

    cardContainer.appendChild(card);

    if (element.features.length !== 0) {
      const list = document.getElementById(`feature-list-${count}`);
      element.features.forEach((feature) => {
        const listItem = document.createElement("li");
        listItem.innerText = feature;
        list.appendChild(listItem);
      });
    }

    // const myModalBtn = document.getElementById(`modal-btn-${count}`);
    // console.log(myModalBtn);
    // myModalBtn.setAttribute('data-modal-target', 'staticModal');
    toggleSpinner(false);
  });
};

const toggleSpinner = (isLoading) => {
  const loader = document.getElementById("loader");
  if (isLoading) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
};

toggleSpinner(true);

getData(false, 6);

function openModal() {
  document.getElementById("myModal").checked = true;
}

const getModalData = (id) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showModalData(data.data))
    .catch((error) => console.log(error));
};

const showModalData = (data) => {
  console.log(data);

  const modalContainer = document.getElementById("modal-container");

  modalContainer.innerHTML = `
  <!-- card 1 -->
  <div class="p-6 bg-btn-color-normal/[.06]  border border-btn-color-normal rounded-xl shadow dark:bg-btn-color-normal/[.06]  dark:border-gray-700 w-full">

      <h3 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
          ${data.description}
      </h3>
       <div class="my-6 flex flex-col md:flex-row gap-4 items-center md:justify-between">
          <p id="basic" class="w-3/4 md:w-full  p-2 h-[80px]  flex items-center justify-center text-center leading-5 bg-white text-green-700 font-bold rounded-2xl">
              
          <p id="pro" class="w-3/4 md:w-full  p-2 h-[80px] flex items-center justify-center text-center leading-5 bg-white text-amber-500 font-bold rounded-2xl">
              
          <p id="enterprise" class="w-3/4 md:w-full h-[80px] flex items-center justify-center  p-2  text-center leading-5 bg-white text-btn-color-normal font-bold rounded-2xl">
              
      </div> 

      <!-- feature and Integrations -->
   <div class="flex flex-col md:flex-row gap-5 md:gap-2 justify-between">
          <div class="feature ">
              <h3
                  class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
                  Features</h3>
              <ol id="modal-feature" class="list-disc text-color-light pl-6 mt-4">
                  
              </ol>
          </div>
          <div class="integrations ">
              <h3
                  class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">
                  Integrations</h3>
              <ol id="modal-integrations" class="list-disc text-color-light pl-6 mt-4">
                  

              </ol>
          </div>
      </div>

  </div>
  <!-- card 2 -->
  <div
      class="p-2 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 w-full">

      <div class="relative">
          <img class="rounded-xl w-full h-[250px]" src="${data.image_link.length !== 0 ? data.image_link[0] : 'https://picsum.photos/200'
        }"}
              alt="product image" />

          <button id="accuracy-btn" type="button"
              class="absolute top-3 right-3 focus:outline-none text-white bg-btn-color-normal hover:bg-btn-color-hover focus:ring-1 focus:ring-red-200 font-semibold rounded-lg px-4 py-2 ">${data.accuracy.score ? data.accuracy.score*100 : '' }% accuracy</button>
      </div>

      <div class="pt-6 text-center">
          <h3 class="text-2xl font-semibold tracking-tight text-color-dark dark:text-white ">${data.input_output_examples !== null ? data.input_output_examples[0].input : "Hi, can you give any example?" }
              </h3>
          <p class="text-color-light">${data.input_output_examples !== null ? data.input_output_examples[0].output : "No! Not Yet! Take a break!!!" }/p>

      </div>
  </div>

  `;


  // input output

  if(data.accuracy.score === null){
    document.getElementById('accuracy-btn').classList.add('hidden');
  }
  else{
    document.getElementById('accuracy-btn').classList.remove('hidden');
  }




  // pricing
  const basicPrice = document.getElementById("basic");
  const proPrice = document.getElementById("pro");
  const enterprisePrice = document.getElementById("enterprise");

  if (data.pricing !== null) {
    const [plan1, plan2, plan3] = data.pricing;


    data.pricing.forEach((plan) => {
      if (plan.price === "0" || plan.price === "No cost") {
        plan.price = "Free of Cost";
      } else {
        plan.price;
      }
    });

    basicPrice.appendChild(pricing(plan1.plan, plan1.price));
    proPrice.appendChild(pricing(plan2.plan, plan2.price));
    enterprisePrice.appendChild(pricing(plan3.plan, plan3.price));
  } else {
    basicPrice.appendChild(pricing("", "Contact us"));
    proPrice.appendChild(pricing("", "Contact us"));
    enterprisePrice.appendChild(pricing("", "Contact us"));
  }




  // features

  if (Object.keys(data.features).length !== 0) {
    const list = document.getElementById("modal-feature");
  

    for (const feature in data.features) {
      const listItem = document.createElement("li");
      listItem.innerText = data.features[feature].feature_name;
      list.appendChild(listItem);
    }
  } else {
    document.getElementById("modal-feature").innerText = "No data Found";
  }



  // modal-integrations

  if (data.integrations !== null) {
    const list = document.getElementById("modal-integrations");
    data.integrations.forEach((integration) => {
      const listItem = document.createElement("li");
      listItem.innerText = integration;
      list.appendChild(listItem);
    });
  } else {
    document.getElementById("modal-integrations").classList.remove("pl-6");
    document.getElementById("modal-integrations").innerText = "No data Found";
  }
};


function pricing(name, price) {
  const spanPricing = document.createElement("span");
  spanPricing.innerHTML = `
  ${price} <br> ${name}
  `;
  return spanPricing;
}


function byDate (first, second) {
  return new Date(first.published_in).valueOf() - new Date(second.published_in).valueOf()
}


// document.getElementById('sort-btn').addEventListener('click', function(){
//   const sortedData = data.slice().sort(byDate);
//   getData(sortedData);

// });