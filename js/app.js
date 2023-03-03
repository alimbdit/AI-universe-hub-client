const getData = (limit) => {
  const URL = `https://openapi.programming-hero.com/api/ai/tools`;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => showData(data.data.tools, limit));
};

const showData = (data, limit) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerText = '';
  const seeMore = document.getElementById('see-more');
//   console.log(data);

  if (limit && data.length > limit) {
    data = data.slice(0, limit);
    seeMore.classList.remove("hidden");
  } else {
    seeMore.classList.add("hidden");
  }

 let count = 0;
  data.forEach((element) => {
    count++;
    // console.log(element.id, count);
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
    <img class="rounded-xl h-[200px] w-full" src="${ element.image ? element.image :'https://picsum.photos/200'}" alt="product image" />

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
                ${element.name ? element.name : 'Not defined'}</h3>
                <div class="flex gap-4 items-center text-color-light font-medium mt-1">
                    <i class="fa-solid fa-calendar-days text-xl"></i>
                    <p>${element.published_in ? element.published_in : 'Not available'}</p>
                </div>
            </div>
            
            <button onclick="getModalData('${element.id}')" type="button" class="text-white bg-red-100 hover:bg-red-200 focus:ring-1 focus:outline-none focus:ring-red-300 font-bold rounded-full text-xl p-2.5 text-center inline-flex items-center mr-2 dark:bg-red-100 dark:hover:bg-red-200 dark:focus:ring-red-300">
                <svg aria-hidden="true" class="w-5 h-5 text-btn-color-normal" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"></path>
                </svg>
            </button>
        </div>
    </div>
    `;

    cardContainer.appendChild(card);

    if(element.features.length !== 0){
        const list = document.getElementById(`feature-list-${count}`);
        element.features.forEach(feature => {
            const listItem = document.createElement('li');
            listItem.innerText = feature;
            list.appendChild(listItem);
        });
    }
    toggleSpinner(false);
  });   
};

const toggleSpinner = (isLoading) => {
    const loader = document.getElementById('loader');
    if(isLoading) {
        loader.classList.remove('hidden');
    }
    else{
        loader.classList.add('hidden');
    }
}

toggleSpinner(true);

getData(6);


