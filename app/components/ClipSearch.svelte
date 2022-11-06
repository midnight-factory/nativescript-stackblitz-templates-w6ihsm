<script>
    import { onMount } from 'svelte'
    import { user, settings } from '@/lib/stores'
    import { TNSPusher } from '@triniwiz/nativescript-pusher-channels';

    // console.log($settings.search.channel)
    let pusherSubs = { channel: undefined, game: undefined }
    let isChannelUpToDate = false
    
    onMount(() => {
        console.log(process.env.PUBLIC_PUSHER_APP_KEY)
        // let pusher = new TNSPusher(process.env.PUBLIC_PUSHER_APP_KEY);
        // pusher.connection.bind( 'error', err => {
        //     console.log(err)
        // })

        const socket = new TNSPusher( process.env.PUBLIC_PUSHER_APP_KEY, {
            cluster: process.env.PUBLIC_PUSHER_CLUSTER,
        });
        console.log('tns2')

        // const channel = socket.subscribe('twitch.clipId.12826');
        // channel.bind('twitch.clipId.12826', function (data) {
        //     console.log(data.message);
        // });
        // pusher = Pusher.getInstance();

        // await pusher.init({
        //     apiKey: process.env.PUBLIC_PUSHER_APP_KEY,
        //     cluster: process.env.PUBLIC_PUSHER_CLUSTER
        // });

        // await pusher.connect()

        // // channel names are ${channelId}.status
        // await handleSubscriptions()
        // console.log('mounted')
    })

    // async function handleSubscriptions(){
    //     let channelName = `twitch.clipId.${$settings.search.channel.id}`
    //     pusher.unsubscribe(channelName)
    //     pusherSubs.channel = await pusher.subscribe({
    //         channelName,
    //         onEvent: (event) => {
    //             console.log('test')
    //             console.log(`onEvent: ${event}`);
    //         }
    //     })
    // }
</script>

<page class="" actionBarHidden="true">
    <label text="Search" class="text-center text-2xl mt-5">
   
</page>