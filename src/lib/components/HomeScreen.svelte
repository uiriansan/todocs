<script lang="ts">
    import { Titlebar } from 'components';
    import { TitleLabel } from 'components'
    import { AppScreens } from '$lib/types';
    import TitlebarButton from './TitlebarButton.svelte';

</script>

<Titlebar current_screen={AppScreens.HOME}>
    <TitleLabel>ToDocs</TitleLabel>
</Titlebar>
<main>
    <div class="main-container">
        <div class="home-header">
            <h4>Projects</h4>
            <div class="header-actions">
                <TitlebarButton icon="material-symbols:add" background_color="var(--primary-color)"/>
            </div>
        </div>
    </div>
</main>

<style>
    main {
        padding: var(--out-padding);
        padding-top: 0;
        background-color: var(--background-frame);
        width: 100%;
        height: 100%;
        margin: 0;
        box-sizing: border-box;
        position: relative;
    }

    .main-container { 
        width: 100%;
        height: calc(100% - 45px);
        background-color: var(--background-frame);
        margin: 0;
        display: block;
        position: relative;
        padding: 0 35px;
        box-sizing: border-box;
    }

    .home-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
</style>