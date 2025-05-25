const ConnectItem = ({ title, icon, link, alt }) => {
	return (
		<div className="gap-10">
			<a
			href={link}
			target="_blank"
			rel="noopener noreferrer"
			>
				<img
				src={icon}
				alt={alt}
				title={title}
				className="w-6 h-6 opacity-70 hover:opacity-100"/>
			</a>
		</div>
	)
}

export default ConnectItem;
