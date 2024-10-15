$(function() {
    let baseURL = 'https://deckofcardsapi.com/api/deck';
  
    // 1 revised
    async function part1() {
        let data = await $.getJSON(`${baseURL}/new/draw/`);
        let { suit, value } = data.cards[0];
        console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
    }
    part1();

    // 2. revised
    async function part2() {
        let data = await $.getJSON(`${baseURL}/new/draw/`);
        let firstCard = data.cards[0];
        let deckId = data.deck_id;

        data = await $.getJSON(`${baseURL}/${deckId}/draw/`);
        let secondCard = data.cards[0];

        [firstCard, secondCard].forEach(function(card) {
            console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)
        })
    }
    part2();
  
    // 3. revised
    async function part3() {
        let $btn = $('button');
        let $cardArea = $('#card-area');
    
        let deckData = await $.getJSON(`${baseURL}/new/shuffle/`);
        
        $btn.show().on('click', async function() {
          let cardData = await $.getJSON(`${baseURL}/${deckData.deck_id}/draw/`);
          let cardSrc = cardData.cards[0].image;
          let angle = Math.random() * 90 - 45;
          let randomX = Math.random() * 40 - 20;
          let randomY = Math.random() * 40 - 20;
          $cardArea.append(
            $('<img>', {
              src: cardSrc,
              css: {
                transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
              }
            })
          );
          if (cardData.remaining === 0) $btn.remove();
        });
      }
    part3();
  });
  