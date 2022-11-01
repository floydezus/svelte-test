<script>
    import { fly, blur } from 'svelte/transition';
    import classnames from 'classnames';

    import style from './index.pcss';
    import Racoon from '../../assets/images/first-screen/racoons1.png';
    import BlobFirst from '../../assets/images/first-screen/blob-first.svg';
    import BlobSecond from '../../assets/images/first-screen/blob-second.svg';
    import BlobSecondAfter from '../../assets/images/first-screen/blob-second-after.svg';
    import BlobSmall from '../../assets/images/first-screen/blob-small.svg';
    import PhotoDesktop from '../../assets/images/first-screen/photo-desktop.png';
    import PhotoTablet from '../../assets/images/first-screen/photo-tablet.png';
    import PhotoMobile from '../../assets/images/first-screen/photo-mobile.png';

    export let buttonText = 'Участвовать';
    export let infoText;
    export let secondInfoText;
    export let isLoading = true;
</script>

<section class={style.container}>
    <div class={style.distant}>
        {#if !isLoading}
            <div class={style.wrapper}>
                <img in:fly="{{ duration: 1000, x: -500 }}"
                     class={style.blobFirst}
                     srcset="{PhotoDesktop} 804w,
                        {PhotoTablet} 493w,
                        {PhotoMobile} 320w"
                     sizes="(max-width: 320px) 400px,
                       (max-width: 960px) 600px,
                        800px"
                     alt="Woman and girl">
                <img class={style.blobSmall} src={BlobSmall} alt="blob">
            </div>
        {:else }
            <div class={style.wrapper}>
                <img class={style.blobFirst} src={BlobFirst} alt="blob">
                <img class={style.blobSmall} src={BlobSmall} alt="blob">
            </div>
        {/if }
        <div class={style.blobSecond}>
            <div class="{classnames(style.wrapper)}">
                {#if isLoading}
                    <img class={style.blobSecondImg} src={BlobSecond} alt="blob">
                    <div class="{classnames(style.textSubstrate,style.isVisible)}">
                        <p class={style.info}>{infoText}</p>
                    </div>
                {:else }
                    <img class={style.blobSecondImg} in:fly="{{ x: 500, duration: 1000 }}" out:blur src={BlobSecondAfter} alt="blob">
                    <div in:fly="{{ x: 500, duration: 1000 }}" class="{classnames(style.textSubstrate,style.isVisible)}">
                        <p class={style.info}>{secondInfoText}</p>
                        <button class={style.mainButton} type="button">{buttonText}</button>
                    </div>
                {/if}

            </div>
        </div>
    </div>
    <div class={style.near}>
        <img  class={style.racoon} src={Racoon} alt="Racoon Meine Liebe">
    </div>
</section>

