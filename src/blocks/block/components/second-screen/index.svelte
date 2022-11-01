<script>
    import style from './index.pcss';
    import { _ } from 'svelte-i18n';
    import HeaderTitle from '../header-title/index.svelte';
    import LeftBlob from '../../assets/images/second-screen/blob_left.svg';
    import CenterBlob from '../../assets/images/second-screen/blob-center.svg';
    import RightBlob from '../../assets/images/second-screen/blob-right.svg';
    import IconCell from '../../assets/icons/icon-cell.svg';
    import IconPost from '../../assets/icons/icon-post.svg';
    import IconShop from '../../assets/icons/icon-shopping.svg';
    import BlobInfo from '../blob-information/index.svelte';
    import { Swiper, SwiperSlide } from 'swiper/svelte';
    import 'swiper/swiper-bundle.css';


</script>

<section>
    <HeaderTitle header={$_('terms_promotion')} />
    <div class={style.blobsContainer}>
        <Swiper
                pagination
                class={style.mySwiper}
                spaceBetween={10}
                slidesPerView={1}
                scrollbar={{ draggable: true, clickable: true }}
                on:slideChange={() => console.log('slide change')}
                on:swiper={(e) => console.log(e.detail[0])}
        >
            <SwiperSlide>
                <BlobInfo
                    icon={IconCell}
                    blobSrc={LeftBlob}
                    mainInfo={$_('buy_info')}
                    extraInfo={$_('promotion_time')}
                />
            </SwiperSlide>
            <SwiperSlide>
                <BlobInfo
                    icon={IconPost}
                    blobSrc={CenterBlob}
                    mainInfo={$_('vk_info')}
                    extraInfo={$_('hashtag')}
                />
            </SwiperSlide>
            <SwiperSlide>
                <BlobInfo
                    icon={IconShop}
                    blobSrc={RightBlob}
                    mainInfo={$_('chance')}
                    extraInfo={$_('promotion_info')}
                />
            </SwiperSlide>
        </Swiper>

    </div>

</section>

