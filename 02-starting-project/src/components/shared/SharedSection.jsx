function SharedSection({title, children, ...props}){
    return (
        <section {...props}>
            <h2>{title}</h2>
            {/* as I have a children prop that may be a section, menu or article and may be other html tagsI will use children  */}
            {children}
        </section>
    )
}
export default SharedSection