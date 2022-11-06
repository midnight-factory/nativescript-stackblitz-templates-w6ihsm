<script>
    import { onMount } from 'svelte'
    import { user, settings } from '@/lib/stores'
        
    // console.log($settings.search.channel)
    let pusher
    let pusherSubs = { channel: undefined, game: undefined }
    let isChannelUpToDate = false
    
    onMount(async () => {
        pusher = Pusher.getInstance();

        await pusher.init({
            apiKey: process.env.PUBLIC_PUSHER_APP_KEY,
            cluster: process.env.PUBLIC_PUSHER_CLUSTER
        });


        await pusher.connect()

        // channel names are ${channelId}.status
        handleSubscriptions()
    })

    function handleSubscriptions(){
        pusher.unsubscribe($settings.search.channel.id)
        pusherSubs.channel = await pusher.subscribe({
            channelName: ,
            onEvent: (event) => {
                console.log(`onEvent: ${event}`);
            };
        })
    }
</script>

<page class="" actionBarHidden="true">
    <label text="Search" class="text-center text-2xl mt-5">
   
</page>