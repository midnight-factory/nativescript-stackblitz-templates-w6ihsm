<script>
    import { Observable } from "@nativescript/core"

    import { onMount } from "svelte";
    import { closeModal } from "svelte-native";
   
    let detect = '/native?token='

    onMount(() => {
         
    })
    
    function loaded(args){
        let page = args.object;
        let webView = page.getViewById('webview');

        webView.on('loadStarted', (e) => {
            let { url } = e

            // console.log(e.object)
            if(url.indexOf(detect) !== -1) {
                let params = new URL(url)
                let data = {
                    token: url.searchParams.get('token'),
                    channel: ""
                }
                closeModal({token})
            }
        })
    }
</script>

<page on:loaded={loaded}>
    <webView id="webview" src="https://dev.tower-up.stream/native" />
</page>