


$(function(){

    $('#scrollBtn').on('click',function(){
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth'
        })
    })

    

    let product = {
        title : "",
        price : 0,
        description : "",
        categoryId : 0,
        images : ["https://eduport.webestica.com/assets/images/courses/4by3/04.jpg"] 
    }

    $('form').on('submit',function(e){
        e.preventDefault();
        console.log($('#name').val());
        console.log($('#price').val());
        console.log($('#category').val());
        console.log($('#description').val());

        product.title = $('#name').val();
        product.price = $('#price').val();
        product.description = $('#description').val();

        $('#card_container').prepend(
            `
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src=${product.images} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.description}</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    ${product.price}$
                </a>
            </div>
            </div>
        `

        )

    })

    getData(12,0).then(data =>{
        data.map(product => {
            $('#card_container').append(
                `
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg" src="https://eduport.webestica.com/assets/images/courses/4by3/04.jpg" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${product.description}</p>
                        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            ${product.price}$
                        </a>
                    </div>
                    </div>
                `
            )
        })
    })
})

const API_URL = 'https://api.escuelajs.co/api/v1/products/';

async function getData(limit,offset){
    const response = await fetch(`${API_URL}?limit=${limit}&offset=${offset}`);
    return response.json();
}



