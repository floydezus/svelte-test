<script>
    import { _ } from 'svelte-i18n';
    import classnames from 'classnames';

    import style from './index.pcss';
    import HeaderTitle from '../header-title/index.svelte'
    import SmallBlob from '../../assets/images/third-screen/blob-small.svg';
    import MainBlob from '../../assets/images/third-screen/blob-main.svg';
    import Racoon from '../../assets/images/third-screen/racoon.png';
    import WashingMachine from '../../assets/images/third-screen/washing-machine.png'
</script>

<section>
    <HeaderTitle header={$_('fund')} />
    <div class={style.container}>
        <div class={style.contentSmall}>
            <img class={style.smallBlob} src={SmallBlob} alt="small" />
            <div class={style.contentWrapper}>
                <h4 class={style.contentTitle}>{$_('super_prize')}</h4>
                <ul class={style.contentList}>
                    <li class={style.listItem}>{$_('washing_machine')}</li>
                    <li class={style.listItem}>{$_('photo_shoot')}</li>
                </ul>
            </div>

        </div>
        <div class={style.contentBig}>
            <img src={MainBlob} alt="big" class="{classnames(style.contentBlob, style.mainBlob)}"/>
            <div class={style.textContent}>
                <h4 class={style.contentTitle}>
                    {$_('how_won')}
                </h4>
                <p class={style.contentInfo}>
                    {$_('won_conditions')}
                </p>
            </div>
            <img id="racoon"
                 class="{classnames(style.contentImg,style.firstPlane, style.racoon)}"
                 src={Racoon}
                 alt="Racoon" />
            <img
                id="washingMachine"
                class="{classnames(style.contentImg, style.washingMachine)}"
                src={WashingMachine} alt="Washing machine"
            />
        </div>
    </div>
</section>

