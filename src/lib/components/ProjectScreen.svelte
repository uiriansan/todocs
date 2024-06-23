<script lang="ts">
    import { Titlebar } from 'components';
    import { Sidebar } from 'components';
    import { TitleLabel } from 'components'
    import { AppScreens } from '$lib/types';

</script>

<Titlebar current_screen={AppScreens.PROJECT} >
    
</Titlebar>
<main>
    <div class="main-container">
        <Sidebar />
        
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
        background-color: var(--background-body);
        margin: 0;
        display: block;
        border-radius: var(--out-radius);
        position: relative;
    }
    /* .panel-content {
        width: 100%;
        height: 100%;
        background-color: grey;
        border: 2px solid green;
    } */
</style>