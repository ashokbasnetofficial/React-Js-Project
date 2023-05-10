import Footerlink from "./Footerlink";
import './footerlink.css';
const language_list = [
    { "language": "English (US)", "url": "https://www.facebook.com/" },
    { "language": "Español", "url": "https://es-la.facebook.com/" },
    { "language": "Français (France)", "url": "https://fr-fr.facebook.com/" },
    { "language": "Deutsch", "url": "https://de-de.facebook.com/" },
    { "language": "Italiano", "url": "https://it-it.facebook.com/" },
    { "language": "Português (Brasil)", "url": "https://pt-br.facebook.com/" },
    { "language": "العربية", "url": "https://ar-ar.facebook.com/" },
    { "language": "हिन्दी", "url": "https://hi-in.facebook.com/" },
    { "language": "中文(简体)", "url": "https://zh-cn.facebook.com/" },
    { "language": "日本語", "url": "https://ja-jp.facebook.com/" }
]


const facebookUrls = [
    { name: "Sign Up", url: "https://www.facebook.com/r.php" },
    { name: "Log In", url: "https://www.facebook.com/login/" },
    { name: "Messenger", url: "https://www.messenger.com/" },
    { name: "Facebook Lite", url: "https://www.facebook.com/lite/" },
    { name: "Watch", url: "https://www.facebook.com/watch/" },
    { name: "Places", url: "https://www.facebook.com/places/" },
    { name: "Games", url: "https://www.facebook.com/games/" },
    { name: "Marketplace", url: "https://www.facebook.com/marketplace/" },
    { name: "Meta Pay", url: "https://www.meta.com/pay/" },
    { name: "Meta Store", url: "https://www.meta.com/store/" },
    { name: "Meta Quest", url: "https://www.meta.com/quest/" },
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "Bulletin", url: "https://www.facebook.com/bulletin/" },
    { name: "Fundraisers", url: "https://www.facebook.com/fundraisers/" },
    { name: "Services", url: "https://www.facebook.com/services/" },
    { name: "Voting Information Center", url: "https://www.facebook.com/votinginfo/" },
    { name: "Privacy Policy", url: "https://www.facebook.com/policy.php" },
    { name: "Privacy Center", url: "https://www.facebook.com/help/privacy/" },
    { name: "Groups", url: "https://www.facebook.com/groups/" },
    { name: "About", url: "https://www.facebook.com/about/" },
    { name: "Create Ad", url: "https://www.facebook.com/ads/create/" },
    { name: "Create Page", url: "https://www.facebook.com/pages/create/" },
    { name: "Developers", url: "https://developers.facebook.com/" },
    { name: "Careers", url: "https://www.facebook.com/careers/" },
    { name: "Cookies", url: "https://www.facebook.com/policies/cookies/" },
    { name: "Ad choices", url: "https://www.facebook.com/about/ads/" },
    { name: "Terms", url: "https://www.facebook.com/terms.php" },
    { name: "Help", url: "https://www.facebook.com/help/" },
    { name: "Contact", url: "https://www.facebook.com/help/contact/" },
    { name: "Uploading & Non-Users", url: "https://www.facebook.com/help/133008487100948" }];
const Footer = () => {
        
    return (
        <div className="footer container-fluid py-3">
            <div className="container">
            <div className="column">
               {
                language_list.map((element,key)=>{
                    return <Footerlink  url ={element.url} key={key} name ={element.language}/>
                })
               }
               </div>
               <hr />
               <div className="column">
               {
                facebookUrls.map((element,key)=>{
                    return <Footerlink  url ={element.url} key={key} name ={element.name}/>
                })
               }
               </div>
            </div>

        </div>
    )
}
export default Footer;