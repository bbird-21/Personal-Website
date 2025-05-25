const ContactItem = ({ icon, text, link, alt }) => (
  <div className="flex gap-2 text-neutral-300 hover:underline">
    <img src={icon} className="w-5 h-5" alt={alt} />
    {link ? <a href={link} target="_blank" rel="noopener noreferrer">{text}</a> : <span>{text}</span>}
  </div>
);

export default ContactItem;
