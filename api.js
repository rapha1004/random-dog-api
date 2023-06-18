document.querySelector('#fetch-dog').addEventListener('click', async () => {
    refreshDog()
 })
       async function refreshDog() {
     var fetchResult =  await fetch('https://random.dog/woof.json')
     var data = await fetchResult.json()

     if(data.url.includes('.mp4')) {
         refreshDog()
         return
     }

     document.getElementById('photo').src = data.url
     }

     refreshDog()