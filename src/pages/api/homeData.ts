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
        name:  "Porco",
        avatarUrl: "https://i0.wp.com/scriiipt.com/wp-content/uploads/2022/04/Marco-Pagot-Porco-Rosso.png?resize=640%2C369&ssl=1",
        color: '#6FBACA',
        followers: 300,
        about: "Mais um guerreiro da Maior Tribo do Mundo! Atuei como jogador profissional de CS por quase uma década, fui o primeiro treinador a ser campeão do mundo em 2007 com o MIBR. Acertei um pouco, errei muito, ganhei bastante coisa e tbm perdi demais! Atualmente faço live todos os dias aqui na Twitch!",
        socialLinks: [
            {
                title: "Youtubil",
                url: "youtube.com/gemaplys",
                type: "youtube",
            }
        ],
        live: {
            title: "Assistindo Princesa Mononoke",
            category: "Just Chatting",
            tags: ["Ghibli", "Anime"],
            viewers: 1020076,
            onLive: true,
            thumbUrl: "https://ychef.files.bbci.co.uk/1280x720/p0clnml6.jpg",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "Gaules",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-70x70.png",
        color: '#0083D3',
        followers: 3900000,
        about: "Mais um guerreiro da Maior Tribo do Mundo! Atuei como jogador profissional de CS por quase uma década, fui o primeiro treinador a ser campeão do mundo em 2007 com o MIBR. Acertei um pouco, errei muito, ganhei bastante coisa e tbm perdi demais! Atualmente faço live todos os dias aqui na Twitch!",
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
            title: "LOUD X ColdZ [final]",
            category: "CS:GO",
            tags: ["esports", "fps"],
            viewers: 20070,
            onLive: true,
            thumbUrl: "https://i.ytimg.com/vi/vl6WMNEDK9g/maxresdefault.jpg",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "Cellbit",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/0595cdd0-65a7-4fa3-996d-323cf3a54be1-profile_image-70x70.png",
        color: '#F02727',
        followers: 3000000,
        about: "Mais um guerreiro da Maior Tribo do Mundo! Atuei como jogador profissional de CS por quase uma década, fui o primeiro treinador a ser campeão do mundo em 2007 com o MIBR. Acertei um pouco, errei muito, ganhei bastante coisa e tbm perdi demais! Atualmente faço live todos os dias aqui na Twitch!",
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
            title: "RPG NERD",
            category: "Just Talking",
            tags: ["rpg", "portuguese"],
            viewers: 4100,
            onLive: true,
            thumbUrl: "https://sm.ign.com/ign_br/screenshot/default/cellbit-game-indie-br_vuew.jpg",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "ColoniaContraAtacaLive",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/61a4f302-ba73-4fa0-b41c-123502163fd7-profile_image-70x70.png",
        color: '#000000',
        followers: 108000,
        about: "ColoniaContraAtacaLive streams DRAGON BALL Z: KAKAROT, Retro and Bramble: The Mountain King.",
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
            title: "Speedrunzinha superman 64 any%",
            category: "Superman 64",
            tags: ["retro", "speedrun"],
            viewers: 10200,
            onLive: true,
            thumbUrl: "https://i.ytimg.com/vi/cLU655IifQM/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDQnGgpA6D8Zaw9nxCq6llXdjj4DQ",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },

    // outro
    { 
        name:  "CanalBrushRush",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/6e72b27c-430f-446b-ba68-36ecf855e56f-profile_image-70x70.png",
        color: '#0083D3',
        followers: 42000,
        about: "Pintura, desenho, 3D e papos filosóficos!",
        socialLinks: [
            {
                title: "Twitter",
                url: "https://twitter.com/CanalBrushRush",
                type: "twitter",
            },
            {
                title: "Youtube",
                url: "https://www.youtube.com/brushrush",
                type: "youtube",
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/gui.gfreitas/",
                type: "instagram",
            },
        ],
        live: {
            title: "Desenhando da cabeça o XLR8 e a Vampira",
            category: "Just Talking",
            tags: ["Desenhando", "português"],
            viewers: 3300,
            onLive: true,
            thumbUrl: "https://i.ytimg.com/vi/ypFB20BRYOA/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBLSsxmbYADTg413ehSZLw6v9nf_g",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "Narrativando",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/98f18529-2289-4a00-a3e2-4683c927c3ce-profile_image-70x70.png",
        color: '#9147FF',
        followers: 8400,
        about: "Sou um youtuber que analisa animes, mangás e jogos de maneira técnica.Trabalho com narrativa e game design a aproximadamente 5 anos. Vou noobar demais.",
        socialLinks: [
            {
                title: "Twitter",
                url: "https://twitter.com/narrativando",
                type: "twitter",
            },
            {
                title: "youtube",
                url: "https://www.youtube.com/channel/UCdG_1TD3L_vRaXZOWDide_Q",
                type: "youtube",
            }
        ],
        live: {
            title: "Analisando o arco convicção de Berserk",
            category: "Just Talking",
            tags: ["Animes"],
            viewers: 45000,
            onLive: true,
            thumbUrl: "https://i.ytimg.com/vi/k_Epf1JBJ0g/hq720.jpg?sqp=-oaymwEXCNAFEJQDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBeQQMld8EzHkzSGm1WpWNnmVVSPg",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "Alanzouka",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/64d44235-1dee-4bca-95da-bee1ee96eea3-profile_image-70x70.png",
        color: '#9147FF',
        followers: 6500000,
        about: "To sempre jogando alguma coisa aí.",
        socialLinks: [
            {
                title: "Alan no Twitter",
                url: "https://twitter.com/alanzoka",
                type: "tiktok",
            },
            {
                title: "Alan no Youtube",
                url: "https://www.youtube.com/alanzoka",
                type: "youtube",
            },
            {
                title: "Alan no Instagram",
                url: "https://www.instagram.com/alanzoka/",
                type: "instagram",
            }
        ],
        live: {
            title: "b",
            category: "Only Up!",
            tags: ["games", "portuguese"],
            viewers: 500400,
            onLive: true,
            thumbUrl: "https://i.ytimg.com/vi/IbSmFov5K0w/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBIGhp74wMiem5p9SygVNx0dJVetg",
            videoUrl: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        }
    },
    { 
        name:  "YODA",
        avatarUrl: "https://static-cdn.jtvnw.net/jtv_user_pictures/e5e89aba-723b-4ba1-852c-d8fba19b1da1-profile_image-70x70.png",
        color: '#7A87C9',
        followers: 2400012,
        about: "CEO da SehLoiro, apresentador do PlaYlist, CEO Bazar do YoDismo, cupido CASOS de TRABSON, artilheiro FUT DOS STREAMERS, 1 CBLOL, invicto no MSI, viciado em MMO, chat nº 1 pela Forbeloiros, 100% donates p/ YoGamers do Bem, recordista em venda de bonés, e pros íntimos, Anselmo. Nós somos os antigos Y!",
        socialLinks: [
            {
                title: "Twitter",
                url: "https://twitter.com/StoneDYooDa",
                type: "twitter",
            },
            {
                title: "Instagram",
                url: "https://www.instagram.com/stonedyoda",
                type: "instagram",
            }
        ],
        live: {
            title: "LEAGUE ATE AS 15h",
            category: "League Of Legends",
            tags: ["games"],
            viewers: 3225,
            onLive: true,
            thumbUrl: "https://static-cdn.jtvnw.net/cf_vods/d1m7jfoe9zdc1j/afff12e3aed1daa6528b_yoda_41587289705_1688378391//thumb/thumb0-320x180.jpg",
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
  