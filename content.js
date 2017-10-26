$('h1').css('padding-top', '18px').css('padding-bottom', '0px').after('<h2 class="converted-price"></h2>')    


function convertPrice() {
  $.get('https://api.coinmarketcap.com/v1/ticker/bitcoin/?convert=ETH').done(function(data) {
    var orig = parseFloat($('.base-market > span').first().text())
    var price = parseFloat(data[0].price_eth)
    $('h2').text(Number(orig / price).toFixed(8) + ' ETH')
    console.log($('.wrapper > .base-market > span').first().text())
  })
  setTimeout(function() { convertPrice() }, 2500)
}

convertPrice()

