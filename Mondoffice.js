(function () {
    function addCouponCode() {
        document.querySelector('.recap-list').insertAdjacentHTML('afterend',`<div class="checkout-wrapper-promocode mt-2 flex col"><span class="checkout-promocode-label x-large mb-1">
        <span class="text">
            <span class="bold">Inserisci qui il codice sconto a te dedicato</span>
        </span>
        <form id="promocode-form-1" class="promocode-form flex " data-fv="" novalidate="" method="get" name="promocode-form-1" action="https://www.mondoffice.com/INTERSHOP/web/WFS/RAJA-MONDOFFICE-Site/it_IT/-/EUR/ViewCart-Dispatch?T_From=Tunnel" data-fv-init="true"><input type="hidden" name="SynchronizerToken" value="297eee7509b0ce83b43e48367cac71677cf5b57c5355f266424ae9f9ddf1bb0b"><input type="hidden" name="applyPromotion" value="applyPromotion">
        <fieldset>
        <div class="checkout-promocode-group flex">
            <div class="p-rel form-group text-container small">
                <input type="text" id="promocode-input-1" name="promocode-checkout-1" class="custom-input-code" placeholder="Inserisci coupon" value="">
                <span class="custom-promocode-submit icon-arrow" id="promocode-submit-1"></span>
                <span class="custom-placeholder-heading">Inserisci coupon</span>
                <div class="custom-message"></div>
            </div>
        </div>
        </fieldset>
        </form>
        </div>`);
        document.querySelector('.custom-input-code').addEventListener('input',(event)=>{
            if (event.target.value === "") {
                document.querySelector('.custom-placeholder-heading').classList.remove('failure');
                document.querySelector('.custom-placeholder-heading').classList.remove('success');
                document.querySelector('.custom-placeholder-heading').classList.remove('show-heading');
                document.querySelector('.custom-message').classList.remove('success');
                document.querySelector('.custom-message').classList.remove('failure');
                document.querySelector('.custom-message').innerText="";
                document.querySelector('.custom-input-code').style.borderBottom="2px solid #656f84";
            } else {
                document.querySelector('.custom-placeholder-heading').classList.add('show-heading');
            }
        });
    }

    function showMessage() {
        document.querySelector('.custom-promocode-submit').addEventListener('click',function () {
            if (document.querySelector('.custom-input-code').value === "") {
                console.log('EMPTY');
                document.querySelector('.custom-placeholder-heading').classList.remove('show-heading');
                document.querySelector('.custom-placeholder-heading').classList.remove('success');
                document.querySelector('.custom-placeholder-heading').classList.remove('show-heading');
                document.querySelector('.custom-message').innerText="";
                document.querySelector('.custom-input-code').style.borderBottom="2px solid #656f84";
            } else if(document.querySelector('.custom-input-code').value === "MONDO10"){
                console.log('SUCCESS');
                document.querySelector('.custom-message').classList.remove('failure');
                document.querySelector('.custom-placeholder-heading').classList.remove('failure');
                document.querySelector('.custom-placeholder-heading').classList.add('show-heading');
                document.querySelector('.custom-placeholder-heading').classList.add('success');
                document.querySelector('.custom-message').innerText="Lo sconto è stato applicato.";
                document.querySelector('.custom-message').classList.add('success');
                document.querySelector('.custom-input-code').style.borderBottom="2px solid green";
            } else {
                console.log('FAILURE');
                document.querySelector('.custom-placeholder-heading').classList.add('show-heading');
                document.querySelector('.custom-placeholder-heading').classList.remove('success');
                document.querySelector('.custom-placeholder-heading').classList.add('failure');
                document.querySelector('.custom-message').innerText="Questo codice promozionale non è valido.";
                document.querySelector('.custom-message').classList.add('failure');
                document.querySelector('.custom-message').classList.remove('success');
                document.querySelector('.custom-input-code').style.borderBottom="2px solid red";
            }
        });
    }

    function init() {
        addCouponCode();
        showMessage();
    }
    init();
}());