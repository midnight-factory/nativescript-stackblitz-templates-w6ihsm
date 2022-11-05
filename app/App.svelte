<script>
    import { navigate } from 'svelte-native'

    import { onMount } from 'svelte'
    import { user } from './lib/stores'

    // import { evalFQLCode } from './lib/fauna/src/fql.ts'
    import SplashScreen from '@/components/SplashScreen.svelte'
    import Login from '@/components/Login.svelte'
    import Home from '@/components/Home.svelte'

    onMount(() => {
        user.subscribe(x => {
            console.log('checking user' , x)
            if(x === null){
                console.log('no user => navigating to login')
                navigate({ page: Login, transition: false })
                return
            }

            // // TODO check if token is still valid ?
            console.log('user is there => navigating to Home')
            navigate({ page: Home, transition: false })
        })
    })
</script>

<frame id="root" defaultPage={SplashScreen}></frame>