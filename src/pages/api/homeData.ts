export interface  Channel {
    name: string,
    avatarUrl: string, 
    color: string
    followers: number,
    about: string,
    socialLinks: SocialLink[],
    live: Live
}

interface SocialLink {
    title: string,
    url: string,
    type: string
}

export interface Live{
    title: string,
    category: string,
    tags: string[],
    viewers: number,
    onLive: boolean,
    thumbUrl: string,
    videoUrl: string,
}


export const Channels: Channel[] = [
    { 
        name:  "Vitongemaplys",
        avatarUrl: "https://i.pinimg.com/originals/61/35/51/613551a26605a143deb49e1eca8fab4b.jpg",
        color: '#6FBACA',
        followers: 8200,
        about: "Mais um guerreiro da Maior Tribo do Mundo! Atuei como jogador profissional de CS por quase uma década, fui o primeiro treinador a ser campeão do mundo em 2007 com o MIBR. Acertei um pouco, errei muito, ganhei bastante coisa e tbm perdi demais! Atualmente faço live todos os dias aqui na Twitch!",
        socialLinks: [
            {
                title: "Youtubil",
                url: "youtube.com/gemaplys",
                type: "youtube",
            }
        ],
        live: {
            title: "Bonda 4",
            category: "Just Chatting",
            tags: ["portuguese", "music"],
            viewers: 1020076,
            onLive: true,
            thumbUrl: "https://ychef.files.bbci.co.uk/1280x720/p0clnml6.jpg",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "JogandoFoddaci",
        avatarUrl: "https://yt3.ggpht.com/ytc/AGIKgqNHChKV9SqX_P4saFuBbMj5rppNCzBxNMQYvtdg=s68-c-k-c0x00ffffff-no-rj",
        color: '#FF022F',
        followers: 60000,
        about: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quaerat harum facere iusto vitae, nihil magni ipsum, quisquam eveniet dolor laudantium! Corrupti nostrum asperiores deserunt nobis. Possimus, nulla. Eius, cupiditate.",
        socialLinks: [
            {
                title: "TokiTik",
                url: "youtube.com/gemaplys",
                type: "tiktok",
            },
            {
                title: "youtube",
                url: "youtube.com/gemaplys",
                type: "youtube",
            }
        ],
        live: {
            title: "O gato do GTA San Andreas - Manhunt 2",
            category: "Manhut",
            tags: ["portuguese", "gameplay"],
            viewers: 10276,
            onLive: true,
            thumbUrl: "https://i.ytimg.com/vi/nAOBVdwt7ko/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBKwNYdJ4waC_HEVfrPlCqwU2CLOw",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
  ]

export function FilterChannelsByName(channelName: string){
    const channelFiltered = Channels.filter(channel => {
        // console.log(cha)
        return channel.name.toLowerCase() === channelName.toLowerCase()
    })

    return channelFiltered
}
  