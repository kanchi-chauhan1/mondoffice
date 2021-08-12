(function () {

    function waitUntil(predicate, success, error) {
        var int = setInterval(function () {
            if (predicate()) {
                clearInterval(int);
                int = null;
                success();
            }
        }, 500);
    
        setTimeout(function () {
            if (int !== null) {
                clearInterval(int);
                if (typeof (error) === 'function') {
                    error();
                }
            }
        }, 15000);
    }

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
                <button class="custom-promocode-submit">
                    <span class="custom-arrow"><svg width="19" class="arrow" "height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 5.4984C18.9924 5.30181 18.9094 5.07405 18.773 4.93117L14.3024 0.255828C13.999 -0.0116735 13.4183 -0.122325 13.08 0.187073C12.746 0.49218 12.7569 1.08411 13.0887 1.39029L16.2321 4.67348H0.838232C0.375472 4.67348 0 5.04305 0 5.49854C0 5.95403 0.375472 6.3236 0.838232 6.3236H16.2321L13.0887 9.60679C12.8028 9.88932 12.7493 10.5017 13.08 10.81C13.4096 11.1183 14.0121 11.0195 14.3024 10.7412L18.773 6.0659C18.9258 5.90583 19 5.71784 19 5.49868V5.4984Z" fill="#276EF1"/>
                    </svg></span>                   
                    <span class="custom-right"><svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1451 0.329806C14.1004 0.375292 13.4625 1.00352 12.6264 1.81284C11.7903 2.62216 10.7095 3.66663 9.62955 4.71036C8.5496 5.75408 7.47049 6.79673 6.63269 7.60787C6.18721 8.03956 6.07161 8.15029 5.80247 8.41117L1.79327 4.88902C1.57559 4.69764 1.2921 4.60151 1.00525 4.62298C0.718392 4.64358 0.451775 4.78003 0.263626 5.00147C0.0754794 5.22289 -0.018176 5.51126 0.00292623 5.80306C0.0240284 6.09485 0.158169 6.36606 0.375854 6.55745L5.12763 10.7319C5.55624 11.1095 6.19913 11.0855 6.59906 10.677C6.64378 10.6315 7.28163 10.0033 8.11773 9.19395C8.95384 8.38463 10.0346 7.34704 11.1146 6.30346C12.1945 5.25989 13.2736 4.21023 14.1114 3.39914C14.9492 2.5881 15.4993 2.06287 15.6706 1.88864C15.9912 1.57366 16.0883 1.08962 15.9153 0.67165C15.7415 0.253699 15.334 -0.013226 14.8877 0.000505809C14.6074 0.00796711 14.3417 0.126404 14.1451 0.329806Z" fill="#46B275"/>
                    </svg></span>
                    <span class="custom-wrong"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.4145 7.00017L13.7061 1.70742C14.0969 1.31663 14.0969 0.683251 13.7061 0.293089C13.3153 -0.0976965 12.682 -0.0976965 12.2918 0.293089L7.00017 5.58584L1.70742 0.294209C1.31663 -0.0965769 0.683252 -0.0965769 0.293089 0.294209C-0.0976965 0.684995 -0.0976965 1.31838 0.293089 1.70854L5.58584 7.00017L0.29421 12.2929C-0.0965759 12.6837 -0.0965759 13.3171 0.29421 13.7073C0.489299 13.9023 0.745645 13.9999 1.00076 13.9999C1.25523 13.9999 1.51222 13.903 1.70731 13.7073L7.00006 8.4145L12.2928 13.7061C12.6836 14.0969 13.317 14.0969 13.7071 13.7061C13.9022 13.511 13.9998 13.2547 13.9998 12.9996C13.9998 12.7445 13.9028 12.4881 13.7071 12.293L8.4145 7.00017Z" fill="#FF3137"/>
                    </svg></span>
                </button>
                <span class="custom-placeholder-heading">Inserisci coupon</span>
                <div class="custom-message"></div>
            </div>
        </div>
        </fieldset>
        </form>
        </div>`);
    }

    function addCouponFunctionality () {
        var placeholderHeading = document.querySelector('.custom-placeholder-heading');
        var customMessage = document.querySelector('.custom-message');

        function removingCustomClasses () {
            document.querySelector('.custom-arrow').classList.remove('custom-show');
            document.querySelector('.custom-right').classList.remove('custom-show');
            document.querySelector('.custom-wrong').classList.remove('custom-show');
            placeholderHeading.classList.remove('custom-fail');
            placeholderHeading.classList.remove('custom-pass');
            placeholderHeading.classList.remove('show-heading');
            document.querySelector('.custom-input-code').classList.remove('custom-border-color-pass');
            document.querySelector('.custom-input-code').classList.remove('custom-border-color-fail');
        }
        
        document.querySelector('.custom-input-code').addEventListener('input',function (event) {
            if (event.target.value === "") {
                removingCustomClasses();
                placeholderHeading.innerHTML="";
                customMessage.innerHTML="";
                customMessage.classList.remove('custom-pass');
                customMessage.classList.remove('custom-fail');
                document.querySelector('.custom-input-code').classList.remove('custom-border-color');
            } else {
                placeholderHeading.classList.add('show-heading');
                document.querySelector('.custom-arrow').classList.add('custom-show');
                document.querySelector('.custom-right').classList.remove('custom-show');
                document.querySelector('.custom-wrong').classList.remove('custom-show');
                placeholderHeading.innerHTML="Inserisci coupon";
            }
        });

        document.querySelector('.custom-promocode-submit').addEventListener('click',function (event) {
            event.preventDefault();
            event.stopPropagation();
            if (document.querySelector('.custom-input-code').value === "") {
                removingCustomClasses();
                customMessage.innerText="";
            } else if(document.querySelector('.custom-input-code').value === "MONDO10"){
                customMessage.classList.remove('custom-fail');
                placeholderHeading.classList.remove('custom-fail');
                placeholderHeading.classList.add('show-heading');
                placeholderHeading.classList.add('custom-pass');
                customMessage.innerText="Lo sconto è stato applicato.";
                customMessage.classList.add('custom-pass');
                document.querySelector('.custom-input-code').classList.add('custom-border-color-pass');
                document.querySelector('.custom-input-code').classList.remove('custom-border-color-fail');
                document.querySelector('.custom-right').classList.add('custom-show');
                document.querySelector('.custom-wrong').classList.remove('custom-show');
                document.querySelector('.custom-arrow').classList.remove('custom-show');
            } else {
                placeholderHeading.classList.add('show-heading');
                placeholderHeading.classList.remove('custom-pass');
                placeholderHeading.classList.add('custom-fail');
                customMessage.innerText="Questo codice promozionale non è valido.";
                customMessage.classList.add('custom-fail');
                customMessage.classList.remove('custom-pass');
                document.querySelector('.custom-input-code').classList.add('custom-border-color-fail');
                document.querySelector('.custom-input-code').classList.remove('custom-border-color-pass');
                document.querySelector('.custom-wrong').classList.add('custom-show');
                document.querySelector('.custom-arrow').classList.remove('custom-show');
                document.querySelector('.custom-right').classList.remove('custom-show');
            }
        });
    }
    function init() {
        addCouponCode();
        addCouponFunctionality();
    }
    waitUntil(function () {
        return document.querySelectorAll('.recap-list').length > 0;
    }, function () {
        init();
    });
}());