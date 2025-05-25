const FooterSection = ({ title, children }) => {
	return (
		<div className="flex flex-col gap-y-5">
			<div className="text-white text-xl font-bold"> {title} </div>
			{children}
		</div>
	)
};

export default FooterSection;
