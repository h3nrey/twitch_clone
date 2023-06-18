import { FacebookLogo, InstagramLogo, LinkedinLogo, TiktokLogo, TwitterLogo, YoutubeLogo } from "phosphor-react";

enum SocialMedia {
    instagram = "instagram",
    youtube = "youtube",
    facebook = "facebook",
    twitter = "twitter",
    tiktok = "tiktok",
    linkedin = "linkedin"
}

export default function SocialIcon({ type }: { type: string }) {
    const icon = () => {
        switch (type) {
            case SocialMedia.instagram:
                return <InstagramLogo weight="fill" size={20} />

            case SocialMedia.youtube:
                return <YoutubeLogo weight="fill" size={20} />

            case SocialMedia.facebook:
                return <FacebookLogo weight="fill" size={20} />

            case SocialMedia.twitter:
                return <TwitterLogo weight="fill" size={20} />

            case SocialMedia.tiktok:
                return <TiktokLogo weight="fill" size={20} />

            case SocialMedia.linkedin:
                return <LinkedinLogo weight="fill" size={20} />

            default:
                return <span>Dont have this social media</span>
        }
    }
    return (
        <>
            {icon()}
        </>
    )
}