// Client List

function list(clients) {
    return clients.map(client => `
    <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
  ${client.name}
  <strong>$ ${client.balance}</strong>
</li>`).join('')
}

// Order

function order(clients, property) {
    return clients.slice().sort((a, b) => {
        if (a[property] < b[property]) return -1
        if (a[property] > b[property]) return 1
        return 0
    }) 
}

// Total

function total(clients) {
    return clients.reduce((accumulator, client) => accumulator + client.balance, 0)
}

// info

function info(index) {
    return clients.find(client => client.id === index)
}

// search

function search(query) {
    const lowerCaseSearch = query.toLowerCase()

    return clients.filter(client => client.name.toLowerCase().includes(lowerCaseSearch))
}