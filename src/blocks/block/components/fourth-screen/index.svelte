<script>
    import { _ } from 'svelte-i18n';
    import classnames from 'classnames';

    import style from './index.pcss';
    import HeaderTitle from '../header-title/index.svelte';
    import LeftBlob from '../../assets/images/fourth-screen/blob-left.svg';
    import RightBlob from '../../assets/images/fourth-screen/blob-right.svg';
    import PrizeBox from '../../assets/images/fourth-screen/prize-box-md.png';
</script>

<section>
    <HeaderTitle header={$_('every_week_prizes')} subtitle={$_('won_conditions_2')} />
    <div class={style.content}>
        <div class={style.contentLeft}>
            <img src={LeftBlob}  class={style.maxWidth100} alt="left_blob">
            <div class={style.infoBlock}>
                <div class={style.cardBase}>
                    <div class={style.cardOuter}>
                        <p class={style.cardTextTop}>
                            {$_('certificate.ozon')}
                        </p>
                        <p class={style.cardTextMid}>
                            {$_('certificate.amount')}
                        </p>
                        <p class={style.cardTextBottom}>
                            {$_('certificate.text')}
                        </p>
                    </div>
                </div>
                <div class={style.cardBaseRight}>
                    <div class={style.cardShadowRight}></div>
                    <div class={style.cardOuterRight}>
                        <p class={style.cardTextTop}>
                            {$_('certificate.ozon')}
                        </p>
                        <p class={style.cardTextMid}>
                            {$_('certificate.amount')}
                        </p>
                        <p class={style.cardTextBottom}>
                            {$_('certificate.text')}
                        </p>
                    </div>
                </div>
                <div class="{classnames(style.infoText, style.leftText)}">
                    <h4 class={style.infoHeader}>{$_('certificate_info')}</h4>
                    <p class={style.infoBody}>{$_('certificate_count')}</p>
                </div>
            </div>
        </div>
        <div class={style.contentRight}>
            <img src={RightBlob} class={style.maxWidth100} alt="right_blob">
            <div class={style.infoBlock}>
                <img  class={style.prizeBox} src={PrizeBox} alt="Prize Box">
                <div class={style.infoText}>
                    <h4 class={style.infoHeader}>{$_('gift_set_info')}</h4>
                    <p class={style.infoBody}>{$_('gift_set_count')}</p>
                </div>
            </div>
        </div>
    </div>
</section>

