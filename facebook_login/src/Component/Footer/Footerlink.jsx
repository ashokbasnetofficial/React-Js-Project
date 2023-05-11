

const Footerlink = ({url,key,name}) => {
     return (
         <a
           key={key}
           href={url}
           target="_blank"
           className="link-secondary px-2"
           rel="noopener noreferrer">{name}</a>
 )                  
}
export default Footerlink;