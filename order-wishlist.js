import { Selector } from 'testcafe';

fixture `wishlist`
    .page `https://www.saq.com/fr/wishlist/index/index/wishlist_id/7524522/`;               // <-- REPLACE WITH YOUR WISHLIST ID HERE (configured with french pages)

test('New Test', async t => {
    await t
        .typeText('main .input-text', 'guillaume.blanchet2@gmail.com')          // <-- REPLACE WITH YOUR SAQ ACCOUNT HERE
        .pressKey('tab')
        .typeText(Selector('main .input-text').nth(1), 'PWD')                 // <-- REPLACE WITH YOUR SAQ PASSWORD HERE
        .click(Selector('main span').withText('Me connecter'))
        .click(Selector('main span').withText('Tout ajouter au panier'))
        .navigateTo('https://www.saq.com/fr/checkout/cart/')
        .click(Selector('main [data-role="proceed-to-checkout"]').withText('Commander'))
        .click(Selector('tr > td').withText('succursale'))
        .click('#checkout-shipping-pointofsale .pointofsale')
        .click(Selector('main span').withText('Procéder au paiement'))
        .typeText(Selector('main .input-text').nth(18), '5598555555555555')  // <-- REPLACE BY YOUR CARD NUMBER HERE
        .click('main [data-field-name="expiry_month"]')
        .click(Selector('main option').withText('01'))                             // <-- REPLACE BY THE EXPIRATION MONTH HERE
        .click('main [data-field-name="expiry_year"]')
        .click(Selector('main option').withText('2024'))                           // <-- REPLACE BY THE EXPIRATION YEAR HERE
        .typeText('main [data-field-name="card_cvn"]', '111')                   // <-- REPLACE BY THE CVV HERE
        .click(Selector('main span').withText('Passez la commande'))
        .click(Selector('main div').withText('Continuer vos achats').nth(3));
});