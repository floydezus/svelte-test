<script>
    import style from './index.pcss';
    export let title;
    export let subtitle;
</script>

<header class={style.container}>
    <h1 class={style.title}>
        {title}
    </h1>
    <h3 class={style.subtitle}>
        {subtitle}
    </h3>
</header>

