<script lang="ts">
    import { HomeScreen } from 'components';
    import { ProjectScreen } from 'components';
    import { Window } from '@tauri-apps/api/window';
    import { SettingsScreen } from 'components';

    import { AppScreens } from '$lib/types';
    let currentWindow = AppScreens.PROJECT;
    let maximized = false;

    const appWindow = new Window('main');
    
    // remove border radius when maximized
    appWindow.onResized(async () => {
        maximized = await appWindow.isMaximized();
    });

    // import { Shortcuts } from '$lib/shortcut';

    // function test() {
    //     console.log('this is a test!');
    // }

    // const test_shortcut = new Shortcuts('TEST', 'Ctrl+KeyY', test).register();
    // const ad_shortcut = new Shortcuts('TEST2', 'Ctrl+ArrowRight', () => {
    //     console.log('ádasdas');
    // }).register();
    // const sdd_shortcut = new Shortcuts('TEST3', 'Alt+ArrowRight', () => {
    //     console.log('ffdsdf ere e');
    // }).register();

    
    // Shortcuts.handle();
</script>

<div class:maximized id="app">
    {#if currentWindow == AppScreens.HOME}
        <HomeScreen />
    {:else if currentWindow == AppScreens.PROJECT}
        <ProjectScreen />
    {:else}
        <SettingsScreen />
    {/if}
</div>