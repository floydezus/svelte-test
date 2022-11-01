<script>
    import style from './index.pcss';
    export let header;
    export let subtitle = undefined;
</script>

<div class={style.headerContainer}>
    <h2 class={style.header}>{header}</h2>
    {#if subtitle}
        <p class={style.subtitle}>{subtitle}</p>
    {/if}
</div>
