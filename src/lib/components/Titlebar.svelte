<script lang="ts">
    import { TitlebarButton } from "components";
    import { Window } from '@tauri-apps/api/window';
    import { AppScreens } from '$lib/types';
    import Icon from "@iconify/svelte";

    const appWindow = new Window('main');

    export let current_screen : AppScreens;
</script>

<div data-tauri-drag-region class="titlebar">
    <div id="titlebar-menu">
        <TitlebarButton icon="iconamoon:3d"/>
        
        {#if current_screen == AppScreens.PROJECT}
            <div class="layout-selector">
                <div class="layout-selector-icon">
                    <Icon icon="eva:layout-outline" inline />
                </div>
                <div class="layout-selector-label">
                    Diagram
                </div>
            </div>
        {/if}
    </div>
    <div id="titlebar-toolbar">
        <slot></slot>
    </div>
    <div id="titlebar-actions">
        <TitlebarButton icon="ci:remove-minus" on:click={() => {appWindow.minimize()}}/>
        <TitlebarButton icon="ci:dummy-square" on:click={() => {appWindow.toggleMaximize()}}/>
        <TitlebarButton icon="ci:close-md" on:click={() => {appWindow.close()}}/>
    </div>
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100vh;
    }

    .titlebar {
        width: 100%;
        height: 45px;
        padding: 0 5px;
        box-sizing: border-box;
        background-color: var(--background-frame);
        border-radius: var(--out-radius) var(--out-radius) 0 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    #titlebar-toolbar {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }
    #titlebar-toolbar * {
        
    }

    #titlebar-menu {
        display: flex;
        align-items: center;
        gap: 5px;
        width: 250px;
        flex-wrap: nowrap;
        min-width: min-content;
    }
    #titlebar-menu > .layout-selector {
        width: 100%;
        height: 35px;
        background-color: var(--background-frame);
        border-radius: var(--in-radius);
        line-height: 35px;
        font-size: var(--icon-size);
        display: flex;
        min-width: min-content;
        transition: .5s background-color;
        cursor: pointer;
    }
    #titlebar-menu > .layout-selector:hover {
        background-color: var(--background-body);
    }
    #titlebar-menu > .layout-selector > .layout-selector-icon {
        width: 35px;
        text-align: center;
    }
    #titlebar-menu > .layout-selector > .layout-selector-label {
        font-size: var(--font-size);
        padding-right: 12px;
        font-weight: normal;
    }

    #titlebar-actions {
        display: flex;
        text-align: center;
        flex-shrink: 0;
    }
</style>