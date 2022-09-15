
document.querySelector('#search_text').addEventListener('keypress', function (e) {
    if (e.key === 'Enter')
        document.querySelector('#search_btn').click();
})

document.querySelector('#search_btn').addEventListener('click', function (e) {

    let textSearch = document.querySelector('#search_text').value
    if (!textSearch) {
        e.preventDefault();
        return
    }

    let selectedTargetSite = document.querySelector('#selectedTargetSite').value
    document.querySelector('#search_btn').href = selectedTargetSite + textSearch

})