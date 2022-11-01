<script>
	import './utils/i18n';
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';

import Title from './components/title/index.svelte';
import FirstScreen from './components/first-screen/index.svelte';
import SecondScreen from './components/second-screen/index.svelte';
import ThirdScreen from './components/third-screen/index.svelte';
import FourthScreen from './components/fourth-screen/index.svelte';
import { getLoading } from './utils/loading';

import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/bundle';

let isLoading = true;

	onMount(() => {
  getLoading().then(value => {
    isLoading = value.isLoading;
  })
});
</script>

    <Title title="{$_('header.main_title')}" subtitle="{$_('header.main_subtitle')}"/>
    <FirstScreen
            infoText={$_('header.main_loading_text') }
            secondInfoText={$_('header.main_text')}
            buttonText="{$_('button_participate')}"
            isLoading={isLoading}
    />
    <!--{#if !isLoading }-->
        <SecondScreen />
        <ThirdScreen />
        <FourthScreen />
<!--    {/if}-->
