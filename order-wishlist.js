import { Selector } from 'testcafe';

fixture `wishlist`
    .page `https://www.saq.com/fr/wishlist/index/index/wishlist_id/7524522/`;               // <-- REMPLACE PAR L'URL DE TA WISHLIST (FRANÇAIS SEULEMENT)

test('New Test', async t => {
    await t
        .typeText('main .input-text', 'guillaume.blanchet2@gmail.com')          // <-- REMPLACE PAR TON COURRIEL DE TON COMPTE SAQ ICI
        .pressKey('tab')
        .typeText(Selector('main .input-text').nth(1), 'PWD')                 // <-- REMPLACE PAR TON PASSWORD DE TON COMPTE SAQ ICI
        .click(Selector('main span').withText('Me connecter'))
        .click(Selector('main span').withText('Tout ajouter au panier'))
        .navigateTo('https://www.saq.com/fr/checkout/cart/')
        .click(Selector('main [data-role="proceed-to-checkout"]').withText('Commander'))
        .click(Selector('tr > td').withText('succursale'))
        .click('#checkout-shipping-pointofsale .pointofsale')
        .click(Selector('main span').withText('Procéder au paiement'))
        .typeText(Selector('main .input-text').nth(18), '5598555555555555')  // <-- REMPLACE PAR TON NO DE CARTE DE CREDIT ICI
        .click('main [data-field-name="expiry_month"]')
        .click(Selector('main option').withText('01'))                             // <-- REMPLACE PAR LE MOIS D'EXPIRATION DE TA CARTE ICI
        .click('main [data-field-name="expiry_year"]')
        .click(Selector('main option').withText('2024'))                           // <-- REMPLACE PAR L'ANNEE D'EXPIRATION ICI
        .typeText('main [data-field-name="card_cvn"]', '111')                   // <-- REMPLACE PAR LE CVC DE TA CARTE ICI
        .click(Selector('main span').withText('Passez la commande'))
        .click(Selector('main div').withText('Continuer vos achats').nth(3));
});