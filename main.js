const merchList = document.querySelector('.merch-list')
const merchAPI = 'http://localhost:3000/merch'

function start() {
    getMerch(renderMerch)
}

start()

function getMerch(callback) {
    fetch(merchAPI)
        .then(response => response.json())
        .then(callback)
}

function renderMerch (merchs) {
    const htmls = merchs.map(merch => 
        `<div class="col col-third merch-item">
            <img src="${merch.img}" alt="${merch.name}" class="item-img">
            <div class="item-body">
                <h3 class="item-heading text-center">${merch.name}</h3>
                <p class="text-center price">${merch.price}$</p>    
                <button class="btn buy-merch">Buy Now</button>
            </div>
        </div>`)

    merchList.innerHTML = htmls.join('')
}

// Ticket form

window.addEventListener('load', function() {

    const buyTicketBtns = document.querySelectorAll('.buy-ticket')
    const ticketModal = document.querySelector('.ticket-modal')
    const ticketContainer = document.querySelector('.ticket-container')
    const ticketClose = document.querySelector('.ticket-close')

    function showTickets() {
        ticketModal.classList.add('open')
    }

    function closeTickets() {
        ticketModal.classList.remove('open')
    }

    for (const buyTicketBtn of buyTicketBtns) {
        buyTicketBtn.addEventListener('click', showTickets)
    }

    ticketClose.addEventListener('click', closeTickets)

    ticketModal.addEventListener('click', closeTickets)

    ticketContainer.addEventListener('click', function (event) {
        event.stopPropagation()
    })

    // Merch form
    const buyMerchBtns = document.querySelectorAll('.buy-merch')
    const merchModal = document.querySelector('.merch-modal')
    const merchContainer = document.querySelector('.merch-container')
    const merchClose = document.querySelector('.merch-close')

    function showMerch() {
        merchModal.classList.add('open')
    }

    function closeMerch() {
        merchModal.classList.remove('open')
    }

    for (const buyMerchBtn of buyMerchBtns) {
        buyMerchBtn.addEventListener('click', showMerch)
    }

    merchClose.addEventListener('click', closeMerch)

    merchModal.addEventListener('click', closeMerch)

    merchContainer.addEventListener('click', event => { event.stopPropagation() })


    // slider
    const merchItems = document.querySelectorAll('.merch-item')
    const nextBtn = document.querySelector('.right-arrow')
    const prevBtn = document.querySelector('.left-arrow')
    const slideLength = merchItems.length
    const merchItemWidth = merchItems[0].offsetWidth

    let posistionX = 0

    let count = 0

    nextBtn.addEventListener('click', function () {
        handleSlide(1)
    })

    prevBtn.addEventListener('click', function () {
        handleSlide(-1)
    })

    function handleSlide(direction) {
        if (direction === 1) {
            count++
            console.log(count)
            if (count > slideLength - 3) {
                count = slideLength - 3
                return
            }
            posistionX -= merchItemWidth
            merchList.style = `transform: translateX(${posistionX}px)`
        }
        else if (direction === -1) {
            count--
            if (count < 0) {
                count = 0
                return
            }
            posistionX += merchItemWidth
            merchList.style = `transform: translateX(${posistionX}px)`
        }
    }

})



