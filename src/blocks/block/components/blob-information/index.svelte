<script>
    import style from './index.pcss';
    export let icon;
    export let blobSrc;
    export let mainInfo;
    export let extraInfo;
    export let buttonBuyText = 'Купить';
</script>

    <div class={style.blobContainer}>
        <img class={style.blobBack} src={blobSrc} alt="left blob" />
        <div class={style.blobContent}>
            <img class={style.contentIcon} src={icon} alt="cell" />
            <p class={style.contentInfo}>{mainInfo}</p>
            <p class={style.contentExtraInfo}>{extraInfo}</p>
            <button class={style.contentBtn} type="button">
                {buttonBuyText}&#8594;
            </button>
        </div>
    </div>


