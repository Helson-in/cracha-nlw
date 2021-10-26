      const linksSocialMedia = {
        github : "helson-in",
        youtube : "UCE0BiyJ9tJ7S_E-MH7lNC0Q",
        facebook : "helson.goncalves.98",
        instagram : "hellsinho",
        twitter : "helson204"
      }

      function changeSocialMediaLinks(){
        for (let li of socialLinks.children){
          const social = li.getAttribute("class")
          
          li.children[0].href = 'https://${social}.com/${linksSocialMedia[social]}'       
        }
      };

      changeSocialMediaLinks()
      
      function getGithubProfileInfos(){
        const url = `https://api.github.com/users/${linksSocialMedia.github}`

        fetch(url).then()
      }