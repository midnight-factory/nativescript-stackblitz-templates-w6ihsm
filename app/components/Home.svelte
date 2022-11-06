<script>
    import Dashboard from '@/components/Dashboard.svelte'
    import Studio from '@/components/Studio.svelte'
    import Multichat from '@/components/Multichat.svelte'
    import ClipSearch from '@/components/ClipSearch.svelte'
    
    import { navigate } from 'svelte-native'

    import HouseImg from '@/components/images/HouseImg.svelte'
    import MultichatImg from '@/components/images/MultichatImg.svelte'
    import StudioImg from '@/components/images/StudioImg.svelte'
    import TwitchClipImg from '@/components/images/TwitchClipImg.svelte'

    let pageToComponent = {
        home: Dashboard,
        studio: Studio,
        multichat: Multichat,
        clipSearch: ClipSearch,
    }

    function triggerNav(pageName){
        console.log(pageName)
        navigate({ 
            page: pageToComponent[pageName], 
            frame: "app",
            transition: { name: "slide" }
        })
    }
</script>

<page actionBarHidden="true">
    <dockLayout class="">
        <flexboxLayout dock="bottom" class="h-16 items-center justify-between px-2">
            <flexboxLayout class="text-xs text-gray-600">
                <flexboxLayout class="flex-col p-4" on:tap={() => triggerNav('home')}>
                    <HouseImg width="18" height="18" />
                    <label text="Home"/>
                </flexboxLayout>
                <flexboxLayout class="flex-col p-4">
                    <TwitchClipImg width="18" height="18" on:tap={() => triggerNav('clipSearch')}/>
                    <label text="Clip Search"/>
                </flexboxLayout>
            </flexboxLayout>
            <flexboxLayout class="">
                <flexboxLayout class="flex-col p-4">
                    <MultichatImg width="18" height="18" on:tap={() => triggerNav('multichat')}/>
                    <label text="Multichat"/>
                </flexboxLayout>
                <flexboxLayout class="flex-col p-4">
                    <StudioImg width="18" height="18" on:tap={() => triggerNav('studio')}/>
                    <label text="Studio"/>
                </flexboxLayout>
            </flexboxLayout>
        </flexboxLayout>
        <frame id="app" dock="top" defaultPage={Dashboard}></frame>
    </dockLayout>
</page>