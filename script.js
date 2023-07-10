$(document).ready(function () {
  fetchQuote()

  // "New Quote" button click
  $('#new-quote').on('click', function () {
    fetchQuote()
  })

  // "Tweet Quote" button click
  $('#tweet-quote').on('click', function () {
    const quoteText = $('#text').text()
    const quoteAuthor = $('#author').text()
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quoteText}" - ${quoteAuthor}`
    )}`
    $(this).attr('href', tweetUrl)
  })

  // fetch a random quote
  function fetchQuote () {
    $.ajax({
      url: 'https://api.quotable.io/random',
      method: 'GET',
      success: function (data) {
        $('#text').text(data.content)
        $('#author').text('- ' + data.author)
      },
      error: function (error) {
        console.error('Error fetching random quote:', error)
      }
    })
  }
})
