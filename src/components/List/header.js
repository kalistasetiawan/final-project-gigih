function header() {
    return (
        <div className="Header">
            <p><input type="text" placeholder="Title" minlength="10"/></p>
            <p><input type="text" id="desc" placeholder="Description" minlength="20"/></p>
        </div>
    )
}

export default header;