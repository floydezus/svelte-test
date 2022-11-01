<script>
    import style from './index.pcss';
    import { fade, fly, blur } from 'svelte/transition'
    import Racoon from '../../assets/images/first-screen/racoons1.png';
    import BlobFirst from '../../assets/images/first-screen/blob-first.svg';
    import BlobSecond from '../../assets/images/first-screen/blob-second.svg';
    import BlobSecondAfter from '../../assets/images/first-screen/blob-second-after.svg';
    import BlobSmall from '../../assets/images/first-screen/blob-small.svg';
    import PhotoDesktop from '../../assets/images/first-screen/photo-desktop.png';
    import PhotoTablet from '../../assets/images/first-screen/photo-tablet.png';
    import PhotoMobile from '../../assets/images/first-screen/photo-mobile.png';
    import classnames from "classnames";
    export let buttonText = "Участвовать";
    export let infoText;
    export let secondInfoText;
    export let isLoading = true;



</script>

<section class={style.container}>
    <div class={style.distant}>
        {#if !isLoading}
            <img
                in:fly="{{ delay: 1000, x: -500, duration: 2000 }}"  out:fade
                class={style.blobFirst}
                srcset="{PhotoDesktop} 804w,
                        {PhotoTablet} 493w,
                        {PhotoMobile} 320w"
                sizes="(max-width: 320px) 400px,
                       (max-width: 1100px) 700px,
                        800px"
                alt="Woman and girl">
        {:else }
            <img in:fade="{{delay: 500 }}" out:blur="{{duration: 1000 }}"
                 class={style.blobFirst} src={BlobFirst} alt="blob">
        {/if }
        <div class={style.blobSecond}>
            <div class="{classnames(style.wrapper, style.maxWidth100)}">
                {#if isLoading}
                    <img out:blur="{{duration: 1000 }}"  class={style.maxWidth100} src={BlobSecond} alt="blob">
                    <div in:fade="{{delay: 500 }}" out:fade="{{duration: 1000 }}" class="{classnames(style.textSubstrate,style.isVisible)}">
                        <p class={style.info}>{infoText}</p>
                    </div>
                {:else }
                    <img in:fly="{{ delay: 1000, x: 500, duration: 2000 }}"  out:fade class={style.maxWidth100} src={BlobSecondAfter} alt="blob">
                    <div in:fly="{{ delay: 1000, x: 500, duration: 2000 }}" class="{classnames(style.textSubstrate,style.isVisible)}">
                        <p class={style.info}>{secondInfoText}</p>
                        <button class={style.mainButton} type="button">{buttonText}</button>
                    </div>
                {/if}


            </div>

        </div>
        <img class={style.blobSmall} src={BlobSmall} alt="blob">
        <img  class={style.racoon} src={Racoon} alt="Racoon Meine Liebe">
    </div>
</section>

